import {
    GET_ALL_MENU,
    GET_ALL_MENU_SUCCESS
} from '../actions/menu';

const initialState = {
  currentIndex: 0,
  items: []
};

export default function menu(state = initialState, action = {}) {
    switch (action.type) {
        case GET_ALL_MENU_SUCCESS:
            return Object.assign({}, initialState, {items: action.payload.menus});
        default:
            return state;
    }
}
