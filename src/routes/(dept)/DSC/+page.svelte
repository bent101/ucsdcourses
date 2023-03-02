<script>import CourseCard from "$lib/CourseCard.svelte";import CourseLink from "$lib/CourseLink.svelte";import MajorLink from "$lib/MajorLink.svelte";</script>
<h1>Data Science</h1>
<h2>Lower Division</h2>
<CourseCard id="10" shortName="DSC 10" longName="Principles of Data Science" units="4" url="/DSC#10">
	<p>This introductory course develops computational thinking and tools necessary to answer questions that arise from large-scale datasets. This course emphasizes an end-to-end approach to data science, introducing programming techniques in Python that cover data processing, modeling, and analysis.</p>

</CourseCard>
<CourseCard id="20" shortName="DSC 20" longName="Programming and Basic Data Structures for Data Science" units="4" url="/DSC#20">
	<p>Provides an understanding of the structures that underlie the programs, algorithms, and languages used in data science by expanding the repertoire of computational concepts introduced in <CourseLink id={1284} href="/DSC#10">DSC 10</CourseLink> and exposing students to techniques of abstraction. Course will be taught in Python and will cover topics including recursion, higher-order functions, function composition, object-oriented programming, interpreters, classes, and simple data structures such as arrays, lists, and linked lists.</p>

	<p>Prerequisites: <CourseLink id={1284} href="/DSC#10">DSC 10</CourseLink>. Restricted to students within the <MajorLink name="Data Science">DS25</MajorLink> major. All other students will be allowed as space permits.</p>
</CourseCard>
<CourseCard id="30" shortName="DSC 30" longName="Data Structures and Algorithms for Data Science" units="4" url="/DSC#30">
	<p>Builds on topics covered in <CourseLink id={1285} href="/DSC#20">DSC 20</CourseLink> and provides practical experience in composing larger computational systems through several significant programming projects using Java. Students will study advanced programming techniques including encapsulation, abstract data types, interfaces, algorithms and complexity, and data structures such as stacks, queues, priority queues, heaps, linked lists, binary trees, binary search trees, and hash tables.</p>

	<p>Prerequisites: <CourseLink id={1285} href="/DSC#20">DSC 20</CourseLink>. Restricted to students within the <MajorLink name="Data Science">DS25</MajorLink> major. All other students will be allowed as space permits.</p>
</CourseCard>
<CourseCard id="40A" shortName="DSC 40A" longName="Theoretical Foundations of Data Science I" units="4" url="/DSC#40A">
	<p>This course, the first of a two-course sequence (<CourseLink id={1287} href="/DSC#40A">DSC 40A</CourseLink>-B), will introduce the theoretical foundations of data science. Students will become familiar with mathematical language for expressing data analysis problems and solution strategies, and will receive training in probabilistic reasoning, mathematical modeling of data, and algorithmic problem solving. <CourseLink id={1287} href="/DSC#40A">DSC 40A</CourseLink> will introduce fundamental topics in machine learning, statistics, and linear algebra with applications to data analysis. <CourseLink id={1287} href="/DSC#40A">DSC 40A</CourseLink>-B connect to <CourseLink id={1284} href="/DSC#10">DSC 10</CourseLink>, 20, and 30 by providing the theoretical foundation for the methods that underlie data science.</p>

	<p>Prerequisites: <CourseLink id={1284} href="/DSC#10">DSC 10</CourseLink>, <CourseLink id={4546} href="/MATH#20C">MATH 20C</CourseLink> or <CourseLink id={4550} href="/MATH#31BH">MATH 31BH</CourseLink>, and <CourseLink id={4543} href="/MATH#18">MATH 18</CourseLink> or MATH 20F or <CourseLink id={4549} href="/MATH#31AH">MATH 31AH</CourseLink>. Restricted to students within the <MajorLink name="Data Science">DS25</MajorLink> major. All other students will be allowed as space permits.</p>
