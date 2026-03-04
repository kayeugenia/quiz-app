export const quiz = {
    totalQuestions: 6,
    questions: [
      {
        id: 1,
        question: 'What is your field of interest?',
        answers: ['Organisations', 'Media', 'People', 'Community', 'Healthcare', 'Environment'],
        mappedAnswer: {
            'Organisations': ['UTC2101','UTC2116/UTS2116', 'UTS2105/UTC2105'],
            'Media': ['UTC2106/UTS2106', 'UTS2103/UTC2103', 'UTC2119'],
            'People': ['UTC2107', 'UTC2117', 'UTS2104/UTC2104'],
            'Community': ['UTS2110/UTC2110', 'UTC2115/UTS2115'],
            'Healthcare': ['UTS2103/UTC2103', 'UTC2114/UTS2114'],
            'Environment': ['UTC2111', 'UTC2102']
        },
      },
      {
        id: 2,
        question: 'What do you do in your free time?',
        answers: ['Playing board games', 'Spending time with family', 'Volunteering', 'Crafting'],
        mappedAnswer: {
            'Playing board games' : ['UTC2101', 'UTC2107', 'UTS2104/UTC2104'],
            'Spending time with family' : ['UTS2114/UTC2114', 'UTS2110/UTC2110'],
            'Volunteering' : ['UTC2111','UTC2115/UTS2115'],
            'Crafting' : ['UTS2105/UTC2105', 'UTC2116/UTS2116'],
        }
      },
      {
        id: 3,
        question: 'What is your favourite TV Show?',
        answers: ['The Good Doctor', 'Black Mirror', 'Back to the Future', 'How to Get Away with Murder', 'The Good Place', 'Our Planet'],
        mappedAnswer: {
            'The Good Doctor' : ['UTS2103/UTC2103', 'UTC1120'],
            'Black Mirror' : ['UTS2104/UTC2104', 'UTC2106/UTS2106', 'UTC1116'],
            'Back to the Future' : ['UTC2101', 'UTC2106/UTS2106', 'UTC1102S'],
            'How to Get Away with Murder' : ['UTC1119'],
            'The Good Place' : ['UTS2110/UTC2110', 'UTC2111'], 
            'Our Planet' : ['UTC2102', 'UTC1123'], 
        }
      },
      {
        id: 4,
        question: "Which book genre do you enjoy reading?",
        answers: ['Science fiction', 'Mystery', 'Historical', 'Non-fiction', 'Fantasy', 'Dystopian'],
        mappedAnswer: {
            'Science fiction' : ['UTS2103/UTC2103', 'UTC2106/UTS2106', 'UTC2108','UTC1115'],
            'Mystery' : ['UTC2107', 'UTC2119', 'UTC1119'],
            'Historical' : ['UTC2101', 'UTC2119', 'UTC2116/UTS2116','UTC1116'],
            'Non-fiction' : ['UTS2104/UTC2104','UTC2115/UTS2115','UTC1113'],
            'Fantasy' : ['UTS2105/UTC2105','UTC1102C','UTC1102D'], 
            'Dystopian' : ['UTS2114/UTC2114', 'UTC2117', 'UTC1102S'], 
        }
      },
      {
        id: 5,
        question: "What social issue concerns you the most?",
        answers: ['Poverty alleviation', 'Education disparities', 'Racial justice', 'Environmental sustainability', 'War and conflict'],
        mappedAnswer: {
            'Poverty alleviation' : ['UTC2111', 'UTC2115/UTS2115', 'UTC1120'],
            'Education disparities' : ['UTC2104/UTS2104', 'UTC2116/UTS2116', 'UTC1113'],
            'Racial justice' : ['UTC2117','UTC1102D', 'UTC1119'],
            'Environmental sustainability' : ['UTC2102', 'UTC2105/UTS2105'],
            'War and conflict' : ['UTC2107', 'UTC2119', 'UTC1123'],
        }
      },
      {
        id: 6,
        question: "What is your preferred learning approach?",
        answers: ['Research essay', 'Creative works/Exhibition', 'Project that engages real stakeholders','Debate','Individual reflection','Field trip'],
        mappedAnswer: {
            'Research essay' : ['UTC2108', 'UTC2104/UTS2104'],
            'Creative works/Exhibition': ['UTC2102','UTC2117', 'UTC2119'],
            'Project that engages real stakeholders' : ['UTS2105/UTC2105', 'UTC2115/UTS2115'],
            'Debate' : ['UTC2107', 'UTC1113'],
            'Individual reflection' : ['UTC2101','UTC2116/UTS2116'],
            'Field trip': ['UTC2111','UTS2114/UTC2114']
        }
      },
    ],
  };
