
class CohortManager {
  constructor () {
    this.cohortList = []
    this.studentId = 1
  }

  get (cohortNum) {
    return this.cohortList.find(cohort => cohort.name === cohortNum)
  }

  add (newCohort) {
    const existingCohort = this.get(newCohort.name)
    if (!newCohort.name || existingCohort) return Error('Empty name or name already exist')
    this.cohortList.push(newCohort)
    return 'You have added Cohort ' + newCohort.name
  }

  search (cohortNum) {
    const targetCohort = this.get(cohortNum)
    if (!targetCohort) return Error('this cohort do not exist')
    return targetCohort
  }

  remove (cohortNum) {
    const targetCohort = this.get(cohortNum)
    const targetIndex = this.cohortList.indexOf(targetCohort)
    if (!targetCohort) return Error('this cohort do not exist')
    this.cohortList.splice(targetIndex, 1)
    return this.cohortList
  }

  checkOverlapStudents (id, firstName, lastName, githubName, email) {
    const fullName = `${firstName} ${lastName}`

    for (const cohort of this.cohortList) {
      const targetStudent = cohort.students.find(student => student.id === id && student.fullName === fullName && student.githubName === githubName && student.email === email)
      if (targetStudent) return Error(`${fullName} already exists in Cohort ${cohort.name} – please remove`)
    }
    return `${fullName} do not exist – please add to appropriate Cohort`
  }

  searchStudent (firstName, lastName) {
    const fullName = `${firstName} ${lastName}`

    for (const cohort of this.cohortList) {
      const targetStudent = cohort.students.find(student => student.fullName === fullName)
      if (targetStudent) return `${targetStudent.fullName} is in Cohort ${cohort.name}`
    }
    return Error(`${fullName} do not exist`)
  }
}
module.exports = CohortManager
