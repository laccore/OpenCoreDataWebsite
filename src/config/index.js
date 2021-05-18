const C = require('./constants')
const { ENV, GRAPH, OCD, VERSION, DOMAIN, SITENAME, SHORTNAME, GITHUB_HOMEPAGE } = C.default

module.exports = {
  development: {
    siteName: `${SITENAME}-${ENV}`,
    shortName: `${SHORTNAME}-${ENV}`,
    domain: `${DOMAIN}`,
    version: `${ENV}-${VERSION}`,
    graph: `${GRAPH}`,
    ocd: `${OCD}`,
    github_homepage: `${GITHUB_HOMEPAGE}`
  },
  deploy: {
    siteName: `${SITENAME}`,
    shortName: `${SHORTNAME}`,
    domain: `/`,
    version: `${VERSION}`,
    graph: `${GRAPH}`,
    ocd: `${OCD}`,
    github_homepage: `${GITHUB_HOMEPAGE}`
  }
}