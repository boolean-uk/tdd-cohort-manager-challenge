import Cohort from '../src/cohort.js'
import Student from '../src/student.js'

describe('Cohort', () => {
  let cohort

  beforeEach(() => {
    cohort = new Cohort()
  })

  describe('when creating a new cohort', () => {
    it('a valid cohort name is entered and returns true', () => {
      // set up

      // execute
      const result = cohort.createCohort('Cohort 1')

      // verify
      expect(result).toBeTrue()
    })

    it('a valid cohort name is entered and the cohort is added to cohortList', () => {
      // set up
      const expected = [{ name: 'Cohort 1', students: [] }]

      // execute
      cohort.createCohort('Cohort 1')
      const result = cohort.cohortList

      // verify
      expect(result).toEqual(expected)
    })

    it('when an invalid cohortName is entered, throw error', () => {
      // set up

      // execute/verify
      expect(() => cohort.createCohort()).toThrowError(
        'cohort name must be a valid string'
      )
    })
  })

  describe('find cohort by cohort name', () => {
    it('return cohort as object when successful', () => {
      // set up
      const expected = { name: 'Cohort 1', students: [] }

      // execute
      cohort.createCohort('Cohort 1')
      const result = cohort.findCohort('Cohort 1')

      // verify
      expect(result).toEqual(expected)
    })

    it('when invalid name input, throw error', () => {
      // set up

      // execute/verify
      expect(() => cohort.findCohort()).toThrowError('cohort does not exist')
    })
  })

  describe('add student to specific cohort', () => {
    it('cohort list is updated with new student details', () => {
      // set up
      cohort.createCohort('Cohort 1')
      const student1 = cohort.enrolStudent(
        'John',
        'Doe',
        'johndoe',
        'john@doe.com'
      )

      const expected = [
        {
          name: 'Cohort 1',
          students: [student1]
        }
      ]

      // execute
      cohort.addStudentToCohort('Cohort 1', 1)
      const result = cohort.cohortList

      // verify
      expect(result).toEqual(expected)
    })

    it('when invalid student input, throw error', () => {
      // set up

      // execute/verify
      expect(() => cohort.findStudent()).toThrowError('student does not exist')
    })
  })
})
