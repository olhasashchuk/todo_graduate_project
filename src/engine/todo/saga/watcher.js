import { takeEvery } from 'redux-saga/effects';
import {getDataWorker} from "./workers/getData.js";
import {
    checkedDataAsyncAction,
    clearDataAsyncAction, clearFilterItemAsyncAction,
    getDataAsyncAction, getFilterItemAsyncAction,
    setDataAsyncAction,
} from "./asynkActions.js";
import {setDataWorker} from "./workers/setData.js";
import {clearDataWorker} from "./workers/clearData.js";
import {checkedDataWorker} from "./workers/checkedData.js";
import {filterDataWorker} from "./workers/filterDataWorker.js";
import {clearFilterWorker} from "./workers/clearFilter.js";
export function* watcher() {
    yield takeEvery(getDataAsyncAction.type, getDataWorker);
    yield takeEvery(setDataAsyncAction.type, setDataWorker);
    yield takeEvery(clearDataAsyncAction.type, clearDataWorker);
    yield takeEvery(checkedDataAsyncAction.type, checkedDataWorker);
    yield takeEvery(getFilterItemAsyncAction.type, filterDataWorker);
    yield takeEvery(clearFilterItemAsyncAction.type, clearFilterWorker);
}