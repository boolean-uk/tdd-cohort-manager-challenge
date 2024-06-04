import { v4 as uuidv4 } from 'uuid';

class Student {
  constructor(firstName, lastName, githubUsername, email) {
    this.firstName = firstName
    this.lastName = lastName
    this.studentId = uuidv4()
    this.githubUsername = githubUsername
    this.email = email
  }
}

export default Student
