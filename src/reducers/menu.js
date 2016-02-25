import {
    GET_ALL_MENU
} from '../actions/menu';

const initialState = {
  currentIndex: 0,
  items: [
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
  ]
};

export default function menu(state = initialState, action = {}) {
    switch (action.type) {
        case GET_ALL_MENU:
            return Object.assign({}, state.items, action.data);
        default:
            return state;
    }
}
