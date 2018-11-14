import React from 'react'
import { Message, Segment, Container } from 'semantic-ui-react'
import { CardWizard, BoxWizard } from './CardWizard'
import { controls, layouting, widjets } from 'components'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class Wizard extends React.Component {

  static propTypes = {
    onCardBoxAdd: PropTypes.func.isRequired,
    onCardAdd: PropTypes.func.isRequired,
    onMultiCardsAdd: PropTypes.func.isRequired,
    requestFullfilled: PropTypes.bool.isRequired
  }

  state = {
    mode: undefined
  }

  setMode = mode => {
    this.setState({...this.state, mode})
  }

  render() {
    if (this.props.requestFullfilled) {
      return (<Redirect to='/cards' />)
    }
    return (
      <layouting.FullSizePage
        header={
          <widjets.TitledHeader 
            title='Cards Creation Wizard'
            onBackNavigation={() =>this.props.history.push('/cards') }
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
                  <BoxWizard
                    onConfirm={data => this.props.onCardBoxAdd(data)}
                  />
                }
                {
                  this.state.mode === 'card' &&
                  <CardWizard
                    onConfirm={({type, data}) => {
                      if (type === 'card') {
                        this.props.onCardAdd(data)
                      }
                    }}
                  />
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

export default withRouter(Wizard)
