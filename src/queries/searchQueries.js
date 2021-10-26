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
    query: PropTypes.string.isRequired,
    size: PropTypes.number,
    offset: PropTypes.number
}
    
export const queryForResearchDatasets = (query) => 
    ` prefix schema: <http://schema.org/> \
        SELECT DISTINCT *
        WHERE { \
            ?child ?p "https://opencoredata.org/id/csdco/${query}" .
            ?child rdf:type <https://schema.org/DataSet> .
            ?child <https://schema.org/description> ?desc .
            ?child <https://schema.org/keywords> ?kw .
            ?child <https://schema.org/license> ?lic .
            ?child <https://schema.org/name> ?name .
            ?child 	<https://schema.org/url> ?url .
            ?child <https://schema.org/hasPart> ?part .
            ?part <https://schema.org/url> ?parturl
        }
    ` 
queryForResearchDatasets.propTypes = {
    query: PropTypes.string.isRequired
}


// ---------------------------------
// Research Borehold specific info
// ---------------------------------
export const queryForResearchBorehole = (query) => 
    ` prefix schema: <https://schema.org/> 
    SELECT DISTINCT ?child ?holeid ?igsn ?location ?lid
    WHERE 
    {   
        ?child ?p "https://opencoredata.org/id/csdco/${query}" .
        ?child rdf:type <https://opencoredata.org/voc/csdco/v1/Borehole> .
        ?child <https://opencoredata.org/voc/csdco/v1/hole_ID> ?holeid .
        ?child <https://opencoredata.org/voc/csdco/v1/IGSN> ?igsn .
        ?child <https://opencoredata.org/voc/csdco/v1/location> ?location .
        ?child <https://opencoredata.org/voc/csdco/v1/location_ID> ?lid .
    } `

queryForResearchBorehole.propTypes = {
    query: PropTypes.string.isRequired
}

export const queryForDigitalObject = (id) => 
    ` prefix schema: <https://schema.org/> 
    SELECT DISTINCT *
    WHERE 
    {   
        <https://opencoredata.org/id/csdco/do/${id}> ?p ?o
    } `

queryForDigitalObject.propTypes = {
    query: PropTypes.string.isRequired
}


export default { queryToSearchParams, queryForResearchDatasets, queryForResearchBorehole, queryForDigitalObject }



// prefix schema: <http://schema.org/> \
// SELECT ?subj ?disurl ?score  ?name ?description \
// WHERE { \
//     ?lit bds:search \"ocean\" . \
//     ?lit bds:matchAllTerms "false" . \
//     ?lit bds:relevance ?score . \
//     ?subj ?p ?lit . \
//     BIND (?subj as ?s) \
//         {  \
//             SELECT  ?s (MIN(?url) as ?disurl) { \
//             ?s a schema:Dataset . \
//             ?s schema:distribution ?dis . \
//             ?dis schema:url ?url . \
//             } GROUP BY ?s \
//         } \
//     ?s schema:name ?name . \
//     ?s schema:description ?description .  \
// } \
// ORDER BY DESC(?score)
// LIMIT 10
// OFFSET 0