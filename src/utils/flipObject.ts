const flipObject = (obj: Object) => {
  return Object.keys(obj).reduce((ret, key) => {
    ret[obj[key]] = key
    return ret
  }, {})
}

export default flipObject
