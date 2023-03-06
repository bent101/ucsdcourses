<script>import CourseCard from "$lib/CourseCard.svelte";import CourseLink from "$lib/CourseLink.svelte";import MajorLink from "$lib/MajorLink.svelte";</script>
<h2>Lower Division</h2>
<CourseCard id="5" shortName="ECE 5" longName="Introduction to Electrical and Computer Engineering" units="4" url="/ECE#5">
	<p>An introduction to electrical and computer engineering. Topics include circuit theory, assembly, and testing, embedded systems programming and debugging, transducer mechanisms and interfacing transducers, signals and systems theory, digital signal processing, and modular design techniques.</p>

</CourseCard>
<CourseCard id="15" shortName="ECE 15" longName="Engineering Computation" units="4" url="/ECE#15">
	<p>Students learn the C programming language with an emphasis on high-performance numerical computation. The commonality across programming languages of control structures, data structures, and I/O is also covered. Techniques for using MATLAB to graph the results of C computations are developed.</p>

	<p>Prerequisites: a familiarity with basic mathematics such as trigonometry functions and graphing is expected but this course assumes no prior programming knowledge.</p>
</CourseCard>
<CourseCard id="16" shortName="ECE 16" longName="Rapid Hardware and Software Design for Interfacing with the World" units="4" url="/ECE#16">
	<p>Students are introduced to embedded systems concepts with structured development of a computer controller based on electromyogram (EMG) signals through four lab assignments through the quarter. Key concepts include sampling, signal processing, communication, and real-time control. Students will apply their prior knowledge in C (from ECE15) to program microcontrollers and will engage in data analysis using the Python programming language.</p>

	<p>Prerequisites: <CourseLink id={2222} href="/MAE#08">MAE 8</CourseLink> or <CourseLink id={1823} href="/CSE#8B">CSE 8B</CourseLink> or <CourseLink id={1824} href="/CSE#11">CSE 11</CourseLink> or <CourseLink id={1992} href="/ECE#15">ECE 15</CourseLink>.</p>
</CourseCard>
<CourseCard id="17" shortName="ECE 17" longName="Object-Oriented Programming: Design and Development with C++" units="4" url="/ECE#17">
	<p>This course combines the fundamentals of object-oriented design in C++, with the programming, debugging, and testing practices used by modern software developers. Emphasizes the use of object-oriented techniques to model and reason about system design, and using modern C++ idioms, design patterns, and the Standard Template Library (STL) to develop solutions to systems engineering challenges that are more reliable, robust, scalable, and secure.</p>

	<p>Prerequisites: <CourseLink id={1823} href="/CSE#8B">CSE 8B</CourseLink> or <CourseLink id={1824} href="/CSE#11">CSE 11</CourseLink> or <CourseLink id={1992} href="/ECE#15">ECE 15</CourseLink>.</p>
</CourseCard>
<CourseCard id="25" shortName="ECE 25" longName="Introduction to Digital Design" units="4" url="/ECE#25">
	<p>This course emphasizes digital electronics. Principles introduced in lectures are used in laboratory assignments, which also serve to introduce experimental and design methods. Topics include Boolean algebra, combination and sequential logic, gates and their implementation in digital circuits. (Course materials and/or program fees may apply.)</p>

</CourseCard>
<CourseCard id="30" shortName="ECE 30" longName="Introduction to Computer Engineering" units="4" url="/ECE#30">
	<p>The fundamentals of both the hardware and software in a computer system. Topics include representation of information, computer organization and design, assembly and microprogramming, current technology in logic design.</p>

	<p>Prerequisites: <CourseLink id={1992} href="/ECE#15">ECE 15</CourseLink> and 25 with grades of C– or better.</p>
</CourseCard>
<CourseCard id="35" shortName="ECE 35" longName="Introduction to Analog Design" units="4" url="/ECE#35">
	<p>Fundamental circuit theory concepts, Kirchhoff’s voltage and current laws, Thevenin’s and Norton’s theorems, loop and node analysis, time-varying signals, transient first order circuits, steady-state sinusoidal response. It is highly recommended taking <CourseLink id={4546} href="/MATH#20C">MATH 20C</CourseLink> and <CourseLink id={5069} href="/PHYS#2B">PHYS 2B</CourseLink> prior or during the same quarter. Program or materials fees may apply.</p>

	<p>Prerequisites: <CourseLink id={4543} href="/MATH#18">MATH 18</CourseLink>, 20A–B, and <CourseLink id={5067} href="/PHYS#2A">PHYS 2A</CourseLink>.</p>
</CourseCard>
<CourseCard id="45" shortName="ECE 45" longName="Circuits and Systems" units="4" url="/ECE#45">
	<p>Steady-state circuit analysis, first and second order systems, Fourier Series and Transforms, time domain analysis, convolution, transient response, Laplace Transform, and filter design.</p>

	<p>Prerequisites: <CourseLink id={1997} href="/ECE#35">ECE 35</CourseLink>.</p>
</CourseCard>
<CourseCard id="65" shortName="ECE 65" longName="Components and Circuits Laboratory" units="4" url="/ECE#65">
	<p>Introduction to linear and nonlinear components and circuits. Topics will include two terminal devices, bipolar and field-effect transistors, and large and small signal analysis of diode and transistor circuits. (Program or materials fees may apply.)</p>

	<p>Prerequisites: <CourseLink id={1997} href="/ECE#35">ECE 35</CourseLink>.</p>
</CourseCard>
<CourseCard id="80" shortName="ECE 85" longName="iTunes 101: A Survey of Information Technology" units="4" url="/ECE#80">
	<p>Topics include how devices such as iPods and iPhones generate, transmit, receive, and process information (music, images, video, etc.), the relationship between technology and issues such as privacy and “net neutrality,” and current topics related to information technology.</p>

</CourseCard>
<CourseCard id="87" shortName="ECE 87" longName="First-year Student Seminar" units="1" url="/ECE#87">
	<p>The First-year Student Seminar program is designed to provide new students with the opportunity to explore an intellectual topic with a faculty member in a small seminar setting. First-year student seminars are offered in all campus departments and undergraduate colleges, and topics vary from quarter to quarter. Enrollment is limited to fifteen to twenty students, with preference given to entering first-year students.</p>

</CourseCard>
<CourseCard id="90" shortName="ECE 90" longName="Undergraduate Seminar" units="1" url="/ECE#90">
	<p>This seminar class will provide a broad review of current research topics in both electrical engineering and computer engineering. Typical subject areas are signal processing, VLSI design, electronic materials and devices, radio astronomy, communications, and optical computing.</p>

</CourseCard>
<h2>Upper Division</h2>
<CourseCard id="100" shortName="ECE 100" longName="Linear Electronic Systems" units="4" url="/ECE#100">
	<p>Linear active circuit and system design. Topics include frequency response; use of Laplace transforms; design and stability of filters using operational amplifiers. Integrated lab and lecture involves analysis, design, simulation, and testing of circuits and systems. Program or materials fees may apply.</p>

	<p>Prerequisites: <CourseLink id={1998} href="/ECE#45">ECE 45</CourseLink> and <CourseLink id={1999} href="/ECE#65">ECE 65</CourseLink>. <CourseLink id={1999} href="/ECE#65">ECE 65</CourseLink> may be taken concurrently.</p>
</CourseCard>
<CourseCard id="101" shortName="ECE 101" longName="Linear Systems Fundamentals" units="4" url="/ECE#101">
	<p>Complex variables. Singularities and residues. Signal and system analysis in continuous and discrete time. Fourier series and transforms. Laplace and z-transforms. Linear Time Invariant Systems. Impulse response, frequency response, and transfer functions. Poles and zeros. Stability. Convolution. Sampling. Aliasing.</p>

	<p>Prerequisites: <CourseLink id={1998} href="/ECE#45">ECE 45</CourseLink>.</p>
</CourseCard>
<CourseCard id="102" shortName="ECE 102" longName="Introduction to Active Circuit Design" units="4" url="/ECE#102">
	<p>Nonlinear active circuits design. Nonlinear device models for diodes, bipolar and field-effect transistors. Linearization of device models and small-signal equivalent circuits. Circuit designs will be simulated by computer and tested in the laboratory.</p>

	<p>Prerequisites: <CourseLink id={1999} href="/ECE#65">ECE 65</CourseLink> and <CourseLink id={2003} href="/ECE#100">ECE 100</CourseLink>. <CourseLink id={2003} href="/ECE#100">ECE 100</CourseLink> can be taken concurrently.</p>
</CourseCard>
<CourseCard id="103" shortName="ECE 103" longName="Fundamentals of Devices and Materials" units="4" url="/ECE#103">
	<p>Introduction to semiconductor materials and devices. Semiconductor crystal structure, energy bands, doping, carrier statistics, drift and diffusion, p-n junctions, metal-semiconductor junctions. Bipolar junction transistors: current flow, amplification, switching, nonideal behavior. Metal-oxide-semiconductor structures, MOSFETs, device scaling.</p>

	<p>Prerequisites: <CourseLink id={1999} href="/ECE#65">ECE 65</CourseLink> and <CourseLink id={5073} href="/PHYS#2D">PHYS 2D</CourseLink> or <CourseLink id={5078} href="/PHYS#4D">PHYS 4D</CourseLink> and 4E.</p>
</CourseCard>
<CourseCard id="107" shortName="ECE 107" longName="Electromagnetism" units="4" url="/ECE#107">
	<p>Electrostatics and magnetostatics; electrodynamics; Maxwell’s equations; plane waves; skin effect. Electromagnetics of transmission lines: reflection and transmission at discontinuities, Smith chart, pulse propagation, dispersion. Rectangular waveguides. Dielectric and magnetic properties of materials. Electromagnetics of circuits.</p>

	<p>Prerequisites: <CourseLink id={5067} href="/PHYS#2A">PHYS 2A</CourseLink>–C or 4A–C and <CourseLink id={1998} href="/ECE#45">ECE 45</CourseLink>.</p>
</CourseCard>
<CourseCard id="108" shortName="ECE 108" longName="Digital Circuits" units="4" url="/ECE#108">
	<p>A transistor-level view of digital integrated circuits. CMOS combinational logic, ratioed logic, noise margins, rise and fall delays, power dissipation, transmission gates. Short channel MOS model, effects on scaling. Sequential circuits, memory and array logic circuits. Three hours of lecture, one hour of discussion, three hours of laboratory.</p>

	<p>Prerequisites: <CourseLink id={1995} href="/ECE#25">ECE 25</CourseLink> or <CourseLink id={1861} href="/CSE#140">CSE 140</CourseLink>, 45, and 65 and <CourseLink id={1996} href="/ECE#30">ECE 30</CourseLink> or <CourseLink id={1829} href="/CSE#30">CSE 30</CourseLink>.</p>
</CourseCard>
<CourseCard id="109" shortName="ECE 109" longName="Engineering Probability and Statistics" units="4" url="/ECE#109">
	<p>Axioms of probability, conditional probability, theorem of total probability, random variables, densities, expected values, characteristic functions, transformation of random variables, central limit theorem. Random number generation, engineering reliability, elements of estimation, random sampling, sampling distributions, tests for hypothesis. One unit of credit given if taken after <CourseLink id={2242} href="/MAE#108">MAE 108</CourseLink>, <CourseLink id={4609} href="/MATH#180A">MATH 180A</CourseLink>, <CourseLink id={4610} href="/MATH#180B">MATH 180B</CourseLink>, <CourseLink id={4619} href="/MATH#183">MATH 183</CourseLink>, <CourseLink id={4622} href="/MATH#186">MATH 186</CourseLink>, or <CourseLink id={1371} href="/ECON#120A">ECON 120A</CourseLink>.</p>

	<p>Prerequisites: <CourseLink id={4544} href="/MATH#20A">MATH 20A</CourseLink>-B, <CourseLink id={4547} href="/MATH#20D">MATH 20D</CourseLink>, <CourseLink id={4546} href="/MATH#20C">MATH 20C</CourseLink> or <CourseLink id={4550} href="/MATH#31BH">MATH 31BH</CourseLink>, and <CourseLink id={4549} href="/MATH#31AH">MATH 31AH</CourseLink> or <CourseLink id={4543} href="/MATH#18">MATH 18</CourseLink>.</p>
</CourseCard>
<CourseCard id="111" shortName="ECE 111" longName="Advanced Digital Design Project" units="4" url="/ECE#111">
	<p>Advanced topics in digital circuits and systems. Use of computers and design automation tools. Hazard elimination, synchronous/asynchronous FSM synthesis, synchronization and arbitration, pipelining and timing issues. Problem sets and design exercises. A large-scale design project. Simulation and/or rapid prototyping.</p>

	<p>Prerequisites: <CourseLink id={1995} href="/ECE#25">ECE 25</CourseLink> or <CourseLink id={1861} href="/CSE#140">CSE 140</CourseLink>.</p>
</CourseCard>
<CourseCard id="115" shortName="ECE 115" longName="Fast Prototyping" units="4" url="/ECE#115">
	<p>Lab-based course. Students will learn how to prototype a mechatronic solution. Topics include cheap/accessible materials and parts; suppliers; fast prototyping techniques; useful electronic sketches and system integration shortcuts. Students will learn to materialize their electromechanical ideas and make design decisions to minimize cost, improve functionality/robustness. Labs will culminate toward a fully functional robot prototype for demonstration.</p>

	<p>Prerequisites: <CourseLink id={1993} href="/ECE#16">ECE 16</CourseLink> or consent of instructor.</p>
</CourseCard>
<CourseCard id="118" shortName="ECE 118" longName="Computer Interfacing" units="4" url="/ECE#118">
	<p>Interfacing computers and embedded controllers to the real world: busses, interrupts, DMA, memory mapping, concurrency, digital I/O, standards for serial and parallel communications, A/D, D/A, sensors, signal conditioning, video, and closed loop control. Students design and construct an interfacing project. (Course materials and/or program fees may apply.)</p>

	<p>Prerequisites: <CourseLink id={1996} href="/ECE#30">ECE 30</CourseLink> or <CourseLink id={1829} href="/CSE#30">CSE 30</CourseLink> and <CourseLink id={1997} href="/ECE#35">ECE 35</CourseLink>, 45, 65.</p>
