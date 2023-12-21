
// Import necessary classes and functions
//const CohortManager = require('../src/index.js');
import CohortManager from "../../src/index.js"; 
import Cohort from '../../src/cohort.js';
import Student from '../../src/student.js';

// Describe block for Cohort Manager 
describe('Cohort Manager', () => {
  let cohortManager;
  
  // Before each test, create a new Cohort Manager 
  beforeEach(() => {
    cohortManager = new CohortManager();
  });

  describe('createCohort', () => {
    it('should create a new cohort', () => {
      
      cohortManager.createCohort('class 11');
      expect(cohortManager.cohorts.length).toEqual(1);
      expect(cohortManager.cohorts[0].cohortName).toEqual('class 11');
    });

    it('should throw an error if cohort name is not a string or empty', () => {
      const invalidCohortName = 123;
      expect(() => cohortManager.createCohort(invalidCohortName)).toThrowError();
    });

    it('should throw an error if cohort name matches existing cohort', () => {
      const existingCohortName = 'ExistingCohort';
      cohortManager.createCohort(existingCohortName);
      expect(() => cohortManager.createCohort(existingCohortName)).toThrowError();
    });
  });


  
  
  describe('searchCohort', () => {
    it('should search cohort by name!', () => {
  const expected = cohortManager.createCohort('class 11');
  cohortManager.createCohort('class 0');
  const expected2 = cohortManager.createCohort('class 13');
  cohortManager.createCohort('class 4');
  const result = cohortManager.searchCohort('class 11');
  const result2 = cohortManager.searchCohort('class 13');
  expect(result).toEqual(expected);
  expect(result2).toEqual(expected2);
  });

});


describe('removeCohort', () => {
    it('should remove a cohort by name', () => {
      // Create cohorts
      cohortManager.createCohort('class 11');
      cohortManager.createCohort('class 15');
      cohortManager.createCohort('class 18');
    
      // Ensure all three cohorts are initially created
      expect(cohortManager.cohorts.length).toEqual(3);
    
      // Remove a cohort by name
      cohortManager.removeCohortByName('class 11');
    
      // Ensure 'class 11' cohort is removed
      expect(cohortManager.cohorts.length).toEqual(2);
    });
  
   // it('should throw an error if the cohort to be removed is not found', () => {
   //   // Ensure the initial state has three cohorts
   //   expect(cohortManager.cohorts.length).toEqual(3);
   //   
   //   // Attempt to remove a non-existing cohort and expect an error
   //   expect(() => cohortManager.removeCohortByName('nonExistingClass')).toThrowError(
   //     'cohortName cant be found!'
   //   );
   // 
   //   // Ensure the number of cohorts remains the same
   //   expect(cohortManager.cohorts.length).toEqual(3);
   // });
  });
  

});