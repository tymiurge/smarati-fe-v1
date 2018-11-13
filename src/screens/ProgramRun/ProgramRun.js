import React from 'react'
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { controls, widjets, layouting } from 'components'
import { validation } from 'utils'
import { Redirect } from 'react-router-dom'

class ProgramRun extends React.Component {

  render() {
 
    return (
      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
          body {
            overflow-y: hidden;
          }
          .white-color {
            color: white !important;
          }
        `}</style>
        <widjets.TitledHeader title='All words' />
        <Grid textAlign='center' style={{ height: '100%', marginTop: '-150px' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large'>
              <Segment.Group>
                <Segment style={{padding: '0px', borderRadius: '0'}}>
                  <div style={{height: '5px', backgroundColor: 'green'}}></div>
                </Segment>
              <Segment>
                <div style={{height:'150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>this is a card content</div>
                </div>
              </Segment>
              </Segment.Group>
            </Form>
            
            <Segment>
                <layouting.FillNFullInRow>
                  <Button circular icon='chain' style={{marginRight: '5px'}}/>
                  <layouting.FullNFillInRow>
                    <Button color='blue' fluid ><Icon name='check'/>I know it!</Button>
                    <Button circular icon='cancel' style={{marginLeft: '5px'}} color='red' />
                  </layouting.FullNFillInRow>
                </layouting.FillNFullInRow>
                
                
                
              
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default ProgramRun