</CourseCard>
<CourseCard id="120" shortName="ECE 120" longName="Solar System Physics" units="4" url="/ECE#120">
	<p>General introduction to planetary bodies, the overall structure of the solar system, and space plasma physics. Course emphasis will be on the solar atmosphere, how the solar wind is produced, and its interaction with both magnetized and unmagnetized planets (and comets).</p>

	<p>Prerequisites: <CourseLink id={5067} href="/PHYS#2A">PHYS 2A</CourseLink>–C or 4A–D, <CourseLink id={4544} href="/MATH#20A">MATH 20A</CourseLink>–B, 20C with grades of C– or better.</p>
</CourseCard>
<CourseCard id="121A" shortName="ECE 121A" longName="Power Systems Analysis and Fundamentals" units="4" url="/ECE#121A">
	<p>This course introduces concepts of large-scale power system analysis: electric power generation, distribution, steady-state analysis and economic operation. It provides the fundamentals for advanced courses and engineering practice on electric power systems, smart grid, and electricity economics. The course requires implementing some of the computational techniques in simulation software.</p>

	<p>Prerequisites: <CourseLink id={1997} href="/ECE#35">ECE 35</CourseLink>.</p>
</CourseCard>
<CourseCard id="121B" shortName="ECE 121B" longName="Energy Conversion" units="4" url="/ECE#121B">
	<p>Principles of electro-mechanical energy conversion, balanced three-phase systems, fundamental concepts of magnetic circuits, single-phase transformers, and the steady-state performance of DC and induction machines. Students may not receive credit for both <CourseLink id={2015} href="/ECE#121B">ECE 121B</CourseLink> and ECE 121.</p>

	<p>Prerequisites: <CourseLink id={2014} href="/ECE#121A">ECE 121A</CourseLink>.</p>
</CourseCard>
<CourseCard id="123" shortName="ECE 123" longName="Antenna Systems Engineering" units="4" url="/ECE#123">
	<p>The electromagnetic and systems engineering of radio antennas for terrestrial wireless and satellite communications. Antenna impedance, beam pattern, gain, and polarization. Dipoles, monopoles, paraboloids, phased arrays. Power and noise budgets for communication links. Atmospheric propagation and multipath.</p>

	<p>Prerequisites: <CourseLink id={2007} href="/ECE#107">ECE 107</CourseLink> with a grade of C– or better.</p>
</CourseCard>
<CourseCard id="124" shortName="ECE 124" longName="Motor Drives" units="4" url="/ECE#124">
	<p>Topics include the operation of DC motor and induction machine drives in steady state and speed control of DC and induction motor drives in an energy efficient manner using power electronics. Control techniques such as vector control and direct torque control (DTC) of induction machines. Different control methods for direct current motors using different types of power converters, such as DC-DC and AC-DC converters. Design torque, speed, and position controller of DC motor drive.</p>

	<p>Prerequisites: <CourseLink id={2015} href="/ECE#121B">ECE 121B</CourseLink> and <CourseLink id={2018} href="/ECE#125A">ECE 125A</CourseLink>.</p>
</CourseCard>
<CourseCard id="125A" shortName="ECE 125A" longName="Introduction to Power Electronics I" units="4" url="/ECE#125A">
	<p>Power generation, system, and electronics. Topics include power semiconductor devices and characteristics, single-phase and three-phase half and full controlled AC-to-DC rectifiers, nonisolated/isolated DC-DC converters, power loss calculation, and thermal considerations, Snubber circuits.</p>

	<p>Prerequisites: <CourseLink id={2014} href="/ECE#121A">ECE 121A</CourseLink>.</p>
</CourseCard>
<CourseCard id="125B" shortName="ECE 125B" longName="Introduction to Power Electronics II" units="4" url="/ECE#125B">
	<p>Design and control of DC-DC converters, PWM rectifiers, single-phase and three-phase inverters, power management, and power electronics applications in renewable energy systems, motion control, and lighting.</p>

	<p>Prerequisites: <CourseLink id={2018} href="/ECE#125A">ECE 125A</CourseLink>.</p>
</CourseCard>
<CourseCard id="128A" shortName="ECE 128A" longName="Real World Power Grid Operation" units="4" url="/ECE#128A">
	<p>Provides practical insights into the operation of the power grid. Covers the same subjects that actual power system operators’ certification course covers. It systematically describes the vital grid operators’ functions and the processes required to operate the system. Uses actual case histories, and real examples of best in-class approaches from across the nation and the globe. Presents the problems encountered by operators and the enabling solutions to remedy them.</p>

	<p>Prerequisites: upper-division standing.</p>
</CourseCard>
<CourseCard id="128B" shortName="ECE 128B" longName="Power Grid Modernization" units="4" url="/ECE#128B">
	<p>In-depth coverage of the future power grids. Covers the practical aspects of the technologies, their design and system implementation. Topics include the changing nature of the grid with renewable resources, smart meters, synchrophasors (PMU), microgrids, distributed energy resources, and the associated information and communications infrastructures. Presents actual examples and best practices. Students will be provided with various tools.</p>

</CourseCard>
<CourseCard id="128C" shortName="ECE 128C" longName="Power Grid Resiliency to Adverse Effects" units="4" url="/ECE#128C">
	<p>This course offers unique insight and practical answers through examples, of how power systems can be affected by weather and what/how countermeasures can be applied to mitigate them to make the system more resilient. Detailed explanations of the impacts of extreme weather and applicable industry standards and initiatives. Proven practices for successful restoration of the power grid, increased system resiliency, and ride-through after extreme weather providing real examples from around the globe.</p>

</CourseCard>
<CourseCard id="129" shortName="ECE 129" longName="Renewable and Energy Storage Resources" units="4" url="/ECE#129">
	<p>Provides a solid foundation to renewable energy resources such as hydroelectric, solar, wind, geothermal, wave, and tidal. Energy grid storage systems. Presents lessons learned from actual systems and study of renewable energy resources and energy storage systems. Presents lessons learned from actual systems and results of detailed studies on the applications of renewable energy resources and energy storage systems. Industry tools for hands-on experience with such resources and systems will be provided.</p>

	<p>Prerequisites: upper-division standing.</p>
</CourseCard>
<CourseCard id="134" shortName="ECE 134" longName="Electronic Materials Science of Integrated Circuits" units="4" url="/ECE#134">
	<p>Electronic materials science with emphasis on topics pertinent to microelectronics and VLSI technology. Concept of the course is to use components in integrated circuits to discuss structure, thermodynamics, reaction kinetics, and electrical properties of materials.</p>

	<p>Prerequisites: <CourseLink id={5071} href="/PHYS#2C">PHYS 2C</CourseLink>–D with grades of C– or better.</p>
</CourseCard>
<CourseCard id="135A" shortName="ECE 135A" longName="Semiconductor Physics" units="4" url="/ECE#135A">
	<p>Crystal structure and quantum theory of solids; electronic band structure; review of carrier statistics, drift and diffusion, p-n junctions; nonequilibrium carriers, imrefs, traps, recombination, etc.; metal-semiconductor junctions and heterojunctions.</p>

	<p>Prerequisites: <CourseLink id={2006} href="/ECE#103">ECE 103</CourseLink> with a grade of C– or better.</p>
</CourseCard>
<CourseCard id="135B" shortName="ECE 135B" longName="Electronic Devices" units="4" url="/ECE#135B">
	<p>Structure and operation of bipolar junction transistors, junction field-effect transistors, metal-oxide-semiconductor diodes and transistors. Analysis of dc and ac characteristics. Charge control model of dynamic behavior.</p>

	<p>Prerequisites: <CourseLink id={2025} href="/ECE#135A">ECE 135A</CourseLink> with a grade of C– or better.</p>
</CourseCard>
<CourseCard id="136L" shortName="ECE 136L" longName="Microelectronics Laboratory" units="4" url="/ECE#136L">
	<p>Laboratory fabrication of diodes and field-effect transistors covering photolithography, oxidation, diffusion, thin film deposition, etching and evaluation of devices. (Course materials and/or program fees may apply.)</p>

	<p>Prerequisites: <CourseLink id={2026} href="/ECE#135B">ECE 135B</CourseLink>.</p>
</CourseCard>
<CourseCard id="138L" shortName="ECE 138L" longName="Microstructuring Processing Technology Laboratory" units="4" url="/ECE#138L">
	<p>A laboratory course covering the concept and practice of microstructuring science and technology in fabricating devices relevant to sensors, lab-chips and related devices. (Course materials and/or program fees may apply.)</p>

	<p>Prerequisites: upper-division standing for science and engineering students.</p>
</CourseCard>
<CourseCard id="139" shortName="ECE 139" longName="Semiconductor Device Design and Modeling" units="4" url="/ECE#139">
	<p>Device physics of modern field effect transistors and bipolar transistors, including behavior of submicron structures. Relationship between structure and circuit models of transistors. CMOS and BiCMOS technologies. Emphasis on computer simulation of transistor operation and application in integrated circuits.</p>

	<p>Prerequisites: <CourseLink id={2025} href="/ECE#135A">ECE 135A</CourseLink>-B with grades of C– or better.</p>
</CourseCard>
<CourseCard id="140A" shortName="ECE 140A" longName="The Art of Product Engineering I" units="4" url="/ECE#140A">
	<p>Building on a solid foundation of electrical and computer engineer skills, this course strives to broaden student skills in software, full-stack engineering, and concrete understanding of methods related to the realistic development of a commercial product. Students will research, design, and develop an IOT device to serve an emerging market.</p>

	<p>Prerequisites: <CourseLink id={1823} href="/CSE#8B">CSE 8B</CourseLink> or <CourseLink id={1824} href="/CSE#11">CSE 11</CourseLink> or <CourseLink id={1992} href="/ECE#15">ECE 15</CourseLink>.</p>
</CourseCard>
<CourseCard id="140B" shortName="ECE 140B" longName="The Art of Product Engineering II" units="4" url="/ECE#140B">
	<p>Building on a solid foundation of electrical and computer engineer skills, this course strives to broaden student skills in software, full-stack engineering, and concrete understanding of methods related to the realistic development of a commercial product. Students will research, design, and develop an IOT device to serve an emerging market.</p>

	<p>Prerequisites: <CourseLink id={2030} href="/ECE#140A">ECE 140A</CourseLink>.</p>
</CourseCard>
<CourseCard id="141A" shortName="ECE 141A" longName="Software Foundations I" units="4" url="/ECE#141A">
	<p>Software analysis, design, and development. Data structures, algorithms, and design and development idioms in C++. Students will gain broad experience using object-oriented methods and design patterns. Through increasingly difficult challenges, students will gain valuable real-world experience building, testing, and debugging software, and develop a robust mental model of modern software design and architecture.</p>

	<p>Prerequisites: <CourseLink id={1994} href="/ECE#17">ECE 17</CourseLink> and <CourseLink id={1829} href="/CSE#30">CSE 30</CourseLink> or <CourseLink id={1996} href="/ECE#30">ECE 30</CourseLink>.</p>
</CourseCard>
<CourseCard id="141B" shortName="ECE 141B" longName="Software Foundations II" units="4" url="/ECE#141B">
	<p><CourseLink id={2033} href="/ECE#141B">ECE 141B</CourseLink> builds upon the solid C++ foundation of <CourseLink id={2032} href="/ECE#141A">ECE 141A</CourseLink>. Students will model and build a working database management solution in C++. Topics include STL, design patterns, parsing, searching and sorting, algorithmic thinking, and design partitioning. The course will continue to explore best practices in software development, debugging, and testing.</p>

	<p>Prerequisites: <CourseLink id={2032} href="/ECE#141A">ECE 141A</CourseLink>.</p>
</CourseCard>
<CourseCard id="143" shortName="ECE 143" longName="Programming for Data Analysis" units="4" url="/ECE#143">
	<p>This course covers the fundamentals of using the Python language effectively for data analysis. Students learn the underlying mechanics and implementation specifics of Python and how to effectively utilize the many built-in data structures and algorithms. The course introduces key modules for data analysis such as Numpy, Pandas, and Matplotlib. Participants learn to leverage and navigate the vast Python ecosystem to find codes and communities of individual interest.</p>

	<p>Prerequisites: <CourseLink id={1993} href="/ECE#16">ECE 16</CourseLink>.</p>
</CourseCard>
<CourseCard id="144" shortName="ECE 144" longName="LabVIEW Programming: Design and Applications" units="4" url="/ECE#144">
	<p>Develop, debug, and test LabVIEW VIs, solve problems using LabVIEW, use data acquisition, and perform signal processing and instrument control in LabVIEW applications. Groups of students will build an elevator system from laser-cut and 3-D printed parts; integrate sensors, motors, and servos; and program using state-machine architecture in LabVIEW. Students will have the opportunity to take the National Instruments Certified LabVIEW Associate Developer (CLAD) exam at the end of the quarter. Program or materials fees may apply.</p>

	<p>Prerequisites: <CourseLink id={1824} href="/CSE#11">CSE 11</CourseLink> or <CourseLink id={1823} href="/CSE#8B">CSE 8B</CourseLink> or <CourseLink id={1992} href="/ECE#15">ECE 15</CourseLink>.</p>
</CourseCard>
<CourseCard id="145ALBLCL" shortName="ECE 145AL-BL-CL" longName="Acoustics Laboratory" units="4-4-4" url="/ECE#145ALBLCL">
	<p>Automated laboratory based on H-P GPIB controlled instruments. Software controlled data collection and analysis. Vibrations and waves in strings and bars of electromechanical systems and transducers. Transmissions, reflection, and scattering of sound waves in air and water. Aural and visual detection.</p>

	<p>Prerequisites: <CourseLink id={2007} href="/ECE#107">ECE 107</CourseLink> with a grade of C– or better or consent of instructor.</p>
