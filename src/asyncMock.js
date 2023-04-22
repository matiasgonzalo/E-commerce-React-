import { stock } from "./data/stock";

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
            reject("Rejacted")
        }, 2000);
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(stock.find(prod => parseInt(prod.id) === parseInt(productId)))
            reject("Rejacted")
        }, 2000);
    })
}

export const getProductsByCategoryId = (productCategoryId) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(stock.filter(prod => parseInt(prod.category) === parseInt(productCategoryId)))
            reject("Rejacted")
        }, 2000);
    })
}
