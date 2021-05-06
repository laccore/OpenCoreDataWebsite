import * as React from "react"
import clsx from "clsx"

import Layout from '../layouts/index'
import SEO from '../blocks/seo'
// import Head from '../blocks/head'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { StaticImage } from 'gatsby-plugin-image'

import { Grid, Typography } from "@material-ui/core"
import aboutStyles from './about.module.scss'

const AboutPage = ({ data }) => {

  return (
    <Layout header={'standard'} heading={'About'} subheading={'About the Open Core Data Project'}>
      <SEO
        title="About the Project"
        description="Information about OCD."
        image="/ocd-logo-gradient.png"
        pathname="/about"
      />
      <Container maxWidth={'lg'}>

         {/* ---- Features ---- */}
        <Box bgcolor={'inherit'} p={2} boxShadow={2}>
          <Grid container className={clsx(aboutStyles.gridContainer)}>
            { data.aboutJson.features.map(feature => 
              <Grid key={feature.name} item xs={12} sm={12} md={4} className={clsx(aboutStyles.gridItem)}>
                <Box className={aboutStyles.gridItemInnerBox}>
                  <figure className={aboutStyles.image}>
                    {/* <Img 
                      fluid={data.featureImg.childImageSharp.fluid} 
                      alt={`image for ${feature.name}`}
                    /> */}
                    {/* <StaticImage
                      src={`${feature.image}`}
                      alt={`${feature.name}`}
                      placeholder={`${feature.title} image`}
                      layout="fixed"
                      width={200}
                      height={200}
                    /> */}
                  </figure>
                  {/* <img src={`/images/${feature.image}`} className={clsx(`w-100`)}/> */}

                  <Typography variant={'h5'} component={'h3'} className={clsx('mb-2 text-center')}>
                    {feature.title}
                  </Typography>
                  <figcaption dangerouslySetInnerHTML={{__html: feature.subheading}} className={clsx('text-center text-muted')}>
                  </figcaption>
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
        
        {/* ----- References -----  */}
        <Box bgcolor={'grey.100'} p={4} boxShadow={2} >
          {data.aboutJson.reference.map(ref => 
            <Box className={clsx(aboutStyles.sectionOuter)}> 
              <Box className={clsx(aboutStyles.sectionInner)}>
                <Typography variant={'h4'} component={'h2'} className={clsx('text-center')}>
                  {ref.title}
                </Typography>
                <div dangerouslySetInnerHTML={{__html: ref.content}} className={clsx('text-left p-4 m-auto')}>
                </div>
              </Box>
            </Box>
          )}
        </Box>

        {/* ---- Mission ---- */}
        <Box bgcolor={'inherit'} p={4} boxShadow={2} >
          {data.aboutJson.mission.map(mis => 
            <Box className={clsx(aboutStyles.sectionOuter)}> 
              <Box className={clsx(aboutStyles.sectionInner)}>
                <Typography variant={'h4'} component={'h2'} className={clsx('text-center')}>
                  {mis.title}
                </Typography>
                <div dangerouslySetInnerHTML={{__html: mis.content}} className={clsx('text-left p-4 m-auto')}>
                </div>
              </Box>
            </Box>
          )}
        </Box>

        {/* ---- Architecture ---- */}
        <Box bgcolor={'grey.100'} p={4} boxShadow={2} >
          {data.aboutJson.architecture.map(arch => 
            <Box className={clsx(aboutStyles.sectionOuter)}> 
              <Box className={clsx(aboutStyles.sectionInner)}>
                <Typography variant={'h4'} component={'h2'} className={clsx('text-center')}>
                  {arch.title}
                </Typography>
                <div dangerouslySetInnerHTML={{__html: arch.content}} className={clsx('text-left p-4 m-auto')}>
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

export const query = graphql`
  query AboutJson {
    aboutJson {
      features {
        name
        image
        title
        subheading
      }
      reference {
        name
        title
        content
      }
      mission {
        name
        title
        content
      }
      architecture {
        name
        title
        content
      }
    }
  }
`