</CourseCard>
<CourseCard id="148" shortName="ECE 148" longName="Introduction to Autonomous Vehicles" units="4" url="/ECE#148">
	<p>This course introduces students to the fundamentals of autonomous vehicles using an accelerated and engaging engineering curriculum leveraging the educational benefits of robotics “coopertition” (cooperative competition). Students work in small teams building scale cars utilizing best engineering practices. Skills to be learned include fast prototyping, project management, traditional programming, and computer vision using Robot Operating System (ROS) and artificial intelligence deep learning. Cross-listed with <CourseLink id={2265} href="/MAE#148">MAE 148</CourseLink>. Students may not receive credit for <CourseLink id={2037} href="/ECE#148">ECE 148</CourseLink> and <CourseLink id={2265} href="/MAE#148">MAE 148</CourseLink>. Program or materials fees may apply.</p>

	<p>Prerequisites: <CourseLink id={1992} href="/ECE#15">ECE 15</CourseLink> or <CourseLink id={1997} href="/ECE#35">ECE 35</CourseLink> or <CourseLink id={2218} href="/MAE#02">MAE 2</CourseLink> or <CourseLink id={2219} href="/MAE#03">MAE 3</CourseLink>, and consent of instructor.</p>
</CourseCard>
<CourseCard id="150" shortName="ECE 150" longName="Entrepreneurship for Engineers" units="4" url="/ECE#150">
	<p>A foundation course teaching the basics of starting and running a successful new business. Students learn how to think like entrepreneurs, pivot their ideas to match customer needs, and assess financial, market, and timeline feasibility. The end goal is an investor pitch and a business plan. Provides experiential education, encouragement, and coaching (“E3CE”) that prepares students for successful careers at start-up as well as large companies. Students may not receive credit for both <CourseLink id={2038} href="/ECE#150">ECE 150</CourseLink> and <CourseLink id={1887} href="/CSE#175">CSE 175</CourseLink>. Counts toward one professional elective only.</p>

	<p>Prerequisites: students must apply to enroll in order to gauge their past experience with and interest in entrepreneurship. Consent of instructor is required.</p>
</CourseCard>
<CourseCard id="153" shortName="ECE 153" longName="Probability and Random Processes for Engineers" units="4" url="/ECE#153">
	<p>Random processes. Stationary processes: correlation, power spectral density. Gaussian processes and linear transformation of Gaussian processes. Point processes. Random noise in linear systems.</p>

	<p>Prerequisites: <CourseLink id={2009} href="/ECE#109">ECE 109</CourseLink> with a grade of C– or better.</p>
</CourseCard>
<CourseCard id="155" shortName="ECE 155" longName="Digital Communications Theory" units="4" url="/ECE#155">
	<p>Design and performance analysis of digital modulation techniques, including probability of error results for PSK, DPSK, and FSK. Introduction to effects of intersymbol interference and fading. Detection and estimation theory, including optimal receiver design and maximum-likelihood parameter estimation. Renumbered from ECE 154B. Students may not receive credit for <CourseLink id={2040} href="/ECE#155">ECE 155</CourseLink> and ECE 154B.</p>

	<p>Prerequisites: <CourseLink id={2004} href="/ECE#101">ECE 101</CourseLink> or <CourseLink id={1708} href="/BENG#122A">BENG 122A</CourseLink>, <CourseLink id={2009} href="/ECE#109">ECE 109</CourseLink> or <CourseLink id={1371} href="/ECON#120A">ECON 120A</CourseLink> or <CourseLink id={2242} href="/MAE#108">MAE 108</CourseLink> or <CourseLink id={4609} href="/MATH#180A">MATH 180A</CourseLink> or <CourseLink id={4610} href="/MATH#180B">MATH 180B</CourseLink> or <CourseLink id={4619} href="/MATH#183">MATH 183</CourseLink> or <CourseLink id={4622} href="/MATH#186">MATH 186</CourseLink>, and <CourseLink id={2039} href="/ECE#153">ECE 153</CourseLink>.</p>
</CourseCard>
<CourseCard id="156" shortName="ECE 156" longName="Sensor Networks" units="4" url="/ECE#156">
	<p>Characteristics of chemical, biological, seismic, and other physical sensors; signal processing techniques supporting distributed detection of salient events; wireless communication and networking protocols supporting formation of robust sensor fabrics; current experience with low power, low cost sensor deployments. Undergraduate students must take a final exam; graduate students must write a term paper or complete a final project. Cross-listed with <CourseLink id={2266} href="/MAE#149">MAE 149</CourseLink> and SIO 238.</p>

	<p>Prerequisites: upper-division standing and consent of instructor, or graduate student in science and engineering.</p>
</CourseCard>
<CourseCard id="157A" shortName="ECE 157A" longName="Communications Systems Laboratory I" units="4" url="/ECE#157A">
	<p>Experiments in the modulation and demodulation of baseband and passband signals. Statistical characterization of signals and impairments. (Course materials and/or program fees may apply.)</p>

	<p>Prerequisites: <CourseLink id={2009} href="/ECE#109">ECE 109</CourseLink> or <CourseLink id={1371} href="/ECON#120A">ECON 120A</CourseLink> or <CourseLink id={2242} href="/MAE#108">MAE 108</CourseLink> or <CourseLink id={4609} href="/MATH#180A">MATH 180A</CourseLink> or <CourseLink id={4610} href="/MATH#180B">MATH 180B</CourseLink> or <CourseLink id={4619} href="/MATH#183">MATH 183</CourseLink> or <CourseLink id={4622} href="/MATH#186">MATH 186</CourseLink> and <CourseLink id={2047} href="/ECE#161A">ECE 161A</CourseLink>.</p>
</CourseCard>
<CourseCard id="157B" shortName="ECE 157B" longName="Communications Systems Laboratory II" units="4" url="/ECE#157B">
	<p>Advanced projects in communication systems. Students will plan and implement design projects in the laboratory, updating progress weekly and making plan/design adjustments based upon feedback.</p>

	<p>Prerequisites: <CourseLink id={2042} href="/ECE#157A">ECE 157A</CourseLink> or <CourseLink id={2047} href="/ECE#161A">ECE 161A</CourseLink>.</p>
</CourseCard>
<CourseCard id="158A" shortName="ECE 158A" longName="Data Networks I" units="4" url="/ECE#158A">
	<p>Layered network architectures, data link control protocols and multiple-access systems, performance analysis. Flow control; prevention of deadlock and throughput degradation. Routing, centralized and decentralized schemes, static dynamic algorithms. Shortest path and minimum average delay algorithms. Comparisons.</p>

	<p>Prerequisites: <CourseLink id={2009} href="/ECE#109">ECE 109</CourseLink> with a grade of C– or better.</p>
</CourseCard>
<CourseCard id="158B" shortName="ECE 158B" longName="Data Networks II" units="4" url="/ECE#158B">
	<p>Layered network architectures, data link control protocols and multiple-access systems, performance analysis. Flow control; prevention of deadlock and throughput degradation. Routing, centralized and decentralized schemes, static dynamic algorithms. Shortest path and minimum average delay algorithms. Comparisons.</p>

	<p>Prerequisites: <CourseLink id={2044} href="/ECE#158A">ECE 158A</CourseLink> with a grade of C– or better.</p>
</CourseCard>
<CourseCard id="159" shortName="ECE 159" longName="Introduction to Data Processing and Information Theory" units="4" url="/ECE#159">
	<p>Introduction to information theory and coding, including entropy, average mutual information, channel capacity, block codes, and convolutional codes. Renumbered from ECE 154C. Students may not receive credit for <CourseLink id={2046} href="/ECE#159">ECE 159</CourseLink> and ECE 154C.</p>

	<p>Prerequisites: <CourseLink id={2039} href="/ECE#153">ECE 153</CourseLink>.</p>
</CourseCard>
<CourseCard id="161A" shortName="ECE 161A" longName="Introduction to Digital Signal Processing" units="4" url="/ECE#161A">
	<p>Review of discrete-time systems and signals, Discrete-Time Fourier Transform and its properties, the Fast Fourier Transform, design of Finite Impulse Response (FIR) and Infinite Impulse Response (IIR) filters, implementation of digital filters.</p>

	<p>Prerequisites: <CourseLink id={2004} href="/ECE#101">ECE 101</CourseLink>.</p>
</CourseCard>
<CourseCard id="161B" shortName="ECE 161B" longName="Digital Signal Processing I" units="4" url="/ECE#161B">
	<p>Sampling and quantization of baseband signals; A/D and D/A conversion, quantization noise, oversampling and noise shaping. Sampling of bandpass signals, undersampling downconversion, and Hilbert transforms. Coefficient quantization, roundoff noise, limit cycles and overflow oscillations. Insensitive filter structures, lattice and wave digital filters. Systems will be designed and tested with MATLAB, implemented with DSP processors and tested in the laboratory.</p>

	<p>Prerequisites: <CourseLink id={2047} href="/ECE#161A">ECE 161A</CourseLink> with a grade of C– or better.</p>
</CourseCard>
<CourseCard id="161C" shortName="ECE 161C" longName="Applications of Digital Signal Processing" units="4" url="/ECE#161C">
	<p>This course discusses several applications of DSP. Topics covered will include speech analysis and coding; image and video compression and processing. A class project is required, algorithms simulated by MATLAB.</p>

	<p>Prerequisites: <CourseLink id={2047} href="/ECE#161A">ECE 161A</CourseLink>.</p>
</CourseCard>
<CourseCard id="163" shortName="ECE 163" longName="Electronic Circuits and Systems" units="4" url="/ECE#163">
	<p>Analysis and design of analog circuits and systems. Feedback systems with applications to operational amplifier circuits. Stability, sensitivity, bandwidth, compensation. Design of active filters. Switched capacitor circuits. Phase-locked loops. Analog-to-digital and digital-to-analog conversion. (Course materials and/or program fees may apply.)</p>

	<p>Prerequisites: <CourseLink id={2004} href="/ECE#101">ECE 101</CourseLink> and 102 with grades of C– or better.</p>
</CourseCard>
<CourseCard id="164" shortName="ECE 164" longName="Analog Integrated Circuit Design" units="4" url="/ECE#164">
	<p>Design of linear and nonlinear analog integrated circuits including operational amplifiers, voltage regulators, drivers, power stages, oscillators, and multipliers. Use of feedback and evaluation of noise performance. Parasitic effects of integrated circuit technology. Laboratory simulation and testing of circuits.</p>

	<p>Prerequisites: <CourseLink id={2005} href="/ECE#102">ECE 102</CourseLink> with a grade of C– or better. <CourseLink id={2050} href="/ECE#163">ECE 163</CourseLink> recommended.</p>
</CourseCard>
<CourseCard id="165" shortName="ECE 165" longName="Digital Integrated Circuit Design" units="4" url="/ECE#165">
	<p>VLSI digital systems. Circuit characterization, performance estimation, and optimization. Circuits for alternative logic styles and clocking schemes. Subsystems include ALUs, memory, processor arrays, and PLAs. Techniques for gate arrays, standard cell, and custom design. Design and simulation using CAD tools.</p>

	<p>Prerequisites: <CourseLink id={2005} href="/ECE#102">ECE 102</CourseLink>.</p>
</CourseCard>
<CourseCard id="166" shortName="ECE 166" longName="Microwave Systems and Circuits" units="4" url="/ECE#166">
	<p>Waves, distributed circuits, and scattering matrix methods. Passive microwave elements. Impedance matching. Detection and frequency conversion using microwave diodes. Design of transistor amplifiers including noise performance. Circuits designs will be simulated by computer and tested in the laboratory. (Course materials and/or program fees may apply.)</p>

	<p>Prerequisites: <CourseLink id={2005} href="/ECE#102">ECE 102</CourseLink> and 107 with grades of C– or better.</p>
</CourseCard>
<CourseCard id="171A" shortName="ECE 171A" longName="Linear Control System Theory" units="4" url="/ECE#171A">
	<p>Stability of continuous- and discrete-time single-input/single-output linear time-invariant control systems emphasizing frequency domain methods. Transient and steady-state behavior. Stability analysis by root locus, Bode, Nyquist, and Nichols plots. Compensator design.</p>

	<p>Prerequisites: <CourseLink id={1998} href="/ECE#45">ECE 45</CourseLink> or MAE 140.</p>
</CourseCard>
<CourseCard id="171B" shortName="ECE 171B" longName="Linear Control System Theory" units="4" url="/ECE#171B">
	<p>Time-domain, state-variable formulation of the control problem for both discrete-time and continuous-time linear systems. State-space realizations from transfer function system description. Internal and input-output stability, controllability/observability, minimal realizations, and pole-placement by full-state feedback.</p>

	<p>Prerequisites: <CourseLink id={2054} href="/ECE#171A">ECE 171A</CourseLink> with a grade of C– or better.</p>
</CourseCard>
<CourseCard id="172A" shortName="ECE 172A" longName="Introduction to Intelligent Systems: Robotics and Machine Intelligence" units="4" url="/ECE#172A">
	<p>This course will introduce basic concepts in machine perception. Topics covered will include edge detection, segmentation, texture analysis, image registration, and compression.</p>

	<p>Prerequisites: <CourseLink id={2004} href="/ECE#101">ECE 101</CourseLink> with a grade of C– or better. <CourseLink id={2009} href="/ECE#109">ECE 109</CourseLink> recommended.</p>
</CourseCard>
<CourseCard id="174" shortName="ECE 174" longName="Introduction to Linear and Nonlinear Optimization with Applications" units="4" url="/ECE#174">
	<p>The linear least squares problem, including constrained and unconstrained quadratic optimization and the relationship to the geometry of linear transformations. Introduction to nonlinear optimization. Applications to signal processing, system identification, robotics, and circuit design. Recommended preparation: <CourseLink id={2034} href="/ECE#143">ECE 143</CourseLink> (for Python) or equivalent proficiency in MATLAB programming.</p>

	<p>Prerequisites: <CourseLink id={4543} href="/MATH#18">MATH 18</CourseLink> or <CourseLink id={4549} href="/MATH#31AH">MATH 31AH</CourseLink> and <CourseLink id={1992} href="/ECE#15">ECE 15</CourseLink>.</p>
