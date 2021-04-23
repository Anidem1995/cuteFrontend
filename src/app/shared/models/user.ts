export class User {
    idUser: number;
    name: string;
    lastName: string;
    username: string;
    email: string;
    hashedPassword: string;
    idEmployee!: number;

    constructor(
        idUser: number,
        name: string,
        lastName: string,
        username: string,
        email: string,
        hashedPassword: string,
        idEmployee = 0){
            this.idUser = idUser;
            this.name = name;
            this.lastName = lastName;
            this.username = username;
            this.email = email;
            this.hashedPassword = hashedPassword;
            this.idEmployee = idEmployee;
        }
}
