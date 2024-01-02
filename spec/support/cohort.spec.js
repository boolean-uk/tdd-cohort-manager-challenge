
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

  // Searching a cohort 
it('finds a cohort with its name', () => {
  // Creating cohorts
  cohort.createCohort('Cohort 1');
  cohort.createCohort('Cohort 2');

  // Expected result for 'Cohort 1'
  const expectedCohort = { name: 'Cohort 1', students: [], capacity: 24 };

  // Searching for 'Cohort 1'
  const foundCohort = cohort.searchCohort('Cohort 1');
  expect(foundCohort).toEqual(expectedCohort);
});

// Test case for searching a cohort that doesn't exist
it('shows an error when searching for a non-existent cohort', () => {
  // Attempting to search for a cohort that doesn't exist
  const nonExistentCohortName = 'Non-existent Cohort';
  
  expect(() => cohort.searchCohort(nonExistentCohortName))
    .toThrowError("Cohort with the name 'Non-existent Cohort' not found. Please enter a valid cohort name.");
});




});
