/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable no-undef */
const {
  CohortManager,
  StudentSelector,
  Exception,
} = require('../src/cohortmanager');

describe('CohortManager, StudentSelector, Exception', () => {
  let testCM, testSS;

  beforeEach(() => {
    testCM = new CohortManager();
    testSS = new StudentSelector();
    testEXP = new Exception();
  });
  // ---TEST 1 - test requirement: Create a cohort with a cohort name ---
  it('creates a new cohort: cohort 1', () => {
    const expected = 'cohort1';
    const result = testCM.createCohort('cohort1');
    const resultName = result.name;
    expect(resultName).toEqual(expected);
  });
  // ---TEST 2 - test requirement: Search for a cohort by cohort name ---
  it('search for cohort1 which does exist by name', () => {
    const expected = 'cohort1';
    testCM.createCohort('cohort1');
    const result = testCM.findCohort('cohort1').name;
    expect(result).toEqual(expected);
  });
  // ---TEST 3 - test requirement: Add student to a specific cohort ---
  it('search for student ??? and adds to cohort1', () => {
    const expected = [
      {
        ID: 1,
        name: 'cohort1',
        status: 'space available',
        capacity: 1,
        cohortStudents: [
          {
            studentid: 3,
            firstname: 'Marjan',
            lastname: 'Agostini',
            github: 'MarjanAgostini',
            username: 'Marjan',
            email: 'marjanagostini@gmail.com',
          },
        ],
      },
    ];
    testCM.createCohort('cohort1');
    const result = testCM.addStudentToCohort(3, 'cohort1');
    expect(result).toEqual(expected);
  });
  // ---TEST 4 - test requirement: Remove a cohort by cohort name ---
  it('remove cohort1 after creating cohort1', () => {
    const expected = [];
    testCM.createCohort('cohort1');
    const result = testCM.removeCohort('cohort1');
    expect(result).toEqual(expected);
  });
  // ---TEST 5 - remove cohort1 after creating cohort1 and cohort2 ---
  it('remove cohort1 after creating cohort1 & cohort2', () => {
    const expected = [
      {
        ID: 2,
        name: 'cohort2',
        status: 'space available',
        capacity: 0,
        cohortStudents: [],
      },
    ];
    testCM.createCohort('cohort1');
    testCM.createCohort('cohort2');
    const result = testCM.removeCohort('cohort1');
    expect(result).toEqual(expected);
  });
  // ---TEST 6 - test requirement - Search for student by student ID - EXT ---
  it('selects student with student ID = 2', () => {
    const expected = {
      studentid: 2,
      firstname: 'Oumar',
      lastname: 'Nibhanupudi',
      github: 'oumarnibhanupudi',
      username: 'Oumar',
      email: 'oumarnibhanupudi@gmail.com',
    };
    const result = testSS.findStudentByID(2);
    expect(result).toEqual(expected);
  });
  // ---TEST 7 - test requirement -  Return errors if cohort or student not found - EXT ---
  it('returns error when finding cohort1 which does not exist', () => {
    const message = 'cohort not found';
    const expected = message;
    const result = testCM.findCohort('cohort1');
    expect(result).toEqual(expected);
  });
  // ---TEST 8 - return no error when cohort1 is found and it does exist ---
  it('returns no error when finding cohort1 which does exist', () => {
    const expected = 'cohort1';
    testCM.createCohort('cohort1');
    const result = testCM.findCohort('cohort1');
    const resultName = result.name;
    expect(resultName).toEqual(expected);
  });
  // ---TEST 9 - return error when finding student which does not exist ---
  it('return error when finding student which does not exist', () => {
    const message = 'student not found';
    const expected = message;
    const result = testSS.findStudentByID(60);
    expect(result).toEqual(expected);
  });
  // ---TEST 10 - return no error when finding student that does exist ---
  it('returns no error when finding student that does exist', () => {
    const expected = {
      studentid: 14,
      firstname: 'Kirke',
      lastname: 'Domhnaill',
      github: 'kirkedomhnaill',
      username: 'Kirke',
      email: 'kirkedomhnaill@gmail.com',
    };
    const result = testSS.findStudentByID(14);
    expect(result).toEqual(expected);
  });
  // ---TEST 11 - test requirement - Remove student from a specific cohort ---
  it('removes student with ID 1 from cohort1', () => {
    const expected = {
      ID: 1,
      name: 'cohort1',
      status: 'space available',
      capacity: 0,
      cohortStudents: [],
    };

    testCM.createCohort('cohort1');
    testCM.addStudentToCohort(1, 'cohort1');
    const result = testCM.removeStudentFromCohort(1, 'cohort1');
    expect(result[0]).toEqual(expected);
  });
  // ---TEST 12 - remove student with ID 1 from cohort1 which also has student with ID 2 ---
  it('removes student with ID1 from cohort1 but student with ID2 is still there', () => {
    const expected = [
      {
        studentid: 2,
        firstname: 'Oumar',
        lastname: 'Nibhanupudi',
        github: 'oumarnibhanupudi',
        username: 'Oumar',
        email: 'oumarnibhanupudi@gmail.com',
      },
    ];
    testCM.createCohort('cohort1');
    testCM.addStudentToCohort(1, 'cohort1');
    testCM.addStudentToCohort(2, 'cohort1');
    const result = testCM.removeStudentFromCohort(1, 'cohort1');
    expect(result[0].cohortStudents).toEqual(expected);
  });
  // ---TEST 13 - test requirement - max capacity 24 students
  it('add 24 students to cohort1', () => {
    expected = 24;
    testCM.createCohort('cohort1');
    testCM.addStudentToCohort(20, 'cohort1');
    testCM.addStudentToCohort(21, 'cohort1');
    testCM.addStudentToCohort(22, 'cohort1');
    testCM.addStudentToCohort(23, 'cohort1');
    testCM.addStudentToCohort(24, 'cohort1');
    testCM.addStudentToCohort(25, 'cohort1');
    testCM.addStudentToCohort(26, 'cohort1');
    testCM.addStudentToCohort(27, 'cohort1');
    testCM.addStudentToCohort(28, 'cohort1');
    testCM.addStudentToCohort(29, 'cohort1');
    testCM.addStudentToCohort(30, 'cohort1');
    testCM.addStudentToCohort(31, 'cohort1');
    testCM.addStudentToCohort(32, 'cohort1');
    testCM.addStudentToCohort(33, 'cohort1');
    testCM.addStudentToCohort(34, 'cohort1');
    testCM.addStudentToCohort(35, 'cohort1');
    testCM.addStudentToCohort(36, 'cohort1');
    testCM.addStudentToCohort(37, 'cohort1');
    testCM.addStudentToCohort(38, 'cohort1');
    testCM.addStudentToCohort(39, 'cohort1');
    testCM.addStudentToCohort(40, 'cohort1');
    testCM.addStudentToCohort(41, 'cohort1');
    testCM.addStudentToCohort(42, 'cohort1');
    const result = testCM.addStudentToCohort(43, 'cohort1');
    expect(result[0].capacity).toEqual(expected);
  });
  // ---TEST 14 - error message returned after attempt to add 25th student -
  it('add more than 25 students to cohort1 expect error message', () => {
    const message = 'capacity is 24 students only';
    testCM.createCohort('cohort1');
    testCM.addStudentToCohort(20, 'cohort1');
    testCM.addStudentToCohort(21, 'cohort1');
    testCM.addStudentToCohort(22, 'cohort1');
    testCM.addStudentToCohort(23, 'cohort1');
    testCM.addStudentToCohort(24, 'cohort1');
    testCM.addStudentToCohort(25, 'cohort1');
    testCM.addStudentToCohort(26, 'cohort1');
    testCM.addStudentToCohort(27, 'cohort1');
    testCM.addStudentToCohort(28, 'cohort1');
    testCM.addStudentToCohort(29, 'cohort1');
    testCM.addStudentToCohort(30, 'cohort1');
    testCM.addStudentToCohort(31, 'cohort1');
    testCM.addStudentToCohort(32, 'cohort1');
    testCM.addStudentToCohort(33, 'cohort1');
    testCM.addStudentToCohort(34, 'cohort1');
    testCM.addStudentToCohort(35, 'cohort1');
    testCM.addStudentToCohort(36, 'cohort1');
    testCM.addStudentToCohort(37, 'cohort1');
    testCM.addStudentToCohort(38, 'cohort1');
    testCM.addStudentToCohort(39, 'cohort1');
    testCM.addStudentToCohort(40, 'cohort1');
    testCM.addStudentToCohort(41, 'cohort1');
    testCM.addStudentToCohort(42, 'cohort1');
    testCM.addStudentToCohort(43, 'cohort1');
    const result = testCM.addStudentToCohort(44, 'cohort1');
    expect(result).toEqual(message);
  });
  // ---TEST 15 - test requirement - cohort cannot exist without a name -
  it('cohort cannot exist without a name', () => {
    const message = 'all cohorts must have a name';
    const result = testCM.createCohort();
    expect(result).toEqual(message);
  });
  // ---TEST 16 - test requirement - cohort cannot the same name as another cohort already made -
  it('cohort cannot the same name as another cohort already made', () => {
    const message = 'this name is already taken by another cohort';
    testCM.createCohort('cohort1');
    const result = testCM.createCohort('cohort1');
    expect(result).toEqual(message);
  });
  // ---TEST 17 - test requirement return students with the same first and lastname from any cohort -
  it('returns students with the same first and lastname from any cohort', () => {
    const expected = ['Zidane Tribal', 'Squall Leonhart'];
    testCM.createCohort('cohort1');
    testCM.addStudentToCohort(49, 'cohort1');
    testCM.addStudentToCohort(50, 'cohort1');
    testCM.addStudentToCohort(51, 'cohort1');
    testCM.addStudentToCohort(52, 'cohort1');
    testCM.addStudentToCohort(53, 'cohort1');
    const result = testCM.studentsMatchName('cohort1');
    expect(result).toEqual(expected);
  });
});
