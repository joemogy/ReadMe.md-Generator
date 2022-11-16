const fs = require('fs');

const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        const dir = "./newFileGenerated"

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, err => {
                if (err) {
                    reject(err);
                    return;
                }
            });  
        }

        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: "File created!"
            });
        });
    });
    
}

module.exports = writeToFile;