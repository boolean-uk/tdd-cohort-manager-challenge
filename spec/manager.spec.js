const Manager = require('../src/manager.js')

describe('Handle cohorts and Students', () => {
  it('Create a new Cohort', () => {
    // setUp
    const manager = new Manager()
    manager.addCohort('Cohort 5')

    const expected = [{ name: 'Cohort 5', students: [], id: 1, maxCapacity: 3 }]
    // verify
    expect(manager.cohorts).toEqual(expected)
  })
  it('Search for cohort', () => {
    // setUp
    const manager = new Manager()
    manager.addCohort('Cohort 5')
    manager.addCohort('Cohort 8')
    const cohort = manager.searchCohort('Cohort 5')
    const expected = { name: 'Cohort 5', students: [], id: 1, maxCapacity: 3 }
    // verify
    expect(cohort).toEqual(expected)
  })
  it('Search for cohort which doesnt exist', () => {
    // setUp
    const manager = new Manager()
    manager.addCohort('Cohort 5')
    manager.addCohort('Cohort 8')
    const cohort = manager.searchCohort('Cohort 9')
    console.log(cohort)
    const expected = 'Cohort not found'
    // verify
    expect(cohort).toEqual(expected)
  })
  it('Add Student to Cohort', () => {
    // setUp
    const manager = new Manager()
    manager.addCohort('Cohort 5')
    manager.addCohort('Cohort 8')
    manager.addStudent('Cohort 8', 'Tibor Toth', 'Tibor22', 'tibor@gmail.com')
    const expected = [
      {
        firstName: 'Tibor',
        lastName: 'Toth',
        githubUsername: 'Tibor22',
        email: 'tibor@gmail.com',
        id: 1
      }
    ]
    // verify
    expect(manager.searchCohort('Cohort 8').students).toEqual(expected)
  })
  it(' Remove student from Cohort', () => {
    // setUp
    const manager = new Manager()
    manager.addCohort('Cohort 5')
    manager.addCohort('Cohort 8')
    manager.addStudent('Cohort 5', 'Tibor Toth', 'Tibor22', 'tibor@gmail.com')
    manager.addStudent('Cohort 5', 'Bob Bagel', 'Bob10', 'bob@gmail.com')
    manager.removeStudent('Cohort 5', 2)
    const expected = [
      {
        firstName: 'Tibor',
        lastName: 'Toth',
        githubUsername: 'Tibor22',
        email: 'tibor@gmail.com',
        id: 1
      }
    ]
    // verify
    expect(manager.searchCohort('Cohort 5').students).toEqual(expected)
  })
  it(' Return error if student not found', () => {
    // setUp
    const manager = new Manager()
    manager.addCohort('Cohort 5')
    manager.addCohort('Cohort 8')
    manager.addStudent('Cohort 5', 'Tibor Toth', 'Tibor22', 'tibor@gmail.com')
    manager.addStudent('Cohort 5', 'Bob Bagel', 'Bob10', 'bob@gmail.com')
    manager.removeStudent('Cohort 5', 2)
    const expected = [
      {
        firstName: 'Tibor',
        lastName: 'Toth',
        githubUsername: 'Tibor22',
        email: 'tibor@gmail.com',
        id: 1
      }
    ]
    // verify
    expect(manager.searchCohort('Cohort 5').students).toEqual(expected)
  })
  it('Search for student', () => {
    // setUp
    const manager = new Manager()
    manager.addCohort('Cohort 5')
    manager.addCohort('Cohort 8')
    manager.addStudent('Cohort 5', 'Tibor Toth', 'Tibor22', 'tibor@gmail.com')
    manager.addStudent('Cohort 5', 'Bob Bagel', 'Bob10', 'bob@gmail.com')

    const expected = {
      firstName: 'Tibor',
      lastName: 'Toth',
      githubUsername: 'Tibor22',
      email: 'tibor@gmail.com',
      id: 1
    }

    // verify
    expect(manager.searchStudent(1)).toEqual(expected)
  })
  it('Max capacity for cohort', () => {
    // setUp
    const manager = new Manager()
    manager.addCohort('Cohort 5')
    manager.addCohort('Cohort 8')
    manager.addStudent('Cohort 5', 'Tibor Toth', 'Tibor22', 'tibor@gmail.com')
    manager.addStudent('Cohort 5', 'Bob Bagel', 'Bob10', 'bob@gmail.com')
    manager.addStudent('Cohort 5', 'Bob Bagel', 'Bob10', 'bob@gmail.com')
    let last = manager.addStudent(
      'Cohort 5',
      'Bob Bagel',
      'Bob10',
      'bob@gmail.com'
    )

    const expected = 'Cohort is full'

    // verify
    expect(last).toEqual(expected)
  })
  it('Cant have 2 same Cohort', () => {
    // setUp
    const manager = new Manager()
    manager.addCohort('Cohort 5')
    let result = manager.addCohort('Cohort 5')

    const expected = 'This cohort already exist'

    // verify
    expect(result).toEqual(expected)
  })
})
