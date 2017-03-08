export const chartData = [
  {
    "time": "9/1",
    "price": 10,
    "name": "商品A"
  },
  {
    "time": "9/1",
    "price": 30,
    "name": "商品B"
  },
  {
    "time": "9/2",
    "price": 12,
    "name": "商品A"
  },
  {
    "time": "9/2",
    "price": 32,
    "name": "商品B"
  },
  {
    "time": "9/3",
    "price": 11,
    "name": "商品A"
  },
  {
    "time": "9/3",
    "price": 35,
    "name": "商品B"
  },
  {
    "time": "9/4",
    "price": 15,
    "name": "商品A"
  },
  {
    "time": "9/4",
    "price": 40,
    "name": "商品B"
  },
  {
    "time": "9/5",
    "price": 20,
    "name": "商品A"
  },
  {
    "time": "9/5",
    "price": 42,
    "name": "商品B"
  },
  {
    "time": "9/6",
    "price": 22,
    "name": "商品A"
  },
  {
    "time": "9/6",
    "price": 35,
    "name": "商品B"
  },
  {
    "time": "9/7",
    "price": 21,
    "name": "商品A"
  },
  {
    "time": "9/7",
    "price": 36,
    "name": "商品B"
  }
];

export const radarData = [
  {"name": "Argentina", "year": "2007", "value": 1368763},
  {"name": "Argentina", "year": "2008", "value": 799873},
  {"name": "Argentina", "year": "2009", "value": 1497653},
  {"name": "Argentina", "year": "2010", "value": 1351874},
  {"name": "Argentina", "year": "2011", "value": 1582987},
  {"name": "Brasil", "year": "2007", "value": 1991297},
  {"name": "Brasil", "year": "2008", "value": 1254823},
  {"name": "Brasil", "year": "2009", "value": 1732987},
  {"name": "Brasil", "year": "2010", "value": 332871},
  {"name": "Brasil", "year": "2011", "value": 649853},
  {"name": "Chile", "year": "2007", "value": 431097},
  {"name": "Chile", "year": "2008", "value": 561983},
  {"name": "Chile", "year": "2009", "value": 1019874},
  {"name": "Chile", "year": "2010", "value": 2027634},
  {"name": "Chile", "year": "2011", "value": 1961085},
  {"name": "Columbia", "year": "2007", "value": 431097},
  {"name": "Columbia", "year": "2008", "value": 799873},
  {"name": "Columbia", "year": "2009", "value": 332871},
  {"name": "Columbia", "year": "2010", "value": 799873},
  {"name": "Columbia", "year": "2011", "value": 649853}
];

export let barData = [
  {name: 'Tokyo',data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]},
  {name: 'New York',data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]},
  {name: 'London',data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]},
  {name: 'Berlin',data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]}
];

for(var i=0; i < barData.length; i++) {
  var item = barData[i];
  var datas = item.data;
  var months = ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'];
  for(var j=0; j < datas.length; j++) {
    item[months[j]] = datas[j];
  }
  barData[i] = item;
}