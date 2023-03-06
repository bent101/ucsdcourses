<script>import CourseCard from "$lib/CourseCard.svelte";import CourseLink from "$lib/CourseLink.svelte";import MajorLink from "$lib/MajorLink.svelte";</script>
<h2>Lower Division</h2>
<CourseCard id="1" shortName="SE 1" longName="Introduction to Structures and Design" units="4" url="/SE#1">
	<p>Introduction to fundamentals of structures and how structures work. Overview of structural behavior and structural design process through hands-on projects. Lessons learned from structural failures. Professional ethics. Role and responsibility of structural engineers. Introduction to four structural engineering focus sequences. Program or materials fees may apply. Enrollment restricted to <MajorLink name="Structural Engineering">SE27</MajorLink> majors only.</p>

</CourseCard>
<CourseCard id="3" shortName="SE 3" longName="Graphical Communication for Engineering Design" units="4" url="/SE#3">
	<p>Use of computer graphics (CAD software) to communicate engineering designs. Includes visualization, sketching, 2D and 3D graphics standards, dimensioning, tolerance, assemblies, and prototyping/testing with light manufacturing methods. Project/system management software, i.e., building information modeling (BIM), will be introduced. Use of computer resources.</p>

	<p>Prerequisites: <CourseLink id={2541} href="/SE#1">SE 1</CourseLink></p>
</CourseCard>
<CourseCard id="7" shortName="SE 7" longName="Spatial Visualization" units="1" url="/SE#7">
	<p>Spatial visualization is the ability to manipulate 2D and 3D shapes in one’s mind. In this course, students will perform exercises that increase their spatial visualization skills. P/NP grades only. Students may not receive credit for <CourseLink id={2543} href="/SE#7">SE 7</CourseLink> and <CourseLink id={2221} href="/MAE#07">MAE 7</CourseLink>.</p>

</CourseCard>
<CourseCard id="9" shortName="SE 9" longName="Algorithms and Programming for Structural Engineering" units="4" url="/SE#9">
	<p>Introduction to the MATLAB environment. Variables and types, statements, functions, blocks, loops, and branches. Algorithm development. Functions, function handles, input and output arguments. Data encapsulation and object-oriented programming. Toolboxes and libraries. Models from physics (mechanics and thermodynamics) are used in exercises and projects.</p>

	<p>Prerequisites: <CourseLink id={4544} href="/MATH#20A">MATH 20A</CourseLink>-B.</p>
</CourseCard>
<CourseCard id="87" shortName="SE 87" longName="First-year Student Seminar" units="1" url="/SE#87">
	<p>The First-year Student Seminar Program is designed to provide new students with the opportunity to explore an intellectual topic with a faculty member in a small seminar setting. First-year student seminars are offered in all campus departments and undergraduate colleges, and topics vary from quarter to quarter.</p>

	<p>Prerequisites: open to first-year students only.</p>
</CourseCard>
<CourseCard id="99H" shortName="SE 99H" longName="Independent Study" units="1" url="/SE#99H">
	<p>Independent study or research under direction of a faculty member.</p>

	<p>Prerequisites: student must be of first year standing and a Regents Scholar. Consent of instructor or department stamp.</p>
</CourseCard>
<h2>Upper Division</h2>
<CourseCard id="101A" shortName="SE 101A" longName="Mechanics I: Statics" units="4" url="/SE#101A">
	<p>Principles of statics using vectors. Two- and three-dimensional equilibrium of statically determinate structures under discrete and distributed loading including hydrostatics; internal forces and concept of stress; free body diagrams; moment, product of inertia; analysis of trusses and beams.</p>

	<p>Prerequisites: <CourseLink id={4546} href="/MATH#20C">MATH 20C</CourseLink> and <CourseLink id={5067} href="/PHYS#2A">PHYS 2A</CourseLink>.</p>
</CourseCard>
<CourseCard id="101B" shortName="SE 101B" longName="Mechanics II: Dynamics" units="4" url="/SE#101B">
	<p>Kinematics and kinetics of particles in two- and three-dimensional motion. Newton’s equations of motion. Energy and momentum methods. Impulsive motion and impact. Systems of particles. Kinetics and kinematics of rigid bodies in 2-D. Introduction to 3-D dynamics of rigid bodies.</p>

	<p>Prerequisites: <CourseLink id={2547} href="/SE#101A">SE 101A</CourseLink> (or MAE 130A).</p>
</CourseCard>
<CourseCard id="101C" shortName="SE 101C" longName="Mechanics III: Vibrations" units="4" url="/SE#101C">
	<p>Free and forced vibrations of damped 1-DOF systems; vibrations isolation, impact and packaging problems. Analysis of discrete MDOF systems using matrix representation; normal mode of frequencies and modal matrix formulation. Lagrange’s equations. Modal superposition for analysis of continuous vibrating systems.</p>

	<p>Prerequisites: <CourseLink id={4543} href="/MATH#18">MATH 18</CourseLink> and <CourseLink id={2548} href="/SE#101B">SE 101B</CourseLink> (or MAE 130B).</p>
</CourseCard>
<CourseCard id="102" shortName="SE 102" longName="Introduction to Computing for Engineers" units="4" url="/SE#102">
	<p>Introduction to engineering computing. Interpolation, integration, differentiation. Ordinary differential equations. Nonlinear algebraic equations. Systems of linear algebraic equations. Representation of data in the computer.</p>

	<p>Prerequisites: <CourseLink id={2544} href="/SE#9">SE 9</CourseLink> (or <CourseLink id={2222} href="/MAE#08">MAE 8</CourseLink>) and <CourseLink id={2547} href="/SE#101A">SE 101A</CourseLink> (or MAE 130A).</p>
</CourseCard>
<CourseCard id="103" shortName="SE 103" longName="Conceptual Structural Design" units="4" url="/SE#103">
	<p>Introduction to structural design approaches for civil structures. Structural materials. Loads and load paths. Gravity and lateral load elements and systems. Code design fundamentals. Construction methods. Structural idealization. Hand and computer methods of analysis. Experimental methods applied through team-based projects. Program or materials fees may apply.</p>

	<p>Prerequisites: <CourseLink id={2542} href="/SE#3">SE 3</CourseLink>, <CourseLink id={2222} href="/MAE#08">MAE 8</CourseLink> or <CourseLink id={2544} href="/SE#9">SE 9</CourseLink>, <CourseLink id={2547} href="/SE#101A">SE 101A</CourseLink>, and <CourseLink id={2554} href="/SE#105">SE 105</CourseLink>.</p>
</CourseCard>
<CourseCard id="104" shortName="SE 104" longName="Structural Materials" units="4" url="/SE#104">
	<p>Properties and structures of engineering materials, including metals and alloys, ceramics, cements and concretes, wood, polymers, and composites. Elastic deformation, plastic deformation, fracture, fatigue, creep. Selection of engineering materials based on performance and cost requirements. Measurement techniques.</p>

	<p>Prerequisites: <CourseLink id={2541} href="/SE#1">SE 1</CourseLink> and <CourseLink id={2547} href="/SE#101A">SE 101A</CourseLink> or MAE 130A.</p>
</CourseCard>
<CourseCard id="104L" shortName="SE 104L" longName="Structural Materials Lab" units="1" url="/SE#104L">
	<p>Materials testing for cement and concrete, metals and alloys, polymers and composites, and wood. Materials selection and structural design to meet functional and cost requirements. Structural construction and testing. Materials measurement techniques. Use of computer resources.</p>

	<p>Prerequisites: <CourseLink id={2552} href="/SE#104">SE 104</CourseLink>.</p>
</CourseCard>
<CourseCard id="105" shortName="SE 105" longName="Structural Materials" units="5" url="/SE#105">
	<p>Lectures and labs on structural properties of engineering materials. Stress and strain. Stain measurement. Stiffness, strength, toughness, fatigue resistance, and creep. Cement and concrete, wood, aluminum alloys, steel, engineering plastics, and composite materials. Corequisite: <CourseLink id={2555} href="/SE#110A">SE 110A</CourseLink> or <CourseLink id={2256} href="/MAE#131A">MAE 131A</CourseLink>.</p>

	<p>Prerequisites: <CourseLink id={2541} href="/SE#1">SE 1</CourseLink> and <CourseLink id={2547} href="/SE#101A">SE 101A</CourseLink>.</p>
</CourseCard>
<CourseCard id="110A" shortName="SE 110A" longName="Solid Mechanics I" units="4" url="/SE#110A">
	<p>Concepts of stress and strain. Hooke’s law. Stress transformation. Axial loading of bars. Torsion of circular shafts. Torsion of thin-walled members. Pure bending of beams. Unsymmetric bending of beams. Shear stresses in beams. Shear stresses in thin-walled beams. Shear center. Differential equation of the deflection curve. Deflections and slopes of beams from integration methods. Statically determinate and indeterminate problems.</p>

	<p>Prerequisites: <CourseLink id={4547} href="/MATH#20D">MATH 20D</CourseLink> and <CourseLink id={2547} href="/SE#101A">SE 101A</CourseLink> (or MAE 130A).</p>
