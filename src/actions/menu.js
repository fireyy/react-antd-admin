export const GET_ALL_MENU = 'GET_ALL_MENU';

export function getAllMenu() {
  let menus = {};
  return {
    type: GET_ALL_MENU,
    data: menus
  }
}
