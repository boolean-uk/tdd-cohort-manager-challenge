const CohortManager = require('../src/cohortManager.js')
const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')

describe ('cohortManager', () => {
  let cohortManager
  let cohort3
  let cohort4
  let cohort5
  let arisaSigrist
  let bobRoss
  let michelleObama

  beforeEach(() => {
    cohortManager = new CohortManager()
    cohort3 = new Cohort(3)
    cohort4 = new Cohort(4)
    cohort5 = new Cohort(5)
    arisaSigrist = new Student(
      'Arisa',
      'Sigrist',
      'sigristarisa',
      'arisasigrist.ch@gmail.com'
    )
    bobRoss = new Student('Bob', 'Ross', 'bobross', 'hi@bobross.com')
    michelleObama = new Student(
      'Michelle',
      'Obama',
      'mrsobama',
      'michelle@usa.com'
    )
  })

it('adds a new cohort is added to the cohort list', () => {
    //   setup

    const expected = 'You have added Cohort 5'
    // evaluate
    const result = cohortManager.add(5)
    // verify
    expect(result).toEqual(expected)
  })

  it('searches a specific cohort', () => {
    //   setup
    cohortManager.add(3)
    cohortManager.add(4)
    cohortManager.add(5)

    const expected = cohortManager.cohortList[2]
    // evaluate
    const result = cohortManager.search(5)
    // verify
    expect(result).toEqual(expected)
  })

  it('returns a error for searching a non-existant cohort', () => {
    //   setup
    cohortManager.add(3)
    cohortManager.add(4)
    cohortManager.add(5)

    const expected = Error('this cohort do not exist')
    // evaluate
    const result = cohortManager.search(6)
    // verify
    expect(result).toEqual(expected)
  })

  it('returns a error since it is more than capacity', () => {
    cohort5.students = ['studentA', 'studentB', 'studentC']
    cohort5.add(arisaSigrist)
    cohort5.add(bobRoss)

    const expected = cohort5.add(michelleObama)
    // evaluate
    const result = Error('this cohort hit the capacity')
    // verify
    expect(result).toEqual(expected)
  })

  it('removes specific cohort and returns the cohort list', () => {
    //   setup
    cohortManager.add(3)
    cohortManager.add(4)
    cohortManager.add(5)

    const expected = cohortManager.cohortList
    // evaluate
    const result = cohortManager.remove(4)
    // verify
    expect(result).toEqual(expected)
  })

  it('returns an error for trying to remove a non-existing cohort', () => {
    //   setup
    cohortManager.add(cohort3)
    cohortManager.add(cohort4)
    cohortManager.add(cohort5)

    const expected = Error('this cohort do not exist')
    // evaluate
    const result = cohortManager.remove('Cohort 6')
    // verify
    expect(result).toEqual(expected)
  })

  it('returns cohort list with names and no duplicates', () => {
    //   setup
    cohortManager.add(3)
    cohortManager.add(4)
    cohortManager.add(5)

    const expected = Error('Empty name or name already exist')
    // evaluate
    const result = cohortManager.add(5)
    // verify
    expect(result).toEqual(expected)
  })

  it('returns an error for adding cohort without name', () => {
    //   setup
    const expected = Error('Empty name or name already exist')
    // evaluate
    const result = cohortManager.add('')
    // verify
    expect(result).toEqual(expected)
  })
})
