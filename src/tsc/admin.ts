enum Permission {
    READ,
    WRITE,
    DELETE,
}

type User = {
    login: string,
};

type AdminPermission = {
    permission: Permission,
};

type Admin = User & AdminPermission;

function addAdmin(user:User):Admin {

    return {
        login: user.login,
        permission: Permission.READ
    }

}

export { User, Admin, Permission };
export default addAdmin;
