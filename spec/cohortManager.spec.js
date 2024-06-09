const CohortManager = require('../src/cohortManager');

describe('CohortManager', () => {
  let cohortManager;

  beforeEach(() => {
    cohortManager = new CohortManager();
  });

  it('should create a cohort with a cohort name', () => {
    const cohortName = 'Cohort 1';
    const cohort = cohortManager.createCohort(cohortName);
    expect(cohort.name).toBe(cohortName);
  });

  
});