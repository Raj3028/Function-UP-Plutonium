const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require('moment');
// const dateTime = require('node-datetime');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://raj_3028:kWaM507ps0Icsdg0@cluster0.pw23ckf.mongodb.net/RajeshKumarSahoo-DB", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

// app.use(
//     function (req, res, next) {
//         console.log("inside GLOBAL MW");
//         next();
//     }
// );
// =======================================

// app.use(
//     function midGlb(req, res, next) {
//         let dt = dateTime.create();
//         let formatted = dt.format('Y-m-d H:M:S');
//         console.log(formatted, ",", req.ip, ",", req.originalUrl);
//         next()
//     }
// )

app.use(
    function globalMiddleWare(req, res, next) {
        const today = moment();
        const formatted = today.format('YYYY-MM-DD hh:mm:ss');
        console.log(formatted, ",", req.ip, ",", req.originalUrl);
        next()
    }
)


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
