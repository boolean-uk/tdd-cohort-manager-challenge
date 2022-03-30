export default class Student {
    firstName: String;
    lastName: String;
    githubUsername: String;
    email: String;

    constructor(firstName : String, lastName: String, githubUsername: String, email: String) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.githubUsername = githubUsername;
        this.email = email;
    }
}