</CourseCard>
<CourseCard id="175A" shortName="ECE 175A" longName="Elements of Machine Intelligence: Pattern Recognition and Machine Learning" units="4" url="/ECE#175A">
	<p>Introduction to pattern recognition and machine learning. Decision functions. Statistical pattern classifiers. Generative vs. discriminant methods for pattern classification. Feature selection. Regression. Unsupervised learning. Clustering. Applications of machine learning.</p>

	<p>Prerequisites: <CourseLink id={2009} href="/ECE#109">ECE 109</CourseLink> and <CourseLink id={2057} href="/ECE#174">ECE 174</CourseLink>.</p>
</CourseCard>
<CourseCard id="175B" shortName="ECE 175B" longName="Elements of Machine Intelligence: Probabilistic Reasoning and Graphical Models" units="4" url="/ECE#175B">
	<p>Bayes’ rule as a probabilistic reasoning engine; graphical models as knowledge encoders; conditional independence and D-Separation; Markov random fields; inference in graphical models; sampling methods and Markov Chain Monte Carlo (MCMC); sequential data and the Viterbi and BCJR algorithms; The Baum-Welsh algorithm for Markov Chain parameter estimation.</p>

	<p>Prerequisites: <CourseLink id={2058} href="/ECE#175A">ECE 175A</CourseLink>.</p>
</CourseCard>
<CourseCard id="176" shortName="ECE 176" longName="Introduction to Deep Learning and Applications" units="4" url="/ECE#176">
	<p>This course covers the fundamentals in deep learning, basics in deep neural network including different network architectures (e.g., ConvNet, RNN), and the optimization algorithms for training these networks. We will have hands-on implementation courses in PyTorch. This course will also introduce the deep learning applications in computer vision, robotics, and sequence modeling in natural language processing.</p>

	<p>Prerequisites: <CourseLink id={4543} href="/MATH#18">MATH 18</CourseLink> or <CourseLink id={4549} href="/MATH#31AH">MATH 31AH</CourseLink> and <CourseLink id={2034} href="/ECE#143">ECE 143</CourseLink>, or consent of instructor.</p>
</CourseCard>
<CourseCard id="180" shortName="ECE 180" longName="Topics in Electrical and Computer Engineering" units="4" url="/ECE#180">
	<p>Topics of special interest in electrical and computer engineering. Subject matter will not be repeated so it may be taken for credit more than once.</p>

	<p>Prerequisites: consent of instructor; department stamp.</p>
</CourseCard>
<CourseCard id="181" shortName="ECE 181" longName="Physical Optics and Fourier Optics" units="4" url="/ECE#181">
	<p>Ray optics, wave optics, beam optics, Fourier optics, and electromagnetic optics. Ray transfer matrix, matrices of cascaded optics, numerical apertures of step and graded index fibers. Fresnel and Fraunhofer diffractions, interference of waves. Gaussian and Bessel beams, the ABCD law for transmissions through arbitrary optical systems. Spatial frequency, impulse response and transfer function of optical systems, Fourier transform and imaging properties of lenses, holography. Wave propagation in various (inhomogeneous, dispersive, anisotropic or nonlinear) media. (Course materials and/or program fees may apply.)</p>

	<p>Prerequisites: <CourseLink id={2006} href="/ECE#103">ECE 103</CourseLink> and 107 with grades of C– or better.</p>
</CourseCard>
<CourseCard id="182" shortName="ECE 182" longName="Electromagnetic Optics, Guided-Wave, and Fiber Optics" units="4" url="/ECE#182">
	<p>Polarization optics: crystal optics, birefringence. Guided-wave optics: modes, losses, dispersion, coupling, switching. Fiber optics: step and graded index, single and multimode operation, attenuation, dispersion, fiber optic communications. Resonator optics. (Course materials and/or program fees may apply.)</p>

	<p>Prerequisites: <CourseLink id={2006} href="/ECE#103">ECE 103</CourseLink> and 107 with grades of C– or better.</p>
</CourseCard>
<CourseCard id="183" shortName="ECE 183" longName="Optical Electronics" units="4" url="/ECE#183">
	<p>Quantum electronics, interaction of light and matter in atomic systems, semiconductors. Laser amplifiers and laser systems. Photodetection. Electro-optics and acousto-optics, photonic switching. Fiber optic communication systems. Labs: semiconductor lasers, semiconductor photodetectors. (Course materials and/or program fees may apply.)</p>

	<p>Prerequisites: <CourseLink id={2006} href="/ECE#103">ECE 103</CourseLink> and 107 with grades of C– or better.</p>
</CourseCard>
<CourseCard id="184" shortName="ECE 184" longName="Optical Information Processing and Holography" units="4" url="/ECE#184">
	<p>(Conjoined with ECE 241AL) Labs: optical holography, photorefractive effect, spatial filtering, computer generated holography. Students enrolled in <CourseLink id={2065} href="/ECE#184">ECE 184</CourseLink> will receive four units of credit; students enrolled in ECE 241AL will receive two units of credit. (Course materials and/or program fees may apply.)</p>

	<p>Prerequisites: <CourseLink id={2063} href="/ECE#182">ECE 182</CourseLink> with a grade of C– or better.</p>
</CourseCard>
<CourseCard id="185" shortName="ECE 185" longName="Lasers and Modulators" units="4" url="/ECE#185">
	<p>(Conjoined with ECE 241BL) Labs: CO2 laser, HeNe laser, electro-optic modulation, acousto-optic modulation, spatial light modulators. Students enrolled in <CourseLink id={2066} href="/ECE#185">ECE 185</CourseLink> will receive four units of credit; students enrolled in ECE 241BL will receive two units of credit. (Course materials and/or program fees may apply.)</p>

	<p>Prerequisites: <CourseLink id={2064} href="/ECE#183">ECE 183</CourseLink> with a grade of C– or better.</p>
</CourseCard>
<CourseCard id="187" shortName="ECE 187" longName="Introduction to Biomedical Imaging and Sensing" units="4" url="/ECE#187">
	<p>Image processing fundamentals: imaging theory, image processing, pattern recognition; digital radiography, computerized tomography, nuclear medicine imaging, nuclear magnetic resonance imaging, ultrasound imaging, microscopy imaging.</p>

	<p>Prerequisites: <CourseLink id={4544} href="/MATH#20A">MATH 20A</CourseLink>-B-F, 20C or 21C, 20D or 21D, <CourseLink id={5067} href="/PHYS#2A">PHYS 2A</CourseLink>–D, <CourseLink id={2004} href="/ECE#101">ECE 101</CourseLink> (may be taken concurrently) with grades of C– or better.</p>
</CourseCard>
<CourseCard id="188" shortName="ECE 188" longName="Topics in Electrical and Computer Engineering with Laboratory" units="4" url="/ECE#188">
	<p>Topics of special interest in electrical and computer engineering with laboratory. Subject matter will not be repeated so it may be taken for credit up to three times.</p>

	<p>Prerequisites: upper-division standing.</p>
</CourseCard>
<CourseCard id="189" shortName="ECE 189" longName="Technical Public Speaking" units="2" url="/ECE#189">
	<p>Basics of technical public speaking, including speech organization, body language (eye contact, hand gestures, etc.), volume and rate, and design of technical slides. Students will practice technical public speaking, including speeches with PowerPoint slides and speaker introductions, and presenting impromptu speeches. Students may not receive credit for both <CourseLink id={2069} href="/ECE#189">ECE 189</CourseLink> and ENG 100E.</p>

	<p>Prerequisites: upper-division standing.</p>
</CourseCard>
<CourseCard id="190" shortName="ECE 190" longName="Engineering Design" units="4" url="/ECE#190">
	<p>Students complete a project comprising at least 50 percent or more engineering design to satisfy the following features: student creativity, open-ended formulation of a problem statement/specifications, consideration of alternative solutions/realistic constraints. Written final report required.</p>

	<p>Prerequisites: students enrolling in this course must have completed all of the breadth courses and one depth course. The department stamp is required to enroll in <CourseLink id={2070} href="/ECE#190">ECE 190</CourseLink>. (Specifications and enrollment forms are available in the undergraduate office.)</p>
</CourseCard>
<CourseCard id="191" shortName="ECE 191" longName="Engineering Group Design Project" units="4" url="/ECE#191">
	<p>Groups of students work to design, build, demonstrate, and document an engineering project. All students give weekly progress reports of their tasks and contribute a section to the final project report.</p>

	<p>Prerequisites: completion of all of the breadth courses and one depth course.</p>
</CourseCard>
<CourseCard id="193H" shortName="ECE 193H" longName="Honors Project" units="4–8" url="/ECE#193H">
	<p>An advanced reading or research project performed under the direction of an ECE faculty member. Must contain enough design to satisfy the ECE program’s four-unit design requirement. Must be taken for a letter grade. May extend over two quarters with a grade assigned at completion for both quarters.</p>

	<p>Prerequisites: admission to the ECE departmental honors program.</p>
</CourseCard>
<CourseCard id="194" shortName="ECE 194" longName="Viacar Design Project" units="4" url="/ECE#194">
	<p>Students design, build, and race an autonomous car using principles in electrical engineering and computer science: circuit design, control theory, digital signal processing, embedded systems, microcontrollers, electromagnetism, and programming.</p>

</CourseCard>
<CourseCard id="195" shortName="ECE 195" longName="Teaching" units="2 or 4" url="/ECE#195">
	<p>Teaching and tutorial activities associated with courses and seminars. Not more than four units of <CourseLink id={2074} href="/ECE#195">ECE 195</CourseLink> may be used for satisfying graduation requirements. (P/NP grades only.)</p>

	<p>Prerequisites: consent of the department chair.</p>
</CourseCard>
<CourseCard id="196" shortName="ECE 196" longName="Engineering Hands-on Group Project" units="4" url="/ECE#196">
	<p>Groups of students work to build and demonstrate at least three engineering projects at the beginning, intermediate, and advanced levels. The final project consists of either a new project designed by the student team or extension of an existing project. The student teams also prepare a manual as part of their documentation of the final project. May be taken for credit two times.</p>

	<p>Prerequisites: <CourseLink id={1691} href="/BENG#1">BENG 1</CourseLink> or <CourseLink id={2497} href="/NANO#CENG4">CENG 4</CourseLink> or <CourseLink id={1824} href="/CSE#11">CSE 11</CourseLink> or <CourseLink id={1823} href="/CSE#8B">CSE 8B</CourseLink> or <CourseLink id={1991} href="/ECE#5">ECE 5</CourseLink> or <CourseLink id={2219} href="/MAE#03">MAE 3</CourseLink> or <CourseLink id={2407} href="/NANO#4">NANO 4</CourseLink> or <CourseLink id={2541} href="/SE#1">SE 1</CourseLink>.</p>
</CourseCard>
<CourseCard id="197" shortName="ECE 197" longName="ECE Internship" units="2, 4, 6, 8, 10, or 12" url="/ECE#197">
	<p>An enrichment program that provides work experience with public/private section employers. Subject to the availability of positions, students will work in a local company under the supervision of a faculty member and site supervisor. (P/NP grades only.)</p>

	<p>Prerequisites: minimum UC San Diego 2.5 GPA. Consent of instructor and department stamp.</p>
</CourseCard>
<CourseCard id="198" shortName="ECE 198" longName="Directed Group Study" units="1, 2, 3, or 4" url="/ECE#198">
	<p>Topics in electrical and computer engineering whose study involves reading and discussion by a small group of students under direction of a faculty member. (P/NP grades only.)</p>

	<p>Prerequisites: consent of instructor.</p>
</CourseCard>
<CourseCard id="199" shortName="ECE 199" longName="Independent Study for Undergraduates" units="2 or 4" url="/ECE#199">
	<p>Independent reading or research by special arrangement with a faculty member. (P/NP grades only.)</p>

	<p>Prerequisites: consent of instructor.</p>
</CourseCard>
<h2>Graduate</h2>
<CourseCard id="200" shortName="ECE 200" longName="Research Conference" units="2" url="/ECE#200">
	<p>Group discussion of research activities and progress of group members. (Consent of instructor is strongly recommended.) (S/U grades only.)</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="201" shortName="ECE 201" longName="Introduction to Biophysics" units="4" url="/ECE#201">
	<p>The class will cover fundamental physical principles of biological processes at the molecular, cellular, tissue and organ levels that are related to human physiology and diseases. Topics include energetics and dynamics of biological systems, physical factors of environment, and the kinetics of biological systems.</p>

	<p>Prerequisites: senior or graduate level standing.</p>
</CourseCard>
<CourseCard id="202" shortName="ECE 202" longName="Medical Devices and Interfaces" units="4" url="/ECE#202">
	<p>This course will cover basic cellular and electrochemical processes, membrane potentials, ionic currents, nerve cell conductance, extracellular and intracellular stimulation, neural probe technology materials and devices, diagnostic and drug delivery devices, material/physiological considerations, biosensors, microfluids, optical, magnetic and electrical screening.</p>

	<p>Prerequisites: senior or graduate level standing.</p>
</CourseCard>
<CourseCard id="203" shortName="ECE 203" longName="Biomedical Integrated Circuits and Systems" units="4" url="/ECE#203">
	<p>Integrated circuit analysis and design for medical devices. Introduction to subthreshold conduction in MOS transistor and its similarities to biomolecular transport. Design of instrumentation amplifiers, sensors, and electrical stimulation interfaces. Transcutaneous wireless power transfer and electromagnetic effects on tissue. Recommended preparation: <CourseLink id={2051} href="/ECE#164">ECE 164</CourseLink> or <CourseLink id={1751} href="/BENG#186B">BENG 186B</CourseLink> or equivalent.</p>

	<p>Prerequisites: senior or graduate level standing.</p>
