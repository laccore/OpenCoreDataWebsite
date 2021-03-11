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
    


export default { queryToSearchParams }
