const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')
describe('CohortManager', () => {
    let cohort
    beforeEach(() => {
        cohort = new Cohort()
    })

    it('Add a student to a specific cohort', () => {
        //set up
        //create student
        const expected = new Student('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
            //add a cohort

        //execute
        //add student to a specific cohort
        const result = cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')

        //verify
        expect(result).toEqual(expected)
    })

    it('Remove student from a specific cohort', () => {
        //set up
        //create student
        const expected = []
            //execute
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        const result = cohort.removeStudent('elvis')

        //verify
        expect(result).toEqual(expected)
    })

    it('search for existing student', () => {
        const expected = new Student('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        const result = cohort.searchStudent('elvis')
        expect(result).toEqual(expected)
    })

    it('Return error if student not found', () => {
        //set up
        //create student
        const expected = 'error'
            //execute
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        const result = cohort.searchStudent('pauline')

        //verify
        expect(result).toEqual(expected)
    })

    it('fixed capacity at 24', () => {
        //set up
        //create student
        const expected = 'maximum capacity reached'
            //execute
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        cohort.addStudent('id', 'elvis', 'ono', 'elvisonob', 'elvisonob@yahoo.com')
        const result = cohort.fixedCapacity()

        //verify
        expect(result).toEqual(expected)
    })



})