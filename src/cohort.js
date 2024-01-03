class Cohort {
  constructor() {
    this.cohortList = []
  }

  //  Create a new cohor
  createCohort(cohortName) {
    // Check if cohort Name
    if (!cohortName) {
      throw new Error('Please provide a name for your cohort!')
    }

    // Check if a cohort with the same name already exists
    const existingCohort = this.cohortList.find(
      (cohort) => cohort.name === cohortName
    )

    if (existingCohort) {
      // Throw an error if a cohort with the same name already exists
      throw new Error('This cohort already exists. Please choose another name!')
    }
    const newCohort = {
      name: cohortName,
      students: [], // Initialize an empty array to store students (optional)
      capacity: 24
    }

    this.cohortList.push(newCohort)
    return this.cohortList
  }

  // search for a cohort by name
  searchCohort(cohortName) {
    const foundCohort = this.cohortList.find(
      (cohort) => cohort.name === cohortName
    )

    // Check if the cohort was not found
    if (!foundCohort) {
      throw new Error(
        `Cohort with the name '${cohortName}' not found. Please enter a valid cohort name.`
      )
    }

    // Return the found cohort
    return foundCohort
  }

  // Method to search for a student by ID in a specific cohort
  searchStudent(cohortName, studentID) {
    const findCohort = this.searchCohort(cohortName)
    const findStudent = findCohort.students.find(
      (student) => student.studentID === studentID
    )

    if (!findStudent) {
      throw new Error('Student not found. Please enter a valid student ID.')
    }

    return findStudent
  }

  // Method to add a student to a cohort
  addStudent(cohortName, studentToAdd) {
    const findCohort = this.searchCohort(cohortName)

    // Check if the student exists in any other cohort
    const studentExistsInOtherCohort = this.cohortList.some((otherCohort) =>
      otherCohort.students.some(
        (student) => student.studentID === studentToAdd.studentID
      )
    )

    if (studentExistsInOtherCohort) {
      throw new Error('This student is already enrolled in another cohort!')
    }

    // Check if the student already exists in the current cohort
    const studentExists = findCohort.students.find(
      (student) => student.studentID === studentToAdd.studentID
    )

    if (studentExists) {
      throw new Error('This student already exists in the current cohort!')
    }

    // Check if the cohort is full
    if (findCohort.students.length >= findCohort.capacity) {
      throw new Error('Cohort is full. Student cannot be added!')
    }

    // Add the student to the cohort
    findCohort.students.push(studentToAdd)
    return findCohort.students
  }

  // Method to remove a cohort by name
  removeCohort(cohortName) {
    const findCohort = this.searchCohort(cohortName)
    const findIndex = this.cohortList.indexOf(findCohort)

    this.cohortList.splice(findIndex, 1)
    return this.cohortList
  }

  // Method to remove a student from a cohort
  removeStudent(cohortName, studentID) {
    const findCohort = this.searchCohort(cohortName)
    const findStudent = findCohort.students.find(
      (student) => student.studentID === studentID
    )

    const findStudentIndex = findCohort.students.indexOf(findStudent)
    findCohort.students.splice(findStudentIndex, 1)

    return findCohort.students
  }
}
export default Cohort
