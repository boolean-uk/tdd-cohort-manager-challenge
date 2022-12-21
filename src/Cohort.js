class Cohort {
  create(name, uniqueID) {
    const cohort = {
      cohortID: uniqueID,
      name: name,
      students: []
    }
    return cohort
  }
}

module.exports = { Cohort }
