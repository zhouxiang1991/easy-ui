
/**
 * 利用Object原型上的toString获取变量类型。
 *
 * @param {*} val - 变
 * @returns {string} 类型字符串，大写开头。
 */
export function getType (val) {
  return val::Object.prototype.toString().slice(8, -1)
}

/**
 * 判断是否是指定类型。
 *
 * @param {*} val - 变量
 * @param {string} type - 类型是通过Object.prototype.toString获取的类型字符串，大写开头
 * @returns {boolean}
 */
export function isType (val, type) {
  return getType(val) === type
}
