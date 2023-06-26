const { CohortManager, Cohort, Student } = require('../src/cohortManager.js')

describe('CohortManager method', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('createCohortByName returns true when cohort is successfully created', () => {
    const res = cohortManager.createCohortByName('Cohort 1')

    expect(res).toBeInstanceOf(Cohort)
  })

  it('createCohortByName returns false if a cohort with the same name already exists', () => {
    cohortManager.createCohortByName('Cohort 1')
    const res = cohortManager.createCohortByName('Cohort 1')

    expect(res).toEqual(false)
  })

  it('createCohortByName returns false if input is not a string', () => {
    const res = cohortManager.createCohortByName(521)

    expect(res).toEqual(false)
  })

  it('searchCohortByName returns all matching results', () => {
    cohortManager.createCohortByName('Cohort 1')
    cohortManager.createCohortByName('Cohort 2')
    cohortManager.createCohortByName('Cohort 3')
    cohortManager.createCohortByName('Cohort 4')
    cohortManager.createCohortByName('Cohort 1 and 2')

    const res = cohortManager.searchCohortByName('Cohort 1')
    expect(...res).toBeInstanceOf(Cohort)
  })

  it('searchCohortByName returns false if no matches', () => {
    cohortManager.createCohortByName('Cohort 1')
    cohortManager.createCohortByName('Cohort 2')
    cohortManager.createCohortByName('Cohort 3')
    cohortManager.createCohortByName('Cohort 4')
    cohortManager.createCohortByName('Cohort 1 and 2')

    const res = cohortManager.searchCohortByName('Cohort 5')
    expect(res).toEqual(false)
  })

  it('searchCohortByName returns false if invalid input', () => {
    cohortManager.createCohortByName('Cohort 1')
    cohortManager.createCohortByName('Cohort 2')
    cohortManager.createCohortByName('Cohort 3')
    cohortManager.createCohortByName('Cohort 4')
    cohortManager.createCohortByName('Cohort 1 and 2')

    const res = cohortManager.searchCohortByName(612)
    expect(res).toEqual(false)
  })

  it('addStudentToCohort returns true if student is successfully added', () => {
    cohortManager.createCohortByName('Cohort 1')
    const student = new Student(
      '321',
      'James',
      'Bot',
      'JamesBotGitHub',
      'Jamesbot@gmail.com'
    )

    const res = cohortManager.addStudentToCohort('Cohort 1', student)

    expect(res).toEqual(true)
  })

  it('addStudentToCohort returns false if input is invalid', () => {
    cohortManager.createCohortByName('Cohort 1')

    const res = cohortManager.addStudentToCohort(5213, 423)

    expect(res).toEqual(false)
  })

  it('addStudentToCohort returns false if cohort is not found', () => {
    cohortManager.createCohortByName('Cohort 1')
    const student = new Student(
      '321',
      'James',
      'Bot',
      'JamesBotGitHub',
      'Jamesbot@gmail.com'
    )

    const res = cohortManager.addStudentToCohort('Cohort 2', student)

    expect(res).toEqual(false)
  })

  it('addStudentToCohort returns false if cohort is full', () => {
    const cohort = cohortManager.createCohortByName('Cohort 1')
    cohort.students = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24
    ]
    const student = new Student(
      '321',
      'James',
      'Bot',
      'JamesBotGitHub',
      'Jamesbot@gmail.com'
    )

    const res = cohortManager.addStudentToCohort('Cohort 1', student)

    expect(res).toEqual(false)
  })

  it('addStudentToCohort returns false if student is a part of another cohort', () => {
    cohortManager.createCohortByName('Cohort 1')
    cohortManager.createCohortByName('Cohort 2')

    const student = new Student(
      '321',
      'James',
      'Bot',
      'JamesBotGitHub',
      'Jamesbot@gmail.com'
    )

    cohortManager.addStudentToCohort('Cohort 1', student)
    const res = cohortManager.addStudentToCohort('Cohort 2', student)

    expect(res).toEqual(false)
  })

  it('removeCohortByName returns true if cohort is successfully removed', () => {
    cohortManager.createCohortByName('Cohort 1')

    const res = cohortManager.removeCohortByName('Cohort 1')

    expect(res).toEqual(true)
  })

  it('removeCohortByName returns false if cohort is not found', () => {
    cohortManager.createCohortByName('Cohort 1')

    const res = cohortManager.removeCohortByName('Cohort 2')

    expect(res).toEqual(false)
  })

  it('removeCohortByName returns false if input is invalid', () => {
    cohortManager.createCohortByName('Cohort 1')

    const res = cohortManager.removeCohortByName(123)

    expect(res).toEqual(false)
  })

  it('removeStudentFromCohort returns true if student is successfully removed', () => {
    cohortManager.createCohortByName('Cohort 1')
    const student = new Student(
      '321',
      'James',
      'Bot',
      'JamesBotGitHub',
      'Jamesbot@gmail.com'
    )

    cohortManager.addStudentToCohort('Cohort 1', student)
    const res = cohortManager.removeStudentFromCohort('Cohort 1', student)

    expect(res).toEqual(true)
  })

  it('removeStudentFromCohort returns false if input is invalid', () => {
    cohortManager.createCohortByName('Cohort 1')
    const student = new Student(
      '321',
      'James',
      'Bot',
      'JamesBotGitHub',
      'Jamesbot@gmail.com'
    )

    cohortManager.addStudentToCohort('Cohort 1', student)
    const res = cohortManager.removeStudentFromCohort('Cohort 1', 421)

    expect(res).toEqual(false)
  })

  it('removeStudentFromCohort returns false if cohort does not exist', () => {
    cohortManager.createCohortByName('Cohort 1')
    const student = new Student(
      '321',
      'James',
      'Bot',
      'JamesBotGitHub',
      'Jamesbot@gmail.com'
    )

    cohortManager.addStudentToCohort('Cohort 1', student)
    const res = cohortManager.removeStudentFromCohort('Cohort 2', student)

    expect(res).toEqual(false)
  })

  it('removeStudentFromCohort returns false if student does not exist', () => {
    cohortManager.createCohortByName('Cohort 1')
    const student = new Student(
      '321',
      'James',
      'Bot',
      'JamesBotGitHub',
      'Jamesbot@gmail.com'
    )

    const res = cohortManager.removeStudentFromCohort('Cohort 1', student)

    expect(res).toEqual(false)
  })

  it('serachStudentByName returns all matching results if student is found', () => {
    cohortManager.createCohortByName('Cohort 1')
    const student = new Student(
      '321',
      'James',
      'Bot',
      'JamesBotGitHub',
      'Jamesbot@gmail.com'
    )

    cohortManager.addStudentToCohort('Cohort 1', student)

    const res = cohortManager.searchStudentByName('James Bot')

    expect(...res).toBeInstanceOf(Student)
  })

  it('serachStudentByName returns false if student is not found', () => {
    cohortManager.createCohortByName('Cohort 1')
    const student = new Student(
      '321',
      'James',
      'Bot',
      'JamesBotGitHub',
      'Jamesbot@gmail.com'
    )

    cohortManager.addStudentToCohort('Cohort 1', student)

    const res = cohortManager.searchStudentByName('James Man')

    expect(res).toEqual(false)
  })

  it('serachStudentByName returns false if input is invalid', () => {
    cohortManager.createCohortByName('Cohort 1')
    const student = new Student(
      '321',
      'James',
      'Bot',
      'JamesBotGitHub',
      'Jamesbot@gmail.com'
    )

    cohortManager.addStudentToCohort('Cohort 1', student)

    const res = cohortManager.searchStudentByName(521)

    expect(res).toEqual(false)
  })

  it('serachStudentById returns student if student is found', () => {
    cohortManager.createCohortByName('Cohort 1')
    const student = new Student(
      '321',
      'James',
      'Bot',
      'JamesBotGitHub',
      'Jamesbot@gmail.com'
    )

    cohortManager.addStudentToCohort('Cohort 1', student)

    const res = cohortManager.searchStudentById(321)

    expect(res).toBeInstanceOf(Student)
  })

  it('serachStudentById returns false if student is not found', () => {
    cohortManager.createCohortByName('Cohort 1')
    const student = new Student(
      '321',
      'James',
      'Bot',
      'JamesBotGitHub',
      'Jamesbot@gmail.com'
    )

    cohortManager.addStudentToCohort('Cohort 1', student)

    const res = cohortManager.searchStudentById(123)

    expect(res).toEqual(false)
  })

  it('serachStudentById returns false if input is invalid', () => {
    cohortManager.createCohortByName('Cohort 1')
    const student = new Student(
      '321',
      'James',
      'Bot',
      'JamesBotGitHub',
      'Jamesbot@gmail.com'
    )

    cohortManager.addStudentToCohort('Cohort 1', student)

    const res = cohortManager.searchStudentById('dindsa')

    expect(res).toEqual(false)
  })
})
