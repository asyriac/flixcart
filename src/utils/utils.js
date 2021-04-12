export const addItem = (arr, item) => {
    if (arr.find(element => element.id === item.id) === undefined) {
        return arr.concat({ ...item, qty: 1 })
    }
    return arr;
}