const obj = {}

function dep (a) {
  obj.store += a
  return obj.store
}

export default dep