</CourseCard>
<CourseCard id="110B" shortName="SE 110B" longName="Solid Mechanics II" units="4" url="/SE#110B">
	<p>Advanced concepts in the mechanics of deformable bodies. Unsymmetrical bending of symmetrical and unsymmetrical sections. Bending of curved beams. Shear center and torsional analysis of open and closed sections. Stability analysis of columns, lateral buckling. Application of the theory of elasticity in rectangular coordinates.</p>

	<p>Prerequisites: grade of C– or better in <CourseLink id={2555} href="/SE#110A">SE 110A</CourseLink> (or <CourseLink id={2256} href="/MAE#131A">MAE 131A</CourseLink>). Enrollment restricted to <MajorLink name="Structural Engineering">SE27</MajorLink> majors only.</p>
</CourseCard>
<CourseCard id="115" shortName="SE 115" longName="Fluid Mechanics for Structural Engineering" units="4" url="/SE#115">
	<p>Fluid statics, hydrostatic forces; integral and differential forms of conservation equations for mass, momentum, and energy; Bernoulli equation; dimensional analysis; viscous pipe flow; external flow, boundary layers; open channel flow.</p>

	<p>Prerequisites: <CourseLink id={5067} href="/PHYS#2A">PHYS 2A</CourseLink> and <CourseLink id={4547} href="/MATH#20D">MATH 20D</CourseLink>, or consent of instructor.</p>
</CourseCard>
<CourseCard id="120" shortName="SE 120" longName="Engineering Graphics and Computer Aided Structural Design" units="4" url="/SE#120">
	<p>Engineering graphics, solid modeling, CAD applications including 2-D and 3-D transformations, 3-D viewing, wire frame and solid models, Hidden surface elimination. Program or materials fees may apply.</p>

	<p>Prerequisites: <CourseLink id={2550} href="/SE#102">SE 102</CourseLink> and <CourseLink id={2551} href="/SE#103">SE 103</CourseLink>.</p>
</CourseCard>
<CourseCard id="125" shortName="SE 125" longName="Statistics, Probability and Reliability" units="4" url="/SE#125">
	<p>Probability theory. Statistics, data analysis and inferential statistics, distributions, confidence intervals. Introduction to structural reliability and random phenomena. Applications to components and systems. Students will not receive credit for both <CourseLink id={2559} href="/SE#125">SE 125</CourseLink> and <CourseLink id={2242} href="/MAE#108">MAE 108</CourseLink>.</p>

	<p>Prerequisites: <CourseLink id={4543} href="/MATH#18">MATH 18</CourseLink> (or <CourseLink id={4549} href="/MATH#31AH">MATH 31AH</CourseLink>) and <CourseLink id={4547} href="/MATH#20D">MATH 20D</CourseLink>. Enrollment restricted to <MajorLink name="Structural Engineering">SE27</MajorLink> majors only.</p>
</CourseCard>
<CourseCard id="130A" shortName="SE 130A" longName="Structural Analysis I" units="4" url="/SE#130A">
	<p>Classical methods of analysis for statically indeterminate structures. Development of computer codes for the analysis of civil, mechanical, and aerospace structures from the matrix formulation of the classical structural theory, through the direct stiffness formulation, to production-type structural analysis programs.</p>

	<p>Prerequisites: grade of C– or better in <CourseLink id={2555} href="/SE#110A">SE 110A</CourseLink> (or <CourseLink id={2256} href="/MAE#131A">MAE 131A</CourseLink>).</p>
</CourseCard>
<CourseCard id="130B" shortName="SE 130B" longName="Structural Analysis II" units="4" url="/SE#130B">
	<p>Classical methods of analysis for statically indeterminate structures. Analysis of civil, mechanical, and aerospace structures from the matrix formulation of the classical structural theory, through the direct stiffness formulation, to production-type structural analysis programs.</p>

	<p>Prerequisites: <CourseLink id={4543} href="/MATH#18">MATH 18</CourseLink> (or <CourseLink id={4549} href="/MATH#31AH">MATH 31AH</CourseLink>) and <CourseLink id={2560} href="/SE#130A">SE 130A</CourseLink>.</p>
</CourseCard>
<CourseCard id="131A" shortName="SE 131A" longName="Finite Element Analysis" units="4" url="/SE#131A">
	<p>Development of finite element models based upon the Galerkin method. Application to static and dynamic heat conduction and stress analysis. Formulation of initial boundary value problem models, development of finite element formulas, solution methods, and error analysis and interpretation of results. Renumbered from SE 131. Students may not receive credit for <CourseLink id={2562} href="/SE#131A">SE 131A</CourseLink> and SE 131. Corequisite: <CourseLink id={2561} href="/SE#130B">SE 130B</CourseLink>.</p>

	<p>Prerequisites: <CourseLink id={4548} href="/MATH#20E">MATH 20E</CourseLink>, <CourseLink id={2542} href="/SE#3">SE 3</CourseLink>, and <CourseLink id={2556} href="/SE#110B">SE 110B</CourseLink> (or <CourseLink id={2257} href="/MAE#131B">MAE 131B</CourseLink>).</p>
</CourseCard>
<CourseCard id="131B" shortName="SE 131B" longName="Computing Projects in Structural Engineering" units="4" url="/SE#131B">
	<p>Project-based exploration of structural engineering computations. Topics include analysis of shell structures, design optimization, computational vibration analysis.</p>

	<p>Prerequisites: <CourseLink id={2562} href="/SE#131A">SE 131A</CourseLink> (or SE 131), <CourseLink id={2549} href="/SE#101C">SE 101C</CourseLink> (or MAE 130C), and <CourseLink id={2561} href="/SE#130B">SE 130B</CourseLink>.</p>
</CourseCard>
<CourseCard id="132" shortName="SE 132" longName="Machine Learning for Structural Engineering" units="4" url="/SE#132">
	<p>This course aims at introducing concepts of machine learning and its applications to structural engineering. Theory behind popular machine learning algorithms will be discussed, including supervised learning, unsupervised learning, and deep learning. Topics include regression, classification, support vector machines, clustering, tree-based methods, model selections and regularizations, cross-validation and bootstrapping, neural networks, and Python programming.</p>

	<p>Prerequisites: <CourseLink id={2544} href="/SE#9">SE 9</CourseLink> (or <CourseLink id={2222} href="/MAE#08">MAE 8</CourseLink>), <CourseLink id={2555} href="/SE#110A">SE 110A</CourseLink> (or <CourseLink id={2256} href="/MAE#131A">MAE 131A</CourseLink>), and <CourseLink id={2559} href="/SE#125">SE 125</CourseLink> (or <CourseLink id={2242} href="/MAE#108">MAE 108</CourseLink>).</p>
</CourseCard>
<CourseCard id="140A" shortName="SE 140A" longName="Design of Civil Structures I" units="4" url="/SE#140A">
	<p>Part I of multidisciplinary team experience to design, analyze, build, and test civil/geotechnical engineering components and systems considering codes, regulations, alternative design solutions, economics, sustainability, constructability, reliability, and aesthetics. Professionalism, technical communication, project management, teamwork, and ethics in engineering practice. Use of computer resources. Program or materials fees may apply.</p>

	<p>Prerequisites: <CourseLink id={2561} href="/SE#130B">SE 130B</CourseLink> and <CourseLink id={2570} href="/SE#150A">SE 150A</CourseLink> (or SE 150).</p>
</CourseCard>
<CourseCard id="140B" shortName="SE 140B" longName="Design of Civil Structures II" units="4" url="/SE#140B">
	<p>Part II of multidisciplinary team experience to design, analyze, build, and test civil/geotechnical engineering components and systems considering codes, regulations, alternative design solutions, economics, sustainability, constructability, reliability, and aesthetics. Professionalism, technical communication, project management, teamwork, and ethics in engineering practice. Use of computer resources. Program or materials fees may apply.</p>

	<p>Prerequisites: <CourseLink id={2565} href="/SE#140A">SE 140A</CourseLink>, <CourseLink id={2572} href="/SE#151A">SE 151A</CourseLink>, and <CourseLink id={2585} href="/SE#181">SE 181</CourseLink>.</p>
</CourseCard>
<CourseCard id="142" shortName="SE 142" longName="Design of Composite Structures" units="4" url="/SE#142">
	<p>Introduction to advanced composite materials and their applications. Fiber and matrix properties, micromechanics, stiffness, ply-by-ply stress, hygrothermal behavior, and failure prediction. Lab activity will involve design, analysis, fabrication, and testing of composite structure. Program or materials fees may apply.</p>

	<p>Prerequisites: <CourseLink id={2555} href="/SE#110A">SE 110A</CourseLink> (or <CourseLink id={2256} href="/MAE#131A">MAE 131A</CourseLink>) and <CourseLink id={2556} href="/SE#110B">SE 110B</CourseLink>.</p>
