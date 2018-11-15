import React from 'react'
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
    name: '',
    valid: {
      name: true,
      //itemsOptions: true,
      groupItems: true
    },
    mode: ''
  }

  setItemsContent = mode => {
    let options = []
    if (mode === 'byTags') {
      options = this.props.tags.map(tag => ({key: tag, text: tag, value: tag}))
    } else {
      options = this.props.boxes.map(box => ({key: box.id, text: box.data.name, value: box.id}))
    }
    this.setState({...this.state, itemsOptions: options, groupItems: [], mode})
  }

  onGroupItemsChange = data => {
    this.setState({...this.state, groupItems: data.value})
  }

  /**
   * items are in the Dropdown format; 
   * extractor returns array of boxes as they come in props
   */
  _boxesExtractor = items => this.props.boxes.filter(box => 
    items.find(item => item === box.id) !== undefined
  )


  onConfirm = () => {
    const nameValid = this.state.name !== ''
    const groupItemsValid = this.state.groupItems.length != 0
    const validState = {
      name: nameValid,
      groupItems: groupItemsValid
    }
    let callback = () => {}
    if (nameValid && groupItemsValid) {
      callback = () => {
        this.props.onProgramAdd({
          name: this.state.name,
          groupBy: this.state.mode,
          items: this.state.mode === 'byTags' 
            ? this.state.groupItems 
            : this._boxesExtractor(this.state.groupItems)
        })
        this.props.onModeSwitch('static')
      }
    } 
    this.setState(
      {...this.state, valid: validState},
      callback
    )
  }

  render() {
    const { valid } = this.state
    return (
      <Segment>
        <Form>
          <Form.Input 
            error={!valid.name}
            label='Program Name' placeholder='Name...' 
            value={this.state.name}
            onChange={e => this.setState({...this.state, name: e.target.value})}
          />
          <Form.Group widths='equal'>
            <Form.Select 
              error={!valid.groupItems}
              fluid label='Group by' placeholder='Select group' 
              options={groupOptions}
              onChange={(_, {value}) => this.setItemsContent(value)}
            />
            <Form.Select 
              error={!valid.groupItems}
              disabled={this.state.itemsOptions.length === 0} fluid label='Items' options={this.state.itemsOptions} placeholder='Select Items' 
              value={this.state.groupItems}
              onChange={(_, data) => this.onGroupItemsChange(data)}
              multiple selection
            />
          </Form.Group>
        </Form>
        <controls.YesNoButtons
          onYesClick={() => this.onConfirm()}
        />
      </Segment> 
    )
  }
}

export default WizardMode
