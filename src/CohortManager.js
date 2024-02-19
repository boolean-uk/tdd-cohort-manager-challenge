/**
 * Creates a cohort with a given name
 * @returns A cohort object
 */
function create(name) {
  return { name: name }
}

module.exports = {
  create: create
}
