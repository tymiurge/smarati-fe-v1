export const cards = [
  {
    id: 0, 
    type: 'card',
    parent: null,
    data: {
      front: 'allignment',
      back: 'вирівнювання',
      tags: ['en'],
      progress: 3
    },
    
  },
  {
    id: 1, 
    parent: null,
    type: 'box',
    data: {
      name: 'waiting for godoth',
      tags: ['en']
    }
  },
  {
    id: 2,
    parent: null,
    type: 'card',
    data: {
      front: 'go',
      back: 'іди',
      tags: ['en', 'movement'],
      progress: 0
    }
  },
  {
    id: 3, 
    parent: null,
    type: 'card',
    data: {
      front: 'move',
      back: 'pyxaтись',
      progress: 1,
      tags: ['en', 'movement']
    }
  },
  {
    id: 4, 
    parent: null,
    type: 'card',
    data: {
      front: 'run',
      back: 'бігти',
      progress: 6,
      tags: ['en', 'movement']
    }
  },
  {
    id: 5, 
    parent: 1,
    type: 'card',
    data: {
      front: 'limp',
      back: 'хромать',
      progress: 4,
      tags: ['en', 'movement']
    }
  },
  {
    id: 6, 
    parent: 1,
    type: 'card',
    data: {
      front: 'sign',
      back: 'петь',
      progress: 4,
      tags: ['en', 'movement']
    }
  },
  {
    id: 7, 
    parent: 1,
    type: 'card',
    data: {
      front: 'queer',
      back: 'дивний',
      progress: 4,
      tags: ['en']
    }
  },
  {
    id: 8, 
    parent: 1,
    type: 'card',
    data: {
      front: 'cease',
      back: 'припиняти',
      progress: 4,
      tags: ['en']
    }
  },
  {
    id: 9, 
    parent: 1,
    type: 'card',
    data: {
      front: 'fumble',
      back: 'порпатись у кишенях',
      progress: 2,
      tags: ['en']
    }
  },
  

]
