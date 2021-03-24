import PropTypes from 'prop-types'

export const queryToSearchParams = (query, size, offset) => 
    `prefix schema: <https://schema.org/> \
    SELECT DISTINCT ?s ?type ?score ?name ?lit ?description \
    WHERE { \
    ?lit bds:search \"${query.toLowerCase().toString()}\" . \
    ?lit bds:matchAllTerms "false" . \
    ?lit bds:relevance ?score . \
    ?s ?p ?lit . \
    ?s schema:name ?name . \
    ?s schema:description ?description .  \
    ?s rdf:type ?type . \
    } \
    ORDER BY DESC(?score) \
    LIMIT ${size} \
    OFFSET ${offset} \
    `

queryToSearchParams.propTypes = {
    query: PropTypes.string,
    size: PropTypes.number,
    offset: PropTypes.number
}
    
export const queryForResearch = () => 
    ` prefix schema: <http://schema.org/> \
    SELECT ?subj ?disurl ?score  ?name ?description \
    WHERE { \
    ?lit bds:search \"ocean\" . \
    ?lit bds:matchAllTerms "false" . \
    ?lit bds:relevance ?score . \
    ?subj ?p ?lit . \
    BIND (?subj as ?s) \
    {  \
    SELECT  ?s (MIN(?url) as ?disurl) { \
    ?s a schema:Dataset . \
    ?s schema:distribution ?dis . \
    ?dis schema:url ?url . \
    } GROUP BY ?s \
    } \
    ?s schema:name ?name . \
    ?s schema:description ?description .  \
    } \
    ORDER BY DESC(?score)
    LIMIT 10
    OFFSET 0
    ` 


export default { queryToSearchParams, queryForResearch }