</CourseCard>
<CourseCard id="204" shortName="ECE 204" longName="Statistical Learning in Bioinformatics" units="4" url="/ECE#204">
	<p>A hallmark of bioinformatics is the computational analysis of complex data. The combination of statistics and algorithms produces statistical learning methods that automate the analysis of complex data. Such machine learning methods are widely used in systems biology and bioinformatics. This course provides an introduction to statistical learning and assumes familiarity with key statistical methods. Students may not receive credit for <CourseLink id={334} href="/BIOI#BNFO285">BNFO 285</CourseLink> and <CourseLink id={2083} href="/ECE#204">ECE 204</CourseLink> and <CourseLink id={1805} href="/BENG#285">BENG 285</CourseLink>. Cross-listed with <CourseLink id={334} href="/BIOI#BNFO285">BNFO 285</CourseLink> and <CourseLink id={1805} href="/BENG#285">BENG 285</CourseLink>.</p>

	<p>Prerequisites: <CourseLink id={2157} href="/ECE#271A">ECE 271A</CourseLink> or <CourseLink id={2158} href="/ECE#271B">ECE 271B</CourseLink> or <CourseLink id={4736} href="/MATH#283">MATH 283</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="207A" shortName="ECE 207A" longName="Principles of Medical Imaging" units="4" url="/ECE#207A">
	<p>Fundamentals of Fourier transform and linear systems theory including convolution, sampling, noise, filtering, image reconstruction, and visualization with an emphasis on applications to biomedical imaging. Examples from optical imaging, CT, MR, ultrasound, nuclear, PET, and radiography. Cross-listed with <CourseLink id={1799} href="/BENG#280A">BENG 280A</CourseLink>. Renumbered from ECE 207. Students may receive credit for one of the following: <CourseLink id={2084} href="/ECE#207A">ECE 207A</CourseLink> or ECE 207 or <CourseLink id={1799} href="/BENG#280A">BENG 280A</CourseLink>.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="208" shortName="ECE 208" longName="Computational Evolutionary Biology" units="4" url="/ECE#208">
	<p>Evolutionary biology (e.g., the study of the tree of life) uses computational methods from statistics and machine learning. We cover methods of broad use in many fields and apply them to biology, focusing on scalability to big genomic data. Topics include dynamic programming, continuous time Markov models, hidden Markov models, statistical inference of phylogenies, sequence alignment, uncertainty (e.g., bootstrapping), and heterogeneity (e.g., phylogenetic mixture models).</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="209" shortName="ECE 209" longName="Statistical Learning for Biosignal Processing" units="4" url="/ECE#209">
	<p>Medical device systems increasingly measure biosignals from multiple sensors, requiring computational analyses of complex multivariate time-varying data. The combination of statistics and algorithms produces statistical learning methods that automate the analysis of complex data. Applications within the domain of neural engineering that utilize unsupervised and supervised generative statistical modeling techniques are explored. This course assumes familiarity with key statistical methods.</p>

	<p>Prerequisites: <CourseLink id={2157} href="/ECE#271A">ECE 271A</CourseLink>-B; graduate standing.</p>
</CourseCard>
<CourseCard id="212AN" shortName="ECE 212AN" longName="Principles of Nanoscience and Nanotechnology" units="4" url="/ECE#212AN">
	<p>Introduction to and rigorous treatment of electronic, photonic, magnetic, and mechanical properties of materials at the nanoscale. Concepts from mathematical physics, quantum mechanics, quantum optics, and electromagnetic theory will be introduced as appropriate. Students may not receive credit for both ECE 212A and <CourseLink id={2087} href="/ECE#212AN">ECE 212AN</CourseLink>.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="212BN" shortName="ECE 212BN" longName="Nanoelectronics" units="4" url="/ECE#212BN">
	<p>Quantum states and quantum transport of electrons; single-electron devices; nanoelectronic devices and system concepts; introduction to molecular and organic electronics. Students may not receive credit for both <CourseLink id={2088} href="/ECE#212BN">ECE 212BN</CourseLink> and ECE 212C.</p>

	<p>Prerequisites: <CourseLink id={2087} href="/ECE#212AN">ECE 212AN</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="212CN" shortName="ECE 212CN" longName="Nanophotonics" units="4" url="/ECE#212CN">
	<p>Photonic properties of artificially engineered inhomogeneous nanoscale composite materials incorporating dielectrics, semiconductors, and/or metals. Near-field localization effects and applications. Device and component applications. Students may not receive credit for both <CourseLink id={2089} href="/ECE#212CN">ECE 212CN</CourseLink> and 212B.</p>

	<p>Prerequisites: <CourseLink id={2088} href="/ECE#212BN">ECE 212BN</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="221" shortName="ECE 221" longName="Magnetic Materials: Principles and Applications" units="4" url="/ECE#221">
	<p>The basis of magnetism: classical and quantum mechanical points of view. Different kinds of magnetic materials. Magnetic phenomena including anisotropy, magnetostriction, domains, and magnetization dynamics. Current frontiers of nanomagnetics research including thin films and particles. Optical, data storage, and biomedical engineering applications of soft and hard magnetic materials.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="222A" shortName="ECE 222A" longName="Antennas and Their System Applications" units="4" url="/ECE#222A">
	<p>Antennas, waves, polarization. Friis transmission and Radar equations, dipoles, loops, slots, ground planes, traveling wave antennas, array theory, phased arrays, impedance, frequency independent antennas, microstrip antennas, cell phone antennas, system level implications such as MIMO, multi-beam and phased array systems. Recommended preparation: <CourseLink id={2007} href="/ECE#107">ECE 107</CourseLink> or an equivalent undergraduate course in electromagnetics.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="222B" shortName="ECE 222B" longName="Applied Electromagnetic Theory—Electromagnetics" units="4" url="/ECE#222B">
	<p>Graduate-level introductory course on electromagnetic theory with applications. Topics covered include Maxwell’s equations, plane waves in free space and in the presence of interfaces, polarization, fields in metallic and dielectric waveguides including surface waves; fields in metallic cavities, Green’s functions, electromagnetic field radiation and scattering.</p>

	<p>Prerequisites: <CourseLink id={2091} href="/ECE#222A">ECE 222A</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="222C" shortName="ECE 222C" longName="Applied Electromagnetic Theory—Computational Methods for Electromagnetics" units="4" url="/ECE#222C">
	<p>Computational techniques for numerical analysis of electromagnetic fields, including the finite difference time domain (FDTD) method, finite difference frequency domain (FDFD) method, method of moments (MOM), and finite element method (FEM). Practice in writing numerical codes. Review of commercial electromagnetic simulators.</p>

	<p>Prerequisites: <CourseLink id={2092} href="/ECE#222B">ECE 222B</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="222D" shortName="ECE 222D" longName="Advanced Antenna Design" units="4" url="/ECE#222D">
	<p>Review of 222A–B. Fourier transform, waveguide antennas. Mutual coupling, active impedance, Floquet modes in arrays. Microstrip antennas, surface waves. Reflector and lens analysis: taper, spillover, aperture and physical optics methods. Impedance surfaces. Advanced concepts: Subwavelength propagation, etc. (chosen by instructor). Recommended preparation: CE 222A, <CourseLink id={2092} href="/ECE#222B">ECE 222B</CourseLink>, or equivalent.</p>

	<p>Prerequisites: <CourseLink id={2093} href="/ECE#222C">ECE 222C</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="225A" shortName="ECE 225A" longName="Probability and Statistics for Data Science" units="4" url="/ECE#225A">
	<p>The course reinforces students’ intuitive, theoretical, and computational understanding of probability and statistics, and builds on these foundations to introduce more advanced concepts useful in both data science research and practice. The following topics will be covered: basics, convergence, estimation, and hypothesis testing. Python programs, examples, and visualizations will be used throughout the course.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="225B" shortName="ECE 225B" longName="Universal Probability and Its Applications in Data Science" units="4" url="/ECE#225B">
	<p>In many data science problems, there is only limited information on statistical properties of the data. This course develops the concept of universal probability that can be used as a proxy for the unknown distribution of data and provides a unified framework for several data science problems, including compression, portfolio selection, prediction, and classification.</p>

	<p>Prerequisites: <CourseLink id={2095} href="/ECE#225A">ECE 225A</CourseLink> or <CourseLink id={2121} href="/ECE#250">ECE 250</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="226" shortName="ECE 226" longName="Optimization and Acceleration of Deep Learning on Various Hardware Platforms" units="4" url="/ECE#226">
	<p>This course aims to present the mathematical and computational challenges for holistic content/algorithm/hardware codesign of an efficient deep learning framework. Participants will discuss selected topics including DNNs, CNNs, and RNNs in both supervised and unsupervised settings. Special emphasis will be on optimizing DL physical performance on different hardware platforms. The hardware platforms include CPU-CPU and CPU-GPU architectures.</p>

	<p>Prerequisites: <CourseLink id={2121} href="/ECE#250">ECE 250</CourseLink> or <CourseLink id={2156} href="/ECE#269">ECE 269</CourseLink> or <CourseLink id={2157} href="/ECE#271A">ECE 271A</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="227" shortName="ECE 227" longName="Big Network Data" units="4" url="/ECE#227">
	<p>A course on network science driven by data analysis. The class will focus on both theoretical and empirical analysis performed on real data, including technological networks, social networks, information networks, biological networks, economic networks, and financial networks. Students will be exposed to a number of state-of-the-art software libraries for network data analysis and visualization via the Python notebook environment. Previous Python programming experience recommended.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="228" shortName="ECE 228" longName="Machine Learning for Physical Applications" units="4" url="/ECE#228">
	<p>Machine learning has received enormous interest. To learn from data we use probability theory, which has been a mainstay of statistics and engineering for centuries. The class will focus on implementations for physical problems. Topics: Gaussian probabilities, linear models for regression, linear models for classification, neural networks, kernel methods, support vector machines, graphical models, mixture models, sampling methods, and sequential estimation.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="229" shortName="ECE 229" longName="Computational Data Analysis and Product Development" units="4" url="/ECE#229">
	<p>Students learn to create statistical models and use computation and simulations to develop insight and deliver value to the end-user. Randomly assigned teams will learn to develop and deploy a data science product, write and document code in an ongoing process, produce corresponding user documentation and communicate product value verbally and in writing, and ultimately deploy and maintain products on a cloud platform. Recommended preparation: <CourseLink id={2034} href="/ECE#143">ECE 143</CourseLink>.</p>

	<p>Prerequisites: <CourseLink id={2095} href="/ECE#225A">ECE 225A</CourseLink> or <CourseLink id={2156} href="/ECE#269">ECE 269</CourseLink>, graduate standing.</p>
</CourseCard>
<CourseCard id="230A" shortName="ECE 230A" longName="Solid State Electronics I" units="4" url="/ECE#230A">
	<p>This course is designed to provide a general background in solid state electronic materials and devices. Course content emphasizes the fundamental and current issues of semiconductor physics related to the ECE solid state electronics sequences. Recommended preparation: <CourseLink id={2025} href="/ECE#135A">ECE 135A</CourseLink>-B or equivalent.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="230B" shortName="ECE 230B" longName="Solid State Electronics II" units="4" url="/ECE#230B">
	<p>Physics of solid-state electronic devices, including p-n diodes, Schottky diodes, field-effect transistors, bipolar transistors, pnpn structures. Computer simulation of devices, scaling characteristics, high frequency performance, and circuit models.</p>

	<p>Prerequisites: <CourseLink id={2101} href="/ECE#230A">ECE 230A</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="230C" shortName="ECE 230C" longName="Solid State Electronics III" units="4" url="/ECE#230C">
	<p>This course is designed to provide a treatise of semiconductor devices based on solid state phenomena. Band structures carrier scattering and recombination processes and their influence on transport properties will be emphasized.</p>

	<p>Prerequisites: <CourseLink id={2101} href="/ECE#230A">ECE 230A</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="235" shortName="ECE 235" longName="Nanometer-Scale VLSI Devices" units="4" url="/ECE#235">
	<p>This course covers modern research topics in sub-100 nm scale, state-of-the-art silicon VLSI devices. Starting with the fundamentals of CMOS scaling to nanometer dimensions, various advanced device and circuit concepts, including RF CMOS, low power CMOS, silicon memory, silicon-on-insulator, SiGe bipolar, strained silicon MOSFET’s, etc. will be taught. The physics of near-ballistic transport in an ultimately scaled 10 nm MOSFET will be discussed in light of the recently developed scattering theory.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="236A" shortName="ECE 236A" longName="Fundamentals of Heterostructure Materials and Devices" units="4" url="/ECE#236A">
	<p>This course comprehensively treats heterostructure materials and devices. Topics include band alignments in semiconductor heterostructures and their measurement techniques, crystal growth, thermodynamics and kinetics, crystal and misfit defects, lattice mismatch, strain energetics and coherency limits, influence of strain on energy band-edges, quantum wells, 2DEG and superlattices, lateral and vertical transport in heterostructures, tunnel diodes, nitrides, polarization effects, HEMTs. Recommended preparation: completion of <CourseLink id={2102} href="/ECE#230B">ECE 230B</CourseLink> and <CourseLink id={2103} href="/ECE#230C">ECE 230C</CourseLink>.</p>

	<p>Prerequisites: <CourseLink id={2101} href="/ECE#230A">ECE 230A</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="236B" shortName="ECE 236B" longName="Optical Processes in Semiconductors" units="4" url="/ECE#236B">
	<p>Absorption and emission of radiation in semiconductors. Radiative transition and nonradiative recombination. Laser, modulators, and photodetector devices will be discussed. Recommended preparation: <CourseLink id={2101} href="/ECE#230A">ECE 230A</CourseLink>, Solid State Electronics I, and <CourseLink id={2103} href="/ECE#230C">ECE 230C</CourseLink>, Solid State Electronics III, or equivalent.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="236C" shortName="ECE 236C" longName="Heterojunction Field-Effect Transistors" units="4" url="/ECE#236C">
	<p>The physics and circuit applications of heterojunction field-effect transistors (HFETs) and heterojunction bipolar transistors (HBTs). Operating principles of FETs and BJTs are reviewed, and opportunities for improving their performance with suitable material choices and bandgap engineering are highlighted. SiGe and III-V HBTs, III-V FETs, and current research areas are covered. Microwave characteristics, models and representative circuit applications. Students who have already completed <CourseLink id={2107} href="/ECE#236C">ECE 236C</CourseLink> and/or D should not enroll in this course. Recommended preparation: <CourseLink id={2102} href="/ECE#230B">ECE 230B</CourseLink> or equivalent course with emphasis on physics of solid-state electronic devices.</p>

	<p>Prerequisites: <CourseLink id={2106} href="/ECE#236B">ECE 236B</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="238A" shortName="ECE 238A" longName="Thermodynamics of Solids" units="4" url="/ECE#238A">
	<p>The thermodynamics and statistical mechanics of solids. Basic concepts, equilibrium properties of alloy systems, thermodynamic information from phase diagrams, surfaces and interfaces, crystalline defects. Cross-listed with Materials Science 201A and <CourseLink id={2349} href="/MAE#271A">MAE 271A</CourseLink>.</p>

	<p>Prerequisites: consent of instructor.</p>
