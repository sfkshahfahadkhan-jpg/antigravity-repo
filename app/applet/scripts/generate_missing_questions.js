const fs = require('fs');

const chemistry = [
  { subject: 'Chemistry', text: 'Which of the following molecules has a trigonal planar geometry?', options: ['A. H2O', 'B. CO2', 'C. BF3', 'D. NH3'], correctAnswer: 'C. BF3', explanation: 'Boron trifluoride has three bonding pairs and no lone pairs on the central atom, resulting in a trigonal planar geometry.' },
  { subject: 'Chemistry', text: 'What is the standard enthalpy of formation of O2(g) at 298 K?', options: ['A. 0 kJ/mol', 'B. 100 kJ/mol', 'C. -100 kJ/mol', 'D. 10 kJ/mol'], correctAnswer: 'A. 0 kJ/mol', explanation: 'By definition, the standard enthalpy of formation for an element in its most stable form under standard conditions is zero.' },
  { subject: 'Chemistry', text: 'Which of the following is a strong electrolyte in aqueous solution?', options: ['A. Acetic acid', 'B. Ammonia', 'C. Sodium chloride', 'D. Ethanol'], correctAnswer: 'C. Sodium chloride', explanation: 'Sodium chloride completely dissociates into ions in water, making it a strong electrolyte.' },
  { subject: 'Chemistry', text: 'The half-life of a radioactive isotope is 5 years. What fraction of the original sample will remain after 15 years?', options: ['A. 1/2', 'B. 1/4', 'C. 1/8', 'D. 1/16'], correctAnswer: 'C. 1/8', explanation: '15 years is exactly 3 half-lives. The remaining fraction is (1/2)^3 = 1/8.' }
];

const physics = [
  { subject: 'Physics', text: 'A 2kg mass is dropped from a height of 5 meters. What is its kinetic energy just before striking the ground? (Use g = 10 m/s²)', options: ['A. 10 J', 'B. 50 J', 'C. 100 J', 'D. 200 J'], correctAnswer: 'C. 100 J', explanation: 'All potential energy is converted to kinetic energy. PE = mgh = 2 kg * 10 m/s² * 5 m = 100 J.' }
];

const sciReasoning = [];
for (let i = 1; i <= 25; i++) {
  const conc = 10 + i * 2;
  sciReasoning.push({
    subject: 'Science Reasoning',
    text: `A biologist conducts an experiment observing enzyme activity. At temperature ${20 + i}°C, the reaction rate was measured at ${conc} mmol/s. If the trend is strictly linear within this range, what is the best description of the relationship?`,
    options: [
      `A. The rate decreases by exactly ${i} mmol/s per degree.`,
      `B. The reaction rate is independent of temperature.`,
      `C. The reaction rate increases linearly with temperature within the studied range.`,
      `D. The enzyme denatures completely above 20°C.`
    ],
    correctAnswer: `C. The reaction rate increases linearly with temperature within the studied range.`,
    explanation: `Because the measured rate increases progressively to ${conc} mmol/s as temperature rises over this specific interval, the directly proportional data supports a linear increase prior to any hypothetical denaturation.`
  });
}

const mathReasoning = [];
for (let i = 1; i <= 22; i++) {
  const speed = 40 + i * 5;
  const distance = speed * 3;
  mathReasoning.push({
    subject: 'Mathematics Reasoning',
    text: `A train travels a distance of ${distance} km at a uniform speed of ${speed} km/hr. If the speed were increased by 10 km/hr, how many hours would the journey take?`,
    options: [
      `A. ${(distance / (speed + 10)).toFixed(2)} hours`,
      `B. 3 hours`,
      `C. ${(distance / (speed - 10)).toFixed(2)} hours`,
      `D. 4 hours`
    ],
    correctAnswer: `A. ${(distance / (speed + 10)).toFixed(2)} hours`,
    explanation: `Original time = ${distance}/${speed} = 3 hours. New speed = ${speed + 10} km/hr. New time = ${distance}/(${speed + 10}) = ${(distance / (speed + 10)).toFixed(2)} hours.`
  });
}

fs.writeFileSync('missing_q.json', JSON.stringify([...chemistry, ...physics, ...sciReasoning, ...mathReasoning], null, 2));
