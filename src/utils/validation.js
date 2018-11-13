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

const strIsNotEmpty = str => str !== ''

/**
 * checks whether the given str is in email format; if so - true returned, false - otherwise
 * @param {string} str 
 */
const strIsEmail = str => {
  const re = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i
  return re.test(String(str).toLowerCase())
}



const validation = {
  validateAgainstArr,
  inTextToCardsFormat,
  strIsNotEmpty,
  strIsEmail
}

export default validation
