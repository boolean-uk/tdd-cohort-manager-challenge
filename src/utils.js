const requireParam = (field, value) => {
  if (!value) throw new TypeError(`${field} is required`)

  this[field] = value

  return value
}

module.exports = { requireParam }
