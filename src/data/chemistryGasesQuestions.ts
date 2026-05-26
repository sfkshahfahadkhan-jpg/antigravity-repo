import { Question } from '../types';

export const CHEMISTRY_GASES_QUIZ: Question[] = [
  {
    id: 'chem-gas-1',
    text: 'According to Boyle’s Law, the volume of a given mass of gas is inversely proportional to its pressure provided that:',
    options: ['Temperature is constant', 'Density is constant', 'Volume is constant', 'Mass is variable'],
    correctAnswer: 'Temperature is constant',
    explanation: 'Boyle’s Law: V ∝ 1/P at constant T.'
  },
  {
    id: 'chem-gas-2',
    text: 'At constant pressure, the volume of a gas is directly proportional to its absolute temperature. This is known as:',
    options: ['Boyle’s Law', 'Charles’s Law', 'Avogadro’s Law', 'Dalton’s Law'],
    correctAnswer: 'Charles’s Law',
    explanation: 'Charles’s Law: V ∝ T at constant P.'
  },
  {
    id: 'chem-gas-3',
    text: 'The absolute zero temperature is equal to:',
    options: ['0°C', '273.15 K', '-273.15°C', '32°F'],
    correctAnswer: '-273.15°C',
    explanation: '0 K = -273.15°C. It is the temperature where molecular motion theoretically stops.'
  },
  {
    id: 'chem-gas-4',
    text: 'The value of the ideal gas constant R in units of dm³ atm K⁻¹ mol⁻¹ is:',
    options: ['8.314', '0.0821', '1.987', '62.4'],
    correctAnswer: '0.0821',
    explanation: 'R = 0.0821 dm³ atm / (K mol).'
  },
  {
    id: 'chem-gas-5',
    text: 'A gas occupies 100 cm³ at 1 atm. What will be its volume at 2 atm if temperature remains constant?',
    options: ['200 cm³', '50 cm³', '100 cm³', '25 cm³'],
    correctAnswer: '50 cm³',
    explanation: 'P1V1 = P2V2 => 1 * 100 = 2 * V2 => V2 = 50 cm³.'
  },
  {
    id: 'chem-gas-6',
    text: 'Which law states that the total pressure of a mixture of non-reacting gases is the sum of their partial pressures?',
    options: ['Graham’s Law', 'Dalton’s Law', 'Avogadro’s Law', 'Henry’s Law'],
    correctAnswer: 'Dalton’s Law',
    explanation: 'Dalton’s Law of Partial Pressures: P_total = P1 + P2 + ...'
  },
  {
    id: 'chem-gas-7',
    text: 'The rate of diffusion of a gas is inversely proportional to the square root of its molar mass. This is:',
    options: ['Graham’s Law', 'Dalton’s Law', 'Charles’s Law', 'Boyle’s Law'],
    correctAnswer: 'Graham’s Law',
    explanation: 'r1/r2 = √(M2/M1).'
  },
  {
    id: 'chem-gas-8',
    text: 'Which gas will diffuse most rapidly?',
    options: ['Oxygen (32)', 'Nitrogen (28)', 'Hydrogen (2)', 'Carbon dioxide (44)'],
    correctAnswer: 'Hydrogen (2)',
    explanation: 'Lighter gases diffuse faster. Hydrogen has the lowest molar mass.'
  },
  {
    id: 'chem-gas-9',
    text: 'The Kinetic Molecular Theory of gases was mainly developed by:',
    options: ['Bernoulli, Clausius, Maxwell, and Boltzmann', 'Dalton and Boyle', 'Einstein', 'Newton'],
    correctAnswer: 'Bernoulli, Clausius, Maxwell, and Boltzmann',
    explanation: 'These scientists laid the foundation of KMT.'
  },
  {
    id: 'chem-gas-10',
    text: 'According to KMT, the average kinetic energy of gas molecules is directly proportional to:',
    options: ['Pressure', 'Volume', 'Absolute Temperature', 'Molar Mass'],
    correctAnswer: 'Absolute Temperature',
    explanation: 'K.E. = 3/2 kT; it depends only on T.'
  },
  {
    id: 'chem-gas-11',
    text: 'Under which conditions do real gases deviate most from ideal behavior?',
    options: ['High temperature and low pressure', 'Low temperature and high pressure', 'High temperature and high pressure', 'Low temperature and low pressure'],
    correctAnswer: 'Low temperature and high pressure',
    explanation: 'At high P and low T, intermolecular forces and molecular volume become significant.'
  },
  {
    id: 'chem-gas-12',
    text: 'The Van der Waals equation corrects the ideal gas equation for:',
    options: ['Intermolecular forces and molecular volume', 'Temperature only', 'Pressure only', 'Gravity'],
    correctAnswer: 'Intermolecular forces and molecular volume',
    explanation: 'The terms "a" and "b" represent these corrections.'
  },
  {
    id: 'chem-gas-13',
    text: 'In the Van der Waals equation, the constant "a" represents:',
    options: ['Excluded volume', 'Intermolecular attractions', 'Kinetic energy', 'Collision frequency'],
    correctAnswer: 'Intermolecular attractions',
    explanation: '"a" measures the attraction between molecules; "b" measures the volume of molecules.'
  },
  {
    id: 'chem-gas-14',
    text: 'The units of pressure at STP are:',
    options: ['1 atm', '760 torr', '101325 Pa', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'These are all equivalent standard pressure units.'
  },
  {
    id: 'chem-gas-15',
    text: 'The pressure of a gas is 76 cm of Hg. This is equal to:',
    options: ['760 mm of Hg', '1 atm', '760 torr', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Standard atmospheric pressure is 760 mmHg.'
  },
  {
    id: 'chem-gas-16',
    text: 'Deep sea divers use a mixture of oxygen and _____ to avoid the toxic effects of high-pressure nitrogen.',
    options: ['Hydrogen', 'Helium', 'Argon', 'Neon'],
    correctAnswer: 'Helium',
    explanation: 'Helium is less soluble in blood than nitrogen.'
  },
  {
    id: 'chem-gas-17',
    text: 'The value of R in SI units is:',
    options: ['0.0821', '8.314 J K⁻¹ mol⁻¹', '1.987', '0.008314'],
    correctAnswer: '8.314 J K⁻¹ mol⁻¹',
    explanation: 'In SI, Pressure is Pa, Volume is m³. R = 8.314.'
  },
  {
    id: 'chem-gas-18',
    text: 'If the pressure of a gas is doubled and its absolute temperature is halved, the volume will become:',
    options: ['Double', 'Half', 'One-fourth', 'Unchanged'],
    correctAnswer: 'One-fourth',
    explanation: 'V2 = V1 * (P1/P2) * (T2/T1) = V1 * (1/2) * (1/2) = V1/4.'
  },
  {
    id: 'chem-gas-19',
    text: 'The density of an ideal gas is directly proportional to:',
    options: ['Pressure', 'Molar Mass', 'Both A and B', 'Volume'],
    correctAnswer: 'Both A and B',
    explanation: 'PM = dRT => d = PM/RT. Density depends on P and M.'
  },
  {
    id: 'chem-gas-20',
    text: 'Dalton’s Law is NOT applicable to a mixture of:',
    options: ['N2 and O2', 'He and Ne', 'NH3 and HCl', 'H2 and CH4'],
    correctAnswer: 'NH3 and HCl',
    explanation: 'Dalton’s Law applies to non-reacting gases. NH3 and HCl react to form NH4Cl.'
  },
  {
    id: 'chem-gas-21',
    text: 'The process of a gas escaping through a tiny hole one molecule at a time is:',
    options: ['Diffusion', 'Effusion', 'Sublimation', 'Evaporation'],
    correctAnswer: 'Effusion',
    explanation: 'Effusion is leakage through a pinhole.'
  },
  {
    id: 'chem-gas-22',
    text: 'What is the molar mass of a gas if it diffuses 4 times slower than Hydrogen?',
    options: ['8', '16', '32', '64'],
    correctAnswer: '32',
    explanation: 'r_h/r_g = √(M_g/M_h) => 4 = √(M_g/2) => 16 = M_g/2 => M_g = 32.'
  },
  {
    id: 'chem-gas-23',
    text: 'Plasma is the _____ state of matter.',
    options: ['First', 'Second', 'Third', 'Fourth'],
    correctAnswer: 'Fourth',
    explanation: 'Plasma is an ionized gas state found in stars and lightning.'
  },
  {
    id: 'chem-gas-24',
    text: 'Which state of matter has the highest degree of randomness?',
    options: ['Solid', 'Liquid', 'Gas', 'Crystalline'],
    correctAnswer: 'Gas',
    explanation: 'Gases have maximum entropy/randomness due to free molecular motion.'
  },
  {
    id: 'chem-gas-25',
    text: 'The temperature at which a real gas behaves like an ideal gas over a range of pressure is called:',
    options: ['Critical temperature', 'Boyle temperature', 'Inversion temperature', 'Absolute zero'],
    correctAnswer: 'Boyle temperature',
    explanation: 'At this specific T, attractive and repulsive forces balance out.'
  },
  {
    id: 'chem-gas-26',
    text: 'The pressure exerted by gas molecules on the walls of the container is due to:',
    options: ['Intermolecular forces', 'Elastic collisions of molecules with the walls', 'Weight of the gas', 'Electrostatic forces'],
    correctAnswer: 'Elastic collisions of molecules with the walls',
    explanation: 'According to KMT, pressure is the result of frequent impacts.'
  },
  {
    id: 'chem-gas-27',
    text: 'Absolute zero can be reached by:',
    options: ['Using liquid nitrogen', 'Using liquid helium', 'Expanding a gas adiabatically', 'It is theoretically impossible to reach'],
    correctAnswer: 'It is theoretically impossible to reach',
    explanation: 'According to the Third Law of Thermodynamics, absolute zero cannot be reached in a finite number of steps.'
  },
  {
    id: 'chem-gas-28',
    text: 'One dm³ is equal to:',
    options: ['1 liter', '1000 cm³', '10^-3 m³', 'All of above'],
    correctAnswer: 'All of above',
    explanation: '1 dm³ = 1 L = 1000 mL = 1000 cm³.'
  },
  {
    id: 'chem-gas-29',
    text: 'The molar mass of an unknown gas occupying 22.4 dm³ at STP and weighing 44g is:',
    options: ['22', '44', '88', '32'],
    correctAnswer: '44',
    explanation: 'At STP, 22.4 dm³ is the molar volume. If 22.4 dm³ weighs 44g, its molar mass is 44 g/mol.'
  },
  {
    id: 'chem-gas-55',
    text: 'Most of the matter in the universe exists in which state?',
    options: ['Solid', 'Liquid', 'Gas', 'Plasma'],
    correctAnswer: 'Plasma',
    explanation: 'Stars and nebulae are made of plasma.'
  },
  {
    id: 'chem-gas-56',
    text: 'The pressure of a gas is due to:',
    options: ['Molecules hitting the walls of the container', 'Gravity', 'Molecular attractions', 'Expansion'],
    correctAnswer: 'Molecules hitting the walls of the container',
    explanation: 'Pressure is force per unit area from collisions.'
  },
  {
    id: 'chem-gas-57',
    text: 'Which gas is used in the "Linde’s method" for liquefaction of air?',
    options: ['N2', 'O2', 'CO2', 'All of above (Air)'],
    correctAnswer: 'All of above (Air)',
    explanation: 'Linde’s method uses Joule-Thomson effect to liquefy air.'
  },
  {
    id: 'chem-gas-58',
    text: 'The density of a gas is inversely proportional to:',
    options: ['Pressure', 'Molar mass', 'Absolute Temperature', 'Moles'],
    correctAnswer: 'Absolute Temperature',
    explanation: 'd = PM / RT.'
  },
  {
    id: 'chem-gas-59',
    text: 'One atmosphere (1 atm) is equal to how many torrs?',
    options: ['76', '760', '101325', '14.7'],
    correctAnswer: '760',
    explanation: '1 atm = 760 mmHg = 760 torr.'
  },
  {
    id: 'chem-gas-60',
    text: 'Which gas deviates most from ideal behavior at STP?',
    options: ['He', 'H2', 'CH4', 'SO2'],
    correctAnswer: 'SO2',
    explanation: 'SO2 is polar and has larger molecules, so it has higher IMFs.'
  },
  {
    id: 'chem-gas-61',
    text: 'The root mean square velocity (Vrms) of gas molecules is:',
    options: ['√(3RT/M)', '√(2RT/M)', '√(8RT/πM)', 'RT/M'],
    correctAnswer: '√(3RT/M)',
    explanation: 'Standard formula for rms speed.'
  },
  {
    id: 'chem-gas-62',
    text: 'Avogadro’s Law states that equal volumes of all gases at the same T and P contain equal:',
    options: ['Mass', 'Density', 'Number of molecules', 'Number of atoms'],
    correctAnswer: 'Number of molecules',
    explanation: 'V ∝ n.'
  },
  {
    id: 'chem-gas-63',
    text: 'What happens to the pressure of a gas if its volume is halved at constant T?',
    options: ['Halved', 'Doubled', 'Stay same', 'Zero'],
    correctAnswer: 'Doubled',
    explanation: 'Boyle’s Law: P and V are inversely proportional.'
  },
  {
    id: 'chem-gas-64',
    text: 'The units of Van der Waals constant "b" are:',
    options: ['atm L² mol⁻²', 'L mol⁻¹', 'J mol⁻¹ K⁻¹', 'Dimensionless'],
    correctAnswer: 'L mol⁻¹',
    explanation: 'b has the units of molar volume.'
  },
  {
    id: 'chem-gas-65',
    text: 'The units of Van der Waals constant "a" are:',
    options: ['atm L² mol⁻²', 'L mol⁻¹', 'atm L mol⁻²', 'None'],
    correctAnswer: 'atm L² mol⁻²',
    explanation: 'Derived from the pressure correction term.'
  },
  {
    id: 'chem-gas-66',
    text: 'Which gas law is used to calculate the molar mass of a volatile liquid?',
    options: ['Boyle’s Law', 'Ideal Gas Law', 'Graham’s Law', 'Dalton’s Law'],
    correctAnswer: 'Ideal Gas Law',
    explanation: 'PV = (m/M)RT => M = mRT/PV (Dumas method).'
  },
  {
    id: 'chem-gas-67',
    text: 'According to KMT, the actual volume of gas molecules is _____ compared to the total volume of gas.',
    options: ['Significant', 'Negligible', 'Equal', 'Infinite'],
    correctAnswer: 'Negligible',
    explanation: 'This is an assumption for ideal gases.'
  },
  {
    id: 'chem-gas-68',
    text: 'Pressure of 101.325 kPa is equal to:',
    options: ['1 atm', '760 torr', '1.01325 bar', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Standard pressure units.'
  },
  {
    id: 'chem-gas-69',
    text: 'Which gas is used in artificial respiration for deep-sea divers?',
    options: ['Pure Oxygen', 'Helium-Oxygen mixture', 'Nitrogen-Oxygen mixture', 'Argon'],
    correctAnswer: 'Helium-Oxygen mixture',
    explanation: 'Helium is less soluble in blood than nitrogen, preventing "the bends".'
  },
  {
    id: 'chem-gas-70',
    text: 'The constant R is called the:',
    options: ['Universal gas constant', 'Ideal gas constant', 'Both A and B', 'Specific gas constant'],
    correctAnswer: 'Both A and B',
    explanation: 'It is a universal constant for all ideal gases.'
  },
  {
    id: 'chem-gas-71',
    text: 'The absolute temperature of a gas is a measure of its:',
    options: ['Potential energy', 'Average kinetic energy', 'Total heat', 'Pressure'],
    correctAnswer: 'Average kinetic energy',
    explanation: 'T ∝ K.E. avg.'
  },
  {
    id: 'chem-gas-72',
    text: 'Which property is unique to gases among the states of matter?',
    options: ['High compressibility', 'Indefinite shape', 'Ability to flow', 'Diffusion'],
    correctAnswer: 'High compressibility',
    explanation: 'Gases have large empty spaces between molecules.'
  },
  {
    id: 'chem-gas-73',
    text: 'Graham’s law of diffusion is used to separate:',
    options: ['Isotopes of Uranium', 'Oxygen from Nitrogen', 'Noble gases', 'All of above'],
    correctAnswer: 'Isotopes of Uranium',
    explanation: '235-UF6 and 238-UF6 are separated by gaseous diffusion.'
  },
  {
    id: 'chem-gas-74',
    text: 'The pressure of a gas _____ if temperature increases at constant volume.',
    options: ['Increases', 'Decreases', 'Stay same', 'Becomes zero'],
    correctAnswer: 'Increases',
    explanation: 'Gay-Lussac’s Law: P ∝ T.'
  },
  {
    id: 'chem-gas-75',
    text: 'Real gases behave ideally at:',
    options: ['High P, Low T', 'Low P, High T', 'Low P, Low T', 'High P, High T'],
    correctAnswer: 'Low P, High T',
    explanation: 'Molecules are far apart and moving fast, minimizing IMFs and excluded volume.'
  },
  {
    id: 'chem-gas-76',
    text: 'The fraction of total pressure exerted by a gas is its mole fraction. This is:',
    options: ['Boyle’s Law', 'Dalton’s Law', 'Raoult’s Law', 'Henry’s Law'],
    correctAnswer: 'Dalton’s Law',
    explanation: 'Pi = Xi * Pt.'
  },
  {
    id: 'chem-gas-77',
    text: 'The mean free path is the average distance traveled by a molecule between:',
    options: ['Collisions', 'Walls', 'Orbits', 'Seconds'],
    correctAnswer: 'Collisions',
    explanation: 'Molecules travel in straight lines between collisions.'
  },
  {
    id: 'chem-gas-78',
    text: 'In the equation d = PM/RT, if pressure is doubled and absolute temperature is doubled, density will:',
    options: ['Double', 'Halve', 'Stay same', 'Quadruple'],
    correctAnswer: 'Stay same',
    explanation: 'Changes cancel each other out.'
  },
  {
    id: 'chem-gas-79',
    text: 'Standard molar volume of a gas at 273.15 K and 1 bar is:',
    options: ['22.414 L', '22.711 L', '24.4 L', '22.0 L'],
    correctAnswer: '22.711 L',
    explanation: 'Modern IUPAC standard uses 1 bar (100 kPa).'
  },
  {
    id: 'chem-gas-80',
    text: 'The manometric method is used to measure:',
    options: ['Vapor pressure', 'Atmospheric pressure', 'Gas pressure in a container', 'Both A and C'],
    correctAnswer: 'Both A and C',
    explanation: 'Manometers measure pressure differences.'
  },
  {
    id: 'chem-gas-81',
    text: 'A barometer is used to measure:',
    options: ['Gas pressure', 'Atmospheric pressure', 'Blood pressure', 'Vapor pressure'],
    correctAnswer: 'Atmospheric pressure',
    explanation: 'Invented by Torricelli.'
  },
  {
    id: 'chem-gas-82',
    text: 'Which is NOT a postulate of KMT?',
    options: ['Gases consist of large number of molecules', 'Molecules are in random motion', 'There are strong attractions between molecules', 'Collisions are elastic'],
    correctAnswer: 'There are strong attractions between molecules',
    explanation: 'KMT assumes zero attractions for ideal gases.'
  },
  {
    id: 'chem-gas-83',
    text: 'Pressure exerted by a gas is _____ in all directions.',
    options: ['Different', 'Same', 'Zero', 'Maximum'],
    correctAnswer: 'Same',
    explanation: 'Pascal’s principle applies to fluids (gases and liquids).'
  },
  {
    id: 'chem-gas-84',
    text: 'The ratio of the rate of diffusion of H2 to O2 is:',
    options: ['1:4', '4:1', '1:16', '16:1'],
    correctAnswer: '4:1',
    explanation: '√(32/2) = √16 = 4.'
  },
  {
    id: 'chem-gas-85',
    text: 'Diffusion is the process of _____ mixing of gases.',
    options: ['Spontaneous', 'Forced', 'Chemical', 'Slow'],
    correctAnswer: 'Spontaneous',
    explanation: 'Gases mix due to random molecular motion.'
  },
  {
    id: 'chem-gas-86',
    text: 'A gas occupies 100 cm³ at 1 atm. What volume will it occupy at 2 atm at same T?',
    options: ['200 cm³', '50 cm³', '100 cm³', '25 cm³'],
    correctAnswer: '50 cm³',
    explanation: 'P doubled, V halved.'
  },
  {
    id: 'chem-gas-87',
    text: 'The boiling point of a gas is _____ than its critical temperature.',
    options: ['Higher', 'Lower', 'Same', 'Negative'],
    correctAnswer: 'Lower',
    explanation: 'Boiling occurs at 1 atm; critical point is at much higher P and T.'
  },
  {
    id: 'chem-gas-88',
    text: 'The gas constant R has dimensions of:',
    options: ['Energy / mol K', 'Pressure / mol K', 'Volume / mol K', 'Force / mol K'],
    correctAnswer: 'Energy / mol K',
    explanation: 'PV has dimensions of Work/Energy.'
  },
  {
    id: 'chem-gas-89',
    text: 'Which gas is the closest to being "ideal"?',
    options: ['He', 'H2', 'O2', 'N2'],
    correctAnswer: 'He',
    explanation: 'Helium has the smallest molecules and weakest IMFs.'
  },
  {
    id: 'chem-gas-90',
    text: 'The units of partial pressure are same as:',
    options: ['Total pressure', 'Torr', 'Pa', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'It is still a pressure measurement.'
  },
  {
    id: 'chem-gas-91',
    text: 'Molecular motion stops at:',
    options: ['0°C', '-273.15°C', '0 K', 'Both B and C'],
    correctAnswer: 'Both B and C',
    explanation: 'At absolute zero, theoretical kinetic energy is zero.'
  },
  {
    id: 'chem-gas-92',
    text: 'The molar volume of a gas at STP depends on:',
    options: ['Nature of gas', 'Molar mass', 'Pressure and Temperature', 'Amount of gas'],
    correctAnswer: 'Pressure and Temperature',
    explanation: 'It is same for all ideal gases regardless of nature.'
  },
  {
    id: 'chem-gas-93',
    text: 'Which is a property of Plasma?',
    options: ['Conductor of electricity', 'Reacts to magnetic fields', 'Has glow/light', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'Plasma is highly ionized and energetic.'
  },
  {
    id: 'chem-gas-94',
    text: 'Density of Neon (Z=10) at STP is approximately:',
    options: ['0.9 g/L', '1.2 g/L', '2.0 g/L', '0.4 g/L'],
    correctAnswer: '0.9 g/L',
    explanation: 'M/22.4 = 20/22.4 ≈ 0.89 g/L.'
  },
  {
    id: 'chem-gas-95',
    text: 'According to KMT, the pressure of a gas is proportional to the _____ of molecules.',
    options: ['Number', 'Mass', 'Speed squared', 'All of above'],
    correctAnswer: 'All of above',
    explanation: 'P = 1/3 (mNc²/V).'
  },
  {
    id: 'chem-gas-96',
    text: 'Most common place to find plasma naturally on Earth is:',
    options: ['Atmosphere', 'Lightning', 'Ocean', 'Forests'],
    correctAnswer: 'Lightning',
    explanation: 'Lightning bolts are plasma channels.'
  },
  {
    id: 'chem-gas-97',
    text: 'The value of R in cal/mol K is:',
    options: ['1.987', '0.0821', '8.314', '62.4'],
    correctAnswer: '1.987',
    explanation: 'Standard value in calories.'
  },
  {
    id: 'chem-gas-98',
    text: 'If we use DM³ and ATM, the value of R is:',
    options: ['0.0821', '8.314', '1.987', '0.0082'],
    correctAnswer: '0.0821',
    explanation: 'Standard value for these units.'
  },
  {
    id: 'chem-gas-99',
    text: 'A gas that is easily liquefied has _____ intermolecular forces.',
    options: ['Strong', 'Weak', 'Zero', 'Repulsive'],
    correctAnswer: 'Strong',
    explanation: 'Attractions help pull molecules together into a liquid.'
  },
  {
    id: 'chem-gas-100',
    text: 'The study of the properties of gases led to the development of the:',
    options: ['Atomic Theory', 'Kinetic Molecular Theory', 'Quantum Mechanics', 'Periodic Table'],
    correctAnswer: 'Kinetic Molecular Theory',
    explanation: 'KMT provides a microscopic explanation for macroscopic gas behavior.'
  }
];
