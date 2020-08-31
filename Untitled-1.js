const express = require('express');

const app = express();
const fs = require('fs');

const port = 8000;

app.get('/get_meta_data', (req, res) => {
    fs.readFile(`${__dirname}/src/ui-config/specification/${req.params.modeule_name}/${req.params.screen_name}.json`, 'utf8', (err, data) => {
        res.send(data);
        res.end(data);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
