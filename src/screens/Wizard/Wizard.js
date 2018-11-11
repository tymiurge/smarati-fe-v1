import React from 'react'
import { Message, Segment, Container } from 'semantic-ui-react'
import { CardWizard, BoxWizard } from './CardWizard'
import { controls, layouting, widjets } from 'components'

class Wizard extends React.Component {

  state = {
    mode: undefined
  }

  setMode = mode => {
    this.setState({...this.state, mode})
  }

  render() {
    return (
      <layouting.FullSizePage
        header={
          <widjets.TitledHeader 
            title='Cards Creation Wizard' 
          />
        }
        main={(
          <Container style={{marginTop: '10px'}}>
            <Message
              attached
              content={(
                <controls.ChoiseSwitch 
                  title='Select Wizard Type:' 
                  onSwitch={item => this.setMode(item.mode)}
                  options={[
                    {title: 'Box', mode: 'box'},
                    {title: 'Card', mode: 'card'}
                  ]}
                />
              )}
            />
            {
              this.state.mode !== undefined &&
              <Segment attached='bottom'>
                {
                  this.state.mode === 'box' &&
                  <BoxWizard onConfirm={({type, data}) => console.log(`type = ${type}, name = ${data.name}, tags = ${data.tags.join()}`)}/>
                }
                {
                  this.state.mode === 'card' &&
                  <CardWizard />
                }
              </Segment>
            }
            
          </Container>
          
        )}
        leftAsideWidth='0%'
        rightAsideWidth='0%'
      />  
    )
  }
}

export default Wizard