</CourseCard>
<CourseCard id="40B" shortName="DSC 40B" longName="Theoretical Foundations of Data Science II" units="4" url="/DSC#40B">
	<p>The sequence <CourseLink id={1287} href="/DSC#40A">DSC 40A</CourseLink>-B introduces the theoretical foundations of data science and covers the following topics: mathematical language for expressing data analysis problems and solution strategies, probabilistic reasoning, mathematical modeling of data, and algorithmic problem solving. <CourseLink id={1288} href="/DSC#40B">DSC 40B</CourseLink>, the second course in the sequence, introduces fundamental topics in combinatorics, graph theory, probability, and continuous and discrete algorithms with applications to data analysis.</p>

	<p>Prerequisites: <CourseLink id={1285} href="/DSC#20">DSC 20</CourseLink> and 40A. Restricted to students within the <MajorLink name="Data Science">DS25</MajorLink> major. All other students will be allowed as space permits.</p>
</CourseCard>
<CourseCard id="80" shortName="DSC 80" longName="The Practice and Application of Data Science" units="4" url="/DSC#80">
	<p>The marriage of data, computation, and inferential thinking, or “data science,” is redefining how people and organizations solve challenging problems and understand the world. This course bridges lower- and upper-division data science courses as well as methods courses in other fields. Students master the data science life-cycle and learn many of the fundamental principles and techniques of data science spanning algorithms, statistics, machine learning, visualization, and data systems.</p>

	<p>Prerequisites: <CourseLink id={1286} href="/DSC#30">DSC 30</CourseLink> and <CourseLink id={1287} href="/DSC#40A">DSC 40A</CourseLink>. Restricted to students within the <MajorLink name="Data Science">DS25</MajorLink> major. All other students will be allowed as space permits.</p>
</CourseCard>
<CourseCard id="90" shortName="DSC 90" longName="Seminar in Data Science" units="2" url="/DSC#90">
	<p>Students will learn about a variety of topics in data science through interactive presentations from faculty and industry professionals.</p>

	<p>Prerequisites: <CourseLink id={1284} href="/DSC#10">DSC 10</CourseLink>. Restricted to students within the <MajorLink name="Data Science">DS25</MajorLink> major. All other students will be allowed as space permits.</p>
</CourseCard>
<CourseCard id="95" shortName="DSC 95" longName="Tutor Apprenticeship in Data Science" units="2" url="/DSC#95">
	<p>Students will receive training in skills and techniques necessary to be effective tutors for data science courses. Students will also gain practical experience in tutoring students on data science topics.</p>

	<p>Prerequisites: <CourseLink id={1284} href="/DSC#10">DSC 10</CourseLink>. Students must have applied for and been accepted as a tutor for a DSC course for the first time; enrollment in <CourseLink id={1291} href="/DSC#95">DSC 95</CourseLink> is required for these students.</p>
</CourseCard>
<CourseCard id="96" shortName="DSC 96" longName="Workshop in Data Science" units="2" url="/DSC#96">
	<p>Students will explore topics and tools relevant to the practice of data science in a workshop format. The instructor works with students on guided projects to help students acquire knowledge and skills to complement their course work in the core data science classes. Topics vary from quarter to quarter. Students are strongly recommended to enroll in either <CourseLink id={1284} href="/DSC#10">DSC 10</CourseLink> or <CourseLink id={1285} href="/DSC#20">DSC 20</CourseLink> concurrently.</p>

	<p>Prerequisites: Restricted to students within the <MajorLink name="Data Science">DS25</MajorLink> major. All other students will be allowed as space permits.</p>
</CourseCard>
<CourseCard id="97" shortName="DSC 97" longName="Internship in Data Science" units="2 or 4" url="/DSC#97">
	<p>Individual research on a topic related to data science, by special arrangement with and under the direction of a UC San Diego faculty member, in connection with an internship at an organization. It is the students’ responsibility to find an internship related to data science prior to enrolling in this course. Internship work will inform but not necessarily define the research topic. The research topic is expected to promote the study of the principles and techniques involved in the internship work. May be taken for credit up to two times.</p>

	<p>Prerequisites: <CourseLink id={4546} href="/MATH#20C">MATH 20C</CourseLink> or <CourseLink id={4550} href="/MATH#31BH">MATH 31BH</CourseLink> and <CourseLink id={4543} href="/MATH#18">MATH 18</CourseLink> or <CourseLink id={4549} href="/MATH#31AH">MATH 31AH</CourseLink> and <CourseLink id={1285} href="/DSC#20">DSC 20</CourseLink> and <CourseLink id={1287} href="/DSC#40A">DSC 40A</CourseLink>. Completion of thirty units at UC San Diego with a university GPA of 3.0. Special Studies form, consent of the instructor, and approval of the department required. Priority enrollment is given to data science majors <MajorLink name="Data Science">DS25</MajorLink>. Restricted to first-year and sophomore level students.</p>
