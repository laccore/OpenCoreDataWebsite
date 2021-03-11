
const API = "https://graph.opencoredata.org/blazegraph/namespace/ocd/sparql"
const VERSION="0.3.1" // process.env.REACT_APP_VERSION
const ENV= "development"

module.exports = {
  testing: {
    api: API,
    version: `${VERSION}`,
    env: `${ENV}`
  }
}