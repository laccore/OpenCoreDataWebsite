import * as React from "react"
import clsx from "clsx"

import Layout from '../layouts/index'
// import Head from '../blocks/head'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import { QuerySearchComponents } from '../queries/searchComponents'
import { Grid, Typography } from "@material-ui/core"
import aboutStyles from './about.module.scss'

const features = [
  {
    name: 'organization',
    title: 'Organization',
    image: '',
    subheading: 'The sources for geodex comes mostly from collaboration with the EarthCube Council of Data Facilities (CDF).<a target="_blank" href="https://www.earthcube.org/group/council-data-facilities">EarthCube Council of Data Facilities (CDF)</a>',
  },
  {
    name: 'providers',
    title: 'Providers',
    image: '',
    subheading: 'CDF members who express their resources via structured data on the web approaches can be indexed.',
  },
  {
    name: 'indexing',
    title: 'Indexing',
    image: '',
    subheading: 'Geodex uses the gleaner program (<a target="_blank" href="https://gleaner.io">gleaner.io</a>) to build the index and (<a target="_blank" href="https://github.com/fils/goobjectweb/blob/master/docs/about.md">GROW</a>) as a server.',
  },
]
const sections = [  // temporary holder for about page content. 
  {
    name: 'reference',
    title: 'Reference',
    content: '<p>A very rough draft providing an overview on some topics related to geodex on the about page.</p>'
  },
  {
    name: 'fair-data',
    title: 'FAIR Data',
    content: '<p>Much of the work taking place here by providers is in support of FAIR data principles. We will be expanding this section to better connect the work here with FAIR.</p>'
  },
  {
    name: 'simple-architecture',
    title: 'Simple Architecture ',
    content: '<p>The geodex architecture is exploring leveraging basic web architecture and structured data on the web to scale its services.</p><p> Schema.org is a collaborative, community activity with a mission to create, maintain, and promote schemas for structured data on the Internet, on web pages, in email messages, and beyond. Schema.org can be extended with vocabularies such as DCAT, SOSA, etc. This work is taking place at the ESIP Science on Schema. </p><p> Such an approach also allows us to leverage the rich ecosystem of tools developers currently leverage for JSON. Additionally a grow suite of tools and guides specifically for geosciences and structured data on the web are under development.</p>'
  } 
]

const AboutPage = () => {

  const searchComponents = QuerySearchComponents()

  return (
    <Layout>
      <Container maxWidth={'lg'}>
        <Box bgcolor={'white.main'} p={2} boxShadow={2}>
          <Grid container className={clsx(aboutStyles.gridContainer)}>
            { features.map(feature => 
              <Grid key={feature.name} item xs={12} sm={12} md={4} className={clsx(aboutStyles.gridItem)}>
                <Box className={aboutStyles.gridItemInnerBox}>
                  <img src={feature.image} className={clsx(`w-100`)}/>
                  <Typography variant={'h5'} component={'h3'} className={clsx('text-center')}>
                    {feature.title}
                  </Typography>
                  <figcaption dangerouslySetInnerHTML={{__html: feature.subheading}} className={clsx('text-center')}>
                  </figcaption>
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
        <Box bgcolor={'grey.100'} p={4} boxShadow={2} >
          {sections.map(section => 
            <Box className={clsx(aboutStyles.sectionOuter)}> 
              <Box className={clsx(aboutStyles.sectionInner)}>
                <Typography variant={'h4'} component={'h2'} className={clsx('text-center')}>
                  {section.title}
                </Typography>
                <div dangerouslySetInnerHTML={{__html: section.content}} className={clsx('text-left p-4 m-auto')}>
                </div>
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Layout>
  )
}

export default AboutPage
