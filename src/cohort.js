class Cohort {
  constructor() {
    this.cohortList = []
  }

  createCohort(cohortName) {
    if (typeof cohortName !== 'string')
      throw new Error('cohort name must be a valid string')
    const newCohort = { name: cohortName, students: [] }

    this.cohortList.push(newCohort)
  }

  findCohort(cohortName) {
    const cohortToFind = this.cohortList.find(
      (cohort) => cohort.name === cohortName
    )
    if (!cohortToFind) throw new Error(`Cohort doesn't exist`)

    return cohortToFind
  }

  addStudentToCohort(cohortName, student) {
    const existingCohort = this.cohortList.find(
      (cohort) => cohort.name === cohortName
    )
    if (!existingCohort) throw new Error(`Cohort doesn't exist`)

    existingCohort.students.push(student)
    return existingCohort
  }
}

const bb = new Cohort()
bb.createCohort('aayush')
bb.addStudentToCohort('aayush', 'gunda')

console.log(bb.cohortList)

export default Cohort
