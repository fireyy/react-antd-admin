import _ from 'lodash';

import {
    GET_ALL_MENU,
    GET_ALL_MENU_SUCCESS,
    UPDATE_NAVPATH
} from '../actions/menu';

const initialState = {
  items: [],
  navpath: []
};

export default function menu(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ALL_MENU_SUCCESS:
      return Object.assign({}, initialState, {items: action.payload.data.menus});
    case UPDATE_NAVPATH:
      let navpath = [], tmpOb, tmpKey, child;
      if(Array.isArray(action.payload.data)){
        action.payload.data.reverse().map((item)=>{
          if(item.indexOf('sub') != -1){
            tmpKey = item.replace('sub', '');
            tmpOb = _.find(state.items, function(o) {
              return o.key == tmpKey;
            });
            child = tmpOb.child;
            navpath.push({
              key: tmpOb.key,
              name: tmpOb.name
            })
          }
          if(item.indexOf('menu') != -1){
            tmpKey = item.replace('menu', '');
            if(child){
              tmpOb = _.find(child, function(o) {
                return o.key == tmpKey;
              });
              navpath.push({
                key: tmpOb.key,
                name: tmpOb.name
              });
            }
          }
        })
      }
      return Object.assign({}, state, {
        currentIndex: action.payload.key*1,
        navpath: navpath
      });
    default:
      return state;
  }
}
