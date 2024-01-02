
import Cohort from '../../src/cohort.js';

describe('Cohort', () => {
  // Variable to store the cohort instance
  let cohort;
  beforeEach(() => {
    cohort = new Cohort();
  });

  // Test case: Creating a cohort with a name

  it('creates a cohort with a unique name', () => {
    const cohortName = 'Cohort 1';
    cohort.createCohort(cohortName);
    expect(cohort.cohortList[0].name).toEqual(cohortName);
  });
  it('shows an error when creating a cohort with a duplicate name', () => {
    const cohortName = 'Cohort 1';
    cohort.createCohort(cohortName);
  
    
    expect(() => cohort.createCohort(cohortName)).toThrowError(
      'This cohort already exists. Please choose another name!'
    );
  });
});