</CourseCard>
<CourseCard id="143A" shortName="SE 143A" longName="Aerospace Structural Design I" units="4" url="/SE#143A">
	<p>Conceptual and preliminary structural design of aircraft and space vehicles. Minimum-weight design of primary structures based upon mission requirements and configuration constraints. Multicriteria decision making. Team projects include layout, material selection, component sizing, fabrication, and cost. Oral presentations. Written reports. Use of computer resources. Program or materials fees may apply.</p>

	<p>Prerequisites: <CourseLink id={2542} href="/SE#3">SE 3</CourseLink>, <CourseLink id={2567} href="/SE#142">SE 142</CourseLink>, and <CourseLink id={2577} href="/SE#160B">SE 160B</CourseLink>.</p>
</CourseCard>
<CourseCard id="143B" shortName="SE 143B" longName="Aerospace Structural Design II" units="4" url="/SE#143B">
	<p>Detailed structural design of aircraft and space vehicles. Composite material design considerations. Multidisciplinary design optimization. Introduction to aerospace computer-aided design and analysis tools. Team projects include the analysis, fabrication, and testing of a flight vehicle component. Oral presentations. Written reports. Use of computer resources. Program or materials fees may apply.</p>

	<p>Prerequisites: <CourseLink id={2568} href="/SE#143A">SE 143A</CourseLink>.</p>
</CourseCard>
<CourseCard id="150A" shortName="SE 150A" longName="Design of Steel Structures" units="4" url="/SE#150A">
	<p>Load and resistance factor design concept and loadings for structural systems. Structural steel properties and selection. Design of tension members, compression members, beams, beam-columns, simple bolted, and welded connections.</p>

	<p>Prerequisites: <CourseLink id={2560} href="/SE#130A">SE 130A</CourseLink> and <CourseLink id={2556} href="/SE#110B">SE 110B</CourseLink>.</p>
</CourseCard>
<CourseCard id="150B" shortName="SE 150B" longName="Design of Steel Structures II" units="4" url="/SE#150B">
	<p>Theory and behavior of steel structures leading to the development of design requirements in current specifications. Topics will include design of simple and rigid connections, composite construction, advanced topics in compression and flexural members including torsion, design of plate girders, the direct analysis method, and plastic analysis. Emphasis will be placed on fundamental concepts.</p>

	<p>Prerequisites: SE 150 or <CourseLink id={2570} href="/SE#150A">SE 150A</CourseLink>.</p>
</CourseCard>
<CourseCard id="151A" shortName="SE 151A" longName="Design of Reinforced Concrete" units="4" url="/SE#151A">
	<p>Concrete and reinforcement properties. Service and ultimate limit state analysis and design. Design and detailing of structural components. Corequisite: <CourseLink id={2551} href="/SE#103">SE 103</CourseLink>.</p>

	<p>Prerequisites: <CourseLink id={2560} href="/SE#130A">SE 130A</CourseLink>.</p>
</CourseCard>
<CourseCard id="151B" shortName="SE 151B" longName="Design of Prestressed Concrete" units="4" url="/SE#151B">
	<p>Time-dependent and independent properties of concrete and reinforcing material. Concept and application of prestressed concrete. Service and ultimate limit state analysis and design of prestressed concrete structures and components. Detailing of components. Calculation of deflection and prestress losses.</p>

	<p>Prerequisites: <CourseLink id={2572} href="/SE#151A">SE 151A</CourseLink>.</p>
</CourseCard>
<CourseCard id="152" shortName="SE 152" longName="Seismic Design of Structures" units="4" url="/SE#152">
	<p>Seismic design philosophy. Ductility concepts. Lateral force resisting systems. Mechanisms of nonlinear deformation. Methods of analysis. Detailing of structural steel and reinforced concrete elements. Lessons learned from past earthquakes. Multistory building design project.</p>

	<p>Prerequisites: <CourseLink id={2561} href="/SE#130B">SE 130B</CourseLink>, SE 150, and <CourseLink id={2572} href="/SE#151A">SE 151A</CourseLink>.</p>
</CourseCard>
<CourseCard id="154" shortName="SE 154" longName="Design of Timber Structures" units="4" url="/SE#154">
	<p>Properties of wood and lumber grades. Beam design. Design of axially loaded members. Design of beam-column. Properties of plywood and structural-use panels. Design of horizontal diaphragms. Design of shear walls. Design of nailed and bolted connections.</p>

	<p>Prerequisites: <CourseLink id={2551} href="/SE#103">SE 103</CourseLink> and <CourseLink id={2560} href="/SE#130A">SE 130A</CourseLink>. Enrollment restricted to <MajorLink name="Structural Engineering">SE27</MajorLink> majors only.</p>
</CourseCard>
<CourseCard id="160A" shortName="SE 160A" longName="Aerospace Structural Mechanics I" units="4" url="/SE#160A">
	<p>Aircraft and spacecraft flight loads and operational envelopes, three-dimensional stress/strain relations, metallic and composite materials, failure theories, three-dimensional space trusses and stiffened shear panels, combined extension-bend-twist behavior of thin-walled multicell aircraft and space vehicle structures, modulus-weighted section properties, shear center.</p>

	<p>Prerequisites: <CourseLink id={2554} href="/SE#105">SE 105</CourseLink> (or <CourseLink id={2225} href="/MAE#21">MAE 21</CourseLink> or <CourseLink id={2553} href="/SE#104L">SE 104L</CourseLink>) and <CourseLink id={2548} href="/SE#101B">SE 101B</CourseLink> (or MAE 130B or <CourseLink id={2227} href="/MAE#30B">MAE 30B</CourseLink>) and <CourseLink id={2555} href="/SE#110A">SE 110A</CourseLink> (or <CourseLink id={2256} href="/MAE#131A">MAE 131A</CourseLink>).</p>
</CourseCard>
<CourseCard id="160B" shortName="SE 160B" longName="Aerospace Structural Mechanics II" units="4" url="/SE#160B">
	<p>Analysis of aerospace structures via work-energy principles and finite element analysis. Bending of metallic and laminated composite plates and shells. Static vibration and buckling analysis of simple and built-up aircraft structures. Introduction to wing divergence and flutter, fastener analysis.</p>

	<p>Prerequisites: <CourseLink id={2576} href="/SE#160A">SE 160A</CourseLink>. Enrollment restricted to <MajorLink name="Aerospace Engineering">MC25</MajorLink>, <MajorLink name="Mechanical Engineering">MC27</MajorLink>, and <MajorLink name="Structural Engineering">SE27</MajorLink> majors only.</p>
</CourseCard>
<CourseCard id="163" shortName="SE 163" longName="Nondestructive Evaluation" units="4" url="/SE#163">
	<p>Fourier signal processing, liquid penetrant, elastic wave propagation, ultrasonic testing, impact-echo, acoustic emission testing, vibrational testing, infrared thermography. May be coscheduled with <CourseLink id={2638} href="/SE#263">SE 263</CourseLink>.</p>

	<p>Prerequisites: <CourseLink id={2555} href="/SE#110A">SE 110A</CourseLink> and <CourseLink id={2556} href="/SE#110B">SE 110B</CourseLink> or consent of instructor.</p>
</CourseCard>
<CourseCard id="164" shortName="SE 164" longName="Sensors and Data Acquisition for Structural Engineering" units="4" url="/SE#164">
	<p>This course discusses theory, design, and applications of sensor technologies in the context of structural engineering and structural health monitoring. Topics include sensors and sensing mechanisms; measurement uncertainty; signal conditioning and interface circuits; data acquisition; analog/digital circuits; and emerging sensors. May be coscheduled with <CourseLink id={2639} href="/SE#264">SE 264</CourseLink>.</p>

	<p>Prerequisites: <CourseLink id={2549} href="/SE#101C">SE 101C</CourseLink> (or MAE 130C) and <CourseLink id={2555} href="/SE#110A">SE 110A</CourseLink>.</p>
</CourseCard>
<CourseCard id="165" shortName="SE 165" longName="Structural Health Monitoring" units="4" url="/SE#165">
	<p>A modern paradigm of structural health monitoring as it applies to structural and mechanical systems is presented. Concepts in data acquisition, feature extraction, data normalization, and statistical modeling will be introduced in an integrated context. MATLAB-based exercise. Term project. Use of computer resources.</p>

	<p>Prerequisites: <CourseLink id={2549} href="/SE#101C">SE 101C</CourseLink> (or MAE 130C).</p>
</CourseCard>
<CourseCard id="167" shortName="SE 167" longName="Signal Processing and Spectral Analysis for Structural Engineering" units="4" url="/SE#167">
	<p>Signal processing is widely used in engineering and physical sciences. This course discusses techniques to analyze signals (or data), particularly related to structural dynamic response focusing on time/frequency domain data analysis (Fourier transform, digital filtering, and feature extraction).</p>

	<p>Prerequisites: <CourseLink id={2549} href="/SE#101C">SE 101C</CourseLink>. Enrollment restricted to <MajorLink name="Structural Engineering">SE27</MajorLink> majors only.</p>
