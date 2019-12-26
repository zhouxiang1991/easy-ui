/**
 * 连字符。
 *
 * @param {string} str=''
 * @returns {string}
 * @example
 * const str = hyphenize('AbcEdf')
 * // str => abc-edf
 */
export function hyphenize (str = '') {
  str = str.replace(/[^a-zA-Z]/g, '-')
  str = str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

  return str
}

/**
 * 首字母大写。
 *
 * @param {string} str=''
 * @returns {string}
 * @example
 * const str = capitalize('ABC')
 * // str => Abc
 */
export function capitalize (str = '') {
  str = str.split(/[^a-zA-Z]/g).reduce((sum, item) => {
    item = item.toLowerCase()
    item = item.slice(0, 1).toUpperCase() + item.slice(1)
    sum += item

    return sum
  }, '')

  return str
}

/**
 * 驼峰。
 *
 * @param {string} str=''
 * @returns {string}
 * @example
 * const str = capitalize('aa-bb-cc')
 * // str => aaBbCc
 */
export function camelize (str = '') {
  str = str.replace(/[^a-zA-Z]+(.)?/g, (match, c) => {
    return c ? c.toUpperCase() : ''
  })

  return str
}

/**
 * 帕斯卡。
 *
 * @param {string} str=''
 * @returns {string}
 * @example
 * const str = capitalize('aa-bb-cc')
 * // str => AaBbCc
 */
export function pascalize (str = '') {
  str = camelize(str)
  str = str.slice(0, 1).toUpperCase() + str.slice(1)

  return str
}
