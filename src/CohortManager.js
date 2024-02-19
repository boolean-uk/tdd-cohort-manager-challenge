const cohorts = []
let idTracker = 1

/**
 * Creates a cohort with a given name
 * @returns A cohort object
 */
function create(name) {
  const cohort = {
    name: name,
    students: []
  }
  cohorts.push(cohort)
  return cohort
}

/**
 * Finds a specific cohort by name
 * @returns The cohort with the given name, otherwise null
 */
function find(name) {
  const cohort = cohorts.find((p) => p.name === name)
  if (cohort === undefined) {
    throw new Error(`No cohort with name: ${name}`)
  }
  return cohort
}

/**
 * Adds a student to an existing cohort by name
 * @returns True if the process is successful, otherwise false
 */
function addStudent(student, cohortName) {
  const cohort = find(cohortName)
  student.id = idTracker
  idTracker += 1
  cohort.students.push(student)
  return true
}

/**
 * Removes a cohort by a given name
 * @returns True if the deletion is successful, otherwise false
 */
function remove(name) {
  const cohort = find(name)
  const cohortIndex = cohorts.indexOf(cohort)
  cohorts.splice(cohortIndex, 1)
  return true
}

/**
 * Removes a specific student from a cohort by id
 * @returns True if the deletion is successful, otherwise false
 */
function removeStudentById(cohortName, studentId) {
  const cohort = find(cohortName)
  const studentIndex = cohort.students.map((s) => s.id).indexOf(studentId)
  if (studentIndex === -1) {
    throw new Error(`No student with id: ${studentId}`)
  }
  cohort.students.splice(studentIndex, 1)
  return true
}

module.exports = {
  create: create,
  find: find,
  addStudent: addStudent,
  remove: remove,
  removeStudentById: removeStudentById
}
