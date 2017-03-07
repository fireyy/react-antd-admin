var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

// mock 数据
var mock = new MockAdapter(axios);

mock.onPut('/login').reply(200, require('./mock/user'));
mock.onGet('/logout').reply(200, {});
mock.onGet('/my').reply(200, require('./mock/user'));
mock.onGet('/menu').reply(200, require('./mock/menu'));

module.exports = axios;