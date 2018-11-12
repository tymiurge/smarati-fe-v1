import React from 'react'
import SingleCardWizard from './SingleCardWizard'
import CardsFromTextWizard from './CardsFromTextWizard'
import { controls } from 'components'

class CardWizard extends React.Component {

  state = {
    mode: undefined
  }

  setMode = mode => this.setState({...this.state, mode})

  render() {
    return (
      <div>
        <controls.ChoiseSwitch 
          onSwitch={item => this.setMode(item.mode)}
          options={[
            {title: 'Single Card', mode: 'singleCard'},
            {title: 'Cards From Text', mode: 'textCards'}
          ]}
        />
        <div style={{marginTop: '10px'}}>
        {
          this.state !== undefined && this.state.mode === 'singleCard' &&
          <SingleCardWizard {...this.props}/>
        }
        {
          this.state !== undefined && this.state.mode === 'textCards' &&
          <CardsFromTextWizard {...this.props}/>
        }
        </div>
      </div>
    )
  }
}

export default CardWizard
