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
import Chip from '@material-ui/core/Chip'


import AssignmentIcon from '@material-ui/icons/Assignment'

const data = {
  lit: "YUKON",
  name: "YUKON-SQU02-2A-3L-1.bmp",
  uri: "https://opencoredata.org/id/csdco/do/22ee510dde701eda9df86022561d5019fe259768604824b653b2df8fae8055bd",
  score: {
      datatype: "http://www.w3.org/2001/XMLSchema#double",
      value: "0.7071067811865475"
  },
  type: {
      name: "DigitalDocument",
      schema: "https://schema.org/DigitalDocument"
  },
  description: "Digital object of type Images named YUKON-SQU02-2A-3L-1.bmp for CSDCO project YUKON"
}

const useStyles = makeStyles((theme) => ({
  digitalDocumentRoot: {
    width: '100%',
    margin: '0 auto',
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.background.paper,
  }
}))

const DigitalDocumentPage = () => {

  const classes = useStyles()

  return (
    <Layout>
        <Container maxWidth={'lg'}>
          <Box bgcolor={'inherit'} p={4} boxShadow={1}>
            <Card className={classes.digitalDocumentRoot} variant="outlined">
              <CardContent>
                <Chip label={`${ data.lit }`} variant="outlined" />
                <br />
                <Typography className={classes.title} color="primary" gutterBottom>
                  
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
                <Button color="primary" size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        </Container>
    </Layout>
  )
}

export default DigitalDocumentPage
