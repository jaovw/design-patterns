import DataBase from "../servers/DataBase";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware {

    public check(email: string, password: string): boolean {

        const user = DataBase.filter(item => item.email === email)

        if (!user.length) {

            console.log('Email nao cadastrado!')

            return false
        }

        if (user[0].permission === PermissionType.ADMIN) {

            console.log('Seja bem vindo ADMIN')

            return true
        }

        console.log('Seja bem vindo usuario')

        return this.checkNext(email, password)
    }

}