const {
  CohortManager,
  StudentSelector,
  Exception,
} = require('../src/cohortmanager');
// const StudentSelector = require('../src/cohortmanager');

// const { cm, ss } = require('../src/cohortmanager');

describe('CohortManager, StudentSelector, Exception', () => {
  let testCM, testSS;

  beforeEach(() => {
    testCM = new CohortManager();
    testSS = new StudentSelector();
    testEXP = new Exception();
  });
  // ---TEST 1-???: test requirement: Create a cohort with a cohort name ---
  // ---TEST 1: Create one cohort called cohort1 ---
  it('creates a new cohort: cohort 1', () => {
    let expected = 'cohort1';
    let result = testCM.createCohort('cohort1');
    let resultName = result.name;
    expect(resultName).toEqual(expected);
  });
  // ---TEST 2-???: test requirement: Search for a cohort by cohort name ---
  // ---TEST 2: search for a cohort by name which does exist ---
  it('search for cohort1 which does exist by name', () => {
    let expected = 'cohort1';
    testCM.createCohort('cohort1');
    let result = testCM.findCohort('cohort1').name;
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
    testCM.createCohort('cohort1');
    let result = testCM.addStudentToCohort(2, 'cohort1');
    expect(result).toEqual(expected);
  });
  // ---TEST 4-???: test requirement: Remove a cohort by cohort name ---
  // ---TEST 4: remove cohort1 after creating it ---
  it('remove cohort1 after creating cohort1', () => {
    let expected = [];
    testCM.createCohort('cohort1');
    let result = testCM.removeCohort('cohort1');
    expect(result).toEqual(expected);
  });
  // ---TEST 5: remove cohort1 after creating cohort1 and cohort2 ---
  it('remove cohort1 after creating cohort1 & cohort2', () => {
    let expected = [
      {
        ID: 2,
        name: 'cohort2',
        status: 'space available',
        cohortStudents: [],
      },
    ];
    testCM.createCohort('cohort1');
    testCM.createCohort('cohort2');
    let result = testCM.removeCohort('cohort1');
    expect(result).toEqual(expected);
  });
  // ---TEST 6: test requirement - Search for student by student ID - EXT ---
  // ---TEST 6: selects student with student ID = 2 i.e. Oumar ---
  it('selects student with student ID = 2', () => {
    let expected = {
      studentid: 2,
      firstname: 'Oumar',
      'last name': 'Nibhanupudi',
      github: 'oumarnibhanupudi',
      username: 'Oumar',
      email: 'oumarnibhanupudi@gmail.com',
    };
    let result = testSS.findStudentByID(2);
    expect(result).toEqual(expected);
  });
  // ---TEST 7-???: test requirement -  Return errors if cohort or student not found - EXT ---
  // ---TEST 7: return error when finding cohort1 which does not exist ---
  it('returns error when finding cohort1 which does not exist', () => {
    const message = 'cohort not found';
    let expected = message;
    let result = testCM.findCohort('cohort1');
    expect(result).toEqual(expected);
  });
  // ---TEST 8: return no error when cohort1 is found and it does exist ---
  it('returns no error when finding cohort1 which does exist', () => {
    let expected = 'cohort1';
    testCM.createCohort('cohort1');
    let result = testCM.findCohort('cohort1');
    let resultName = result.name;
    expect(resultName).toEqual(expected);
  });
  // ---TEST 9: return error when finding student which does not exist ---
  it('return error when finding student which does not exist', () => {
    const message = 'student not found';
    let expected = message;
    let result = testSS.findStudentByID(60);
    expect(result).toEqual(expected);
  });
  // ---TEST 10: return no error when finding student that does exist ---
  fit('returns no error when finding student that does exist', () => {
    let expected = {
      studentid: 14,
      firstname: 'Kirke',
      'last name': 'Domhnaill',
      github: 'kirkedomhnaill',
      username: 'Kirke',
      email: 'kirkedomhnaill@gmail.com',
    };
    let result = testSS.findStudentByID(14);
    expect(result).toEqual(expected);
  });
});
