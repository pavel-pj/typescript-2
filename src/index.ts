//https://github.com/stemmlerjs/simple-typescript-starter/tree/master
 import addAdmin, {  User, Permission } from './tsc/admin'


const user: User = { login: 'login1' };

 const admin = addAdmin(user); // { login: 'login1', permission: Permission.READ }
 console.log(admin)






