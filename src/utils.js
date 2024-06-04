function requireParam(field, value) {
  if (!value) throw new Error(`${field} is required`)

  return value
}

module.exports = { requireParam }
