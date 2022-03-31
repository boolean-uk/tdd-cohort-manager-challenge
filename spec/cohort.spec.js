const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')

describe('Cohort', () => {
  let cohort5
  let arisaSigrist
  let bobRoss
  let michelleObama

  beforeEach(() => {
    cohort5 = new Cohort(5)
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

  it('checks if the student is added to the student lists', () => {
    //   setup
    cohort5.add(arisaSigrist)

    const expected = [arisaSigrist]
    // evaluate
    const result = cohort5.students
    // verify
    expect(result).toEqual(expected)
  })

  it('removes a specific student from the cohort', () => {
    //   setup
    cohort5.add(arisaSigrist)
    cohort5.add(bobRoss)

    const expected = [arisaSigrist]
    // evaluate
    const result = cohort5.remove('Bob Ross')
    // verify
    expect(result).toEqual(expected)
  })

  it('returns an error for trying to remove a non-existing student', () => {
    //   setup
    cohort5.add(arisaSigrist)
    cohort5.add(bobRoss)

    const expected = 'ERROR – this student do not exist'
    // evaluate
    const result = cohort5.remove('Michele Obama')
    // verify
    expect(result).toEqual(expected)
  })

  it('searchs a student by id', () => {
    cohort5.add(arisaSigrist)
    cohort5.add(bobRoss)
    cohort5.add(michelleObama)

    const expected = arisaSigrist
    // evaluate
    const result = cohort5.search(0)
    // verify
    expect(result).toEqual(expected)
  })

  it('keeps adding students since is less than capacity', () => {
    cohort5.add(arisaSigrist)
    cohort5.add(bobRoss)
    cohort5.add(michelleObama)

    const expected = [arisaSigrist, bobRoss, michelleObama]
    // evaluate
    const result = cohort5.students

    // verify
    expect(result).toEqual(expected)
  })

  it('returns a error since it is more than capacity', () => {
    cohort5.students = ['studentA', 'studentB', 'studentC']
    cohort5.add(arisaSigrist)
    cohort5.add(bobRoss)

    const expected = cohort5.add(michelleObama)
    // evaluate
    const result = 'ERROR – this cohort hit the capacity'

    // verify
    expect(result).toEqual(expected)
  })
})
