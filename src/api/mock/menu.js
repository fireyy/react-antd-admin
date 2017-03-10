module.exports = {
    menus: [
      {
        key: 1,
        name: 'Pages',
        icon: 'user',
        child: [
          {
            name: 'Dashboard',
            key: 101,
            url: '/home'
          },
          {
            name: 'Form',
            key: 102,
            url: '/form'
          },          
          {
            name: 'Table',
            key: 103,
            url: '/table'
          },
          {
            name: '选项2',
            key: 104,
            url: '/page2'
          }
        ]
      },
      {
        key: 2,
        name: '导航二',
        icon: 'laptop',
        child: [
          {
            name: '选项5',
            key: 201
          },
          {
            name: '选项2',
            key: 202
          },
          {
            name: '选项3',
            key: 203
          },
          {
            name: '选项4',
            key: 204
          }
        ]
      },
      {
        key: 3,
        name: '导航三',
        icon: 'notification',
        child: [
          {
            name: '选项1',
            key: 301
          },
          {
            name: '选项2',
            key: 302
          },
          {
            name: '选项3',
            key: 303
          },
          {
            name: '选项4',
            key: 304
          }
        ]
      }
    ]
  }
