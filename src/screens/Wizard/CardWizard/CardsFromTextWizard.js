import React from 'react'
import { Form, Message } from 'semantic-ui-react'
import { controls } from 'components'
import { validation } from 'utils'

class CardsFromTextWizard extends React.Component {

  validators = [
    {
      error: 'Text should not be empty',
      rule: value => value !== ''
    }
    ,
    {
      error: 'There must be one semicolon in each line',
      rule: value => validation.inTextToCardsFormat(value)
    }
  ]

  state = {
    tags: [],
    error:'',
    text: '',
  }

  onFieldChange = (field, value) => this.setState(
    {...this.state, [field]: value}
  )

  onConfirm = () => {
    let error = ''
    for (let i = 0; i < this.validators.length; i ++) {
      if (!this.validators[i].rule(this.state.text)) {
        error = this.validators[i].error
      }
    }
    this.setState(
      {...this.state, error},
      () => {
        if (this.state.error === '') {
          this.props.onConfirm({
            type: 'cards',
            data: {
              cards: this.state.text.split(/\n/)
              .map(line => line.trim())
              .filter(line => line !== '')
              .map(line => {
                const chunks = line.split(';')
                return {
                  front: chunks[0],
                  back: chunks[1]
                }
              }),
              tags: this.state.tags
            }
            
          })
        }
      }
    )
  }

  render() {
    return (
      <div>
        <Form>
          <Form.TextArea 
            label='Text delimited with semicolon' placeholder='paste text here...'
            value={this.state.text}
            onChange={e => this.onFieldChange('text', e.target.value)}
          />
        </Form>
        {
          this.state.error !== '' &&
          <Message negative>
            <Message.Header>Validation Error</Message.Header>
            <p>{ this.state.error }</p>
          </Message>
        }
        <controls.TagsInput
          asSegment={true} placeholder='type tag and press Enter'
          onChange={tags => this.onFieldChange('tags', tags)}
        />
        <controls.YesNoButtons
          onYesClick={this.onConfirm}
        />
      </div>
    )
  }
}

export default CardsFromTextWizard