</CourseCard>
<CourseCard id="168" shortName="SE 168" longName="Structural System Testing and Model Correlation" units="4" url="/SE#168">
	<p>Dynamic/model testing of structures: test planning/execution, actuation, sensing, and data acquisition, signal processing, data conditioning, test troubleshooting. Methods of updating finite element structural models to correlate with dynamic test results. Model/test correlation assessment in industrial practice. Knowledge of MATLAB strongly encouraged.</p>

	<p>Prerequisites: <CourseLink id={2549} href="/SE#101C">SE 101C</CourseLink> (or MAE 130C) and <CourseLink id={2562} href="/SE#131A">SE 131A</CourseLink> (or SE 131).</p>
</CourseCard>
<CourseCard id="171" shortName="SE 171" longName="Aerospace Structures Repair" units="4" url="/SE#171">
	<p>Review methods used to repair aerospace structures. Emphasis on primary load-bearing airframe structures and analysis/design of substantiate repairs. Identification of structural/corrosion distress, fatigue cracking, damage tolerance, integrity and durability of built-up members, patching, health monitoring. Use of computer resources.</p>

	<p>Prerequisites: <CourseLink id={2555} href="/SE#110A">SE 110A</CourseLink> (or <CourseLink id={2256} href="/MAE#131A">MAE 131A</CourseLink>) and <CourseLink id={2556} href="/SE#110B">SE 110B</CourseLink> (or <CourseLink id={2257} href="/MAE#131B">MAE 131B</CourseLink>).</p>
</CourseCard>
<CourseCard id="180" shortName="SE 180" longName="Earthquake Engineering" units="4" url="/SE#180">
	<p>Elements of seismicity and seismology. Seismic hazards. Dynamic analysis of structures underground motion. Elastic and inelastic response spectra. Modal analysis, nonlinear time-history analysis. Earthquake resistant design. Seismic detailing.</p>

	<p>Prerequisites: grade of C– or better in <CourseLink id={2555} href="/SE#110A">SE 110A</CourseLink>, and <CourseLink id={2560} href="/SE#130A">SE 130A</CourseLink>. Enrollment restricted to <MajorLink name="Structural Engineering">SE27</MajorLink> majors only.</p>
</CourseCard>
<CourseCard id="181" shortName="SE 181" longName="Geotechnical Engineering" units="4" url="/SE#181">
	<p>General introduction to physical and engineering properties of soils. Soil classification and identification methods. Compaction and construction control. Total and effective stress. Permeability, seepage, and consolidation phenomena. Shear strength of sand and clay.</p>

	<p>Prerequisites: grade of C– or better in <CourseLink id={2555} href="/SE#110A">SE 110A</CourseLink> or <CourseLink id={2256} href="/MAE#131A">MAE 131A</CourseLink>. Enrollment restricted to <MajorLink name="Structural Engineering">SE27</MajorLink> majors only.</p>
</CourseCard>
<CourseCard id="182" shortName="SE 182" longName="Foundation Engineering" units="4" url="/SE#182">
	<p>Application of soil mechanics to the analysis, design, and construction of foundations for structures. Soil exploration, sampling, and in situ testing techniques. Stress distribution and settlement of structures. Bearing capacities of shallow foundations and effects on structural design. Analysis of axial and lateral capacity of deep foundations, including drilled piers and driven piles.</p>

	<p>Prerequisites: <CourseLink id={2585} href="/SE#181">SE 181</CourseLink>. Enrollment restricted to <MajorLink name="Structural Engineering">SE27</MajorLink> majors only.</p>
</CourseCard>
<CourseCard id="184" shortName="SE 184" longName="Ground Improvement" units="4" url="/SE#184">
	<p>Concepts underpinning mechanical, hydraulic, chemical and inclusion-based methods of ground improvement will be discussed. Students will be able to understand the advantages, disadvantages and limitations of the various methods; and develop a conceptual design for the most appropriate improvement strategy.</p>

	<p>Prerequisites: <CourseLink id={2585} href="/SE#181">SE 181</CourseLink>.</p>
</CourseCard>
<CourseCard id="192" shortName="SE 192" longName="Senior Seminar" units="1" url="/SE#192">
	<p>The Senior Seminar is designed to allow senior undergraduates to meet with faculty members to explore an intellectual topic in structural engineering. Topics will vary from quarter to quarter. Enrollment is limited to twenty students with preference given to seniors.</p>

	<p>Prerequisites: SE major. Department stamp and/or consent of instructor.</p>
</CourseCard>
<CourseCard id="195" shortName="SE 195" longName="Teaching" units="2–4" url="/SE#195">
	<p>Teaching and tutorial assistance in a SE course under supervision of instructor. Not more than four units may be used to satisfy graduation requirements. (P/NP grades only.)</p>

	<p>Prerequisites: B average in major, upper-division standing, and consent of department chair. Department stamp required.</p>
</CourseCard>
<CourseCard id="197" shortName="SE 197" longName="Engineering Internship" units="1–4" url="/SE#197">
	<p>An enrichment program, available to a limited number of undergraduate students, which provides work experience with industry, government offices, etc., under the supervision of a faculty member and industrial supervisor. Coordination of the Engineering Internship is conducted through UC San Diego’s Academic Internship Program.</p>

	<p>Prerequisites: completion of ninety units with a 2.5 GPA and consent of department chair. Department stamp required.</p>
</CourseCard>
<CourseCard id="198" shortName="SE 198" longName="Directed Study Group" units="4" url="/SE#198">
	<p>Directed group study, on a topic or in a field not included in the regular department curriculum, by special arrangement with a faculty member. (P/NP grades only.)</p>

	<p>Prerequisites: consent of instructor or department stamp.</p>
</CourseCard>
<CourseCard id="199" shortName="SE 199" longName="Independent Study" units="1–4" url="/SE#199">
	<p>Independent reading or research on a problem by special arrangement with a faculty member. (P/NP grades only.)</p>

	<p>Prerequisites: consent of instructor or department stamp.</p>
</CourseCard>
<h2>Graduate</h2>
<CourseCard id="200" shortName="SE 200" longName="Applied Mathematics in Structural Engineering" units="4" url="/SE#200">
	<p>This course is designed to give beginning students the basic preparation in mathematical methods required for graduate Structural Engineering courses. Topics include linear algebra; systems of ordinary differential equations; diffusion and wave propagation problems; integral transforms; and calculus of variations.</p>

	<p>Prerequisites: graduate standing or approval of instructor.</p>
</CourseCard>
<CourseCard id="201A" shortName="SE 201A" longName="Advanced Structural Analysis" units="4" url="/SE#201A">
	<p>Application of advanced analytical concepts to structural engineering problems. Analysis of frame structures using matrix methods and introduction to the finite element method. Displacement-based and force-based beam element formulations. Development of computer programs for structural analysis. Use of computer resources.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="201B" shortName="SE 201B" longName="Nonlinear Structural Analysis" units="4" url="/SE#201B">
	<p>The course emphasizes the principles behind modern nonlinear structural analysis software. It deals with the theory, computer implementation, and applications of methods of material and geometric nonlinear analysis. Emphasis is on 2D and 3D frame structures modeled using 1D (beam-column) elements. Use of computer resources.</p>

	<p>Prerequisites: <CourseLink id={2594} href="/SE#201A">SE 201A</CourseLink> or equivalent, or consent of instructor.</p>
</CourseCard>
<CourseCard id="202" shortName="SE 202" longName="Structural Stability" units="4" url="/SE#202">
	<p>Static, dynamic, and energy-based techniques and predicting elastic stability. Linear and nonlinear analysis of classical and shear deformable beams and plates. Ritz, Galerkin, and finite element approaches for frames and reinforced shells. Nonconservative aerodynamic (divergence flutter) and follower forces. Recommended preparation: <CourseLink id={2547} href="/SE#101A">SE 101A</CourseLink>-C and <CourseLink id={2555} href="/SE#110A">SE 110A</CourseLink> or equivalent background in solid mechanics and structural dynamics.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="203" shortName="SE 203" longName="Structural Dynamics" units="4" url="/SE#203">
	<p>Response of discrete linear structural systems to harmonic, periodic and transient excitations. Lagrangian mechanics. Linearization of the equations of motion. Free and forced vibrations of multi degree-of-freedom structures. Normal mode, frequency response and numerical methods. Continuous systems.</p>

	<p>Prerequisites: graduate standing or consent of instructor.</p>
</CourseCard>
<CourseCard id="204" shortName="SE 204" longName="Advanced Structural Dynamics" units="4" url="/SE#204">
	<p>Free- and forced-vibration of continuous systems such as axial and torsional vibrations of bars and transverse vibrations of various beams, membranes, and plates. Euler-Lagrange formulation using variational calculus. Rayleigh-Ritz method for approximation. Applications in vibration suppression/isolation.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="205" shortName="SE 205" longName="Nonlinear Mechanical Vibrations" units="4" url="/SE#205">
	<p>Advanced analytical techniques to understand nonlinearity in mechanical vibration. Phase plane analysis instability, and bifurcations. Application in nonlinear structural resonance. Introduction to chaotic dynamics, advanced time series analysis, and using chaotic dynamics in applications such as structural damage assessment.</p>

	<p>Prerequisites: <CourseLink id={2597} href="/SE#203">SE 203</CourseLink> or consent of instructor, graduate standing.</p>
