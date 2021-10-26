import React, {useEffect, useState, useContext, useMemo, useRef } from "react"
import clsx from 'clsx'

import { MapConsumer, MapContainer, TileLayer, WMSTileLayer, Marker, Popup, useMap } from "react-leaflet"
import { LatLngExpression, latLng, latLngBounds, Map, featureGroup, LatLng } from "leaflet"

import DataGrid, {
    Column, 
    ColumnChooser, 
    ColumnFixing,
    SearchPanel,
    Selection,
    Sorting,
    RemoteOperations,
    Grouping,
    GroupPanel,
    Export,
    Pager,
    Paging
} from 'devextreme-react/data-grid'


// ------------------------
// Material
// ------------------------
import {  Accordion, AccordionSummary, AccordionDetails, Box, Button, Chip, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, FormControl, InputLabel, InputBase, List, ListItem, ListItemIcon, ListItemText, Select, Typography } from '@material-ui/core/'

import { Alert } from '@material-ui/lab'

// ------------------------
// Styles/Assets:
// ------------------------
import { useStyles } from './res.styles.js'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

// ------------------------
// Configuration
// ------------------------
import config from '../config'
import { arrayIsEmpty, checkFor, convertFromCamelCase, groupBy, isObjEmpty, objectHasKeys } from '../functions/formatFunctions'
import { splitUrlPathname } from '../functions/appFunctions'
import { componentSearch, researchDatasets, researchBorehole } from '../functions/searchFunctions'
import { capitalize, isEmpty, map } from "lodash"
// import { researchProjectSearch } from '../queries/searchQueries'

// ------------------------
// Context/Hooks
// ------------------------
import { SearchContext } from '../contexts/searchContext'
import { FilterContext } from '../contexts/filterContext'
import useFetchAPI from '../hooks/useFetchAPI'

// ------------------------
// Parts/Components
// ------------------------
import { AppSearchResults } from '../parts/appSearchResults'
import { AppBreadcrumbs } from '../parts/appBreadcrumbs'
// import MapWrapper from '../parts/mapWrpper'
import DescriptionsDialog from '../parts/descriptionsDialog'

export const DatasetUrl = (data) =>  
    <>
        <a 
            title={`URL for file ${data.data.fileName}`} 
            href={(!arrayIsEmpty(data.data.file)) ? `/${data.data.file[data.data.file.length - 2]}/${data.data.file[data.data.file.length - 1]}` : `#`} 
            target="_blank">
            { (!isEmpty(data.data.description) && !isEmpty(data.data.fileName)) ? `${data.data.description} - ${data.data.fileName}` : "" }
        </a>
    </>

export const IGSNUrl = (data) =>  
    <>
        <a 
            title={`URL for file ${data.data.igsn}`} 
            href={(!arrayIsEmpty(data.data.igsn)) ? `http://igsn.org/${data.data.igsn} ` : `#`} 
            target="_blank">
            { !isEmpty(data.data.igsn) ? data.data.igsn : "None" }
        </a>
    </>
    
const datasetColumns = ["description","keywords","url"]
const boreholeColumns = ["child","holeid","igsn","lid","location"]
const csdco = ['csdco:discipline', 'csdco:technique', 'csdco:investigators','csdco:repository','csdco:lab','csdco:funding','csdco:status', 'csdco:outreach','csdco:startdate','csdco:keywords','csdco:license']


const MapComponent = ({places, position}) => {
    const map = useMap()
    // let center = map.getCenter()
    if(!isObjEmpty(position)){
        // map.setView(position)
        map.setMaxBounds(position)
        console.log(places)
        console.log(position)
    }
    // console.log(center)
    return null
}