</CourseCard>
<CourseCard id="238B" shortName="ECE 238B" longName="Solid State Diffusion and Reaction Kinetics" units="4" url="/ECE#238B">
	<p>Thermally activated processes. Boltzman factor, homogeneous and heterogeneous reactions, solid state diffusion, Fick’s law, diffusion mechanisms, Kirkendall effects, Boltzmann-Manato analysis, high diffusivity paths. Cross-listed with Materials Science 201B and <CourseLink id={2350} href="/MAE#271B">MAE 271B</CourseLink>.</p>

	<p>Prerequisites: <CourseLink id={2108} href="/ECE#238A">ECE 238A</CourseLink>.</p>
</CourseCard>
<CourseCard id="240A" shortName="ECE 240A" longName="Lasers and Optics" units="4" url="/ECE#240A">
	<p>Fresnel and Fraunhofer diffraction theory. Optical resonators, interferometry. Gaussian beam propagation and transformation. Laser oscillation and amplification, Q-switching and mode locking of lasers, some specific laser systems. Recommended preparation: <CourseLink id={2007} href="/ECE#107">ECE 107</CourseLink> and <CourseLink id={2063} href="/ECE#182">ECE 182</CourseLink> or equivalent, introductory quantum mechanics or <CourseLink id={2064} href="/ECE#183">ECE 183</CourseLink>.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="240B" shortName="ECE 240B" longName="Optical Information Processing" units="4" url="/ECE#240B">
	<p>Space-bandwidth product, superresolution, space-variant optical system, partial coherence, image processing with coherent and incoherent light, processing with feedback, real-time light modulators for hybrid processing, nonlinear processing. Optical computing and other applications. Recommended preparation: <CourseLink id={2063} href="/ECE#182">ECE 182</CourseLink> or equivalent.</p>

	<p>Prerequisites: <CourseLink id={2110} href="/ECE#240A">ECE 240A</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="240C" shortName="ECE 240C" longName="Optical Modulation and Detection" units="4" url="/ECE#240C">
	<p>Propagation of waves and rays in anisotropic media. Electro-optical switching and modulation. Acousto-optical deflection and modulation. Detection theory. Heterodyne detection, incoherent and coherent detection. Recommended preparation: <CourseLink id={2062} href="/ECE#181">ECE 181</CourseLink>, <CourseLink id={2064} href="/ECE#183">ECE 183</CourseLink>, or equivalent.</p>

	<p>Prerequisites: <CourseLink id={2111} href="/ECE#240B">ECE 240B</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="241A" shortName="ECE 241A" longName="Nonlinear Optics" units="4" url="/ECE#241A">
	<p>Second harmonic generation (color conversion), parametric amplification and oscillation, photorefractive effects and four-wave mixing, optical bistability; applications. Recommended preparation: <CourseLink id={2110} href="/ECE#240A">ECE 240A</CourseLink>, C.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="241B" shortName="ECE 241B" longName="Integrated Photonics" units="4" url="/ECE#241B">
	<p>Integrated photonic devices and components made using silicon, compound semiconductors, thin-film crystals, and dielectric materials. Design, analysis, and applications of components (e.g., waveguides, microresonators, couplers, modulators, lasers, and detectors) for use in communications, sensing, metrology, and other areas.</p>

	<p>Prerequisites: <CourseLink id={2113} href="/ECE#241A">ECE 241A</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="241C" shortName="ECE 241C" longName="Holographic Optical Elements" units="4" url="/ECE#241C">
	<p>Fresnel, Fraunhofer, and Fourier holography. Analysis of thin and volume holograms, reflection and transmission holograms, color and polarization holograms. Optically recorded and computer-generated holography. Applications to information storage, optical interconnects, 2-D and 3-D display, pattern recognition, and image processing. Recommended preparation: <CourseLink id={2063} href="/ECE#182">ECE 182</CourseLink> or equivalent.</p>

	<p>Prerequisites: <CourseLink id={2114} href="/ECE#241B">ECE 241B</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="243B" shortName="ECE 243B" longName="Optical Fiber Communication" units="4" url="/ECE#243B">
	<p>Optical fibers, waveguides, laser communication system. Modulation and demodulation; detection processes and communication-receivers. Recommended preparation: <CourseLink id={2110} href="/ECE#240A">ECE 240A</CourseLink>-B-C or equivalent.</p>

	<p>Prerequisites: ECE 243A; graduate standing.</p>
</CourseCard>
<CourseCard id="244A" shortName="ECE 244A" longName="Statistical Optics" units="4" url="/ECE#244A">
	<p>Introduction to statistical phenomena in optics including first order properties of light waves generated from various sources. Coherence of optical waves, high-order coherence. Partial coherence and its effects on imaging systems. Imaging in presence of randomly inhomogeneous medium. Limits in photoelectric detection of light. Recommended preparation: <CourseLink id={2110} href="/ECE#240A">ECE 240A</CourseLink>-B.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="247A" shortName="ECE 247A" longName="Advanced BioPhotonics" units="4" url="/ECE#247A">
	<p>Basic physics and chemistry for the interaction of photons with matter, including both biological and synthetic materials; use of photonic radiation pressure for manipulation of objects and materials; advanced optoelectronic detection systems, devices and methods, including time resolved fluorescent and chemiluminescent methods, fluorescent energy transfer (FRET) techniques, quantum dots, and near-field optical techniques; underlying mechanisms of the light sensitive biological systems, including chloroplasts for photosynthetic energy conversion and the basis of vision processes. Cross-listed with <CourseLink id={1790} href="/BENG#247A">BENG 247A</CourseLink> and <CourseLink id={2465} href="/NANO#247A">NANO 247A</CourseLink>.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="247B" shortName="ECE 247B" longName="BioElectronics" units="4" url="/ECE#247B">
	<p>Topics to be covered will include photolithographic techniques for high-density DNA microarray production, incorporation of CMOS control into electronic DNA microarrays, direct electronic detection technology used in microarrays and biosensor devices and focus on problems related to making highly integrated devices (lab-on-a-chip, in-vivo biosensors, etc.) from heterogeneous materials and components. Cross-listed with <CourseLink id={1791} href="/BENG#247B">BENG 247B</CourseLink> and <CourseLink id={2466} href="/NANO#247B">NANO 247B</CourseLink>.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="247C" shortName="ECE 247C" longName="BioNanotechnology" units="4" url="/ECE#247C">
	<p>Topics include nanosensors and nanodevices for both clinical diagnostics and biowarfare (bioterror) agent detection; nanostructures for drug delivery; nanoarrays and nanodevices; use of nanoanalytical devices and systems; methods and techniques for modification or functionalization of nanoparticles and nanostructures with biological molecules; nanostructural aspects of fuel cells and biofuel cells; potential use of DNA and other biomolecules for computing and ultra-high-density data storage. Cross-listed with <CourseLink id={1792} href="/BENG#247C">BENG 247C</CourseLink> and <CourseLink id={2467} href="/NANO#247C">NANO 247C</CourseLink>.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="250" shortName="ECE 250" longName="Random Processes" units="4" url="/ECE#250">
	<p>Random variables, probability distributions and densities, characteristic functions. Convergence in probability and in quadratic mean, Stochastic processes, stationarity. Processes with orthogonal and independent increments. Power spectrum and power spectral density. Stochastic integrals and derivatives. Spectral representation of wide sense stationary processes, harmonizable processes, moving average representations. Recommended preparation: <CourseLink id={2039} href="/ECE#153">ECE 153</CourseLink>.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="251A" shortName="ECE 251A" longName="Digital Signal Processing I" units="4" url="/ECE#251A">
	<p>Discrete random signals; conventional (FFT based) spectral estimation. Coherence and transfer function estimation; model-based spectral estimation; linear prediction and AR modeling. Levinson-Durbin algorithm and lattice filters, minimum variance spectrum estimation. Cross-listed with <CourseLink id={5993} href="/SIO#SIOC207B">SIOC 207B</CourseLink>. <CourseLink id={5992} href="/SIO#SIOC207A">SIOC 207A</CourseLink> is intended for graduate students who have not had an undergraduate course in DSP. Recommended preparation: <CourseLink id={2039} href="/ECE#153">ECE 153</CourseLink>, Probability, or <CourseLink id={2121} href="/ECE#250">ECE 250</CourseLink>, Random Processes; <CourseLink id={2047} href="/ECE#161A">ECE 161A</CourseLink>, DSP; <CourseLink id={2124} href="/ECE#251C">ECE 251C</CourseLink>, Filter Banks and Wavelets; <CourseLink id={2156} href="/ECE#269">ECE 269</CourseLink>, Linear Algebra and Application, or equivalent and <CourseLink id={5992} href="/SIO#SIOC207A">SIOC 207A</CourseLink>, Fundamentals of DSP, or equivalent.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="251B" shortName="ECE 251B" longName="Digital Signal Processing II" units="4" url="/ECE#251B">
	<p>Adaptive filter theory, estimation errors for recursive least squares and gradient algorithms, convergence and tracking analysis of LMD, RLS, and Kalman filtering algorithms, comparative performance of Weiner and adaptive filters, transversal and lattice filter implementations, performance analysis for equalization, noise cancelling, and linear prediction applications. Cross-listed with SIO 207C.</p>

	<p>Prerequisites: graduate standing; <CourseLink id={2122} href="/ECE#251A">ECE 251A</CourseLink> (for <CourseLink id={2123} href="/ECE#251B">ECE 251B</CourseLink>); SIO 207B (for SIO 207C).</p>
</CourseCard>
<CourseCard id="251C" shortName="ECE 251C" longName="Filter Banks and Wavelets" units="4" url="/ECE#251C">
	<p>Fundamentals of multirate systems (Noble Identities, Polyphase representations), maximally decimated filter banks (QMF filters for 2-channels, M-channel perfect reconstruction systems), Paraunitary perfect reconstruction filter banks, the wavelet transform (Multiresolution, discrete wavelet transform, filter banks and wavelet).</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="251D" shortName="ECE 251D" longName="Array Processing" units="4" url="/ECE#251D">
	<p>The coherent processing of data collected from sensors distributed in space for signal enhancement and noise rejection purposes or wavefield directionality estimation. Conventional and adaptive beamforming. Matched field processing. Sparse array design and processing techniques. Applications to acoustics, geophysics, and electromagnetics. Students will not receive credit for both <CourseLink id={2125} href="/ECE#251D">ECE 251D</CourseLink> and <CourseLink id={5995} href="/SIO#SIOC207D">SIOC 207D</CourseLink>. Cross-listed with <CourseLink id={5995} href="/SIO#SIOC207D">SIOC 207D</CourseLink>.</p>

	<p>Prerequisites: graduate standing; <CourseLink id={2122} href="/ECE#251A">ECE 251A</CourseLink> or <CourseLink id={5993} href="/SIO#SIOC207B">SIOC 207B</CourseLink>.</p>
</CourseCard>
<CourseCard id="252A" shortName="ECE 252A" longName="Speech Compression" units="4" url="/ECE#252A">
	<p>Speech signals, production and perception, compression theory, high rate compression using waveform coding (PCM, DPCM, ADPCM, . . .), DSP tools for low rate coding, LPC vocoders, sinusoidal transform coding, multiband coding, medium rate coding using code excited linear prediction (CELP). Recommended preparation: <CourseLink id={2047} href="/ECE#161A">ECE 161A</CourseLink>.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="252B" shortName="ECE 252B" longName="Speech Recognition" units="4" url="/ECE#252B">
	<p>Signal analysis methods for recognition, dynamic time warping, isolated word recognition, hidden Markov models, connected word, and continuous speech recognition.</p>

	<p>Prerequisites: <CourseLink id={2126} href="/ECE#252A">ECE 252A</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="253" shortName="ECE 253" longName="Fundamentals of Digital Image Processing" units="4" url="/ECE#253">
	<p>Image quantization and sampling, image transforms, image enhancement, image compression. Recommended preparation: <CourseLink id={2009} href="/ECE#109">ECE 109</CourseLink>, 153, ECE 161, <CourseLink id={2047} href="/ECE#161A">ECE 161A</CourseLink>.</p>