</CourseCard>
<CourseCard id="206" shortName="SE 206" longName="Random Vibrations" units="4" url="/SE#206">
	<p>Introduction to probability theory and random processes. Dynamic analysis of linear structural systems subjected to stationary and nonstationary random excitations. Reliability studies related to first excursion and fatigue failures. Applications in earthquake engineering, offshore engineering, wind engineering, and aerospace engineering. Use of computer resources. Recommended preparation: basic knowledge of probability theory (<CourseLink id={2559} href="/SE#125">SE 125</CourseLink> or equivalent).</p>

	<p>Prerequisites: <CourseLink id={2597} href="/SE#203">SE 203</CourseLink>, graduate standing.</p>
</CourseCard>
<CourseCard id="207" shortName="SE 207" longName="Topics in Structural Engineering" units="4" url="/SE#207">
	<p>A course to be given at the discretion of the faculty in which topics of current interest in structural engineering will be presented.</p>

</CourseCard>
<CourseCard id="211" shortName="SE 211" longName="Advanced Structural Concrete" units="4" url="/SE#211">
	<p>Properties of reinforcing steels; concrete technology; creep, shrinkage and relaxation; Mohr-Coulomb failure criteria for concrete; confinement, moment curvature and force-displacement responses; plastic design; code compliant seismic design philosophy; code compliant seismic design of structural walls. Use of computer resources. Recommended preparation: <CourseLink id={2572} href="/SE#151A">SE 151A</CourseLink> and <CourseLink id={2573} href="/SE#151B">SE 151B</CourseLink> or equivalent background in basic RC/PC design.</p>

	<p>Prerequisites: department approval or consent of instructor.</p>
</CourseCard>
<CourseCard id="212" shortName="SE 212" longName="Advanced Structural Steel Design" units="4" url="/SE#212">
	<p>Load and Resistance Factor Design (LRFD) philosophy. Behavior and design of steel elements for global and local buckling. Background of seismic codes. Ductility requirements and capability design concept. Seismic design of steel moment frames and braced frames. Recommended preparation: <CourseLink id={2560} href="/SE#130A">SE 130A</CourseLink> and <CourseLink id={2570} href="/SE#150A">SE 150A</CourseLink>, or equivalent course, or consent of instructor.</p>

</CourseCard>
<CourseCard id="213" shortName="SE 213" longName="Bridge Design" units="4" url="/SE#213">
	<p>Design and analysis of bridge structures, construction methods, load conditions. Load paths and distribution of dead and live loads. Service, strength, and extreme event limit states and other load and resistance factor design (LRFD) principles. Design of prestressed concrete bridges. Special problems in analysis—concrete box girders, curved and skewed bridges, environmental and seismic loads. Conceptual/preliminary bridge design project. Recommended preparation: <CourseLink id={2572} href="/SE#151A">SE 151A</CourseLink>-B, <CourseLink id={2594} href="/SE#201A">SE 201A</CourseLink>, <CourseLink id={2602} href="/SE#211">SE 211</CourseLink>, <CourseLink id={2610} href="/SE#223">SE 223</CourseLink>, or equivalent courses.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="214" shortName="SE 214" longName="Masonry Structures" units="4" url="/SE#214">
	<p>Analysis and design of unreinforced and reinforced masonry structure using advanced analytical techniques and design philosophies. Material properties, stability, and buckling of unreinforced masonry. Flexural strength, shear strength, stiffness, and ductility of reinforced masonry elements. Design for seismic loads.</p>

	<p>Prerequisites: <CourseLink id={2572} href="/SE#151A">SE 151A</CourseLink>, B, or equivalent basic reinforced concrete course, or consent of instructor, graduate standing.</p>
</CourseCard>
<CourseCard id="215" shortName="SE 215" longName="Cable Structures" units="4" url="/SE#215">
	<p>The course deals with cable structures from a structural mechanics point of view. The theoretical and practical aspects of the application of cables to moorings, guyed structures, suspension bridges, cable-stayed bridges, and suspended membranes are discussed.</p>

	<p>Prerequisites: graduate standing or consent of instructor.</p>
</CourseCard>
<CourseCard id="220" shortName="SE 220" longName="Seismic Isolation and Energy Dissipation" units="4" url="/SE#220">
	<p>Concepts, advantages, and limitations of seismic isolation techniques; fundamentals of dynamic response under seismic excitation; spectral analysis; damping; energy approach; application to buildings and structures.</p>

	<p>Prerequisites: <CourseLink id={2608} href="/SE#221">SE 221</CourseLink> or consent of instructor.</p>
</CourseCard>
<CourseCard id="221" shortName="SE 221" longName="Earthquake Engineering" units="4" url="/SE#221">
	<p>Introduction to plate tectonics and seismology. Rupture mechanism, measures of magnitude and intensity, earthquake occurrence and relation to geologic, tectonic processes. Probabilistic seismic hazard analysis. Strong earthquake ground motion; site effects on ground motion; structural response; soil-structure interaction; design criteria; code requirements. Use of computer resources.</p>

	<p>Prerequisites: <CourseLink id={2594} href="/SE#201A">SE 201A</CourseLink> or <CourseLink id={2597} href="/SE#203">SE 203</CourseLink>, graduate standing.</p>
</CourseCard>
<CourseCard id="222" shortName="SE 222" longName="Geotechnical Earthquake Engineering" units="4" url="/SE#222">
	<p>Influence of soil conditions on ground motion characteristics; dynamic behavior of soils, computation of ground response using wave propagation analysis and finite element analysis; evaluation and mitigation of soil liquefaction; soil-structure interaction; lateral pressures on earth retaining structures; analysis of slope stability. Recommended preparation: <CourseLink id={2585} href="/SE#181">SE 181</CourseLink> or equivalent.</p>

	<p>Prerequisites: department approval and graduate standing.</p>
</CourseCard>
<CourseCard id="223" shortName="SE 223" longName="Advanced Seismic Design of Structures" units="4" url="/SE#223">
	<p>Modal analysis. Nonlinear response spectra. Performance based seismic design. Nonlinear time history analyses. Capacity design. Structural walls. Coupled walls. Rocking walls. Base isolation. Recommended preparation: grade of B+ or higher in <CourseLink id={2602} href="/SE#211">SE 211</CourseLink> and <CourseLink id={2595} href="/SE#201B">SE 201B</CourseLink>.</p>

	<p>Prerequisites: department approval and graduate standing.</p>
</CourseCard>
<CourseCard id="224" shortName="SE 224" longName="Structural Reliability and Risk Analysis" units="4" url="/SE#224">
	<p>Review of probability theory and random processes. Fundamentals of structural reliability theory. First- and second-order, and simulation methods of reliability analysis. Structural component and system reliability. Reliability sensitivity measures. Bayesian reliability analysis methods. Bases for probabilistic design codes. Use of computer resources. Recommended preparation: basic knowledge of probability theory (e.g., <CourseLink id={2559} href="/SE#125">SE 125</CourseLink>).</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="226" shortName="SE 226" longName="Geotechnical Groundwater Engineering" units="4" url="/SE#226">
	<p>This course will treat quantitative aspects of the flow of uncontaminated groundwater as it influences the practice of geotechnical engineering. We will cover flow through porous media, generalized Darcy’s law, groundwater modeling, confined and unconfined systems, well hydraulics, land subsidence, and construction dewatering.</p>

	<p>Prerequisites: <CourseLink id={2617} href="/SE#241">SE 241</CourseLink> or consent of instructor, graduate standing.</p>
</CourseCard>
<CourseCard id="227" shortName="SE 227" longName="Seismic Design and Performance of Nonstructural Components and Systems" units="4" url="/SE#227">
	<p>This course provides students with an understanding of the design and performance of nonstructural components and systems (NCSs) when subjected to earthquake loads. Specifically, this course will cover 1) classification and sources of damage, 2) case histories, 3) experimental advancements, 4) methods in practice (force- and displacement-based), 5) methods of analysis, 6) anchorage design, and 7) protection of NCSs. Corequisite: <CourseLink id={2597} href="/SE#203">SE 203</CourseLink>.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="233" shortName="SE 233" longName="Computational Techniques in Finite Elements" units="4" url="/SE#233">
	<p>Cross-listed with <CourseLink id={2331} href="/MAE#235">MAE 235</CourseLink>. Practical application of the finite element method to problems in solid mechanics. Elements of theory are presented as needed. Covered are static and dynamic heat transfer and stress analysis. Basic processing, solution methods, and postprocessing are practiced with commercial finite element software. Students may not receive credit for <CourseLink id={2614} href="/SE#233">SE 233</CourseLink> and <CourseLink id={2331} href="/MAE#235">MAE 235</CourseLink>.</p>