</CourseCard>
<CourseCard id="98" shortName="DSC 98" longName="Directed Group Study in Data Science" units="2 or 4" url="/DSC#98">
	<p>Students will investigate a topic in data science through directed reading, discussion, and project work under the supervision of a faculty member. May be taken for credit up to two times.</p>

	<p>Prerequisites: <CourseLink id={4546} href="/MATH#20C">MATH 20C</CourseLink> or <CourseLink id={4550} href="/MATH#31BH">MATH 31BH</CourseLink> and <CourseLink id={4543} href="/MATH#18">MATH 18</CourseLink> or <CourseLink id={4549} href="/MATH#31AH">MATH 31AH</CourseLink> and <CourseLink id={1285} href="/DSC#20">DSC 20</CourseLink> and <CourseLink id={1287} href="/DSC#40A">DSC 40A</CourseLink>. Completion of thirty units at UC San Diego with a university GPA of 3.0. Special Studies form, consent of the instructor, and approval of the department required. Priority enrollment is given to data science majors <MajorLink name="Data Science">DS25</MajorLink>. Restricted to first-year and sophomore level students.</p>
</CourseCard>
<CourseCard id="99" shortName="DSC 99" longName="Independent Study in Data Science" units="2 or 4" url="/DSC#99">
	<p>Students will participate in independent study or research in data science under the direction of a UC San Diego faculty member. May be taken for credit up to two times.</p>

	<p>Prerequisites: <CourseLink id={4546} href="/MATH#20C">MATH 20C</CourseLink> or <CourseLink id={4550} href="/MATH#31BH">MATH 31BH</CourseLink> and <CourseLink id={4543} href="/MATH#18">MATH 18</CourseLink> or <CourseLink id={4549} href="/MATH#31AH">MATH 31AH</CourseLink> and <CourseLink id={1285} href="/DSC#20">DSC 20</CourseLink> and <CourseLink id={1287} href="/DSC#40A">DSC 40A</CourseLink>. Completion of thirty units at UC San Diego with a university GPA of 3.0. Special Studies form, consent of the instructor, and approval of the department required. Priority enrollment is given to data science majors <MajorLink name="Data Science">DS25</MajorLink>. Restricted to first-year and sophomore level students.</p>
</CourseCard>
<h2>Upper Division</h2>
<CourseCard id="100" shortName="DSC 100" longName="Introduction to Data Management" units="4" url="/DSC#100">
	<p>This course is an introduction to storage and management of large-scale data using classical relational (SQL) systems, with an eye toward applications in data science. The course covers topics including the SQL data model and query language, relational data modeling and schema design, elements of cost-based query optimizations, relational data base architecture, and database-backed applications.</p>

	<p>Prerequisites: <CourseLink id={1289} href="/DSC#80">DSC 80</CourseLink> and <CourseLink id={1288} href="/DSC#40B">DSC 40B</CourseLink>. Restricted to students with upper-division standing. Restricted to students within the <MajorLink name="Data Science">DS25</MajorLink> major. All other students will be allowed as space permits.</p>
</CourseCard>
<CourseCard id="102" shortName="DSC 102" longName="Systems for Scalable Analytics" units="4" url="/DSC#102">
	<p>This course introduces the principles of computing systems and infrastructure for scaling analytics to large datasets. Topics include memory hierarchy, distributed systems, model selection, heterogeneous datasets, and deployment at scale. The course will also discuss the design of systems such as MapReduce/Hadoop and Spark, in conjunction with their implementation. Students will also learn how dataflow operations can be used to perform data preparation, cleaning, and feature engineering.</p>

	<p>Prerequisites: <CourseLink id={1296} href="/DSC#100">DSC 100</CourseLink>. Restricted to students with upper-division standing. Restricted to students within the <MajorLink name="Data Science">DS25</MajorLink> major. All other students will be allowed as space permits.</p>
