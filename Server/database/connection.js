//connection.js


const mongoose = require('mongoose') // import

function RunServer(){
    try{//similar to it else.
        mongoose.connect('')
        console.log('mongoose is connected')
    }
    catch (error){
        console.log('not connected')
    }
}


module.exports = RunServer