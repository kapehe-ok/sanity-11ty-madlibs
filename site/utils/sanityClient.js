const sanityClient = require('@sanity/client')
module.exports = sanityClient({
    projectId: 'x2fo7pry',
    dataset: 'production',
    apiVersion: '2021-06-07',
    useCdn: true

})

