const fs = require('fs')
const path = require('path')
const rs = fs.createReadStream(path.join(__dirname,'files','bigfile.txt'), {encoding : 'utf8'}  )
const ws = fs.createWriteStream(path.join(__dirname,'files', 'newpipe__bigfile.txt'))

/*rs.on('data' ,(datacheack) => {
    ws.write(datacheack)
})*/
rs.pipe(ws)