export const ResearchProject = (props) => {
    
    const classes = useStyles()
    const [checked, setChecked] = useState([]) // for one filter (array of...)
    const [expanded, setExpanded] = useState(0)
    const [open, setOpen] = useState(false);

    const [ searchState, searchDispatch ] = useContext(SearchContext)
    const [ filterState, filterDispatch ] = useContext(FilterContext)

    const [ fetchState, fetchData ] = useFetchAPI()
    
    const { page, env, match } = props
       
    const [ content, setContent ] = useState({})
    const [ borehole, setBorehole ] = useState([]) 
    const [ datasets, setDatasets ] = useState([]) 

    const [ datasetRows, setDatasetRows ] = useState([])
    const [ boreholeRows, setBoreholeRows ] = useState([])

    const [ groupedDatasets, setGroupedDatasets ] = useState([])

    const [ places, setPlaces ] = useState([])
    const [ mapHeight, setMapHeight ] = useState()

    const [zoom, setZoom] = useState(4)
    // const [bounds, setBounds] = useState({})
    const [position, setPosition] = useState([60.505, -135.09])
    const mapRef = useRef()

    const component = (page.path).split('/').filter(q => q != "")[0]
    const id = match.params.id
    const query = `${component}/${id}`

    const handleClickOpen = () => {
        setOpen(true)
      }
    
    // const allPlacesBounds = useMemo(() => { 
    //     // const bounds = latLngBounds()
    //     // places.forEach((place) => bounds.extend(place))
    //     // return bounds.pad(0.1)   
    // }, [places])

    const updateDimensions = () => {
        const height = (window.innerWidth >= 992) 
            ? window.innerHeight : 400 
        setMapHeight(height)
    }

    useEffect( () => {
        if(!isEmpty(places)){
            console.log(places)
            let currentBounds = latLngBounds()
            places.forEach(place => {
                console.log(place)
                currentBounds.extend(place)
            })

            console.log(currentBounds)
            console.log(places[0])
            
            // setPosition(places[0])
            setPosition(currentBounds)
        }
        // setZoom(10)
        
    }, [places])
    

    useEffect(() => {
        console.log(mapRef)
        const { current = {} } = mapRef

    }, [mapRef])



    useEffect(() => {
        console.log(map)        
    }, [map])

    // --------------------------
    // Fetch project content
    // --------------------------
    const getContent =  async (url="", body={}) => {
        await fetchData(url, body)
            .then(res => {
                // // if(!isEmpty(fetchState.data)){
                if(!isEmpty(res)){
                    setContent(res)
                    let currentPlaces = []
                    let geo = (res.location || res.spatialCoverage) 
                        ? ( (res.location && res.location.geo) ? res.location.geo : res.spatialCoverage.geo )
                        : []

                    if(!arrayIsEmpty(geo)){
                        geo.forEach((place) => {
                            currentPlaces.push([
                                place['https://schema.org/latitude'],
                                place['https://schema.org/longitude'] 
                            ])
                        })
                    }
                    setPlaces(currentPlaces)
                    // map.fitBounds(res.location)
                }
            }).catch(err => {
                console.log(err)
                setPlaces({})
            })
    }

    // --------------------------
    // Fetch datasets for project
    // --------------------------
    const getDatasets = async (url="", body={}) => {
        let currentData = []
        await fetchData(url,body)
            .then(res => {
                if(!isEmpty(res)){
                    console.log(res.results.bindings)
                    setDatasets((res.results.bindings) ? res.results.bindings : [])
                }  
            }).catch(err => {
                console.log(err)
                setDatasets({})
            }) 
        return currentData
    }

    // --------------------------
    // Fetch borehole data 
    // --------------------------
    const getBorehole = async (url="", body={}) => {
        let currentData = []
        await fetchData(url,body)
            .then(res => {
                if(!isEmpty(res)){
                    console.log(res.results)
                    setBorehole((res.results.bindings) ? res.results.bindings : [])
                }  
            }).catch(err => {
                console.log(err)
                setBorehole([])
            }) 
        return currentData
    }

    useEffect(() => {
        if(!arrayIsEmpty(datasets)){
            let currentGroupedDatasets = groupBy(datasetRows,'keywords')
            setGroupedDatasets(currentGroupedDatasets)
        }
    }, [datasetRows])

    useEffect(() => {
        if(!arrayIsEmpty(datasets)){
            let newRows = []
            datasets.forEach(item => {
                let splitChildUrl = (item.child.value) 
                    ? item.child.value.split('/').filter(q => q != "") 
                    : []
                let id = (!arrayIsEmpty(splitChildUrl))
                    ? splitChildUrl[splitChildUrl.length - 1]
                    : ""
                let splitFileUrl = (item.parturl.value) 
                    ? item.parturl.value.split('/').filter(q => q != "") 
                    : []
                
                newRows.push({
                    "id": id,
                    "description": (item.desc.value) ? item.desc.value : "",
                    "keywords": (item.kw.value) ? (item.kw.value).replace('scientific drilling geoscience', '') : "",
                    "url": (item.url.value) ? splitUrlPathname(item.url.value) : "",
                    "name": (item.name.value) ? item.name.value : "",
                    "fileName": (item.part.value) ? item.part.value : "",
                    "file": splitFileUrl
                })
                
            })
            setDatasetRows(newRows) 
        }

    }, [datasets])

    useEffect(() => {
        if(!arrayIsEmpty(borehole)){
            let newRows = []
            borehole.forEach(item => {
                console.log(splitUrlPathname(item.child.value))
                newRows.push({
                    "child": (item.child.value) ? splitUrlPathname(item.child.value) : "",
                    "holeid": (item.holeid.value) ? item.holeid.value : "",
                    "igsn": (item.igsn.value) ? item.igsn.value : "",
                    "lid": (item.lid.value) ? item.lid.value : "",
                    "location": (item.location.value) ? item.location.value : ""
                })
                
            })
            setBoreholeRows(newRows) 
        }

    }, [borehole])

    useEffect(() => {
        (async () => {
            if(!isEmpty(content)){
                console.log('content')
                console.log(content)
                if(content['@id'] && isEmpty(datasets)){
                    const {url, context} = researchDatasets(env.graph, query)
                    console.log(url, context)
                    await getDatasets(url,context)
                }
                if(content['@id'] && isEmpty(borehole)){
                    const {url, context} = researchBorehole(env.graph, query)
                    console.log(url, context)
                    await getBorehole(url,context)
                }
            }
        })()
    }, [content])

    useEffect(() => {
        
        (async () => {
            if(match.params.id && !isEmpty(match.params.id)){
                
                const {url, body} = componentSearch(env.ocd, query)
                console.log(url, body)
                
                await getContent(url,body)
                
            } else {
                setContent(null)
            }

            updateDimensions()
        
        })()
    
    }, [])

    return(
        <>        
            <AppBreadcrumbs {...props} name={match.params.id}/>
            <Box 
                bgcolor={'inherit'} 
                position={'relative'}
                p={0} 
                boxShadow={2} 
                borderRadius={4} 
                // className={clsx(classes.boxSearchResults)}
            >   
                { (content && !isObjEmpty(content)) ? 
                    <>
                        <Box p={4} justifyContent={'center'} alignItems={'center'} bgcolor={'grey.100'}>
                            <Typography variant={'h5'} component={'h2'}>
                                {content['name']}
                            </Typography>
                            <Box my={2}>
                                <Chip                                     
                                    label={
                                        <>
                                            <Typography variant={'subtitle2'} component={'span'}>
                                                Project ID: 
                                            </Typography>
                                            &nbsp; {content['csdco:expedition']}
                                        </>
                                    }  
                                    variant={'outlined'} />
                            </Box>
                            <Box p={0}>
                                <Typography variant={'body2'} component={'p'} style={{ lineHeight: '1.6' }}>
                                    {content['csdco:abstract']}
                                </Typography>
                            </Box>
                        </Box>

                        <Grid container>
                            <Grid xs={12} sm={12} item key={`map-section`}>
                                <Box height={'100%'} style={{ overflow: 'hidden'}}>
                                    { ( (places && !arrayIsEmpty(places) && places.length > 0) ) 
                                        ?
                                        <MapContainer
                                            ref={mapRef}
                                            className={classes.leafletContainer}
                                            style={{ height: mapHeight }}
                                            center={position} 
                                            zoom={zoom}
                                            // bounds={position}
                                        >
                                            
                                            <MapComponent places={places} position={position} />

                                            { places.map( (place, index) => 
                                                <>
                                                {/* {console.log(place)} */}
                                                    <Marker
                                                        key={`place-${index}`}
                                                        position={place} 
                                                        // eventHandlers={{ click: () => showPreview(place) }}
                                                    >
                                                        {/* show place's title on hover the marker */}
                                                        {/* <Tooltip>{place.title}</Tooltip>  */}
                                                        <Popup> 
                                                            <Typography variant="subtitle1" component="p">
                                                                {`Latitude: ${place[0]}, Longitude: ${place[1]}`}
                                                            </Typography>  
                                                        </Popup>
                                                    </Marker>
                                                    
                                                </>
                                            ) }
                                            
                                            <WMSTileLayer
                                                url={'https://www.gmrt.org/services/mapserver/wms_merc'}
                                                layers={'topo'}
                                                format={'jpeg'}
                                                SRS={'EPSG:4326'}
                                                wrapX={true}
                                                attribution='&copy; <a href="http://gmrt.org/copyright">GMRT</a> contributors'
                                            />

                                        </MapContainer>
                                    : 
                                        <Alert severity={'info'}>
                                            'No markers available for this project.'
                                        </Alert>  
                                    }
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={12} item key={`metadata-section`}>
                                <List component="ul" aria-label="main mailbox folders">
                                    { Object.entries(content).map(([key,val]) => {
                                        if(csdco.includes(key) && !isEmpty(val)){

                                            return(
                                                <ListItem 
                                                    key={`list-item-${key}`} 
                                                    divider 
                                                    disableGutters
                                                    style={{ padding: '8px 16px' }}    
                                                >
                                                    {/* <ListItemIcon 
                                                        title={`${key.replace('csdco:','')}`}
                                                        color={'secondary'}
                                                        
                                                        >
                                                        {capitalize((key.replace('csdco','')).slice(1,2))}
                                                    </ListItemIcon> */}
                                                    <ListItemText 
                                                        primary={ (key.includes('date')) 
                                                            ? new Date().toISOString().split('T')[0] 
                                                            : val } 
                                                        secondary={ capitalize( (key.replace('csdco:','')) ) }
                                                    />
                                                    
                                                </ListItem>
                                            )
                                        }
                                    })}
                                </List>
                            </Grid>
                        </Grid>

                        {!(isObjEmpty(groupedDatasets)) ? 
                            <Box p={3} bgcolor={'grey.100'}>
                                <Box py={2} display={'flex'} width={'100%'} flexDirection={'row'}>
                                    <Typography variant={'h6'} component={'h4'} style={{ flex: 'auto' }}>
                                        File Package(s)
                                    </Typography>
                                    <Button
                                        variant={'outlined'}
                                        size={'small'}
                                        color={'primary'}
                                        onClick={handleClickOpen}
                                        style={{ margin: '0 8px', justifySelf: 'flex-end' }}
                                    >
                                        Descriptions
                                    </Button>
                                </Box>

                                <DescriptionsDialog open={open} setOpen={setOpen}/>

                                { Object.entries(groupedDatasets).map(([datasetKey,datasetValue],datasetIndex) => 
                                    <Accordion>
                                        {console.log(datasetKey, datasetValue)}
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls={`dataset-content-${datasetIndex}`}
                                            id={`dataset-header-${datasetIndex}`}
                                        >
                                            <Typography variant={'subtitle1'} component={'h6'}>
                                                {datasetKey} 
                                                <Chip 
                                                    color={'primary'}
                                                    size={'small'}
                                                    label={datasetValue.length} 
                                                />
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <List disablePadding> 
                                                {datasetValue.map(file => 
                                                    <ListItem 
                                                        button
                                                        component={'a'}
                                                        disableGutters
                                                        href={(!arrayIsEmpty(file)) 
                                                            ? `/${file.file[file.file.length - 2]}/${file.file[file.file.length - 1]}` 
                                                            : `#`
                                                        } 
                                                    >
                                                        <ListItemText
                                                            primary={ 
                                                                (!isEmpty(file.description) && !isEmpty(file.fileName)) 
                                                                    ? `${file.description} - ${file.fileName}` 
                                                                    : "" 
                                                            }
                                                        >

                                                        </ListItemText>
                                                    </ListItem>
                                                )}
                                            </List>
                                        </AccordionDetails>
                                    </Accordion>
                                )}
                            </Box>
                            :
                            <Alert severity={'info'}>
                                'No files available for this project.'
                            </Alert> 
                        }

                        <Divider  />

                        {!arrayIsEmpty(boreholeRows) ?
                            <Box p={3} bgcolor={'#fff'}>
                                <Typography variant={'h6'} component={'h4'}>
                                    Borehole(s)
                                </Typography>
                                <DataGrid
                                    dataSource={boreholeRows}
                                    // defaultColumns={boreholeColumns}
                                    allowColumnReordering={true}
                                    showBorders={true}
                                >
                        
                                    {/* <ColumnChooser enabled={true} /> */}
                                    <ColumnFixing enabled={true} />
                                    {/* <Column caption="Parent" dataField="child" dataType="string" cellRender={ BoreholeUrl } /> */}
                                    <Column caption="Hole ID" dataField="holeid" dataType="string" />
                                    <Column caption="IGSN" dataField="igsn" dataType="string" cellRender={ IGSNUrl } />
                                    {/* <Column caption="LID" dataField="lid" dataType="string" /> */}
                                    <Column caption="Location" dataField="location" dataType="string" />
                                    <Export 
                                        enabled={true} 
                                        // allowExportSelectedData={true} 
                                    />
                                    <GroupPanel visible={true} />
                                    <Grouping autoExpandAll={true} />
                                    <SearchPanel 
                                        visible={true}
                                        width={240}
                                        placeholder="Search..." />
                                    <Sorting mode="multiple" />
                                    <Paging defaultPageSize={20} />
                                    <Pager
                                        showPageSizeSelector={true}
                                        allowedPageSizes={[20, 50, 100]}
                                        showInfo={true} />
                                </DataGrid>
                            </Box>
                        :
                            <Alert severity={'info'}>
                                'No borehole data available for this project.'
                            </Alert> 
                        }
                    </>
                    
                : 
                    <Alert severity={'error'}>
                        'No project available for this identifier.'
                    </Alert>                             
                }
            </Box>
        </>
    )
}
  
  export default ResearchProject