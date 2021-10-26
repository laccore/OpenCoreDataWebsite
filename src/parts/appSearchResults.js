import React, { useContext, useEffect, useState } from 'react'
import clsx from 'clsx'

// -------------------
// Material
// -------------------
import { Avatar, Chip, LinearProgress, Box, Button, ButtonGroup, Divider, FormControl, Fade, InputLabel, Link, List, ListItem, ListItemIcon, ListItemText, Modal, MenuItem, Select, Typography } from '@material-ui/core/'
import { Alert } from '@material-ui/lab'

// -------------------
// Assets
// -------------------
import { FileIcon, PackageIcon, ProjectIcon } from '../assets/styles/custom-svgs'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

// -------------------
// Styles
// -------------------
import { useStyles } from './appSearchResults.styles'


// -------------------
// Functions
// -------------------
import { isEmpty } from 'lodash'
// import { isEmpty } from 'lodash'
import { uniqueInArray, countOccurances, arrayIsEmpty, convertFromCamelCase } from '../functions/formatFunctions' 
import { updateName } from '../functions/appFunctions' 

// -------------------
// Context/hooks
// -------------------
import { SearchContext } from '../contexts/searchContext'
import { FilterContext } from '../contexts/filterContext'
import { LoadingContext } from '../contexts/loadingContext'


