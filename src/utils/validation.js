/**
 * checks if text follows these rules:
 *  - there is one semicolon
 * emty lines are ignored
 * @param {multiline text} text 
 */
const inTextToCardsFormat = text => 
  text
    .split(/\n/)
    .map(line => line.trim())
    .filter(line => line !== '')
    .find(line => {
      const occurances = (line.match(/;/g) || []).length 
      return !(occurances <= 1)
    }) === undefined

const validateAgainstArr = (value, validators) => validators.reduce(
  (accumulator, current) => accumulator && current(value),
  true
)

const validation = {
  validateAgainstArr,
  inTextToCardsFormat

}

export default validation
