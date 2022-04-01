const CohortManager = require('../src/cohortManager.js')
const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')

describe ('cohortManager', () => {
  let cohortManager
  let cohort3
  let cohort4
  let cohort5
  let cohortX
  let arisaSigrist
  let bobRoss
  let michelleObama

  beforeEach(() => {
    cohortManager = new CohortManager()
    cohort3 = new Cohort(3)
    cohort4 = new Cohort(4)
    cohort5 = new Cohort(5)
    cohortX = new Cohort()
    arisaSigrist = new Student(
      0,
      'Arisa',
      'Sigrist',
      'sigristarisa',
      'arisasigrist.ch@gmail.com'
    )
    bobRoss = new Student(1, 'Bob', 'Ross', 'bobross', 'hi@bobross.com')
    michelleObama = new Student(
      2,
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
    const result = cohortManager.add(cohort5)
    // verify
    expect(result).toEqual(expected)
  })

  it('searches a specific cohort', () => {
    //   setup
    cohortManager.add(cohort3)
    cohortManager.add(cohort4)
    cohortManager.add(cohort5)

    const expected = cohort5
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
    cohortManager.add(cohort3)
    cohortManager.add(cohort4)
    cohortManager.add(cohort5)

    const expected = [cohort3, cohort5]
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
    const result = cohortManager.remove(6)
    // verify
    expect(result).toEqual(expected)
  })

  it('returns error because of duplicate cohort', () => {
    //   setup
    cohortManager.add(cohort3)
    cohortManager.add(cohort4)
    cohortManager.add(cohort5)

    const expected = Error('Empty name or name already exist')
    // evaluate
    const result = cohortManager.add(cohort5)
    // verify
    expect(result).toEqual(expected)
  })

  it('returns an error for adding cohort without name', () => {
    //   setup
    const expected = Error('Empty name or name already exist')
    // evaluate
    const result = cohortManager.add(cohortX)
    // verify
    expect(result).toEqual(expected)
  })

  it('search a student by name', () => {
    //   setup
    cohortManager.add(cohort5)
    cohortManager.add(cohort4)
    cohortManager.add(cohort3)

    cohort5.add(arisaSigrist)
    cohort4.add(bobRoss)
    cohort3.add(michelleObama)

    const expected = 'Arisa Sigrist is in Cohort 5'
    // evaluate
    const result = cohortManager.searchStudent('Arisa', 'Sigrist')
    // verify
    expect(result).toEqual(expected)
  })

  it('returns error for searching a non-existing student', () => {
    //   setup
    cohortManager.add(cohort5)
    cohortManager.add(cohort4)
    cohortManager.add(cohort3)

    cohort5.add(arisaSigrist)
    cohort5.add(bobRoss)
    cohort5.add(michelleObama)

    const expected = Error('Ed Sheeran do not exist')
    // evaluate
    const result = cohortManager.searchStudent('Ed', 'Sheeran')
    // verify
    expect(result).toEqual(expected)
  })

  it('returns no overlapping students', () => {
    //   setup
    cohortManager.add(cohort5)
    cohortManager.add(cohort4)
    cohortManager.add(cohort3)

    cohort5.add(arisaSigrist)
    cohort5.add(bobRoss)
    cohort5.add(michelleObama)

    const expected = []
    // evaluate
    const result = cohortManager.checkOverlapStudents()
    // verify
    expect(result).toEqual(expected)
  })

  it('returns overlapping students', () => {
    //   setup
    cohortManager.add(cohort5)
    cohortManager.add(cohort4)
    cohortManager.add(cohort3)

    cohort3.add(arisaSigrist)
    cohort5.add(arisaSigrist)
    cohort5.add(bobRoss)
    cohort5.add(michelleObama)

    const expected = [arisaSigrist]
    // evaluate
    const result = cohortManager.checkOverlapStudents()
    // verify
    expect(result).toEqual(expected)
  })

})