</CourseCard>
<CourseCard id="235" shortName="SE 235" longName="Wave Propagation in Elastic Media" units="4" url="/SE#235">
	<p>Wave propagation in elastic media with emphasis on waves in unbound media and on uniform and layered half-spaces. Fundamental aspects of elastodynamics. Application to strong-motion seismology, earthquake engineering, dynamics of foundations, computational wave propagation, and nondestructive evaluations.</p>

	<p>Prerequisites: graduate standing or consent of instructor.</p>
</CourseCard>
<CourseCard id="236" shortName="SE 236" longName="Wave Propagation in Continuous Structural Elements" units="4" url="/SE#236">
	<p>Propagation of elastic waves in thin structural elements such as strings, rods, beams, membranes, plates, and shells. An approximate strength-of-materials approach is used to consider propagation of elastic waves in these elements and obtain the dynamic response to transient loads.</p>

	<p>Prerequisites: graduate standing or consent of instructor.</p>
</CourseCard>
<CourseCard id="241" shortName="SE 241" longName="Advanced Soil Mechanics" units="4" url="/SE#241">
	<p>Advanced treatment of topics in soil mechanics, including state of stress, pore pressure, consolidation and settlement analysis, shear strength of cohesionless and cohesive soils, mechanisms of ground improvement, and slope stability analysis. Concepts in course reinforced by laboratory experiments.</p>

</CourseCard>
<CourseCard id="242" shortName="SE 242" longName="Advanced Foundation Engineering" units="4" url="/SE#242">
	<p>Application of soil mechanics to the analysis, design, and construction of foundations for structures. Soil exploration, sampling, and in-situ testing techniques. Stress distribution and settlement of structures. Bearing capacities of shallow foundations and effects on structural design. Analysis of axial and lateral capacity of deep foundations, including drilled piers and driven piles.</p>

	<p>Prerequisites: graduate standing or consent of instructor.</p>
</CourseCard>
<CourseCard id="243" shortName="SE 243" longName="Soil-Structure Interaction" units="4" url="/SE#243">
	<p>Advanced treatment of the dynamic interaction between soils and structures. Dynamic response of shallow and embedded foundations. Kinematic and inertial interaction. General computational and approximate analytical methods of analysis.</p>

	<p>Prerequisites: <CourseLink id={2593} href="/SE#200">SE 200</CourseLink> and <CourseLink id={2597} href="/SE#203">SE 203</CourseLink>, graduate standing.</p>
</CourseCard>
<CourseCard id="244" shortName="SE 244" longName="Numerical Methods in Geomechanics" units="4" url="/SE#244">
	<p>Application of finite element method to static and dynamic analysis of geotechnical structures. One-, 2-, and 3-D static and seismic response of earth structures/slopes/Foundation systems. Pore-pressure generation/effects during cycle loading. System identification using strong motion downhole-array data. Use of computer resources required.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="246" shortName="SE 246" longName="Unsaturated Soil Mechanics" units="4" url="/SE#246">
	<p>This course covers the hydraulic and mechanical behavior of unsaturated soils. Topics include soil-air-water interactions, measurement of hydraulic properties, water flow analysis, effective stress theory, and elasto-plastic constitutive modeling. Applications to foundation engineering, slope stability, earth dams, and geoenvironmental engineering are presented.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="247" shortName="SE 247" longName="Ground Improvement" units="4" url="/SE#247">
	<p>Concepts underpinning mechanical, hydraulic, chemical and inclusion-based methods of ground improvement will be discussed. Students will be able to understand the advantages, disadvantages and limitations of the various methods; and develop a conceptual design for the most appropriate improvement strategy. Recommended Preparation: <CourseLink id={2585} href="/SE#181">SE 181</CourseLink> or equivalent background in the physics and engineering properties of soil.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="248" shortName="SE 248" longName="Engineering Properties of Soils" units="4" url="/SE#248">
	<p>Experimental/constitutive modeling perspectives on mechanical, hydraulic, thermal behavior of dry and saturated soils. Experimental techniques and methodologies presented; students will be able to perform key tests. Behavior of saturated sands and clays described based on key studies. Calibration of constitutive models for stress-strain behavior of soils, including hyperbolic, Mohr-Coulomb/Cam-Clay models. Modification of these models to consider thermal effects.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="249" shortName="SE 249" longName="Rock Mechanics and Engineering" units="4" url="/SE#249">
	<p>Origins of rock, intact rock stress-strain behavior and testing, theory of poroelasticity, fracture behavior and permeability, elastic description of orthotropic and transversely isotropic rock mass. Engineering topics include excavations, foundations, stresses around the circular hole in rock, principles of hydraulic fracturing.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="250" shortName="SE 250" longName="Stability of Earth Slopes and Retaining Walls" units="4" url="/SE#250">
	<p>Fundamental and advanced concepts of stability analysis for earth slopes and retaining walls with soil backfill. Topics: shear strength, effective/total stress analysis, infinite/finite slopes, reinforced soil slopes, lateral earth pressure, retaining wall design and reinforced soil retaining walls. Recommended preparation: <CourseLink id={2585} href="/SE#181">SE 181</CourseLink> or equivalent background.</p>

	<p>Prerequisites: department approval and graduate standing.</p>
</CourseCard>
<CourseCard id="251A" shortName="SE 251A" longName="Processing of Polymers and Composites" units="4" url="/SE#251A">
	<p>Introduction to processing and fabrication methods of polymers and composite materials. Processing techniques; facilities and equipment; material-processing-microstructure interaction; materials selection; form and quality control. Extrusion; injection molding; blow molding; compression molding; thermoforming; casting; foaming. Wet layup; sprayup; autoclave cure, SMC; RTM; resin infusion; winding and fiber placement; pultrusion. Process induced defects and environmental considerations. Cross-listed with <CourseLink id={4530} href="/MATS#261A">MATS 261A</CourseLink>.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="251B" shortName="SE 251B" longName="Mechanical Behaviors of Polymers and Composites" units="4" url="/SE#251B">
	<p>Material science-oriented course on polymers and composites. Mechanical properties of polymers; micromechanisms of elastic and plastic deformations, fracture, and fatigue of polymers and composites. Cross-listed with <CourseLink id={4531} href="/MATS#261B">MATS 261B</CourseLink>.</p>

	<p>Prerequisites: graduate standing required.</p>
</CourseCard>
<CourseCard id="252" shortName="SE 252" longName="Experimental Mechanics and NDE" units="4" url="/SE#252">
	<p>Requirements for strain measurements, electrical resistance strain gages, fiberoptic strain gages, wave propagation, ultrasonic testing, impact-echo, acoustic emission, infrared thermography, vibrational testing. Applications to materials characterization, defect detection, and health monitoring of structural components. Recommended preparation: <CourseLink id={2547} href="/SE#101A">SE 101A</CourseLink>, <CourseLink id={2555} href="/SE#110A">SE 110A</CourseLink> or <CourseLink id={2256} href="/MAE#131A">MAE 131A</CourseLink>, and <CourseLink id={2556} href="/SE#110B">SE 110B</CourseLink> or <CourseLink id={2257} href="/MAE#131B">MAE 131B</CourseLink>.</p>

	<p>Prerequisites: department approval required, graduate standing.</p>
</CourseCard>
<CourseCard id="253A" shortName="SE 253A" longName="Mechanics and Design of Composite Structures" units="4" url="/SE#253A">
	<p>Graduate-level introduction to advanced composite materials and their applications. Fiber and matrix properties, 3D properties, stress-strain relationships, micromechanics, stiffness, ply-by-ply stress, classical laminated plate theory, hygrothermal/CTE behavior, and failure prediction. Lab activity will involve composite fabrication methods and design, analysis, build, and testing of composite structure. May be coscheduled with <CourseLink id={2567} href="/SE#142">SE 142</CourseLink>. Program or materials fees may apply.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="253B" shortName="SE 253B" longName="Mechanics and Design of Composite Structures II" units="4" url="/SE#253B">
	<p>Advanced topics, with prerequisite being <CourseLink id={2629} href="/SE#253A">SE 253A</CourseLink>, or equivalent. Macro- and micro-material modeling, classical and shear deformable laminate beam and plate theories developed via energy principles, Ritz, Galerkin, and Finite element based solutions, advanced failure theories, fracture, holes/notches and hole-size effect, interlaminar stresses, free-edge problems, impact, damage tolerance, fatigue, elastic tailoring, thermally stabile/zero CTE structures, etc.</p>

	<p>Prerequisites: <CourseLink id={2629} href="/SE#253A">SE 253A</CourseLink> or equivalent, graduate standing.</p>
