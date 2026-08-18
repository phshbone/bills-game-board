function group(category, prefix, rows) {
  return rows.map(([difficulty, question, choices, answer, fact], index) => ({
    id: `${prefix}-${index + 1}`,
    pack: 'core',
    category,
    difficulty,
    question,
    choices,
    answer,
    fact
  }))
}

const triviaQuestions = [
  ...group('Geography', 'geo', [
    ['Easy', 'What is the largest ocean on Earth?', ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'], 2, 'The Pacific is Earth’s largest ocean basin.'],
    ['Easy', 'Which country is home to the city of Rome?', ['Spain', 'Italy', 'Greece', 'France'], 1, 'Rome is the capital of Italy.'],
    ['Easy', 'Which continent contains the Sahara Desert?', ['Asia', 'Africa', 'Australia', 'South America'], 1, 'The Sahara stretches across North Africa.'],
    ['Easy', 'What is the capital of Canada?', ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'], 2, 'Ottawa is Canada’s capital.'],
    ['Easy', 'Which U.S. state is made up of islands in the central Pacific?', ['Florida', 'Alaska', 'Hawaii', 'Maine'], 2, 'Hawaii is an island state in the Pacific.'],
    ['Medium', 'Which river flows through Paris?', ['Thames', 'Seine', 'Danube', 'Rhine'], 1, 'The Seine runs through Paris.'],
    ['Medium', 'What is the capital of Australia?', ['Sydney', 'Melbourne', 'Canberra', 'Perth'], 2, 'Canberra is Australia’s capital.'],
    ['Medium', 'Which mountain range separates much of France and Spain?', ['Alps', 'Andes', 'Pyrenees', 'Carpathians'], 2, 'The Pyrenees form a natural border between France and Spain.'],
    ['Medium', 'Which country has the city of Marrakech?', ['Morocco', 'Egypt', 'Portugal', 'Jordan'], 0, 'Marrakech is in Morocco.'],
    ['Medium', 'Which sea lies between Europe and Africa?', ['Baltic Sea', 'Mediterranean Sea', 'Bering Sea', 'Coral Sea'], 1, 'The Mediterranean lies between southern Europe and northern Africa.'],
    ['Hard', 'What is the capital of Slovenia?', ['Zagreb', 'Ljubljana', 'Bratislava', 'Sarajevo'], 1, 'Ljubljana is the capital of Slovenia.'],
    ['Hard', 'Which African country completely surrounds Lesotho?', ['Namibia', 'Botswana', 'South Africa', 'Zimbabwe'], 2, 'Lesotho is an enclave within South Africa.'],
    ['Hard', 'The Atacama Desert is primarily located in which country?', ['Peru', 'Chile', 'Argentina', 'Bolivia'], 1, 'Most of the Atacama Desert lies in northern Chile.'],
    ['Hard', 'Which river passes through Budapest?', ['Danube', 'Loire', 'Po', 'Elbe'], 0, 'The Danube divides Buda and Pest.'],
    ['Hard', 'Which country contains the region of Transylvania?', ['Hungary', 'Romania', 'Bulgaria', 'Serbia'], 1, 'Transylvania is a historical region of Romania.']
  ]),

  ...group('Science', 'science', [
    ['Easy', 'What gas do humans need to breathe to survive?', ['Oxygen', 'Helium', 'Neon', 'Methane'], 0, 'Human respiration depends on oxygen.'],
    ['Easy', 'Water freezes at what temperature on the Celsius scale?', ['0°C', '10°C', '32°C', '100°C'], 0, 'Fresh water freezes at about 0°C under standard conditions.'],
    ['Easy', 'Which organ pumps blood through the human body?', ['Liver', 'Heart', 'Lung', 'Kidney'], 1, 'The heart pumps blood through the circulatory system.'],
    ['Easy', 'Which planet is known for its prominent rings?', ['Mars', 'Saturn', 'Venus', 'Mercury'], 1, 'Saturn has the most visually prominent ring system.'],
    ['Easy', 'Plants use sunlight to make food in a process called what?', ['Respiration', 'Photosynthesis', 'Fermentation', 'Evaporation'], 1, 'Photosynthesis converts light energy into chemical energy.'],
    ['Medium', 'What gas do plants take in during photosynthesis?', ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Helium'], 2, 'Plants use carbon dioxide during photosynthesis.'],
    ['Medium', 'What is the chemical symbol for gold?', ['Ag', 'Au', 'Fe', 'Pb'], 1, 'Gold’s chemical symbol is Au.'],
    ['Medium', 'Which part of a cell contains most of its genetic material?', ['Nucleus', 'Cell wall', 'Ribosome', 'Cytoplasm'], 0, 'In eukaryotic cells, most DNA is housed in the nucleus.'],
    ['Medium', 'What force keeps planets in orbit around the Sun?', ['Magnetism', 'Gravity', 'Friction', 'Buoyancy'], 1, 'Gravity provides the force that keeps planets in orbit.'],
    ['Medium', 'What scale is commonly used to measure acidity and alkalinity?', ['pH', 'Beaufort', 'Richter', 'Kelvin'], 0, 'The pH scale describes how acidic or basic a solution is.'],
    ['Hard', 'What is the most abundant gas in Earth’s atmosphere?', ['Oxygen', 'Nitrogen', 'Argon', 'Carbon dioxide'], 1, 'Nitrogen makes up about 78 percent of Earth’s atmosphere.'],
    ['Hard', 'Which particle carries a negative electric charge?', ['Proton', 'Neutron', 'Electron', 'Photon'], 2, 'Electrons carry negative electric charge.'],
    ['Hard', 'What is the SI unit of electric current?', ['Volt', 'Watt', 'Ampere', 'Ohm'], 2, 'The ampere is the SI base unit of electric current.'],
    ['Hard', 'Which blood cells are primarily responsible for carrying oxygen?', ['Platelets', 'Red blood cells', 'White blood cells', 'Stem cells'], 1, 'Red blood cells carry oxygen using hemoglobin.'],
    ['Hard', 'What type of bond involves the sharing of electron pairs?', ['Ionic', 'Covalent', 'Metallic', 'Hydrogen'], 1, 'Covalent bonds form through shared electron pairs.']
  ]),

  ...group('History', 'history', [
    ['Easy', 'The Declaration of Independence was adopted in which year?', ['1776', '1787', '1812', '1492'], 0, 'The Declaration was adopted on July 4, 1776.'],
    ['Easy', 'Who was the first president of the United States?', ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'John Adams'], 1, 'George Washington became the first U.S. president in 1789.'],
    ['Easy', 'Ancient pyramids at Giza were built in which civilization?', ['Roman', 'Egyptian', 'Mayan', 'Viking'], 1, 'The Giza pyramids were built in ancient Egypt.'],
    ['Easy', 'Which conflict was fought between the North and South regions of the United States?', ['Civil War', 'War of 1812', 'Spanish-American War', 'Korean War'], 0, 'The American Civil War was fought from 1861 to 1865.'],
    ['Easy', 'The Renaissance began in which European country?', ['Italy', 'Norway', 'Ireland', 'Poland'], 0, 'The Renaissance began in Italian city-states.'],
    ['Medium', 'Which document begins with the words “We the People”?', ['Declaration of Independence', 'U.S. Constitution', 'Emancipation Proclamation', 'Magna Carta'], 1, 'The preamble to the U.S. Constitution begins “We the People.”'],
    ['Medium', 'Who issued the Emancipation Proclamation?', ['George Washington', 'Abraham Lincoln', 'Theodore Roosevelt', 'Woodrow Wilson'], 1, 'Abraham Lincoln issued the Emancipation Proclamation during the Civil War.'],
    ['Medium', 'Which empire used roads such as the Appian Way?', ['Roman Empire', 'Aztec Empire', 'Ottoman Empire', 'Mali Empire'], 0, 'The Romans built an extensive road network.'],
    ['Medium', 'The Magna Carta was sealed in which country?', ['England', 'France', 'Spain', 'Italy'], 0, 'King John sealed Magna Carta in England in 1215.'],
    ['Medium', 'Which ancient people created democracy in Athens?', ['Greeks', 'Phoenicians', 'Vikings', 'Persians'], 0, 'Classical Athens developed an early form of direct democracy.'],
    ['Hard', 'Which ancient city was buried by Mount Vesuvius in AD 79?', ['Sparta', 'Pompeii', 'Carthage', 'Delphi'], 1, 'Pompeii was buried during the eruption of Vesuvius.'],
    ['Hard', 'Who was the first emperor of Rome?', ['Julius Caesar', 'Augustus', 'Nero', 'Trajan'], 1, 'Augustus became Rome’s first emperor.'],
    ['Hard', 'The Peace of Westphalia ended which major European conflict?', ['Thirty Years’ War', 'Hundred Years’ War', 'Crimean War', 'Seven Years’ War'], 0, 'The Peace of Westphalia ended the Thirty Years’ War in 1648.'],
    ['Hard', 'Which dynasty built much of the present-day Great Wall of China?', ['Ming', 'Qin', 'Han', 'Tang'], 0, 'Many surviving sections of the Great Wall date to the Ming dynasty.'],
    ['Hard', 'Which Carthaginian general crossed the Alps with elephants?', ['Hannibal', 'Scipio', 'Pericles', 'Xerxes'], 0, 'Hannibal crossed the Alps during the Second Punic War.']
  ]),

  ...group('Words', 'words', [
    ['Easy', 'Which word is a synonym for “brief”?', ['Lengthy', 'Concise', 'Ancient', 'Noisy'], 1, 'Concise means brief while still clear.'],
    ['Easy', 'Which word is the opposite of “ancient”?', ['Modern', 'Fragile', 'Silent', 'Narrow'], 0, 'Modern contrasts with ancient.'],
    ['Easy', 'A person who writes books is called what?', ['Author', 'Pilot', 'Miner', 'Carpenter'], 0, 'An author writes books or other texts.'],
    ['Easy', 'Which word means very large?', ['Tiny', 'Enormous', 'Brief', 'Shallow'], 1, 'Enormous means very large.'],
    ['Easy', 'Which punctuation mark usually ends a direct question?', ['Comma', 'Question mark', 'Colon', 'Semicolon'], 1, 'A question mark commonly ends a direct question.'],
    ['Medium', 'What is a word with the opposite meaning of another word called?', ['Synonym', 'Antonym', 'Homonym', 'Acronym'], 1, 'An antonym has an opposite meaning.'],
    ['Medium', 'Which word is a synonym for “meticulous”?', ['Careless', 'Thorough', 'Hasty', 'Vague'], 1, 'Meticulous describes very careful attention to detail.'],
    ['Medium', 'A word formed from the first letters of a phrase, such as NASA, is called what?', ['Acronym', 'Palindrome', 'Suffix', 'Homophone'], 0, 'NASA is an acronym formed from initial letters.'],
    ['Medium', 'Which word is a palindrome?', ['Level', 'Table', 'River', 'Cloud'], 0, 'Level reads the same forward and backward.'],
    ['Medium', 'Which word means “to make less severe”?', ['Aggravate', 'Alleviate', 'Abandon', 'Accumulate'], 1, 'Alleviate means to reduce severity or discomfort.'],
    ['Hard', 'Which word means “difficult to understand because of complexity”?', ['Lucid', 'Obscure', 'Obvious', 'Literal'], 1, 'Obscure can mean unclear or difficult to understand.'],
    ['Hard', 'What does “ubiquitous” mean?', ['Rare', 'Present everywhere', 'Temporary', 'Extremely loud'], 1, 'Ubiquitous means widespread or seemingly everywhere.'],
    ['Hard', 'Which word means “a person who dislikes humankind”?', ['Philanthropist', 'Misanthrope', 'Optimist', 'Mediator'], 1, 'A misanthrope has a general dislike of humankind.'],
    ['Hard', 'Which word means “lasting for a very short time”?', ['Perennial', 'Ephemeral', 'Immutable', 'Enduring'], 1, 'Ephemeral means short-lived.'],
    ['Hard', 'Which term describes a mild or indirect word used in place of a harsh one?', ['Euphemism', 'Oxymoron', 'Anagram', 'Metaphor'], 0, 'A euphemism substitutes a milder expression.']
  ]),

  ...group('Nature', 'nature', [
    ['Easy', 'What is the fastest land animal?', ['Cheetah', 'Lion', 'Greyhound', 'Pronghorn'], 0, 'The cheetah has the highest short-burst land speed.'],
    ['Easy', 'Which animal is known for changing color to blend with surroundings?', ['Chameleon', 'Giraffe', 'Penguin', 'Buffalo'], 0, 'Many chameleons can change coloration.'],
    ['Easy', 'What do bees collect from flowers to help make honey?', ['Nectar', 'Sand', 'Bark', 'Salt'], 0, 'Honey bees collect nectar from flowers.'],
    ['Easy', 'Which animal is the largest living land animal?', ['African elephant', 'Giraffe', 'Polar bear', 'Rhinoceros'], 0, 'African elephants are the largest living land animals.'],
    ['Easy', 'A frog begins life in water as what?', ['Tadpole', 'Cub', 'Calf', 'Nymph'], 0, 'Young frogs begin as tadpoles.'],
    ['Medium', 'Which mammal is capable of true sustained flight?', ['Bat', 'Flying squirrel', 'Sugar glider', 'Colugo'], 0, 'Bats are the only mammals capable of true sustained flight.'],
    ['Medium', 'What is the largest living species of cat?', ['Tiger', 'Lion', 'Jaguar', 'Leopard'], 0, 'Tigers are the largest living cat species.'],
    ['Medium', 'Which tree produces acorns?', ['Oak', 'Maple', 'Pine', 'Birch'], 0, 'Acorns are the fruit of oak trees.'],
    ['Medium', 'Which animal has the longest neck?', ['Giraffe', 'Camel', 'Llama', 'Moose'], 0, 'The giraffe has the longest neck of any living animal.'],
    ['Medium', 'Coral reefs are built primarily by what kind of organism?', ['Animal', 'Plant', 'Fungus', 'Bacterium'], 0, 'Reef-building corals are animals.'],
    ['Hard', 'What is the largest living species of penguin?', ['Emperor penguin', 'King penguin', 'Adélie penguin', 'Gentoo penguin'], 0, 'The emperor penguin is the largest living penguin.'],
    ['Hard', 'Which bird is famous for the longest known migration by distance?', ['Arctic tern', 'Bald eagle', 'Ostrich', 'Toucan'], 0, 'Arctic terns make extremely long annual migrations.'],
    ['Hard', 'What is the process by which a caterpillar becomes a butterfly called?', ['Metamorphosis', 'Germination', 'Hibernation', 'Pollination'], 0, 'Butterflies undergo complete metamorphosis.'],
    ['Hard', 'Which biome is characterized by permafrost?', ['Tundra', 'Savanna', 'Rainforest', 'Chaparral'], 0, 'Permafrost is a defining feature of tundra regions.'],
    ['Hard', 'Which group of animals includes frogs and salamanders?', ['Amphibians', 'Reptiles', 'Marsupials', 'Mollusks'], 0, 'Frogs and salamanders are amphibians.']
  ]),

  ...group('Arts', 'arts', [
    ['Easy', 'A traditional piano keyboard uses how many repeating note names?', ['5', '6', '7', '8'], 2, 'The note names A through G repeat on a piano.'],
    ['Easy', 'Which instrument is normally played with a bow?', ['Violin', 'Trumpet', 'Flute', 'Trombone'], 0, 'Violins are commonly played with a bow.'],
    ['Easy', 'Who painted the Mona Lisa?', ['Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet', 'Vincent van Gogh'], 0, 'Leonardo da Vinci painted the Mona Lisa.'],
    ['Easy', 'Which primary colors combine to make purple in traditional paint mixing?', ['Red and blue', 'Blue and yellow', 'Red and yellow', 'Black and white'], 0, 'Red and blue pigments traditionally mix to make purple.'],
    ['Easy', 'Which instrument has black and white keys?', ['Piano', 'Violin', 'Trumpet', 'Drum'], 0, 'Pianos use a keyboard of black and white keys.'],
    ['Medium', 'Who painted The Starry Night?', ['Vincent van Gogh', 'Rembrandt', 'Salvador Dalí', 'Edgar Degas'], 0, 'Vincent van Gogh painted The Starry Night.'],
    ['Medium', 'In music, what does “forte” generally mean?', ['Loud', 'Soft', 'Slow', 'Repeat'], 0, 'Forte indicates a loud dynamic.'],
    ['Medium', 'Which artist is associated with the painting Guernica?', ['Pablo Picasso', 'Claude Monet', 'Georgia O’Keeffe', 'Andy Warhol'], 0, 'Picasso painted Guernica in 1937.'],
    ['Medium', 'What family of instruments includes the clarinet?', ['Woodwind', 'Brass', 'String', 'Percussion'], 0, 'The clarinet is a woodwind instrument.'],
    ['Medium', 'A haiku traditionally has how many lines?', ['3', '4', '5', '8'], 0, 'A traditional haiku has three lines.'],
    ['Hard', 'Who composed The Four Seasons?', ['Antonio Vivaldi', 'Johann Sebastian Bach', 'Wolfgang Mozart', 'Franz Schubert'], 0, 'Vivaldi composed The Four Seasons.'],
    ['Hard', 'Which art movement is strongly associated with Claude Monet?', ['Impressionism', 'Cubism', 'Surrealism', 'Futurism'], 0, 'Monet was a central figure in Impressionism.'],
    ['Hard', 'Who sculpted the marble statue David displayed in Florence?', ['Michelangelo', 'Donatello', 'Bernini', 'Rodin'], 0, 'Michelangelo created the famous Renaissance marble David.'],
    ['Hard', 'In theater, what is a soliloquy?', ['A character speaking thoughts aloud alone', 'A dance duet', 'A scene change', 'A costume rehearsal'], 0, 'A soliloquy lets a character voice thoughts aloud, typically alone.'],
    ['Hard', 'Which composer became deaf later in life but continued composing?', ['Ludwig van Beethoven', 'Frédéric Chopin', 'Antonio Vivaldi', 'Gustav Mahler'], 0, 'Beethoven continued composing despite severe hearing loss.']
  ]),

  ...group('Numbers', 'numbers', [
    ['Easy', 'What is 12 × 8?', ['84', '88', '96', '108'], 2, '12 multiplied by 8 equals 96.'],
    ['Easy', 'What is 45 + 27?', ['62', '72', '82', '92'], 1, '45 plus 27 equals 72.'],
    ['Easy', 'What is half of 100?', ['25', '40', '50', '75'], 2, 'Half of 100 is 50.'],
    ['Easy', 'How many sides does a triangle have?', ['3', '4', '5', '6'], 0, 'A triangle has three sides.'],
    ['Easy', 'What is 9 × 9?', ['72', '81', '90', '99'], 1, '9 multiplied by 9 equals 81.'],
    ['Medium', 'What is the square root of 144?', ['10', '11', '12', '14'], 2, '12 × 12 equals 144.'],
    ['Medium', 'What is 15 percent of 200?', ['20', '30', '40', '50'], 1, '15 percent of 200 is 30.'],
    ['Medium', 'What is 7 cubed?', ['49', '343', '729', '2401'], 1, '7 × 7 × 7 equals 343.'],
    ['Medium', 'What is the next prime number after 19?', ['20', '21', '23', '25'], 2, '23 is the next prime after 19.'],
    ['Medium', 'A right angle measures how many degrees?', ['45', '60', '90', '180'], 2, 'A right angle is 90 degrees.'],
    ['Hard', 'What is 2 to the 10th power?', ['512', '1024', '2048', '4096'], 1, '2¹⁰ equals 1024.'],
    ['Hard', 'What is the value of 6! (six factorial)?', ['120', '360', '720', '1440'], 2, '6! = 6×5×4×3×2×1 = 720.'],
    ['Hard', 'Which fraction is equivalent to 0.375?', ['1/4', '3/8', '2/5', '5/8'], 1, '3 divided by 8 equals 0.375.'],
    ['Hard', 'What is the sum of the interior angles of a hexagon?', ['540°', '720°', '900°', '1080°'], 1, 'A hexagon’s interior angles total 720 degrees.'],
    ['Hard', 'What is the greatest common divisor of 84 and 126?', ['14', '21', '42', '63'], 2, '42 is the greatest integer dividing both 84 and 126.']
  ]),

  ...group('Space', 'space', [
    ['Easy', 'What is Earth’s natural satellite called?', ['Titan', 'Europa', 'The Moon', 'Phobos'], 2, 'Earth has one natural satellite, the Moon.'],
    ['Easy', 'Which star is at the center of our solar system?', ['Sirius', 'Polaris', 'The Sun', 'Betelgeuse'], 2, 'The Sun is the star at the center of our solar system.'],
    ['Easy', 'Which planet is closest to the Sun?', ['Venus', 'Mercury', 'Earth', 'Mars'], 1, 'Mercury is the closest planet to the Sun.'],
    ['Easy', 'Which planet is often called the Red Planet?', ['Mars', 'Jupiter', 'Neptune', 'Venus'], 0, 'Iron minerals give Mars its reddish appearance.'],
    ['Easy', 'Which planet is the largest in our solar system?', ['Earth', 'Saturn', 'Jupiter', 'Neptune'], 2, 'Jupiter is the solar system’s largest planet.'],
    ['Medium', 'Which planet has the Great Red Spot?', ['Jupiter', 'Mars', 'Saturn', 'Uranus'], 0, 'The Great Red Spot is a giant storm on Jupiter.'],
    ['Medium', 'What is the name of the galaxy containing our solar system?', ['Andromeda', 'Milky Way', 'Sombrero', 'Whirlpool'], 1, 'Our solar system lies in the Milky Way galaxy.'],
    ['Medium', 'Which planet rotates on its side relative to most planets?', ['Uranus', 'Mars', 'Mercury', 'Jupiter'], 0, 'Uranus has an extreme axial tilt.'],
    ['Medium', 'Which moon is the largest in the solar system?', ['Titan', 'Ganymede', 'Europa', 'Triton'], 1, 'Ganymede, a moon of Jupiter, is the largest moon.'],
    ['Medium', 'What is a rocky object entering Earth’s atmosphere commonly called while it glows?', ['Meteor', 'Comet', 'Planet', 'Nebula'], 0, 'The glowing phenomenon is called a meteor.'],
    ['Hard', 'Which planet has the shortest year?', ['Mercury', 'Venus', 'Mars', 'Jupiter'], 0, 'Mercury orbits the Sun in about 88 Earth days.'],
    ['Hard', 'What is the boundary around a black hole beyond which light cannot escape called?', ['Event horizon', 'Asteroid belt', 'Magnetopause', 'Photosphere'], 0, 'The event horizon marks the point beyond which escape is impossible.'],
    ['Hard', 'Which planet has the longest day measured by rotation period?', ['Venus', 'Mercury', 'Mars', 'Saturn'], 0, 'Venus rotates extremely slowly, taking about 243 Earth days per rotation.'],
    ['Hard', 'What type of star is the Sun?', ['G-type main-sequence star', 'Red giant', 'White dwarf', 'Neutron star'], 0, 'The Sun is a G-type main-sequence star.'],
    ['Hard', 'Which dwarf planet lies in the asteroid belt between Mars and Jupiter?', ['Ceres', 'Pluto', 'Eris', 'Haumea'], 0, 'Ceres is the largest object in the asteroid belt and a dwarf planet.']
  ])
]

export default triviaQuestions
