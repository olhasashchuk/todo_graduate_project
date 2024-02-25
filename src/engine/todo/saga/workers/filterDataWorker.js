import { put } from 'redux-saga/effects'
import slice from '../../redux/slice'

export function* filterDataWorker(action) {
    const { payload } = action;
    yield put(slice.actions.setFilterItem(payload));
}