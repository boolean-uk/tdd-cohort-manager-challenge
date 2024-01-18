/* const list = ['cohort 1', 'cohort 2', 'cohort 3'];
 const searchFor = 'cohort 2'

 function search(cohortList, cohortName){
     return cohortList.find((coList) => coList === cohortName)
}

console.log(search(list, searchFor))

 */


class CohortManager {
    constructor() {
      this.cohorts = [
        {
            name: 'cohort1',
            students: [
                { id: 1, name: 'Tayo', age: 23 },
                { id: 2, name: 'Eazy', age: 22 },
                { id: 3, name: 'Tosin', age: 38 }
            ]
        }
      ];
    }
  
    create(cohortName) {

      const cohort = {
        name: cohortName,
        students : []
      };

      this.cohorts.push(cohort);
      return cohort;
    }
  

  }
  
  // Create an instance of CohortManager
  const cohortManager = new CohortManager();
  
  // Create a new cohort using the create method
  const newCohort4 = cohortManager.create('cohort4');
  const newCohort5 = cohortManager.create('cohort5');

  const newCohort6 = cohortManager.create('cohort6');

  
  // Print the cohorts array
  //console.log(cohortManager.cohorts);
  console.log(cohortManager, cohortList)

  
  module.exports = {CohortManager}
  
