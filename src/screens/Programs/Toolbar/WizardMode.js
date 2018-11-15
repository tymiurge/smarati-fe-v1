import React from 'react'
import { container, intends, composeStyles } from 'styles'
import { Form, Segment } from 'semantic-ui-react'
import { controls } from 'components'

const groupOptions = [
  { key: 'byFolders', text: 'By Folders', value: 'byFolders' },
  { key: 'byTags', text: 'By Tags', value: 'byTags' },
]


class WizardMode extends React.Component {

  state = {
    itemsOptions: [],
    groupItems: [],
    name: ''
  }

  setItemsContent = mode => {
    let options = []
    if (mode === 'byTags') {
      options = this.props.tags.map(tag => ({key: tag, text: tag, value: tag}))
    } else {
      options = this.props.boxes.map(box => ({key: box.id, text: box.data.name, value: box.id}))
    }
    this.setState({...this.state, itemsOptions: options, groupItems: []})
  }

  onGroupItemsChange = data => {
    this.setState({...this.state, groupItems: data.value})
  }

  render() {
    return (
      <Segment>
        <Form>
          <Form.Input 
            label='Program Name' placeholder='Name...' 
            value={this.state.name}
            onChange={e => this.setState({...this.state, name: e.target.value})}
          />
          <Form.Group widths='equal'>
            <Form.Select 
              fluid label='Group by' placeholder='Select group' 
              options={groupOptions}
              onChange={(_, {value}) => this.setItemsContent(value)}
            />
            <Form.Select 
              disabled={this.state.itemsOptions.length === 0} fluid label='Items' options={this.state.itemsOptions} placeholder='Select Items' 
              value={this.state.groupItems}
              onChange={(_, data) => this.onGroupItemsChange(data)}
              multiple selection
            />
          </Form.Group>
        </Form>
        <controls.YesNoButtons
        />

      </Segment>
    )
  }
}

export default WizardMode
