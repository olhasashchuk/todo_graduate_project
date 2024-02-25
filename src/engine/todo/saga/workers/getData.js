import { put } from 'redux-saga/effects';
import slice from '../../redux/slice';
import {defaultItems} from "../../redux/defaultItems.js";

export function* getDataWorker() {
    const data = JSON.parse(localStorage.getItem('items')) || defaultItems;
    yield put(slice.actions.setItems(data))
}