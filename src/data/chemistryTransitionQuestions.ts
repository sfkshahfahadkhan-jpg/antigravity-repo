import { Question } from '../types';

export const CHEMISTRY_TRANSITION_QUIZ: Question[] = [
  {
    id: 'ch-tr-1',
    text: 'Transition elements are those in which _____ or _____ orbitals are being filled.',
    options: ['s, p', 'd, f', 'p, d', 's, f'],
    correctAnswer: 'd, f',
    explanation: 'd-block (outer) and f-block (inner) transition elements.'
  },
  {
    id: 'ch-tr-2',
    text: 'A "Typical" transition element has a partially filled _____ subshell in its atomic or ionic state.',
    options: ['s', 'p', 'd', 'f'],
    correctAnswer: 'd',
    explanation: 'IUPAC definition.'
  },
  {
    id: 'ch-tr-3',
    text: 'Which group elements are called "Non-typical" transition elements?',
    options: ['Group 3 (IIIB)', 'Group 12 (IIB)', 'Group 11 (IB)', 'Both A and B'],
    correctAnswer: 'Both A and B',
    explanation: 'Group 3 (Sc, Y, La) and Group 12 (Zn, Cd, Hg) have specific properties differing from others.'
  },
  {
    id: 'ch-tr-4',
    text: 'Transition elements are all _____ with high MP/BP.',
    options: ['Non-metals', 'Metals', 'Metalloids', 'Gases'],
    correctAnswer: 'Metals',
    explanation: 'Due to strong metallic bonding involving d-electrons.'
  },
  {
    id: 'ch-tr-5',
    text: 'The variable oxidation states of transition metals is due to the involvement of _____ and _____ electrons.',
    options: ['ns, np', 'ns, (n-1)d', '(n-1)d, np', 'None'],
    correctAnswer: 'ns, (n-1)d',
    explanation: 'Energy difference between these orbitals is small.'
  },
  {
    id: 'ch-tr-6',
    text: 'Most transition metal compounds are colored due to _____ transitions.',
    options: ['s-p', 'd-d', 'p-d', 'f-f'],
    correctAnswer: 'd-d',
    explanation: 'Absorption of specific wavelengths in the visible region.'
  },
  {
    id: 'ch-tr-7',
    text: 'Paramagnetism is a property of substances that have _____ electrons.',
    options: ['Paired', 'Unpaired', 'Delocalized', 'None'],
    correctAnswer: 'Unpaired',
    explanation: 'They are attracted into a magnetic field.'
  },
  {
    id: 'ch-tr-8',
    text: 'Which ion is diamagnetic?',
    options: ['Fe2+', 'Cu2+', 'Zn2+', 'Cr3+'],
    correctAnswer: 'Zn2+',
    explanation: 'Has a completely filled d10 configuration (no unpaired electrons).'
  },
  {
    id: 'ch-tr-9',
    text: 'Coordination compounds consist of a central metal atom/ion bonded to _____.',
    options: ['Protons', 'Ligands', 'Anions only', 'None'],
    correctAnswer: 'Ligands',
    explanation: 'Ligands donate electron pairs to the metal.'
  },
  {
    id: 'ch-tr-10',
    text: 'A ligand that can donate two electron pairs is called:',
    options: ['Monodentate', 'Bidentate', 'Polydentate', 'Chelate'],
    correctAnswer: 'Bidentate',
    explanation: 'e.g. Ethylenediamine (en), Oxalate.'
  },
  {
    id: 'ch-tr-11',
    text: 'EDTA is a _____ ligand.',
    options: ['Bidentate', 'Tetradentate', 'Hexadentate', 'None'],
    correctAnswer: 'Hexadentate',
    explanation: 'Ethylene diamine tetra-acetate.'
  },
  {
    id: 'ch-tr-12',
    text: 'The total number of coordinate bonds formed by the central metal is its:',
    options: ['Oxidation number', 'Coordination number', 'Valency', 'None'],
    correctAnswer: 'Coordination number',
    explanation: 'Common values are 4 and 6.'
  },
  {
    id: 'ch-tr-13',
    text: 'The geometry of a complex with coordination number 6 is usually:',
    options: ['Tetrahedral', 'Square planar', 'Octahedral', 'Linear'],
    correctAnswer: 'Octahedral',
    explanation: 'Six ligands at the corners of an octahedron.'
  },
  {
    id: 'ch-tr-14',
    text: 'The geometry of [Ni(CN)4]2- is _____, while [Ni(Cl)4]2- is _____.',
    options: ['Octahedral, Tetrahedral', 'Square planar, Tetrahedral', 'Tetrahedral, Square planar', 'None'],
    correctAnswer: 'Square planar, Tetrahedral',
    explanation: 'Depends on the strength of the ligand and hybridization (dsp2 vs sp3).'
  },
  {
    id: 'ch-tr-15',
    text: 'According to IUPAC, the name of [Fe(CN)6]4- is:',
    options: ['Hexacyanoiron(II)', 'Hexacyanoferrate(II)', 'Hexacyanoferrate(III)', 'None'],
    correctAnswer: 'Hexacyanoferrate(II)',
    explanation: '-ate suffix is used for anionic complexes.'
  },
  {
    id: 'ch-tr-16',
    text: 'The oxidation state of Fe in K3[Fe(CN)6] is:',
    options: ['+2', '+3', '+4', '0'],
    correctAnswer: '+3',
    explanation: '3(+1) + x + 6(-1) = 0 => x = +3.'
  },
  {
    id: 'ch-tr-17',
    text: 'What is the "Chelate effect"?',
    options: ['Reduction in stability', 'Increased stability of complexes with multidentate ligands', 'Change in color', 'None'],
    correctAnswer: 'Increased stability of complexes with multidentate ligands',
    explanation: 'Formation of ring structures.'
  },
  {
    id: 'ch-tr-18',
    text: 'Which transition metal is the main component of Steel?',
    options: ['Copper', 'Iron (Fe)', 'Chromium', 'Nickel'],
    correctAnswer: 'Iron (Fe)',
    explanation: 'Steel is an alloy of Iron with small amounts of Carbon.'
  },
  {
    id: 'ch-tr-19',
    text: 'Pig iron contains about _____% Carbon.',
    options: ['0.1', '1', '3-4.5', '10'],
    correctAnswer: '3-4.5',
    explanation: 'Produced in the blast furnace; brittle.'
  },
  {
    id: 'ch-tr-20',
    text: 'Wrought iron is the _____ form of industrial iron.',
    options: ['Purest (0.1-0.2% C)', 'Most impure', 'Hardest', 'None'],
    correctAnswer: 'Purest (0.1-0.2% C)',
    explanation: 'Tough and malleable.'
  },
  {
    id: 'ch-tr-21',
    text: 'Stainless steel contains Iron along with _____ and _____.',
    options: ['Carbon, Copper', 'Chromium, Nickel', 'Zinc, Tin', 'None'],
    correctAnswer: 'Chromium, Nickel',
    explanation: 'Highly resistant to corrosion.'
  },
  {
    id: 'ch-tr-22',
    text: 'The process of rusting of Iron is an _____ process.',
    options: ['Biological', 'Electrochemical', 'Physical', 'None'],
    correctAnswer: 'Electrochemical',
    explanation: 'Requires moisture and oxygen; involves formation of Fe2O3.nH2O.'
  },
  {
    id: 'ch-tr-23',
    text: 'Which is a method to prevent corrosion?',
    options: ['Painting', 'Galvanizing', 'Cathodic protection', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Various barriers or chemical methods.'
  },
  {
    id: 'ch-tr-24',
    text: 'Potassium dichromate (K2Cr2O7) is a powerful _____ agent.',
    options: ['Reducing', 'Oxidizing', 'Bleaching', 'None'],
    correctAnswer: 'Oxidizing',
    explanation: 'Used in volumetric analysis and organic chemistry.'
  },
  {
    id: 'ch-tr-25',
    text: 'In acidic medium, K2Cr2O7 changes from orange to _____ upon reduction.',
    options: ['Yellow', 'Green (Cr3+)', 'Blue', 'Colorless'],
    correctAnswer: 'Green (Cr3+)',
    explanation: 'Standard indicator of oxidation.'
  },
  {
    id: 'ch-tr-26',
    text: 'Potassium permanganate (KMnO4) is _____ in color.',
    options: ['Green', 'Deep purple', 'Yellow', 'Red'],
    correctAnswer: 'Deep purple',
    explanation: 'Self-indicator in titrations.'
  },
  {
    id: 'ch-tr-27',
    text: 'In acidic medium, MnO4- is reduced to _____ (colorless).',
    options: ['Mn2+', 'MnO2', 'Mn6+', 'None'],
    correctAnswer: 'Mn2+',
    explanation: 'Mn changes from +7 to +2.'
  },
  {
    id: 'ch-tr-28',
    text: 'The d-block elements of 4th, 5th, and 6th periods are called _____ transition series.',
    options: ['1st, 2nd, and 3rd', 'Short, Medium, Long', 'Outer, Inner, Middle', 'None'],
    correctAnswer: '1st, 2nd, and 3rd',
    explanation: '3d, 4d, and 5d series.'
  },
  {
    id: 'ch-tr-29',
    text: 'Lanthanides and Actinides are called _____ transition elements.',
    options: ['Outer', 'Inner', 'Pseudo', 'None'],
    correctAnswer: 'Inner',
    explanation: 'Found in the f-block.'
  },
  {
    id: 'ch-tr-30',
    text: 'Which transition metal has the highest melting point?',
    options: ['Iron', 'Tungsten (W)', 'Chromium', 'Mercury'],
    correctAnswer: 'Tungsten (W)',
    explanation: 'Used in bulb filaments.'
  },
  {
    id: 'ch-tr-31',
    text: 'Which transition metal is liquid at room temperature?',
    options: ['Mercury (Hg)', 'Silver', 'Copper', 'Zinc'],
    correctAnswer: 'Mercury (Hg)',
    explanation: 'Lowest melting point in the block.'
  },
  {
    id: 'ch-tr-32',
    text: 'Copper, Silver, and Gold are often called _____ metals.',
    options: ['Active', 'Coinage', 'Alkali', 'Rare'],
    correctAnswer: 'Coinage',
    explanation: 'Used historically to make coins.'
  },
  {
    id: 'ch-tr-33',
    text: 'Transition metals show _____ magnetism.',
    options: ['Ferro', 'Para', 'Dia', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Depending on electronic configuration.'
  },
  {
    id: 'ch-tr-34',
    text: 'Iron, Cobalt, and Nickel are _____ (strongly attracted by magnets).',
    options: ['Paramagnetic', 'Ferromagnetic', 'Diamagnetic', 'None'],
    correctAnswer: 'Ferromagnetic',
    explanation: 'Special case of extreme paramagnetism.'
  },
  {
    id: 'ch-tr-35',
    text: 'A substance that donates a pair of electrons to form a coordinate bond is a:',
    options: ['Lewis acid', 'Lewis base', 'Bronsted acid', 'None'],
    correctAnswer: 'Lewis base',
    explanation: 'Definition of a ligand.'
  },
  {
    id: 'ch-tr-36',
    text: 'Coordination sphere is written inside _____ in a chemical formula.',
    options: ['Parentheses ()', 'Square brackets []', 'Braces {}', 'None'],
    correctAnswer: 'Square brackets []',
    explanation: 'Contains metal and ligands.'
  },
  {
    id: 'ch-tr-37',
    text: 'Which transition metal is essential for Vitamin B12?',
    options: ['Iron', 'Cobalt (Co)', 'Copper', 'Zinc'],
    correctAnswer: 'Cobalt (Co)',
    explanation: 'Central metal in cobalamin.'
  },
  {
    id: 'ch-tr-38',
    text: 'Hemoglobin contains _____ as the central metal atom.',
    options: ['Magnesium', 'Iron (Fe)', 'Manganese', 'None'],
    correctAnswer: 'Iron (Fe)',
    explanation: 'In the +2 oxidation state.'
  },
  {
    id: 'ch-tr-39',
    text: 'In the Bessemer process, impurities like Si and Mn are removed by _____ them.',
    options: ['Reducing', 'Oxidizing', 'Filtering', 'None'],
    correctAnswer: 'Oxidizing',
    explanation: 'Air is blown through molten pig iron.'
  },
  {
    id: 'ch-tr-40',
    text: 'The "Open Hearth" process is used for manufacture of:',
    options: ['Pig iron', 'Cast iron', 'Steel', 'None'],
    correctAnswer: 'Steel',
    explanation: 'Allows for better control and larger batches.'
  },
  {
    id: 'ch-tr-41',
    text: 'Chromyl chloride test is used to detect _____ radical.',
    options: ['Br-', 'Cl-', 'I-', 'NO3-'],
    correctAnswer: 'Cl-',
    explanation: 'Forms deep red vapors of CrO2Cl2.'
  },
  {
    id: 'ch-tr-42',
    text: 'The electronic configuration of Copper (Z=29) is:',
    options: ['[Ar] 4s2 3d9', '[Ar] 4s1 3d10', '[Ar] 4s2 3d10', 'None'],
    correctAnswer: '[Ar] 4s1 3d10',
    explanation: 'Exception due to extra stability of fully filled d-subshell.'
  },
  {
    id: 'ch-tr-43',
    text: 'The electronic configuration of Chromium (Z=24) is:',
    options: ['[Ar] 4s2 3d4', '[Ar] 4s1 3d5', '[Ar] 4s2 3d5', 'None'],
    correctAnswer: '[Ar] 4s1 3d5',
    explanation: 'Exception due to extra stability of half-filled d-subshell.'
  },
  {
    id: 'ch-tr-44',
    text: 'Which transition metal is used as a catalyst in the hydrogenation of oils?',
    options: ['Iron', 'Nickel (Ni)', 'Platinum', 'Copper'],
    correctAnswer: 'Nickel (Ni)',
    explanation: 'Finely divided nickel.'
  },
  {
    id: 'ch-tr-45',
    text: 'V2O5 is used as a catalyst in the _____ process.',
    options: ['Haber', 'Contact', 'Ostwald', 'Solvay'],
    correctAnswer: 'Contact',
    explanation: 'For manufacture of sulfuric acid.'
  },
  {
    id: 'ch-tr-46',
    text: 'Most transition metals form _____ compounds.',
    options: ['Ionic', 'Covalent', 'Interstitial', 'Both A and B'],
    correctAnswer: 'Both A and B',
    explanation: 'Depending on oxidation state and partner.'
  },
  {
    id: 'ch-tr-47',
    text: 'Interstitial compounds have _____ density and _____ melting points than pure metals.',
    options: ['Lower, Higher', 'Higher, Lower', 'Lower, Lower', 'Higher, Higher'],
    correctAnswer: 'Lower, Higher',
    explanation: 'Small atoms like C or N fit into the lattice.'
  },
  {
    id: 'ch-tr-48',
    text: 'The property of transition metals to form alloys is due to their similar _____ radii.',
    options: ['Ionic', 'Atomic', 'Covalent', 'None'],
    correctAnswer: 'Atomic',
    explanation: 'One metal can easily replace another in the crystal lattice.'
  },
  {
    id: 'ch-tr-49',
    text: 'Brass is an alloy of _____ and _____.',
    options: ['Copper, Tin', 'Copper, Zinc', 'Iron, Carbon', 'None'],
    correctAnswer: 'Copper, Zinc',
    explanation: 'Common alloy.'
  },
  {
    id: 'ch-tr-50',
    text: 'Bronze is an alloy of _____ and _____.',
    options: ['Copper, Zinc', 'Copper, Tin', 'Aluminum, Magnesium', 'None'],
    correctAnswer: 'Copper, Tin',
    explanation: 'Used for statues and bells.'
  },
  {
    id: 'ch-tr-51',
    text: 'The ability of a central metal to form isomers in complexes is a form of _____ isomerism.',
    options: ['Chain', 'Structural and Stereoisomerism', 'Functional', 'None'],
    correctAnswer: 'Structural and Stereoisomerism',
    explanation: 'Includes linkage, coordination, geometric, and optical.'
  },
  {
    id: 'ch-tr-52',
    text: 'Geometric isomerism (cis/trans) is common in complexes with coordination number:',
    options: ['2', '4 (Square planar)', '6 (Octahedral)', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'Requires specific spatial arrangements.'
  },
  {
    id: 'ch-tr-53',
    text: 'Optical isomerism is most common in _____ complexes with bidentate ligands.',
    options: ['Tetrahedral', 'Square planar', 'Octahedral', 'None'],
    correctAnswer: 'Octahedral',
    explanation: 'e.g. [Co(en)3]3+.'
  },
  {
    id: 'ch-tr-54',
    text: 'Which transition metal has the electronic configuration [Ar] 4s2 3d6?',
    options: ['Manganese', 'Iron', 'Cobalt', 'Nickel'],
    correctAnswer: 'Iron',
    explanation: 'Z = 26.'
  },
  {
    id: 'ch-tr-55',
    text: 'The oxidation state of Manganese in KMnO4 is:',
    options: ['+2', '+4', '+6', '+7'],
    correctAnswer: '+7',
    explanation: 'Highest oxidation state for Mn.'
  },
  {
    id: 'ch-tr-56',
    text: 'Titanium is known as the "_____ Metal" for its high strength and low weight.',
    options: ['Strategic/Future', 'Common', 'Noble', 'None'],
    correctAnswer: 'Strategic/Future',
    explanation: 'Used in aerospace and implants.'
  },
  {
    id: 'ch-tr-57',
    text: 'Copper(I) compounds are generally _____ whereas Copper(II) are _____.',
    options: ['Blue, White', 'White/Colorless, Blue', 'Green, Red', 'None'],
    correctAnswer: 'White/Colorless, Blue',
    explanation: 'Cu+ has d10 (no d-d transition); Cu2+ has d9.'
  },
  {
    id: 'ch-tr-58',
    text: 'The "sacrificial" protection of Iron by Zinc is because Zinc is more _____ than Iron.',
    options: ['Dense', 'Electropositive/Reactive', 'Expensive', 'None'],
    correctAnswer: 'Electropositive/Reactive',
    explanation: 'Zinc oxidizes first.'
  },
  {
    id: 'ch-tr-59',
    text: 'Silver halides (AgCl, AgBr, AgI) are used in _____ because they are sensitive to light.',
    options: ['Medicine', 'Photography', 'Batteries', 'None'],
    correctAnswer: 'Photography',
    explanation: 'Decompose to silver metal.'
  },
  {
    id: 'ch-tr-60',
    text: 'Which is a "Lanthanide" element?',
    options: ['Uranium', 'Cerium (Ce)', 'Thorium', 'None'],
    correctAnswer: 'Cerium (Ce)',
    explanation: 'First member of the lanthanide series.'
  },
  {
    id: 'ch-tr-61',
    text: 'The steady decrease in atomic/ionic size from La to Lu is:',
    options: ['Transition contraction', 'Lanthanide contraction', 'Periodic shrinkage', 'None'],
    correctAnswer: 'Lanthanide contraction',
    explanation: 'Due to poor shielding by f-electrons.'
  },
  {
    id: 'ch-tr-62',
    text: 'Actinides are mostly _____ and have no stable isotopes.',
    options: ['Non-metals', 'Radioactive', 'Gases', 'None'],
    correctAnswer: 'Radioactive',
    explanation: 'e.g. Uranium, Plutonium.'
  },
  {
    id: 'ch-tr-63',
    text: 'The hybridization in an Octahedral complex can be _____ or _____.',
    options: ['sp3, dsp2', 'sp3d2 (outer), d2sp3 (inner)', 'sp2, sp3', 'None'],
    correctAnswer: 'sp3d2 (outer), d2sp3 (inner)',
    explanation: 'Depending on ligand strength.'
  },
  {
    id: 'ch-tr-64',
    text: 'Strong field ligands like CN- usually form _____ complexes.',
    options: ['Outer orbital/High spin', 'Inner orbital/Low spin', 'Ionic', 'None'],
    correctAnswer: 'Inner orbital/Low spin',
    explanation: 'They cause pairing of d-electrons.'
  },
  {
    id: 'ch-tr-65',
    text: 'Weak field ligands like F- usually form _____ complexes.',
    options: ['Outer orbital/High spin', 'Inner orbital/Low spin', 'Covalent', 'None'],
    correctAnswer: 'Outer orbital/High spin',
    explanation: 'They do not cause pairing.'
  },
  {
    id: 'ch-tr-66',
    text: 'The d-orbitals in an octahedral field split into _____ and _____ sets.',
    options: ['s, p', 't2g, eg', 'dxy, dxz', 'None'],
    correctAnswer: 't2g, eg',
    explanation: 'According to Crystal Field Theory (CFT).'
  },
  {
    id: 'ch-tr-67',
    text: 'In an octahedral field, _____ orbitals have higher energy than _____ orbitals.',
    options: ['eg, t2g', 't2g, eg', 'All same', 'None'],
    correctAnswer: 'eg, t2g',
    explanation: 'eg orbitals point directly at the ligands.'
  },
  {
    id: 'ch-tr-68',
    text: 'The energy difference between t2g and eg orbitals is denoted by:',
    options: ['ΔH', 'Δo (Crystal Field Splitting Energy)', 'Ea', 'None'],
    correctAnswer: 'Δo (Crystal Field Splitting Energy)',
    explanation: 'Determines color and magnetism.'
  },
  {
    id: 'ch-tr-69',
    text: 'The blue color of Copper(II) sulfate is due to absorption of _____ light.',
    options: ['Blue', 'Orange/Red', 'Green', 'Yellow'],
    correctAnswer: 'Orange/Red',
    explanation: 'Complementary color is observed.'
  },
  {
    id: 'ch-tr-70',
    text: 'Which transition metal is used in "Tollens\' Reagent"?',
    options: ['Gold', 'Silver (Ag)', 'Platinum', 'Copper'],
    correctAnswer: 'Silver (Ag)',
    explanation: 'Ammoniacal silver nitrate.'
  },
  {
    id: 'ch-tr-71',
    text: 'Fehling\'s solution contains complexes of:',
    options: ['Iron', 'Copper (Cu)', 'Zinc', 'Silver'],
    correctAnswer: 'Copper (Cu)',
    explanation: 'Used to test for reducing sugars.'
  },
  {
    id: 'ch-tr-72',
    text: 'The maximum coordination number shown by transition metals is usually:',
    options: ['4', '6', '8', '12'],
    correctAnswer: '6',
    explanation: 'Octahedral geometry is most common.'
  },
  {
    id: 'ch-tr-73',
    text: 'Which oxidation state is most common for Lanthanides?',
    options: ['+2', '+3', '+4', '+5'],
    correctAnswer: '+3',
    explanation: 'Characteristic oxidation state.'
  },
  {
    id: 'ch-tr-74',
    text: 'Nomenclature: The name of ligands are written in _____ order.',
    options: ['Priority', 'Alphabetical', 'Size', 'None'],
    correctAnswer: 'Alphabetical',
    explanation: 'IUPAC rule.'
  },
  {
    id: 'ch-tr-75',
    text: 'The ligand name for H2O is _____ and for NH3 is _____.',
    options: ['Water, Ammonia', 'Aqua, Ammine', 'Hydrate, Azide', 'None'],
    correctAnswer: 'Aqua, Ammine',
    explanation: 'Special names in coordination chemistry.'
  },
  {
    id: 'ch-tr-76',
    text: 'Cast iron is produced in the blast furnace and is very _____ due to high Carbon content.',
    options: ['Malleable', 'Brittle/Hard', 'Soft', 'None'],
    correctAnswer: 'Brittle/Hard',
    explanation: 'Cannot be welded or forged easily.'
  },
  {
    id: 'ch-tr-77',
    text: 'Iron is extracted from _____ ore.',
    options: ['Magnetite', 'Hematite (Fe2O3)', 'Siderite', 'Limonite'],
    correctAnswer: 'Hematite (Fe2O3)',
    explanation: 'Most important ore of iron.'
  },
  {
    id: 'ch-tr-78',
    text: 'Flux added in the blast furnace to remove sand/clay is:',
    options: ['Coke', 'Limestone (CaCO3)', 'Silica', 'None'],
    correctAnswer: 'Limestone (CaCO3)',
    explanation: 'Forms slag (CaSiO3).'
  },
  {
    id: 'ch-tr-79',
    text: 'Slag is _____ than molten iron and floats on top.',
    options: ['Heavier', 'Lighter', 'Denser', 'None'],
    correctAnswer: 'Lighter',
    explanation: 'Protects iron from re-oxidation.'
  },
  {
    id: 'ch-tr-80',
    text: 'The major use of Manganese in steel industry is to make steel _____ and _____.',
    options: ['Soft, weak', 'Hard, wear-resistant', 'Light, cheap', 'None'],
    correctAnswer: 'Hard, wear-resistant',
    explanation: 'Used for railway tracks and rock crushers.'
  },
  {
    id: 'ch-tr-81',
    text: 'The density of transition elements _____ along the period.',
    options: ['Increases', 'Decreases', 'Stays same', 'None'],
    correctAnswer: 'Increases',
    explanation: 'Atomic mass increases faster than atomic volume.'
  },
  {
    id: 'ch-tr-82',
    text: 'Which transition metal has the highest density?',
    options: ['Lead', 'Osmium (Os) / Iridium', 'Gold', 'Tungsten'],
    correctAnswer: 'Osmium (Os) / Iridium',
    explanation: 'Densest elements known.'
  },
  {
    id: 'ch-tr-83',
    text: 'Which ion gives a Prussian Blue color with K4[Fe(CN)6]?',
    options: ['Fe2+', 'Fe3+', 'Cu2+', 'None'],
    correctAnswer: 'Fe3+',
    explanation: 'Forms Ferri-ferrocyanide.'
  },
  {
    id: 'ch-tr-84',
    text: 'Nomenclature: The neutral complex [Ni(CO)4] is named:',
    options: ['Nickel tetracarbonyl', 'Tetracarbonylnickel(0)', 'Tetracarbonylnickelate(0)', 'None'],
    correctAnswer: 'Tetracarbonylnickel(0)',
    explanation: 'No suffix for neutral complexes; oxidation state 0.'
  },
  {
    id: 'ch-tr-85',
    text: 'A chelate ligand forms a _____ structure with the metal.',
    options: ['Linear', 'Ring', 'Sheet', 'None'],
    correctAnswer: 'Ring',
    explanation: 'Greek for "claw".'
  },
  {
    id: 'ch-tr-86',
    text: 'Transition metals have _____ standard reduction potentials than s-block metals.',
    options: ['Lower', 'Higher (less negative)', 'Zero', 'None'],
    correctAnswer: 'Higher (less negative)',
    explanation: 'They are less reactive than alkali/alkaline earth metals.'
  },
  {
    id: 'ch-tr-87',
    text: 'Which element is NOT a transition element by IUPAC definition?',
    options: ['Iron', 'Zinc', 'Copper', 'Chromium'],
    correctAnswer: 'Zinc',
    explanation: 'Has full d10 in both atom and Zn2+ ion.'
  },
  {
    id: 'ch-tr-88',
    text: 'Mond\'s process is used for the purification of:',
    options: ['Copper', 'Nickel', 'Iron', 'None'],
    correctAnswer: 'Nickel',
    explanation: 'Involves formation of volatile Ni(CO)4.'
  },
  {
    id: 'ch-tr-89',
    text: 'Which alloy is used for making surgical instruments?',
    options: ['Brass', 'Stainless Steel', 'Bronze', 'None'],
    correctAnswer: 'Stainless Steel',
    explanation: 'Durable and easy to sterilize.'
  },
  {
    id: 'ch-tr-90',
    text: 'Chromium(VI) compounds are generally _____ or _____ in color.',
    options: ['Blue, Green', 'Yellow, Orange', 'White, Black', 'None'],
    correctAnswer: 'Yellow, Orange',
    explanation: 'Chromates (yellow) and Dichromates (orange).'
  },
  {
    id: 'ch-tr-91',
    text: 'Chromates and Dichromates are interconvertible depending on _____ of the medium.',
    options: ['Temperature', 'pH (Acidity/Basicity)', 'Pressure', 'None'],
    correctAnswer: 'pH (Acidity/Basicity)',
    explanation: 'Acidic medium favors Dichromate; Basic favors Chromate.'
  },
  {
    id: 'ch-tr-92',
    text: 'Ziegler-Natta catalyst is a mixture of _____ and _____.',
    options: ['TiCl4, Al(C2H5)3', 'V2O5, Pt', 'Fe, Mo', 'None'],
    correctAnswer: 'TiCl4, Al(C2H5)3',
    explanation: 'Used for polymerization of ethene.'
  },
  {
    id: 'ch-tr-93',
    text: 'The property of "d-d transition" is only possible in _____ d-subshells.',
    options: ['d0', 'd10', 'd1 to d9 (partially filled)', 'None'],
    correctAnswer: 'd1 to d9 (partially filled)',
    explanation: 'Requires available space and electrons.'
  },
  {
    id: 'ch-tr-94',
    text: 'Which transition metal ion is used to detect water (turns blue)?',
    options: ['Fe2+', 'Cu2+ (as anhydrous CuSO4)', 'Zn2+', 'None'],
    correctAnswer: 'Cu2+ (as anhydrous CuSO4)',
    explanation: 'Anhydrous is white; hydrated is blue.'
  },
  {
    id: 'ch-tr-95',
    text: 'Gold dissolves in aqua regia to form:',
    options: ['AuCl3', 'HAuCl4 (Chloroauric acid)', 'AuNO3', 'None'],
    correctAnswer: 'HAuCl4 (Chloroauric acid)',
    explanation: 'Soluble complex.'
  },
  {
    id: 'ch-tr-96',
    text: 'The most common geometry for coordination number 4 is _____ or _____.',
    options: ['Octahedral, Linear', 'Tetrahedral, Square planar', 'Square planar, Bipyramidal', 'None'],
    correctAnswer: 'Tetrahedral, Square planar',
    explanation: 'Depends on hybridization.'
  },
  {
    id: 'ch-tr-97',
    text: 'Linkage isomerism occurs when a ligand is _____ (can bond through different atoms).',
    options: ['Monodentate', 'Ambidentate', 'Chelating', 'None'],
    correctAnswer: 'Ambidentate',
    explanation: 'e.g. NO2- (nitro vs nitrito), SCN- (thiocyanato vs isothiocyanato).'
  },
  {
    id: 'ch-tr-98',
    text: 'A complex which contains two or more different types of ligands is called:',
    options: ['Homoleptic', 'Heteroleptic', 'Mixed', 'None'],
    correctAnswer: 'Heteroleptic',
    explanation: 'e.g. [Co(NH3)4Cl2]+.'
  },
  {
    id: 'ch-tr-99',
    text: 'A complex which contains only one type of ligand is called:',
    options: ['Homoleptic', 'Heteroleptic', 'Pure', 'None'],
    correctAnswer: 'Homoleptic',
    explanation: 'e.g. [Fe(CN)6]4-.'
  },
  {
    id: 'ch-tr-100',
    text: 'The energy required for d-d transition generally corresponds to which region?',
    options: ['UV', 'Visible', 'IR', 'X-ray'],
    correctAnswer: 'Visible',
    explanation: 'Reason why transition metal compounds are colored.'
  }
];
