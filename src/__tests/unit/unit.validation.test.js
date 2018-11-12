import { validation } from 'utils'

const wellFormatted = 
`
el pan; хліб
la class; клас
`
const twoSemicolonsInLine = 
`
el pan; хліб
la class; клас; приміщення для навчання
`

const noSemicolonsLine = 
`
el pan хліб
la class; клас; приміщення для навчання
`

const emptyLines = 
`

la class; клас
el pan; хліб
                     
la cerca; брама
`



describe('validation from utils tests set', () => {

  describe('inTextToCardsFormat utility tests set', () => {

    it('inTextToCardsFormat positive case', () => {
      expect(
        validation.inTextToCardsFormat(wellFormatted)
      ).toEqual(
        true
      )
    })

    it('inTextToCardsFormat returns false if there is a line with 2 semicolons', () => {
      expect(
        validation.inTextToCardsFormat(twoSemicolonsInLine)
      ).toEqual(
        false
      )
    })

    it('inTextToCardsFormat returns false if there is a line with no semicolons ', () => {
      expect(
        validation.inTextToCardsFormat(noSemicolonsLine)
      ).toEqual(
        false
      )
    })

    it('inTextToCardsFormat ignores empty lines', () => {
      expect(
        validation.inTextToCardsFormat(emptyLines)
      ).toEqual(
        true
      )
    })

  })

})