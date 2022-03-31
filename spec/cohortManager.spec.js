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
    cohortManager.add(cohort5)

    const expected = [cohort5]
    // evaluate
    const result = cohortManager.cohortList
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
    cohortManager.add(cohort3)
    cohortManager.add(cohort4)
    cohortManager.add(cohort5)

    const expected = Error('this cohort do not exist')
    // evaluate
    const result = cohortManager.search('Cohort 6')
    // verify
    expect(result).toEqual(expected)
  })

  it('returns a error since it is more than capacity', () => {
    cohortManager.add(cohort5)
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

    cohortManager.remove(4)

    const expected = [cohort3, cohort5]
    // evaluate
    const result = cohortManager.cohortList
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
    cohortManager.add(cohort3)
    cohortManager.add(cohort4)
    cohortManager.add(cohort5)
    cohortManager.add(cohort5)
    cohortManager.add(cohort5)
    cohortManager.add(cohortX)

    const expected = [cohort3, cohort4, cohort5]
    // evaluate
    const result = cohortManager.eligible()
    // verify
    expect(result).toEqual(expected)
  })



  /* --------- TESTS FOR COHORT.SPEC.JS BY USING COHORTMANAGER CLASS --------- */
  it('checks if the student is added to the student lists', () => {
    //   setup
    cohortManager.add(cohort5)
    cohort5.add(arisaSigrist)

    const expected = cohortManager.cohortList[0].students[0]
    // evaluate
    const result = arisaSigrist
    // verify
    expect(result).toEqual(expected)
  })

  it('removes a specific student from the cohort', () => {
    //   setup
    cohortManager.add(cohort5)
    cohort5.add(arisaSigrist)
    cohort5.add(bobRoss)
    cohort5.remove('Bob Ross')

    const expected = [arisaSigrist]
    // evaluate
    const result = cohortManager.cohortList[0].students
    // verify
    expect(result).toEqual(expected)
  })

  it('returns an error for trying to remove a non-existing student', () => {
    //   setup
    cohortManager.add(cohort5)
    cohort5.add(arisaSigrist)
    cohort5.add(bobRoss)

    const expected = Error('this student do not exist')
    // evaluate
    const result = cohort5.remove('Michele Obama')
    // verify
    expect(result).toEqual(expected)
  })

  it('searchs a student by id', () => {
    cohortManager.add(cohort5)
    cohort5.add(arisaSigrist)
    cohort5.add(bobRoss)
    cohort5.add(michelleObama)

    cohort5.students[0].id = 0
    const expected = arisaSigrist
    // evaluate
    const result = cohort5.search(0)
    // verify
    expect(result).toEqual(expected)
  })

  it('keeps adding students since is less than capacity', () => {
    cohortManager.add(cohort5)
    cohort5.add(arisaSigrist)
    cohort5.add(bobRoss)
    cohort5.add(michelleObama)

    const expected = [arisaSigrist, bobRoss, michelleObama]
    // evaluate
    const result = cohortManager.cohortList[0].students

    // verify
    expect(result).toEqual(expected)
  })

})
