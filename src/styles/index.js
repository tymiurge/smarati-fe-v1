import * as container from './container'
import * as intends from './intends'

export { 
  container,
  intends
}

/**
 * composes styles objects int a single one
 * @param {array} styles 
 */
export const composeStyles = (...styles) => styles.reduce(
  (accumulator, current) => Object.assign(accumulator, current),
  {}
)

/**
 * if condition is false than first style is returned only, or empty object 
 * if no styles passed;
 * if condition is true returns combined styles
 * @param {boolean} condition 
 * @param  {...objects} styles 
 */
export const composeStylesByCondition = (condition, ...styles) => {
  if (!condition) {
      return styles.length > 0 ? styles[0] : {}
  }
  if ( styles.length === 0) {
      return {}
  }
  return composeStyles(...styles)
}