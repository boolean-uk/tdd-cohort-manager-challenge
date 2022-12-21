class Student {
  create(firstName, lastName, email, githubUser, uniqueID) {
    const student = {
      studentID: uniqueID,
      firstName: firstName,
      lastName: lastName,
      email: email,
      githubUser: githubUser,
      cohortID: null
    }
    return student
  }
}

module.exports = { Student }
