import * as container from './container'

export { container }
/**
 * composes styles objects int a single one
 * @param {array} styles 
 */
export const composeStyles = (...styles) => styles.reduce(
  (accumulator, current) => Object.assign(accumulator, current),
  {}
)
