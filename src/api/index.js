import {
  cards,
  programs
} from './data'
import uniqid from 'uniqid'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const loginUser = data => delay(10).then(
  () => {
    if (data.login === 'shrek@gmail.com') {
      return {
        status: 'Forbidden',
        code: 403,
        messages: [
          `Most likely the ${data.login} account has not been registered. Please register it and if it still does not work - contact our support`
        ],
        data: {
        }    
      }
    }
    return {
      status: 'ok',
      code: 200,
      messages: [],
      data: {
        confirmed: true,
        id: 12345
      }
    }
  }
)

export const fetchCards = parentId => delay(19).then(
  () => ({
    status: 'ok',
    code: 200,
    messages: [],
    data: {
      list: cards.filter(card => card.parent === parentId)
    }
  })
)

export const addCard = (parentId, cardData) => delay(8).then(
  () => { 
    return {
    status: 'ok',
    code: 200,
    messages: [],
    data: {
      card: {
        id: uniqid(),
        parent: parentId,
        type: 'card',
        data: {
          front: cardData.front,
          back: cardData.back,
          tags: cardData.tags,
          progress: 0
        }
      }
    }
  }}
)

export const addCardBox = (parentId, boxData) => delay(8).then(
  () => ({
    status: 'ok',
    code: 200,
    messages: [],
    data: {
      box: {
        id: uniqid(),
        parent: parentId,
        type: 'box',
        data: {
          name: boxData.name,
          tags: boxData.tags
        }
      }
    }    
  })
)

export const addMultiCards = (parentId, data) => delay(7).then(
  () => ({
    status: 'ok',
    code: 200,
    messages: [],
    data: {
      cards: data.cards.map(card => ({
        id: uniqid(),
        parent: parentId,
        type: 'card',
        data: {
          front: card.front,
          back: card.back,
          tags: data.tags,
          progress: 0
        }  
      }))
    }    
  })
)

export const fetchPrograms = () => delay(3).then(
  () => ({
    status: 'ok',
    code: 200,
    messages: [],
    data: {
      list: programs
    }    
  })
)

export const fetchTags = () => delay(3).then(
  () => ({
    status: 'ok',
    code: 200,
    messages: [],
    data: {
      list: [...cards.reduce(
        (acc, curr) => {
          curr.data.tags.forEach(tag => acc.add(tag))
          return acc
        },
        new Set()
      )]
    }      
  })
)

export const fetchBoxes = () => delay(3).then(
  () => ({
    status: 'ok',
    code: 200,
    messages: [],
    data: {
      list: cards.filter(card => card.type === 'box')
    }
  })
)