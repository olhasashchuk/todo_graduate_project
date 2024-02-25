import { put } from 'redux-saga/effects';
import slice from '../../redux/slice';
import {defaultItems} from "../../redux/defaultItems.js";

export function* clearDataWorker() {
    const payload = defaultItems;
    yield put(slice.actions.setItems(payload))
    localStorage.setItem('items', JSON.stringify(payload));

}