</CourseCard>
<CourseCard id="254" shortName="ECE 254" longName="Detection Theory" units="4" url="/ECE#254">
	<p>Hypothesis testing, detection of signals in white and colored Gaussian noise; estimation of signal parameters, maximum-likelihood detection; resolution of signals; detection and estimation of stochastic signals; applications to radar, sonar, and communications. Recommended preparation: <CourseLink id={2039} href="/ECE#153">ECE 153</CourseLink>.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="255A" shortName="ECE 255A" longName="Information Theory" units="4" url="/ECE#255A">
	<p>Introduction to basic concepts, source coding theorems, capacity, noisy-channel coding theorem. Recommended preparation: ECE 154A-B-C.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="255B" shortName="ECE 255B" longName="Source Coding" units="4" url="/ECE#255B">
	<p>Theory and practice of lossy source coding, vector quantization, predictive and differential encoding, universal coding, source-channel coding, asymptotic theory, speech and image applications. Students that have taken 255BN cannot take 255B for credit. Recommended preparation: <CourseLink id={2121} href="/ECE#250">ECE 250</CourseLink>, and 259A or 259AN.</p>

	<p>Prerequisites: <CourseLink id={2130} href="/ECE#255A">ECE 255A</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="255C" shortName="ECE 255C" longName="Network Information Theory" units="4" url="/ECE#255C">
	<p>The course aims to provide a broad coverage of key results, techniques, and open problems in network information theory. Topics include background (information measures and typical sequences, point-to-point communication) and single-hop networks (multiple access channels, degraded broadcast channels, interference channels, channels with state, general broadcast channels, Gaussian vector channels, distributed lossless source coding, source coding with side information).</p>

	<p>Prerequisites: <CourseLink id={2121} href="/ECE#250">ECE 250</CourseLink>; <CourseLink id={2131} href="/ECE#255B">ECE 255B</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="256" shortName="ECE 256" longName="Fundamentals of Image and Video Compression" units="4" url="/ECE#256">
	<p>This course provides the theoretical background to image and video compression. Topics cover basic coding tools such as entropy coding, transform, and quantization as well as advanced coding methods: motion estimation and compensation, error resilient coding and scalable coding. Recommended preparation: MATLAB programming.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="257A" shortName="ECE 257A" longName="Modern Communication Networks" units="4" url="/ECE#257A">
	<p>This course focuses on modern local area networks (Wi-Fi, Ethernet, etc.) and wide area networks (LTE, 5G, etc.). Topics to be covered include end-to-end network architecture, physical layer packet processing, medium access control protocols, mobility management and mobile IP, TCP over wireless, mobile applications (e.g., mobile web, real-time video streaming, and telephony). Recommended preparation: <CourseLink id={2044} href="/ECE#158A">ECE 158A</CourseLink>.</p>

	<p>Prerequisites: graduate standing or consent of instructor.</p>
</CourseCard>
<CourseCard id="257B" shortName="ECE 257B" longName="Principles of Wireless Networks" units="4" url="/ECE#257B">
	<p>This course will focus on the principles, architectures, and analytical methodologies for design of multiuser wireless networks. Topics to be covered include cellular approaches, call processing, digital modulation, MIMO technology, broadband networks, ad-hoc networks, and wireless packet access. Recommended preparation: ECE 159A and 154B, or equivalent.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="257C" shortName="ECE 257C" longName="Stochastic Wireless Networks Models" units="4" url="/ECE#257C">
	<p>Elements of spatial point processes. Spatial stochastic models of wireless networks. Topological structure, interference, stochastic dependencies. Elements of network information theory/statistical physics models of information flow. Role of signal propagation/random fading models. Decentralized operation, route discovery, architectural principles. Energy limitations/random failures. Recommended preparation: previous exposure to stochastic processes and information theory.</p>

	<p>Prerequisites: <CourseLink id={2135} href="/ECE#257B">ECE 257B</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="258A" shortName="ECE 258A" longName="Digital Communications I" units="4" url="/ECE#258A">
	<p>Digital communication theory including performance of various modulation techniques, effects of intersymbol interference, adaptive equalization, spread spectrum communication. Recommended preparation: <CourseLink id={2040} href="/ECE#155">ECE 155</CourseLink>.</p>

	<p>Prerequisites: <CourseLink id={2121} href="/ECE#250">ECE 250</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="258B" shortName="ECE 258B" longName="Digital Communications II" units="4" url="/ECE#258B">
	<p>Digital communication theory including performance of various modulation techniques, effects of intersymbol interference, adaptive equalization, and spread spectrum communication.</p>

	<p>Prerequisites: <CourseLink id={2137} href="/ECE#258A">ECE 258A</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="259A" shortName="ECE 259A" longName="Algebraic Coding" units="4" url="/ECE#259A">
	<p>Fundamentals of block codes, introduction to groups, rings and finite fields, nonbinary codes, cyclic codes such as BCH and RS codes, decoding algorithms, applications. Students who have taken ECE 259AN may not receive credit for <CourseLink id={2139} href="/ECE#259A">ECE 259A</CourseLink>.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="259B" shortName="ECE 259B" longName="Probabilistic Coding" units="4" url="/ECE#259B">
	<p>Convolutional codes, maximum-likelihood (ML) decoding, maximum a-posteriori (MAP) decoding, parallel and serial concatenation architectures, turbo codes, repeat-accumulate (RA) codes, the turbo principle, turbo decoding, graph-based codes, message-passing decoding, low-density parity check codes, threshold analysis, applications. Students who have taken ECE 259BN may not receive credit for <CourseLink id={2140} href="/ECE#259B">ECE 259B</CourseLink>. Recommended preparation: ECE 154A-B-C.</p>

	<p>Prerequisites: <CourseLink id={2139} href="/ECE#259A">ECE 259A</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="259C" shortName="ECE 259C" longName="Advanced Topics in Coding" units="4" url="/ECE#259C">
	<p>Advanced topics in coding theory. Course contents vary by instructor. Example course topics: Coded-modulation for bandwidth-efficient data transmission; advanced algebraic and combinatorial coding theory; space-time coding for wireless communications; constrained coding for digital recording. Students who have taken ECE 259CN may not receive credit for <CourseLink id={2141} href="/ECE#259C">ECE 259C</CourseLink>.</p>

	<p>Prerequisites: <CourseLink id={2139} href="/ECE#259A">ECE 259A</CourseLink>-B; graduate standing.</p>
</CourseCard>
<CourseCard id="260A" shortName="ECE 260A" longName="VLSI Digital System Algorithms and Architectures" units="4" url="/ECE#260A">
	<p>Custom and semicustom VLSI design from both the circuit and system designer’s perspective. MOS transistor theory, circuit characterization, and performance estimation. CMOS logic design will be emphasized. Computer-aided design (CAD) tools for transistor level simulation, layout and verification will be introduced. Includes two hours of laboratory hours per week. Recommended preparation: undergraduate-level semiconductor electronics and digital system design, <CourseLink id={2052} href="/ECE#165">ECE 165</CourseLink> or equivalent.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="260B" shortName="ECE 260B" longName="VLSI Integrated Circuits and Systems Design" units="4" url="/ECE#260B">
	<p>VLSI implementation methodology across block, circuit, and layout levels of abstraction. Circuit building blocks including embedded memory and clock distribution. Computer-aided design (synthesis, place-and-route, verification) and performance analyses, and small-group block implementation projects spanning RTL to tape-out using leading-edge EDA tools. Cross-listed with <CourseLink id={1945} href="/CSE#241A">CSE 241A</CourseLink>. Recommended preparation: <CourseLink id={2052} href="/ECE#165">ECE 165</CourseLink>.</p>

	<p>Prerequisites: <CourseLink id={2142} href="/ECE#260A">ECE 260A</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="260C" shortName="ECE 260C" longName="VLSI Advanced Topics" units="4" url="/ECE#260C">
	<p>Advanced topics in design practices and methodologies for modern system-on-chip design. Different design alternatives are introduced and analyzed. Advanced design tools are used to design a hardware-software system. Class discussion, participation, and presentations of projects and special topics assignments are emphasized.</p>

	<p>Prerequisites: <CourseLink id={2143} href="/ECE#260B">ECE 260B</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="264A" shortName="ECE 264A" longName="CMOS Analog Integrated Circuits and Systems I" units="4" url="/ECE#264A">
	<p>Frequency response of the basic CMOS gain stage and current mirror configurations. Advanced feedback and stability analysis; compensation techniques. High-Performance CMOS operational amplifier topologies. Analysis of noise and distortion. Recommended preparation: <CourseLink id={2051} href="/ECE#164">ECE 164</CourseLink> and <CourseLink id={2039} href="/ECE#153">ECE 153</CourseLink>, or equivalent courses.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="264B" shortName="ECE 264B" longName="CMOS Analog Integrated Circuits and Systems II" units="4" url="/ECE#264B">
	<p>Nonideal effects and their mitigation in high-performance operational amplifiers. Switched-capacitor circuit techniques: CMOS circuit topologies, analysis and mitigation of nonideal effects, and filter synthesis. Overview of CMOS samplers, data converters, and PLLs. Recommended preparation: <CourseLink id={2047} href="/ECE#161A">ECE 161A</CourseLink>, Introduction to Digital Signal Processing,  and <CourseLink id={2122} href="/ECE#251A">ECE 251A</CourseLink>, Digital Signal Processing I.</p>

	<p>Prerequisites: <CourseLink id={2121} href="/ECE#250">ECE 250</CourseLink> or <CourseLink id={2145} href="/ECE#264A">ECE 264A</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="264C" shortName="ECE 264C" longName="CMOS Analog Integrated Circuits and Systems III" units="4" url="/ECE#264C">
	<p>Integrated CMOS analog/digital systems: Analog to digital and digital to analog converters, Nyquist versus oversampling, linearity, jitter, randomization, calibration, speed versus resolution, pipeline, folding, interpolation, averaging. Recommended preparation: <CourseLink id={2050} href="/ECE#163">ECE 163</CourseLink> and 164.</p>

	<p>Prerequisites: <CourseLink id={2146} href="/ECE#264B">ECE 264B</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="264D" shortName="ECE 264D" longName="CMOS Analog Integrated Circuits and Systems IV" units="4" url="/ECE#264D">
	<p>PLL: Phase noise effect, VCO, phase detector, charge pump, integer/fractional-N frequency synthesizer, clock and data recovery, decision feedback. Filter: Continuous-time filter, I-Q complex filter, raised-cosine, Gaussian, delay, zero equalizers. Recommended preparation: <CourseLink id={2122} href="/ECE#251A">ECE 251A</CourseLink>. Digital Signal Processing I.</p>

	<p>Prerequisites: <CourseLink id={2121} href="/ECE#250">ECE 250</CourseLink> or <CourseLink id={2145} href="/ECE#264A">ECE 264A</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="265A" shortName="ECE 265A" longName="Communication Circuit Design I" units="4" url="/ECE#265A">
	<p>Introduction to noise and linearity concepts. System budgeting for optimum dynamic range. Frequency plan tradeoffs. Linearity analysis techniques. Down-conversion and up-conversion techniques. Modulation and demodulation. Microwave and RF system design communications. Current research topics in the field.</p>

	<p>Prerequisites: <CourseLink id={2053} href="/ECE#166">ECE 166</CourseLink> or consent of instructor; graduate standing.</p>
</CourseCard>
<CourseCard id="265B" shortName="ECE 265B" longName="Communication Circuit Design II" units="4" url="/ECE#265B">
	<p>Radio frequency integrated circuits: low-noise amplifiers, AGCs, mixers, filters, voltage-controlled oscillators. BJT and CMOS technologies for radio frequency and microwave applications. Device modeling for radio frequency applications. Design and device tradeoffs of linearity, noise, power dissipation, and dynamic range. Current research topics in the field.</p>

	<p>Prerequisites: <CourseLink id={2053} href="/ECE#166">ECE 166</CourseLink> and <CourseLink id={2149} href="/ECE#265A">ECE 265A</CourseLink> or consent of instructor; graduate standing.</p>
</CourseCard>
<CourseCard id="265C" shortName="ECE 265C" longName="Power Amplifiers for Wireless Communications" units="4" url="/ECE#265C">
	<p>Design of power amplifiers for mobile terminals and base-stations, with emphasis on high linearity and efficiency. After a discussion of classical designs (Class A, AB, B, C, D, E, F, and S), linearization procedures are presented and composite architectures (envelope tracking, EER, and Doherty) are covered. Familiarity with basic microwave design and communication system architecture is assumed. Recommended preparation: <CourseLink id={2053} href="/ECE#166">ECE 166</CourseLink>.</p>

	<p>Prerequisites: <CourseLink id={2149} href="/ECE#265A">ECE 265A</CourseLink>-B; consent of instructor; graduate standing.</p>
</CourseCard>
<CourseCard id="265D" shortName="ECE 265D" longName="Communication Circuits III" units="4" url="/ECE#265D">
	<p>Direct conversion and IF up-conversion mixers, harmonic and spurious emissions, I/Q mismatch, LO leakage, receive/GPS band noise, harmonic and 4fmod suppression. Driver amplifiers, load-line, OIP3/ACPR, P1dB, Psat, PAE, in-band noise and distortion, out-of-band noise and emissions. VCO design, in-band and out-of-band phase noise. N-path filters. Diversity, MIMO, carrier aggregation and beamforming receiver and transmitter architectures.</p>

	<p>Prerequisites: <CourseLink id={2149} href="/ECE#265A">ECE 265A</CourseLink>-B; graduate standing.</p>
</CourseCard>
<CourseCard id="266" shortName="ECE 266" longName="CMOS Circuit Lab" units="4" url="/ECE#266">
	<p>Physical design of CMOS circuits through the tapeout and measurement life cycle. Layout techniques covering process variation, parasitics, ESD, and pad ring assembly. Students will learn the entire tapeout tool flow including DRC, LVS, and RCX. Discussion of packaging and PCB design along with how to measure and characterize the performance of CMOS circuits.</p>

	<p>Prerequisites: <CourseLink id={2145} href="/ECE#264A">ECE 264A</CourseLink>-B or <CourseLink id={2149} href="/ECE#265A">ECE 265A</CourseLink>-B; graduate standing.</p>
