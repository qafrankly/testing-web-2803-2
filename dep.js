const obj = {}

function dep (a) {
  if (obj.store)
    return obj.store + a
  obj.store = a
  return a
}

export default dep

