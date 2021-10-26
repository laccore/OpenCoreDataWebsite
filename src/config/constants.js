const constants = {

    // ENVIRONMENT VARIABLES
    ENV: (process.env.REACT_APP_ENV) ? process.env.REACT_APP_ENV : 'development',
    GRAPH: (process.env.REACT_APP_GRAPH) 
        ? process.env.REACT_APP_GRAPH 
        : 'https://graph.opencoredata.org/blazegraph/namespace/ocd/sparql',
    
    OCD: (process.env.REACT_APP_OCD) 
        ? process.env.REACT_APP_OCD 
        : 'https://opencoredata.org/id/csdco',
    VERSION: (process.env.REACT_APP_VERSION) ? process.env.REACT_APP_VERSION : '1.0',
    SITENAME: (process.env.REACT_APP_SITENAME) ? process.env.REACT_APP_SITENAME : 'Open Core Data',
    DOMAIN: (process.env.REACT_APP_DOMAIN) ? process.env.REACT_APP_DOMAIN : '',
    SHORTNAME: (process.env.REACT_APP_SHORTNAME) ? process.env.REACT_APP_SHORTNAME : 'ocd',
    GITHUB_HOMEPAGE: (process.env.REACT_APP_GITHUB_HOMEPAGE) ? process.env.REACT_APP_GITHUB_HOMEPAGE : ''
    
}

export default constants