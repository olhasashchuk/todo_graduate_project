import {v4 as uuidv4 } from 'uuid';
import { put, select} from 'redux-saga/effects'
import slice from '../../redux/slice'
import Selectors from "../../redux/selectors.js";
export function* setDataWorker(action) {
    const { payload } = action;
    const items = yield select(Selectors.items)
    const newItem = {
        id: `item_${uuidv4()}`,
        text: payload.text_input,
        isChecked: false,
    };
    yield put(slice.actions.addItem(newItem));
    localStorage.setItem('items', JSON.stringify([...items, newItem]));
}