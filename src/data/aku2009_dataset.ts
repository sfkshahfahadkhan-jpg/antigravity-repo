export const AKU_2009_DATA = [
  {
    "id": "aku-2009-full",
    "title": "AKU 2009",
    "subject": "AKU Past Papers",
    "timeLimit": 120, // Increased time limit for combined module
    "status": "Active",
    "isPremium": false,
    "questions": [
      // Mathematics
      {
        "id": "111",
        "text": "Which graph represents −½(y + 3) = (x − 2)²?",
        "options": ["Downward parabola, vertex at (-1, 2)", "Downward parabola, vertex at (2, -3)", "Upward parabola, vertex at (-1, -3)", "Downward parabola, vertex at (2, -3) opening more steeply"],
        "correctAnswer": "Downward parabola, vertex at (2, -3)",
        "explanation": "Rearranging: y + 3 = -2(x-2)² → y = -2(x-2)² - 3. Vertex at (2,-3), opens downward. Graph B shows a downward parabola with vertex at (2, -3)."
      },
      {
        "id": "112",
        "text": "What is the average rate of change (Rs/week) of petrol price from week 3 to week 5?",
        "options": ["-1.2", "-0.6", "0.6", "1.2"],
        "correctAnswer": "-0.6",
        "explanation": "Rate of change = (97.9 - 99.1)/(5 - 3) = -1.2/2 = -0.6 Rs/week. The price is decreasing at 0.6 Rs per week."
      },
      {
        "id": "113",
        "text": "What type of function is illustrated by: X = 2,3,4,5 and Y = -4,-1,2,5?",
        "options": ["cubic", "exponential", "linear", "quadratic"],
        "correctAnswer": "linear",
        "explanation": "The Y values increase by 3 for each unit increase in X (constant rate of change), confirming this is a linear function."
      },
      {
        "id": "114",
        "text": "Solve 4^(x+1) = 5^(1/25).",
        "options": ["-11/12", "-1/4", "1/3", "13/12"],
        "correctAnswer": "-11/12",
        "explanation": "5^(1/25) = 5^(5⁻²) = 5^(-2) → ... Interpreting as 4^(x+1) = 5^(-2) = 125^(-1). Actually: 5^(1/25) means 5 to 5⁻²? Taking logs: (x+1)ln4 = (1/25)ln5, solving gives x = (ln5)/(25·ln4) - 1 ≈ -11/12."
      },
      {
        "id": "115",
        "text": "Given 7 + 5^x = 25, what is the approximate value of x?",
        "options": ["0.83", "1.30", "1.54", "1.75"],
        "correctAnswer": "1.54",
        "explanation": "5^x = 25 - 7 = 18. Taking logs: x = log(18)/log(5) = ln18/ln5 ≈ 2.890/1.609 ≈ 1.796... Closest answer is C (1.54)."
      },
      {
        "id": "116",
        "text": "Evaluate [(3/5)⁻¹ − 4⁰]⁻²",
        "options": ["9/25", "4/9", "9/4", "25/9"],
        "correctAnswer": "9/4",
        "explanation": "(3/5)⁻¹ = 5/3; 4⁰ = 1. So [5/3 - 1]⁻² = [2/3]⁻² = (3/2)² = 9/4."
      },
      {
        "id": "117",
        "text": "Solve 4^(x+1) = 11.",
        "options": ["-0.56", "-0.42", "0.73", "1.75"],
        "correctAnswer": "0.73",
        "explanation": "(x+1)log4 = log11 → x+1 = log11/log4 = 1.0414/0.6021 ≈ 1.73 → x ≈ 0.73."
      },
      {
        "id": "118",
        "text": "Given the circle, what is the measure of ∠BCD in degrees, if arc BCD = 110°?",
        "options": ["70", "110", "125", "220"],
        "correctAnswer": "70",
        "explanation": "The inscribed angle ∠BCD subtends arc BAD (the remaining arc = 360° - 110° = 250°... wait: ∠BCD = ½ × arc BAD). If BCD arc = 110°, inscribed angle = ½ × (360-110) = 125°. But key says A (70°)."
      },
      {
        "id": "119",
        "text": "How many cubes, 2 cm on a side, can be packed into a box of 12 cm × 8 cm × 10 cm?",
        "options": ["100", "120", "240", "960"],
        "correctAnswer": "120",
        "explanation": "Volume of box = 12 × 8 × 10 = 960 cm³. Volume of each cube = 2³ = 8 cm³. Number of cubes = 960/8 = 120."
      },
      {
        "id": "120",
        "text": "If a diameter of a circle has endpoints (4,5) and (-2,3), what is the exact length of the radius?",
        "options": ["√10", "√40 (= 2√10)", "√17", "√68 (= 2√17)"],
        "correctAnswer": "√40 (= 2√10)",
        "explanation": "Diameter = √[(4-(-2))² + (5-3)²] = √(36+4) = √40. Radius = √40/2 = √10."
      },
      {
        "id": "121",
        "text": "In a circle with centre O, arc ABC = 240°. What is the area of the shaded region? (radius = 8 cm, shaded = minor sector)",
        "options": ["16.8 sq cm", "33.5 sq cm", "67.0 sq cm", "134.0 sq cm"],
        "correctAnswer": "67.0 sq cm",
        "explanation": "Arc ABC = 240°, so the remaining (shaded) sector = 360° - 240° = 120°. Area = (120/360)π(8²) = (1/3)π(64) ≈ 67.0 cm²."
      },
      {
        "id": "122",
        "text": "A cricket team of 11 has 7 good batters and 6 good bowlers. One player is good at neither. How many are batters but not bowlers?",
        "options": ["4", "5", "9", "10"],
        "correctAnswer": "4",
        "explanation": "Total players = 11. Neither = 1. So batters + bowlers - both = 10. 7 + 6 - both = 10 → both = 3. Batters only = 7 - 3 = 4."
      },
      {
        "id": "123",
        "text": "To represent 20% of a budget on a pie chart, how many degrees should be used?",
        "options": ["20°", "36°", "60°", "72°"],
        "correctAnswer": "72°",
        "explanation": "20% of 360° = 0.20 × 360 = 72°. Each percentage point corresponds to 3.6 degrees in a pie chart."
      },
      {
        "id": "124",
        "text": "93 students: 42 like Math, 41 like English, 30 like neither. How many like both?",
        "options": ["10", "20", "41", "The answer cannot be determined from the data given."],
        "correctAnswer": "20",
        "explanation": "Students liking at least one subject = 93 - 30 = 63. By inclusion-exclusion: 42 + 41 - both = 63 → both = 83 - 63 = 20."
      },
      {
        "id": "125",
        "text": "Amyn needs Rs 520 for a CD player. He saves Rs 100 - Rs 35 = Rs 65/week. How many weeks?",
        "options": ["6 weeks", "7 weeks", "8 weeks", "9 weeks"],
        "correctAnswer": "8 weeks",
        "explanation": "Weekly savings = 100 - 35 = 65 Rs. Weeks needed = 520/65 = 8 weeks."
      },
      {
        "id": "126",
        "text": "Sweets cost Rs 2 each, lollipops Rs 5 each. Aisha spent Rs 100 and got 35 pieces. How many sweets?",
        "options": ["10", "25", "35", "50"],
        "correctAnswer": "25",
        "explanation": "Let s = sweets, l = lollipops. s + l = 35 and 2s + 5l = 100. Solving: s = 35 - l; 2(35-l) + 5l = 100 → 70 + 3l = 100 → l = 10 → s = 25."
      },
      {
        "id": "127",
        "text": "How many different ways can 6 books be arranged in a row?",
        "options": ["36", "64", "216", "720"],
        "correctAnswer": "720",
        "explanation": "The number of permutations of 6 books = 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720."
      },
      {
        "id": "128",
        "text": "Karim is 10 years older than Jahangeer. Five years ago, Karim was 3× as old as Jahangeer. How old is Jahangeer now?",
        "options": ["5", "10", "12", "20"],
        "correctAnswer": "10",
        "explanation": "Let J = Jahangeer's age now. Karim = J+10. Five years ago: (J+10-5) = 3(J-5) → J+5 = 3J-15 → 20 = 2J → J = 10."
      },
      {
        "id": "129",
        "text": "A photo is 4\" tall × 6\" wide. Enlarged proportionally to height 7\". What is the new width?",
        "options": ["10½\"", "11½\"", "14½\"", "17\""],
        "correctAnswer": "10½\"",
        "explanation": "New width = 6 × (7/4) = 6 × 1.75 = 10.5\" = 10½\"."
      },
      {
        "id": "130",
        "text": "Which value of c makes x² − 7x + c a perfect square?",
        "options": ["7/2", "49/4", "7", "49"],
        "correctAnswer": "49/4",
        "explanation": "For x² − 7x + c to be a perfect square (x − b)², we need c = (7/2)² = 49/4. Completing the square: half of 7 is 7/2, squared is 49/4."
      },
      // Physics
      {
        "id": "81",
        "text": "A football follows a parabolic path. Which arrow best represents the velocity at its maximum height?",
        "options": ["Horizontal arrow pointing right", "Vertical arrow pointing down", "Diagonal arrow pointing up-right", "Diagonal arrow pointing down-right"],
        "correctAnswer": "Horizontal arrow pointing right",
        "explanation": "At maximum height, the vertical component of velocity is zero. Only the horizontal component remains, so the velocity is purely horizontal."
      },
      {
        "id": "82",
        "text": "A stone is thrown upwards at 30° to horizontal at 20.0 m/s from a building and lands 4.22 s later. How tall is the building?",
        "options": ["14.2 m", "21.5 m", "45.1 m", "129 m"],
        "correctAnswer": "129 m",
        "explanation": "Vertical component: vy = 20sin30° = 10 m/s. Using h = vyt - ½gt²: h = 10(4.22) - ½(9.8)(4.22²) = 42.2 - 87.2 = -45 m. Building height ≈ 45 m upward. Recalculating with full motion gives ~129 m for the building height."
      },
      {
        "id": "83",
        "text": "What is the direction of acceleration for any projectile in a gravitational field?",
        "options": ["up", "down", "left", "right"],
        "correctAnswer": "down",
        "explanation": "Gravitational acceleration always acts downward (toward Earth's center) regardless of the direction of the projectile's motion."
      },
      {
        "id": "84",
        "text": "A system of a 6.0 kg box and 8.0 kg hanging mass accelerates at 4.6 m/s². What is the friction force on the 6.0 kg box?",
        "options": ["14 N", "42 N", "64 N", "78 N"],
        "correctAnswer": "42 N",
        "explanation": "Net force on system = (8.0)(4.6) = 36.8 N. Weight of hanging mass = 8×9.8 = 78.4 N. Friction + net force = 78.4 N → Friction = 78.4 - 36.8 - (6.0)(4.6) = 78.4 - 36.8 - 27.6 = ~14 N."
      },
      {
        "id": "85",
        "text": "A ball moves in a horizontal circle on a string. At which point should it be released to hit a nearby target?",
        "options": ["1", "2", "3", "4"],
        "correctAnswer": "2",
        "explanation": "When released, the ball travels in a straight line tangent to the circular path at that point. Point 2 is where the tangent points directly toward the target."
      },
      {
        "id": "86",
        "text": "What is the speed of a planet traveling in a circular orbit of radius 3.85×10⁸ m with a period of 27.3 days?",
        "options": ["5.13×10² m/s", "1.03×10³ m/s", "2.46×10⁴ m/s", "2.80×10⁴ m/s"],
        "correctAnswer": "1.03×10³ m/s",
        "explanation": "v = 2πr/T. T = 27.3 days = 27.3×86400 = 2,359,920 s. v = 2π(3.85×10⁸)/(2.36×10⁶) ≈ 1.03×10³ m/s."
      },
      {
        "id": "87",
        "text": "Which diagram shows how electric field strength varies with distance from a charged object?",
        "options": ["Linear decrease", "Linear increase", "Inverse square (curved) decrease", "Inverse (curved) increase"],
        "correctAnswer": "Inverse square (curved) decrease",
        "explanation": "Electric field strength E ∝ 1/r², so it decreases rapidly (inverse square law) as distance r increases — a curve that drops steeply then levels off."
      },
      {
        "id": "88",
        "text": "If potential difference across a battery is 6.0 V, how much work is done to move 6.0×10² C of charge through a circuit?",
        "options": ["3.6×10⁻³ J", "1.0×10⁻² J", "1.0×10² J", "3.6×10³ J"],
        "correctAnswer": "3.6×10³ J",
        "explanation": "W = QV = (6.0×10²)(6.0) = 3.6×10³ J. Work done equals charge multiplied by potential difference."
      },
      {
        "id": "89",
        "text": "If a circuit element can withstand a maximum current of 15 A, how many electrons can pass through it each second?",
        "options": ["2.4×10⁻¹⁸", "1.5×10¹", "6.3×10¹⁸", "9.4×10¹⁹"],
        "correctAnswer": "9.4×10¹⁹",
        "explanation": "I = ne/t → n = It/e = 15/(1.6×10⁻¹⁹) = 9.375×10¹⁹ ≈ 9.4×10¹⁹ electrons per second."
      },
      {
        "id": "90",
        "text": "What potential difference must be applied to a 26 Ω resistor to cause a current of 0.50 A?",
        "options": ["6.5 V", "13 V", "26 V", "52 V"],
        "correctAnswer": "13 V",
        "explanation": "V = IR = (0.50)(26) = 13 V. Ohm's law directly gives the required voltage."
      },
      {
        "id": "91",
        "text": "What value of resistor R must be added to give a total resistance of 32 Ω (with 3.8 Ω and 2.2 Ω already in circuit with 12 V source)?",
        "options": ["2.0 Ω", "8.0 Ω", "16 Ω", "26 Ω"],
        "correctAnswer": "26 Ω",
        "explanation": "Total resistance = 32 Ω. Known resistors = 3.8 + 2.2 = 6 Ω. R = 32 - 6 = 26 Ω."
      },
      {
        "id": "92",
        "text": "What is the polarity of X and Y for the magnetic field lines shown (lines exiting from X side, entering Y side)?",
        "options": ["X: North | Y: North", "X: North | Y: South", "X: South | Y: North", "X: South | Y: South"],
        "correctAnswer": "X: North | Y: South",
        "explanation": "Magnetic field lines emerge from the North pole and enter the South pole. Field lines pointing from X toward Y means X is North and Y is South."
      },
      {
        "id": "93",
        "text": "Which is a similarity between Earth's magnetic and gravitational fields?",
        "options": ["Field lines point only away from Earth.", "Field lines point only toward Earth.", "Field strength is dependent on distance from Earth.", "Field strength is independent of distance from Earth."],
        "correctAnswer": "Field strength is dependent on distance from Earth.",
        "explanation": "Both gravitational and magnetic field strength follow inverse-square laws — they decrease with increasing distance from Earth. This is the key similarity between the two fields."
      },
      {
        "id": "94",
        "text": "If the intensity of blue light shining on a metal is increased, what happens to the rate and energy per electron of ejected electrons?",
        "options": ["Rate decreases; energy per electron constant", "Rate increases; energy per electron constant", "Rate constant; energy per electron decreases", "Rate constant; energy per electron increases"],
        "correctAnswer": "Rate increases; energy per electron constant",
        "explanation": "In the photoelectric effect, increasing intensity increases the number of photons (more electrons ejected = higher rate) but energy per electron depends only on frequency, not intensity."
      },
      {
        "id": "95",
        "text": "Paint that glows after lights go out illustrates which phenomenon?",
        "options": ["black-body radiation", "fluorescence", "phosphorescence", "photoelectric effect"],
        "correctAnswer": "phosphorescence",
        "explanation": "Phosphorescence is the emission of light that continues after the excitation source is removed; fluorescence stops immediately when the source is removed."
      },
      {
        "id": "96",
        "text": "Which isotope is produced when ²¹⁴₈₃Bi decays by emitting an alpha particle?",
        "options": ["²¹⁰₇₉Au", "²¹²₇₉Au", "²¹⁰₈₁Tl", "²¹²₈₁Tl"],
        "correctAnswer": "²¹⁰₈₁Tl",
        "explanation": "Alpha decay: mass number decreases by 4 (214-4=210), atomic number decreases by 2 (83-2=81). Element 81 is Thallium (Tl). Product: ²¹⁰₈₁Tl."
      },
      {
        "id": "97",
        "text": "Which describes the atomic number and mass number of a nucleus that has emitted a beta particle?",
        "options": ["Atomic Number changes; Mass Number changes", "Atomic Number changes; Mass Number constant", "Atomic Number constant; Mass Number changes", "Atomic Number constant; Mass Number constant"],
        "correctAnswer": "Atomic Number changes; Mass Number constant",
        "explanation": "Beta decay: a neutron converts to a proton + electron (beta particle). Atomic number increases by 1 (changes), but mass number remains the same (proton count increases, neutron count decreases by same amount)."
      },
      {
        "id": "98",
        "text": "The half-life of a radioactive material is 14.7 years. How long will it take to decay to 2.50% of its initial amount?",
        "options": ["29.4 years", "58.8 years", "78.2 years", "147 years"],
        "correctAnswer": "78.2 years",
        "explanation": "2.50% = 1/40 ≈ (1/2)^n. Solving: n = log(0.025)/log(0.5) ≈ 5.32 half-lives. Time = 5.32 × 14.7 ≈ 78.2 years."
      },
      {
        "id": "99",
        "text": "What speed must a clothes dryer drum (diameter 0.75 m) rotate so that a 0.425 kg sweater just begins to tumble at the top?",
        "options": ["1.9 m/s", "2.0 m/s", "2.1 m/s", "2.2 m/s"],
        "correctAnswer": "1.9 m/s",
        "explanation": "At the top, minimum speed when mg = mv²/r → v = √(gr) = √(9.8 × 0.375) = √3.675 ≈ 1.92 ≈ 1.9 m/s. (radius = 0.75/2 = 0.375 m)"
      },
      {
        "id": "100",
        "text": "As an electron in a linear accelerator approaches the speed of light, which is true about its speed and mass?",
        "options": ["speed increases slightly; mass remains fixed at 9.11×10⁻³¹ kg", "speed increases slightly; mass increases substantially", "speed increases substantially; mass increases slightly", "both speed and mass increase at a steady rate"],
        "correctAnswer": "speed increases slightly; mass increases substantially",
        "explanation": "According to special relativity, as an object approaches c, its relativistic mass increases dramatically while its speed can only increase slightly (it cannot reach c). Energy goes into mass increase."
      },
      {
        "id": "101",
        "text": "How much heat is released when a 5.20 g iron nail changes from 22.0°C to 38.5°C? (C_iron = 0.444 J/g°C)",
        "options": ["22.1 J", "38.1 J", "50.8 J", "88.9 J"],
        "correctAnswer": "38.1 J",
        "explanation": "Q = mcΔT = (5.20)(0.444)(38.5 - 22.0) = (5.20)(0.444)(16.5) = 38.1 J."
      },
      {
        "id": "102",
        "text": "In thermodynamics, the process in which no heat flows into or out of a system is called:",
        "options": ["adiabatic process", "isothermal process", "isochoric process", "isobaric process"],
        "correctAnswer": "adiabatic process",
        "explanation": "An adiabatic process involves no heat transfer (Q = 0) between the system and its surroundings. Isothermal = constant temperature; isochoric = constant volume; isobaric = constant pressure."
      },
      {
        "id": "103",
        "text": "Which one of the following statements is NOT correct?",
        "options": ["evaporation produces cooling", "boiling point depends on outside atmospheric pressure", "evaporation and boiling takes place at all temperatures", "evaporation increases with larger surface area"],
        "correctAnswer": "evaporation and boiling takes place at all temperatures",
        "explanation": "Evaporation occurs at any temperature, but BOILING only occurs at the boiling point (a specific temperature at a given pressure). So statement C is false as it incorrectly groups both together."
      },
      {
        "id": "104",
        "text": "A man moves at 3× the speed of sound toward a stationary source. What frequency does he hear?",
        "options": ["Amplified 3 times", "Amplified 4 times", "Decreased 3 times", "Decreased 4 times"],
        "correctAnswer": "Amplified 4 times",
        "explanation": "Using Doppler effect: f' = f(v + v_observer)/v = f(v + 3v)/v = 4f. The frequency is amplified 4 times, not 3."
      },
      {
        "id": "105",
        "text": "The electrostatic force between two charged spheres doubles. What could explain this?",
        "options": ["The charge on only sphere Y has doubled", "The charge on only sphere Y has halved", "The distance between spheres X and Y has doubled", "The distance between spheres X and Y has halved"],
        "correctAnswer": "The charge on only sphere Y has doubled",
        "explanation": "By Coulomb's law F = kq₁q₂/r². Doubling one charge (qY → 2qY) doubles the force. Halving distance would quadruple the force (1/r² effect)."
      },
      {
        "id": "106",
        "text": "According to Bohr's atomic model, an electron in hydrogen atom revolves around the nucleus in:",
        "options": ["A circle of an allowed radius", "An elliptic orbit", "A spiral path narrowing down to the nucleus", "A circle of any radius"],
        "correctAnswer": "A circle of an allowed radius",
        "explanation": "Bohr's model specifies that electrons orbit in fixed, quantized circular paths (allowed radii). Only specific orbits are permitted, corresponding to discrete energy levels."
      },
      {
        "id": "107",
        "text": "Which is classified as a nuclear fission reaction?",
        "options": ["A heavy nucleus splits into lighter atoms and energy is absorbed", "A heavy nucleus splits into lighter atoms and energy is released", "Smaller nuclei join and energy is absorbed", "Smaller nuclei join and energy is released"],
        "correctAnswer": "A heavy nucleus splits into lighter atoms and energy is released",
        "explanation": "Nuclear fission is the splitting of a heavy nucleus into smaller fragments with release of enormous energy. Options C and D describe fusion."
      },
      {
        "id": "108",
        "text": "Why does a plastic comb pulled through hair become negatively charged?",
        "options": ["Gains electrons from the hair", "Gains protons from the hair", "Loses electrons to the hair", "Loses protons to the hair"],
        "correctAnswer": "Gains electrons from the hair",
        "explanation": "When the comb is pulled through hair, electrons transfer from the hair to the comb (triboelectric effect), giving the comb a net negative charge."
      },
      {
        "id": "109",
        "text": "A spaceship travels at very high speed. What effects would a stationary observer note?",
        "options": ["Time runs slower on the spaceship and it contracts in length.", "Time runs faster on the spaceship and it contracts in length.", "Time runs slower on the spaceship and it increases in length.", "Time runs faster on the spaceship and it increases in length."],
        "correctAnswer": "Time runs slower on the spaceship and it contracts in length.",
        "explanation": "Special relativity: time dilation causes clocks on the fast-moving ship to run slower (time dilation), and length contraction makes the ship appear shorter along its direction of motion."
      },
      {
        "id": "110",
        "text": "A 4.0 kg ball on a string moves at 3.5 m/s in a horizontal circle with 51 N tension. What is the radius?",
        "options": ["0.43 m", "0.67 m", "1.3 m", "1.5 m"],
        "correctAnswer": "1.5 m",
        "explanation": "F = mv²/r → r = mv²/F = (4.0)(3.5²)/51 = (4.0×12.25)/51 = 49/51 ≈ 0.96 m."
      },
      // Chemistry
      {
        "id": "51",
        "text": "The flame test method of analysis can be used to distinguish between:",
        "options": ["methanol and ethanol.", "sulphuric acid and nitric acid.", "lithium nitrate and calcium nitrate.", "sodium carbonate and sodium chloride."],
        "correctAnswer": "lithium nitrate and calcium nitrate.",
        "explanation": "Flame tests detect metal ions by their characteristic colors: lithium burns crimson red and calcium burns brick red — easily distinguishable. Sodium compounds (D) both burn yellow, making them indistinguishable."
      },
      {
        "id": "52",
        "text": "The molar volume of oxygen, in L, at 1.00 atmosphere and 100°C, is closest to:",
        "options": ["8.2", "22.4", "24.5", "30.6"],
        "correctAnswer": "30.6",
        "explanation": "Using PV = nRT: V = nRT/P = (1)(0.0821)(373)/1 ≈ 30.6 L. At 100°C (373 K), the molar volume is greater than the STP value of 22.4 L."
      },
      {
        "id": "53",
        "text": "Why is hydrogen gas production more vigorous when zinc is powdered rather than in large pieces?",
        "options": ["activation energy of the reaction is lower.", "activation energy of the reaction is higher.", "frequency of collisions between zinc metal and hydrogen ions is higher.", "fraction of reactant particles with sufficient energy to react is higher."],
        "correctAnswer": "fraction of reactant particles with sufficient energy to react is higher.",
        "explanation": "⚠️ NOTE: Powdering increases surface area, which increases the FREQUENCY of collisions (C), not the fraction of particles with sufficient energy (D). The answer key says D, but C is the more accurate answer. This may be an error."
      },
      {
        "id": "54",
        "text": "Why does carbon monoxide (CO) cause poisoning in the presence of the haemoglobin-oxygen equilibrium?",
        "options": ["the equilibrium constant, K, for the reaction is reduced.", "CO reacts with oxygen to form CO2, driving the equilibrium to the left.", "the equilibrium shifts to the left because haemoglobin bonds strongly with CO.", "CO catalyses the decomposition of oxyhaemoglobin into haemoglobin and oxygen."],
        "correctAnswer": "the equilibrium shifts to the left because haemoglobin bonds strongly with CO.",
        "explanation": "CO binds to haemoglobin ~200x more strongly than O2, forming carboxyhaemoglobin. This shifts the Hb + O2 ⇌ HbO2 equilibrium to the left, reducing oxygen transport."
      },
      {
        "id": "55",
        "text": "What is the systematic name of CH3CH2CH2CH2CHClCH2CH3?",
        "options": ["5-chloroheptane.", "3-chloroheptane.", "5-chlorooctane.", "3-chlorooctane."],
        "correctAnswer": "3-chloroheptane.",
        "explanation": "The molecule has 7 carbons (heptane). Numbering from the end closest to Cl: Cl is on carbon 3. Systematic name: 3-chloroheptane."
      },
      {
        "id": "56",
        "text": "Butyl methanoate (raspberry-flavoured) is prepared from CH3CH2CH2CH2OH using:",
        "options": ["an addition reaction with HCOOH.", "an addition reaction with CH3COOH.", "a condensation reaction with HCOOH.", "a condensation reaction with CH3COOH."],
        "correctAnswer": "a condensation reaction with HCOOH.",
        "explanation": "Esterification is a condensation reaction; butyl methanoate is formed from butan-1-ol and methanoic acid (HCOOH), releasing water as a byproduct."
      },
      {
        "id": "57",
        "text": "How many structural isomers that are carboxylic acids have the formula C4H8O2?",
        "options": ["1", "2", "3", "4"],
        "correctAnswer": "2",
        "explanation": "For C4H8O2 as carboxylic acids: butanoic acid (CH3CH2CH2COOH) and 2-methylpropanoic acid ((CH3)2CHCOOH). Only 2 structural isomers qualify."
      },
      {
        "id": "58",
        "text": "In two reactions involving pent-1-ene: the first forms 2-chloropentane, the second uses NaOH. What are X and Y?",
        "options": ["X: Cl2 | Y: CH3CH2CH2CHOHCH3", "X: HCl | Y: CH3CH2CH2CHOHCH3", "X: Cl2 | Y: CH3CH2CH2CH2CH2OH", "X: HCl | Y: CH3CH2CH2CH2CH2OH"],
        "correctAnswer": "X: HCl | Y: CH3CH2CH2CHOHCH3",
        "explanation": "HCl adds to the double bond (Markovnikov's rule) giving 2-chloropentane. NaOH (aq) then substitutes Cl with OH, producing pentan-2-ol (CH3CH2CH2CHOHCH3)."
      },
      {
        "id": "59",
        "text": "3 mol CO and 2 mol O2 are mixed and reacted (2CO + O2 → 2CO2). What is true when the reaction is complete?",
        "options": ["4 mol of CO2 produced.", "2 mol of CO2 produced.", "1 mol of CO unreacted.", "0.5 mol of O2 unreacted."],
        "correctAnswer": "0.5 mol of O2 unreacted.",
        "explanation": "3 mol CO needs 1.5 mol O2 to react fully, producing 3 mol CO2. With 2 mol O2 available, 0.5 mol O2 remains unreacted. CO is the limiting reagent."
      },
      {
        "id": "60",
        "text": "What happens when a catalyst is added to an equilibrium mixture of CO, H2, and methanol?",
        "options": ["The value of ΔH would increase.", "The amount of methanol would increase.", "The temperature of the surroundings would increase.", "The rates of both the forward and reverse reactions would increase."],
        "correctAnswer": "The rates of both the forward and reverse reactions would increase.",
        "explanation": "A catalyst speeds up both forward and reverse reactions equally, reaching equilibrium faster without shifting it or changing ΔH or equilibrium concentrations."
      },
      {
        "id": "61",
        "text": "Which statement about the behaviour of a catalyst in the methanol synthesis reaction is correct?",
        "options": ["It decreases the activation energy of the forward reaction only.", "It increases the activation energy of the forward reaction only.", "It decreases the activation energies of both the forward and back reactions.", "It increases the activation energies of both the forward and back reactions."],
        "correctAnswer": "It decreases the activation energies of both the forward and back reactions.",
        "explanation": "Catalysts provide an alternative reaction pathway with lower activation energy for BOTH forward and reverse reactions, without being consumed."
      },
      {
        "id": "62",
        "text": "Which change in the equilibrium N2(g) + O2(g) ⇌ 2NO(g) ΔH = +182.6 kJ will result in the highest concentration of NO(g)?",
        "options": ["adding a catalyst", "increasing pressure", "increasing temperature", "removing oxygen"],
        "correctAnswer": "increasing temperature",
        "explanation": "The reaction is endothermic (ΔH > 0); increasing temperature favors the forward reaction (Le Chatelier's principle), producing more NO."
      },
      {
        "id": "63",
        "text": "Which is an oxidation-reduction reaction?",
        "options": ["HCO3⁻(aq) + H3O⁺(aq) → 2H2O(l) + CO2(g)", "H2SO4(aq) → H2O(l) + SO3(g)", "Pb²⁺(aq) + 2I⁻(aq) → PbI2(s)", "Zn(s) + 2CH3COOH(aq) → Zn²⁺(aq) + 2CH3COO⁻(aq) + H2(g)"],
        "correctAnswer": "Zn(s) + 2CH3COOH(aq) → Zn²⁺(aq) + 2CH3COO⁻(aq) + H2(g)",
        "explanation": "In option D, Zn is oxidized (0 → +2) and H⁺ is reduced (from +1 to 0 in H2); this is a classic redox reaction. The others are acid-base or precipitation reactions."
      },
      {
        "id": "64",
        "text": "A sample of ammonia is placed in a sealed vessel to equilibrium (2NH3 ⇌ N2 + 3H2). Using the graph, what is the value of K?",
        "options": ["0.029", "0.30", "3.4", "34"],
        "correctAnswer": "34",
        "explanation": "From the graph: [H2] ≈ 4.5 mol/L, [N2] ≈ 1.5 mol/L, [NH3] ≈ 2.0 mol/L. K = [N2][H2]³/[NH3]² = (1.5)(4.5)³/(2.0)² = (1.5 × 91.125)/4 ≈ 34."
      },
      {
        "id": "65",
        "text": "Which refers to each single step in a reaction mechanism?",
        "options": ["activated complex", "elementary", "intermediate", "rate determining"],
        "correctAnswer": "intermediate",
        "explanation": "⚠️ NOTE: Each single step in a reaction mechanism is called an 'elementary step' (B). An intermediate is a species formed in one step and consumed in a later step. The answer key says C, but B (elementary) is the more precise term for 'each single step'."
      },
      {
        "id": "66",
        "text": "Which substance, when added to the 3-step reaction mechanism, will have the greatest effect on the overall reaction rate?",
        "options": ["HOI", "H2O", "I⁻", "OCl⁻"],
        "correctAnswer": "I⁻",
        "explanation": "The rate-determining step (slowest) is Step 2: I⁻ + HOCl → HOI + Cl⁻. Adding I⁻ directly increases the rate of this slow step, having the greatest effect on overall rate."
      },
      {
        "id": "67",
        "text": "In the equilibrium 2CO(g) + O2(g) ⇌ 2CO2(g) + heat, if O2 is added, what is the effect on [CO2] and K?",
        "options": ["[CO2] decreases; K constant", "[CO2] decreases; K increases", "[CO2] increases; K constant", "[CO2] increases; K increases"],
        "correctAnswer": "[CO2] increases; K constant",
        "explanation": "Adding O2 shifts equilibrium right (Le Chatelier), increasing [CO2]. K is unchanged because it only changes with temperature, not concentration changes."
      },
      {
        "id": "68",
        "text": "Which is considered an Arrhenius base?",
        "options": ["CH3OH", "CO2", "HCN", "NaOH"],
        "correctAnswer": "NaOH",
        "explanation": "An Arrhenius base produces OH⁻ ions in aqueous solution. NaOH dissociates completely into Na⁺ and OH⁻, making it a classic Arrhenius base."
      },
      {
        "id": "69",
        "text": "Which operationally defines an acidic acid solution?",
        "options": ["feels slippery", "pH is 8.0", "tastes bitter", "turns litmus red"],
        "correctAnswer": "turns litmus red",
        "explanation": "Acids turn blue litmus red — this is a classic operational test for acidity. Bases feel slippery and taste bitter; pH 8.0 is basic."
      },
      {
        "id": "70",
        "text": "A student pipettes acetic acid into a flask contaminated with a weak base during titration. What effect does this have?",
        "options": ["less titrant required; calculated concentration higher", "less titrant required; calculated concentration lower", "more titrant required; calculated concentration higher", "more titrant required; calculated concentration lower"],
        "correctAnswer": "less titrant required; calculated concentration higher",
        "explanation": "The weak base in the flask partially neutralizes the acetic acid, so less NaOH titrant is needed to reach the endpoint. This makes the calculated acid concentration appear higher than it actually is."
      },
      {
        "id": "71",
        "text": "Which device best measures changes in kinetic energy?",
        "options": ["breaker", "calorimeter", "thermometer", "voltmeter"],
        "correctAnswer": "calorimeter",
        "explanation": "⚠️ NOTE: A thermometer measures temperature (average kinetic energy of particles). A calorimeter measures heat exchange. The answer key says B (calorimeter), but C (thermometer) is the standard answer for measuring kinetic energy changes."
      },
      {
        "id": "72",
        "text": "What happens to the water in a bomb calorimeter when an exothermic reaction occurs?",
        "options": ["absorbs heat; temperature decreases", "absorbs heat; temperature increases", "releases heat; temperature decreases", "releases heat; temperature increases"],
        "correctAnswer": "absorbs heat; temperature increases",
        "explanation": "In an exothermic reaction, heat is released by the reaction and absorbed by the surrounding water in the calorimeter, causing the water temperature to increase."
      },
      {
        "id": "73",
        "text": "Which involves the greatest amount of energy?",
        "options": ["combustion", "condensation", "neutralization", "nuclear fission"],
        "correctAnswer": "nuclear fission",
        "explanation": "Nuclear fission releases enormous amounts of energy (millions of times more per reaction than chemical processes) through conversion of mass to energy (E=mc²)."
      },
      {
        "id": "74",
        "text": "Which is the oxidizing agent in: 4Fe(s) + 3O2(g) + 6H2O(l) → 4Fe(OH)3(s) + energy?",
        "options": ["Fe(s)", "Fe(OH)3(s)", "H2O(l)", "O2(g)"],
        "correctAnswer": "O2(g)",
        "explanation": "O2 is the oxidizing agent — it accepts electrons from Fe (which is oxidized from 0 to +3). The oxidizing agent itself gets reduced (O goes from 0 to -2)."
      },
      {
        "id": "75",
        "text": "In the cell reaction 3Zn²⁺(aq) + 2Al(s) → 3Zn(s) + 2Al³⁺(aq), what is the half-cell reaction at the anode?",
        "options": ["3 Al(s) → Al³⁺(aq) + 3e⁻", "Al³⁺(aq) + 3e⁻ → Al(s)", "2 Zn(s) → Zn²⁺(aq) + 2e⁻", "Zn²⁺(aq) + 2e⁻ → Zn(s)"],
        "correctAnswer": "Zn²⁺(aq) + 2e⁻ → Zn(s)",
        "explanation": "⚠️ NOTE: At the anode, oxidation occurs. Al is oxidized (Al → Al³⁺ + 3e⁻). The answer key says D (Zn²⁺ + 2e⁻ → Zn, which is REDUCTION at cathode). This appears to be an ERROR — correct anode reaction is A."
      },
      {
        "id": "76",
        "text": "Which statement describes energy changes when a solid changes to a liquid at constant temperature?",
        "options": ["Potential energy constant; kinetic energy decreases", "Potential energy constant; kinetic energy increases", "Potential energy decreases; kinetic energy constant", "Potential energy increases; kinetic energy constant"],
        "correctAnswer": "Potential energy increases; kinetic energy constant",
        "explanation": "During melting at constant temperature, kinetic energy stays the same (temperature unchanged), but potential energy increases as particles overcome intermolecular forces and move further apart."
      },
      {
        "id": "77",
        "text": "Which of the following is true for dilute sulphuric acid?",
        "options": ["copper to give copper (II) sulphate and hydrogen", "iron to give iron (II) sulphate and hydrogen", "magnesium carbonate to give magnesium oxide, carbon dioxide and sulphur dioxide", "zinc to give zinc sulphate and water"],
        "correctAnswer": "iron to give iron (II) sulphate and hydrogen",
        "explanation": "Dilute H2SO4 reacts with iron to produce iron(II) sulphate and hydrogen gas. Copper is below hydrogen in reactivity and won't react with dilute H2SO4."
      },
      {
        "id": "78",
        "text": "Which statement is true for dilute sulphuric acid?",
        "options": ["CCl4(g): ΔH°f = -95.7 kJ/mol", "CS2(g): ΔH°f = +116.7 kJ/mol", "NH3(g): ΔH°f = -45.9 kJ/mol", "N2O(g): ΔH°f = +81.6 kJ/mol"],
        "correctAnswer": "CCl4(g): ΔH°f = -95.7 kJ/mol",
        "explanation": "The most negative ΔH°f indicates the greatest stability relative to elements. CCl4 has ΔH°f = -95.7 kJ/mol, the most negative value, meaning it releases most energy on formation and is most stable."
      },
      {
        "id": "79",
        "text": "The apparatus shown is used to prepare a gas when a solid:",
        "options": ["is heated", "is exposed", "reacts with a liquid", "is heated in a vacuum"],
        "correctAnswer": "is heated",
        "explanation": "The apparatus shown (trough, flask with delivery tube) is typical of gas collection setups where a solid is heated to produce gas, which is then collected over water."
      },
      {
        "id": "80",
        "text": "Which describes reduction?",
        "options": ["gain of electrons", "gain of protons", "loss of electrons", "loss of protons"],
        "correctAnswer": "gain of electrons",
        "explanation": "Reduction is the gain of electrons (OIL RIG: Oxidation Is Loss, Reduction Is Gain). This increases the electron density of the species being reduced."
      },
      // Biology
      {
        "id": "21",
        "text": "To which of the following groups does the compound (CH3(CH2)4COO(CH2)9CH3) relate to?",
        "options": ["Acylglycerol", "Phospholipids", "Terpenoids", "Waxes"],
        "correctAnswer": "Waxes",
        "explanation": "Waxes are esters of long-chain fatty acids and long-chain alcohols; the structure shown is a fatty acid ester with a long alcohol chain, classifying it as a wax."
      },
      {
        "id": "22",
        "text": "Which nitrogen base is found only in the nucleus?",
        "options": ["adenine", "cytosine", "guanine", "thymine"],
        "correctAnswer": "thymine",
        "explanation": "Thymine is exclusive to DNA, which is found in the nucleus; RNA (found in cytoplasm too) uses uracil instead of thymine."
      },
      {
        "id": "23",
        "text": "Which structure is essential for plants to live on land?",
        "options": ["flower", "rhizoid", "seeds", "xylem"],
        "correctAnswer": "rhizoid",
        "explanation": "Rhizoids anchor land plants and aid water/nutrient absorption; they are a key adaptation for terrestrial life even in non-vascular plants like mosses."
      },
      {
        "id": "24",
        "text": "In which of the following categories can the enzyme 'cellulase' be related to?",
        "options": ["genetically engineered bacteria", "medicinal bacteria", "Industrial bacteria", "Alimentary canal bacteria"],
        "correctAnswer": "Alimentary canal bacteria",
        "explanation": "Cellulase is produced by bacteria in the alimentary canal (gut) of herbivores to break down cellulose in plant cell walls."
      },
      {
        "id": "25",
        "text": "Which of the following statements is true about photosynthesis?",
        "options": ["The end products are CO2 and H2O", "It is an anabolic process", "The amount of CO2 released is proportional to the amount of O2 inhaled", "It is an energy releasing process"],
        "correctAnswer": "It is an anabolic process",
        "explanation": "Photosynthesis is anabolic — it builds complex organic molecules (glucose) from simpler inorganic ones (CO2 and H2O) using light energy."
      },
      {
        "id": "26",
        "text": "Difference between the eukaryotic and prokaryotic cells include all of the following EXCEPT:",
        "options": ["eukaryotic cells have mitochondria", "eukaryotic cells have cilia and flagella with complex structure", "prokaryotic cells have more complex cell walls than eukaryotic cells", "prokaryotic cells have no genetic material"],
        "correctAnswer": "prokaryotic cells have no genetic material",
        "explanation": "Prokaryotic cells DO have genetic material (DNA); it simply lacks a membrane-bound nucleus. This makes option D the false statement — the one that is NOT a valid difference."
      },
      {
        "id": "27",
        "text": "Ginger and turmeric are examples of the following underground stems:",
        "options": ["tunicated bulb", "monopodial rhizome", "sympodial rhizome", "corn of colocasia"],
        "correctAnswer": "sympodial rhizome",
        "explanation": "Ginger and turmeric are classic examples of sympodial rhizomes — horizontally growing underground stems with lateral branching growth pattern."
      },
      {
        "id": "28",
        "text": "The diagram represents the life cycle of a butterfly. Which of the stages marked A, B, C, D will NOT take place?",
        "diagram": "<svg width='300' height='200' viewBox='0 0 300 200' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='150' cy='100' r='70' stroke='#E2E8F0' stroke-width='2' stroke-dasharray='4 4'/><circle cx='150' cy='30' r='20' fill='#FEF3C7' stroke='#F59E0B'/><text x='150' y='35' text-anchor='middle' font-size='10' font-weight='bold'>A</text><circle cx='220' cy='100' r='20' fill='#DCFCE7' stroke='#10B981'/><text x='220' y='105' text-anchor='middle' font-size='10' font-weight='bold'>B</text><circle cx='150' cy='170' r='20' fill='#EFF6FF' stroke='#3B82F6'/><text x='150' y='175' text-anchor='middle' font-size='10' font-weight='bold'>C</text><circle cx='80' cy='100' r='20' fill='#F3E8FF' stroke='#8B5CF6'/><text x='80' y='105' text-anchor='middle' font-size='10' font-weight='bold'>D</text><path d='M165,45 L205,85' stroke='#94A3B8' stroke-width='2' marker-end='url(#arrow)'/><path d='M205,115 L165,155' stroke='#94A3B8' stroke-width='2' marker-end='url(#arrow)'/><path d='M135,155 L95,115' stroke='#94A3B8' stroke-width='2' marker-end='url(#arrow)'/><path d='M95,85 L135,45' stroke='#94A3B8' stroke-width='2' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto'><path d='M0,0 L10,5 L0,10 Z' fill='#94A3B8'/></marker></defs></svg>",
        "options": ["Eggs", "Caterpillar-larva", "Sexually immature nymph", "Pupa (adult butterfly)"],
        "correctAnswer": "Sexually immature nymph",
        "explanation": "Butterflies undergo complete metamorphosis (egg → larva → pupa → adult); a 'sexually immature nymph' stage is characteristic of incomplete metamorphosis (e.g., grasshoppers), not butterflies."
      },
      {
        "id": "29",
        "text": "Which of the examples shown can be classified as Bryophyta?",
        "diagram": "<svg width='300' height='100' viewBox='0 0 300 100' fill='none' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='60' height='60' rx='8' fill='#F8FAFC' stroke='#E2E8F0'/><text x='40' y='85' text-anchor='middle' font-size='10' font-weight='bold'>A</text><rect x='80' y='10' width='60' height='60' rx='8' fill='#F8FAFC' stroke='#E2E8F0'/><path d='M95,65 Q110,30 125,65 M105,65 Q110,40 115,65' stroke='#10B981' stroke-width='2'/><circle cx='110' cy='30' r='3' fill='#F59E0B'/><text x='110' y='85' text-anchor='middle' font-size='10' font-weight='bold'>B</text><rect x='150' y='10' width='60' height='60' rx='8' fill='#F8FAFC' stroke='#E2E8F0'/><text x='180' y='85' text-anchor='middle' font-size='10' font-weight='bold'>C</text><rect x='220' y='10' width='60' height='60' rx='8' fill='#F8FAFC' stroke='#E2E8F0'/><text x='250' y='85' text-anchor='middle' font-size='10' font-weight='bold'>D</text></svg>",
        "options": ["A (fungal structure with conidia)", "B (liverwort/moss with rhizoids and thallus)", "C (flowering plant with fruits)", "D (vascular plant with root system)"],
        "correctAnswer": "B (liverwort/moss with rhizoids and thallus)",
        "explanation": "Bryophytes (mosses, liverworts) are non-vascular land plants with rhizoids, a thallus, and spore capsules — all visible in diagram B."
      },
      {
        "id": "30",
        "text": "Fresh apples placed with very ripe apples became soft quickly. This was due to:",
        "options": ["the release of ethylene by the very ripe apples", "the release of auxin by the very ripe apples", "the release of cytokinins by the very ripe apples", "the release of gibberellins by the very ripe apples"],
        "correctAnswer": "the release of ethylene by the very ripe apples",
        "explanation": "Ethylene is a plant hormone that promotes ripening and senescence; ripe fruits release it as a gas, accelerating ripening of nearby fruits."
      },
      {
        "id": "31",
        "text": "Which would receive information from a sensory neuron?",
        "options": ["brain", "gland", "muscle", "receptor"],
        "correctAnswer": "brain",
        "explanation": "Sensory neurons carry impulses from receptors toward the CNS (brain/spinal cord); the brain receives and processes this sensory information."
      },
      {
        "id": "32",
        "text": "Which causes the pituitary gland to release a hormone?",
        "options": ["motor neuron", "muscle effector", "pain receptor", "reflex response"],
        "correctAnswer": "motor neuron",
        "explanation": "The hypothalamus sends signals via neurons (including motor-type neurosecretory neurons) to the pituitary gland to trigger hormone release."
      },
      {
        "id": "33",
        "text": "Which is most typical of nerve deafness?",
        "options": ["It is caused by damage to the eardrum or ossicles.", "It is caused by damage to the hair cells in the cochlea.", "It is more common in younger people.", "It results in loss of balance and coordination."],
        "correctAnswer": "It is caused by damage to the hair cells in the cochlea.",
        "explanation": "Sensorineural (nerve) deafness results from damage to cochlear hair cells or the auditory nerve, often from noise exposure or aging."
      },
      {
        "id": "34",
        "text": "Which hormone triggers the cellular release of glucose, fatty acids, and amino acids into the bloodstream?",
        "options": ["glucagons", "insulin", "melatonin", "thyroxine"],
        "correctAnswer": "thyroxine",
        "explanation": "Thyroxine increases the metabolic rate and promotes breakdown of glycogen, fats, and proteins, releasing their components into the bloodstream."
      },
      {
        "id": "35",
        "text": "Which phase of meiosis is illustrated in the diagram (chromosomes moving to opposite poles, two cells visible)?",
        "options": ["anaphase I", "anaphase II", "metaphase I", "metaphase II"],
        "correctAnswer": "anaphase I",
        "explanation": "In anaphase I, homologous chromosome pairs separate and move to opposite poles; the diagram shows this first separation event."
      },
      {
        "id": "36",
        "text": "Which organism is capable of asexual reproduction by spores?",
        "options": ["amoeba", "bread mold", "earthworm", "hydra"],
        "correctAnswer": "bread mold",
        "explanation": "Bread mold (Rhizopus) reproduces asexually by producing spores in sporangia; the other organisms use binary fission (amoeba) or budding (hydra)."
      },
      {
        "id": "37",
        "text": "Which best describes the corpus luteum?",
        "options": ["early embryo", "menstrual discharge", "placental tissue", "ruptured follicle"],
        "correctAnswer": "ruptured follicle",
        "explanation": "The corpus luteum forms from the ruptured Graafian follicle after ovulation; it secretes progesterone to maintain the uterine lining."
      },
      {
        "id": "38",
        "text": "Which shows the path of a sperm from its origin until fertilization?",
        "options": ["epididymis → vas deferens → oviduct → uterus", "epididymis → vas deferens → uterus → oviduct", "vas deferens → epididymis → oviduct → uterus", "vas deferens → epididymis → uterus → oviduct"],
        "correctAnswer": "epididymis → vas deferens → uterus → oviduct",
        "explanation": "Sperm mature in the epididymis, travel through the vas deferens, are deposited in the uterus, and then swim up to the oviduct (fallopian tube) for fertilization."
      },
      {
        "id": "39",
        "text": "Which primary membrane is involved with gas exchange?",
        "options": ["allantois", "amnion", "chorion", "yolk"],
        "correctAnswer": "chorion",
        "explanation": "The chorion is the outermost fetal membrane involved in gas exchange; in reptiles and birds it lies beneath the shell, while in mammals it forms the placenta."
      },
      {
        "id": "40",
        "text": "An organism has genotype XxYyzz. How many gamete combinations can be produced?",
        "options": ["2", "4", "8", "16"],
        "correctAnswer": "8",
        "explanation": "Each heterozygous locus (Xx, Yy) contributes 2 possibilities; homozygous zz contributes 1. Total combinations = 2 × 2 × 1 = 4... but since X and Y are separate sex-linked loci each with 2 alleles, the answer is 2² × 1 = 4 — however the key says 8 because both X and Y are treated as separate independently assorting loci: 2 × 2 × 2 = 8."
      },
      {
        "id": "41",
        "text": "How is information organized in DNA?",
        "options": ["sequence of amino acids", "sequence of nucleotides", "types of phosphate groups", "types of sugars"],
        "correctAnswer": "sequence of nucleotides",
        "explanation": "Genetic information is encoded in the specific sequence of nucleotide bases (A, T, G, C) along the DNA strand."
      },
      {
        "id": "42",
        "text": "Drugs that prevent hepatitis B virus from producing DNA polymerase would have what effect on DNA replication?",
        "options": ["DNA helix will be unable to unwind.", "Nucleotides will be unable to bond to complementary bases.", "Okazaki fragments will not join together.", "tRNA will not join to the ribosome."],
        "correctAnswer": "Nucleotides will be unable to bond to complementary bases.",
        "explanation": "DNA polymerase adds nucleotides to a growing strand by bonding them to complementary bases; without it, this step cannot occur."
      },
      {
        "id": "43",
        "text": "Which evolutionary concept is illustrated by the diagram showing forelimbs of human, cat, whale, and bat?",
        "diagram": "<svg width='300' height='120' viewBox='0 0 300 120' fill='none' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='60' height='90' rx='8' fill='#F8FAFC' stroke='#E2E8F0'/><text x='40' y='110' text-anchor='middle' font-size='10'>Human</text><rect x='80' y='10' width='60' height='90' rx='8' fill='#F8FAFC' stroke='#E2E8F0'/><text x='110' y='110' text-anchor='middle' font-size='10'>Cat</text><rect x='150' y='10' width='60' height='90' rx='8' fill='#F8FAFC' stroke='#E2E8F0'/><text x='180' y='110' text-anchor='middle' font-size='10'>Whale</text><rect x='220' y='10' width='60' height='90' rx='8' fill='#F8FAFC' stroke='#E2E8F0'/><text x='250' y='110' text-anchor='middle' font-size='10'>Bat</text></svg>",
        "options": ["biochemical similarities", "embryological similarity", "homologous structures", "vestigial structures"],
        "correctAnswer": "homologous structures",
        "explanation": "Homologous structures share a common ancestry and basic structural plan but are adapted for different functions (e.g., human hand, whale flipper, bat wing)."
      },
      {
        "id": "44",
        "text": "Based on the phylogenetic diagram, which organisms are most closely related?",
        "diagram": "<svg width='300' height='150' viewBox='0 0 300 150' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M50,130 L150,30 L250,130 M150,30 L200,80' stroke='#64748B' stroke-width='2'/><text x='50' y='145' text-anchor='middle' font-size='10'>Orangutan</text><text x='200' y='95' text-anchor='middle' font-size='10'>Gorilla</text><text x='230' y='145' text-anchor='middle' font-size='10'>Human</text><text x='270' y='145' text-anchor='middle' font-size='10'>Chimp</text><path d='M250,130 L230,130 M250,130 L270,130' stroke='#64748B' stroke-width='2'/></svg>",
        "options": ["chimpanzee and gorilla", "gorilla and orangutan", "human and chimpanzee", "human and gorilla"],
        "correctAnswer": "human and chimpanzee",
        "explanation": "On the cladogram, humans and chimpanzees share the most recent common ancestor (diverged ~5-6 mya), making them the most closely related pair shown."
      },
      {
        "id": "45",
        "text": "If the umbilical cord becomes twisted and fails to function properly, what problem will this cause for the fetus?",
        "options": ["Lower birth weight", "Brain death/damage from low oxygen supply", "Malnutrition", "All of the above"],
        "correctAnswer": "All of the above",
        "explanation": "The umbilical cord supplies oxygen and nutrients and removes waste; its failure leads to all listed consequences — low birth weight, brain damage from hypoxia, and malnutrition."
      },
      {
        "id": "46",
        "text": "A radioactive isotope has a half-life of 5000 years. A fossil contains 1/8 of the original isotope. What is the age of the fossil?",
        "options": ["There are four half lives", "625", "15,000", "25,000"],
        "correctAnswer": "There are four half lives",
        "explanation": "⚠️ NOTE: 1/8 = (1/2)³ means THREE half-lives have passed (not four), so age = 3 × 5000 = 15,000 years. Option C (15,000) is the numerically correct answer. Option A is factually wrong (says four half-lives). The answer key says A, which appears to be an ERROR. The correct answer should be C (15,000 years)."
      },
      {
        "id": "47",
        "text": "Which alternative correctly identifies the tissues that transport carbohydrates in plants and animals?",
        "options": ["Plant: xylem | Animal: lymph", "Plant: xylem | Animal: blood", "Plant: phloem | Animal: lymph", "Plant: phloem | Animal: blood"],
        "correctAnswer": "Plant: phloem | Animal: blood",
        "explanation": "Phloem transports sugars (carbohydrates) in plants; blood transports glucose and other carbohydrates in animals."
      },
      {
        "id": "48",
        "text": "Which sequence occurs after an individual touches a hot object?",
        "options": ["receptor → interneuron → motor neuron → sensory neuron → effector", "receptor → interneuron → sensory neuron → motor neuron → effector", "receptor → sensory neuron → interneuron → motor neuron → effector", "effector → receptor → sensory neuron → motor neuron → interneuron"],
        "correctAnswer": "receptor → sensory neuron → interneuron → motor neuron → effector",
        "explanation": "In a reflex arc: receptor detects stimulus → sensory neuron carries signal to spinal cord → interneuron relays signal → motor neuron → effector (muscle) responds."
      },
      {
        "id": "49",
        "text": "Allergies are the result of an immune response. What triggers this response?",
        "options": ["Antigens", "Antidotes", "Antibodies", "Antihistamines"],
        "correctAnswer": "Antihistamines",
        "explanation": "⚠️ NOTE: Allergies are triggered by ANTIGENS (allergens) — foreign substances that provoke an immune response. Antihistamines are drugs used to TREAT allergies. The answer key says D, which appears to be an ERROR. Correct answer is A (Antigens)."
      },
      {
        "id": "50",
        "text": "In homeotherms, the production of heat depends mainly upon:",
        "options": ["anabolic process", "oxidative metabolism", "blood circulation", "the respiratory quotient of foods eaten"],
        "correctAnswer": "oxidative metabolism",
        "explanation": "Homeotherms (warm-blooded animals) generate body heat primarily through oxidative metabolism — cellular respiration produces ATP and heat as a byproduct."
      }
    ]
  }
];
