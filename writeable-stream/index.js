    /**
     * TODO:
     * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
     * menggunakan teknik readable stream dan writable stream.
     */

    //TODO
    const fs = require('fs');
    const path = require('path');

    const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
        highWaterMark: 15
    });

    const writableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));
     
    readableStream.on('readable', () => {
        try {
            let msg = `${readableStream.read()}\n`;
            writableStream.write(msg);
            console.log(msg);
        } catch(error) {
            // catch the error when the chunk cannot be read.
        }
    });
     
    readableStream.on('end', () => {
        console.log('Done');
    });