var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var normalAxios = axios.create();
var mockAxios = axios.create();

// mock 数据
var mock = new MockAdapter(mockAxios);

mock.onPut('/login').reply(config => {
  let postData = JSON.parse(config.data).data;
  if (postData.user === 'admin' && postData.password === '123456') {
    return [200, require('./mock/user') ];
  } else {
    return [500, {message: "Incorrect user or password"} ];
  }
});
mock.onGet('/logout').reply(200, {});
mock.onGet('/my').reply(200, require('./mock/user'));
mock.onGet('/menu').reply(200, require('./mock/menu'));
mock.onGet('/randomuser').reply((config) => {
  return new Promise(function(resolve, reject) {
    normalAxios.get('https://randomuser.me/api', {
      params: {
        results: 10,
        ...config.params,
      },
      responseType: 'json'
    }).then((res) => {
      resolve([200, res.data ]);
    }).catch((err) => {
      resolve([500, err ]);
    });
  });
});

export default mockAxios;
