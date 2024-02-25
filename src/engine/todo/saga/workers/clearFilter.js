import { put } from 'redux-saga/effects';
import slice from '../../redux/slice';

export function* clearFilterWorker() {
    const payload = [];
    yield put(slice.actions.clearFilter(payload))
}