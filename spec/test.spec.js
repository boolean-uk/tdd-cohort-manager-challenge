const Manager = require('../src/manager.js')
const Student = require('../src/student.js')
const Cohort = require('../src/cohort.js')


describe('Cohort tests', () => {
    let manager;
 


    beforeEach(() => {
        manager = new Manager()
    })

    //Q1
    
    it('create a cohort list', () => {
        // set up 
        const expected = 'Cohort 4'
        // execute
        const result = manager.create('Cohort 4')
        // verify
        expect(result).toEqual(expected)
      })
    // it('create a cohort list', () => {
    //     //setup
    //     const expected = []
    //     //execute
    //     const result = manager.showList()
    //     //verfity 
    //     expect(result).toEqual(expected)
    // })

    it('add cohort to cohort list', () => {
        //setup
        const expected = ['Cohort 4']
        //execute
        manager.addCohort()
        const result = manager.showList()
        //verfity 
        expect(result).toEqual(expected)
    })
    //Q2
    it('Search for a cohort by cohort name', () => {
        //setup
        const expected = {
            classNo: 4,
             name: ('Cohort 4')
        }
        //execute
        manager.addCohort('Cohort 4')
        manager.addCohort('Cohort 3')
        manager.addCohort('Cohort 2')
        manager.addCohort('Cohort 1')
        const result = manager.searchCohort(4)
        //verfity 
        expect(result).toEqual(expected)
    })
    
})
