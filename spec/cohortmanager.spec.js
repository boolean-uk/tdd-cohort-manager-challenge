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
    let result = test.findCohort('cohort1').name;
    expect(result).toEqual(expected);
  });
  // ---TEST 3-???: test requirement: Add student to a specific cohort ---
  // ---TEST 3: get student by index and add to cohort1 ---
  it('search for student ??? and adds to cohort1', () => {
    let expected = [
      {
        ID: 1,
        name: 'cohort1',
        status: 'space available',
        cohortStudents: [
          {
            studentid: 3,
            firstname: 'Marjan',
            'last name': 'Agostini',
            github: 'MarjanAgostini',
            username: 'Marjan',
            email: 'marjanagostini@gmail.com',
          },
        ],
      },
    ];
    test.createCohort('cohort1');
    let result = test.addStudentToCohort(2, 'cohort1');
    expect(result).toEqual(expected);
  });
  // ---TEST 4-???: test requirement: Remove a cohort by cohort name ---
  // ---TEST 4: remove cohort1 after creating it ---
  it('remove cohort1 after creating cohort1', () => {
    let expected = [];
    test.createCohort('cohort1');
    let result = test.removeCohort('cohort1');
    expect(result).toEqual(expected);
  });
  // ---TEST 4: remove cohort1 after creating cohort1 and cohort2 ---
  fit('remove cohort1 after creating cohort1 & cohort2', () => {
    let expected = [
      {
        ID: 2,
        name: 'cohort2',
        status: 'space available',
        cohortStudents: [],
      },
    ];
    test.createCohort('cohort1');
    test.createCohort('cohort2');
    let result = test.removeCohort('cohort1');
    expect(result).toEqual(expected);
  });
});

//test comment to make file push
