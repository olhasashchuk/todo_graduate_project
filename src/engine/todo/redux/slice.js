import { createSlice } from '@reduxjs/toolkit';
import {defaultItems} from "./defaultItems.js";

const todoSlice = createSlice ({
    name: 'todo',
    initialState: {
        items: [...defaultItems],
        filteredItems: [],
        isFiltering: false,
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        setCheckedItem: (state, action) => {
            const { id, isChecked } = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            if (index !== -1) {
                state.items[index].isChecked = isChecked;
            }
            if (isChecked) {
                const [checkedItem] = state.items.splice(index, 1);
                state.items.push(checkedItem);
            }
        },
        setFilterItem: (state, action) => {
            state.filteredItems = state.items.filter(item =>
                item.text.toLowerCase().includes(action.payload.toLowerCase())
            );
            state.isFiltering = true;
        },

        clearFilter: (state, action) => {
            state.filteredItems = action.payload;
            state.isFiltering = false;
        }
    }
})

export default todoSlice