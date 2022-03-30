export default class Student {

    firstName: string;
    lastName: string;
    githubUsername: string;
    email: string;

    constructor(firstName : string, lastName: string, githubUsername: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.githubUsername = githubUsername;
        this.email = email;
    }
}
