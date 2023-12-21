/* const list = ['cohort 1', 'cohort 2', 'cohort 3'];
 const searchFor = 'cohort 2'

 function search(cohortList, cohortName){
     return cohortList.find((coList) => coList === cohortName)
}

console.log(search(list, searchFor))



 */


class CohortManager {
    constructor() {
      this.cohorts = [];
    }
  
    create(cohortName) {
      const cohort = {
        name: cohortName,
      };
      this.cohorts.push(cohort);
      return cohort;
    }
  
    search(name) {
      return this.cohorts.find((cohort) => cohort.name === name);
    }
  }
  
  // Create an instance of CohortManager
  const cohortManager = new CohortManager();
  
  // Create a new cohort using the create method
  const newCohort = cohortManager.create('cohort 1');
  
  // Print the cohorts array
  console.log(cohortManager.cohorts);
  
  export default CohortManager;
  