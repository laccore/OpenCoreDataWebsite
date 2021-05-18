import React from 'react'

// ---------------
// Pages - Icons: 
// ---------------
import { MainLogo } from '../assets/styles/custom-svgs'

// ---------------
// Logos:
// ---------------
// import Logo from '../assets/logo/ocd-logo.png'
// import FullLogo from '../assets/logo/ocd-full-logo.png'
// import Favicon from '../assets/favicon/ocd-favicon.png'
// import Background from '../assets/images/ocd-website-header.jpg'

// ---------------
// Pages:
// ---------------
import { Home } from '../pages/home' 
import { About } from '../pages/about'
import { ResearchProject } from '../pages/researchProject'
import { DigitalObject } from '../pages/digitalObject'
import { Package } from '../pages/package'

// ----------------
// Configuration:
// ----------------
import endpoints from './endpoints'
import C from './constants'
import config from './'
import { isEmpty } from '../functions/formatFunctions'

// ------------------
// Components:
// ------------------
const componentHome = (props) => <Home {...props }/>
const componentAbout = (props) => <About {...props }/>
const componentRes = (props) => <ResearchProject {...props }/>
const componentDo = (props) => <DigitalObject {...props }/>
const componentPkg = (props) => <Package {...props }/>


const primaryParent = 1

export const ASSETS = { 
    logo: MainLogo,
    // favicon: Favicon,
    // fullLogo: FullLogo,
    // background: Background
}
    
export const PAGES = [
    { 
        name: "home",
        title: "Home",
        path:"/",
        exact: true,
        parameters: "",
        parent: primaryParent,
        disabled: false,
        // icon: FilterIcon,
        component: componentHome,
    },
    { 
        name: "about",
        title: "About",
        path:"/about",
        exact: true,
        parameters: "",
        parent: primaryParent,
        disabled: false,
        // icon: FilterIcon,
        component: componentAbout,
    },
    { 
        name: "research-project",
        title: "Research Project",
        path:"/res/:id",
        exact: false,
        parameters: ":id",
        parent: primaryParent,
        disabled: true,
        // icon: FilterIcon,
        component: componentRes,
    },
    { 
        name: "digital-object",
        title: "Digital Object",
        path:"/do/:id",
        exact: false,
        parameters: ":id",
        parent: primaryParent,
        disabled: true,
        // icon: FilterIcon,
        component: componentDo,
    },
    { 
        name: "package",
        title: "Package",
        path:"/pkg/:id",
        exact: false,
        parameters: ":id",
        parent: primaryParent,
        disabled: true,
        // icon: FilterIcon,
        component: componentPkg,
    },
    
]

export const FILTERS = [
    // { 
    //     name:"sampleCollection",
    //     authority:"sampleCollection",
    //     // avatar: samplingTechniquesAvatar, 
    //     title: "Collections",
    //     media: collectionPNG,
    //     bgColor: "eigth",
    //     color: "black",
    //     display: "filter", // 'initial' to single out 
    //     endpoint: endpoints.astro.vocabularies.collection,
    //     parent: "",
    //     children: "",
    //     schema: {
    //         sampleData: "sample.sampleCollection.collectionTypeCode"
    //     },
    //     order: 1,
    //     dispatch: C.SET_SAMPLE_COLLECTION,
    //     reset: C.RESET_SAMPLE_COLLECTION
    // }
]
