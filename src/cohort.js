class Cohorts {
  constructor() {
    this.cohortList = []
    this.id = 1
  }

  addCohort(cohortName) {
    if (cohortName === '') {
      throw new Error('Error: Please provide a Cohort name')
    }
    for (const cohort of this.cohortList) {
      const cohortNameList = Object.keys(cohort)[0]
      if (cohortNameList === cohortName) {
        throw new Error('Error: The name already exists')
      }
    }
    const newCohort = { [cohortName]: [] }
    this.cohortList.push(newCohort)
    return this.cohortList
  }

  searchByName(cohortName) {
    if (this.cohortList.length === 0) {
      throw new Error('ERROR: Cohort List is empty')
    }

    const targetCohort = this.cohortList.find((cohort) => {
      const cohortNameList = Object.keys(cohort)[0]
      return cohortNameList === cohortName
    })

    if (!targetCohort) {
      throw new Error('Error: Cohort name does not exist')
    }

    return targetCohort
  }

  removeByName(cohortName) {
    if (this.cohortList.length === 0) {
      throw new Error('ERROR: Cohort List is empty')
    }

    for (const cohort of this.cohortList) {
      const cohortNameList = Object.keys(cohort)[0]
      if (cohortNameList === cohortName) {
        const index = this.cohortList.indexOf(cohort)
        this.cohortList.splice(index, 1)
        console.log(this.cohortList)
        return this.cohortList
      } else if (cohortNameList !== cohortName) {
        throw new Error('Error: Cohort name does not exist')
      }
    }
  }

  addStudentToCohort(
    cohortName,
    studentFirstName,
    studentLastName,
    gitHubUsername,
    emailAddress
  ) {
    const student = {
      id: this.id++,
      firstName: studentFirstName,
      lastName: studentLastName,
      gitHub: gitHubUsername,
      email: emailAddress
    }
    const cohort = this.searchByName(cohortName)
    if (!cohort) {
      throw new Error('Error: Cohort not found')
    }
    const studentsList = cohort[cohortName]
    studentsList.push(student)

    return studentsList
  }

  removeStudentByName(cohortName, firstName, lastName) {
    const cohortIndex = this.cohortList.findIndex((cohort) =>
      cohort.hasOwnProperty(cohortName)
    )

    if (cohortIndex === -1) {
      throw new Error('Error: Cohort does not exist!')
    }

    const cohort = this.cohortList[cohortIndex][cohortName]
    const studentIndex = cohort.findIndex(
      (student) =>
        student.firstName === firstName && student.lastName === lastName
    )

    if (studentIndex === -1) {
      throw new Error('Error: Student does not exist!')
    }

    return cohort.splice(studentIndex, 1)[0]
  }
}
const cohort = new Cohorts()
cohort.addCohort('Cohort 1')
cohort.addCohort('Cohort 2')
cohort.addCohort('Cohort 3')
cohort.addCohort('Cohort 4')
cohort.addCohort('Cohort 5')
cohort.addCohort('Cohort 6')
cohort.addCohort('Cohort 7')
cohort.addCohort('Cohort 8')
cohort.addCohort('Cohort 9')
cohort.addCohort('Cohort 10')
cohort.addStudentToCohort('Cohort 2', 'sd2fs', 'sd22fs', 'asdasd', 'asdaasd')

cohort.addStudentToCohort('Cohort 1', 'sdfs', 'sdfs', 'asdasd', 'asdaasd')
cohort.removeStudentByName('Cohort 1', 'sdfs', 'sdfs')

console.log(cohort)
module.exports = Cohorts
