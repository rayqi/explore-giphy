const proxy = require('http-proxy-middleware');



const checkProxy = function (app) {

    app.use(proxy("/api", { target: "http://[::1]:5000", secure: false }));
};

if (process.env.NODE_ENV === 'development') {
    module.exports = checkProxy
}


// const proxy = require('http-proxy-middleware');

// module.exports = function (app) {
//     app.use(proxy('/api', { target: 'http://localhost:5000/', secure: false }));
// };