</CourseCard>
<CourseCard id="104" shortName="DSC 104" longName="Beyond Relational Data Management" units="4" url="/DSC#104">
	<p>The course will introduce a variety of No-SQL data formats, data models, high-level query languages, and programming abstractions representative of the needs of modern data analytic tasks. Topics include hierarchical graph database systems, unrestricted graph database systems, array databases, comparison of expressive power of the data models, and parallel programming abstractions, including Map/Reduce and its descendants.</p>

	<p>Prerequisites: <CourseLink id={1296} href="/DSC#100">DSC 100</CourseLink>. Restricted to students with upper-division standing. Restricted to students within the <MajorLink name="Data Science">DS25</MajorLink> major. All other students will be allowed as space permits.</p>
</CourseCard>
<CourseCard id="106" shortName="DSC 106" longName="Introduction to Data Visualization" units="4" url="/DSC#106">
	<p>Data visualization helps explore and interpret data through interaction. This course introduces the principles, techniques, and algorithms for creating effective visualizations. The course draws on the knowledge from several disciplines including computer graphics, human-computer interaction, cognitive psychology, design, and statistical graphics and synthesizes relevant ideas. Students will design visualization systems using D3 or other web-based software and evaluate their effectiveness.</p>

	<p>Prerequisites: <CourseLink id={1289} href="/DSC#80">DSC 80</CourseLink>. Restricted to students with upper-division standing. Restricted to students within the <MajorLink name="Data Science">DS25</MajorLink> major. All other students will be allowed as space permits.</p>
</CourseCard>
<CourseCard id="120" shortName="DSC 120" longName="Signal Processing for Data Analysis" units="4" url="/DSC#120">
	<p>This course will focus on ideas from classical and modern signal processing, with the main themes of sampling continuous data and building informative representations using orthonormal bases, frames, and data dependent operators. Topics include sampling theory, Fourier analysis, lossy transformations and compression, time and spatial filters, and random Fourier features and connections to kernel methods. Sources of data include time series and streaming signals and various imaging modalities.</p>

	<p>Prerequisites: <CourseLink id={4543} href="/MATH#18">MATH 18</CourseLink> or <CourseLink id={4549} href="/MATH#31AH">MATH 31AH</CourseLink> and <CourseLink id={4546} href="/MATH#20C">MATH 20C</CourseLink> and <CourseLink id={1288} href="/DSC#40B">DSC 40B</CourseLink>. Restricted to students with upper-division standing. Restricted to students within the <MajorLink name="Data Science">DS25</MajorLink> major. All other students will be allowed as space permits.</p>
</CourseCard>
<CourseCard id="140A" shortName="DSC 140A" longName="Probabilistic Modeling and Machine Learning" units="4" url="/DSC#140A">
	<p>The course covers learning and using probabilistic models for knowledge representation and decision-making. Topics covered include graphical models, temporal models, and online learning, as well as applications to natural language processing, adversarial learning, computational biology, and robotics. Prior completion of <CourseLink id={4612} href="/MATH#181A">MATH 181A</CourseLink> is strongly recommended.</p>

	<p>Prerequisites: <CourseLink id={1288} href="/DSC#40B">DSC 40B</CourseLink>, <CourseLink id={1289} href="/DSC#80">DSC 80</CourseLink>, and <CourseLink id={2009} href="/ECE#109">ECE 109</CourseLink> or <CourseLink id={1371} href="/ECON#120A">ECON 120A</CourseLink> or <CourseLink id={2242} href="/MAE#108">MAE 108</CourseLink> or <CourseLink id={4609} href="/MATH#180A">MATH 180A</CourseLink> or <CourseLink id={4619} href="/MATH#183">MATH 183</CourseLink> or <CourseLink id={4622} href="/MATH#186">MATH 186</CourseLink>. Restricted to students with upper-division standing. Restricted to students within the <MajorLink name="Data Science">DS25</MajorLink> major. All other students will be allowed as space permits.</p>
