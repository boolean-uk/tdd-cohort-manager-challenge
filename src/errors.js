const errors = {
  notFound: new Error('Cohort not found'),
  maximumSize: new Error('Cohort at maximum size'),
  studentNotFound: new Error('Student not found'),
  cohortExists: new Error(
    'Cohort already exists with this name, please ensure each name is unique'
  ),
  cohortNameInvalid: new Error('Cohort name invalid'),
  alreadyEnrolled: new Error('Student already enrolled')
}

export default errors
