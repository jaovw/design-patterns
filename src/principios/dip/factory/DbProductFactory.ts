import IProduct from "../interfaces/IProduct";
import Db from "../models/Db";
import MySqlProduct from "../models/MySqlProduct";
import MongoDbProduct from "../models/MongoDbProduct";

export default class DbProductFactory {

    //  METODO ENCARREGADO DE INSTANCIAR O BANCO DE DADOS
    private static type: Db = Db.MYSQL

    public static create(): any /*IProduct*/ {

        if (DbProductFactory.type === Db.MYSQL) {

            return new MySqlProduct()

        } else if (DbProductFactory.type === Db.MONGODB) {

            return new MongoDbProduct()
        }
    }
}