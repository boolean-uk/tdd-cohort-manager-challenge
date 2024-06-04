const requireParam = (field, value) => {
  if (!value) throw new TypeError(`${field} is required`)

  return value
}

module.exports = { requireParam }