</CourseCard>
<CourseCard id="267" shortName="ECE 267" longName="Network/Graph Algorithms and Analysis" units="4" url="/ECE#267">
	<p>Modern theory of networks from the algorithmic perspective with emphasis on the foundations in terms of performance analysis and design. Topics include algorithmic questions arising in the context of scheduling, routing, and congestion control in communication networks, including wired, wireless, sensor, and social networks.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="268" shortName="ECE 268" longName="Security of Hardware Embedded Systems" units="4" url="/ECE#268">
	<p>The course gives an overview of areas of security and protection of modern hardware, embedded systems, and IoTs. Covers essential cryptographic methodologies and blocks required for building a secure system. Topics include low overhead security, physical and side-channel attacks, physical security primitives, physical security and proofs of presence, hardware-based secure program execution, scalable implementation of secure functions, emerging technologies, and rising threats. Recommended preparation: Programming in a standard programming language. Undergraduate level knowledge of the IC design flow and digital designs.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="269" shortName="ECE 269" longName="Linear Algebra and Application" units="4" url="/ECE#269">
	<p>This course will build mathematical foundations of linear algebraic techniques and justify their use in signal processing, communication, and machine learning. Topics include geometry of vector and Hilbert spaces, orthogonal projection, systems of linear equations and role of sparsity, eigenanalysis, Hermitian matrices and variational characterization, positive semidefinite matrices, singular value decomposition, and principal component analysis.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="271A" shortName="ECE 271A" longName="Statistical Learning I" units="4" url="/ECE#271A">
	<p>Bayesian decision theory; parameter estimation; maximum likelihood; the bias-variance trade-off; Bayesian estimation; the predictive distribution; conjugate and noninformative priors; dimensionality and dimensionality reduction; principal component analysis; Fisher’s linear discriminant analysis; density estimation; parametric vs. kernel-based methods; expectation-maximization; applications. Recommended preparation: <CourseLink id={2009} href="/ECE#109">ECE 109</CourseLink>.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="271B" shortName="ECE 271B" longName="Statistical Learning II" units="4" url="/ECE#271B">
	<p>Linear discriminants; the Perceptron; the margin and large margin classifiers; learning theory; empirical vs. structural risk minimization; the VC dimension; kernel functions; reproducing kernel Hilbert spaces; regularization theory; Lagrangian optimization; duality theory; the support vector machine; boosting; Gaussian processes; applications. Recommended preparation: <CourseLink id={2009} href="/ECE#109">ECE 109</CourseLink>.</p>

	<p>Prerequisites: <CourseLink id={2157} href="/ECE#271A">ECE 271A</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="271C" shortName="ECE 271C" longName="Deep Learning and Applications" units="4" url="/ECE#271C">
	<p>Foundations of deep learning. Deep learning architectures and learning algorithms. Feedforward, convolutional, and recurrent networks. Regularization. Applications to vision, speech, or text processing.</p>

	<p>Prerequisites: <CourseLink id={2157} href="/ECE#271A">ECE 271A</CourseLink>-B; graduate standing.</p>
</CourseCard>
<CourseCard id="272A" shortName="ECE 272A" longName="Stochastic Processes in Dynamic Systems I" units="4" url="/ECE#272A">
	<p>Diffusion equations, linear and nonlinear estimation and detection, random fields, optimization of stochastic dynamic systems, applications of stochastic optimization to problems. Recommended preparation: <CourseLink id={2121} href="/ECE#250">ECE 250</CourseLink>.</p>

	<p>Prerequisites: <CourseLink id={2156} href="/ECE#269">ECE 269</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="272B" shortName="ECE 272B" longName="Stochastic Processes in Dynamic Systems II" units="4" url="/ECE#272B">
	<p>Continuous and discrete random processes, Markov models and hidden Markov models, Martingales, linear and nonlinear estimation. Applications in mathematical finance and real options.</p>

	<p>Prerequisites: <CourseLink id={2160} href="/ECE#272A">ECE 272A</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="273" shortName="ECE 273" longName="Convex Optimization and Applications" units="4" url="/ECE#273">
	<p>This course covers some convex optimization theory and algorithms. It will mainly focus on recognizing and formulating convex problems, duality, and applications in a variety of fields (system design, pattern recognition, combinatorial optimization, financial engineering, etc.).</p>

	<p>Prerequisites: <CourseLink id={2156} href="/ECE#269">ECE 269</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="275A" shortName="ECE 275A" longName="Parameter Estimation I" units="4" url="/ECE#275A">
	<p>Linear least Squares (batch, recursive, total, sparse, pseudoinverse, QR, SVD); Statistical figures of merit (bias, consistency, Cramer-Rao lower-bound, efficiency); Maximum likelihood estimation (MLE); Sufficient statistics; Algorithms for computing the MLE including the Expectation Maximation (EM) algorithm. The problem of missing information; the problem of outliers. Recommended preparation: <CourseLink id={2009} href="/ECE#109">ECE 109</CourseLink> and <CourseLink id={2039} href="/ECE#153">ECE 153</CourseLink>.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="275B" shortName="ECE 275B" longName="Parameter Estimation II" units="4" url="/ECE#275B">
	<p>The Bayesian statistical framework; Parameter and state estimation of Hidden Markov Models, including Kalman Filtering and the Viterbi and Baum-Welsh algorithms. A solid foundation is provided for follow-up courses in Bayesian machine learning theory. Recommended preparation: <CourseLink id={2039} href="/ECE#153">ECE 153</CourseLink>.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="276A" shortName="ECE 276A" longName="Sensing and Estimation in Robotics" units="4" url="/ECE#276A">
	<p>This course covers the mathematical fundamentals of Bayesian filtering and their application to sensing and estimation in mobile robotics. Topics include maximum likelihood estimation (MLE), expectation maximization (EM), Gaussian and particle filters, simultaneous localization and mapping (SLAM), visual features and optical flow, and hidden Markov models (HMM). Recommended preparation: students should have knowledge equivalent to the following ECE courses: <CourseLink id={2004} href="/ECE#101">ECE 101</CourseLink> or ECE 171 and <CourseLink id={2039} href="/ECE#153">ECE 153</CourseLink> and <CourseLink id={2057} href="/ECE#174">ECE 174</CourseLink>.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="276B" shortName="ECE 276B" longName="Planning and Learning in Robotics" units="4" url="/ECE#276B">
	<p>This course covers optimal control and reinforcement learning fundamentals and their application to planning and decision-making in mobile robotics. Topics include Markov decision processes (MDP), Pontryagin’s maximum principle, linear quadratic regulation (LQR), deterministic planning, value and policy iteration, and policy gradient methods.</p>

	<p>Prerequisites: <CourseLink id={2165} href="/ECE#276A">ECE 276A</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="276C" shortName="ECE 276C" longName="Robot Manipulation and Control" units="4" url="/ECE#276C">
	<p>This course follows <CourseLink id={2165} href="/ECE#276A">ECE 276A</CourseLink>-B, and covers techniques relevant to robot manipulation as well as open problems that involve new forms of machine learning (i.e., reinforcement learning). Topics will review kinematics, dynamics, low-level control and motion planning, and reinforcement learning approaches. A substantial, student-driven project demonstrates their collected knowledge of robotics from <CourseLink id={2165} href="/ECE#276A">ECE 276A</CourseLink>-B-C.</p>

	<p>Prerequisites: <CourseLink id={2166} href="/ECE#276B">ECE 276B</CourseLink>; graduate standing.</p>
</CourseCard>
<CourseCard id="277" shortName="ECE 277" longName="GPU Programming" units="4" url="/ECE#277">
	<p>This course is a high-level GPU programming for parallel data processing. Topics cover parallel CUDA programming on GPU including efficient memory access, threading models, multi-stream, and multi-GPU programming. Focusing on hands-on applications such as big data processing, visualization, and an artificial intelligence through the real-time GPU system. Recommended preparation: High-level C/C++ programming skills, <CourseLink id={1992} href="/ECE#15">ECE 15</CourseLink> or equivalent, <CourseLink id={1942} href="/CSE#240A">CSE 240A</CourseLink> or the equivalent.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="278" shortName="ECE 278" longName="Mathematical Topics for the Master’s Comprehensive Exam" units="4" url="/ECE#278">
	<p>Mathematical topics covered in the ECE master’s comprehensive exam including calculus, linear algebra and linear systems, and statistics and probability theory. Additional topics include vector calculus, partial differential equations, linear transformations, and probability.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="279" shortName="ECE 279" longName="Special Seminar" units="2" url="/ECE#279">
	<p>A seminar course in which topics of special interest for electrical and computer engineering students will be presented. S/U grades only. May be taken for credit three times.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="280" shortName="ECE 280" longName="Special Topics in Electronic Devices and Materials/Applied Physics" units="4" url="/ECE#280">
	<p>A course to be given at the discretion of the faculty at which topics of interest in electronic devices and materials or applied physics will be presented by visiting or resident faculty members. Subject matter will not be repeated, may be taken for credit more than once.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="281" shortName="ECE 281" longName="Special Topics in Nanoscience/Nanotechnology" units="4" url="/ECE#281">
	<p>A course to be given at the discretion of the faculty at which topics of interest in nanoscience and nanotechnology will be presented by visiting or resident faculty members. Subject matter will not be repeated, may be taken for credit more than once.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="282" shortName="ECE 282" longName="Special Topics in Photonics/Applied Optics" units="4" url="/ECE#282">
	<p>A course to be given at the discretion of the faculty at which topics of interest in photonics, optoelectronic materials, devices, systems, and applications will be presented by visiting or resident faculty members. Subject matter will not be repeated, may be taken for credit more than once.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="283" shortName="ECE 283" longName="Special Topics in Electronic Circuits and Systems" units="4" url="/ECE#283">
	<p>A course to be given at the discretion of the faculty at which topics of interest in electronic circuits and systems will be presented by visiting or resident faculty members. Subject matter will not be repeated, may be taken for credit more than once.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="284" shortName="ECE 284" longName="Special Topics in Computer Engineering" units="4" url="/ECE#284">
	<p>A course to be given at the discretion of the faculty at which topics of interest in computer engineering will be presented by visiting or resident faculty members. Subject matter will not be repeated, may be taken for credit more than once.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="285" shortName="ECE 285" longName="Special Topics in Signal and Image Processing/Robotics and Control Systems" units="4" url="/ECE#285">
	<p>A course to be given at the discretion of the faculty at which topics of interest in signal and image processing or robotics and control systems will be presented by visiting or resident faculty members. Subject matter will not be repeated, may be taken for credit more than once.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="286" shortName="ECE 286" longName="State-of-the-Art Topics in Computational Statistics and Machine Learning" units="4" url="/ECE#286">
	<p>Class discusses both fundamental and state-of-the-art research topics in computational statistics and machine learning. Topics vary based upon current research and have included nonparametric Bayesian models; sampling methods for inference in graphical models; Markov Chain Monte Carlo (MCMC) methods.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="287" shortName="ECE 287" longName="Special Topics in Communication Theory and Systems" units="4" url="/ECE#287">
	<p>A course to be given at the discretion of the faculty at which topics of interest in information science will be presented by visiting or resident faculty members. It will not be repeated so it may be taken for credit more than once.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="289" shortName="ECE 289" longName="Special Topics in Electrical and Computer Engineering" units="4" url="/ECE#289">
	<p>A course to be given at the discretion of the faculty at which general topics of interest in electrical and computer engineering will be presented by visiting or resident faculty members. May be taken for credit six times provided each course is a different topic.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="290" shortName="ECE 290" longName="Graduate Seminar on Current ECE Research" units="2" url="/ECE#290">
	<p>Weekly discussion of current research conducted in the Department of Electrical and Computer Engineering by the faculty members involved in the research projects. (S/U grades only.)</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="291" shortName="ECE 291" longName="Industry Sponsored Engineering Design Project" units="4" url="/ECE#291">
	<p>Design, build, and demonstrate an engineering project by groups. All students give weekly progress reports on tasks and write final report, with individual exams and presentations. Projects/sponsorships originate from the needs of local industry. Recommended preparation: ECE 230 or ECE 240 or ECE 251 or <CourseLink id={2128} href="/ECE#253">ECE 253</CourseLink> or ECE 258 or equivalent.</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="293" shortName="ECE 293" longName="Graduate Seminar in Communication Theory and Systems" units="2" url="/ECE#293">
	<p>Weekly discussion of current research topics in communication theory and systems. (S/U grades only.)</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="294" shortName="ECE 294" longName="Graduate Seminar in Electronic Devices and Materials/Applied Physics" units="2" url="/ECE#294">
	<p>Weekly discussion of current research topics in electronic devices and materials or applied solid state physics and quantum electronics. (S/U grades only.)</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="295" shortName="ECE 295" longName="Graduate Seminar in Signal and Image Processing/Robotics and Control Systems" units="2" url="/ECE#295">
	<p>Weekly discussion of research topics in signal and image processing of robotics and control systems. (S/U grades only.)</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="296" shortName="ECE 296" longName="Graduate Seminar in Photonics/Applied Optics" units="2" url="/ECE#296">
	<p>Weekly discussion of current research topics in photonics and applied optics, including imaging, photonic communications, sensing, energy and signal processing. (S/U grades only.)</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="297" shortName="ECE 297" longName="Graduate Seminar in Nanoscience/Nanotechnology" units="2" url="/ECE#297">
	<p>Weekly discussion of current research topics in nanoscience and nanotechnology. (S/U grades only.)</p>

	<p>Prerequisites: graduate standing.</p>
</CourseCard>
<CourseCard id="298" shortName="ECE 298" longName="Independent Study" units="1–16" url="/ECE#298">
	<p>Open to properly qualified graduate students who wish to pursue a problem through advanced study under the direction of a member of the staff. (S/U grades only.)</p>

	<p>Prerequisites: consent of instructor.</p>
</CourseCard>
<CourseCard id="299" shortName="ECE 299" longName="Research" units="1–16" url="/ECE#299">
	<p>(S/U grades only.)</p>

</CourseCard>
<CourseCard id="501" shortName="ECE 501" longName="Teaching" units="1–4" url="/ECE#501">
	<p>Teaching and tutorial activities associated with courses and seminars. Number of units for credit depends on number of hours devoted to class or section assistance. (S/U grades only.)</p>

	<p>Prerequisites: consent of department chair.</p>
</CourseCard>