</CourseCard>
<CourseCard id="140B" shortName="DSC 140B" longName="Representation Learning" units="4" url="/DSC#140B">
	<p>This course is an introduction to machine learning which explores techniques for learning suitable representations from data. Topics include clustering, dimensionality reduction, manifold learning, principal component analysis, spectral embeddings, multilayer perceptrons, autoencoders, convolutional and recurrent neural networks, and other aspects of deep learning. The course focuses on the underlying mathematical principles, but some attention is also given to implementation.</p>

	<p>Prerequisites: <CourseLink id={1288} href="/DSC#40B">DSC 40B</CourseLink>, <CourseLink id={1289} href="/DSC#80">DSC 80</CourseLink>, <CourseLink id={2009} href="/ECE#109">ECE 109</CourseLink> or <CourseLink id={1371} href="/ECON#120A">ECON 120A</CourseLink> or <CourseLink id={2242} href="/MAE#108">MAE 108</CourseLink> or <CourseLink id={4609} href="/MATH#180A">MATH 180A</CourseLink> or <CourseLink id={4619} href="/MATH#183">MATH 183</CourseLink> or <CourseLink id={4622} href="/MATH#186">MATH 186</CourseLink>. Restricted to students within the <MajorLink name="Data Science">DS25</MajorLink> major. All other students will be allowed as space permits.</p>
</CourseCard>
<CourseCard id="148" shortName="DSC 148" longName="Introduction to Data Mining" units="4" url="/DSC#148">
	<p>This course mainly focuses on introducing current methods and models that are useful in analyzing and mining real-world data. It will cover frequent pattern mining, regression and classification, clustering, and representation learning. All participants should be comfortable with programming, and with basic optimization and linear algebra.</p>

	<p>Prerequisites: <CourseLink id={1288} href="/DSC#40B">DSC 40B</CourseLink> or <CourseLink id={1825} href="/CSE#12">CSE 12</CourseLink>, <CourseLink id={1289} href="/DSC#80">DSC 80</CourseLink> or <CourseLink id={1826} href="/CSE#15L">CSE 15L</CourseLink>, <CourseLink id={4609} href="/MATH#180A">MATH 180A</CourseLink> or <CourseLink id={4612} href="/MATH#181A">MATH 181A</CourseLink> or <CourseLink id={4619} href="/MATH#183">MATH 183</CourseLink> or <CourseLink id={1840} href="/CSE#103">CSE 103</CourseLink> or <CourseLink id={2009} href="/ECE#109">ECE 109</CourseLink> or <CourseLink id={1371} href="/ECON#120A">ECON 120A</CourseLink>. Students may not receive credit for <CourseLink id={1303} href="/DSC#148">DSC 148</CourseLink> and <CourseLink id={1877} href="/CSE#158">CSE 158</CourseLink> or <CourseLink id={1878} href="/CSE#158R">CSE 158R</CourseLink>. Restricted to students within the <MajorLink name="Data Science">DS25</MajorLink> major. All other students will be allowed as space permits.</p>
</CourseCard>
<CourseCard id="155" shortName="DSC 155" longName="Hidden Data in Random Matrices" units="4" url="/DSC#155">
	<p>Rigorous treatment of principal component analysis, one of the most effective methods in finding signals amidst the noise of large data arrays. Topics include singular value decomposition for matrices, maximal likelihood estimation, least squares methods, unbiased estimators, random matrices, Wigner’s semicircle law, Markchenko-Pastur laws, universality of eigenvalue statistics, outliers, the BBP transition, applications to community detection, and stochastic block model.</p>

	<p>Prerequisites: <CourseLink id={4609} href="/MATH#180A">MATH 180A</CourseLink> and (<CourseLink id={4543} href="/MATH#18">MATH 18</CourseLink> or <CourseLink id={4549} href="/MATH#31AH">MATH 31AH</CourseLink>). Completion of <CourseLink id={4559} href="/MATH#102">MATH 102</CourseLink> is encouraged but not required. Students will not receive credit for both <CourseLink id={4618} href="/MATH#182">MATH 182</CourseLink> and <CourseLink id={1304} href="/DSC#155">DSC 155</CourseLink>.</p>
</CourseCard>
<CourseCard id="160" shortName="DSC 160" longName="Data Science and the Arts" units="4" url="/DSC#160">
	<p>This course addresses the intersection of data science and contemporary arts and culture, exploring four main themes of authorship, representation, visualization, and data provenance. The course is not solely an introduction to data science techniques nor merely an arts practice course, but explores significant new possibilities for both fields arising from their intersection. Students will examine problems from complementary perspectives of artist-researchers and data scientists.</p>

	<p>Prerequisites: <CourseLink id={1289} href="/DSC#80">DSC 80</CourseLink>.</p>
