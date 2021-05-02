export const addItem = (arr, item) => {
    // if (arr.find(element => element.product.id === item.id) === undefined) {
    //     console.log(arr,item);
        const res = arr.concat(item);
        console.log(res);
        return res;
    // }
    // console.log(arr,item);
    // return arr;
}