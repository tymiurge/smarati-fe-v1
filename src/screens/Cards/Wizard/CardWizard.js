import React from 'react'
import { Form } from 'semantic-ui-react'
import { intends } from 'styles'
import SingleCardWizard from './SingleCardWizard'
import CardsFromTextWizard from './CardsFromTextWizard'
import { controls } from 'components'

class CardWizard extends React.Component {
  render() {
    return (
      <div>
        <controls.ChoiseSwitch 
          onSwitch={item => alert(item.title)}
          options={[
            {title: 'Single Card'},
            {title: 'Cards From Text'}
          ]}
        />
      
        { false && <SingleCardWizard /> }
        <CardsFromTextWizard />

      </div>
    )
  }
}

export default CardWizard