</CourseCard>
<CourseCard id="253C" shortName="SE 253C" longName="Mechanics of Laminated Anisotropy Plates and Shells" units="4" url="/SE#253C">
	<p>Static/dynamic/elastic stability of laminated anisotropic plates and cylindrical shells. Theories: thin-plate (classical lamination theory), first-and third- order shear-deformable (Reissner-Mindlin and Reddy) thick plates, and refined layer-wise theories. Solution methods: exact, approximate (Ritz, Galerkin) and finite element method. Additional topics: sandwich construction, elastic couplings, thermal response, shear factor determination, fiber/interlaminar stress recovery, strength/safety.</p>

	<p>Prerequisites: <CourseLink id={2630} href="/SE#253B">SE 253B</CourseLink>; graduate standing or consent of instructor.</p>
</CourseCard>
<CourseCard id="254" shortName="SE 254" longName="FRPs in Civil Structures" units="4" url="/SE#254">
	<p>Strengthening of existing reinforced concrete structures with fiber reinforced composites. Mechanics of Fiber Reinforced Plastic lamina, bond strength of FRP-to-concrete joints, shear and flexural strengthening of beams and walls, increased strength and ductility of axially loaded columns, and seismic retrofit of columns. Use of computer resources.</p>

	<p>Prerequisites: <CourseLink id={2629} href="/SE#253A">SE 253A</CourseLink>, graduate standing.</p>
</CourseCard>
<CourseCard id="255" shortName="SE 255" longName="Textile Composite Structures" units="4" url="/SE#255">
	<p>Introduction to textile structure and behavior, mechanics of yarns and fabrics as relevant to structural composites and geotechnical applications. Mechanics of textiles and fabric-based composites. Applications in fiber reinforced composites, coated textile structures, geotextiles.</p>

</CourseCard>
<CourseCard id="260A" shortName="SE 260A" longName="Aerospace Structural Mechanics I" units="4" url="/SE#260A">
	<p>Aircraft and spacecraft flight loads and operational envelopes, three-dimensional stress/strain relations, metallic and composite materials, failure theories, three-dimensional space trusses and stiffened shear panels, combined extension-bend-twist behavior of thin-walled multicell aircraft and space vehicle structures, modulus-weighted section properties, shear center.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="260B" shortName="SE 260B" longName="Aerospace Structural Mechanics II" units="4" url="/SE#260B">
	<p>Analysis of aerospace structures via work-energy principles and finite element analysis. Bending of metallic and laminated composite plates and shells. Static vibration and buckling analysis of simple and built-up aircraft structures. Introduction to wing divergence and flutter, fastener analysis.</p>

	<p>Prerequisites: <CourseLink id={2634} href="/SE#260A">SE 260A</CourseLink>, graduate standing.</p>
</CourseCard>
<CourseCard id="261" shortName="SE 261" longName="Aerospace Engineering Design" units="4" url="/SE#261">
	<p>Advanced topics in the design of weight-critical aerospace structures. Topics include static, dynamic, and environmental load definitions; metallics and polymeric composite material selection; semimonocoque analysis techniques; and bolted/bonded connections. Design procedures for sizing the structural components of aircraft and spacecraft will be reviewed.</p>

</CourseCard>
<CourseCard id="262" shortName="SE 262" longName="Aerospace Structures Repair" units="4" url="/SE#262">
	<p>Review methods used to repair aerospace structures. Emphasis on primary load-bearing airframe structures and analysis/design of substantiate repairs. Identification of structural/corrosion distress, fatigue cracking, damage tolerance, integrity and durability of built-up members, patching, health monitoring. Use of computer resources.</p>

	<p>Prerequisites: graduate standing. Restricted to SE and MAE graduate students (major codes SE75, SE76, SE77, SE78, SE79, SE80, SE81, SE82, MC75, MC76, MC78, MC80, MC81, MC82, MC83, MC84, MC85, MC86, MC87, MC88).</p>
</CourseCard>
<CourseCard id="263" shortName="SE 263" longName="Nondestructive Evaluation" units="4" url="/SE#263">
	<p>Fourier signal processing, liquid penetrant, elastic wave propagation, ultrasonic testing, impact-echo, acoustic emission testing, vibrational testing, infrared thermography. May be coscheduled with <CourseLink id={2578} href="/SE#163">SE 163</CourseLink>. Recommended Preparation: undergraduate degree in structural, civil, mechanical, or aerospace engineering.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="264" shortName="SE 264" longName="Sensors and Data Acquisition for Structural Engineering" units="4" url="/SE#264">
	<p>This course discusses theory, design, and applications of sensor technologies in the context of structural engineering and structural health monitoring. Topics include sensors and sensing mechanisms; measurement uncertainty; signal conditioning and interface circuits; data acquisition; analog/digital circuits; and emerging sensors. May be coscheduled with <CourseLink id={2579} href="/SE#164">SE 164</CourseLink>.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="265" shortName="SE 265" longName="Structural Health Monitoring" units="4" url="/SE#265">
	<p>A modern paradigm of structural health monitoring as it applies to structural and mechanical systems is presented. Concepts in data acquisition, feature extraction, data normalization, and statistical modeling will be introduced in an integrated context. MATLAB-based exercises. Term project.</p>

	<p>Prerequisites: graduate student, undergraduate vibrations or structural dynamics course.</p>
</CourseCard>
<CourseCard id="266" shortName="SE 266" longName="Smart and Multifunctional Materials" units="4" url="/SE#266">
	<p>This course examines the properties, physics, mechanisms, and design of smart and multifunctional materials; data acquisition and operating principles of sensor technologies; smart materials (piezoresistive, piezoelectric, magnetorheological, and shape memory materials); nanotechnology-enabled multifunctional materials; and applications for structural health monitoring. Use of computer resources.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="267A" shortName="SE 267A" longName="Signal Processing and Spectral Analysis for Structural Engineering" units="4" url="/SE#267A">
	<p>Signal processing is widely used in engineering and physical sciences. This course discusses techniques to analyze signals (or data), particularly related to structural dynamic response focusing on time/frequency domain data analyses (Fourier transform, digital filtering, and feature extraction). May be coscheduled with <CourseLink id={2581} href="/SE#167">SE 167</CourseLink>.</p>

	<p>Prerequisites: graduate standing. Restricted to major codes SE75, SE77, SE80, and SE81.</p>
</CourseCard>
<CourseCard id="268" shortName="SE 268" longName="Structural System Testing and Model Correlation" units="4" url="/SE#268">
	<p>Dynamic/model testing of structures: test planning/execution, actuation, sensing, and data acquisition, signal processing, data conditioning, test troubleshooting. Methods of updating finite element structural models to correlate with dynamic test results. Model/test correlation assessment in industrial practice. May be coscheduled with <CourseLink id={2582} href="/SE#168">SE 168</CourseLink>. Recommended preparation: vibrations, finite element analysis, and knowledge of MATLAB.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="269" shortName="SE 269" longName="Verification and Validation of Computational Models" units="4" url="/SE#269">
	<p>This course covers methods to verify and validate numerical simulations, including the analysis of verification tests, asymptotic convergence of solutions, validation metrics for test-analysis correlation, global sensitivity analysis, propagation of uncertainty through numerical models, and model calibration.</p>

	<p>Prerequisites: department approval required, graduate standing.</p>
</CourseCard>
<CourseCard id="270" shortName="SE 270" longName="Fracture Mechanics of Materials and Structures" units="4" url="/SE#270">
	<p>This course covers topics in fracture mechanics, including theoretical strength; stress concentration; strain energy release rate; linear and nonlinear fracture mechanics: stress singularity, fracture modes, crack tip plastic zone, Dugdale model, R-curve, elastic-plastic fracture mechanics, the J-integral; experimental techniques; and special topics.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="271" shortName="SE 271" longName="Solid Mechanics for Structural and Aerospace Engineering" units="4" url="/SE#271">
	<p>Application of principles of solid mechanics to structural components and systems, description of stresses, strains, and deformation. Use of conservation equations and principle of minimum potential energy. Development of constitutive equations for metallic cementitious and polymeric materials.</p>

	<p>Prerequisites: <CourseLink id={2555} href="/SE#110A">SE 110A</CourseLink> or consent of instructor.</p>
</CourseCard>
<CourseCard id="272" shortName="SE 272" longName="Theory of Elasticity" units="4" url="/SE#272">
	<p>Development, formulation, and application of field equations of elasticity and variational principles for structural applications in civil and aerospace area. Use of plane stress and plane strain formulation, solution of typical boundary value problems.</p>

	<p>Prerequisites: <CourseLink id={2646} href="/SE#271">SE 271</CourseLink> or consent of instructor.</p>
</CourseCard>
<CourseCard id="273" shortName="SE 273" longName="Inelasticity" units="4" url="/SE#273">
	<p>Overview of inelastic behavior of materials. Models of plasticity, viscoplasticity, viscoelasticity. Micromechanics and modeling of damage. Fatigue phenomena. Fracture mechanics. Processes and models of the failure of materials. Students may not receive credit for <CourseLink id={2648} href="/SE#273">SE 273</CourseLink> and <CourseLink id={2325} href="/MAE#231C">MAE 231C</CourseLink>.</p>

	<p>Prerequisites: graduate standing and <CourseLink id={2646} href="/SE#271">SE 271</CourseLink>/<CourseLink id={2323} href="/MAE#231A">MAE 231A</CourseLink> or consent of instructor.</p>
