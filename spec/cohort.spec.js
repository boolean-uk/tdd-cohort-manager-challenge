import Cohort from '../src/cohort.js'
import Student from '../src/student.js'

// students @Object[] | | | | ❌
// | | | getStudentbyName() | fullName()@String | @Object{} | ❌
// | | | addStudent() | @Object{} | @Object{} | ❌
// | | | removeStudent() | @Object{} | @Object{} | ❌
// | | | setName() | cohortName@String | @Object{} | ❌
// | | | isFull() | | @Boolean | ❌

describe('cohort', () => {
  describe('creation', () => {
    it('is possible with valid name input', () => {
      const myCohort = new Cohort('#11')
      expect(myCohort.name).toEqual('#11')
      expect(myCohort.students).toEqual([])
    })

    it('creation fails when name is not a string', () => {
      expect(() => new Cohort('')).toThrowError('invalid input')
    })
  })

  describe('capacity', () => {
    it('after creation isFull is false', () => {
      const myCohort = new Cohort('#11')
      expect(myCohort.isFull()).toBeFalse()
    })

    it('after addition of 24 students isFull is true', () => {
      const myCohort = new Cohort('#11')
      for (let i = 0; i < 24; i++) {
        myCohort.students.push({ id: i })
      }
      expect(myCohort.isFull()).toBeTrue()
      expect(myCohort.students.length).toEqual(24)
    })

    it('at max lets adding students fail', () => {
      const myCohort = new Cohort('#11')
      for (let i = 0; i < 24; i++) {
        myCohort.students.push({ id: i })
      }

      expect(myCohort.addStudent({ id: 25 })).toThrowError(
        'Cohort is at maximum capacity'
      )
    })
  })
})
