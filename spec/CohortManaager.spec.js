const CohortManager = require('../src/CohortManager.js')

describe('CohortManager', () => {
  let CM

  beforeEach(() => {
    CM = new CohortManager()
  })

  it('should create a new cohort w/ user input as name', () => {
    CM.createCohort('coolest cohort')
    const result = CM.getAllCohorts()
    expect(result).toEqual([
      {
        name: 'coolest cohort',
        students: []
      }
    ])
  })

  it('should throw an error if user makes a new cohort w/ an existing cohorts name', () => {
    CM.createCohort('cohort 1')
    expect(() => CM.createCohort('cohort 1')).toThrow(
      new Error('A cohort with this name already exists')
    )
  })

  it('should return the cohort obj w/matching name as the user inputs', () => {
    CM.createCohort('cohort 8')
    const result = CM.searchForCohortBy('cohort 8')
    expect(result).toEqual({
      name: 'cohort 8',
      students: []
    })
  })

  it('should throw error if a cohort w/ user input name does not exist', () => {
    CM.createCohort('cohort 8')

    expect(() => CM.searchForCohortBy('cohort 1')).toThrow(
      new Error('A cohort with this name does NOT exist')
    )
  })

  it('should remove cohort with same name as user input', () => {
    CM.createCohort('cohort 1')
    CM.createCohort('cohort 2')
    CM.removeCohort('cohort 2')
    const result = CM.getAllCohorts()
    expect(result).toEqual([
      {
        name: 'cohort 1',
        students: []
      }
    ])
  })

  it('should throw error if a cohort w/ user input name does not exist', () => {
    CM.createCohort('cohort 1')
    CM.createCohort('cohort 2')
    expect(() => CM.removeCohort('cohort 69')).toThrow(
      new Error('A cohort with this name does NOT exist')
    )
  })

  it('should push student obj into cohort ', () => {
    CM.createCohort('cohort')
    const result = CM.addStudent(
      'Bob',
      'The-Builder',
      'bob-builds-stuff',
      'bobthebuilder@gmail.com',
      'cohort'
    )
    expect(result).toEqual({
      name: 'cohort',
      students: [
        {
          id: 1,
          firstName: 'Bob',
          lastName: 'The-Builder',
          github: 'bob-builds-stuff',
          email: 'bobthebuilder@gmail.com'
        }
      ]
    })
  })

  it('should throw error if cohort user inputs does not exist  ', () => {
    CM.createCohort('cohort 1')
    expect(() =>
      CM.addStudent(
        'Bob',
        'The-Builder',
        'bob-builds-stuff',
        'bobthebuilder@gmail.com',
        'cohort'
      )
    ).toThrow(new Error('A cohort with this name does NOT exist'))
  })

  it('should return student obj that was removed', () => {
    CM.createCohort('cohort 69')
    CM.addStudent(
      'Matt',
      'Smith',
      'the-eleventh-doctor',
      '11thdoctor@gmail.com',
      'cohort 69'
    )
    const result = CM.removeStudent('cohort 69', 1)
    expect(result).toEqual({
      id: 1,
      firstName: 'Matt',
      lastName: 'Smith',
      github: 'the-eleventh-doctor',
      email: '11thdoctor@gmail.com'
    })
  })

  it('should throw an error if cohort does not exist', () => {
    CM.createCohort('cohort 69')
    CM.addStudent(
      'Matt',
      'Smith',
      'the-eleventh-doctor',
      '11thdoctor@gmail.com',
      'cohort 69'
    )

    expect(() => CM.removeStudent('cohort 1', 1)).toThrow(
      new Error('A cohort with this name does NOT exist')
    )
  })

  it('should throw an error if student ID does not exist in student array', () => {
    CM.createCohort('cohort 69')
    CM.addStudent(
      'David',
      'Tennant',
      'the-tenth-doctor',
      '10thdoctor@gmail.com',
      'cohort 69'
    )

    expect(() => CM.removeStudent('cohort 69', 2)).toThrow(
      new Error('A Student with this ID does NOT exist')
    )
  })

  it('should return updated students array w/out removed student', () => {
    CM.createCohort('cohort 1')
    CM.addStudent(
      'Matt',
      'Smith',
      'the-eleventh-doctor',
      '11thdoctor@gmail.com',
      'cohort 1'
    )
    CM.addStudent(
      'David',
      'Tennant',
      'the-tenth-doctor',
      '10thdoctor@gmail.com',
      'cohort 1'
    )
    CM.removeStudent('cohort 1', 2)
    const result = CM.searchForCohortBy('cohort 1')
    expect(result).toEqual({
      name: 'cohort 1',
      students: [
        {
          id: 1,
          firstName: 'Matt',
          lastName: 'Smith',
          github: 'the-eleventh-doctor',
          email: '11thdoctor@gmail.com'
        }
      ]
    })
  })

  it('should return student obj found by id', () => {
    CM.createCohort('cohort 1')
    CM.addStudent(
      'Matt',
      'Smith',
      'the-eleventh-doctor',
      '11thdoctor@gmail.com',
      'cohort 1'
    )
    CM.addStudent(
      'David',
      'Tennant',
      'the-tenth-doctor',
      '10thdoctor@gmail.com',
      'cohort 1'
    )
    CM.addStudent(
      'Bob',
      'The-Builder',
      'bob-builds-stuff',
      'bobthebuilder@gmail.com',
      'cohort 1'
    )
    const result = CM.findStudentBy('cohort 1', 3)
    expect(result).toEqual({
      id: 3,
      firstName: 'Bob',
      lastName: 'The-Builder',
      github: 'bob-builds-stuff',
      email: 'bobthebuilder@gmail.com'
    })
  })
})
