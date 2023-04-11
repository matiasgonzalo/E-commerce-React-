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
            resolve(stock.find(prod => prod.id === productId))
            reject("Rejacted")
        }, 2000);
    })
}
