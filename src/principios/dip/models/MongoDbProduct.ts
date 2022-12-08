import IProduct from "../interfaces/IProduct";

export default class MongoDbProduct implements IProduct {

    getProductById(productId: number): string {
        return `MongoDb: Exibindo dados do produto ${productId}`
    } 
}