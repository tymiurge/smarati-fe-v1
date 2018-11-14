import React from 'react'
import { container, intends, composeStyles } from 'styles'
import { Form } from 'semantic-ui-react'
import { layouting } from 'components'

const groupOptions = [
  { key: 'byFolders', text: 'By Folders', value: 'byFolders' },
  { key: 'byTags', text: 'By Tags', value: 'byTags' },
]


class WizardMode extends React.Component {

  state = {
    itemsOptions: []
  }

  setItemsContent = mode => {
    if (mode === 'byTags') {
      const tagsOptions = this.props.tags.map(tag => ({key: tag, text: tag, value: tag}))
      this.setState({...this.state, itemsOptions: tagsOptions})
    }
  }

  render() {
    return (
      <div style={composeStyles(container.bordered, intends.appBigPadding)}>
        <Form>
          <Form.Group widths='equal'>
            <Form.Select 
              fluid label='Group by' placeholder='Select group' 
              options={groupOptions}
              onChange={(_, {value}) => this.setItemsContent(value)}
            />
            <Form.Select 
              disabled={this.state.itemsOptions.length === 0} fluid label='Items' options={this.state.itemsOptions} placeholder='Select Items' 
              multiple selection
            />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default WizardMode
