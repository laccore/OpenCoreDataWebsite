const config = require('./index')
const path = require('path')
const C = require('./constants')

const api = config[C.default.API]

const vocabularies = "vocabularies"

const setVocabularies = childName => api + path.join(vocabularies, childName)

module.exports = {
    ocd: {
        vocabularies: {
            url: vocabularies,            
            analyzedMaterial:  setVocabularies("analyzedMaterialAgg"),
            expedition: setVocabularies("expeditionAgg"),
            geoFeature: setVocabularies("geoFeatureAgg"),
            taxon: setVocabularies("taxonAgg"),
            variable: setVocabularies("variableAgg"),
            analysisMethod: setVocabularies("methodAgg"),
            collection: setVocabularies("collectionAgg")
        }
    }
}
