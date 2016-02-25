import {
    GET_ALL_MENU
} from '../actions/menu';

const initialState = {
  currentIndex: 0,
  items: []
};

export default function menu(state = initialState, action = {}) {
    switch (action.type) {
        case GET_ALL_MENU:
            return Object.assign({}, initialState, {items: action.data});
        default:
            return state;
    }
}
