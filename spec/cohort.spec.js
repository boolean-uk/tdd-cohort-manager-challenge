import Cohort from '../src/cohort.js'
import Student from '../src/student.js'
import { Organization } from '../src/organization.js'

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

  describe('name change', () => {
    it('is possible with valid name', () => {
      const myCohort = new Cohort('#11')
      expect(myCohort.name).toEqual('#11')
      myCohort.setName('NewName')
      expect(myCohort.name).toEqual('NewName')
    })

    it('is not possible with invalid name input', () => {
      const myCohort = new Cohort('#11')
      expect(myCohort.name).toEqual('#11')

      expect(() => myCohort.setName(1254)).toThrowError('invalid input')
      expect(myCohort.name).toEqual('#11')
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

      expect(() => myCohort.addStudent({ id: 25 })).toThrowError(
        'Cohort is at maximum capacity'
      )
    })
  })

  describe('get students by name', () => {
    let myOrg
    let myCohort
    beforeAll(() => {
      myOrg = new Organization('Somewhere')
      myCohort = new Cohort('#11')
      for (let i = 0; i < 3; i++) {
        myCohort.addStudent(
          new Student('FirstName ' + i, 'LastName ' + i, '', '', myOrg)
        )
      }
    })

    it('works if student exists', () => {
      const result = myCohort.getStudentByName('FirstName 2 LastName 2')
      expect(typeof result).toEqual('object')
      expect(result.firstName).toEqual('FirstName 2')
      expect(result.lastName).toEqual('LastName 2')
    })

    it('does not work if student does not exist', () => {
      const result = myCohort.getStudentByName('FirstName 20 LastName 20')
      expect(result).toBeUndefined()
    })
  })

  describe('removing students', () => {
    let myOrg
    let myCohort
    beforeAll(() => {
      myOrg = new Organization('Somewhere')
      myCohort = new Cohort('#11')
      for (let i = 0; i < 3; i++) {
        myCohort.addStudent(
          new Student('FirstName ' + i, 'LastName ' + i, '', '', myOrg)
        )
      }
    })

    it('works if student exists', () => {
      const studentToRemove = myCohort.getStudentByName('FirstName 2 LastName 2')
      expect(studentToRemove).toBeDefined()
      myCohort.removeStudent(studentToRemove)
      expect(myCohort.getStudentByName('FirstName 2 LastName 2')).toBeUndefined()
    })

    it('fails if student does not exist', () => {
      const studentToRemove = new Student(
        'FirstName',
        'LastName',
        '',
        '',
        myOrg
      )
      expect(studentToRemove).toBeDefined()
      expect(() => myCohort.removeStudent(studentToRemove)).toThrowError('Student not present')
    })
  })
})
