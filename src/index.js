const { CohortManager } = require('./CohortManager')

const Manager = new CohortManager()
Manager.createCohort('Software Development')
console.log('Cohorts saved: ', Manager.cohorts)
