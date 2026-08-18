const triviaQuestions = [
  {
    id: 'geo-1',
    pack: 'core',
    category: 'Geography',
    difficulty: 'Easy',
    question: 'What is the largest ocean on Earth?',
    choices: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
    answer: 2,
    fact: 'The Pacific Ocean is the largest and deepest of Earth’s ocean basins.'
  },
  {
    id: 'geo-2',
    pack: 'core',
    category: 'Geography',
    difficulty: 'Medium',
    question: 'Which river flows through the city of Paris?',
    choices: ['Thames', 'Seine', 'Danube', 'Rhine'],
    answer: 1,
    fact: 'The Seine runs through Paris before continuing northwest toward the English Channel.'
  },
  {
    id: 'science-1',
    pack: 'core',
    category: 'Science',
    difficulty: 'Easy',
    question: 'Which planet is known for its prominent ring system?',
    choices: ['Mars', 'Saturn', 'Venus', 'Mercury'],
    answer: 1,
    fact: 'All four giant planets have rings, but Saturn’s are the most prominent.'
  },
  {
    id: 'science-2',
    pack: 'core',
    category: 'Science',
    difficulty: 'Medium',
    question: 'What gas do plants take in during photosynthesis?',
    choices: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Helium'],
    answer: 2,
    fact: 'Plants use carbon dioxide, water, and light energy during photosynthesis.'
  },
  {
    id: 'history-1',
    pack: 'core',
    category: 'History',
    difficulty: 'Easy',
    question: 'The Declaration of Independence was adopted in which year?',
    choices: ['1776', '1787', '1812', '1492'],
    answer: 0,
    fact: 'The Continental Congress adopted the Declaration of Independence on July 4, 1776.'
  },
  {
    id: 'history-2',
    pack: 'core',
    category: 'History',
    difficulty: 'Hard',
    question: 'Which ancient city was buried by the eruption of Mount Vesuvius in AD 79?',
    choices: ['Sparta', 'Pompeii', 'Carthage', 'Delphi'],
    answer: 1,
    fact: 'Pompeii was buried by volcanic material during the eruption of Mount Vesuvius in AD 79.'
  },
  {
    id: 'words-1',
    pack: 'core',
    category: 'Words',
    difficulty: 'Easy',
    question: 'Which word is a synonym for “brief”?',
    choices: ['Lengthy', 'Concise', 'Ancient', 'Noisy'],
    answer: 1,
    fact: 'Concise means expressing something clearly in relatively few words.'
  },
  {
    id: 'words-2',
    pack: 'core',
    category: 'Words',
    difficulty: 'Medium',
    question: 'Which word means a word that has the opposite meaning of another word?',
    choices: ['Synonym', 'Antonym', 'Homonym', 'Acronym'],
    answer: 1,
    fact: 'An antonym is a word with a meaning opposite to that of another word.'
  },
  {
    id: 'nature-1',
    pack: 'core',
    category: 'Nature',
    difficulty: 'Easy',
    question: 'What is the fastest land animal?',
    choices: ['Cheetah', 'Lion', 'Greyhound', 'Pronghorn'],
    answer: 0,
    fact: 'The cheetah can reach the highest short-burst running speeds of any land animal.'
  },
  {
    id: 'nature-2',
    pack: 'core',
    category: 'Nature',
    difficulty: 'Hard',
    question: 'What is the largest living species of penguin?',
    choices: ['Emperor penguin', 'King penguin', 'Adélie penguin', 'Gentoo penguin'],
    answer: 0,
    fact: 'The emperor penguin is the largest living penguin species.'
  },
  {
    id: 'arts-1',
    pack: 'core',
    category: 'Arts',
    difficulty: 'Easy',
    question: 'A traditional piano keyboard is built from repeating groups of how many note names?',
    choices: ['5', '6', '7', '8'],
    answer: 2,
    fact: 'The note names A through G repeat across the keyboard.'
  },
  {
    id: 'arts-2',
    pack: 'core',
    category: 'Arts',
    difficulty: 'Medium',
    question: 'Which instrument usually has four strings and is played with a bow?',
    choices: ['Trumpet', 'Violin', 'Flute', 'Trombone'],
    answer: 1,
    fact: 'The violin normally has four strings and is commonly played with a bow.'
  },
  {
    id: 'numbers-1',
    pack: 'core',
    category: 'Numbers',
    difficulty: 'Easy',
    question: 'What is 12 × 8?',
    choices: ['84', '88', '96', '108'],
    answer: 2,
    fact: '12 multiplied by 8 equals 96.'
  },
  {
    id: 'numbers-2',
    pack: 'core',
    category: 'Numbers',
    difficulty: 'Medium',
    question: 'What is the square root of 144?',
    choices: ['10', '11', '12', '14'],
    answer: 2,
    fact: '12 multiplied by 12 equals 144.'
  },
  {
    id: 'space-1',
    pack: 'core',
    category: 'Space',
    difficulty: 'Easy',
    question: 'What is the name of Earth’s natural satellite?',
    choices: ['Titan', 'Europa', 'The Moon', 'Phobos'],
    answer: 2,
    fact: 'Earth has one natural satellite, commonly called the Moon.'
  },
  {
    id: 'space-2',
    pack: 'core',
    category: 'Space',
    difficulty: 'Hard',
    question: 'Which planet has the shortest year in our solar system?',
    choices: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
    answer: 0,
    fact: 'Mercury completes one orbit around the Sun in about 88 Earth days.'
  }
]

export default triviaQuestions
