export const GET_ALL_MENU = 'GET_ALL_MENU';

export function getAllMenu() {
  let menus = [
    {
      name: '导航一',
      icon: 'user',
      child: [
        {
          name: '选项1',
          key: ''
        },
        {
          name: '选项2',
          key: ''
        },
        {
          name: '选项3',
          key: ''
        },
        {
          name: '选项4',
          key: ''
        }
      ]
    },
    {
      name: '导航二',
      icon: 'laptop',
      child: [
        {
          name: '选项5',
          key: ''
        },
        {
          name: '选项2',
          key: ''
        },
        {
          name: '选项3',
          key: ''
        },
        {
          name: '选项4',
          key: ''
        }
      ]
    },
    {
      name: '导航三',
      icon: 'notification',
      child: [
        {
          name: '选项1',
          key: ''
        },
        {
          name: '选项2',
          key: ''
        },
        {
          name: '选项3',
          key: ''
        },
        {
          name: '选项4',
          key: ''
        }
      ]
    }
  ];
  return {
    type: GET_ALL_MENU,
    data: menus
  }
}
