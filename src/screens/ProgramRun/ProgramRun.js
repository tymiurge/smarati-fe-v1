import React from 'react'
import { Button, Form, Grid, Segment, Icon, Header, Container, Checkbox } from 'semantic-ui-react'
//import PropTypes from 'prop-types'
import { controls, widjets, layouting } from 'components'
import Toolbar from './Toolbar'
//import { validation } from 'utils'
//import { Redirect } from 'react-router-dom'

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
        <Toolbar title='Spanish 100 common words' />

        <Container style={{marginTop: '5px'}}>
          <Checkbox toggle label={<label>Show back before next</label>} />
          <Checkbox style={{marginLeft: '10px'}} toggle label={<label>Hint wizard at failing</label>} />
        </Container>
        <Grid textAlign='center' style={{ height: '100%', marginTop: '-150px' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large'>
              <Segment.Group>
                <Segment style={{padding: '0px', borderRadius: '0'}}>
                  <controls.DashedProgress progress={4} />
                </Segment>
              <Segment>
                <div style={{height:'150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                    <Header as='h2'>saber</Header>
                  </div>
                </div>
              </Segment>
              </Segment.Group>
            </Form>
            
            <Segment>
                <layouting.FillNFullInRow>
                  <Button circular icon='chain' style={{marginRight: '5px'}}/>
                  <div>
                    <Button color='blue'><Icon name='check'/>I know it!</Button>
                    <Button color='red'><Icon name='cancel' /> I don't...</Button>
                  </div>
                </layouting.FillNFullInRow>
                
                
                
              
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default ProgramRun