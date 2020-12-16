/*jshint esversion: 6 */
import {
    html,
    render
} from './lit-html.js';
import './jsonld.min.js';
import { parts } from './lib/render.js';

(function () {
    class FCTest extends HTMLElement {
        constructor() {
            super();

            const context = {
                "url": { "@id": "https://schema.org/url", "@type": "@id" },
                "image": { "@id": "https://schema.org/image", "@type": "@id" }
            };

            var obj;
            var inputs = document.getElementsByTagName('script');
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].type.toLowerCase() == 'application/ld+json') {
                    obj = JSON.parse(inputs[i].innerHTML);
                }
            }

            async function graphcall(douri) {
                const detailsTemplate = [];
                var url = new URL("https://graph.opencoredata.org/blazegraph/namespace/ocd/sparql")

                console.log(douri);

                var params = {
                    query: `select * 
                            where {
                                <https://opencoredata.org/id/csdco/do/d4206ec3bf84f62adccf18092acd17760cbe8f8c012d055479c68f1b2be51e03> ?p ?o 
                            }
                ` };

                Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

                // console.log(params["query"]);

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

                let content = await rawResponse.json();

                // var r = content.results.bindings;
                // console.log(r);
                return (content);
            }

            // GET test
            async function objectFectch(id) {
                return fetch(id+".jsonld", {
                    headers: { 'Accept': 'application/ld+json', },
                })
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (myJson) {
                        console.log("=== fdp viewer ===")
                        console.log(myJson);
                        // console.log(JSON.stringify(myJson));
                        // return JSON.stringify(myJson);
                        return myJson;
                    });
            }

            async function objectFectch(id) {
                return fetch(id+".jsonld", {
                    headers: { 'Accept': 'application/ld+json', },
                })
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (myJson) {
                        console.log("=== fdp viewer ===")
                        console.log(myJson);
                        // console.log(JSON.stringify(myJson));
                        // return JSON.stringify(myJson);
                        return myJson;
                    });
            }

            async function hasPart(set) {
                const partTemplate = [];
                partTemplate.push(html`<h3>Data Set (Frictionless Data Package)</h3>`);
                set.forEach(element => {
                    partTemplate.push(html`<p>an item </p>`);
                    console.log("pushing item");
                }
                );

                return partTemplate;
            }

            // const compacted = jsonld.compact(obj, context).then(sC, fC);
            const compacted = jsonld.compact(obj, context).then((providers) => {
                var j = JSON.stringify(providers, null, 2);
                var jp = JSON.parse(j);

                console.log(jp);
                console.log(jp["https://schema.org/description"]);

                const detailsTemplate = [];
                detailsTemplate.push(html`<h3>Data Set (Frictionless Data Package)</h3>`);

                if (jp["https://schema.org/description"] == undefined)
                    detailsTemplate.push(html`<div> No description available  </div>`);
                else detailsTemplate.push(html`<div><h3> ${jp["https://schema.org/description"]} </h3></div>`);

                if (jp["https://schema.org/keywords"] == undefined)
                    detailsTemplate.push(html`<div> No keywords available  </div>`);
                else detailsTemplate.push(html`<div> Keywords: ${jp["https://schema.org/keywords"]} </div>`);

                if (jp["https://schema.org/about"] == undefined)
                    detailsTemplate.push(html`<div> No related project  </div>`);
                else detailsTemplate.push(html`<div> Project relation: <a href='${jp["https://schema.org/about"]}'> ${jp["https://schema.org/about"]}</a> </div>`);

                if (jp["https://schema.org/license"] == undefined)
                    detailsTemplate.push(html`<div> No license Available  </div>`);
                else detailsTemplate.push(html`<div> License: ${jp["https://schema.org/license"]} </div>`);

                if (jp["https://schema.org/url"] == undefined)
                    detailsTemplate.push(html`<div style="margin-top:15px"> URL: No document URL available  </div>`);
                else detailsTemplate.push(html`<div style="margin-top:15px"> Package URL: <a href='${jp["https://schema.org/url"]}'>${jp["https://schema.org/url"]}</a> </div>`);


                if (jp["https://schema.org/distribution"]["https://schema.org/contentUrl"] == undefined)
                    detailsTemplate.push(html`<div style="margin-top:15px"> No distribution URL available  </div>`);
                else detailsTemplate.push(html`<div style="margin-top:15px">
                 <a href='${jp["https://schema.org/distribution"]["https://schema.org/contentUrl"]}' download>Data Package Metadata</a> <br>
                 <a href='${jp["https://schema.org/distribution"]["https://schema.org/contentUrl"]}.zip' download>Data Package (zip)</a> </div>`);

// this section does in a second web component

                // if (jp["https://schema.org/hasPart"] == undefined)
                //     detailsTemplate.push(html`<div style="margin-top:15px"> No package documents available  </div>`);
                // else {

                //     detailsTemplate.push(html`<div style="margin-top:15px"> Package content links:  </div>`);
                   
                    // var p = jp["https://schema.org/hasPart"];
                    // p.forEach(element =>
                    //     detailsTemplate.push(html`<div> Document: <a href='${element["https://schema.org/url"]}'>${element["https://schema.org/url"]}</a> </div>`)

                    // );

                    // p.forEach(element =>
                    // objectFectch(element["https://schema.org/url"]).then((features) => {
                    //     detailsTemplate.push(html`<div> Document B: ${features}</div>`);
                    // }));

                    // hasPart(jp["https://schema.org/hasPart"]).then((value) =>{
                    //     detailsTemplate.push(value);
                    //     console.log(value);
                    // });

                    // p.forEach(element =>
                    //     graphcall(element["https://schema.org/url"]).then(function(value){
                    //         console.log("success!");
                    //     }, function(value)  {
                    //         detailsTemplate.push(html`<div> Document B: ${value}</div>`);
                    //     }));

                // }

                this.attachShadow({ mode: 'open' });
                render(detailsTemplate, this.shadowRoot);                // var h =  `<div>${itemTemplates}</div>`;
                // this.shadowRoot.appendChild(this.cloneNode(h));

            });
        }
    }
    window.customElements.define('csdco-pkg', FCTest);
})();


