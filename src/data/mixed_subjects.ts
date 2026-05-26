import { AKU_2024_DATA } from './aku2024_dataset';
import { AKU_2021_DATA } from './aku2021_dataset';

export const MIXED_SUBJECTS_DATA = [
  {
    id: 'mixed-aku-pro-1',
    title: 'AKU High-Yield Mixed Drill',
    subject: 'Mixed Subjects',
    totalQuestions: 20,
    timeLimit: 120,
    status: 'Active' as const,
    isPremium: true,
    questions: [
      ...AKU_2024_DATA[0].questions.slice(0, 4),
      ...AKU_2021_DATA[0].questions.slice(0, 4),
      ...AKU_2024_DATA[0].questions.slice(10, 14),
      ...AKU_2021_DATA[0].questions.slice(20, 24),
      ...AKU_2024_DATA[0].questions.slice(40, 44),
    ].map((q, i) => ({ ...q, id: `mixed-q-${i}` })),
  },
  {
    id: 'mixed-logic-bio-1',
    title: 'Reasoning & Bio Science Mix',
    subject: 'Mixed Subjects',
    totalQuestions: 15,
    timeLimit: 90,
    status: 'Active' as const,
    isPremium: false,
    questions: [
        ...AKU_2024_DATA[0].questions.filter(q => q.subject === 'Biology').slice(0, 5),
        ...AKU_2024_DATA[0].questions.filter(q => q.subject === 'Logical Reasoning').slice(0, 5),
        ...AKU_2024_DATA[0].questions.filter(q => q.subject === 'Scientific Reasoning').slice(0, 5),
    ].map((q, i) => ({ ...q, id: `mixed-rb-${i}` })),
  },
  {
    id: 'mixed-physics-test-1',
    title: 'Physics Test 1 (PTB Chapters 1-5)',
    subject: 'Mixed Subjects',
    totalQuestions: 50,
    timeLimit: 120,
    status: 'Active' as const,
    isPremium: false,
    questions: [
      {
        id: 'ptb_p1_q1',
        subject: 'Physics',
        text: 'The period of oscillation of a simple pendulum is measured as T = 2.5 s using a stopwatch with a least count of 0.1 s. If the measured length is l = 100 cm using a meter rod of least count 0.1 cm, what is the maximum percentage uncertainty in the determined value of the acceleration due to gravity g?',
        options: ['A) 4.1%', 'B) 8.1%', 'C) 5.0%', 'D) 9.0%'],
        correctAnswer: 'B) 8.1%',
        explanation: 'The formula for g is g = 4π²(l / T²). The total percentage uncertainty is determined as: (Δl / l + 2 * ΔT / T) * 100. Substituting the given values: (0.1 / 100 * 100) + 2 * (0.1 / 2.5 * 100) = 0.1% + 2 * 4% = 8.1%.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q2',
        subject: 'Physics',
        text: 'A student measures the diameter of a uniform wire as 2.50 mm using a screw gauge. If the absolute uncertainty in this measurement is equal to the least count of a typical micrometer screw gauge (0.01 mm), how many significant figures are there in the calculated cross-sectional area of the wire?',
        options: ['A) 2', 'B) 3', 'C) 4', 'D) 5'],
        correctAnswer: 'B) 3',
        explanation: 'The measured value 2.50 mm has three significant figures. Under standard rules of multiplication/division, the final result (Area = π * d² / 4) must retain no more significant figures than the least precise input factor, which is 3.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q3',
        subject: 'Physics',
        text: 'Which of the following pairs of physical quantities does NOT possess identical dimensions?',
        options: ['A) Work and Torque', 'B) Impulse and Linear Momentum', 'C) Surface Tension and Viscosity', 'D) Young\'s Modulus and Pressure'],
        correctAnswer: 'C) Surface Tension and Viscosity',
        explanation: 'Surface tension has dimensions [MT⁻²], while coefficient of viscosity is [ML⁻¹T⁻¹]. For comparison: Work and torque are [ML²T⁻²]; Impulse and momentum are [MLT⁻¹]; Young\'s modulus and pressure are [ML⁻¹T⁻²].',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q4',
        subject: 'Physics',
        text: 'The viscous force F acting on a spherical ball falling through a fluid depends on the coefficient of viscosity η, the radius of the ball r, and its terminal velocity v. Using dimensional analysis, if F ∝ η^a * r^b * v^c, what are the values of a, b, and c?',
        options: ['A) a=1, b=1, c=1', 'B) a=1, b=-1, c=1', 'C) a=1, b=1, c=-1', 'D) a=-1, b=1, c=1'],
        correctAnswer: 'A) a=1, b=1, c=1',
        explanation: 'Dimensions of force [F] = [MLT⁻²], [η] = [ML⁻¹T⁻¹], [r] = [L], and [v] = [LT⁻¹]. Substituting into the equation: [MLT⁻²] = [M^a * L^(-a+b+c) * T^(-a-c)]. Matching powers yields a=1, c=1, and b=1, confirming Stokes\' Law.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q5',
        subject: 'Physics',
        text: 'Two logs of lengths L1 = (10.5 ± 0.2) m and L2 = (3.4 ± 0.1) m are joined end-to-end. What is the total length along with its absolute uncertainty?',
        options: ['A) (13.9 ± 0.1) m', 'B) (13.9 ± 0.3) m', 'C) (13.9 ± 0.02) m', 'D) (13.9 ± 0.15) m'],
        correctAnswer: 'B) (13.9 ± 0.3) m',
        explanation: 'When adding or subtracting physical measurements, their absolute values are combined, and their absolute uncertainties are always directly summed together (0.2 + 0.1 = 0.3 m).',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q6',
        subject: 'Physics',
        text: 'The equation of a wave is given by y = A * sin(Bx - Ct), where x is distance and t is time. What are the SI units of the constants B and C?',
        options: ['A) B in m, C in s', 'B) B in m⁻¹, C in s⁻¹', 'C) B in m, C in s⁻¹', 'D) B in m⁻¹, C in s'],
        correctAnswer: 'B) B in m⁻¹, C in s⁻¹',
        explanation: 'The arguments inside transcendental functions must be dimensionless. Thus, [Bx] = [1] implies [B] = [x]⁻¹ = m⁻¹, and [Ct] = [1] implies [C] = [t]⁻¹ = s⁻¹.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q7',
        subject: 'Physics',
        text: 'If the uncertainty in the measurement of the radius of a solid sphere is 2%, what will be the percentage uncertainty in its volume?',
        options: ['A) 2%', 'B) 4%', 'C) 6%', 'D) 8%'],
        correctAnswer: 'C) 6%',
        explanation: 'The volume of a sphere is V = 4/3 * π * r³. The percentage uncertainty in a powered quantity is equal to the power multiplied by the percentage uncertainty of the baseline quantity: 3 * 2% = 6%.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q8',
        subject: 'Physics',
        text: 'A distance is reported as 4.000 km. If this value is converted to meters, how many significant figures should be in the final expression to preserve scientific accuracy?',
        options: ['A) 1', 'B) 2', 'C) 4', 'D) 7'],
        correctAnswer: 'C) 4',
        explanation: 'The value 4.000 km contains 4 significant figures (since trailing zeros after the decimal point are significant). Unit conversion does not alter measurement precision, so it must be denoted as 4.000 * 10³ m.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q9',
        subject: 'Physics',
        text: 'Which of the following statements correctly evaluates the precision and potential accuracy of these measurements: (I) 2.5 cm (meter rule), (II) 2.53 cm (vernier caliper), and (III) 2.534 cm (screw gauge)?',
        options: [
          'A) I is most precise, III is most accurate.',
          'B) III is most precise, I is most accurate.',
          'C) III is the most precise and also has the potential to be the most accurate if systemic errors are zero.',
          'D) II is the most precise, III is the most accurate.'
        ],
        correctAnswer: 'C) III is the most precise and also has the potential to be the most accurate if systemic errors are zero.',
        explanation: 'Precision is characterized by the resolution (least count) of the instrument. The screw gauge has the highest resolution (0.001 cm), making III the most precise. True accuracy depends on eliminating systemic offsets.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q10',
        subject: 'Physics',
        text: 'The fundamental physical constant speed of light in a vacuum can be represented as c = 1 / sqrt(μ0 * ε0). What are the dimensions of this expression?',
        options: ['A) [LT⁻¹]', 'B) [L⁻¹T]', 'C) [L²T⁻²]', 'D) [MLT⁻²]'],
        correctAnswer: 'A) [LT⁻¹]',
        explanation: 'The term 1 / sqrt(μ0 * ε0) is equivalent to the speed of light c. Thus, its dimension matches standard speed or velocity: [LT⁻¹].',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q11',
        subject: 'Physics',
        text: 'Two forces of magnitudes F1 = 3 N and F2 = 4 N act on a single body. Which of the following cannot be the magnitude of the resultant force under any spatial orientation?',
        options: ['A) 1 N', 'B) 5 N', 'C) 7 N', 'D) 8 N'],
        correctAnswer: 'D) 8 N',
        explanation: 'The resultant of two force vectors ranges from |F1 - F2| to F1 + F2. Here, 4 - 3 = 1 N, and 4 + 3 = 7 N. Therefore, any resultant must lie within [1 N, 7 N], making 8 N physically impossible.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q12',
        subject: 'Physics',
        text: 'If the dot product of two non-zero vectors A and B is equal to the magnitude of their cross product (|A • B| = |A × B|), what is the angle θ between these two vectors?',
        options: ['A) 0°', 'B) 45°', 'C) 90°', 'D) 180°'],
        correctAnswer: 'B) 45°',
        explanation: 'A • B = A * B * cos(θ) and |A × B| = A * B * sin(θ). Equating them: cos(θ) = sin(θ), which implies tan(θ) = 1, so θ = 45°.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q13',
        subject: 'Physics',
        text: 'A vector A lies in the xy-plane. If its x-component is negative and its y-component is positive, its orientation angle θ measured counterclockwise from the positive x-axis is given by:',
        options: [
          'A) θ = φ',
          'B) θ = 180° - φ',
          'C) θ = 180° + φ',
          'D) θ = 360° - φ'
        ],
        correctAnswer: 'B) θ = 180° - φ',
        explanation: 'A negative x-component and a positive y-component locate the vector in the 2nd quadrant. The standard angle counterclockwise from the positive x-axis is θ = 180° - φ, where φ = tan⁻¹(|Ay| / |Ax|).',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q14',
        subject: 'Physics',
        text: 'A uniform meter rod of weight 10 N is pivoted smoothly at its center (the 50 cm mark). A body of mass 2 kg is hung at the 20 cm mark. At what position must a 3 kg mass be hung to keep the rod balanced horizontally? (g = 10 m/s²)',
        options: ['A) 70 cm mark', 'B) 30 cm mark', 'C) 80 cm mark', 'D) 60 cm mark'],
        correctAnswer: 'A) 70 cm mark',
        explanation: 'For equilibrium, rotational torque is balanced around the pivot (50 cm mark). The CCW torque = (2 kg * 10 m/s²) * (50 cm - 20 cm) = 20 N * 30 cm = 600 N·cm. The balancing CW torque must equal (3 kg * 10 m/s²) * d = 30 N * d = 600 N·cm, yielding d = 20 cm to the right of the center (70 cm mark).',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q15',
        subject: 'Physics',
        text: 'Under what condition will a body be in complete static equilibrium?',
        options: [
          'A) When it moves with a constant linear velocity.',
          'B) When ΣF = 0 and Στ = 0, and the body is completely at rest.',
          'C) When the body rotates with a constant angular velocity.',
          'D) When the net external power supplied to the system is constant.'
        ],
        correctAnswer: 'B) When ΣF = 0 and Στ = 0, and the body is completely at rest.',
        explanation: 'Complete static equilibrium requires satisfying both translational equilibrium (ΣF = 0) and rotational equilibrium (Στ = 0), with the additional constraint that the body remains physically at rest.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q16',
        subject: 'Physics',
        text: 'If A × B = 0 and A • B = 0, and it is known that A is not a null vector, then what can we conclude about vector B?',
        options: [
          'A) B is perpendicular to A.',
          'B) B is parallel to A.',
          'C) B must be a null vector.',
          'D) B is a unit vector.'
        ],
        correctAnswer: 'C) B must be a null vector.',
        explanation: 'A × B = 0 implies parallel orientation, whereas A • B = 0 implies orthogonal orientation. A non-zero vector cannot be both parallel and perpendicular to another. Thus, B must be a null vector (magnitude zero).',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q17',
        subject: 'Physics',
        text: 'The position vector of a point is given by r = 2i - 3j + 4k and a force acting on it is F = 5i + 2j - 1k. What is the x-component of the torque acting on this particle?',
        options: ['A) -5 N·m', 'B) 22 N·m', 'C) -11 N·m', 'D) 18 N·m'],
        correctAnswer: 'A) -5 N·m',
        explanation: 'Using torque vector cross product components, τ = r × F. The x-component is τx = y * Fz - z * Fy. Plugging in the values: (-3) * (-1) - (4) * (2) = 3 - 8 = -5 N·m.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q18',
        subject: 'Physics',
        text: 'What is the unit vector perpendicular to the plane containing the vectors A = 2i and B = 3j?',
        options: ['A) i', 'B) j', 'C) k', 'D) (i + j) / sqrt(2)'],
        correctAnswer: 'C) k',
        explanation: 'The directions of vectors A and B lie on the x and y axes, respectively. Any vector perpendicular to this xy-plane lies on the z-axis, represented by the unit vector k.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q19',
        subject: 'Physics',
        text: 'A vector has a magnitude of 10 units. If its component along the x-axis is 6 units, what are the possible values for its y-component?',
        options: ['A) ± 4 units', 'B) ± 8 units', 'C) ± 16 units', 'D) Zero'],
        correctAnswer: 'B) ± 8 units',
        explanation: 'By the Pythagoras theorem: A² = Ax² + Ay² => 10² = 6² + Ay² => Ay² = 64, which yields Ay = ± 8 units.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q20',
        subject: 'Physics',
        text: 'If the projection of vector A on vector B is equal to zero, it physically implies that:',
        options: [
          'A) The vectors are collinear.',
          'B) The vectors are orthogonal to each other.',
          'C) Vector B is a null vector only.',
          'D) The vectors point in opposite directions.'
        ],
        correctAnswer: 'B) The vectors are orthogonal to each other.',
        explanation: 'The projection is represented by A * cos(θ). For non-zero vectors, a projection of zero means cos(θ) = 0, which corresponds to θ = 90°, indicating orthogonality.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q21',
        subject: 'Physics',
        text: 'A velocity-time graph for an object moving along a straight line is a straight line sloping downwards but staying above the time axis. This indicates that the object is moving with:',
        options: [
          'A) Increasing speed and uniform acceleration.',
          'B) Decreasing speed and uniform retardation.',
          'C) Constant speed and zero acceleration.',
          'D) Variable acceleration and variable speed.'
        ],
        correctAnswer: 'B) Decreasing speed and uniform retardation.',
        explanation: 'A straight line slope indicates uniform (constant) acceleration. Because the line slopes downwards, it is a deceleration (retardation), and staying above the horizontal axis means velocity values decrease but remain positive.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q22',
        subject: 'Physics',
        text: 'A ball is thrown horizontally from the top of a tower of height 80 m with an initial velocity of 20 m/s. How long does it take for the ball to hit the ground? (Take g = 10 m/s²)',
        options: ['A) 2 s', 'B) 4 s', 'C) 6 s', 'D) 8 s'],
        correctAnswer: 'B) 4 s',
        explanation: 'Horizontal launches have zero initial vertical velocity. Using vertical motion kinematic equations: y = 1/2 * g * t² => 80 = 5 * t² => t² = 16 => t = 4 s.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q23',
        subject: 'Physics',
        text: 'An environment-testing rocket ejects gases at a rate of 100 kg/s with a relative velocity of 500 m/s. What is the forward thrust experienced by the rocket structure?',
        options: ['A) 5,000 N', 'B) 50,000 N', 'C) 500,000 N', 'D) 2,500 N'],
        correctAnswer: 'B) 50,000 N',
        explanation: 'Forward thrust is calculated using the rate of momentum change of the exhaust gases: F = v * (dm/dt) = 500 m/s * 100 kg/s = 50,000 N.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q24',
        subject: 'Physics',
        text: 'During an elastic collision between two isolated bodies in one dimension, which of the following statements is perfectly true?',
        options: [
          'A) Only total linear momentum is conserved; kinetic energy changes.',
          'B) Kinetic energy is conserved but linear momentum is variable.',
          'C) Both total linear momentum and total kinetic energy are conserved.',
          'D) Kinetic energy is converted into sound and thermal energy completely.'
        ],
        correctAnswer: 'C) Both total linear momentum and total kinetic energy are conserved.',
        explanation: 'By definition, an elastic collision is characterized by the conservation of both total linear momentum and total translational kinetic energy of the system.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q25',
        subject: 'Physics',
        text: 'A projectile is fired at an angle of 30° with the horizontal. At what other angle of elevation will the horizontal range be exactly identical, assuming the same initial launch speed?',
        options: ['A) 45°', 'B) 60°', 'C) 75°', 'D) 90°'],
        correctAnswer: 'B) 60°',
        explanation: 'The horizontal range of a projectile remains identical for complementary launch angles (angles that sum to 90°). Thus, 90° - 30° = 60°.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q26',
        subject: 'Physics',
        text: 'The area under a force-time (F-t) graph directly represents which of the following physical quantities?',
        options: ['A) Work done', 'B) Acceleration', 'C) Change in momentum (Impulse)', 'D) Power output'],
        correctAnswer: 'C) Change in momentum (Impulse)',
        explanation: 'The integral of force over time is the definition of Impulse (J = ∫ F dt), which according to the impulse-momentum theorem equates to the change in linear momentum.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q27',
        subject: 'Physics',
        text: 'A mass m1 moving with velocity v collides head-on elastically with a stationary mass m2. If m1 ≫ m2 (e.g., a truck hitting a tiny marble), what will be the approximate velocity of the second mass m2 immediately after the collision?',
        options: ['A) Zero', 'B) v', 'C) 2v', 'D) 4v'],
        correctAnswer: 'C) 2v',
        explanation: 'According to elastic collision kinematic relations: v2\' = [2*m1 / (m1+m2)] * v1. When m1 ≫ m2, we approximate (m1+m2) as m1, reducing the term to 2 * v1 = 2v.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q28',
        subject: 'Physics',
        text: 'A shell exploding mid-air breaks into several fragments. Which of the following statements applies to this explosion process?',
        options: [
          'A) The total kinetic energy is conserved.',
          'B) The total linear momentum of all fragments is conserved.',
          'C) The total momentum increases due to chemical energy release.',
          'D) The paths of individual fragments must be linear and parallel.'
        ],
        correctAnswer: 'B) The total linear momentum of all fragments is conserved.',
        explanation: 'Since the explosion occurs due to internal forces, there is no external force acting on the shell. Therefore, the total linear momentum of all fragments must be strictly conserved.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q29',
        subject: 'Physics',
        text: 'An object is dropped from a high cliff. If air resistance is explicitly taken into account, how does the acceleration of the object change as it falls towards the earth before hitting terminal velocity?',
        options: [
          'A) It remains constant at 9.8 m/s².',
          'B) It increases continuously.',
          'C) It decreases continuously until it becomes zero.',
          'D) It oscillates periodically.'
        ],
        correctAnswer: 'C) It decreases continuously until it becomes zero.',
        explanation: 'Net downward force is mg - R, where drag force R increases as speed increases. Acceleration a = g - R/m decreases continuously until it drops to zero at terminal velocity.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q30',
        subject: 'Physics',
        text: 'The trajectory of a projectile in a vacuum, governed by the equation y = ax - bx², forms a parabola. What does the term a physically represent in terms of launch parameters?',
        options: [
          'A) tan(θ) (where θ is the launch angle)',
          'B) sin(θ)',
          'C) g / (2 * v0²)',
          'D) The maximum height reached'
        ],
        correctAnswer: 'A) tan(θ) (where θ is the launch angle)',
        explanation: 'The projectile trajectory equation is y = x * tan(θ) - [g / (2 * v0² * cos²(θ))] * x². Comparing this with y = ax - bx² proves that a = tan(θ).',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q31',
        subject: 'Physics',
        text: 'A body is moved along a closed circular path of radius R in a purely gravitational field. What is the total work done by the gravitational force on the body over one complete revolution?',
        options: ['A) 2πmgR', 'B) mgR', 'C) Zero', 'D) -mgR'],
        correctAnswer: 'C) Zero',
        explanation: 'Gravitational forces are conservative forces. By definition, net work done by conservative forces along any complete, closed loop path is strictly zero.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q32',
        subject: 'Physics',
        text: 'The escape velocity of a body from the surface of the Earth is approximately 11 km/s. If the mass of the escaping object is doubled, what will be its new escape velocity?',
        options: ['A) 5.5 km/s', 'B) 11 km/s', 'C) 22 km/s', 'D) 44 km/s'],
        correctAnswer: 'B) 11 km/s',
        explanation: 'The escape velocity is given by v = sqrt(2 * G * M / R). Since this equation only depends on the mass and radius of the planet, the mass of the escaping body has zero effect.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q33',
        subject: 'Physics',
        text: 'A variable force F = 3x² (in Newtons) acts on a particle. What is the work done by this force in moving the particle from x = 0 to x = 2 meters?',
        options: ['A) 6 J', 'B) 8 J', 'C) 12 J', 'D) 24 J'],
        correctAnswer: 'B) 8 J',
        explanation: 'Work done by a variable force is the integral W = ∫ F dx over the limits. ∫(3x²) dx from 0 to 2 evaluates to [x³] evaluated from 0 to 2, which equals 2³ - 0 = 8 Joules.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q34',
        subject: 'Physics',
        text: 'An electric motor pumps 100 kg of water to a height of 10 m in exactly 10 s. What is the effective power delivery of the motor? (Take g = 10 m/s²)',
        options: ['A) 100 W', 'B) 1,000 W', 'C) 10,000 W', 'D) 500 W'],
        correctAnswer: 'B) 1,000 W',
        explanation: 'Power equals work done divided by time: P = m * g * h / t = 100 kg * 10 m/s² * 10 m / 10 s = 1,000 Watts.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q35',
        subject: 'Physics',
        text: 'If the kinetic energy of a moving body is increased by 300%, what is the percentage increase in its linear momentum?',
        options: ['A) 100%', 'B) 200%', 'C) 300%', 'D) 400%'],
        correctAnswer: 'A) 100%',
        explanation: 'Linear momentum is p = sqrt(2 * m * K). If kinetic energy increases by 300%, the new value is K\' = 4 * K. Thus, new momentum p\' = sqrt(4) * p = 2 * p. Increasing from p to 2p is a 100% gain.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q36',
        subject: 'Physics',
        text: 'Which of the following forces is a non-conservative force?',
        options: ['A) Gravitational force', 'B) Electrostatic force', 'C) Frictional force', 'D) Elastic spring force'],
        correctAnswer: 'C) Frictional force',
        explanation: 'Frictional forces dissipate kinetic energy as thermal energy, and the work done depends on the path. Therefore, friction is classified as a non-conservative force.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q37',
        subject: 'Physics',
        text: 'The consumption of energy in commercial sectors is often billed in kilowatt-hours (kWh). One kilowatt-hour is equivalent to how many Joules?',
        options: ['A) 3.6 x 10³ J', 'B) 3.6 x 10⁵ J', 'C) 3.6 x 10⁶ J', 'D) 1.0 x 10³ J'],
        correctAnswer: 'C) 3.6 x 10⁶ J',
        explanation: 'Convert kilowatts to watts and hours to seconds: 1 kWh = 1,000 W * 3,600 s = 3,600,000 Joules = 3.6 * 10⁶ J.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q38',
        subject: 'Physics',
        text: 'When a stone is thrown vertically upward, it gains potential energy at the expense of kinetic energy. At the highest point of its flight:',
        options: [
          'A) Its total mechanical energy becomes zero.',
          'B) Its kinetic energy is completely converted to potential energy.',
          'C) Its acceleration becomes zero.',
          'D) Its potential energy is minimum.'
        ],
        correctAnswer: 'B) Its kinetic energy is completely converted to potential energy.',
        explanation: 'Under mechanical energy conservation, potential and kinetic energies exchange. At the peak, vertical velocity is zero (KE = 0), converting all kinetic energy into gravitational potential energy.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q39',
        subject: 'Physics',
        text: 'The work-energy theorem states that the work done by a net force on a body is always equal to the change in its:',
        options: ['A) Kinetic energy', 'B) Potential energy', 'C) Total linear momentum', 'D) Rest mass energy'],
        correctAnswer: 'A) Kinetic energy',
        explanation: 'By the work-energy relation, net external work equals change in translational kinetic energy: W_net = ΔK.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q40',
        subject: 'Physics',
        text: 'What is the work done by a centripetal force of 50 N acting on a satellite orbiting the Earth in a perfect circle of radius 7000 km?',
        options: ['A) 3.5 x 10⁵ J', 'B) Zero', 'C) 5 x 10³ J', 'D) Infinity'],
        correctAnswer: 'B) Zero',
        explanation: 'Centripetal force acts perpendicular to the instantaneous tangential displacement of the orbiting satellite (θ = 90°). Thus, W = F * d * cos(90°) = 0.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q41',
        subject: 'Physics',
        text: 'A particle moves along a circular path of radius 2 m with a constant angular velocity of 4 rad/s. What is the magnitude of its linear velocity?',
        options: ['A) 2 m/s', 'B) 4 m/s', 'C) 8 m/s', 'D) 16 m/s'],
        correctAnswer: 'C) 8 m/s',
        explanation: 'Linear speed is related to rotational speed by the equation: v = r * ω. Substituting the values: v = 2 * 4 = 8 m/s.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q42',
        subject: 'Physics',
        text: 'If an object is rotating with a constant angular acceleration α, the graph between angular displacement (θ) and time (t) will take the shape of a:',
        options: ['A) Straight line passing through the origin.', 'B) Horizontal line parallel to the time axis.', 'C) Parabola.', 'D) Hyperbola.'],
        correctAnswer: 'C) Parabola.',
        explanation: 'The angular kinematic equation is θ = ωi * t + 1/2 * α * t². Since angular displacement is proportional to t², the displacement-time graph is parabolic.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q43',
        subject: 'Physics',
        text: 'A disc and a hoop of identical mass and radius roll down the same inclined plane from rest simultaneously. Which object reaches the bottom of the incline first?',
        options: [
          'A) The hoop, because its moment of inertia is higher.',
          'B) The disc, because its moment of inertia is lower.',
          'C) Both reach the bottom at the exact same time.',
          'D) It depends entirely on the angle of the incline.'
        ],
        correctAnswer: 'B) The disc, because its moment of inertia is lower.',
        explanation: 'A disc has a lower rotational inertia (1/2 * M * R²) compared to a hoop (M * R²). Less gravitational potential energy is converted to rotational kinetic energy, leaving more for translational sliding, making it faster.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q44',
        subject: 'Physics',
        text: 'What is the apparent weight of an astronaut inside a spaceship orbiting the Earth in a stable geostationary orbit?',
        options: [
          'A) Equal to their normal weight on Earth.',
          'B) Double their weight on Earth.',
          'C) Zero, due to continuous free-fall state.',
          'D) Slightly less than their weight on Earth.'
        ],
        correctAnswer: 'C) Zero, due to continuous free-fall state.',
        explanation: 'An orbiting body is in a state of perpetual freefall toward the planet. Inside this frame, normal force contact falls to zero, causing weightlessness.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q45',
        subject: 'Physics',
        text: 'The orbital radius of a geostationary satellite measured from the center of the Earth is approximately equal to:',
        options: ['A) 6,400 km', 'B) 24,000 km', 'C) 42,300 km', 'D) 36,000 km'],
        correctAnswer: 'C) 42,300 km',
        explanation: 'Calculated using Kepler\'s Third Law: For a orbital period of 24 hours, the required circular orbital radius from the center of the Earth is ~42,300 km (leaving the altitude above surface as ~36,000 km).',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q46',
        subject: 'Physics',
        text: 'If the distance of a planet from the Sun is halved, how does the gravitational force between them change?',
        options: ['A) It becomes half.', 'B) It becomes double.', 'C) It becomes four times.', 'D) It becomes one-fourth.'],
        correctAnswer: 'C) It becomes four times.',
        explanation: 'By Newton\'s gravitational inverse square law, F ∝ 1 / r². Halving distance r yields F\' = F / (1/2)² = 4 * F.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q47',
        subject: 'Physics',
        text: 'A fly sits on a rotating turntable. If the turntable\'s angular speed is doubled while the fly stays at the same radial spot, how does the centripetal acceleration acting on the fly change?',
        options: ['A) It doubles.', 'B) It quadruples.', 'C) It remains unchanged.', 'D) It drops to half.'],
        correctAnswer: 'B) It quadruples.',
        explanation: 'Centripetal acceleration is represented as ac = r * ω². Since radial distance r is constant, doubling the angular speed ω multiplies ac by 2² = 4.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q48',
        subject: 'Physics',
        text: 'The law of conservation of angular momentum states that if no net external torque acts on a system, its total angular momentum remains constant. If a spinning figure skater pulls her arms inward, her moment of inertia decreases. What happens to her angular velocity?',
        options: ['A) It decreases.', 'B) It increases.', 'C) It stays completely constant.', 'D) It drops to zero instantly.'],
        correctAnswer: 'B) It increases.',
        explanation: 'Angular momentum is L = I * ω. Because no external torque acts, lowering rotational inertia I forces angular speed ω to rise to maintain a constant product L.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q49',
        subject: 'Physics',
        text: 'A car rounds an unbanked curve of radius R at speed v. What provides the necessary centripetal force to keep the car moving in a circle without skidding?',
        options: [
          'A) The weight of the car.',
          'B) The normal force from the road surface.',
          'C) The static friction force between the tires and the road.',
          'D) Air resistance forces.'
        ],
        correctAnswer: 'C) The static friction force between the tires and the road.',
        explanation: 'On flat, unbanked highways, the horizontal contact force preventing the car from sliding outward is the static friction between tire treads and asphalt.',
        status: 'ready'
      },
      {
        id: 'ptb_p1_q50',
        subject: 'Physics',
        text: 'What is the angular momentum of a particle of mass m moving in a circle of radius r with a linear speed v?',
        options: ['A) mvr', 'B) mv / r', 'C) m * v² * r', 'D) mr / v'],
        correctAnswer: 'A) mvr',
        explanation: 'The magnitude of angular momentum L for circular paths is L = r * p. Substituting linear momentum p = m * v gives L = mvr.',
        status: 'ready'
      }
    ]
  },
  {
    id: 'mixed-physics-test-2',
    title: 'Physics Test 2 (PTB Chapters 6-10)',
    subject: 'Mixed Subjects',
    totalQuestions: 50,
    timeLimit: 120,
    status: 'Active' as const,
    isPremium: false,
    questions: [
      {
        id: 'ptb_p2_q51',
        subject: 'Physics',
        text: 'An ideal fluid flows through a horizontal pipe of varying cross-section. At a point where the pipe diameter is halved, what happens to the velocity of the fluid stream?',
        options: [
          'A) It is halved.',
          'B) It doubles.',
          'C) It drops to one-fourth.',
          'D) It quadruples.'
        ],
        correctAnswer: 'D) It quadruples.',
        explanation: 'According to the Equation of Continuity, A_1 * v_1 = A_2 * v_2. Since the cross-sectional area of a circular pipe is A = πd²/4, area is proportional to the square of the diameter (A ∝ d²). If the diameter is halved, the area becomes one-fourth. To maintain continuity, velocity must quadruple (x4).',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q52',
        subject: 'Physics',
        text: 'Water flows through a horizontal pipe. At a certain section, the velocity of the water increases due to a constriction. According to Bernoulli’s theorem, what happens to the static pressure of the water at this constriction?',
        options: [
          'A) The pressure increases.',
          'B) The pressure decreases.',
          'C) The pressure remains exactly the same.',
          'D) The pressure drops to absolute zero.'
        ],
        correctAnswer: 'B) The pressure decreases.',
        explanation: 'Bernoulli’s equation states that for a horizontal flow, P + 1/2*ρ*v² = constant. If speed increases, the dynamic pressure term (1/2*ρ*v²) increases, requiring a corresponding drop in static pressure (P) to conserve total energy.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q53',
        subject: 'Physics',
        text: 'Two spherical raindrops of radii r and 2r are falling through the air. Assuming both have reached their respective terminal velocities, what is the ratio of the terminal velocity of the first drop to the second drop (v_1 : v_2)?',
        options: [
          'A) 1 : 2',
          'B) 1 : 4',
          'C) 2 : 1',
          'D) 4 : 1'
        ],
        correctAnswer: 'B) 1 : 4',
        explanation: 'By Stokes\' Law, terminal velocity v_t is proportional to r² (v_t = 2ρg r² / 9η). Thus, the ratio of velocities is (r / 2r)² = 1/4.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q54',
        subject: 'Physics',
        text: 'Which of the following conditions must be met for a fluid flow to be considered completely ideal?',
        options: [
          'A) Compressible, viscous, and turbulent.',
          'B) Incompressible, non-viscous, and rotational.',
          'C) Incompressible, non-viscous, and steady (streamline).',
          'D) Compressible, non-viscous, and irrotational.'
        ],
        correctAnswer: 'C) Incompressible, non-viscous, and steady (streamline).',
        explanation: 'An ideal fluid is modeled as incompressible (constant density), non-viscous (zero internal friction), and moving in steady, streamline flow (laminar flow without chaos).',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q55',
        subject: 'Physics',
        text: 'A large open water tank has a small hole in its wall at a depth h below the top water surface. If the acceleration due to gravity is g, the velocity of efflux of the water emerging from the hole is independent of:',
        options: [
          'A) The depth h.',
          'B) The acceleration due to gravity g.',
          'C) The density of the liquid.',
          'D) The atmospheric pressure acting on the surface.'
        ],
        correctAnswer: 'C) The density of the liquid.',
        explanation: 'By Torricelli\'s Theorem, speed of efflux is v = sqrt(2gh). This relationship depends strictly on gravity and depth of liquid, remaining entirely independent of the fluid density.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q56',
        subject: 'Physics',
        text: 'When a high-speed cricket ball swings in the air, the physical phenomenon can be comprehensively explained by:',
        options: [
          'A) Stokes\' Law of Drag forces.',
          'B) Torricelli’s theorem of exit openings.',
          'C) Bernoulli’s principle creating pressure differences.',
          'D) Archimedes’ principle of buoyancy.'
        ],
        correctAnswer: 'C) Bernoulli’s principle creating pressure differences.',
        explanation: 'The spin of a cricket ball causes asymmetrical air drag speeds on opposite sides. By Bernoulli\'s principle, the side with faster airspeed experiences lower pressure, creating a net lift force (Magnus effect) that induces swing.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q57',
        subject: 'Physics',
        text: 'If the rate of flow of a liquid through a tube of radius r under a constant pressure difference is V, how does the rate of flow change if the radius of the tube is doubled?',
        options: [
          'A) It becomes 2V.',
          'B) It becomes 4V.',
          'C) It becomes 8V.',
          'D) It becomes 16V.'
        ],
        correctAnswer: 'D) It becomes 16V.',
        explanation: 'According to Poiseuille\'s Law, the volumetric flow rate of fluid through a cylindrical tube under a constant pressure gradient is directly proportional to the fourth power of the radius (V ∝ r⁴). Doubling the radius increases flow rate by 2⁴ = 16 times.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q58',
        subject: 'Physics',
        text: 'What is the dimension of the coefficient of viscosity (η)?',
        options: [
          'A) [ML⁻¹T⁻¹]',
          'B) [MLT⁻¹]',
          'C) [ML⁻²T⁻¹]',
          'D) [M⁻¹L T⁻²]'
        ],
        correctAnswer: 'A) [ML⁻¹T⁻¹]',
        explanation: 'From Stokes\' Law: F = 6πη r v => η = F / (6π r v). Substituting dimensions: [MLT⁻²] / ([L] * [LT⁻¹]) = [ML⁻¹T⁻¹].',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q59',
        subject: 'Physics',
        text: 'Blood flow in major human arteries can become turbulent under certain physiological conditions. This transition from steady streamline flow to turbulent flow is dictated by a dimensionless quantity known as the:',
        options: [
          'A) Bernoulli Constant',
          'B) Drag Coefficient',
          'C) Reynolds Number',
          'D) Venturi Ratio'
        ],
        correctAnswer: 'C) Reynolds Number',
        explanation: 'The Reynolds Number is a dimensionless parameter used to predict flow regimes (laminar vs turbulent) by evaluating the ratio of inertial forces to viscous forces within a fluid system.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q60',
        subject: 'Physics',
        text: 'A boat sailing on a river experiences a drag force from the water. If the velocity of the boat relative to the water doubles, the viscous drag force acting on it (assuming low speed laminar tracking) changes by a factor of:',
        options: [
          'A) Remaining the same.',
          'B) Doubling.',
          'C) Quadrupling.',
          'D) Dropping to one-half.'
        ],
        correctAnswer: 'B) Doubling.',
        explanation: 'For low-speed laminar flows, the drag force experienced by a moving body is directly proportional to its velocity (F ∝ v), according to Stokes\' law frameworks. Thus, doubling speed leads to a doubled drag force.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q61',
        subject: 'Physics',
        text: 'A particle executing Simple Harmonic Motion (SHM) passes through its mean position. At this exact point, its acceleration and velocity are:',
        options: [
          'A) Acceleration is maximum, velocity is zero.',
          'B) Acceleration is zero, velocity is maximum.',
          'C) Both acceleration and velocity are maximum.',
          'D) Both acceleration and velocity are zero.'
        ],
        correctAnswer: 'B) Acceleration is zero, velocity is maximum.',
        explanation: 'At the mean position (displacement x = 0), the restorative force and acceleration (a = -ω²x) are zero. However, all energy is kinetic, achieving maximum velocity (v = ω*x0).',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q62',
        subject: 'Physics',
        text: 'A block suspended from an ideal spring oscillates vertically with a time period T. If the spring is cut exactly into two equal halves and the same block is suspended from one of the halves, what will be the new time period of oscillation?',
        options: [
          'A) T / sqrt(2)',
          'B) sqrt(2)T',
          'C) T / 2',
          'D) 2T'
        ],
        correctAnswer: 'A) T / sqrt(2)',
        explanation: 'The spring constant k is inversely proportional to spring length (k ∝ 1/L). Cutting it in half doubles the stiffness (k\' = 2k). Since period T = 2π*sqrt(m/k), the new period is T\' = T / sqrt(2).',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q63',
        subject: 'Physics',
        text: 'For a body executing simple harmonic motion, at what displacement x (in terms of maximum amplitude x_0) will its kinetic energy be exactly equal to its potential energy?',
        options: [
          'A) x = x_0 / 2',
          'B) x = x_0 / sqrt(2)',
          'C) x = sqrt(3)x_0 / 2',
          'D) x = x_0 / 4'
        ],
        correctAnswer: 'B) x = x_0 / sqrt(2)',
        explanation: 'We equate PE and KE: 1/2*k*x² = 1/2*k*(x0² - x²) => x² = x0² - x² => 2x² = x0² => x = x0 / sqrt(2).',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q64',
        subject: 'Physics',
        text: 'A simple pendulum has a time period T on the surface of the Earth. If it is taken to a planet whose mass is double that of the Earth and whose radius is also double that of the Earth, what will be its new time period?',
        options: [
          'A) T',
          'B) sqrt(2)T',
          'C) 2T',
          'D) T / sqrt(2)'
        ],
        correctAnswer: 'B) sqrt(2)T',
        explanation: 'Gravity is g = GM/R². For the new planet, g\' = G(2M)/(2R)² = g/2. Since pendulum period T = 2π*sqrt(l/g), cutting gravity in half multiplies the period by sqrt(2).',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q65',
        subject: 'Physics',
        text: 'The phase angle θ = ωt of a rotating reference particle is found to be π/6 radians. What fraction of the total time period T has elapsed since the particle passed its starting mean position?',
        options: [
          'A) T / 4',
          'B) T / 6',
          'C) T / 12',
          'D) T / 24'
        ],
        correctAnswer: 'C) T / 12',
        explanation: 'A complete oscillation matches 2π radians over a cycle period T. A phase angle of π/6 is (π/6) / (2π) = 1/12 of a full cycle, corresponding to t = T / 12.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q66',
        subject: 'Physics',
        text: 'What type of graph is obtained when plotting the acceleration a of an object executing simple harmonic motion against its instantaneous displacement x?',
        options: [
          'A) A parabola opening upwards.',
          'B) A circle centered at the origin.',
          'C) A straight line with a negative slope passing through the origin.',
          'D) A straight line with a positive slope.'
        ],
        correctAnswer: 'C) A straight line with a negative slope passing through the origin.',
        explanation: 'In Simple Harmonic Motion, acceleration tracks displacement via a = -ω²x. This is a linear function representing a straight line with a negative slope (-ω²) passing directly through the origin.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q67',
        subject: 'Physics',
        text: 'When a damping force acts on a real-world oscillating system, what happens to the total mechanical energy and the amplitude of the system over time?',
        options: [
          'A) Energy remains constant, amplitude decreases.',
          'B) Both energy and amplitude decrease exponentially.',
          'C) Energy decreases, but amplitude remains constant.',
          'D) Both energy and amplitude increase due to resonance.'
        ],
        correctAnswer: 'B) Both energy and amplitude decrease exponentially.',
        explanation: 'Damping forces (non-conservative frictional forces) continuously dissipate mechanical energy out of the system as heat. This results in an exponential decay of both amplitude and total mechanical energy over time.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q68',
        subject: 'Physics',
        text: 'A resonance phenomenon occurs when the frequency of an external driving force is:',
        options: [
          'A) Much higher than the natural frequency of the system.',
          'B) Much lower than the natural frequency of the system.',
          'C) Equal to the natural frequency of the system.',
          'D) Completely independent of the natural frequency of the system.'
        ],
        correctAnswer: 'C) Equal to the natural frequency of the system.',
        explanation: 'Resonance is achieved when the driving frequency of an external periodic force perfectly matches the natural frequency of the system, optimizing energy transfer and resulting in maximum amplitude response.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q69',
        subject: 'Physics',
        text: 'The total energy of a particle executing simple harmonic motion with amplitude x_0 is proportional to:',
        options: [
          'A) x_0',
          'B) x_0^2',
          'C) sqrt(x_0)',
          'D) 1 / x_0^2'
        ],
        correctAnswer: 'B) x_0^2',
        explanation: 'Total mechanical energy of a harmonic oscillator is E = 1/2 * k * x0². This indicates that total energy is proportional to the square of the amplitude.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q70',
        subject: 'Physics',
        text: 'If a simple pendulum is placed inside an elevator that is accelerating vertically downwards with an acceleration equal to g/2, what happens to its time period?',
        options: [
          'A) It decreases.',
          'B) It increases.',
          'C) It drops to zero.',
          'D) It remains unchanged.'
        ],
        correctAnswer: 'B) It increases.',
        explanation: 'The effective gravity inside a downward-accelerating elevator frame is geff = g - a = g - g/2 = g/2. Since period T is inversely proportional to sqrt(geff), the lower value of gravity extends the period T.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q71',
        subject: 'Physics',
        text: 'Newton calculated the speed of sound in air assuming the process was isothermal. Laplace corrected this calculation by realizing that sound propagation through air is actually:',
        options: [
          'A) Isobaric',
          'B) Isochoric',
          'C) Adiabatic',
          'D) Isothermal but at higher temperatures'
        ],
        correctAnswer: 'C) Adiabatic',
        explanation: 'Acoustic compressions and rarefactions occur so rapidly in air that zero thermal transfer takes place with the surrounding space. Hence, the process is adiabatic, requiring the adiabatic bulk modulus (γ*P) for correct wave speed calculation.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q72',
        subject: 'Physics',
        text: 'If the absolute temperature of a gas is quadrupled (4T), what happens to the velocity of sound waves traveling through that gas?',
        options: [
          'A) It remains unchanged.',
          'B) It doubles.',
          'C) It quadruples.',
          'D) It drops to half.'
        ],
        correctAnswer: 'B) It doubles.',
        explanation: 'The speed of sound in gas is v = sqrt(γ*R*T/M), making speed proportional to the square of the absolute temperature root (v ∝ sqrt(T)). Quadrupling temperature (x4) leads to twice (x2) the speed of sound.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q73',
        subject: 'Physics',
        text: 'A stretched string fixed at both ends is vibrating in its third harmonic mode. How many nodes and antinodes are present along its length?',
        options: [
          'A) 2 nodes, 3 antinodes',
          'B) 3 nodes, 2 antinodes',
          'C) 3 nodes, 4 antinodes',
          'D) 4 nodes, 3 antinodes'
        ],
        correctAnswer: 'D) 4 nodes, 3 antinodes',
        explanation: 'In a vibrating string fixed at both ends, the n-th harmonic produces n discrete loops (antinodes = n = 3). The nodes are found at the boundary boundaries and interfaces, totaling n + 1 = 4 nodes.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q74',
        subject: 'Physics',
        text: 'Two tuning forks with frequencies of 256 Hz and 260 Hz are struck simultaneously. What is the beat frequency heard by an observer?',
        options: [
          'A) 258 Hz',
          'B) 4 Hz',
          'C) 516 Hz',
          'D) 2 Hz'
        ],
        correctAnswer: 'B) 4 Hz',
        explanation: 'Beat frequency is calculated as the absolute difference between the frequencies of the two interfering sound sources: f_beat = |f1 - f2| = 260 Hz - 256 Hz = 4 Hz.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q75',
        subject: 'Physics',
        text: 'An ambulance siren emits a sound at a frequency f. As the ambulance accelerates toward a stationary pedestrian, the frequency heard by the pedestrian will be:',
        options: [
          'A) Lower than f and constant.',
          'B) Higher than f and constant.',
          'C) Higher than f and continuously increasing.',
          'D) Lower than f and continuously decreasing.'
        ],
        correctAnswer: 'C) Higher than f and continuously increasing.',
        explanation: 'By the Doppler Effect, a vehicle moving toward an observer shifts the frequency up: f\' = f * v / (v - vs). Since the vehicle is accelerating, vs increases, causing the frequency to continuously increase.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q76',
        subject: 'Physics',
        text: 'An air column inside a pipe of length L is closed at one end. What is the fundamental wavelength (λ_1) of the standing wave produced in this pipe?',
        options: [
          'A) λ_1 = L',
          'B) λ_1 = 2L',
          'C) λ_1 = 4L',
          'D) λ_1 = L / 2'
        ],
        correctAnswer: 'C) λ_1 = 4L',
        explanation: 'A pipe closed at one end forms an acoustic node at the flat end and an antinode at the open boundary. Its simplest fundamental standing wave configuration fits a quarter-wavelength in length L, yielding λ_1 = 4L.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q77',
        subject: 'Physics',
        text: 'When a transverse wave transitions from a rare medium to a denser medium via a boundary interface, the reflected wave undergoes a phase change of:',
        options: [
          'A) 0° (No phase shift)',
          'B) 90° (π / 2 rad)',
          'C) 180° (π rad)',
          'D) 360° (2π rad)'
        ],
        correctAnswer: 'C) 180° (π rad)',
        explanation: 'When a wave reflects off a denser medium (meeting a fixed boundary interface), it undergoes phase inversion, shifting by 180 degrees (π radians).',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q78',
        subject: 'Physics',
        text: 'The velocity of sound waves in a gas is completely independent of changes in which of the following variables, provided the temperature remains constant?',
        options: [
          'A) Density of the gas medium',
          'B) Pressure of the gas medium',
          'C) Moisture/Humidity level',
          'D) Molar mass of the gas'
        ],
        correctAnswer: 'B) Pressure of the gas medium',
        explanation: 'By Boyle\'s Law, changing pressure alters gas density proportionally (P / ρ = constant) at a given temperature. This keeps acoustic speed v = sqrt(γ*P/ρ) completely constant under pressure shifts.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q79',
        subject: 'Physics',
        text: 'Which of the following wave types cannot be polarized under any physical condition?',
        options: [
          'A) Light waves from a light bulb',
          'B) Radio waves from an antenna',
          'C) Sound waves traveling through air',
          'D) X-rays used in medical imaging'
        ],
        correctAnswer: 'C) Sound waves traveling through air',
        explanation: 'Sound waves in mechanical fluid mediums are longitudinal (vibrating parallel to propagation). Since polarization requires transverse wave configurations (vibrating perpendicular to travel), sound waves cannot be polarized.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q80',
        subject: 'Physics',
        text: 'Two identical waves traveling in opposite directions along the same line superimpose to form a new wave profile. This physical phenomenon is known as a:',
        options: [
          'A) Progressive wave',
          'B) Standing (Stationary) wave',
          'C) Shock wave',
          'D) Refracted wave'
        ],
        correctAnswer: 'B) Standing (Stationary) wave',
        explanation: 'A standing or stationary wave is produced by the superposition of two wave trains of identical amplitude and frequency moving in opposite directions within the same medium.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q81',
        subject: 'Physics',
        text: 'In a Young’s Double Slit Experiment, the path difference between the two interfering light beams at a certain point on the screen is found to be equal to 5λ / 2. What will be observed at this location?',
        options: [
          'A) A bright fringe (3rd order maximum)',
          'B) A dark fringe (3rd order minimum)',
          'C) A bright fringe (5th order maximum)',
          'D) A dark fringe (2nd order minimum)'
        ],
        correctAnswer: 'B) A dark fringe (3rd order minimum)',
        explanation: 'Destructive interference occurs at odd half-wavelength differences: Δy = (m + 1/2)λ. For 5λ/2, m = 2, representing the 3rd dark fringe (m=0 is 1st minimum, m=1 is 2nd minimum, m=2 is 3rd minimum).',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q82',
        subject: 'Physics',
        text: 'Monochromatic light of wavelength λ passes through two slits separated by a distance d to form an interference pattern on a screen located at a distance L. If the entire experimental setup is submerged in water without changing any physical dimensions, the fringe width (Δy):',
        options: [
          'A) Increases.',
          'B) Decreases.',
          'C) Remains completely unchanged.',
          'D) Drops to zero.'
        ],
        correctAnswer: 'B) Decreases.',
        explanation: 'The interference fringe width is governed by Δy = λ*L / d. Submerging the setup in water reduces the wavelength of light (λ_n = λ / n). Since Δy is proportional to λ, the fringe width decreases.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q83',
        subject: 'Physics',
        text: 'When viewed in sunlight, a thin film of oil floating on water displays brilliant, multi-colored interference patterns. The primary physical reason for this color separation is:',
        options: [
          'A) Optical dispersion inside the oil.',
          'B) Variations in the film\'s thickness and light reflection phase shifts.',
          'C) Total internal reflection within the oil layer.',
          'D) Asymmetric polarization of the sunlight.'
        ],
        correctAnswer: 'B) Variations in the film\'s thickness and light reflection phase shifts.',
        explanation: 'Light reflecting off the upper (air-oil) and lower (oil-water) boundaries of the transparent film creates path differences relative to film thickness. Different colors interfere constructively at different regions.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q84',
        subject: 'Physics',
        text: 'In a Newton’s Rings experimental setup, the central spot observed in reflected light is always dark. This occurs because:',
        options: [
          'A) The glass plate absorbs all incoming light.',
          'B) The air film at the point of contact has infinite thickness.',
          'C) Light reflecting off the lower flat glass plate undergoes a 180° phase shift.',
          'D) The lens blocks light from reaching the center.'
        ],
        correctAnswer: 'C) Light reflecting off the lower flat glass plate undergoes a 180° phase shift.',
        explanation: 'At the center of contact, air film thickness is zero. However, light reflecting off the lower glass flat (refraction at a denser boundary) gains a 180° phase shift, causing destructive interference.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q85',
        subject: 'Physics',
        text: 'A diffraction grating has 500 lines ruled per millimeter of its length. What is the grating element (d) for this instrument?',
        options: [
          'A) 2.0 x 10⁻⁶ m',
          'B) 5.0 x 10⁻⁴ m',
          'C) 2.0 x 10⁻³ m',
          'D) 5.0 x 10⁻⁶ m'
        ],
        correctAnswer: 'A) 2.0 x 10⁻⁶ m',
        explanation: 'Grating element d is calculated as d = 1 / N. Since N = 500 lines/mm = 500,000 lines/meter, d = 1 / 500,000 = 2.0 * 10⁻⁶ meters.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q86',
        subject: 'Physics',
        text: 'X-ray diffraction inside crystalline solids can be modeled using Bragg’s Law. What is the correct mathematical formulation of Bragg\'s Law?',
        options: [
          'A) d * sin(θ) = m*λ',
          'B) 2d * sin(θ) = m*λ',
          'C) 2d * cos(θ) = m*λ',
          'D) d * tan(θ) = m*λ'
        ],
        correctAnswer: 'B) 2d * sin(θ) = m*λ',
        explanation: 'Bragg\'s law defines atomic reflections as constructive when the path difference between waves echoing from subsequent crystalline plates matches an integer wavelength: 2d * sin(θ) = m*λ.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q87',
        subject: 'Physics',
        text: 'The bending of light waves around the sharp edges of an obstacle or their spreading through narrow apertures is known as:',
        options: [
          'A) Refraction',
          'B) Dispersion',
          'C) Polarization',
          'D) Diffraction'
        ],
        correctAnswer: 'D) Diffraction',
        explanation: 'Diffraction refers to the physical bending and spreading of waves around barriers or openings whose sizes correspond to the wave\'s wavelength scale.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q88',
        subject: 'Physics',
        text: 'To obtain a distinct and stable interference pattern using two light sources, the sources must be completely coherent. This means they must:',
        options: [
          'A) Emit light of identical intensity only.',
          'B) Maintain a constant phase relationship over time.',
          'C) Emit white light at all times.',
          'D) Be oriented perfectly parallel to each other.'
        ],
        correctAnswer: 'B) Maintain a constant phase relationship over time.',
        explanation: 'Coherent sources maintain a constant wave phase relationship over time, preventing chaotic shifts in the fringe positions of the interference patterns.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q89',
        subject: 'Physics',
        text: 'A Michelson Interferometer utilizes a half-silvered glass plate primarily to perform which of the following tasks?',
        options: [
          'A) Total polarization of the light beam.',
          'B) Splitting the single incident wavefront into two separate amplitude beams.',
          'C) Focusing light onto the observer\'s eyepiece.',
          'D) Filtering out unwanted wavelengths.'
        ],
        correctAnswer: 'B) Splitting the single incident wavefront into two separate amplitude beams.',
        explanation: 'The beam splitter (half-silvered mirror) functions by split-reflecting and transmitting a single incoming ray into two co-dependent paths, establishing coherent amplitude-split beams.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q90',
        subject: 'Physics',
        text: 'According to Huygens\' Principle, every point on a primary propagating wavefront can be treated as:',
        options: [
          'A) A sink where light energy terminates.',
          'B) A new source of secondary spherical wavelets.',
          'C) A point of perfect polarization.',
          'D) An independent node of a standing wave.'
        ],
        correctAnswer: 'B) A new source of secondary spherical wavelets.',
        explanation: 'Huygens\' principle states that each point of a wavefront serves as an active transmitter of secondary circular wavelets, which merge to form succeeding wavefront horizons.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q91',
        subject: 'Physics',
        text: 'A simple magnifying glass has a focal length of 5 cm. If the near point distance for a normal human eye is 25 cm, what is the maximum angular magnification of this lens when the image is formed at the near point?',
        options: [
          'A) 5',
          'B) 6',
          'C) 4',
          'D) 7'
        ],
        correctAnswer: 'B) 6',
        explanation: 'Magnification at the near point is given by M = 1 + D/f. Substituting D = 25 cm and f = 5 cm, we calculate M = 1 + 25/5 = 6.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q92',
        subject: 'Physics',
        text: 'An astronomical telescope consists of an objective lens with a focal length of 100 cm and an eyepiece with a focal length of 5 cm. If the telescope is adjusted for normal relaxation viewing (image at infinity), what is the total length of the telescope barrel?',
        options: [
          'A) 95 cm',
          'B) 105 cm',
          'C) 500 cm',
          'D) 20 cm'
        ],
        correctAnswer: 'B) 105 cm',
        explanation: 'Under normal relaxation adjustment (focus at infinity), the telescope barrel length equals the sum of focal lens parameters: L = f_o + f_e = 100 cm + 5 cm = 105 cm.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q93',
        subject: 'Physics',
        text: 'What is the total angular magnification of a compound microscope if the linear magnification of its objective lens is 10 and the angular magnification of its eyepiece is 5?',
        options: [
          'A) 15',
          'B) 2',
          'C) 50',
          'D) 0.5'
        ],
        correctAnswer: 'C) 50',
        explanation: 'The net magnifying factor of compound lens setups is calculated as the product of objective and ocular magnifying limits: M = Mo * Me = 10 * 5 = 50.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q94',
        subject: 'Physics',
        text: 'The resolving power of an optical instrument, such as a telescope, is inversely proportional to the wavelength of light used and directly proportional to the aperture diameter. According to Rayleigh\'s criterion, the minimum angular separation (θ_min) is expressed as:',
        options: [
          'A) θ_min = 1.22λ / D',
          'B) θ_min = 1.22D / λ',
          'C) θ_min = λ * d / L',
          'D) θ_min = 1.22λ * D'
        ],
        correctAnswer: 'A) θ_min = 1.22λ / D',
        explanation: 'Rayleigh\'s limit defines resolution capacity around circular apertures as limiting when θ_min = 1.22 * λ / D. Smaller θ_min indicates higher resolving resolution.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q95',
        subject: 'Physics',
        text: 'In a multi-mode step-index optical fiber, light is guided down the core primarily via which of the following physical mechanisms?',
        options: [
          'A) Continuous light diffraction.',
          'B) Total Internal Reflection at the core-cladding boundary.',
          'C) Continuous linear refraction.',
          'D) Asymmetric polarization filtering.'
        ],
        correctAnswer: 'B) Total Internal Reflection at the core-cladding boundary.',
        explanation: 'Flexible wave guide fibers operate by reflecting light completely within core boundaries (n_core > n_cladding), relying on Total Internal Reflection (TIR) for low-loss transmission.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q96',
        subject: 'Physics',
        text: 'A specific optical fiber configuration features a core whose refractive index changes continuously from the center outwards, rather than having a sharp boundary step. This type of fiber is called a:',
        options: [
          'A) Step-index fiber',
          'B) Single-mode fiber',
          'C) Graded-index fiber',
          'D) Copper coaxial line'
        ],
        correctAnswer: 'C) Graded-index fiber',
        explanation: 'Graded-index fiber features a curved refractive distribution, smoothly redirecting signal rays centerward through continuous parabolic refractivity.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q97',
        subject: 'Physics',
        text: 'Signal loss during transmission through an optical fiber can be caused by scattering or absorption. This loss of signal strength over distance is called:',
        options: [
          'A) Dispersion',
          'B) Attenuation',
          'C) Diffractive spreading',
          'D) Refractive deviation'
        ],
        correctAnswer: 'B) Attenuation',
        explanation: 'Attenuation represents the progressive loss of power and signal amplitude inside propagation mediums over transit distance.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q98',
        subject: 'Physics',
        text: 'A spectrometer is an optical instrument used to analyze the composition of light sources. Which component inside a spectrometer is responsible for dispersing incoming light into its constituent spectrum?',
        options: [
          'A) The collimator tube',
          'B) The telescope eyepiece',
          'C) A diffraction grating or glass prism',
          'D) The entry slit plate'
        ],
        correctAnswer: 'C) A diffraction grating or glass prism',
        explanation: 'Prisms and diffraction gratings act as dispersion cores inside visual spectral analytic systems, spreading overlapping waves into distinct chromatic bands.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q99',
        subject: 'Physics',
        text: 'A person struggles to read a book held at a normal reading distance, but can clearly see distant signs. Which vision defect do they have, and what type of lens is required to correct it?',
        options: [
          'A) Myopia, corrected with a concave lens.',
          'B) Hyperopia, corrected with a convex lens.',
          'C) Myopia, corrected with a convex lens.',
          'D) Hyperopia, corrected with a concave lens.'
        ],
        correctAnswer: 'B) Hyperopia, corrected with a convex lens.',
        explanation: 'Hyperopia (farsightedness) blocks near convergence focused behind the retina. Convex converging lenses correct it by concentrating focusing coordinates forward onto the retina.',
        status: 'ready'
      },
      {
        id: 'ptb_p2_q100',
        subject: 'Physics',
        text: 'Why is the objective lens of an astronomical telescope designed with a large focal length and a wide aperture?',
        options: [
          'A) To minimize the total length of the telescope barrel.',
          'B) To maximize both angular magnification and light-gathering power.',
          'C) To increase the magnifying power of the eyepiece lens.',
          'D) To convert the telescope into a high-magnification microscope.'
        ],
        correctAnswer: 'B) To maximize both angular magnification and light-gathering power.',
        explanation: 'Telescope magnification corresponds to M = f_o / f_e. Increasing f_o expands angular power, while a wide diameter (aperture) gathers more photon streams and enhances wave resolution.',
        status: 'ready'
      }
    ]
  }
];
