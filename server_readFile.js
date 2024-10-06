const fspro = require('fs').promises
const { rename } = require('fs')
const path = require('path')
const promise = async() => {
  try{
    const data = await fspro.readFile(path.join(__dirname,'files','start.txt'), 'utf8')
    console.log(data) 
    await fspro.writeFile(path.join(__dirname,'files','rename.txt'), 'write file use async function')
    await fspro.appendFile(path.join(__dirname,'files','rename.txt'),  '  updated file useing async await') 
    const rename1 = await fspro.rename(path.join(__dirname,'files','rename.txt'),  path.join(__dirname,'files','rename2.txt'))
    console.log(rename1)
    await fspro.unlink(path.join(__dirname,'files','rename2.txt'))
  }catch(err){
    console.error(err)
  }
}
promise()