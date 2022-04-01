export default class Student {

    id: number;
    firstName: string;
    lastName: string;
    githubUsername: string;
    email: string;

    constructor(id: number, firstName : string, lastName: string, githubUsername: string, email: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.githubUsername = githubUsername;
        this.email = email;
    }
}
