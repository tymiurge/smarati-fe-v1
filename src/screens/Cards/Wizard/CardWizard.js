import React from 'react'
import { Form } from 'semantic-ui-react'
import { intends } from 'styles'
import SingleCardWizard from './SingleCardWizard'
import CardsFromTextWizard from './CardsFromTextWizard'

class CardWizard extends React.Component {
  render() {
    return (
      <div>
      <Form >
        <Form.Group inline style={intends.noMarginBottom}>
        <Form.Radio
          label='Single Card'
          value='sm'
          checked={true}
          //onChange={this.handleChange}
        />
        <Form.Radio
          label='Cards From Text'
          value='md'
          checked={false}
          //onChange={this.handleChange}
        />
        </Form.Group>
      </Form>
      
    { false && <SingleCardWizard /> }
<CardsFromTextWizard />

      </div>
    )
  }
}

export default CardWizard
