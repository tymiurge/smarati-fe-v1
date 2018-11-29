export const cards = [
  {
    id: 0, 
    type: 'card',
    parent: null,
    data: {
      front: 'allignment',
      back: 'вирівнювання',
      tags: ['en', 'action'],
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
  {
    id: 10,
    parent: null,
    type: 'box',
    data: {
      name: 'Linux Commands',
      tags: ['linux']
    }
  },
  {
    id: 11,
    parent: null,
    type: 'box',
    data: {
      name: 'Spanish 100 words',
      tags: ['spain']
    }
  },
  {
    id: 12,
    parent: null,
    type: 'box',
    data: {
      name: 'English proverbs',
      tags: ['en']
    }
  },



  {
    id: 13, 
    parent: 11,
    type: 'card',
    data: {
		front: 'de',
		back: 'з (з чимось, чия...)',
		progress: 3,
      	tags: ['es']
    }
 },

{
    id: 14, 
    parent: 11,
    type: 'card',
    data: {
		front: 'que',
		back: 'що, котрий',
		progress: 5,
      	tags: ['es']
    }
 },

{
    id: 15, 
    parent: 11,
    type: 'card',
    data: {
		front: 'y',
		back: 'і',
		progress: 1,
      	tags: ['es']
    }
 },

{
    id: 16, 
    parent: 11,
    type: 'card',
    data: {
		front: 'a',
		back: 'на, у напрамку',
		progress: 7,
      	tags: ['es']
    }
 },

{
    id: 17, 
    parent: 11,
    type: 'card',
    data: {
		front: 'en',
		back: 'в',
		progress: 2,
      	tags: ['es']
    }
},

{
    id: 18, 
    parent: 11,
    type: 'card',
    data: {
		front: 'ser',
		back: 'бути',
		progress: 0,
      	tags: ['es']
    }
},

{
    id: 19, 
    parent: 11,
    type: 'card',
    data: {
		front: 'se',
		back: 'чиїсь',
		progress: 3,
      	tags: ['es']
    }
},

{
    id: 20, 
    parent: 11,
    type: 'card',
    data: {
		front: 'haber',
		back: '(verb) to have',
		progress: 6,
      	tags: ['es']
    }
},

{
    id: 21, 
    parent: 11,
    type: 'card',
    data: {
		front: 'por',
		back: '(prep.) by, for, through',
		progress: 6,
      	tags: ['es']
    }
},

{
    id: 22, 
    parent: 11,
    type: 'card',
    data: {
		front: 'con ',
		back: '(prep.) with',
		progress: 2,
      	tags: ['es']
    }
},

{
    id: 23, 
    parent: 11,
    type: 'card',
    data: {
		front: 'su ',
		back: ' his, her, their, your (fam.)',
		progress: 0,
      	tags: ['es']
    }
},

{
    id: 24, 
    parent: 11,
    type: 'card',
    data: {
		front: 'para',
		back: '(prep.) for, to, in order to',
		progress: 3,
      	tags: ['es']
    }
},

{
    id: 25, 
    parent: 11,
    type: 'card',
    data: {
		front: 'como ',
		back: '(conj.) like, as',
		progress: 7,
      	tags: ['es']
    }
},

{
    id: 26, 
    parent: 11,
    type: 'card',
    data: {
		front: 'estar', 
		back: '(verb) to be',
		progress: 6,
      	tags: ['es']
    }
},

{
    id: 27, 
    parent: 11,
    type: 'card',
    data: {
		front: 'tener ',
		back: '(verb) to have',
		progress: 3,
      	tags: ['es']
    }
},

{
    id: 28, 
    parent: 11,
    type: 'card',
    data: {
		front: 'todo', 
		back: 'all, every',
		progress: 4,
      	tags: ['es']
    }
},

{
    id: 29, 
    parent: 11,
    type: 'card',
    data: {
		front: 'pero ',
		back: '(conj.) but, yet, except',
		progress: 5,
      	tags: ['es']
    }
},

{
    id: 30, 
    parent: 11,
    type: 'card',
    data: {
		front: 'más ',
		back: '(adj.) more',
		progress: 1,
      	tags: ['es']
    }
},

{
    id: 31, 
    parent: 11,
    type: 'card',
    data: {
		front: 'hacer ',
		back: '(verb.) to do, make',
		progress: 0,
      	tags: ['es']
    }
},

{
    id: 32, 
    parent: 11,
    type: 'card',
    data: {
		front: 'o ',
		back: '(conj.) or',
		progress: 0,
      	tags: ['es']
    }
},

{
    id: 33, 
    parent: 11,
    type: 'card',
    data: {
		front: 'poder ',
		back: '(verb) to be able to, can',
		progress: 0,
      	tags: ['es']
    }
},

{
    id: 34, 
    parent: 11,
    type: 'card',
    data: {
		front: 'decir', 
		back: '(verb) to tell, say',
		progress: 0,
      	tags: ['es']
    }
},

{
    id: 35, 
    parent: 11,
    type: 'card',
    data: {
		front: 'este ',
		back: '(adj.) this (m); esta (f)',
		progress: 3,
      	tags: ['es']
    }
},

{
    id: 36, 
    parent: 11,
    type: 'card',
    data: {
		front: 'ir ',
		back: '(verb) to go',
		progress: 7,
      	tags: ['es']
    }
},

{
    id: 37, 
    parent: 11,
    type: 'card',
    data: {
		front: 'otro ',
		back: '(adj.) other, another',
		progress: 1,
      	tags: ['es']
    }
},

{
    id: 38, 
    parent: 11,
    type: 'card',
    data: {
		front: 'ese ',
		back: '(adj.) that (m); esa (f)',
		progress: 2,
      	tags: ['es']
    }
},

{
    id: 39, 
    parent: 11,
    type: 'card',
    data: {
		front: 'si',
		back: '(conj.) if, whether',
		progress: 1,
      	tags: ['es']
    }
},

{
    id: 40, 
    parent: 11,
    type: 'card',
    data: {
		front: 'me',
		back: '(pron.) me',
		progress: 5,
      	tags: ['es']
    }
},

{
    id: 41, 
    parent: 11,
    type: 'card',
    data: {
		front: 'ya', 
		back: ' already, still',
		progress: 2,
      	tags: ['es']
    }
},

{
    id: 42, 
    parent: 11,
    type: 'card',
    data: {
		front: 'ver ',
		back: '(verb) to see',
		progress: 7,
      	tags: ['es']
    }
},

{
    id: 43, 
    parent: 11,
    type: 'card',
    data: {
		front: 'porque ',
		back: '(conj.) because',
		progress: 2,
      	tags: ['es']
    }
},

{
    id: 44, 
    parent: 11,
    type: 'card',
    data: {
		front: 'dar',
		back: '(verb) to give',
		progress: 1,
      	tags: ['es']
    }
},

{
    id: 45, 
    parent: 11,
    type: 'card',
    data: {
		front: 'cuando',
		back: '(conj.) when',
		progress: 0,
      	tags: ['es']
    }
},

{
    id: 46, 
    parent: 11,
    type: 'card',
    data: {
		front: 'él',
		back: '(pron.) he',
		progress: 1,
      	tags: ['es']
    }
},

{
    id: 47, 
    parent: 11,
    type: 'card',
    data: {
		front: 'muy',
		back: '(adv.) very, really',
		progress: 5,
      	tags: ['es']
    }
},

{
    id: 48, 
    parent: 11,
    type: 'card',
    data: {
		front: 'sin',
		back: '(prep.) without',
		progress: 3,
      	tags: ['es']
    }
},

{
    id: 49, 
    parent: 11,
    type: 'card',
    data: {
		front: 'vez',
		back: '(noun, f.) time, occurrence',
		progress: 2,
      	tags: ['es']
    }
},

{
    id: 50, 
    parent: 11,
    type: 'card',
    data: {
		front: 'mucho',
		back: '(adj.) much, many, a lot',
		progress: 1,
      	tags: ['es']
    }
},

{
    id: 51, 
    parent: 11,
    type: 'card',
    data: {
		front: 'saber',
		back: '(verb) to know',
		progress: 0,
      	tags: ['es']
    }
},

{
    id: 52, 
    parent: 11,
    type: 'card',
    data: {
		front: 'qué',
		back: '(pron.) what?, which?, how (+ adj.)',
		progress: 2,
      	tags: ['es']
    }
},

{
    id: 53, 
    parent: 11,
    type: 'card',
    data: {
		front: 'sobre',
		back: '(prep.) on top of, over, about',
		progress: 7,
      	tags: ['es']
    }
},




// ==============================
{
  id: 54, 
  parent: 11,
  type: 'card',
  data: {
  front: 'sin',
  back: '(prep.) without',
  progress: 3,
      tags: ['es']
  }
},

{
  id: 55, 
  parent: 11,
  type: 'card',
  data: {
  front: 'vez',
  back: '(noun, f.) time, occurrence',
  progress: 2,
      tags: ['es']
  }
},

{
  id: 56, 
  parent: 11,
  type: 'card',
  data: {
  front: 'mucho',
  back: '(adj.) much, many, a lot',
  progress: 1,
      tags: ['es']
  }
},

{
  id: 57, 
  parent: 11,
  type: 'card',
  data: {
  front: 'saber',
  back: '(verb) to know',
  progress: 0,
      tags: ['es']
  }
},

{
  id: 58, 
  parent: 11,
  type: 'card',
  data: {
  front: 'qué',
  back: '(pron.) what?, which?, how (+ adj.)',
  progress: 2,
      tags: ['es']
  }
},

{
  id: 59, 
  parent: 11,
  type: 'card',
  data: {
  front: 'sobre',
  back: '(prep.) on top of, over, about',
  progress: 7,
      tags: ['es']
  }
},

//=============================================================================

{
  id: 60, 
  parent: 11,
  type: 'card',
  data: {
  front: 'sin',
  back: '(prep.) without',
  progress: 3,
      tags: ['es']
  }
},

{
  id: 61, 
  parent: 11,
  type: 'card',
  data: {
  front: 'vez',
  back: '(noun, f.) time, occurrence',
  progress: 2,
      tags: ['es']
  }
},

{
  id: 62, 
  parent: 11,
  type: 'card',
  data: {
  front: 'mucho',
  back: '(adj.) much, many, a lot',
  progress: 1,
      tags: ['es']
  }
},

{
  id: 63, 
  parent: 11,
  type: 'card',
  data: {
  front: 'saber',
  back: '(verb) to know',
  progress: 0,
      tags: ['es']
  }
},

{
  id: 64, 
  parent: 11,
  type: 'card',
  data: {
  front: 'qué',
  back: '(pron.) what?, which?, how (+ adj.)',
  progress: 2,
      tags: ['es']
  }
},

{
  id: 65, 
  parent: 11,
  type: 'card',
  data: {
  front: 'sobre',
  back: '(prep.) on top of, over, about',
  progress: 7,
      tags: ['es']
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
