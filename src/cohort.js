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
}
export default Cohort
