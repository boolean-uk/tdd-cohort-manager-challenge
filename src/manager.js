class Manager {
  constructor() {
    this.cohortList = []
  }

  createCohortName(cohortName) {
    const cohort = {
      name: cohortName,
      studentList: []
    }
    this.cohortList.push(cohort)
    return this.cohortList
  }

  searchCohortName(cohortName) {
    const newArray = []
    for (let i = 0; i < this.cohortList.length; i++) {
      const cohortObject = this.cohortList[i]
      if (cohortObject.name === cohortName) {
        newArray.push(cohortObject)
      }
    }
    return newArray
  }

  removeCohortName(cohortName) {
    if (this.searchCohortName(cohortName)) {
      for (let i = 0; i < this.cohortList.length; i++) {
        if (this.cohortList[i].name === cohortName) {
          this.cohortList.splice(i, 0)
          console.log(this.cohortList)
          break
        }
      }
      return this.cohortList
    }
  }
}

module.exports = Manager
