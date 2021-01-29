import * as React from "react"

import Layout from '../layouts/index'
// import Head from '../blocks/head'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'
import Typography from '@material-ui/core/Typography'

const data = {
  lit: "Understanding the Impacts of Icy Permafrost Degradation and Thermokarst-Lake Dynamics in the Arctic on Carbon Cycling, CO2 and CH4 emissions, and Feedbacks to Climate Change",
  name: "Understanding the Impacts of Icy Permafrost Degradation and Thermokarst-Lake Dynamics in the Arctic on Carbon Cycling, CO2 and CH4 emissions, and Feedbacks to Climate Change",
  uri: "https://opencoredata.org/id/csdco/res/SPA",
  score: {
      datatype: "http://www.w3.org/2001/XMLSchema#double",
      value: "0.21875"
  },
  type: {
      name: "ResearchProject",
      schema: "https://schema.org/ResearchProject"
  },
  description: "This research integrates field studies in a range of disciplines (geomorphology, geophysics, paleoecology, hydrology, limnology) with process modeling of permafrost thaw, lake formation, carbon cycling, and greenhouse gas (GHG) emissions to understand how permafrost degradation in the Arctic, particularly thermokarst-lake (TKL) evolution, affects long-term atmospheric trace gas dynamics by releasing ancient carbon (C) stored in permafrost as carbon dioxide (CO2) and methane (CH4). The overarching goals of the IPY/NSF solicitation are met in the short term (2007-2009), by (1) describing comprehensively the state of thermokarst (permafrost degradation) in Siberia and Alaska, (2) quantifying its impact on landscape configuration through the alteration of surface geomorphology and drainage patterns, (3) estimating its impacts on the C cycle via enhanced GHG (CO2, CH4) emissions, and (4) examining its potential to influence global climate ?potential C release from thawing permafrost in Siberia alone totals >50% of the current atmospheric C burden. The IPY goals are met in the long term by establishing (1) a legacy of geographic, stratigraphic and process data from permafrost regions and data on thermokarst dynamics (past, present and future), (2) a working model of thermokarst processes, (3) scenarios of thermokarst- GHG emissions driven by climate change from the Last Glacial Maximum (LGM) to the year 2200, and (4) an enhancement of collaborations within the Arctic Observing Network at observatories in North Siberia (Cherskii) and Alaska (Toolik Lake), and work with international collaborators at Bristol University (UK), the Alfred Wegener Institute for Polar and Marine Research and the Max Planck Institute for Microbiology (both Germany) and the Permafrost Institute, Yakutsk (Russia)."
}


const useStyles = makeStyles((theme) => ({
  researchDocumentRoot: {
    width: '100%',
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
  }
}))
  
const ResearchProjectPage = () => {
    
  const classes = useStyles()

  return (
    <Layout>
      <Container maxWidth={'lg'}>
        <Box bgcolor={'white.main'} p={4} boxShadow={1}>
          <Card className={classes.researchDocumentRoot} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="primary" gutterBottom>
                { data.lit }
              </Typography>
              <Typography variant="h5" component="h2">
                { data.name }
              </Typography>
              <Badge>
                { data.score.value }
              </Badge>
              <Typography className={classes.pos} color="textSecondary">
                
              </Typography>
              <Typography variant="body2" component="p">
                { data.description }
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </Layout>
  )
}

export default ResearchProjectPage
