/* jshint esversion: 6 */
import {
	html,
	render
} from './lit-html';


// Conduct the SPARQL call and call the lithtml functions to render results
export const blazefulltext = (q, n, o) => {
	console.log("Get Blaze full text");
	console.log(n);

	(async () => {

		var url = new URL("https://graph.opencoredata.org/blazegraph/namespace/ocd/sparql"),

		params = {query: `prefix schema: <https://schema.org/> \
SELECT DISTINCT ?s ?type ?score ?name ?lit ?description \
WHERE { \
  ?lit bds:search \"${q}\" . \
  ?lit bds:matchAllTerms "false" . \
  ?lit bds:relevance ?score . \
  ?s ?p ?lit . \
  ?s schema:name ?name . \
  ?s schema:description ?description .  \
  ?s rdf:type ?type . \
} \
ORDER BY DESC(?score) \
LIMIT ${n} \
OFFSET ${o} \
` }

		Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

		console.log(params["query"]);

		const rawResponse = await fetch(url, {
			method: 'GET',
			//mode: 'no-cors', // no-cors, *cors, same-origin
			// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			//credentials: 'omit', // include, *same-origin, omit
			headers: {
				'Accept': 'application/sparql-results+json',
				'Content-Type': 'application/json'
			} // ,
			// body: JSON.stringify({ query: 'SELECT * { ?s ?p ?o  } LIMIT 1', format: 'json' })
		});

		const content = await rawResponse.json();
		console.log(content);

	})();
}

export default { blazefulltext } 