</CourseCard>
<CourseCard id="161" shortName="DSC 161" longName="Text as Data" units="4" url="/DSC#161">
	<p>This class explores statistical and computational methods to enable students to use text as a data source in the social sciences. Hands-on examples will equip students to work with text data in final projects.</p>

	<p>Prerequisites: <CourseLink id={1342} href="/ECON#5">ECON 5</CourseLink> or <CourseLink id={5416} href="/POLI#170A">POLI 170A</CourseLink> or <CourseLink id={5417} href="/POLI#171">POLI 171</CourseLink> or <CourseLink id={5233} href="/POLI#30or30D">POLI 30</CourseLink> or <CourseLink id={5233} href="/POLI#30or30D">POLI 30D</CourseLink> or <CourseLink id={5226} href="/POLI#5or5D">POLI 5</CourseLink> or <CourseLink id={5226} href="/POLI#5or5D">POLI 5D</CourseLink>. Students will not receive credit for both <CourseLink id={5422} href="/POLI#176">POLI 176</CourseLink> and <CourseLink id={1306} href="/DSC#161">DSC 161</CourseLink>. Restricted to junior and senior level students. Restricted to students with upper-division standing.</p>
</CourseCard>
<CourseCard id="167" shortName="DSC 167" longName="Fairness and Algorithmic Decision-Making" units="4" url="/DSC#167">
	<p>This course examines the greater context under which the practice of data science exists and explores concrete ways these issues surface in technical work. Students learn frameworks for understanding how individuals relate to social institutions, how to use them to identify how issues of fairness arise in the “life of a data scientist,” and use them to propose and critique potential solutions.</p>

	<p>Prerequisites: <CourseLink id={1289} href="/DSC#80">DSC 80</CourseLink>.</p>
</CourseCard>
<CourseCard id="170" shortName="DSC 170" longName="Spatial Data Science and Applications" units="4" url="/DSC#170">
	<p>Spatial data science is a set of concepts and methods that deal with accessing, managing, visualizing, analyzing, and reasoning about spatial data in applications where location, shape and size of objects, and their mutual arrangement are important. This upper-division course explores advanced data science concepts for spatial data, introducing students to principles and techniques of spatial data analysis, including geographic information systems, spatial big data management, and geostatistics.</p>

	<p>Prerequisites: <CourseLink id={1289} href="/DSC#80">DSC 80</CourseLink>. Restricted to students with upper-division standing.</p>
</CourseCard>
<CourseCard id="180A" shortName="DSC 180A" longName="Data Science Project I" units="4" url="/DSC#180A">
	<p>In this two-course sequence students will investigate a topic and design a system to produce statistically informed output. The investigation will span the entire lifecycle, including assessing the problem, learning domain knowledge, collecting/cleaning data, creating a model, addressing ethical issues, designing the system, analyzing the output, and presenting the results. 180A deals with research, methodology, and system design. Students will produce a research summary and a project proposal.</p>

	<p>Prerequisites: <CourseLink id={1297} href="/DSC#102">DSC 102</CourseLink> and <CourseLink id={4626} href="/MATH#189">MATH 189</CourseLink> and <CourseLink id={1872} href="/CSE#151A">CSE 151A</CourseLink> or <CourseLink id={977} href="/COGS#188">COGS 188</CourseLink> or <CourseLink id={1877} href="/CSE#158">CSE 158</CourseLink>, <CourseLink id={1299} href="/DSC#106">DSC 106</CourseLink>. Restricted to students with upper-division standing. Restricted to students within the <MajorLink name="Data Science">DS25</MajorLink> major.</p>
</CourseCard>
<CourseCard id="180B" shortName="DSC 180B" longName="Data Science Project II" units="4" url="/DSC#180B">
	<p>In this two-course sequence students will investigate a topic and design a system to produce statistically informed output. The investigation will span the entire lifecycle, including assessing the problem, learning domain knowledge, collecting/cleaning data, creating a model, addressing ethical issues, designing the system, analyzing the output, and presenting the results. 180B will consist of implementing the project while studying the best practices for evaluation.</p>

	<p>Prerequisites: <CourseLink id={1309} href="/DSC#180A">DSC 180A</CourseLink>. Restricted to students with upper-division standing. Restricted to students within the <MajorLink name="Data Science">DS25</MajorLink> major.</p>
