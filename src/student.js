export default class Student {
  constructor(name, id, githubUsername, email) {
    ;[this.firstName, this.lastName] = name.split(' ')
    this.githubUsername = githubUsername
    this.email = email
    this.id = id
  }
}
