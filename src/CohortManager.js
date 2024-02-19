const cohorts = []

/**
 * Creates a cohort with a given name
 * @returns A cohort object
 */
function create(name) {
  const cohort = {
    name: name,
    students: []
  }
  cohorts.push(cohort)
  return cohort
}

/**
 * Finds a specific cohort by name
 * @returns The cohort with the given name, otherwise null
 */
function find(name) {
  const cohort = cohorts.find((p) => p.name === name)
  if (cohort === undefined) {
    return null
  }
  return cohort
}

module.exports = {
  create: create,
  find: find
}
