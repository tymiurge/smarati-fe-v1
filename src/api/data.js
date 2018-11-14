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

export const programs = [
  {
    id: 1,
    title: 'All',
    items: 23000,
    learnt: 2324,
    progress: 43,
    startedAt: 'jun 15, 15',
    activities: [1, 34, 73, 2, 45, 5, 34]
  }, 
  {
    id: 2,
    title: 'English',
    items: 4000,
    learnt: 23,
    progress: 43,
    startedAt: 'jun 15, 15',
    activities: [34, 2, 89, 30, 93, 19, 33]
  },
  {
    id: 3,
    title: 'Linux Commands',
    items: 345,
    learnt: 333,
    progress: 98,
    startedAt: 'jun 15, 15',
    activities: [34, 2, 89, 30, 93, 19, 33]
  },
  {
    id: 4,
    title: 'All',
    items: 23000,
    learnt: 2324,
    progress: 43,
    startedAt: 'jun 15, 15',
    activities: [34, 2, 89, 30, 93, 19, 33]
  }, 
  {
    id: 5,
    title: 'English',
    items: 4000,
    learnt: 23,
    progress: 43,
    startedAt: 'jun 15, 15',
    activities: [34, 2, 89, 30, 93, 19, 33]
  },
  {
    id: 6,
    title: 'Linux Commands',
    items: 345,
    learnt: 333,
    progress: 98,
    startedAt: 'jun 15, 15',
    activities: [34, 2, 89, 30, 93, 19, 33]
  }
]