export function AppSearchResults({checked=[], setChecked, env}) {

    const classes = useStyles()

    const [ searchState, searchDispatch ] = useContext(SearchContext)
    const [ filterState, filterDispatch ] = useContext(FilterContext)

    const [ loadingState, loadingDispatch ] = useContext(LoadingContext)

    const [ results, setResults ] = useState()
    const [ filtered, setFiltered ] = useState()
    const [ open, setOpen ] = useState(false)
    const [ chosen, setChosen ] = useState(0)
    
    const [ sortOption, setSortOption ] = useState('')
    const [ sortOptions, setSortOptions ] = useState([])
    const [ sortDirection, setSortDirection ] = useState(false)
    

    const handleOpen = (item) => {
        setOpen(true)
        setChosen(item)
    } 

    const handleRedirect = (item) => {
        let sNth = (item.s.value).split('/')
        let id = sNth.pop()
        let component = sNth.pop()
        
        window.location.href =  `/${component}/${id}`
    }

    const handleClose = () => {
        setOpen(false)
        setChosen(0)
    }

    const handleSortSelection = (event) => {
        setSortOption(event.target.value)
    }

    const handleSorting = () => {
        setSortDirection(!sortDirection)
    }
    
    // ------------------------------
    // Creates type filter 
    // ------------------------------
    const assignFileTypeFilter = (currentResults) => {
        let allFileTypes = currentResults.map(result => {
            // For DataType Filter: 
            let dataTypeNth = (result.type.value).lastIndexOf('/')
            let fileTypeNth = (result.name.value).lastIndexOf('.')
            let currentDataType = (result.type.value).substring(dataTypeNth + 1)
            let currentFileType = (result.name.value).substring(fileTypeNth + 1)
            console.log(dataTypeNth, fileTypeNth, currentDataType, currentFileType)
            if(currentFileType && currentDataType.toLowerCase().includes('document')){
                return currentFileType
            }
        })

        // let uniqueOptions = uniqueInArray(allFileTypes)
        let occurances = countOccurances((allFileTypes).filter(named => !isEmpty(named) ) )

        // console.log(allFileTypes, occurances)
        filterDispatch({ type: 'SET_FILTER_FILETYPE', fileType: occurances })
    }

    // ------------------------------
    // Creates dataType filter
    // ------------------------------
    const assignDataTypeFilter = (currentResults) => {
        let allDataTypes = currentResults.map(result => {
            // For DataType Filter: 
            let nth = (result.type.value).lastIndexOf('/')
            let current = (result.type.value).substring(nth + 1)
            return current
        })

        // let uniqueOptions = uniqueInArray(allDataTypes)
        let occurances = countOccurances(allDataTypes)

        // console.log(allDataTypes, occurances)
        filterDispatch({ type: 'SET_FILTER_DATATYPE', dataType: occurances })
        // check date
    }

    useEffect(() => {
        
        (async () => {

            if(searchState.results){
                
                loadingDispatch({ type: 'SET_FILTERS_LOADING', action: true})
                
                setResults(searchState.results)

                let currentFiltered = (searchState.results).sort((a,b) => ( (a.type.value < b.type.value ) && (a.name.value > b.name.value) ) 
                    ? 1 : -1 )

                console.log(searchState.results)
                console.log(currentFiltered)

                // setFiltered(searchState.results)
                setFiltered(currentFiltered)
                
                setSortOptions( (searchState.results[0]) 
                    ? Object.keys(searchState.results[0]).filter(key => 
                        key == "name" ||
                        key == "description" )
                        // key == "name" || 
                        // key == "description" || 
                        // key == "type" )
                    : []
                )
    
                await assignDataTypeFilter(searchState.results)
                await assignFileTypeFilter(searchState.results)

                loadingDispatch({ type: 'SET_FILTERS_LOADING', action: false})
            }  

        })()

    }, [searchState.results])


    // ----------------------------------------
    // Update results from checked filter items
    // ----------------------------------------
    useEffect(() => {
        
        // (async () => {
            if(results && results.length > 0){
                if(!arrayIsEmpty(checked)){
                    console.log(checked)
                    
                    let filteredResults = []
                    checked.map( item => {
                        
                        let currentChecked = results.filter( result => 
                            ((result.type.value).toLowerCase()).includes((item.toLowerCase())) ||
                            ((result.name.value).toLowerCase()).includes((item.toLowerCase()))
                        ) 
                                                
                        if(currentChecked && currentChecked.length > 0){
                            filteredResults.push(...currentChecked)
                        }
                    })
                    console.log(filteredResults)
                    setFiltered(filteredResults)
                }
            } 
        // })()

    }, [checked])

    // ------------------------------
    // Update results on sort options
    // ------------------------------
    useEffect(() => {
        
        if(Array.isArray(filtered) && filtered.length !== 0){
            
            console.log(sortDirection, sortOption, sortOptions)
            let currentFiltered = (filtered) ? filtered : []
            let currentSortOption = (sortOption) ? sortOption : 'name'
            
            if(sortDirection){
                console.log(currentFiltered)
                console.log(currentFiltered[0].name.value)
                currentFiltered.sort((a,b) => (a[currentSortOption].value > b[currentSortOption].value) 
                    ? 1 : -1 )
            } else {
                console.log(currentFiltered)
                console.log(currentFiltered[0].name.value)
                currentFiltered.sort((a,b) => (a[currentSortOption].value < b[currentSortOption].value) ? 1 : -1)
            }
            setFiltered(currentFiltered)
        }

    }, [sortDirection])
    

    // const options = choices.filter(choice => input === '' || (choice.name).includes(input))


    return (
        <>
            <Box className={classes.simpleListBox} p={1} display={'flex'} justifyContent={'flex-end'} >
                
                <Box display={'flex'} border={1} borderColor={'primary'} borderRadius={'borderRadius'}>
                    <FormControl 
                        className={ classes.formControl } 
                        // style={{ minWidth: '200px' }}
                    >
                    
                        <Select
                            id={`dataType-selection`}
                            labelId={`dataType-selection`}
                            color={'primary'}
                            className={clsx(classes.sortFormSelect)}
                            // multiple
                            // disabled={variableValues.units.length <= 1}
                            // value={
                            //     (currentChoice['units'])
                            //         ? currentChoice['units']
                            //         : []
                            // }
                            value={sortOption}
                            displayEmpty
                            // defaultValue={Object.keys(filterState.dataType)[0]}
                            onChange={handleSortSelection}
                        >
                            <MenuItem value=''>
                                <em>Sort All</em>
                            </MenuItem>

                            { sortOptions.map( (item, i) => 
                                <MenuItem 
                                    key={`menu-item-selection-${item}`}
                                    value={item}
                                    selected={ i==0 ? true : false }>
                                    {`Sort by ${item} `}
                                </MenuItem>
                            )} 
                           
                            
                        </Select>
                    </FormControl>

                    <Divider orientation="vertical" flexItem />

                    <Button
                        color={'primary'}
                        variant={'outlined'}
                        size="small"
                        className={classes.sortButton}
                        aria-controls={sortDirection ? 'sort-descending' : 'sort-ascending'}
                        title={sortDirection ? 'sort descending' : 'sort ascending'}
                        aria-label="select sorting direction"
                        onClick={handleSorting}
                    >
                        {(sortDirection) ? <ArrowDownwardIcon /> : <ArrowUpwardIcon /> }
                    </Button>

                </Box>

            </Box>
            
            { (filtered) ? 
                (Array.isArray(filtered) && filtered.length !== 0) ?
                    <>
                        <List classes={{ root: classes.list}}>
                
                            { (filtered).map((listItem, i) => 
                                <ListItem 
                                    key={`listItem-${i}`} 
                                    className={ classes.listItem } 
                                    button 
                                    onClick={() => handleRedirect(listItem)}
                                    // onClick={() => handleOpen(listItem)}
                                >
                                     {/* component={ Link } to="/about" */}
                                    <ListItemIcon>
                                        { (((listItem.type.value).toLowerCase()).includes('researchproject')) 
                                            ? <ProjectIcon size={'medium'} color={'primary'} /> 
                                            : null 
                                        }
                                        { (((listItem.type.value).toLowerCase()).includes('dataset')) 
                                            ? <PackageIcon size={'medium'} style={{ color: '#ffcc33' }} /> 
                                            : null 
                                        }
                                        { (((listItem.type.value).toLowerCase()).includes('digitaldocument')) 
                                            ? <FileIcon size={'medium'} color={'secondary'} /> 
                                            : null 
                                        }
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary={`${listItem.name.value}`} 
                                        secondary={
                                            <>
                                                { ( ((listItem.type.value).toLowerCase()).includes('researchproject') ) 
                                                    ?
                                                    <>
                                                        <Typography 
                                                            component={'p'} 
                                                            variant={'body2'}
                                                        >
                                                            { (listItem.description.value).slice(0,60) }
                                                        </Typography>
                                                        {/* <Link 
                                                            onClick={() => handleOpen(listItem)}
                                                        >
                                                            More Details
                                                        </Link> */}
                                                    </>
                                                    : null
                                                }
                                            
                                                {  ( ((listItem.type.value).toLowerCase()).includes('dataset') ) 
                                                    ? listItem.description.value
                                                    : null
                                                }
                                            
                                                {/* (((listItem.type.value).toLowerCase()).includes('digitaldocument')) */}
                                            
                                            </>
                                        }          
                                            
                                    />
                                </ListItem>
                            )}

                        </List> 
                        
                        <Box p={0} bgcolor={'grey.200'} display={'flex'}>
                            <Box p={2}>
                                <Typography variant="subtitle2" component="h6" gutterBottom>
                                    Total results: {results.length}
                                </Typography>
                            </Box>
                            <Divider orientation="vertical" flexItem />
                            <Box p={2}>
                                <Typography variant="subtitle2" component="h6" gutterBottom>
                                    Showing: {filtered.length}
                                </Typography>
                            </Box>
                        </Box>
                        
                    </>
                    : 
                    <Box p={2}>
                        <Alert variant="outlined" severity="warning">
                            No results! Please filter your search again.
                        </Alert>
                    </Box>
                : null
            }

            { (chosen) &&
                <Modal
                    open={open}
                    onClose={handleClose}
                    classes={classes.modal}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <Fade in={open}>
                        <div className={classes.paperModal}>
                            <div id="score">
                                <Chip 
                                    variant="outlined" 
                                    color="primary" 
                                    label={ chosen.score.value } 
                                    avatar={<Avatar>S</Avatar>}
                                />
                            </div>
                            <br/>
                            <div id="name">
                                <Typography className={classes.title} color="primary" gutterBottom variant="h5" component="h4">
                                    { chosen.name.value }
                                </Typography>
                            </div>
                            <hr/>
                            <div id="description">
                                <Typography variant="subtitle2" component="h6">
                                    { chosen.description.value }
                                </Typography>
                            </div>
                            <hr/>
                            <div id="lit">
                                <Typography variant="body1" component="p">
                                    { chosen.name.value }
                                </Typography>
                            </div>
                            <br/>
                            <div id="uri">
                                { (chosen.link) ? 
                                    <Button 
                                        type={'link'} 
                                        fullWidth 
                                        href={ `/${(env.github_homepage) ? `${env.github_homepage}` : ''}${(chosen.link.href) ? chosen.link.href : ''}` } 
                                        variant="contained" 
                                        size="large"
                                        color="primary">
                                        {/* { chosen.s.type } */}
                                        More Info
                                    </Button>
                                : null }
                            </div>
                            
                        </div>
                    </Fade>
                </Modal>
            }

            { ((loadingState.filtersLoading || loadingState.searchLoading) && arrayIsEmpty(filtered)) 
                ? <LinearProgress color={'primary'} />
                : null
            }

        </>
    )
}

export default AppSearchResults

