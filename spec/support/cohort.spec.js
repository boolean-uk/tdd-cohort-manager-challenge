import Cohort from "../../src/cohort.js"
describe('Cohort', () => {
    let cohort 

    beforeEach(() => {
          cohort = new Cohort()
    })

    // Creating a cohort
    it('creates a cohort with a name', () => {
        const cohortName = 'Cohort 1'
        cohort.createCohort(cohortName)

        const result = cohort.cohortList
        expect(result[0].name).toEqual(cohortName)
    })

    // Searching a cohort
    it('searches cohort with its name', () => {
        cohort.createCohort('Cohort 1')
        cohort.createCohort('Cohort 2')
        
        const expected = {name: 'Cohort 1', students: [], capacity: 24}
        const result = cohort.searchCohort('Cohort 1')

        expect(result).toEqual(expected)
    })

    // Adding a student
    it('can add a student to students list', () => {
        cohort.createCohort('Cohort 1')
        const student1 = {
            studentID: 1,
            fitrstName: 'John',
            lastName: 'Doe',
            userName: 'JohnDoe',
            email: 'johnDoe@gmail.com'
        }

        const student2 = {
            studentID: 2,
            fitrstName: 'Dylan',
            lastName: 'Wood',
            userName: 'Dylan',
            email: 'dylanwood@gmail.com'
        }
        const expected = [student1, student2]

        cohort.addStudent('Cohort 1', student1)
        const result = cohort.addStudent('Cohort 1', student2)
        expect(result).toEqual(expected)
    })

    it('throws error if same student exists in multiple cohorts', () => {
        cohort.createCohort('Cohort 1')
        cohort.createCohort('Cohort 2')
        cohort.addStudent('Cohort 1', {
            studentID: 1,
            fitrstName: 'John',
            lastName: 'Doe',
            userName: 'JohnDoe',
            email: 'johnDoe@gmail.com'
        })

        const result = cohort.addStudent('Cohort 2', {
            studentID: 1,
            fitrstName: 'John',
            lastName: 'Doe',
            userName: 'JohnDoe',
            email: 'johnDoe@gmail.com'
        })
        expect(result).toEqual("this student already enrolled in another Cohort!")

    })
    
}) 