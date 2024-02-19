const cohorts = []
const COHORT_CAPACITY = 24
let idTracker = 1

/**
 * Creates a cohort with a given name
 * @returns A cohort object
 */
function create(name) {
  if (cohorts.some((c) => c.name === name)) {
    throw new Error(`A cohort with name "${name}" already exists!`)
  }
  const cohort = {
    name: name,
    students: [],
    cohortCapacity: COHORT_CAPACITY
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
  if (cohort.students.length + 1 > cohort.cohortCapacity) {
    throw new Error('Student max capacity reached!')
  }
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

/**
 * Find a specific student by id. This function searches all cohorts.
 * @returns A student if found, otherwise throws an error
 */
function findStudentById(studentId) {
  const student = cohorts
    .map((c) => c.students)
    .flat()
    .find((s) => s.id === studentId)
  if (student === undefined) {
    throw new Error(`No student with id: ${studentId}`)
  }
  return student
}

module.exports = {
  create: create,
  find: find,
  addStudent: addStudent,
  remove: remove,
  removeStudentById: removeStudentById,
  findStudentById: findStudentById
}
