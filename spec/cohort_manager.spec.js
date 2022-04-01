const Student = require('../src/student.js')
const Cohorts = require('../src/cohorts.js')
const CohortManager = require('../src/cohort_manager.js')

describe('cohort manager', () => {
  //TEST 1
  it('create a cohort with a cohort name', () => {
    // setup
    const manager = new CohortManager()
    const newCohort1 = new Cohorts('Cohort1')
    const expected = [newCohort1]
    // execute
    const result = manager.createCohort('Cohort1')
    // verify
    expect(result).toEqual(expected)
  })

  // TEST 2
  it('creates multiple cohorts with a cohort name', () => {
    // setup
    const manager = new CohortManager()
    const newCohort1 = new Cohorts('Cohort1')
    const newCohort2 = new Cohorts('Cohort2')
    const newCohort3 = new Cohorts('Cohort3')
    const expected = [newCohort1, newCohort2, newCohort3]
    // execute
    manager.createCohort('Cohort1')
    manager.createCohort('Cohort2')
    const result = manager.createCohort('Cohort3')
    // verify
    expect(manager.cohortList.length).toEqual(3)
    expect(expected).toEqual(result)
  })

  // //TEST 3
  it('search for cohort by cohort name', () => {
    // setup
    const manager = new CohortManager()
    // execute
    manager.createCohort('Cohort1')
    manager.createCohort('Cohort2')
    manager.createCohort('Cohort3')
    result = manager.searchByCohortName('Cohort2')
    // verify
    //console.log("RESULT: ",result)
    expect(result.name).toEqual('Cohort2')
  })

  //TEST 4
  it('search for cohort by name - COHORT IS NOT ON THE LIST', () => {
    // setup
    const manager = new CohortManager()
    const errorMessage = 'COHORT NOT FOUND'
    // execute
    manager.createCohort('Cohort1')
    manager.createCohort('Cohort2')
    manager.createCohort('Cohort3')
    result = manager.searchByCohortName('Cohort Non-Existent')
    // verify
    expect(result).toEqual(errorMessage)
  })

  //TEST 5
  it('add student to a specific cohort', () => {
    // setup
    const manager = new CohortManager()
    //execute
    manager.createCohort('Cohort1')
    manager.createCohort('Cohort2')
    manager.createCohort('Cohort3')
    result = manager.addStudent(
      'Cohort3',
      'David Czuczor',
      'd-username',
      'czdavid93@gmail.com'
    )
    // verify
    expect(result.name).toEqual('Cohort3')
    expect(result.students[0].firstName).toEqual('David')
    expect(result.students.length).toEqual(1)
  })

  // TEST 6
  it('add student to a specific cohort - when cohort DOES NOT EXIST', () => {
    // setup
    const manager = new CohortManager()
    //execute
    manager.createCohort('Cohort1')
    manager.createCohort('Cohort2')
    manager.createCohort('Cohort3')
    result = manager.addStudent(
      'Cohort5',
      'David Czuczor',
      'd-username',
      'czdavid93@gmail.com'
    )
    // verify
    expect(result).toEqual('COHORT NOT FOUND')
  })

  //TEST 7
  it('remove a cohort by cohort name', () => {
    // setup
    const manager = new CohortManager()
    const cohort1 = new Cohorts('Cohort1')
    const cohort3 = new Cohorts('Cohort3')
    const updatedList = [cohort1, cohort3]
    // execute
    manager.createCohort('Cohort1')
    manager.createCohort('Cohort2')
    manager.createCohort('Cohort3')
    result = manager.removeCohort('Cohort2')
    // verify
    expect(result).toEqual(updatedList)
  })

  //TEST 8
  it('remove a cohort by name - COHORT IS NOT VALID', () => {
    // setup
    const manager = new CohortManager()
    const errorMessage = 'NOT A VALID COHORT NAME'
    // execute
    manager.createCohort('Cohort1')
    manager.createCohort('Cohort2')
    manager.createCohort('Cohort3')
    result = manager.removeCohort('Non-Existent Cohort')
    // verify
    expect(result).toEqual(errorMessage)
  })

  //TEST 9
  it('remove a student from a specific cohort', () => {
    // setup
    const manager = new CohortManager()
    // execute
    manager.createCohort('Cohort1')
    manager.createCohort('Cohort2')
    manager.createCohort('Cohort3')
    manager.addStudent(
      'Cohort3',
      'Mike Wazowski',
      'mike_GH',
      'mike@monster.inc'
    )
    manager.addStudent(
      'Cohort3',
      'James Sullivan',
      'sullyGH',
      'sully@sully.inc'
    )
    manager.addStudent('Cohort3', 'Randall Boggs', 'boggsGH', 'boggs@inc.com')
    result = manager.removeStudent('Cohort3', 'Randall')
    // verify
    expect(result.students.length).toEqual(2)
    expect(result.students[0].firstName).toEqual('Mike')
    expect(result.students[1].firstName).toEqual('James')
  })

  // TEST 10
  it('remove a student from a specific cohort - COHORT OR STUDENT NOT FOUND', () => {
    // setup
    const manager = new CohortManager()
    const errorMessage = 'COHORT NOT FOUND'
    // execute
    manager.createCohort('Cohort1')
    manager.createCohort('Cohort2')
    manager.createCohort('Cohort3')
    manager.addStudent(
      'Cohort3',
      'Mike Wazowski',
      'mike_GH',
      'mike@monster.inc'
    )
    manager.addStudent(
      'Cohort3',
      'James Sullivan',
      'sullyGH',
      'sully@sully.inc'
    )
    manager.addStudent('Cohort3', 'Randall Boggs', 'boggsGH', 'boggs@inc.com')
    result = manager.removeStudent('Cohort5', 'Duck')
    // verify
    expect(result).toEqual(errorMessage)
  })

  // TEST 11
  it('find cohorts with students', () => {
    // setup
    const manager = new CohortManager()
    // execute
    manager.createCohort('Cohort1')
    manager.createCohort('Cohort2')
    manager.createCohort('Cohort3')
    manager.addStudent(
      'Cohort3',
      'Mike Wazowski',
      'mike_GH',
      'mike@monster.inc'
    )
    manager.addStudent(
      'Cohort3',
      'James Sullivan',
      'sullyGH',
      'sully@sully.inc'
    )
    manager.addStudent('Cohort3', 'Randall Boggs', 'boggsGH', 'boggs@inc.com')
    result = manager.findCohortsWithStudents()
    // verify
    expect(result.length).toEqual(1)
    expect(result[0].name).toEqual('Cohort3')
    expect(result[0].students.length).toEqual(3)
  })

  //TEST 12
  it('search for a student by ID', () => {
    // setup
    const manager = new CohortManager()
    // execute
    manager.createCohort('Cohort1')
    manager.createCohort('Cohort2')
    manager.createCohort('Cohort3')
    manager.addStudent(
      'Cohort3',
      'Mike Wazowski',
      'mike_GH',
      'mike@monster.inc'
    )
    manager.addStudent(
      'Cohort3',
      'James Sullivan',
      'sullyGH',
      'sully@sully.inc'
    )
    manager.addStudent('Cohort3', 'Randall Boggs', 'boggsGH', 'boggs@inc.com')
    result = manager.searchByID('2_J_S')
    // verify
    expect(result.firstName).toEqual('James')
    expect(result.email).toEqual('sully@sully.inc')
  })

  //TEST 13
  it('search for a student by ID - when id DOES NOT EXIST', () => {
    // setup
    const manager = new CohortManager()
    const errorMessage = 'NO STUDENT FOUND'
    // execute
    manager.createCohort('Cohort1')
    manager.createCohort('Cohort2')
    manager.createCohort('Cohort3')
    manager.addStudent(
      'Cohort3',
      'Mike Wazowski',
      'mike_GH',
      'mike@monster.inc'
    )
    manager.addStudent(
      'Cohort3',
      'James Sullivan',
      'sullyGH',
      'sully@sully.inc'
    )
    manager.addStudent('Cohort3', 'Randall Boggs', 'boggsGH', 'boggs@inc.com')
    result = manager.searchByID('ABC123')
    // verify
    expect(result).toEqual(errorMessage)
  })
})
