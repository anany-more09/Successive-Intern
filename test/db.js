const mongoose = require('mongoose')

async function connection(connectionURL)
{
  try{
     await mongoose.connect(connectionURL)
     console.log(`Connection is successful to database`);
     
  }
  catch(error)
  {
    console.log(`Error Message is: ${error}`)
  }
}
module.exports = {connection}

