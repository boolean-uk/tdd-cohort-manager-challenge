export default function findDuplicateStudent(
  firstName,
  lastName,
  githubUsername,
  email,
  cohorts
) {
  for (let i = 0; i < cohorts.length; i++) {
    const duplicateStudent = cohorts[i].students.find(
      (student) =>
        student.firstName === firstName &&
        student.lastName === lastName &&
        student.githubUsername === githubUsername &&
        student.email === email
    )
    if (duplicateStudent) {
      return true
    }
  }
}
