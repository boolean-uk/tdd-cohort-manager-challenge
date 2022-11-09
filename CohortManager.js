const Cohort = require('./Cohort.js')
const Student = require('./Student.js')

class Cohortmanager {
    constructor() {
        this.studentList = []
        this.cohortList = []
        this.studentId = 1
    }
}

module.exports = Cohortmanager;
