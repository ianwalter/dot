const isObj = i => typeof i === 'object' && i && !Array.isArray(i)

export function get (src, path, defaultValue) {
  if (!path) return src

  const pathKeys = path.split('.')

  let current = src
  for (const key of pathKeys) {
    if (!Object.prototype.propertyIsEnumerable.call(current, key)) {
      return defaultValue
    }
    current = current[key]
  }

  return current
}

export function set (src, path = '', value) {
  const pathKeys = path.split('.')
  const lastIndex = pathKeys.length - 1

  let current = src
  for (let i = 0; i < pathKeys.length; i++) {
    if (i === lastIndex) {
      current[pathKeys[i]] = value
    } else {
      if (!isObj(current[pathKeys[i]])) current[pathKeys[i]] = {}

      current = current[pathKeys[i]]
    }
  }

  return src
}

export function del (src, path = '') {
  const pathKeys = path.split('.')
  const lastIndex = pathKeys.length - 1

  let current = src
  for (let i = 0; i < pathKeys.length; i++) {
    if (i === lastIndex) {
      delete current[pathKeys[i]]
    } else {
      if (!isObj(current[pathKeys[i]])) return

      current = current[pathKeys[i]]
    }
  }

  return src
}

export function has (src, path = '') {
  const pathKeys = path.split('.')
  const lastIndex = pathKeys.length - 1

  let current = src
  for (let i = 0; i < pathKeys.length; i++) {
    if (i === lastIndex) {
      return Object.prototype.propertyIsEnumerable.call(current, pathKeys[i])
    } else {
      if (!isObj(current[pathKeys[i]])) return false

      current = current[pathKeys[i]]
    }
  }
}
