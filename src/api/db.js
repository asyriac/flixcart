import faker from "faker";
faker.seed(123);
export const products = [...Array(50)].map((_) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    image: faker.random.image(),
    price: faker.commerce.price(),
    inStock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.random.arrayElement([1, 2, 3, 4, 5])
}))