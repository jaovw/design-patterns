import PermissionType from "./PermissionType";

interface DataBaseItem {
    email: string,
    password: string,
    permission: PermissionType
}

const DataBase: DataBaseItem[] = [
    {
        email: 'admin@email.com',
        password: '12345',
        permission: PermissionType.ADMIN
    },
    {
        email: 'user@email.com',
        password: '54321',
        permission: PermissionType.USER
    }
]

export default DataBase