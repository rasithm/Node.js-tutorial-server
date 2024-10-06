const {format} = require('date-fns')
const {v4 : uuid} = require('uuid')

const path = require('path')
const fs = require('fs')
const fspro = require('fs').promises

const logEvent = async(message) => {
    const datetime = `${format(new Date(), 'ddMMyyyy\tHH-mm-ss')}`
    const logItem = `${datetime}\t${uuid()}\t${message}\n `
    console.log(logItem)
    try{
        if(!fs.existsSync(path.join(__dirname,'log'))){
            await fspro.mkdir(path.join(__dirname,'log'))

        }
        await fspro.appendFile(path.join(__dirname,'log','eventfile.txt'),logItem)

    }catch(err){
        console.log(err)
    }
}
module.exports = logEvent
