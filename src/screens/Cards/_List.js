import React from 'react'
import { CardFace, CardBox } from './CardItem'
import { container, composeStyles } from 'styles'

const localStyles = {
  cardIntends: {
    marginBottom: '5px', 
    marginRight: '5px'
  },
  cardsContainer: {
    padding: '5px'
  }
}

export default props => (
  <div style={composeStyles(container.wrappedFlexRow, localStyles.cardsContainer)}>
    {
      props.list.map(item => {
        if (item.type === 'box') {
          return (
            <CardBox 
              key={item.id}
              skinStyle={localStyles.cardIntends} 
              onClick={() => alert('box ' + item.id)}
              {...item.data}  
            />          
          )
        }
        return (
          <CardFace
            key={item.id}
            skinStyle={localStyles.cardIntends} 
            onClick={() => alert('box ' + item.id)}
            {...item.data}  
          />
        )
      })
    }  
  </div>
)

/*

<CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>
  <CardBox skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('box')}/>
  <CardFace skinStyle={{marginBottom: '5px', marginRight: '5px'}} value='alligment' tags={['fr', 'movement', 'action', 'th', 'one more']} progress={4} onClick={() => alert('fac3')}/>


*/