</CourseCard>
<CourseCard id="274" shortName="SE 274" longName="Nonlinear Finite Element Methods for Solid Mechanics" units="4" url="/SE#274">
	<p>Modeling of mechanical deformation processes in solids and structures by the finite element method. PDE models of deformations in solids and structures. Weak form. Weighted residual method. Material models for 3-D solids and rods, beams, shells: elasticity, plasticity, viscoplasticity.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="276A" shortName="SE 276A" longName="Finite Element Methods in Solid Mechanics I" units="4" url="/SE#276A">
	<p>Finite element methods for linear problems in solid mechanics. Emphasis on the principle of virtual work, finite element stiffness matrices, various finite element formulations and their accuracy and the numerical implementation required to solve problems in small strain, isotropic elasticity in solid mechanics.</p>

</CourseCard>
<CourseCard id="276B" shortName="SE 276B" longName="Finite Element Methods in Solid Mechanics II" units="4" url="/SE#276B">
	<p>Finite element methods for linear problems in structural dynamics. Beam, plate, and doubly curved shell elements are derived. Strategies for eliminating shear locking problems are introduced. Formulation and numerical solution of the equations of motion for structural dynamics are introduced and the effect of different mass matrix formulations on the solution accuracy is explored.</p>

</CourseCard>
<CourseCard id="276C" shortName="SE 276C" longName="Finite Element Methods in Solid Mechanics III" units="4" url="/SE#276C">
	<p>Finite element methods for problems with both material and geometrical (large deformations) nonlinearities. The total LaGrangian and the updated LaGrangian formulations are introduced. Basic solution methods for the nonlinear equations are developed and applied to problems in plasticity and hyperelasticity.</p>

	<p>Prerequisites: graduate standing and <CourseLink id={2650} href="/SE#276A">SE 276A</CourseLink> or <CourseLink id={2326} href="/MAE#232A">MAE 232A</CourseLink> and <CourseLink id={2323} href="/MAE#231A">MAE 231A</CourseLink> or <CourseLink id={2646} href="/SE#271">SE 271</CourseLink>.</p>
</CourseCard>
<CourseCard id="277" shortName="SE 277" longName="Error Control in Finite Element Analysis" units="4" url="/SE#277">
	<p>This course will provide an overview of the latest technology for evaluating and improving the accuracy and validity of linear and nonlinear finite element models, solution verification, finite element model validation, sensitivity analysis, uncertainty analysis, and test-analysis correlation.</p>

	<p>Prerequisites: SE 232B or <CourseLink id={2327} href="/MAE#232B">MAE 232B</CourseLink>.</p>
</CourseCard>
<CourseCard id="278A" shortName="SE 278A" longName="Finite Elements for Fluid Mechanics" units="4" url="/SE#278A">
	<p>Development and application of advanced computational techniques for fluid flow. Stabilized and variational multiscale methods for finite element and related discretizations are stressed. Applications involve advection-diffusion equations and systems, and incompressible and compressible Navier-Stokes equations. Turbulence modeling will also be covered.</p>

	<p>Prerequisites: <CourseLink id={2326} href="/MAE#232A">MAE 232A</CourseLink> or <CourseLink id={2650} href="/SE#276A">SE 276A</CourseLink> or consent of instructor, graduate standing.</p>
</CourseCard>
<CourseCard id="278B" shortName="SE 278B" longName="Computational Fluid-Structure Interaction" units="4" url="/SE#278B">
	<p>Conservation laws on general moving domains. Arbitrary Lagrange-Eulerian (ALE) and space-time approaches to fluid-structure interaction are covered. Suitable discretizations, mesh motion, and discrete solution strategies are discussed.</p>

	<p>Prerequisites: <CourseLink id={2654} href="/SE#278A">SE 278A</CourseLink>.</p>
</CourseCard>
<CourseCard id="279" shortName="SE 279" longName="Meshfree Methods for Linear and Nonlinear Mechanics" units="4" url="/SE#279">
	<p>Meshfree approximation theories (moving least-squares, reproducing kernel, partition of unity, radial basis), Galerkin meshfree methods, collocation meshfree methods, imposition of boundary conditions, domain integration, stability, nonlinear meshfree method for hyperelasticity and plasticity, meshfree methods for fracture and plate/shell problems.</p>

	<p>Prerequisites: <CourseLink id={2650} href="/SE#276A">SE 276A</CourseLink> or <CourseLink id={2326} href="/MAE#232A">MAE 232A</CourseLink>, graduate standing.</p>
</CourseCard>
<CourseCard id="280" shortName="SE 280" longName="Finite Element Computations in Solid Mechanics" units="4" url="/SE#280">
	<p>Techniques of computation with the finite element method. Preprocessing (geometry, mesh generation, boundary conditions), solution methods (statics including contact, dynamics, buckling), and postprocessing (visualization, error estimation, interpretation of results). Hands-on exercises with commercial and open-source software. Use of computer resources.</p>

	<p>Prerequisites: graduate standing, <CourseLink id={2650} href="/SE#276A">SE 276A</CourseLink> or <CourseLink id={2326} href="/MAE#232A">MAE 232A</CourseLink>, and <CourseLink id={2651} href="/SE#276B">SE 276B</CourseLink> or <CourseLink id={2327} href="/MAE#232B">MAE 232B</CourseLink>.</p>
</CourseCard>
<CourseCard id="281" shortName="SE 281" longName="3D Printable Robotics" units="4" url="/SE#281">
	<p>This project-based, systems engineering course explores robotics in the context of next-generation layered manufacturing techniques (3D printing). Students will design, model, simulate, optimize, 3D print, test, and refine a remotely controllable robotic system as member of a multidisciplinary team. Recommended preparation: students should have experience with computer aided design (CAD).</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="282" shortName="SE 282" longName="Diagnostic Imaging" units="4" url="/SE#282">
	<p>This course provides an introduction to diagnostic imaging with a focus on forensic engineering. A broad range of imaging techniques are studied, enabling multidimensional analysis of engineered artifacts and detection of conditions that may lead to undesirable performance characteristics or failure, identify the onset of failure, failure progression, and failure mechanisms overall.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="283" shortName="SE 283" longName="Engineering Frontiers" units="4" url="/SE#283">
	<p>Explores strategies for the augmentation, advancement, and restoration of human abilities, covering the design and systems engineering cycle; from initial user study, ideation, and conceptual design to subject imaging, modeling, and simulation; all the way to layered manufacturing and testing. Recommended preparation: students should have experience with computer aided design (CAD).</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="285" shortName="SE 285" longName="Structural Optimization" units="4" url="/SE#285">
	<p>Construction of structural design as an optimization problem; mathematical programming for sizing, shape, and topology; linear and nonlinear programming; continuous and discrete optimization methods; Lagrangian function and KKT optimality condition; MATLAB. Use of computer resources.</p>

	<p>Prerequisites: graduate standing, <CourseLink id={2650} href="/SE#276A">SE 276A</CourseLink> or <CourseLink id={2326} href="/MAE#232A">MAE 232A</CourseLink> or <CourseLink id={2614} href="/SE#233">SE 233</CourseLink> or <CourseLink id={2331} href="/MAE#235">MAE 235</CourseLink>.</p>
</CourseCard>
<CourseCard id="286" shortName="SE 286" longName="Design Optimization for Additive Manufacturing" units="4" url="/SE#286">
	<p>This course will cover the following topics: fundamental mathematical concepts of optimization, constrained optimization, sensitivity analysis, topology optimization methods (SIMP and Level Set Topology Optimization), state of the art topology optimization applications and additive manufacturing methods, and future perspectives.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="290" shortName="SE 290" longName="Structural Engineering Seminar" units="2" url="/SE#290">
	<p>Weekly seminar and discussion by faculty, visitors, postdoctoral research fellows and graduate students concerning research topics in earthquake engineering and related subjects. May be repeated for credit. (S/U grades only.)</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="296" shortName="SE 296" longName="Independent Study" units="4" url="/SE#296">
	<p></p>

	<p>Prerequisites: consent of instructor.</p>
</CourseCard>
<CourseCard id="298" shortName="SE 298" longName="Directed Group Study" units="1–4" url="/SE#298">
	<p>Directed group study on a topic or in a field not included in regular department curriculum, by special arrangement with a faculty member.</p>

	<p>Prerequisites: consent of instructor.</p>
</CourseCard>
<CourseCard id="299" shortName="SE 299" longName="Graduate Research" units="1–12" url="/SE#299">
	<p>(S/U grades permitted.)</p>

</CourseCard>
<CourseCard id="501" shortName="SE 501" longName="Teaching Experience" units="2" url="/SE#501">
	<p>Teaching experience in an appropriate SE undergraduate course under direction of the faculty member in charge of the course. Lecturing one hour per week in either a problem-solving section or regular lecture.</p>

	<p>Prerequisites: consent of instructor and the department. (S/U grades permitted.)</p>
</CourseCard>
