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

            this.attachShadow({ mode: 'open' });
            var sr = this.shadowRoot;

            function getData(url) {
                return new Promise((resolve, reject) => {
                    fetch(url)
                        .then((resp) => resp.json())
                        .then((data) => {
                            //resolve(data)
                            resolve(jsonld.compact(data, context) );
                    });
                })
            }

            function loadUsers(userUrls, sr) {
                let userRequests = [];

                userUrls.forEach(
                    (dataUrl) => {
                        userRequests.push(getData(dataUrl["https://schema.org/url"] + ".jsonld"));
                    });

                Promise.all(userRequests).then((allUserData) => {
                    dorender(allUserData, sr);
                }
                );
            }

            function dorender(allUserData, sr) {
                console.log(allUserData);
                const detailsTemplate = [];
                detailsTemplate.push(html`<p>Package Parts</p>`);

                allUserData.forEach(item => {

                    // console.log(item["@graph"][1]);
                    detailsTemplate.push(html`<div style="margin-bottom:10px">`);
                    // see context for why I just use URL below.....  no real reason this to do this  :)
                    detailsTemplate.push(html`<a target="_blank" href="${item["@graph"][1]["url"]}">${item["@graph"][1]["https://schema.org/name"]}</a> `);
                    detailsTemplate.push(html`<br>${item["@graph"][1]["https://schema.org/description"]} `);
                    detailsTemplate.push(html`</div>`);

                    //detailsTemplate.push(html`<p> ${item[0]["@graph"][1]["https://schema.org/description"][0]["@value"]}</p>
            });

                render(detailsTemplate, sr);
            }

            const compacted = jsonld.compact(obj, context).then((providers) => {
                var j = JSON.stringify(providers, null, 2);
                var jp = JSON.parse(j);

                console.log(jp);
                console.log(jp["https://schema.org/description"]);
                var p = jp["https://schema.org/hasPart"];

                loadUsers(p, sr)
            });

        }
    }
    window.customElements.define('csdco-pkghasparts', FCTest);
})();