</CourseCard>
<CourseCard id="190" shortName="DSC 190" longName="Topics in Data Science" units="4" url="/DSC#190">
	<p>Topics of special interest in data science. Topics vary from quarter to quarter. May be taken for credit up to four times when topic varies.</p>

	<p>Prerequisites: department and instructor approval required to monitor enrollment and to ensure that students have the sufficient educational background for a given topic. Restricted to students with upper-division standing.</p>
</CourseCard>
<CourseCard id="191" shortName="DSC 191" longName="Seminar in Data Science" units="1 or 2" url="/DSC#191">
	<p>A seminar course on topics of current interest in data science. Topics may vary from quarter to quarter. May be taken for credit three times.</p>

	<p>Prerequisites: restricted to students with upper-division standing. Department and instructor approval is required to monitor enrollment and to ensure that students have the sufficient educational background for a given topic.</p>
</CourseCard>
<CourseCard id="197" shortName="DSC 197" longName="Data Science Internship" units="1–4" url="/DSC#197">
	<p>Directed study and research at laboratories/institutions outside of campus. It is the students’ responsibility to find an internship related to data science prior to enrolling in this course.</p>

	<p>Prerequisites: restricted to students with upper-division standing. Consent of the instructor and approval of the department. An application for Special Studies must be filed with the Registrar’s office after approval from the instructor and the department chair.</p>
</CourseCard>
<CourseCard id="198" shortName="DSC 198" longName="Directed Group Study in Data Science" units="2 or 4" url="/DSC#198">
	<p>Data science topics whose study involves reading and discussion by a small group of students under supervision of a faculty member. May be taken for credit up to two times.</p>

	<p>Prerequisites: restricted to students with upper-division standing. Consent of the instructor and approval of the department. Department stamp required. An application for Special Studies must be filed with the Registrar’s office after approval from the instructor and the department chair.</p>
</CourseCard>
<CourseCard id="199" shortName="DSC 199" longName="Independent Study for Data Science Undergraduates" units="2 or 4" url="/DSC#199">
	<p>Independent reading or research on a topic related to data science by special arrangement with a faculty member. May be taken for credit up to two times.</p>

	<p>Prerequisites: restricted to students with upper-division standing. Consent of the instructor and approval of the department. An application for Special Studies must be filed with the Registrar’s Office after approval from the instructor and the department chair.</p>
</CourseCard>
<CourseCard id="290" shortName="DSC 290" longName="Seminar in Data Science" units="1 or 2" url="/DSC#290">
	<p>A graduate seminar course in which topics of special interest in data science will be presented by faculty or by graduate students under faculty direction. Restricted to graduate level students. May be repeated for credit twenty-four times as topics vary.</p>

</CourseCard>
<CourseCard id="291" shortName="DSC 291" longName="Topics in Data Science" units="4" url="/DSC#291">
	<p>Topics of special interest in data science. Topics may vary quarter to quarter. Restricted to graduate level students. May be taken for credit up to nine times.</p>

</CourseCard>
<CourseCard id="500" shortName="DSC 500" longName="Teaching Assistantship" units="2 or 4" url="/DSC#500">
	<p>A course in which teaching assistants are aided in learning proper teaching methods by means of supervision of their work by the faculty: handling of discussions, preparation and grading of examinations and other written exercises, and student relations. Number of units for credit depends on number of hours devoted to class or section assistance. May be taken for credit up to seventy-two units.</p>

	<p>Prerequisites: <CourseLink id={1318} href="/DSC#500">DSC 500</CourseLink> is for selected teaching assistants only; therefore, consent of instructor is required.</p>
</CourseCard>
<CourseCard id="599" shortName="DSC 599" longName="Teaching Methods in Data Science" units="2" url="/DSC#599">
	<p>Training in teaching methods in the field of data science. This course examines theoretical and practical communication and teaching techniques particularly appropriate to data science.</p>

	<p>Prerequisites: Consent of faculty required. Only graduate students who are TAing for the first time in the data science program are eligible to enroll.</p>
</CourseCard>
