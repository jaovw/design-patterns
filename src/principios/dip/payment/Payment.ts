import DbProductFactory from "../factory/DbProductFactory";

export default class Payment {

    pay(productId: number): void {

        //  DEPENDENDO APENAS DE ABSTRACOES
        const dbProduct = DbProductFactory.create()

        const product = dbProduct.getProductById(productId)

        console.log(product)
    }
}