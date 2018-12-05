const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy("*", { target: "http://[::1]:5000", secure: false }));
};

// const proxy = require('http-proxy-middleware');

// module.exports = function (app) {
//     app.use(proxy('/api', { target: 'http://localhost:5000/', secure: false }));
// };