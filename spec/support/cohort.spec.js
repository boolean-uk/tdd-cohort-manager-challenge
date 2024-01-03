import Cohort from '../../src/cohort.js';

describe('Cohort', () => {
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

  // Test case: Searching for a cohort

  it('finds a cohort with its name', () => {
    cohort.createCohort('Cohort 1');
    cohort.createCohort('Cohort 2');

    const expectedCohort = { name: 'Cohort 1', students: [], capacity: 24 };
    const foundCohort = cohort.searchCohort('Cohort 1');
    expect(foundCohort).toEqual(expectedCohort);
  });

  it('shows an error when searching for a non-existent cohort', () => {
    const nonExistentCohortName = 'Non-existent Cohort';
    expect(() => cohort.searchCohort(nonExistentCohortName)).toThrowError(
      `Cohort with the name '${nonExistentCohortName}' not found. Please enter a valid cohort name.`
    );
  });

  // Test case: Adding students to a cohort

  it('can add students to a cohort', () => {
    cohort.createCohort('Cohort 1');

    const student1 = {
      studentID: 1,
      firstName: 'Steven',
      lastName: 'Smith',
      githubUsername: 'Steven',
      email: 'stevensmith@gmail.com',
    };

    const student2 = {
      studentID: 2,
      firstName: 'Oscar',
      lastName: 'Wild',
      githubUsername: 'Oscar',
      email: 'oscarwild@gmail.com',
    };

    const expected = [student1, student2];

    cohort.addStudent('Cohort 1', student1);
    const result = cohort.addStudent('Cohort 1', student2);
    expect(result).toEqual(expected);
  });


  it('throws an error if the same student exists in multiple cohorts', () => {
    cohort.createCohort('Cohort 1');
    cohort.createCohort('Cohort 2');
    cohort.addStudent('Cohort 1', {
      studentID: 1,
      firstName: 'Steven',
      lastName: 'Smith',
      githubUsername: 'Steven',
      email: 'stevensmith@gmail.com',
    });


    expect(() =>
      cohort.addStudent('Cohort 2', {
        studentID: 1,
        firstName: 'Steven',
        lastName: 'Smith',
        githubUsername: 'Steven',
        email: 'stevensmith@gmail.com',
      })
    ).toThrowError("This student is already enrolled in another cohort!");
  });

  // Test case: Searching for a student

  it('searches for a student by their ID', () => {
    cohort.createCohort('Cohort 1');
    const student = {
      studentID: 1,
      firstName: 'Steven',
      lastName: 'Smith',
      githubUsername: 'Steven',
      email: 'stevensmith@gmail.com',
    };
    cohort.addStudent('Cohort 1', student);

    const result = cohort.searchStudent('Cohort 1', 1);
    expect(result).toEqual(student);
  });


  it('throws an error if the student is not found', () => {
    cohort.createCohort('Cohort 1');
    expect(() => cohort.searchStudent('Cohort 1', 2)).toThrowError(
      'Student not found. Please enter a valid student ID.'
    );
  });

  // Test case: Removing a cohort by its name

  it('removes a cohort by its name', () => {
    cohort.createCohort('Cohort 1');
    cohort.createCohort('Cohort 2');
    cohort.removeCohort('Cohort 1');
    expect(cohort.cohortList.length).toEqual(1);
  });

  // Test case: Removing a student from a specific cohort
  
  it('removes a student from a specific cohort', () => {
    cohort.createCohort('Cohort 1');

    const student1 = {
      studentID: 1,
      firstName: 'Steven',
      lastName: 'Smith',
      githubUsername: 'Steven',
      email: 'stevensmith@gmail.com',
    };

    const student2 = {
      studentID: 2,
      firstName: 'Oscar',
      lastName: 'Wild',
      githubUsername: 'Oscar',
      email: 'oscarwild@gmail.com',
    };

    cohort.addStudent('Cohort 1', student1);
    cohort.addStudent('Cohort 1', student2);

    const result = cohort.removeStudent('Cohort 1', student2);
    expect(result).toEqual([student1]);
  });
});
