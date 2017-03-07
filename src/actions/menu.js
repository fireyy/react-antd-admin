import api from '../api'

export const GET_ALL_MENU = 'GET_ALL_MENU';
export const GET_ALL_MENU_SUCCESS = 'GET_ALL_MENU_SUCCESS';
export const UPDATE_NAVPATH = 'UPDATE_NAVPATH';

export function updateNavPath(path, key) {
  return {
    type: UPDATE_NAVPATH,
    payload: {
      data: path,
      key: key
    }
  }
}

export function getAllMenu() {
  return {
    type: GET_ALL_MENU,
    payload: {
      promise: api.get('/menu')
    }
  }
}
