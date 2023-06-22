const CohortManager = require('../src/cohort.js')

describe('CohortManger', () => {
  let cohortList

  beforeEach(() => {
    cohortList = new CohortManager()
  })

  it('Create a new cohort', () => {
    // Given
    const name = 'Cohort 1'
    const expected = [
      {
        cohortName: 'Cohort 1',
        students: []
      }
    ]
    // When
    const res = cohortList.createCohort(name)
    // Then
    expect(res).toEqual(expected)
  })

  it('Search cohort by cohort name', () => {
    // Given
    const name1 = 'Cohort 1'
    const name2 = 'Cohort 2'

    const expected = {
      cohortName: 'Cohort 2',
      students: []
    }
    // When
    cohortList.createCohort(name1)
    cohortList.createCohort(name2)
    const res = cohortList.searchCohort('Cohort 2')
    // Then
    expect(res).toEqual(expected)
  })

  it('Search for non existing cohort', () => {
    // Given
    const name1 = 'Cohort 1'
    const name2 = 'Cohort 2'

    // When
    cohortList.createCohort(name1)
    cohortList.createCohort(name2)

    // Then
    expect(() =>
      cohortList.searchCohort('Cohort 3').toThrowError('Cohort does not exist')
    )
  })

  it('Create student for a specific cohort', () => {
    // Given
    const student = {
      firstName: 'Chris',
      lastName: 'Sach',
      gitUserName: 'ChrisJS90',
      email: 'christophersach90@gmail.com'
    }

    const expected = {
      cohortName: 'Cohort 1',
      students: [
        {
          studentId: 1,
          firstName: 'Chris',
          lastName: 'Sach',
          gitUserName: 'ChrisJS90',
          email: 'christophersach90@gmail.com'
        }
      ]
    }
    // When
    cohortList.createCohort('Cohort 1')
    const res = cohortList.createStudent(
      'Cohort 1',
      student.firstName,
      student.lastName,
      student.gitUserName,
      student.email
    )
    // Then
    expect(res).toEqual(expected)
  })

  it('Remove existing cohort', () => {
    // Given
    const name1 = 'Cohort 1'
    const name2 = 'Cohort 2'

    const expected = [
      {
        cohortName: 'Cohort 2',
        students: []
      }
    ]

    // When
    cohortList.createCohort(name1)
    cohortList.createCohort(name2)

    const res = cohortList.removeCohort('Cohort 1')

    // Then
    expect(res).toEqual(expected)
  })

  it('Remove student from specific cohort', () => {
    // Given
    const name1 = 'Cohort 1'

    const student1 = {
      firstName: 'Chris',
      lastName: 'Sach',
      gitUserName: 'ChrisJS90',
      email: 'christophersach90@gmail.com'
    }

    const student2 = {
      firstName: 'Rei',
      lastName: 'Ayanami',
      gitUserName: 'EvaUnitZero',
      email: 'deffoNotAClone@nerv.com'
    }

    const expected = {
      cohortName: 'Cohort 1',
      students: [
        {
          studentId: 2,
          firstName: 'Rei',
          lastName: 'Ayanami',
          gitUserName: 'EvaUnitZero',
          email: 'deffoNotAClone@nerv.com'
        }
      ]
    }

    // When
    cohortList.createCohort(name1)
    cohortList.createStudent(
      'Cohort 1',
      student1.firstName,
      student1.lastName,
      student1.gitUserName,
      student1.email
    )
    cohortList.createStudent(
      'Cohort 1',
      student2.firstName,
      student2.lastName,
      student2.gitUserName,
      student2.email
    )
    const res = cohortList.removeStudent('Cohort 1', 1)

    // Then
    expect(res).toEqual(expected)
  })
})
