import { EmitHelperUniqueNameCallback } from "typescript";
import Middleware from "../middlewares/Middleware";

export default class Server {

    private middleware: Middleware

    setMiddleware(middleware: Middleware): void {
        this.middleware = middleware
    }

    logIn(email: string, password: string): boolean {

        if (this.middleware.check(email, password)) {

            console.log('Usuario aturizado com sucesso')

            return true
        }

        return false
    }
}