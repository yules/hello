var express = require('express'),
    app = express();

app.use('/', express.static('public'));
app.get('/api/', function(req, res) {
    res.send('oy');
});
app.listen(process.env.PORT || 8080);