import { createAction } from "@reduxjs/toolkit";

export const getDataAsyncAction = createAction('GET_DATA_ASYNC')
export const setDataAsyncAction = createAction('SET_DATA_ASYNC')
export const clearDataAsyncAction = createAction('CLEAR_DATA_ASYNC')
export const checkedDataAsyncAction = createAction('CHECKED_DATA_ASYNC')
export const getFilterItemAsyncAction = createAction('FILTER_DATA_ASYNC')
export const clearFilterItemAsyncAction = createAction('CLEAR_FILTER_DATA_ASYNC')

