// build your `Resource` model here
const db = require('./../../data/dbConfig');
//GET
function getResources(){
    return db('resources')
}

//POST
async function addResources(newResource){
      const [resource_id] = await db('resources').insert(newResource)
      return db('resources')
      .where({resource_id})
      .first()
     
}

module.exports = {getResources,addResources}