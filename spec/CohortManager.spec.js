const CohortManager = require('../src/CohortManager.js')

describe('CohortManager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  describe('createCohort', () => {
    it('should create a new cohort with the given cohort name', () => {
      // set up
      const expected = {
        cohortName: 'cohort1',
        students: []
      }

      // execute
      const createdCohort = cohortManager.createCohort('cohort1')

      // verify
      expect(createdCohort).toEqual(expected)
    })

    // it('should return an existing cohort if the cohort with the same name already exists', () => {
    //   // set up
    //   const expected = {
    //     cohortName: 'cohort1',
    //     students: []
    //   }

    //   // execute
    //   const createdCohort1 = cohortManager.createCohort('cohort1')
    //   const createdCohort2 = cohortManager.createCohort('cohort2')

    //   //   verify
    //   expect(createdCohort1).toEqual(createdCohort2)
    // })
  })

  describe('findCohortByName', () => {
    beforeEach(() => {
      cohortManager.createCohort('cohort1')
      cohortManager.createCohort('cohort2')
      cohortManager.createCohort('cohort3')
    })

    it('should find a cohort by its given cohort name', () => {
      // set up
      const expected = {
        cohortName: 'cohort2'
      }

      // execute
      const foundCohort = cohortManager.findCohortByName('cohort2')

      //   verify
      expect(foundCohort.cohortName).toEqual('cohort2')
    })

    // it('should return null if the cohort with the given name does not exist', () => {
    //   // set up
    //   const expected = {
    //     cohortName: 'cohort2'
    //   }
    //   // execute
    //   const foundCohort = cohortManager.findCohortByName('cohort4')

    //   // verify
    //   expect(foundCohort).toBeNull()
    // })

    describe('addStudent', () => {
      beforeEach(() => {
        cohortManager.createCohort('cohort1')
      })

      it('should add a student to the specified cohort', () => {
        // Set up
        const expected = {
          cohortName: 'cohort1',
          students: [
            {
              studentID: 1,
              firstname: 'Sara',
              lastname: 'JB',
              gitusername: '@sarajbeazley',
              email: 'sara@gmail.com'
            }
          ]
        }

        // Execute
        const addedStudent = cohortManager.addStudent('1', 'cohort1')

        // Verify
        expect(addedStudent.studentID).toEqual('1')

        const cohort = cohortManager.findCohortByName('cohort1')
        expect(cohort.students.length).toEqual(1)
        expect(cohort.students[0]).toEqual(addedStudent)
      })

      it('should throw an error if the specified cohort does not exist', () => {
        // Set up
        const studentID = 1
        const cohortName = 'nonexistentcohort'

        // Verify
        expect(() => {
          cohortManager.addStudent(studentID, cohortName)
        }).toThrowError("Cohort 'nonexistentcohort' does not exist.")
      })

      describe('removeStudent', () => {
        beforeEach(() => {
          cohortManager.createCohort('cohort1')
          cohortManager.addStudent(1, 'cohort1')
          cohortManager.addStudent(2, 'cohort2')
        })

        it('should remove the student from the specified cohort', () => {
          // Set up
          const studentID = 1
          const cohortName = 'cohort1'

          // Evaluate
          const removedStudent = cohortManager.removeStudent(
            studentID,
            cohortName
          )

          // Verify
          const cohort = cohortManager.findCohortByName(cohortName)
          expect(removedStudent).toEqual({ studentID: 1 })
          expect(cohort.students.length).toEqual(0)
          // expect(cohort.students[0].studentID).toEqual(2)
        })

        // it('should throw an error if the specified cohort does not exist', () => {
        //   // Set up
        //   const studentID = 1
        //   const cohortName = 'nonexistentcohort'

        //   // Verify
        //   expect(() => {
        //     cohortManager.removeStudent(studentID, cohortName)
        //   }).toThrowError("Cohort 'nonexistentcohort' does not exist.")
        // })

        // it('should throw an error if the student with the given ID does not exist in the cohort', () => {
        //   // Set up
        //   const studentID = 3
        //   const cohortName = 'cohort1'

        //   // Verify
        //   expect(() => {
        //     cohortManager.removeStudent(studentID, cohortName)
        //   }).toThrowError(
        //     "Student with ID '3' does not exist in cohort 'cohort1'."
        //   )
        // })
      })
    })
  })
})
