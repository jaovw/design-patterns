import IProduct from "../interfaces/IProduct";

export default class Product implements IProduct{

    getProductById(productId: number): string {
        return `MySQL: Exibindo dados do produto ${productId}`
    }
}