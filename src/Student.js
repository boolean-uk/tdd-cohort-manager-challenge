class Student {
  create(firstName, lastName, email, githubUser, uniqueID) {
    const student = {
      studentID: uniqueID,
      firstName: firstName,
      lastName: lastName,
      email: email,
      githubUser: githubUser
    }
    return student
  }
}

module.exports = { Student }
