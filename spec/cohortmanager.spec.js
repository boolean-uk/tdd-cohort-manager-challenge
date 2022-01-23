// Note: you shouldn't need to change anything in this file.
const CohortManager = require('../src/cohortmanager');

describe('CohortManager', () => {
  let test;

  beforeEach(() => {
    test = new CohortManager();
  });
  // ---TEST 1-???: test requirement: Create a cohort with a cohort name ---
  // ---TEST 1: Create one cohort called cohort1 ---
  it('creates a new cohort: cohort 1', () => {
    let expected = 'cohort1';
    let result = test.createCohort('cohort1');
    let resultName = result.name;
    expect(resultName).toEqual(expected);
  });
  // ---TEST 2-???: test requirement: Search for a cohort by cohort name ---
  // ---TEST 2: search for a cohort by name which does exist ---
  it('search for cohort1 which does exist by name', () => {
    let expected = 'cohort1';
    test.createCohort('cohort1');
    let result = test.findCohortByName('cohort1').name;
    expect(result).toEqual(expected);
  });
  // ---TEST 3: search for a cohort by name which does not exist ---
  fit('search for cohort2 which does not exist by name', () => {
    let expected = undefined;
    test.createCohort('cohort1').name;
    let result = test.findCohortByName('cohort2').name;
    expect(result).toEqual(expected);
  });
});

//test comment to make file push
