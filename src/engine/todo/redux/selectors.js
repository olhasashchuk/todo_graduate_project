export default {
    items: state => state.todo.items,
    filteredItems: state => state.todo.filteredItems,
    isFiltering: state => state.todo.isFiltering,
}