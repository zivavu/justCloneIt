// Level goes from 0 to 4
export interface Technoloy {
	name: string;
	level: number;
}

export interface JobOffeer {
	slug: string;
	title: string;
	jobDescription: string;
	company: string;
	location: {
		city: string;
		lat: number;
		lon: number;
	};
	logo: string;
	salary: {
		min: number;
		max: number;
	};
	dateOfPublication: string;
	technologies: Technoloy[];
	typeOfWork: string;
	experienceLevel: string;
	contractType: string;
	operatingMode: string;
}

export const MOCK_OFFERS: JobOffeer[] = [
	{
		slug: 'senior-frontend-developer-remote-poland',
		title: 'Senior Frontend Developer',
		jobDescription: `
      ## About the Role

      We are looking for an experienced Senior Frontend Developer to join our growing team. You will be responsible for building and maintaining user-facing applications, ensuring high performance and responsiveness.

      ### Responsibilities

      *   Develop new user-facing features using React and TypeScript.
      *   Build reusable components and front-end libraries for future use.
      *   Optimize applications for maximum speed and scalability.
      *   Collaborate with backend developers and UX/UI designers.
      *   Mentor junior developers and contribute to code reviews.

      ### Qualifications

      *   5+ years of experience in frontend development.
      *   Strong proficiency in JavaScript, HTML, and CSS.
      *   Extensive experience with React.js and its ecosystem.
      *   Familiarity with modern frontend build pipelines and tools.
      *   Excellent problem-solving skills and attention to detail.
      *   Experience with testing frameworks (e.g., Jest, React Testing Library).

      ### Nice to Have

      *   Experience with Next.js or other server-side rendering frameworks.
      *   Familiarity with GraphQL.
      *   Knowledge of accessibility best practices.
      `,
		company: 'Innovate Solutions PL',
		location: {
			city: 'Warsaw',
			lat: 52.2297, // Warsaw center, slightly offset
			lon: 21.0122,
		},
		logo: '/logos/innovate-solutions.png',
		salary: {
			min: 16000,
			max: 25000,
		},
		dateOfPublication: '2025-07-28T10:00:00Z',
		technologies: [
			{ name: 'React', level: 4 },
			{ name: 'TypeScript', level: 4 },
			{ name: 'JavaScript', level: 4 },
			{ name: 'HTML', level: 4 },
			{ name: 'CSS', level: 4 },
			{ name: 'Redux', level: 3 },
			{ name: 'Next.js', level: 2 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Senior',
		contractType: 'Permanent',
		operatingMode: 'Remote',
	},
	{
		slug: 'junior-backend-developer-krakow',
		title: 'Junior Backend Developer',
		jobDescription: `
      ## Join Our Dynamic Backend Team!

      We're seeking a passionate Junior Backend Developer to join our rapidly expanding team in Kraków. This is an excellent opportunity for someone early in their career to gain hands-on experience with cutting-edge technologies.

      ### Your Role Will Include

      *   Developing and maintaining RESTful APIs using Node.js and Express.
      *   Working with NoSQL databases like MongoDB.
      *   Participating in code reviews and contributing to technical discussions.
      *   Troubleshooting and debugging applications.
      *   Learning and applying new technologies and best practices.

      ### What We're Looking For

      *   0-2 years of experience in backend development.
      *   Basic understanding of Node.js and JavaScript.
      *   Familiarity with database concepts (SQL or NoSQL).
      *   Eagerness to learn and a strong problem-solving aptitude.
      *   Good communication skills and ability to work in a team.

      ### Bonus Points

      *   Experience with Docker.
      *   Knowledge of cloud platforms (AWS, Azure, GCP).
      *   Contributions to open source projects.
      `,
		company: 'TechNexus PL',
		location: {
			city: 'Kraków',
			lat: 50.0614 + 0.005,
			lon: 19.9365 - 0.003,
		},
		logo: '/logos/technexus.png',
		salary: {
			min: 7000,
			max: 10000,
		},
		dateOfPublication: '2025-07-25T14:30:00Z',
		technologies: [
			{ name: 'Node.js', level: 2 },
			{ name: 'Express.js', level: 2 },
			{ name: 'MongoDB', level: 1 },
			{ name: 'JavaScript', level: 3 },
			{ name: 'Git', level: 2 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Junior',
		contractType: 'Permanent',
		operatingMode: 'On-site',
	},
	{
		slug: 'mid-level-fullstack-engineer-warsaw',
		title: 'Mid-Level Fullstack Engineer',
		jobDescription: `
      ## Be a Key Player in Our Product Development!

      We are seeking a talented Mid-Level Fullstack Engineer to contribute to the development of our innovative SaaS platform. You'll work across the entire stack, from frontend user interfaces to backend APIs and database interactions.

      ### What You'll Do

      *   Develop and implement new features for our web application.
      *   Design and maintain robust APIs using Python and Django.
      *   Build responsive and intuitive user interfaces with React.
      *   Collaborate closely with product managers and designers.
      *   Participate in architectural discussions and code reviews.

      ### Skills and Experience We're Looking For

      *   3+ years of fullstack development experience.
      *   Proficiency in Python and Django.
      *   Strong understanding of React.js and modern JavaScript.
      *   Experience with relational databases (e.g., PostgreSQL).
      *   Familiarity with cloud services (e.g., AWS EC2, S3).
      *   Excellent problem-solving and debugging skills.

      ### What We Offer

      *   Competitive salary and benefits.
      *   Opportunity to work on a cutting-edge product.
      *   Collaborative and supportive work environment.
      *   Professional development opportunities.
      `,
		company: 'Global Tech Solutions PL',
		location: {
			city: 'Warsaw',
			lat: 52.2297 + 0.008,
			lon: 21.0122 + 0.005,
		},
		logo: '/logos/global-tech.png',
		salary: {
			min: 12000,
			max: 18000,
		},
		dateOfPublication: '2025-07-20T09:00:00Z',
		technologies: [
			{ name: 'Python', level: 3 },
			{ name: 'Django', level: 3 },
			{ name: 'React', level: 3 },
			{ name: 'PostgreSQL', level: 2 },
			{ name: 'AWS', level: 2 },
			{ name: 'JavaScript', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'devops-engineer-remote-poland',
		title: 'DevOps Engineer',
		jobDescription: `
      ## Empower Our Development Teams!

      We are seeking a skilled DevOps Engineer to join our fully remote team (Poland timezone friendly). You will be instrumental in building and maintaining our CI/CD pipelines, managing cloud infrastructure, and ensuring the smooth operation of our services.

      ### Key Responsibilities

      *   Design, implement, and maintain CI/CD pipelines using Jenkins/GitLab CI.
      *   Manage and optimize cloud infrastructure on AWS.
      *   Implement and maintain containerization technologies (Docker, Kubernetes).
      *   Monitor system performance and troubleshoot issues.
      *   Automate infrastructure provisioning with Terraform or CloudFormation.
      *   Collaborate with development and operations teams.

      ### Qualifications and Skills

      *   3+ years of experience as a DevOps Engineer.
      *   Strong experience with AWS services (EC2, S3, RDS, Lambda).
      *   Proficiency with Docker and Kubernetes.
      *   Experience with CI/CD tools (Jenkins, GitLab CI, CircleCI).
      *   Familiarity with infrastructure as code (Terraform, CloudFormation).
      *   Scripting skills in Bash, Python, or Go.
      *   Understanding of networking and security best practices.

      ### Why Join Us?

      *   Work on exciting projects with a global impact.
      *   Flexible remote work environment.
      *   Opportunities for continuous learning and growth.
      *   Supportive and innovative culture.
      `,
		company: 'CloudCore Systems PL',
		location: {
			city: 'Poznań',
			lat: 51.1079 - 0.002,
			lon: 17.0385 + 0.007,
		},
		logo: '/logos/cloudcore-systems.png',
		salary: {
			min: 14000,
			max: 22000,
		},
		dateOfPublication: '2025-07-18T11:45:00Z',
		technologies: [
			{ name: 'AWS', level: 4 },
			{ name: 'Docker', level: 4 },
			{ name: 'Kubernetes', level: 3 },
			{ name: 'Terraform', level: 3 },
			{ name: 'Jenkins', level: 3 },
			{ name: 'GitLab CI', level: 2 },
			{ name: 'Python', level: 2 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Remote',
	},
	{
		slug: 'ux-ui-designer-gdansk',
		title: 'UX/UI Designer',
		jobDescription: `
      ## Craft Exceptional User Experiences!

      We're searching for a talented UX/UI Designer to join our product team in Gdańsk. You will be responsible for creating intuitive, engaging, and aesthetically pleasing user interfaces for our web and mobile applications.

      ### Your Responsibilities

      *   Conduct user research, create user personas, and map user journeys.
      *   Develop wireframes, mockups, and high-fidelity prototypes.
      *   Design intuitive and visually appealing user interfaces.
      *   Collaborate with product managers and engineers throughout the product lifecycle.
      *   Perform usability testing and gather feedback for iterations.
      *   Maintain and evolve our design system.

      ### What We're Looking For

      *   3+ years of experience in UX/UI design.
      *   Proficiency with design tools (e.g., Figma, Sketch, Adobe XD).
      *   Strong portfolio showcasing your design process and projects.
      *   Understanding of user-centered design principles.
      *   Excellent communication and collaboration skills.
      *   Familiarity with accessibility standards.

      ### Preferred Qualifications

      *   Experience with animation or motion graphics.
      *   Basic understanding of HTML/CSS.
      *   Experience working in an Agile development environment.
      `,
		company: 'Creative Digital Agency PL',
		location: {
			city: 'Gdańsk',
			lat: 54.3721 + 0.001,
			lon: 18.6384 - 0.004,
		},
		logo: '/logos/creative-digital.png',
		salary: {
			min: 11000,
			max: 17000,
		},
		dateOfPublication: '2025-07-15T16:00:00Z',
		technologies: [
			{ name: 'Figma', level: 4 },
			{ name: 'User Research', level: 3 },
			{ name: 'Prototyping', level: 4 },
			{ name: 'UI Design', level: 4 },
			{ name: 'UX Design', level: 4 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'On-site',
	},
	{
		slug: 'qa-engineer-wroclaw',
		title: 'QA Engineer',
		jobDescription: `
      ## Ensure Quality, Drive Excellence!

      We are seeking a dedicated QA Engineer to join our team in Wrocław. You will play a crucial role in ensuring the quality and reliability of our software products through meticulous testing and quality assurance processes.

      ### Key Responsibilities

      *   Design, develop, and execute test plans and test cases.
      *   Perform manual and automated testing of web and mobile applications.
      *   Identify, document, and track software defects.
      *   Collaborate with development teams to ensure timely resolution of issues.
      *   Contribute to the improvement of testing processes and methodologies.

      ### What We're Looking For

      *   2+ years of experience in software quality assurance.
      *   Strong understanding of software development life cycles (SDLC).
      *   Experience with test management tools (e.g., Jira, TestRail).
      *   Familiarity with automated testing frameworks (e.g., Selenium, Cypress).
      *   Excellent attention to detail and analytical skills.
      *   Good communication skills.

      ### Bonus Points

      *   Experience with performance or security testing.
      *   Knowledge of SQL for database testing.
      *   Programming skills in Python or JavaScript.
      `,
		company: 'Quality First Software',
		location: {
			city: 'Wrocław',
			lat: 51.1079 + 0.003,
			lon: 17.0385 - 0.005,
		},
		logo: '/logos/quality-first.png',
		salary: {
			min: 8000,
			max: 13000,
		},
		dateOfPublication: '2025-07-10T09:30:00Z',
		technologies: [
			{ name: 'Jira', level: 3 },
			{ name: 'Selenium', level: 2 },
			{ name: 'Cypress', level: 2 },
			{ name: 'Manual Testing', level: 4 },
			{ name: 'TestRail', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Junior',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'data-scientist-poznan',
		title: 'Data Scientist',
		jobDescription: `
      ## Unlock Insights with Data!

      We are looking for a passionate Data Scientist to join our team in Poznań. You will be responsible for analyzing complex datasets, building predictive models, and extracting actionable insights to drive business decisions.

      ### Your Responsibilities

      *   Collect, clean, and preprocess large datasets.
      *   Develop and implement machine learning models.
      *   Perform statistical analysis and create data visualizations.
      *   Communicate findings and recommendations to stakeholders.
      *   Collaborate with engineers to deploy models into production.

      ### Qualifications

      *   2+ years of experience in data science or a related field.
      *   Strong proficiency in Python and relevant libraries (Pandas, NumPy, Scikit-learn).
      *   Experience with machine learning algorithms and statistical modeling.
      *   Familiarity with SQL and database querying.
      *   Excellent problem-solving and analytical skills.
      *   Strong communication and presentation abilities.

      ### Desired Skills

      *   Experience with big data technologies (e.g., Spark, Hadoop).
      *   Knowledge of cloud platforms (AWS Sagemaker, Google AI Platform).
      *   Experience with data visualization tools (e.g., Tableau, Power BI).
      `,
		company: 'Insight Analytics',
		location: {
			city: 'Poznań',
			lat: 52.4064 + 0.004,
			lon: 16.9252 - 0.002,
		},
		logo: '/logos/insight-analytics.png',
		salary: {
			min: 13000,
			max: 20000,
		},
		dateOfPublication: '2025-07-08T13:00:00Z',
		technologies: [
			{ name: 'Python', level: 4 },
			{ name: 'Pandas', level: 4 },
			{ name: 'Scikit-learn', level: 3 },
			{ name: 'SQL', level: 3 },
			{ name: 'Machine Learning', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'On-site',
	},
	{
		slug: 'senior-java-developer-warsaw',
		title: 'Senior Java Developer',
		jobDescription: `
      ## Lead Our Backend Innovation!

      We are seeking a highly experienced Senior Java Developer to lead key initiatives within our core banking platform team in Warsaw. You will be responsible for designing, developing, and maintaining scalable and robust backend services.

      ### Responsibilities

      *   Lead the design and development of complex Java applications.
      *   Ensure high performance, scalability, and security of services.
      *   Mentor junior and mid-level developers.
      *   Collaborate with architects and product owners on technical solutions.
      *   Participate in code reviews and advocate for best practices.

      ### Required Skills

      *   7+ years of experience in Java development.
      *   Strong expertise in Spring Boot and Spring Framework.
      *   Experience with microservices architecture.
      *   Proficiency with relational databases (e.g., PostgreSQL, Oracle).
      *   Familiarity with message brokers (e.g., Kafka, RabbitMQ).
      *   Experience with cloud platforms (e.g., Azure, GCP).
      *   Excellent problem-solving and leadership skills.

      ### We Offer

      *   Challenging projects in a dynamic industry.
      *   Opportunities for career growth and professional development.
      *   Competitive compensation package.
      *   Supportive and collaborative team environment.
      `,
		company: 'FinTech Innovations',
		location: {
			city: 'Warsaw',
			lat: 52.2297 - 0.006,
			lon: 21.0122 + 0.003,
		},
		logo: '/logos/fintech-innovations.png',
		salary: {
			min: 18000,
			max: 28000,
		},
		dateOfPublication: '2025-07-05T10:00:00Z',
		technologies: [
			{ name: 'Java', level: 4 },
			{ name: 'Spring Boot', level: 4 },
			{ name: 'Microservices', level: 4 },
			{ name: 'PostgreSQL', level: 3 },
			{ name: 'Kafka', level: 3 },
			{ name: 'Azure', level: 2 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Senior',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'mobile-developer-android-krakow',
		title: 'Mobile Developer (Android)',
		jobDescription: `
      ## Build the Future of Mobile!

      We are looking for an experienced Android Developer to join our mobile team in Kraków. You will be instrumental in developing and maintaining our flagship mobile applications, ensuring a seamless user experience.

      ### What You'll Do

      *   Develop native Android applications using Kotlin/Java.
      *   Collaborate with product, UX/UI, and backend teams.
      *   Ensure app performance, quality, and responsiveness.
      *   Write clean, maintainable, and well-tested code.
      *   Stay up-to-date with the latest Android development trends and technologies.

      ### Skills We're Looking For

      *   3+ years of experience in Android app development.
      *   Strong proficiency in Kotlin and Java.
      *   Familiarity with Android SDK, Jetpack Compose, or XML layouts.
      *   Experience with RESTful APIs and third-party libraries.
      *   Understanding of mobile UI/UX best practices.
      *   Experience with version control systems (Git).

      ### Benefits

      *   Work on a popular and impactful mobile application.
      *   Opportunity to influence product direction.
      *   Flexible working hours and supportive team.
      *   Professional development budget.
      `,
		company: 'Mobile Solutions Hub',
		location: {
			city: 'Kraków',
			lat: 50.0614 - 0.007,
			lon: 19.9365 + 0.001,
		},
		logo: '/logos/mobile-solutions.png',
		salary: {
			min: 12000,
			max: 19000,
		},
		dateOfPublication: '2025-07-01T15:00:00Z',
		technologies: [
			{ name: 'Kotlin', level: 4 },
			{ name: 'Android SDK', level: 4 },
			{ name: 'Jetpack Compose', level: 3 },
			{ name: 'REST APIs', level: 3 },
			{ name: 'Java', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'On-site',
	},
	{
		slug: 'cloud-architect-poznan',
		title: 'Cloud Architect',
		jobDescription: `
      ## Shape Our Cloud Future!

      We are seeking an experienced Cloud Architect to design and implement robust, scalable, and secure cloud solutions. Based in Poznań, you will be a key leader in our infrastructure team, driving our cloud strategy forward.

      ### Key Responsibilities

      *   Design and implement cloud infrastructure solutions on AWS, Azure, or GCP.
      *   Develop cloud governance, security, and compliance frameworks.
      *   Provide technical leadership and guidance to engineering teams.
      *   Evaluate new cloud technologies and propose adoption strategies.
      *   Optimize cloud costs and performance.

      ### Qualifications

      *   5+ years of experience in cloud architecture or a senior cloud engineering role.
      *   Deep expertise in at least one major cloud platform (AWS, Azure, or GCP).
      *   Strong understanding of cloud networking, security, and cost optimization.
      *   Experience with infrastructure as code (Terraform, CloudFormation, ARM templates).
      *   Familiarity with containerization and orchestration (Docker, Kubernetes).
      *   Excellent communication, presentation, and leadership skills.

      ### Ideal Candidate

      *   Holds professional cloud certifications (e.g., AWS Certified Solutions Architect - Professional).
      *   Experience with serverless architectures.
      *   Proven track record of migrating on-premise solutions to the cloud.
      `,
		company: 'CloudScape Architects',
		location: {
			city: 'Poznań',
			lat: 52.4064 - 0.003,
			lon: 16.9252 + 0.006,
		},
		logo: '/logos/cloudscape-architects.png',
		salary: {
			min: 20000,
			max: 30000,
		},
		dateOfPublication: '2025-06-28T11:00:00Z',
		technologies: [
			{ name: 'AWS', level: 4 },
			{ name: 'Azure', level: 3 },
			{ name: 'GCP', level: 3 },
			{ name: 'Terraform', level: 4 },
			{ name: 'Kubernetes', level: 3 },
			{ name: 'Cloud Security', level: 4 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Senior',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'c-sharp-developer-gdansk',
		title: 'C#/.NET Developer',
		jobDescription: `
      ## Build Robust Enterprise Solutions!

      We are looking for an experienced C#/.NET Developer to join our product development team in Gdańsk. You will be responsible for designing, developing, and maintaining high-performance, scalable enterprise applications.

      ### Your Role Will Involve

      *   Developing backend services and APIs using C# and .NET Core.
      *   Working with relational databases, particularly SQL Server.
      *   Designing and implementing efficient and secure code.
      *   Participating in the full software development lifecycle.
      *   Collaborating with cross-functional teams.

      ### Required Skills

      *   4+ years of experience with C# and the .NET platform.
      *   Strong experience with .NET Core and ASP.NET Core.
      *   Proficiency in SQL and database design principles.
      *   Familiarity with RESTful API design.
      *   Understanding of object-oriented programming (OOP) principles.
      *   Experience with unit testing and integration testing.

      ### Advantages

      *   Experience with cloud platforms (Azure, AWS).
      *   Knowledge of microservices architecture.
      *   Familiarity with message queues (e.g., Azure Service Bus, RabbitMQ).
      `,
		company: 'Enterprise Software Solutions',
		location: {
			city: 'Gdańsk',
			lat: 54.3721 - 0.005, // Gdańsk center, slightly offset
			lon: 18.6384 + 0.002,
		},
		logo: '/logos/enterprise-software.png',
		salary: {
			min: 14000,
			max: 23000,
		},
		dateOfPublication: '2025-06-25T09:00:00Z',
		technologies: [
			{ name: 'C#', level: 4 },
			{ name: '.NET Core', level: 4 },
			{ name: 'ASP.NET Core', level: 3 },
			{ name: 'SQL Server', level: 3 },
			{ name: 'Azure', level: 2 },
			{ name: 'REST APIs', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	// --- New 20 Offers Below ---
	{
		slug: 'react-native-developer-warsaw-hybrid',
		title: 'React Native Developer',
		jobDescription: `
      ## Cross-Platform Mobile Magic!

      Join our dynamic mobile team in Warsaw as a React Native Developer. You'll build innovative cross-platform applications that reach millions of users.

      ### Key Responsibilities

      *   Develop and maintain high-quality React Native applications for iOS and Android.
      *   Collaborate with product designers and backend engineers.
      *   Optimize app performance and responsiveness.
      *   Implement new features and enhance existing ones.
      *   Ensure code quality through testing and code reviews.

      ### Requirements

      *   3+ years of experience with React Native.
      *   Strong understanding of JavaScript/TypeScript.
      *   Familiarity with mobile UI/UX principles.
      *   Experience with state management libraries (e.g., Redux, MobX).
      *   Published at least one app to Google Play or Apple App Store.

      ### Nice to Have

      *   Native development experience (Kotlin/Swift/Objective-C).
      *   Experience with GraphQL.
      `,
		company: 'MobileFirst Sp. z o.o.',
		location: {
			city: 'Warsaw',
			lat: 52.2297 + 0.01,
			lon: 21.0122 - 0.005,
		},
		logo: '/logos/mobilefirst.png',
		salary: {
			min: 13000,
			max: 21000,
		},
		dateOfPublication: '2025-07-29T09:00:00Z',
		technologies: [
			{ name: 'React Native', level: 4 },
			{ name: 'TypeScript', level: 3 },
			{ name: 'JavaScript', level: 4 },
			{ name: 'Redux', level: 3 },
			{ name: 'iOS', level: 2 },
			{ name: 'Android', level: 2 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'senior-php-symfony-developer-remote',
		title: 'Senior PHP/Symfony Developer',
		jobDescription: `
      ## Master of Backend PHP!

      We are seeking a Senior PHP Developer with strong Symfony experience to join our remote team. You'll be instrumental in developing robust backend systems for our e-commerce platform.

      ### Responsibilities

      *   Design, develop, and maintain high-performance PHP applications using Symfony.
      *   Lead new feature development from concept to deployment.
      *   Work with complex SQL databases (MySQL/PostgreSQL).
      *   Ensure code quality, scalability, and security.
      *   Mentor junior team members and participate in architectural decisions.

      ### Required Skills

      *   6+ years of PHP development experience.
      *   Extensive experience with Symfony framework.
      *   Strong knowledge of object-oriented programming and design patterns.
      *   Proficiency with SQL and database optimization.
      *   Experience with Git, CI/CD pipelines.
      *   Excellent problem-solving abilities.

      ### Bonus

      *   Experience with Docker/Kubernetes.
      *   Familiarity with cloud services (AWS, GCP).
      *   Knowledge of RESTful API design.
      `,
		company: 'E-Commerce Titans',
		location: {
			city: 'Katowice',
			lat: 50.0496, // Katowice center, slightly offset
			lon: 19.0207,
		},
		logo: '/logos/ecommerce-titans.png',
		salary: {
			min: 15000,
			max: 23000,
		},
		dateOfPublication: '2025-07-27T11:30:00Z',
		technologies: [
			{ name: 'PHP', level: 4 },
			{ name: 'Symfony', level: 4 },
			{ name: 'MySQL', level: 3 },
			{ name: 'PostgreSQL', level: 3 },
			{ name: 'Git', level: 4 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Senior',
		contractType: 'Permanent',
		operatingMode: 'Remote',
	},
	{
		slug: 'junior-python-developer-wroclaw-onsite',
		title: 'Junior Python Developer',
		jobDescription: `
      ## Kickstart Your Python Career!

      We're looking for an enthusiastic Junior Python Developer to join our data processing team in Wrocław. This is a fantastic opportunity to learn and grow in a supportive environment.

      ### What You'll Be Doing

      *   Assist in developing and maintaining Python scripts for data extraction and transformation.
      *   Work with relational databases to store and retrieve data.
      *   Participate in code reviews and learn best practices.
      *   Help with bug fixing and testing.
      *   Contribute to documentation.

      ### Ideal Candidate

      *   0-1 year of professional Python experience or strong academic background.
      *   Solid understanding of Python fundamentals.
      *   Basic knowledge of SQL.
      *   Eager to learn new technologies and concepts.
      *   Team player with good communication skills.

      ### Why Join Us?

      *   Mentorship from senior developers.
      *   Exposure to real-world data challenges.
      *   Clear career progression path.
      *   Friendly and collaborative atmosphere.
      `,
		company: 'Data Processors Inc.',
		location: {
			city: 'Wrocław',
			lat: 51.1079 - 0.004,
			lon: 17.0385 + 0.002,
		},
		logo: '/logos/data-processors.png',
		salary: {
			min: 6500,
			max: 9500,
		},
		dateOfPublication: '2025-07-26T10:15:00Z',
		technologies: [
			{ name: 'Python', level: 2 },
			{ name: 'SQL', level: 1 },
			{ name: 'Pandas', level: 1 },
			{ name: 'Git', level: 2 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Junior',
		contractType: 'Permanent',
		operatingMode: 'On-site',
	},
	{
		slug: 'senior-fullstack-typescript-lodz-hybrid',
		title: 'Senior Fullstack Developer (TypeScript)',
		jobDescription: `
      ## Lead Our Next-Gen Platform!

      We're seeking a Senior Fullstack Developer proficient in TypeScript for both frontend (React/Angular) and backend (Node.js) to join our Łódź team. You'll play a pivotal role in evolving our core SaaS product.

      ### Your Contribution

      *   Architect and implement features across the full stack.
      *   Ensure high performance, scalability, and maintainability.
      *   Lead technical discussions and guide feature development.
      *   Mentor junior and mid-level developers.
      *   Collaborate with product, design, and QA teams.

      ### Core Skills

      *   5+ years of fullstack development experience.
      *   Expertise in TypeScript for both frontend (React/Angular) and Node.js backend.
      *   Strong experience with relational databases (PostgreSQL preferred).
      *   Familiarity with cloud deployments (Azure/AWS).
      *   Solid understanding of microservices architecture.
      *   Excellent problem-solving and communication skills.

      ### What We Value

      *   Clean code and test-driven development.
      *   Continuous learning and improvement.
      *   Collaborative spirit.
      `,
		company: 'Fullstack Innovators',
		location: {
			city: 'Łódź',
			lat: 51.7592 + 0.003,
			lon: 19.4559 - 0.001,
		},
		logo: '/logos/fullstack-innovators.png',
		salary: {
			min: 17000,
			max: 26000,
		},
		dateOfPublication: '2025-07-24T14:00:00Z',
		technologies: [
			{ name: 'TypeScript', level: 4 },
			{ name: 'Node.js', level: 4 },
			{ name: 'React', level: 4 },
			{ name: 'Angular', level: 3 },
			{ name: 'PostgreSQL', level: 3 },
			{ name: 'Azure', level: 2 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Senior',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'cloud-security-engineer-remote-poland',
		title: 'Cloud Security Engineer',
		jobDescription: `
      ## Secure Our Cloud Frontier!

      Join us as a Cloud Security Engineer in a fully remote role (Poland). You'll be crucial in designing, implementing, and maintaining robust security postures for our cloud environments (AWS, Azure, GCP).

      ### Your Mission

      *   Design and implement secure cloud architectures.
      *   Conduct security assessments and vulnerability scans.
      *   Develop and enforce security policies and best practices.
      *   Respond to security incidents and provide post-incident analysis.
      *   Automate security controls and integrate them into CI/CD pipelines.

      ### Qualifications

      *   3+ years of experience in cloud security.
      *   Strong knowledge of AWS, Azure, or GCP security services.
      *   Experience with security tools (e.g., SIEM, WAF, IDS/IPS).
      *   Familiarity with compliance standards (GDPR, ISO 27001).
      *   Scripting skills (Python, Bash).
      *   Excellent analytical and problem-solving abilities.

      ### What We Offer

      *   Opportunity to work with cutting-edge cloud security technologies.
      *   Continuous learning and certification support.
      *   Collaborative and expert team.
      `,
		company: 'SecureCloud Solutions',
		location: {
			city: 'Katowice',
			lat: 50.0496 + 0.001, // Katowice, slightly offset
			lon: 19.0207 - 0.003,
		},
		logo: '/logos/securecloud.png',
		salary: {
			min: 15000,
			max: 24000,
		},
		dateOfPublication: '2025-07-23T16:00:00Z',
		technologies: [
			{ name: 'AWS Security', level: 4 },
			{ name: 'Azure Security', level: 3 },
			{ name: 'GCP Security', level: 3 },
			{ name: 'Python', level: 2 },
			{ name: 'Kubernetes Security', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Remote',
	},
	{
		slug: 'game-developer-unity-poznan-onsite',
		title: 'Game Developer (Unity)',
		jobDescription: `
      ## Bring Games to Life!

      We are seeking a talented Game Developer with expertise in Unity to join our growing studio in Poznań. You'll contribute to exciting new mobile and PC game titles.

      ### Your Role

      *   Develop game mechanics, UI, and systems using Unity and C#.
      *   Collaborate with artists, designers, and other engineers.
      *   Optimize game performance for various platforms.
      *   Write clean, efficient, and well-documented code.
      *   Participate in game design discussions and brainstorming sessions.

      ### Qualifications

      *   2+ years of experience in game development with Unity.
      *   Strong proficiency in C#.
      *   Familiarity with 3D math and physics.
      *   Experience with version control (Git, Perforce).
      *   Passion for gaming and creating engaging experiences.
      *   Strong problem-solving skills.

      ### Plus Points

      *   Experience with mobile game development.
      *   Knowledge of shaders or VFX.
      *   Experience with multiplayer networking.
      `,
		company: 'PlayForge Games',
		location: {
			city: 'Poznań',
			lat: 52.4064 + 0.006,
			lon: 16.9252 + 0.003,
		},
		logo: '/logos/playforge.png',
		salary: {
			min: 9000,
			max: 15000,
		},
		dateOfPublication: '2025-07-22T10:30:00Z',
		technologies: [
			{ name: 'Unity', level: 4 },
			{ name: 'C#', level: 4 },
			{ name: 'Git', level: 3 },
			{ name: 'Game Design', level: 2 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'On-site',
	},
	{
		slug: 'senior-frontend-react-developer-krakow-hybrid',
		title: 'Senior Frontend Developer (React)',
		jobDescription: `
      ## React Mastermind Wanted!

      Join our core product team in Kraków as a Senior Frontend Developer focusing on React. You'll build highly interactive and performant web applications.

      ### Your Impact

      *   Develop complex UI components and features using React, TypeScript, and modern CSS-in-JS solutions.
      *   Lead architectural decisions for the frontend stack.
      *   Ensure cross-browser compatibility and accessibility.
      *   Optimize applications for speed and scalability.
      *   Mentor junior and mid-level developers, conduct code reviews.

      ### Essential Skills

      *   5+ years of experience in frontend development, with 4+ years in React.
      *   Expertise in React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3.
      *   Strong understanding of state management (Redux, Context API, Zustand).
      *   Experience with testing frameworks (Jest, React Testing Library, Cypress).
      *   Familiarity with build tools (Webpack, Vite).

      ### Good to Have

      *   Experience with Next.js or other SSR frameworks.
      *   Familiarity with GraphQL.
      *   Experience in an Agile environment.
      `,
		company: 'WebInnovators S.A.',
		location: {
			city: 'Kraków',
			lat: 50.0614 + 0.002,
			lon: 19.9365 + 0.006,
		},
		logo: '/logos/webinnovators.png',
		salary: {
			min: 17000,
			max: 26000,
		},
		dateOfPublication: '2025-07-21T10:00:00Z',
		technologies: [
			{ name: 'React', level: 4 },
			{ name: 'TypeScript', level: 4 },
			{ name: 'JavaScript', level: 4 },
			{ name: 'Redux', level: 4 },
			{ name: 'Jest', level: 3 },
			{ name: 'Cypress', level: 2 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Senior',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'system-administrator-warsaw-onsite',
		title: 'System Administrator',
		jobDescription: `
      ## Keep Our Systems Running Smoothly!

      We are looking for an experienced System Administrator to manage our IT infrastructure in our Warsaw office. You'll be responsible for the stability, integrity, and efficient operation of our internal systems and networks.

      ### Your Daily Tasks

      *   Manage Windows and Linux servers.
      *   Administer network devices (routers, switches, firewalls).
      *   Monitor system performance and troubleshoot issues.
      *   Manage user accounts, permissions, and security.
      *   Perform backups and disaster recovery planning.
      *   Provide technical support to employees.

      ### Skills & Experience

      *   3+ years of experience as a System Administrator.
      *   Strong knowledge of Windows Server and Active Directory.
      *   Experience with Linux (Ubuntu/CentOS).
      *   Familiarity with virtualization technologies (VMware, Hyper-V).
      *   Understanding of networking protocols (TCP/IP, DNS, DHCP).
      *   Problem-solving attitude and strong communication skills.

      ### What We Offer

      *   Opportunity to work with modern IT infrastructure.
      *   Stable employment in a growing company.
      *   Professional development and training.
      `,
		company: 'IT Backbone Services',
		location: {
			city: 'Warsaw',
			lat: 52.2297 - 0.009,
			lon: 21.0122 + 0.007,
		},
		logo: '/logos/it-backbone.png',
		salary: {
			min: 9000,
			max: 14000,
		},
		dateOfPublication: '2025-07-19T11:00:00Z',
		technologies: [
			{ name: 'Windows Server', level: 4 },
			{ name: 'Linux', level: 3 },
			{ name: 'Active Directory', level: 4 },
			{ name: 'Networking', level: 3 },
			{ name: 'VMware', level: 2 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'On-site',
	},
	{
		slug: 'machine-learning-engineer-gdansk-hybrid',
		title: 'Machine Learning Engineer',
		jobDescription: `
      ## Build Intelligent Systems!

      We are searching for a Machine Learning Engineer to join our AI/ML team in Gdańsk. You'll be responsible for developing, deploying, and maintaining machine learning models that power our core products.

      ### Your Role Includes

      *   Design and implement machine learning algorithms and models.
      *   Clean and prepare large datasets for training.
      *   Deploy and monitor ML models in production environments.
      *   Collaborate with data scientists and software engineers.
      *   Research and apply state-of-the-art ML techniques.

      ### Essential Skills

      *   3+ years of experience as an ML Engineer or similar role.
      *   Strong proficiency in Python and ML frameworks (TensorFlow, PyTorch, Scikit-learn).
      *   Experience with MLOps practices and tools.
      *   Familiarity with cloud platforms (AWS Sagemaker, Azure ML, GCP AI Platform).
      *   Understanding of data structures and algorithms.
      *   Good mathematical and statistical background.

      ### Desired Experience

      *   Experience with distributed ML training.
      *   Knowledge of Docker and Kubernetes.
      *   Contributions to open-source ML projects.
      `,
		company: 'AI Innovations Hub',
		location: {
			city: 'Gdańsk',
			lat: 54.3721 + 0.008,
			lon: 18.6384 - 0.001,
		},
		logo: '/logos/ai-innovations.png',
		salary: {
			min: 16000,
			max: 25000,
		},
		dateOfPublication: '2025-07-17T14:00:00Z',
		technologies: [
			{ name: 'Python', level: 4 },
			{ name: 'TensorFlow', level: 3 },
			{ name: 'PyTorch', level: 3 },
			{ name: 'Scikit-learn', level: 4 },
			{ name: 'AWS Sagemaker', level: 2 },
			{ name: 'Docker', level: 2 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'senior-javascript-developer-remote-poland',
		title: 'Senior JavaScript Developer',
		jobDescription: `
      ## Elevate Our JavaScript Stack!

      We're seeking a highly skilled Senior JavaScript Developer to work remotely within Poland. You'll be working on complex, high-traffic web applications, utilizing your deep understanding of modern JavaScript.

      ### Your Responsibilities

      *   Develop and maintain robust, scalable, and secure JavaScript applications.
      *   Lead feature development and provide technical guidance.
      *   Optimize application performance and user experience.
      *   Contribute to architectural discussions and technology choices.
      *   Mentor junior team members and promote best coding practices.

      ### Must-Have Skills

      *   6+ years of extensive experience with JavaScript (ES6+).
      *   Deep knowledge of at least one modern framework (React, Angular, Vue.js).
      *   Proficiency with Node.js and building RESTful APIs.
      *   Experience with unit and integration testing.
      *   Strong understanding of web performance optimization.
      *   Excellent problem-solving and communication skills.

      ### What We Appreciate

      *   Familiarity with micro-frontend architectures.
      *   Experience with GraphQL.
      *   Open-source contributions.
      `,
		company: 'Global Web Solutions',
		location: {
			city: 'Szczecin',
			lat: 53.4289, // Szczecin, slightly offset
			lon: 14.553,
		},
		logo: '/logos/global-web.png',
		salary: {
			min: 16000,
			max: 24000,
		},
		dateOfPublication: '2025-07-16T10:00:00Z',
		technologies: [
			{ name: 'JavaScript', level: 4 },
			{ name: 'Node.js', level: 4 },
			{ name: 'React', level: 4 },
			{ name: 'Angular', level: 3 },
			{ name: 'Vue.js', level: 3 },
			{ name: 'REST APIs', level: 4 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Senior',
		contractType: 'Permanent',
		operatingMode: 'Remote',
	},
	{
		slug: 'junior-c-plus-plus-developer-warsaw-onsite',
		title: 'Junior C++ Developer',
		jobDescription: `
      ## Dive into Low-Level Development!

      We are seeking a motivated Junior C++ Developer to join our embedded systems team in Warsaw. This is a unique opportunity to work on cutting-edge hardware and software integration.

      ### Your Role Will Involve

      *   Developing and debugging C++ code for embedded devices.
      *   Assisting in system design and architecture.
      *   Conducting unit and integration testing.
      *   Collaborating with hardware engineers.
      *   Learning about real-time operating systems (RTOS).

      ### We're Looking For

      *   0-2 years of C++ development experience (academic projects welcome).
      *   Solid understanding of C++ fundamentals and OOP.
      *   Familiarity with data structures and algorithms.
      *   Eagerness to learn about embedded systems.
      *   Problem-solving mindset and attention to detail.

      ### Advantages

      *   Experience with Linux or RTOS.
      *   Knowledge of version control (Git).
      *   Any experience with hardware interfaces (SPI, I2C, UART).
      `,
		company: 'Embedded Tech Solutions',
		location: {
			city: 'Warsaw',
			lat: 52.2297 + 0.007,
			lon: 21.0122 + 0.009,
		},
		logo: '/logos/embedded-tech.png',
		salary: {
			min: 8000,
			max: 12000,
		},
		dateOfPublication: '2025-07-14T09:45:00Z',
		technologies: [
			{ name: 'C++', level: 2 },
			{ name: 'Linux', level: 1 },
			{ name: 'Git', level: 2 },
			{ name: 'Embedded Systems', level: 1 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Junior',
		contractType: 'Permanent',
		operatingMode: 'On-site',
	},
	{
		slug: 'product-owner-krakow-hybrid',
		title: 'Product Owner',
		jobDescription: `
      ## Drive Product Success!

      We are looking for an experienced Product Owner to join our team in Kraków. You will be responsible for defining, prioritizing, and delivering features that maximize product value for our users.

      ### Key Responsibilities

      *   Define and communicate product vision, roadmap, and strategy.
      *   Translate user needs into clear and actionable user stories.
      *   Prioritize backlog items based on business value and user impact.
      *   Collaborate closely with development teams throughout the agile process.
      *   Gather and analyze feedback to iterate on product features.
      *   Act as the voice of the customer within the development team.

      ### Required Skills

      *   3+ years of experience as a Product Owner or similar role.
      *   Strong understanding of Agile methodologies (Scrum preferred).
      *   Excellent communication, negotiation, and stakeholder management skills.
      *   Ability to define and articulate product requirements clearly.
      *   Analytical mindset and data-driven decision-making.
      *   Familiarity with product management tools (e.g., Jira, Confluence).

      ### Desired Attributes

      *   Experience in a specific industry (e.g., FinTech, E-commerce).
      *   Product Owner certification (e.g., CSPO).
      *   Basic technical understanding of software development.
      `,
		company: 'Product Visionaries Inc.',
		location: {
			city: 'Kraków',
			lat: 50.0614 + 0.009,
			lon: 19.9365 - 0.008,
		},
		logo: '/logos/product-visionaries.png',
		salary: {
			min: 14000,
			max: 22000,
		},
		dateOfPublication: '2025-07-12T13:00:00Z',
		technologies: [
			{ name: 'Agile', level: 4 },
			{ name: 'Scrum', level: 4 },
			{ name: 'Jira', level: 4 },
			{ name: 'Product Management', level: 4 },
			{ name: 'User Stories', level: 4 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'net-developer-wroclaw-remote',
		title: '.NET Developer',
		jobDescription: `
      ## Craft Cutting-Edge .NET Solutions!

      We are looking for a talented .NET Developer to join our remotely-first team in Wrocław. You will be instrumental in developing robust and scalable backend services and APIs for our enterprise applications.

      ### Your Responsibilities

      *   Design, develop, and maintain applications using C# and .NET Core.
      *   Implement RESTful APIs and microservices.
      *   Work with various database technologies (SQL Server, CosmosDB).
      *   Write clean, efficient, and testable code.
      *   Participate in code reviews and architectural discussions.
      *   Troubleshoot and debug production issues.

      ### Qualifications

      *   3+ years of experience with C# and the .NET framework (.NET Core preferred).
      *   Strong understanding of object-oriented programming (OOP).
      *   Experience with ASP.NET Core and Entity Framework.
      *   Proficiency in SQL Server or other relational databases.
      *   Familiarity with cloud platforms (Azure preferred).
      *   Good communication and teamwork skills.

      ### Bonus Skills

      *   Experience with Azure DevOps or GitHub Actions.
      *   Knowledge of front-end frameworks (Angular, React).
      *   Familiarity with message queues (Kafka, RabbitMQ).
      `,
		company: 'Code Crafters PL',
		location: {
			city: 'Wrocław',
			lat: 51.1079 + 0.009,
			lon: 17.0385 + 0.004,
		},
		logo: '/logos/codecrafters.png',
		salary: {
			min: 13000,
			max: 20000,
		},
		dateOfPublication: '2025-07-11T10:00:00Z',
		technologies: [
			{ name: 'C#', level: 4 },
			{ name: '.NET Core', level: 4 },
			{ name: 'ASP.NET Core', level: 3 },
			{ name: 'SQL Server', level: 3 },
			{ name: 'Azure', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Remote',
	},
	{
		slug: 'front-end-angular-developer-lodz-onsite',
		title: 'Front-End Angular Developer',
		jobDescription: `
      ## Build Dynamic Web Experiences!

      We are seeking a talented Front-End Angular Developer to join our team in Łódź. You will be responsible for creating engaging and highly performant user interfaces for our business applications.

      ### Your Responsibilities

      *   Develop complex, responsive, and reusable UI components using Angular.
      *   Collaborate with backend developers to integrate APIs.
      *   Ensure cross-browser compatibility and optimize for performance.
      *   Write unit and end-to-end tests for your code.
      *   Participate in design discussions and code reviews.

      ### Qualifications

      *   3+ years of experience in front-end development with Angular.
      *   Strong proficiency in TypeScript, HTML5, and CSS3/SCSS.
      *   Familiarity with state management patterns (e.g., NgRx).
      *   Experience with RESTful APIs.
      *   Understanding of modern web development best practices.
      *   Good problem-solving and communication skills.

      ### Bonus Points

      *   Experience with RxJS.
      *   Familiarity with UI component libraries (e.g., Angular Material).
      *   Knowledge of Agile development methodologies.
      `,
		company: 'Angular Solutions Lab',
		location: {
			city: 'Łódź',
			lat: 51.7592 - 0.005,
			lon: 19.4559 + 0.004,
		},
		logo: '/logos/angular-lab.png',
		salary: {
			min: 10000,
			max: 16000,
		},
		dateOfPublication: '2025-07-09T14:30:00Z',
		technologies: [
			{ name: 'Angular', level: 4 },
			{ name: 'TypeScript', level: 3 },
			{ name: 'HTML5', level: 4 },
			{ name: 'CSS3', level: 3 },
			{ name: 'NgRx', level: 2 },
			{ name: 'REST APIs', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'On-site',
	},
	{
		slug: 'ios-developer-warsaw-onsite',
		title: 'iOS Developer',
		jobDescription: `
      ## Innovate on iOS!

      We're looking for a skilled iOS Developer to join our mobile innovation hub in Warsaw. You'll work on our leading consumer-facing applications, delivering exceptional user experiences.

      ### Your Contribution

      *   Develop and maintain native iOS applications using Swift and Objective-C.
      *   Collaborate with product, design, and backend teams to define and implement new features.
      *   Ensure app performance, responsiveness, and adherence to Apple's guidelines.
      *   Write clean, well-tested, and maintainable code.
      *   Stay current with the latest iOS development trends and SDK updates.

      ### Essential Skills

      *   3+ years of experience in iOS app development.
      *   Strong proficiency in Swift and familiarity with Objective-C.
      *   Deep understanding of iOS SDK, UIKit, and SwiftUI.
      *   Experience with RESTful APIs and integrating third-party SDKs.
      *   Familiarity with Git and Agile development methodologies.
      *   Published at least one app on the App Store.

      ### Nice to Have

      *   Experience with SwiftUI.
      *   Knowledge of RxSwift or Combine.
      *   Unit and UI testing experience.
      `,
		company: 'Apple Enthusiasts Inc.',
		location: {
			city: 'Warsaw',
			lat: 52.2297 + 0.002,
			lon: 21.0122 - 0.008,
		},
		logo: '/logos/apple-enthusiasts.png',
		salary: {
			min: 14000,
			max: 22000,
		},
		dateOfPublication: '2025-07-07T11:00:00Z',
		technologies: [
			{ name: 'Swift', level: 4 },
			{ name: 'iOS SDK', level: 4 },
			{ name: 'UIKit', level: 4 },
			{ name: 'SwiftUI', level: 2 },
			{ name: 'Objective-C', level: 2 },
			{ name: 'REST APIs', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'On-site',
	},
	{
		slug: 'cybersecurity-analyst-poznan-hybrid',
		title: 'Cybersecurity Analyst',
		jobDescription: `
      ## Protect Our Digital Assets!

      We are seeking a vigilant Cybersecurity Analyst to join our security operations team in Poznań. You will play a critical role in monitoring, detecting, and responding to cyber threats.

      ### Your Responsibilities

      *   Monitor security systems (SIEM, EDR) for alerts and anomalies.
      *   Investigate security incidents and provide detailed reports.
      *   Perform vulnerability assessments and penetration testing.
      *   Assist in developing and implementing security policies and procedures.
      *   Stay up-to-date with the latest security threats and trends.

      ### Required Skills

      *   2+ years of experience in cybersecurity or IT security.
      *   Strong understanding of network protocols, operating systems (Windows/Linux), and security concepts.
      *   Experience with SIEM tools (e.g., Splunk, ELK Stack).
      *   Familiarity with common attack techniques and defensive measures.
      *   Excellent analytical and problem-solving skills.
      *   Relevant certifications (e.g., CompTIA Security+, CySA+, CEH) are a plus.

      ### What We Offer

      *   Challenging work in a rapidly evolving field.
      *   Opportunity for professional growth and advanced training.
      *   Supportive and expert security team.
      `,
		company: 'SecureNet Defense',
		location: {
			city: 'Poznań',
			lat: 52.4064 - 0.001,
			lon: 16.9252 - 0.007,
		},
		logo: '/logos/securenet.png',
		salary: {
			min: 10000,
			max: 16000,
		},
		dateOfPublication: '2025-07-06T14:00:00Z',
		technologies: [
			{ name: 'SIEM', level: 3 },
			{ name: 'Vulnerability Assessment', level: 3 },
			{ name: 'Network Security', level: 3 },
			{ name: 'Incident Response', level: 2 },
			{ name: 'Linux', level: 2 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'software-engineer-in-test-remote-poland',
		title: 'Software Engineer in Test (SDET)',
		jobDescription: `
      ## Automate Quality, Accelerate Delivery!

      We are seeking a skilled Software Engineer in Test (SDET) to join our remote team in Poland. You will design, develop, and maintain automated test frameworks and strategies to ensure the highest quality of our software.

      ### Your Responsibilities

      *   Develop and enhance automated test suites using programming languages (Java, Python, C#).
      *   Design and implement scalable and robust test automation frameworks.
      *   Integrate automated tests into CI/CD pipelines.
      *   Collaborate with development teams to ensure testability of features.
      *   Analyze test results, identify defects, and report on quality metrics.

      ### Required Skills

      *   3+ years of experience as an SDET or Automation QA Engineer.
      *   Strong programming skills in Java, Python, or C#.
      *   Extensive experience with test automation frameworks (e.g., Selenium, Playwright, Cypress).
      *   Familiarity with API testing (e.g., Postman, Rest Assured).
      *   Experience with CI/CD tools (Jenkins, GitLab CI).
      *   Strong understanding of software testing principles and methodologies.

      ### What We Offer

      *   Opportunity to influence test strategy for large-scale applications.
      *   Work with a modern tech stack and agile teams.
      *   Flexible remote work.
      `,
		company: 'Automation Gurus',
		location: {
			city: 'Łódź',
			lat: 51.7592, // Łódź, slightly offset
			lon: 19.4559,
		},
		logo: '/logos/automation-gurus.png',
		salary: {
			min: 12000,
			max: 19000,
		},
		dateOfPublication: '2025-07-04T10:30:00Z',
		technologies: [
			{ name: 'Selenium', level: 4 },
			{ name: 'Java', level: 3 },
			{ name: 'Python', level: 3 },
			{ name: 'Cypress', level: 3 },
			{ name: 'CI/CD', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Remote',
	},
	{
		slug: 'golang-backend-developer-krakow-hybrid',
		title: 'Golang Backend Developer',
		jobDescription: `
      ## Build High-Performance Backends with Go!

      We are seeking a talented Golang Backend Developer to join our team in Kraków. You will design and implement highly scalable and efficient backend services for our real-time data processing platform.

      ### Key Responsibilities

      *   Develop and maintain high-performance microservices using Go.
      *   Design and interact with NoSQL (e.g., Cassandra, Redis) and SQL databases.
      *   Ensure code quality, testability, and scalability.
      *   Participate in architectural discussions and system design.
      *   Troubleshoot and debug production issues.

      ### Required Skills

      *   2+ years of experience with Golang development.
      *   Strong understanding of concurrency and distributed systems.
      *   Experience with RESTful APIs and gRPC.
      *   Familiarity with Docker and Kubernetes.
      *   Proficiency with at least one database technology.
      *   Strong problem-solving and analytical skills.

      ### What We Value

      *   Clean code and best practices.
      *   Performance optimization.
      *   Team collaboration.
      `,
		company: 'GoFast Systems',
		location: {
			city: 'Kraków',
			lat: 50.0614 - 0.003,
			lon: 19.9365 + 0.009,
		},
		logo: '/logos/gofast-systems.png',
		salary: {
			min: 15000,
			max: 24000,
		},
		dateOfPublication: '2025-07-03T16:00:00Z',
		technologies: [
			{ name: 'Golang', level: 4 },
			{ name: 'Microservices', level: 3 },
			{ name: 'Docker', level: 3 },
			{ name: 'Kubernetes', level: 2 },
			{ name: 'Cassandra', level: 2 },
			{ name: 'Redis', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'embedded-software-engineer-warsaw-onsite',
		title: 'Embedded Software Engineer',
		jobDescription: `
      ## Engineer the Future of Devices!

      We are searching for an Embedded Software Engineer to join our hardware-software integration team in Warsaw. You will work on low-level programming for innovative IoT and industrial automation devices.

      ### Your Contribution

      *   Design, develop, and test embedded software in C/C++.
      *   Work with various microcontrollers and processors.
      *   Debug hardware-software interfaces.
      *   Contribute to firmware development and optimization.
      *   Collaborate with hardware engineers on new product development.

      ### Required Skills

      *   3+ years of experience in embedded software development.
      *   Strong proficiency in C and C++.
      *   Experience with microcontroller programming (e.g., ARM Cortex-M).
      *   Familiarity with communication protocols (e.g., SPI, I2C, UART, CAN).
      *   Experience with real-time operating systems (RTOS) is a plus.
      *   Knowledge of version control (Git).

      ### Why Join Us?

      *   Work on cutting-edge embedded systems.
      *   Opportunity to see your code directly impact physical products.
      *   Supportive team and continuous learning.
      `,
		company: 'IoT Innovators PL',
		location: {
			city: 'Warsaw',
			lat: 52.2297 - 0.004,
			lon: 21.0122 + 0.001,
		},
		logo: '/logos/iot-innovators.png',
		salary: {
			min: 12000,
			max: 18000,
		},
		dateOfPublication: '2025-07-02T09:00:00Z',
		technologies: [
			{ name: 'C', level: 4 },
			{ name: 'C++', level: 3 },
			{ name: 'Microcontrollers', level: 3 },
			{ name: 'RTOS', level: 2 },
			{ name: 'Embedded Systems', level: 4 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'On-site',
	},
	{
		slug: 'blockchain-developer-remote-poland',
		title: 'Blockchain Developer',
		jobDescription: `
      ## Decentralize the Future!

      We are seeking a talented Blockchain Developer to join our remote team in Poland. You will design, develop, and implement smart contracts and decentralized applications (dApps).

      ### Your Responsibilities

      *   Develop secure and efficient smart contracts on Ethereum (Solidity) or other blockchains.
      *   Build decentralized applications (dApps) using web3.js/ethers.js.
      *   Participate in blockchain architecture design and research new protocols.
      *   Ensure code quality, security, and scalability of blockchain solutions.
      *   Collaborate with frontend and backend teams for integration.

      ### Required Skills

      *   2+ years of experience in blockchain development.
      *   Proficiency in Solidity, Rust, or Go.
      *   Strong understanding of blockchain concepts (e.g., EVM, consensus mechanisms).
      *   Experience with development tools (Truffle, Hardhat, Remix).
      *   Familiarity with cryptography basics.
      *   Passion for decentralized technologies.

      ### Plus Points

      *   Experience with Layer 2 solutions.
      *   Knowledge of IPFS or other decentralized storage.
      *   Contributions to blockchain open-source projects.
      `,
		company: 'Decentralized Future',
		location: {
			city: 'Kraków',
			lat: 50.0614, // Kraków, slightly offset
			lon: 19.9365,
		},
		logo: '/logos/decentralized-future.png',
		salary: {
			min: 15000,
			max: 28000,
		},
		dateOfPublication: '2025-06-30T10:00:00Z',
		technologies: [
			{ name: 'Solidity', level: 3 },
			{ name: 'Ethereum', level: 3 },
			{ name: 'Web3.js', level: 3 },
			{ name: 'Rust', level: 2 },
			{ name: 'Blockchain', level: 4 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Remote',
	},
	{
		slug: 'senior-data-engineer-wroclaw-hybrid',
		title: 'Senior Data Engineer',
		jobDescription: `
      ## Build Scalable Data Pipelines!

      We are seeking a Senior Data Engineer to join our data platform team in Wrocław. You will be responsible for designing, building, and maintaining robust and scalable data pipelines and ETL processes.

      ### Your Responsibilities

      *   Develop and optimize data pipelines using Python, Spark, and SQL.
      *   Design and implement data warehouses and data lakes.
      *   Ensure data quality, integrity, and availability.
      *   Work with cloud data services (AWS Glue, Azure Data Factory, GCP Dataflow).
      *   Collaborate with data scientists and analytics teams to meet data needs.
      *   Mentor junior data engineers.

      ### Required Skills

      *   5+ years of experience in data engineering.
      *   Strong proficiency in Python and SQL.
      *   Extensive experience with big data technologies (Spark, Hadoop).
      *   Hands-on experience with cloud data platforms (AWS, Azure, or GCP).
      *   Familiarity with data warehousing concepts (e.g., Snowflake, Redshift).
      *   Experience with workflow orchestration tools (e.g., Airflow).

      ### Why Join Us?

      *   Work on large-scale data challenges.
      *   Impact business decisions through robust data infrastructure.
      *   Continuous learning and growth opportunities.
      `,
		company: 'DataFlow Masters',
		location: {
			city: 'Wrocław',
			lat: 51.1079 - 0.007,
			lon: 17.0385 - 0.002,
		},
		logo: '/logos/dataflow-masters.png',
		salary: {
			min: 18000,
			max: 27000,
		},
		dateOfPublication: '2025-06-27T14:00:00Z',
		technologies: [
			{ name: 'Python', level: 4 },
			{ name: 'Spark', level: 4 },
			{ name: 'SQL', level: 4 },
			{ name: 'AWS Glue', level: 3 },
			{ name: 'Airflow', level: 3 },
			{ name: 'Data Warehousing', level: 4 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Senior',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'ui-developer-warsaw-hybrid',
		title: 'UI Developer (Frontend Focused)',
		jobDescription: `
      ## Polish Our User Interfaces!

      We are looking for a creative UI Developer to join our team in Warsaw. You will focus on the visual and interactive aspects of our web applications, ensuring an exceptional user experience.

      ### Your Responsibilities

      *   Translate UI/UX designs into high-quality, responsive web interfaces.
      *   Develop reusable UI components using React/Vue/Angular (choice depends on project).
      *   Ensure pixel-perfect implementation and cross-browser compatibility.
      *   Collaborate closely with UX/UI designers and frontend engineers.
      *   Implement animations and interactive elements.

      ### Required Skills

      *   3+ years of experience as a UI Developer or Frontend Developer.
      *   Strong expertise in HTML5, CSS3 (Sass/Less), and modern JavaScript (ES6+).
      *   Familiarity with at least one major JavaScript framework (React, Vue, or Angular).
      *   Proficiency with responsive design and accessibility best practices.
      *   Experience with design tools (Figma, Sketch, Adobe XD) for translating designs.
      *   Strong eye for detail and design aesthetics.

      ### What We Offer

      *   Opportunity to work on visually rich and interactive applications.
      *   Collaborative environment with designers and engineers.
      *   Focus on cutting-edge frontend technologies.
      `,
		company: 'Pixel Perfect Labs',
		location: {
			city: 'Warsaw',
			lat: 52.2297 + 0.005,
			lon: 21.0122 - 0.003,
		},
		logo: '/logos/pixel-perfect.png',
		salary: {
			min: 11000,
			max: 18000,
		},
		dateOfPublication: '2025-06-24T09:30:00Z',
		technologies: [
			{ name: 'HTML5', level: 4 },
			{ name: 'CSS3', level: 4 },
			{ name: 'JavaScript', level: 3 },
			{ name: 'React', level: 2 },
			{ name: 'Figma', level: 3 },
			{ name: 'Responsive Design', level: 4 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'technical-writer-remote-poland',
		title: 'Technical Writer',
		jobDescription: `
      ## Clarify Complexity, Empower Users!

      We are looking for a talented Technical Writer to join our remote team in Poland. You will be responsible for creating clear, concise, and comprehensive documentation for our software products and APIs.

      ### Your Responsibilities

      *   Write and edit technical documentation, including user manuals, API docs, and release notes.
      *   Collaborate with engineers, product managers, and support teams to gather information.
      *   Ensure accuracy, completeness, and consistency of documentation.
      *   Develop and maintain documentation standards and guidelines.
      *   Manage documentation repositories (e.g., Git, Confluence).

      ### Required Skills

      *   2+ years of experience as a Technical Writer in a software environment.
      *   Excellent written and verbal communication skills in English.
      *   Ability to translate complex technical concepts into easily understandable content.
      *   Experience with documentation tools (e.g., Confluence, Markdown, GitBook).
      *   Familiarity with APIs and software development processes.
      *   Strong attention to detail.

      ### Desired Skills

      *   Experience with OpenAPI/Swagger.
      *   Basic programming knowledge (e.g., Python, JavaScript) to understand code samples.
      *   Experience with version control systems (Git).
      `,
		company: 'DocuSense',
		location: {
			city: 'Katowice',
			lat: 50.2649, // Katowice, slightly offset
			lon: 19.0122,
		},
		logo: '/logos/docusense.png',
		salary: {
			min: 8000,
			max: 13000,
		},
		dateOfPublication: '2025-06-23T11:00:00Z',
		technologies: [
			{ name: 'Confluence', level: 4 },
			{ name: 'Markdown', level: 4 },
			{ name: 'API Documentation', level: 3 },
			{ name: 'Git', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Remote',
	},
	{
		slug: 'sql-developer-poznan-hybrid',
		title: 'SQL Developer',
		jobDescription: `
      ## Master Our Data Universe!

      We are seeking a skilled SQL Developer to join our data team in Poznań. You will be responsible for designing, developing, and optimizing complex database solutions to support our business operations.

      ### Your Key Tasks

      *   Write and optimize complex SQL queries, stored procedures, and functions.
      *   Design and maintain database schemas and data models.
      *   Perform database performance tuning and optimization.
      *   Develop and manage ETL processes.
      *   Collaborate with application developers to ensure efficient data access.

      ### Required Skills

      *   3+ years of experience as an SQL Developer.
      *   Expertise in T-SQL, PL/SQL, or PostgreSQL SQL.
      *   Strong understanding of relational database theory and normalization.
      *   Experience with database performance tuning and query optimization.
      *   Familiarity with data warehousing concepts.
      *   Excellent problem-solving and analytical abilities.

      ### Advantageous

      *   Experience with cloud databases (e.g., Azure SQL, AWS RDS).
      *   Knowledge of data visualization tools.
      *   Experience with SSIS/SSRS.
      `,
		company: 'DataVault Solutions',
		location: {
			city: 'Poznań',
			lat: 52.4064 + 0.007,
			lon: 16.9252 - 0.004,
		},
		logo: '/logos/datavault.png',
		salary: {
			min: 10000,
			max: 16000,
		},
		dateOfPublication: '2025-06-20T13:00:00Z',
		technologies: [
			{ name: 'SQL', level: 4 },
			{ name: 'PostgreSQL', level: 3 },
			{ name: 'SQL Server', level: 3 },
			{ name: 'Database Design', level: 4 },
			{ name: 'ETL', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'salesforce-developer-warsaw-hybrid',
		title: 'Salesforce Developer',
		jobDescription: `
      ## Innovate on the Salesforce Platform!

      We are seeking a talented Salesforce Developer to join our team in Warsaw. You will be instrumental in customizing and extending our Salesforce platform to meet evolving business needs.

      ### Your Role Will Include

      *   Develop custom Apex classes, Visualforce pages, and Lightning components.
      *   Configure Salesforce objects, workflows, process builders, and flows.
      *   Integrate Salesforce with external systems using APIs.
      *   Perform data migrations and data quality management.
      *   Collaborate with business analysts and end-users.

      ### Qualifications

      *   2+ years of experience as a Salesforce Developer.
      *   Proficiency in Apex, Visualforce, and Lightning Web Components.
      *   Strong understanding of Salesforce platform capabilities and limitations.
      *   Experience with Salesforce APIs (REST, SOAP, Bulk).
      *   Salesforce Developer Certification (Platform Developer I/II) preferred.
      *   Problem-solving skills and attention to detail.

      ### Nice to Have

      *   Experience with Salesforce Marketing Cloud or Service Cloud.
      *   Familiarity with Agile development.
      *   Experience with Git.
      `,
		company: 'CRM Solutions PL',
		location: {
			city: 'Warsaw',
			lat: 52.2297 - 0.008,
			lon: 21.0122 + 0.004,
		},
		logo: '/logos/crm-solutions.png',
		salary: {
			min: 13000,
			max: 20000,
		},
		dateOfPublication: '2025-06-19T09:00:00Z',
		technologies: [
			{ name: 'Salesforce', level: 4 },
			{ name: 'Apex', level: 3 },
			{ name: 'Lightning Web Components', level: 3 },
			{ name: 'Salesforce Admin', level: 2 },
			{ name: 'SOQL', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'network-engineer-krakow-onsite',
		title: 'Network Engineer',
		jobDescription: `
      ## Build Our Network Backbone!

      We are seeking a skilled Network Engineer to manage and optimize our critical network infrastructure in Kraków. You will ensure the reliable and secure operation of our corporate and production networks.

      ### Your Responsibilities

      *   Design, implement, and maintain network infrastructure (LAN, WAN, Wi-Fi).
      *   Configure and troubleshoot network devices (routers, switches, firewalls).
      *   Monitor network performance and ensure high availability.
      *   Implement and enforce network security policies.
      *   Collaborate with IT teams on infrastructure projects.
      *   Document network configurations and procedures.

      ### Required Skills

      *   3+ years of experience as a Network Engineer.
      *   Strong knowledge of networking protocols (TCP/IP, OSPF, BGP, VLANs).
      *   Experience with major vendor equipment (e.g., Cisco, Juniper, Fortinet).
      *   Familiarity with network security concepts and firewalls.
      *   Troubleshooting and problem-solving skills.
      *   Relevant certifications (e.g., CCNA, CCNP) are highly valued.

      ### What We Offer

      *   Work on complex and critical network infrastructure.
      *   Opportunities for advanced certifications and professional growth.
      *   Supportive team environment.
      `,
		company: 'Network Core Solutions',
		location: {
			city: 'Kraków',
			lat: 50.0614 + 0.004,
			lon: 19.9365 - 0.001,
		},
		logo: '/logos/network-core.png',
		salary: {
			min: 11000,
			max: 17000,
		},
		dateOfPublication: '2025-06-18T10:00:00Z',
		technologies: [
			{ name: 'Cisco', level: 4 },
			{ name: 'Networking', level: 4 },
			{ name: 'Firewalls', level: 3 },
			{ name: 'TCP/IP', level: 4 },
			{ name: 'LAN/WAN', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'On-site',
	},
	{
		slug: 'product-manager-remote-poland',
		title: 'Product Manager',
		jobDescription: `
      ## Lead Our Product Strategy!

      We are looking for an experienced Product Manager to lead a key product line, working remotely within Poland. You will own the product lifecycle from strategy to execution, ensuring market fit and business growth.

      ### Your Responsibilities

      *   Define and articulate the product vision, strategy, and roadmap.
      *   Conduct market research, competitive analysis, and gather customer insights.
      *   Translate business requirements into detailed product specifications and user stories.
      *   Prioritize features and manage the product backlog.
      *   Collaborate with engineering, design, marketing, and sales teams.
      *   Track product performance and iterate based on data.

      ### Required Experience

      *   4+ years of experience in product management, preferably in SaaS.
      *   Proven track record of launching successful software products.
      *   Strong analytical, strategic thinking, and problem-solving skills.
      *   Excellent communication, presentation, and leadership abilities.
      *   Familiarity with Agile development methodologies.
      *   Comfortable with data analytics tools.

      ### What We Offer

      *   High impact role with significant autonomy.
      *   Opportunity to shape the future of our core product.
      *   Flexible remote work environment.
      `,
		company: 'Product Growth Labs',
		location: {
			city: 'Remote (Poland)',
			lat: 53.4289 - 0.005, // Szczecin, slightly offset
			lon: 14.553 + 0.002,
		},
		logo: '/logos/product-growth.png',
		salary: {
			min: 17000,
			max: 26000,
		},
		dateOfPublication: '2025-06-17T14:00:00Z',
		technologies: [
			{ name: 'Product Strategy', level: 4 },
			{ name: 'Market Research', level: 3 },
			{ name: 'Agile', level: 4 },
			{ name: 'Jira', level: 3 },
			{ name: 'Analytics', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Senior',
		contractType: 'Permanent',
		operatingMode: 'Remote',
	},
	{
		slug: 'go-developer-warsaw-hybrid',
		title: 'Go Developer',
		jobDescription: `
      ## Power Up Our Backend with Go!

      We are seeking a talented Go Developer to join our backend engineering team in Warsaw. You will work on high-performance, concurrent systems that form the backbone of our distributed platform.

      ### Your Responsibilities

      *   Design, implement, and test robust and scalable Go applications.
      *   Work with microservices architecture and cloud-native patterns.
      *   Integrate with various databases (SQL and NoSQL) and message queues.
      *   Ensure high code quality through testing and code reviews.
      *   Contribute to system architecture and performance optimization.

      ### Required Skills

      *   3+ years of experience with Go (Golang) development.
      *   Strong understanding of concurrency patterns and best practices in Go.
      *   Experience with building and consuming RESTful APIs.
      *   Familiarity with Docker and Kubernetes for deployment.
      *   Knowledge of database interactions and optimization.
      *   Problem-solving and debugging skills.

      ### Desired Experience

      *   Experience with gRPC.
      *   Familiarity with cloud platforms (AWS, Azure, GCP).
      *   Contributions to open-source Go projects.
      `,
		company: 'GoTech Solutions',
		location: {
			city: 'Warsaw',
			lat: 52.2297 + 0.009,
			lon: 21.0122 - 0.001,
		},
		logo: '/logos/gotech.png',
		salary: {
			min: 16000,
			max: 25000,
		},
		dateOfPublication: '2025-06-16T10:00:00Z',
		technologies: [
			{ name: 'Golang', level: 4 },
			{ name: 'Microservices', level: 3 },
			{ name: 'Docker', level: 3 },
			{ name: 'Kubernetes', level: 3 },
			{ name: 'REST APIs', level: 4 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'cybersecurity-engineer-krakow-hybrid',
		title: 'Cybersecurity Engineer',
		jobDescription: `
      ## Fortify Our Digital Defenses!

      We are looking for a dedicated Cybersecurity Engineer to join our security team in Kraków. You will design, implement, and manage security solutions to protect our systems and data from evolving threats.

      ### Your Responsibilities

      *   Implement and manage security tools and technologies (e.g., firewalls, IDS/IPS, WAF, DLP).
      *   Design and build secure network architectures.
      *   Conduct security assessments, penetration testing, and vulnerability management.
      *   Develop and enforce security policies, standards, and procedures.
      *   Participate in incident response and forensic analysis.
      *   Stay updated on the latest cybersecurity threats and technologies.

      ### Required Skills

      *   4+ years of experience as a Cybersecurity Engineer or similar.
      *   Strong understanding of network security, cloud security, and application security.
      *   Hands-on experience with security tools and platforms.
      *   Familiarity with compliance frameworks (e.g., NIST, ISO 27001, GDPR).
      *   Scripting skills for automation (Python, PowerShell).
      *   Relevant certifications (e.g., CISSP, SANS, OSCP) are a strong plus.

      ### What We Offer

      *   Opportunity to work on complex cybersecurity challenges.
      *   Investment in your professional development and certifications.
      *   Collaborative and highly skilled security team.
      `,
		company: 'SecureSolutions S.A.',
		location: {
			city: 'Kraków',
			lat: 50.0614 + 0.007,
			lon: 19.9365 + 0.005,
		},
		logo: '/logos/securesolutions.png',
		salary: {
			min: 16000,
			max: 25000,
		},
		dateOfPublication: '2025-06-15T13:00:00Z',
		technologies: [
			{ name: 'Firewalls', level: 4 },
			{ name: 'Network Security', level: 4 },
			{ name: 'Cloud Security', level: 3 },
			{ name: 'Vulnerability Management', level: 3 },
			{ name: 'Python', level: 2 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Senior',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'front-end-vue-developer-gdansk-hybrid',
		title: 'Front-End Vue.js Developer',
		jobDescription: `
      ## Build Beautiful User Experiences with Vue!

      We are seeking a talented Front-End Vue.js Developer to join our product team in Gdańsk. You will be responsible for creating intuitive, performant, and visually appealing user interfaces for our web applications.

      ### Your Responsibilities

      *   Develop and maintain interactive web applications using Vue.js.
      *   Translate UI/UX designs and wireframes into high-quality code.
      *   Ensure cross-browser compatibility, responsiveness, and accessibility.
      *   Work with state management libraries (e.g., Vuex, Pinia).
      *   Collaborate with backend developers to integrate APIs.
      *   Participate in code reviews and contribute to technical discussions.

      ### Required Skills

      *   3+ years of experience in front-end development, with 2+ years in Vue.js.
      *   Strong proficiency in Vue.js, JavaScript (ES6+), HTML5, and CSS3/SCSS.
      *   Experience with Vue Router, Vuex/Pinia.
      *   Familiarity with RESTful APIs.
      *   Understanding of modern front-end build tools (Vite, Webpack).
      *   Good problem-solving and communication skills.

      ### What We Offer

      *   Opportunity to work on exciting new features and products.
      *   Collaborative and supportive team environment.
      *   Focus on clean code and best practices.
      `,
		company: 'VueJS Innovators',
		location: {
			city: 'Gdańsk',
			lat: 54.3721 - 0.003,
			lon: 18.6384 + 0.005,
		},
		logo: '/logos/vuejs-innovators.png',
		salary: {
			min: 10000,
			max: 17000,
		},
		dateOfPublication: '2025-06-14T09:00:00Z',
		technologies: [
			{ name: 'Vue.js', level: 4 },
			{ name: 'JavaScript', level: 4 },
			{ name: 'HTML5', level: 4 },
			{ name: 'CSS3', level: 3 },
			{ name: 'Vuex', level: 3 },
			{ name: 'REST APIs', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'business-analyst-warsaw-hybrid',
		title: 'Business Analyst',
		jobDescription: `
      ## Bridge Business and Technology!

      We are seeking an experienced Business Analyst to join our team in Warsaw. You will play a vital role in understanding business needs, translating them into clear requirements, and ensuring successful project delivery.

      ### Your Responsibilities

      *   Conduct in-depth business process analysis and gather requirements from stakeholders.
      *   Translate business needs into functional and non-functional specifications.
      *   Create user stories, use cases, and process flows.
      *   Facilitate workshops and meetings with business users and technical teams.
      *   Support testing activities and validate solutions against requirements.
      *   Act as a liaison between business stakeholders and development teams.

      ### Required Skills

      *   3+ years of experience as a Business Analyst in a software development environment.
      *   Strong analytical, problem-solving, and critical thinking skills.
      *   Excellent communication and interpersonal skills.
      *   Proficiency in creating clear and concise documentation.
      *   Familiarity with Agile methodologies (Scrum, Kanban).
      *   Experience with tools like Jira, Confluence, Visio.

      ### Preferred Qualifications

      *   Domain knowledge in finance, insurance, or e-commerce.
      *   Relevant certification (e.g., CBAP).
      *   Experience with data modeling.
      `,
		company: 'Strategy & Solutions Group',
		location: {
			city: 'Warsaw',
			lat: 52.2297 + 0.006,
			lon: 21.0122 - 0.006,
		},
		logo: '/logos/strategy-solutions.png',
		salary: {
			min: 10000,
			max: 16000,
		},
		dateOfPublication: '2025-06-13T10:00:00Z',
		technologies: [
			{ name: 'Business Analysis', level: 4 },
			{ name: 'Requirements Gathering', level: 4 },
			{ name: 'Jira', level: 3 },
			{ name: 'Confluence', level: 3 },
			{ name: 'Agile', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'front-end-intern-wroclaw-onsite',
		title: 'Front-End Development Intern',
		jobDescription: `
      ## Launch Your Front-End Career!

      We are offering an exciting Front-End Development Internship in Wrocław for passionate aspiring developers. This is a hands-on opportunity to learn from experienced professionals and contribute to real-world projects.

      ### What You'll Learn & Do

      *   Work alongside senior developers on live web application projects.
      *   Learn modern JavaScript frameworks (React, Angular, Vue.js).
      *   Gain experience with HTML, CSS, and responsive design.
      *   Participate in code reviews and team meetings.
      *   Assist with bug fixes and feature implementation.
      *   Receive mentorship and guidance throughout your internship.

      ### Who We're Looking For

      *   Students or recent graduates in Computer Science or a related field.
      *   Basic understanding of HTML, CSS, and JavaScript.
      *   Eagerness to learn and a strong interest in front-end development.
      *   Good problem-solving skills and attention to detail.
      *   Ability to work in a team environment.

      ### What We Offer

      *   Paid internship with potential for full-time employment.
      *   Real-world project experience.
      *   Mentorship and dedicated learning resources.
      *   Friendly and supportive team culture.
      `,
		company: 'Future Coders Academy',
		location: {
			city: 'Wrocław',
			lat: 51.1079 + 0.006,
			lon: 17.0385 + 0.008,
		},
		logo: '/logos/future-coders.png',
		salary: {
			min: 4000,
			max: 6000,
		},
		dateOfPublication: '2025-06-12T15:00:00Z',
		technologies: [
			{ name: 'HTML', level: 1 },
			{ name: 'CSS', level: 1 },
			{ name: 'JavaScript', level: 1 },
			{ name: 'React', level: 0 },
			{ name: 'Git', level: 1 },
		],
		typeOfWork: 'Internship',
		experienceLevel: 'Intern',
		contractType: 'Internship',
		operatingMode: 'On-site',
	},
	{
		slug: 'net-architect-warsaw-hybrid',
		title: '.NET Architect',
		jobDescription: `
      ## Define the Future of Our .NET Ecosystem!

      We are seeking a highly experienced .NET Architect to lead the design and evolution of our enterprise applications in Warsaw. You will be responsible for defining technical strategies, architectural patterns, and ensuring the scalability and maintainability of our solutions.

      ### Your Responsibilities

      *   Lead the architectural design of complex .NET applications and systems.
      *   Define technical standards, best practices, and design patterns.
      *   Evaluate new technologies and make strategic recommendations.
      *   Provide technical leadership and mentorship to development teams.
      *   Collaborate with stakeholders to align technical solutions with business goals.
      *   Ensure security, performance, and scalability of solutions.

      ### Required Experience

      *   8+ years of experience in .NET development, with significant architectural roles.
      *   Deep expertise in .NET Core, ASP.NET Core, and Azure ecosystem.
      *   Strong knowledge of microservices architecture, cloud-native principles, and distributed systems.
      *   Proficiency in database design and optimization (SQL and NoSQL).
      *   Experience with CI/CD, DevOps practices, and automated testing.
      *   Excellent communication, presentation, and leadership skills.

      ### What We Offer

      *   Opportunity to shape the future of a large-scale technical landscape.
      *   Work with a highly skilled and collaborative team.
      *   Competitive compensation and benefits.
      `,
		company: 'Architech Solutions',
		location: {
			city: 'Warsaw',
			lat: 52.2297 - 0.002,
			lon: 21.0122 + 0.006,
		},
		logo: '/logos/architech-solutions.png',
		salary: {
			min: 22000,
			max: 35000,
		},
		dateOfPublication: '2025-06-11T09:00:00Z',
		technologies: [
			{ name: '.NET Core', level: 4 },
			{ name: 'C#', level: 4 },
			{ name: 'Azure', level: 4 },
			{ name: 'Microservices', level: 4 },
			{ name: 'Software Architecture', level: 4 },
			{ name: 'SQL Server', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Architect',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'front-end-react-junior-krakow-onsite',
		title: 'Junior React Developer',
		jobDescription: `
      ## Grow with React!

      We are seeking a motivated Junior React Developer to join our vibrant team in Kraków. This is a fantastic opportunity to kickstart your career in front-end development and work on exciting web applications.

      ### What You'll Learn & Do

      *   Develop user interfaces using React.js and modern JavaScript.
      *   Work alongside senior developers and receive mentorship.
      *   Participate in code reviews and learn best coding practices.
      *   Contribute to new features and bug fixes.
      *   Gain experience with state management and API integrations.

      ### Who We're Looking For

      *   0-2 years of experience with React.js (academic projects count!).
      *   Solid understanding of HTML, CSS, and JavaScript.
      *   Eagerness to learn and strong problem-solving skills.
      *   Good communication and collaboration abilities.
      *   Knowledge of Git.

      ### What We Offer

      *   Structured mentorship program.
      *   Opportunity to work on a real-world product.
      *   Clear career progression path.
      *   Friendly and supportive team environment.
      `,
		company: 'React Startups',
		location: {
			city: 'Kraków',
			lat: 50.0614 + 0.001,
			lon: 19.9365 - 0.006,
		},
		logo: '/logos/react-startups.png',
		salary: {
			min: 6500,
			max: 9500,
		},
		dateOfPublication: '2025-06-10T10:30:00Z',
		technologies: [
			{ name: 'React', level: 2 },
			{ name: 'JavaScript', level: 2 },
			{ name: 'HTML', level: 3 },
			{ name: 'CSS', level: 2 },
			{ name: 'Git', level: 2 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Junior',
		contractType: 'Permanent',
		operatingMode: 'On-site',
	},
	{
		slug: 'senior-manual-qa-poznan-onsite',
		title: 'Senior Manual QA Engineer',
		jobDescription: `
      ## Master of Quality Assurance!

      We are seeking a meticulous Senior Manual QA Engineer to join our team in Poznań. You will be responsible for leading testing efforts, ensuring the highest quality of our software products, and mentoring junior QA specialists.

      ### Your Responsibilities

      *   Design, develop, and execute comprehensive test plans and test cases.
      *   Perform thorough manual testing of web, desktop, and mobile applications.
      *   Identify, document, and track software defects with precision.
      *   Collaborate closely with development and product teams.
      *   Provide feedback on usability and user experience.
      *   Mentor junior QA team members.

      ### Required Skills

      *   5+ years of experience in manual software quality assurance.
      *   Strong understanding of software testing methodologies (STLC).
      *   Expertise with test management tools (e.g., Jira, TestRail, Azure DevOps).
      *   Excellent attention to detail and analytical problem-solving skills.
      *   Strong communication and collaboration abilities.
      *   Experience with various testing types (functional, regression, smoke, etc.).

      ### What We Offer

      *   Impact on the quality of critical applications.
      *   Opportunities for growth into test lead or automation roles.
      *   Supportive team and modern office environment.
      `,
		company: 'Quality Assurance Leaders',
		location: {
			city: 'Poznań',
			lat: 52.4064 - 0.009,
			lon: 16.9252 + 0.001,
		},
		logo: '/logos/qa-leaders.png',
		salary: {
			min: 10000,
			max: 15000,
		},
		dateOfPublication: '2025-06-09T09:00:00Z',
		technologies: [
			{ name: 'Manual Testing', level: 4 },
			{ name: 'Jira', level: 4 },
			{ name: 'TestRail', level: 3 },
			{ name: 'Test Planning', level: 4 },
			{ name: 'Regression Testing', level: 4 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Senior',
		contractType: 'Permanent',
		operatingMode: 'On-site',
	},
	{
		slug: 'sap-consultant-warsaw-hybrid',
		title: 'SAP Consultant (FI/CO)',
		jobDescription: `
      ## Expert in SAP Financials!

      We are seeking an experienced SAP FI/CO Consultant to join our enterprise solutions team in Warsaw. You will be responsible for implementing, customizing, and supporting SAP financial modules for our clients.

      ### Your Responsibilities

      *   Gather and analyze business requirements for SAP FI/CO modules.
      *   Configure SAP FICO functionalities (General Ledger, Accounts Payable/Receivable, Cost Center Accounting).
      *   Perform system testing and support user acceptance testing.
      *   Provide training and support to end-users.
      *   Collaborate with technical teams on integrations and developments.
      *   Troubleshoot issues and provide ongoing support.

      ### Required Experience

      *   4+ years of experience as an SAP FI/CO Consultant.
      *   Strong functional knowledge of SAP Financial Accounting (FI) and Controlling (CO).
      *   Experience with at least 2 full life-cycle SAP implementations.
      *   Excellent communication and client-facing skills.
      *   Ability to translate business requirements into technical solutions.
      *   SAP certification (FI/CO) is a significant advantage.

      ### What We Offer

      *   Work on large-scale, impactful SAP projects.
      *   Continuous learning and professional development.
      *   Dynamic and supportive team environment.
      `,
		company: 'Enterprise SAP Solutions',
		location: {
			city: 'Warsaw',
			lat: 52.2297 + 0.003,
			lon: 21.0122 + 0.011,
		},
		logo: '/logos/enterprise-sap.png',
		salary: {
			min: 18000,
			max: 27000,
		},
		dateOfPublication: '2025-06-08T11:00:00Z',
		technologies: [
			{ name: 'SAP FI', level: 4 },
			{ name: 'SAP CO', level: 4 },
			{ name: 'SAP S/4HANA', level: 3 },
			{ name: 'Business Analysis', level: 3 },
			{ name: 'ABAP', level: 1 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Senior',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'devops-intern-remote-poland',
		title: 'DevOps Internship',
		jobDescription: `
      ## Launch Your DevOps Career!

      We are offering a challenging DevOps Internship for aspiring engineers to work remotely from anywhere in Poland. This is a hands-on opportunity to learn about CI/CD, cloud infrastructure, and automation.

      ### What You'll Learn & Do

      *   Assist in building and maintaining CI/CD pipelines (GitLab CI, Jenkins).
      *   Gain exposure to cloud platforms (AWS, Azure, GCP).
      *   Learn about containerization technologies (Docker, Kubernetes).
      *   Help automate infrastructure provisioning with tools like Terraform.
      *   Participate in monitoring and troubleshooting system issues.
      *   Receive mentorship from experienced DevOps Engineers.

      ### Who We're Looking For

      *   Students or recent graduates in Computer Science, IT, or related fields.
      *   Basic understanding of Linux command line and networking.
      *   Eagerness to learn about DevOps principles and tools.
      *   Familiarity with Git.
      *   Problem-solving attitude and strong curiosity.

      ### What We Offer

      *   Paid internship with potential for full-time employment.
      *   Practical experience with industry-standard DevOps tools.
      *   Mentorship and a structured learning path.
      *   Flexible remote work environment.
      `,
		company: 'DevOps Future Labs',
		location: {
			city: 'Remote (Poland)',
			lat: 51.7592 + 0.008,
			lon: 19.4559 - 0.006,
		},
		logo: '/logos/devops-future.png',
		salary: {
			min: 4500,
			max: 6500,
		},
		dateOfPublication: '2025-06-07T10:00:00Z',
		technologies: [
			{ name: 'Linux', level: 1 },
			{ name: 'Git', level: 2 },
			{ name: 'Docker', level: 1 },
			{ name: 'AWS', level: 0 },
			{ name: 'CI/CD', level: 1 },
		],
		typeOfWork: 'Internship',
		experienceLevel: 'Intern',
		contractType: 'Internship',
		operatingMode: 'Remote',
	},
	{
		slug: 'product-designer-ux-ui-poznan-hybrid',
		title: 'Product Designer (UX/UI)',
		jobDescription: `
      ## Design Intuitive and Engaging Products!

      We are seeking a talented Product Designer (UX/UI) to join our growing design team in Poznań. You will be responsible for the end-to-end design process of our digital products, from user research to final UI.

      ### Your Responsibilities

      *   Conduct user research, create personas, and map user journeys.
      *   Develop wireframes, low-fidelity and high-fidelity prototypes.
      *   Design intuitive and visually appealing user interfaces for web and mobile.
      *   Collaborate closely with product managers, engineers, and stakeholders.
      *   Conduct usability testing and iterate designs based on feedback.
      *   Contribute to and maintain our design system.

      ### Required Skills

      *   3+ years of experience in product design (UX/UI).
      *   Strong portfolio showcasing your design process, problem-solving, and visual design skills.
      *   Proficiency with design tools (e.g., Figma, Sketch, Adobe XD).
      *   Deep understanding of user-centered design principles and usability best practices.
      *   Excellent communication and collaboration skills.
      *   Familiarity with accessibility standards.

      ### Desired Skills

      *   Experience with animation or motion design.
      *   Basic understanding of HTML/CSS.
      *   Experience in a B2B SaaS environment.
      `,
		company: 'Design First Studio',
		location: {
			city: 'Poznań',
			lat: 52.4064 + 0.003,
			lon: 16.9252 + 0.009,
		},
		logo: '/logos/design-first.png',
		salary: {
			min: 12000,
			max: 18000,
		},
		dateOfPublication: '2025-06-06T14:00:00Z',
		technologies: [
			{ name: 'Figma', level: 4 },
			{ name: 'UX Design', level: 4 },
			{ name: 'UI Design', level: 4 },
			{ name: 'User Research', level: 3 },
			{ name: 'Prototyping', level: 4 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Hybrid',
	},
	{
		slug: 'technical-support-specialist-krakow-onsite',
		title: 'Technical Support Specialist (Tier 2)',
		jobDescription: `
      ## Solve Problems, Delight Users!

      We are seeking a skilled Technical Support Specialist (Tier 2) to join our customer success team in Kraków. You will be the primary point of contact for complex technical issues, providing expert solutions to our clients.

      ### Your Responsibilities

      *   Diagnose and resolve advanced technical issues for software products (web/desktop).
      *   Provide support via phone, email, and chat.
      *   Escalate unresolved issues to engineering teams with clear documentation.
      *   Contribute to the knowledge base and internal documentation.
      *   Train and mentor Tier 1 support staff.
      *   Identify recurring issues and suggest product improvements.

      ### Required Skills

      *   2+ years of experience in a Tier 2 technical support role.
      *   Strong problem-solving and troubleshooting abilities.
      *   Excellent communication skills, both written and verbal.
      *   Familiarity with Windows/Linux operating systems.
      *   Basic understanding of databases (SQL) and network fundamentals.
      *   Ability to work independently and as part of a team.

      ### Bonus Points

      *   Experience with CRM and ticketing systems (e.g., Zendesk, Salesforce Service Cloud).
      *   Knowledge of scripting (e.g., PowerShell, Bash).
      *   Experience supporting SaaS applications.
      `,
		company: 'Customer Care Tech',
		location: {
			city: 'Kraków',
			lat: 50.0614 - 0.005,
			lon: 19.9365 + 0.003,
		},
		logo: '/logos/customer-care.png',
		salary: {
			min: 8000,
			max: 12000,
		},
		dateOfPublication: '2025-06-05T10:00:00Z',
		technologies: [
			{ name: 'Troubleshooting', level: 4 },
			{ name: 'Windows', level: 3 },
			{ name: 'Linux', level: 2 },
			{ name: 'SQL', level: 2 },
			{ name: 'Zendesk', level: 3 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'On-site',
	},
	{
		slug: 'ruby-on-rails-developer-remote-poland',
		title: 'Ruby on Rails Developer',
		jobDescription: `
      ## Build Elegant Web Applications with Rails!

      We are seeking a talented Ruby on Rails Developer to join our fully remote team in Poland. You will work on our core web platform, building new features and optimizing existing ones.

      ### Your Responsibilities

      *   Develop and maintain web applications using Ruby on Rails.
      *   Write clean, testable, and efficient Ruby code.
      *   Design and interact with relational databases (PostgreSQL).
      *   Implement and consume RESTful APIs.
      *   Collaborate with frontend developers, designers, and product managers.
      *   Participate in code reviews and contribute to architectural discussions.

      ### Required Skills

      *   3+ years of experience with Ruby on Rails.
      *   Strong proficiency in Ruby and object-oriented programming.
      *   Experience with PostgreSQL or other relational databases.
      *   Familiarity with frontend technologies (JavaScript, HTML, CSS).
      *   Understanding of TDD/BDD principles.
      *   Experience with Git.

      ### Desired Experience

      *   Experience with cloud platforms (AWS, Heroku).
      *   Familiarity with background job processing (e.g., Sidekiq).
      *   Knowledge of microservices architecture.
      `,
		company: 'Rails Innovators',
		location: {
			city: 'Remote (Poland)',
			lat: 51.1079 + 0.005,
			lon: 17.0385 - 0.008,
		},
		logo: '/logos/rails-innovators.png',
		salary: {
			min: 13000,
			max: 20000,
		},
		dateOfPublication: '2025-06-04T11:30:00Z',
		technologies: [
			{ name: 'Ruby on Rails', level: 4 },
			{ name: 'Ruby', level: 4 },
			{ name: 'PostgreSQL', level: 3 },
			{ name: 'REST APIs', level: 3 },
			{ name: 'Git', level: 4 },
		],
		typeOfWork: 'Full-time',
		experienceLevel: 'Mid',
		contractType: 'Permanent',
		operatingMode: 'Remote',
	},
];
