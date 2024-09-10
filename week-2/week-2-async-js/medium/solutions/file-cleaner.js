var fs = require('fs');

fs.readFile('books.txt', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        let newString = data.replace(/\s+/g, ' ').trim();
        fs.writeFile('books.txt', newString, function(writeErr) {
            if (writeErr) {
                console.log(writeErr);
            } else {
                console.log('File successfully updated!');
            }
        });
    }
});
