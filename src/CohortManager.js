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
    return null
  }
  return cohort
}

/**
 * Adds a student to an existing cohort by name
 * @returns True if the process is successful, otherwise false
 */
function addStudent(student, cohortName) {
  const cohort = find(cohortName)
  if (cohort === null) {
    return false
  }
  student.id = idTracker
  idTracker += 1
  cohort.students.push(student)
  return true
}

module.exports = {
  create: create,
  find: find,
  addStudent: addStudent
}
