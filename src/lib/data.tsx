import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Testimonials',
    hash: '#testimonials',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/calmllama.jpg',
    title: 'Calm Llama - AI Chatbot',
    description:
      'A modern web platform that enables users to discover and book premium wellness experiences such as saunas, yoga, massages, and float tanks. Features include real-time availability, secure payments, and instant booking confirmations. Worked as a Full Stack Freelance developer @ ToraTec AI, Dublin, Ireland',
    technologies: [
      'TypeScript',
      'Stripe Payment Gateway',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Shadcn UI',
      'Node.js',
      'Express',
      'UI/UX Developer',
      'Supabase',
      'AI',
      'n8n',
      'Google Maps API',
    ],
    links: {
      preview: 'https://calmllama.life/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/mini-otio.jpg',
    title: 'Mini Otio - AI Research Assistant',
    description:
      'A modern AI-powered research assistant that combines real-time web search with intelligent response generation. Users can ask research questions and receive comprehensive, streamed responses with multiple formatting options (step-by-step, bullet points, ELI5). Features include bookmark management, conversation export, and a sleek chat interface with real-time streaming capabilities.      ',
    technologies: [
      'AI Agent',
      'Next.js 15',
      'TypeScript',
      'Shadcn UI',
      'React.js',
      'Tailwind CSS',
      'Zustand',
      'Zod',
      'OpenRouter API',
      'Exa.ai',
      'AI SDK',
    ],
    links: {
      preview: 'https://mini-otio.vercel.app/',
      github: 'https://github.com/Yashkapure06/mini-otio',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/ec2.jpg',
    title: 'EC2 Cloud Cost Analyzer',
    description:
      '       AWS EC2 Cloud Cost Analyzer is a tool that helps you analyze the cost of your AWS EC2 instances. It is a web application that allows you to view the cost of your AWS EC2 instances and compare them with the cost of other AWS EC2 instances. It is a web application that allows you to view the cost of your AWS EC2 instances and compare them with the cost of other AWS EC2 instances.      ',
    technologies: [
      'TypeScript',
      'React.js',
      'Next.js',
      'Shadcn UI',
      'Tailwind CSS',
      'AWS',
      'AWS EC2',
      'AWS API Gateway',
      'AWS CloudWatch',
    ],
    links: {
      preview: 'https://ec2-observe.vercel.app/',
      github: 'https://github.com/Yashkapure06/ec2-observe',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/final-year.png',
    title: 'Online Interview Assessment System (OIAS)',
    description:
      'A fully Functional Online Interview Assessment System for Students and Professionals. This comprehensive platform enables real-time video interviews, automated assessments, and seamless communication between interviewers and candidates.',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Socket.io',
      'MongoDB',
      'Heroku',
      'Node Mailer',
      'Express.js',
      'Firebase',
      'Google OAuth',
    ],
    links: {
      preview:
        'https://calendly.com/yashkapure06/book-a-call-at-the-earliest?month=2024-10',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/17.png',
    title: 'Dragon Sino Group',
    description:
      'Worked as a Full Stack developer at Dragon Sino Group. Created a fully functional MERN Stack Web Application with responsive behavior, smooth touch UI, and API Integration. This is a Chinese Company, working in the United Kingdom.',
    technologies: [
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    links: {
      preview: 'https://www.dragonsino.com/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/10.png',
    title: 'Netflix Clone using ReactJs',
    description:
      'I created a Netflix clone using ReactJs and Sass. This is a clone of Netflix website. And played a lot with Api.',
    technologies: ['React JS', 'SCSS', 'CSS', 'API'],
    links: {
      preview: 'https://free-netflix-clone.vercel.app/',
      github: 'https://github.com/Yashkapure06/netflix-clone',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/shangrila-petition.png',
    title: 'Shangrila Petition Platform',
    description:
      'A fully Functional MERN Stack Web Application. Having responsive behaviour, smooth touch UI with API Integration. With Admin and Petitioner Panel, along with new features such as Login in with QR Code, Signing In, Setting Global Threshold.',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    links: {
      preview: 'https://github.com/Yashkapure06/Shangri-La-Petition-Platform',
      github: 'https://github.com/Yashkapure06/Shangri-La-Petition-Platform',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/earthly.jpg',
    title: 'Earthly Internship',
    description:
      'Worked as an Intern at Earthly. A simple frontend project for Earthly.',
    technologies: ['jQuery', 'CSS3', 'JavaScript', 'HTML5'],
    links: {
      preview: 'https://earthly-internship.netlify.app/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/15.png',
    title: 'The Kolorado Paints',
    description:
      'A fully Functional Next.js Based Frontend along with MERN Dashboard. Having responsive behaviour, smooth touch UI with API Integration. This project is for Artistic Content.',
    technologies: ['Next.js', 'CSS3', 'React.js', 'MUI', 'SEO'],
    links: {
      preview: 'https://thekoloradopaints.com/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/13.png',
    title: 'TechnoKraft',
    description:
      'A fully Functional Next.js Based Frontend along with MERN Dashboard. Having responsive behaviour, smooth touch UI with API Integration. This project is for Educational Content Provider',
    technologies: ['Next.js', 'CSS3', 'React.js', 'MUI', 'SEO'],
    links: {
      preview: 'https://tts.net.in/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/16.png',
    title: 'BEST GST Course',
    description:
      'A fully Functional Next.js Based Frontend along with MERN Dashboard. Having responsive behaviour, smooth touch UI with API Integration. This project also contains Payment Gateway Integration using Easebuzz. This is a GST Course Selling website.',
    technologies: [
      'Payment Gateway',
      'Next.js',
      'Tailwind CSS',
      'React.js',
      'MUI',
      'SEO',
    ],
    links: {
      preview: 'https://www.bestgstcourse.com/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/12.png',
    title: 'Affinix Digital',
    description:
      'A fully Functional Next.js Based Frontend along with MERN Dashboard. Having responsive behaviour, smooth touch UI with API Integration. This project is for Best Digital Marketing Agency',
    technologies: ['Next.js', 'Tailwind CSS', 'React.js', 'MUI', 'SEO'],
    links: {
      preview: 'https://affinixdigital.com/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/14.png',
    title: 'Octane Apps',
    description:
      'A fully Functional Next.js Based Frontend along with MERN Dashboard. Having responsive behaviour, smooth touch UI with API Integration.',
    technologies: ['Next.js', 'SCSS', 'CSS', 'React.js', 'MUI', 'SEO'],
    links: {
      preview: 'https://octaneapps.com/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/main.png',
    title: "Dr. Manisha's Yoga Institute",
    description:
      'Created a MEVN Stack Web Application. Gave more than 180+ hours on this project. The project also includes admin panel along with CRUD Functionalities. Blogging System using Firebase.',
    technologies: [
      'Vue.js',
      'Tailwind CSS',
      'Vuex',
      'MongoDB',
      'Node-Express',
      'Firebase',
      'SEO',
    ],
    links: {
      preview: 'https://www.drmanishasyogainstitute.com/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/1.png',
    title: 'Anandlok Ayurveda',
    description:
      'Using ReactJs, Next.js, and Material-UI, I worked as an Intern for Anandlok Ayurveda & Panchakrma Hospital and created a website for Ayurveda & Panchakarma practitioners to share their knowledge and experience with others.',
    technologies: ['Next.js', 'React.Js', 'CSS', 'Material-UI'],
    links: {
      preview: 'https://www.anandlokayurveda.com/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/news-o-pedia.png',
    title: 'News-o-Pedia',
    description:
      'Using Vue.js I have created this news application having the main feature of Image Mapping, Used newsapi.org api to fetch the news from different parts of the world. Note: The API used works developers mode (i.e, locally. download it).',
    technologies: ['Vue.js', 'CSS', 'NewsAPI.org'],
    links: {
      preview: 'https://news-o-pedia.netlify.app/',
      github: 'https://github.com/Yashkapure06/News-O-Pedia',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/text-to-sppech.webp',
    title: 'Select Text to Speech Chrome extention',
    description:
      "A simple chrome extension where you can select text, then right click and then select the option 'Read aloud' and you can hear the final audio.",
    technologies: ['JavaScript'],
    links: {
      preview: 'https://github.com/Yashkapure06/TextToSpeech-ChromeExtension',
      github: 'https://github.com/Yashkapure06/TextToSpeech-ChromeExtension',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/restro.png',
    title: 'Restro - A Restaurent Website',
    description:
      'A simple and beautiful Restaurent Website made with Pure HTML, CSS and JS. With some beautiful Animation and data fetching using API.',
    technologies: ['HTML', 'CSS', 'Javascript', 'API'],
    links: {
      preview: 'https://fynd-academy-mevn.vercel.app/',
      github:
        'https://github.com/Yashkapure06/fyndAcademy-MEVN/tree/master/Project3-HTML%2BCSS%2BJS',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/9.png',
    title: 'OpenSource Contribution in Chakra-UI',
    description:
      'I created a portfolio website for my OpenSource contribution in Chakra-UI. This website is a collection of my contributions to the Chakra-UI community.',
    technologies: ['Chakra-UI', 'React.Js', 'CSS'],
    links: {
      preview: 'https://chakra-ui.com/community/showcase',
      github: 'https://github.com/Yashkapure06/awesome-chakra-ui',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/11.png',
    title: 'YouTube Clone using ReactJs',
    description:
      'I created a YouTube clone using ReactJs and Material UI. Used Rapid API to fetch data and learnt how to fetch data using API. The API used here was YouTube v3.',
    technologies: ['ReactJs', 'CSS', 'Material-UI', 'API'],
    links: {
      preview: 'https://youtube-clone-06.netlify.app/',
      github: 'https://github.com/Yashkapure06/youtube_clone',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/7.png',
    title: 'Blogging Website',
    description:
      'This Blogging Website is made with NodeJs, Express and MongoDB. It is a simple blogging website where you can read, write, delete and edit your blog post.',
    technologies: ['Nodejs', 'Express', 'CSS', 'MongoDB'],
    links: {
      preview: 'https://github.com/Yashkapure06/Blogging-Website',
      github: 'https://github.com/Yashkapure06/Blogging-Website',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/8.png',
    title: 'Personal Portfolio',
    description:
      'This is my personal portfolio website. I have made this with the help of NextJS + Its documents .You can see my projects, skills, and contact me over here as well.',
    technologies: ['NextJs', 'MaterialUI'],
    links: {
      preview: 'https://yash-kapure.vercel.app/',
      github: 'https://github.com/Yashkapure06/PersonalPortfolio',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/spacetalks.png',
    title: 'Space Talks ✨',
    description:
      'This is a MERN Website. I have created this website using ReactJs, Material-UI, Nodejs, CSS, Express and MongoDB. This website is a platform for people to share their love and knowledge about space, universe, stars, galaxies and other planets with people from all over.',
    technologies: ['ReactJs', 'Material-UI', 'Three.Js', 'MongoDB'],
    links: {
      preview: 'https://space-talks.netlify.app/',
      github: 'https://github.com/Yashkapure06/Space-Talks-MERN',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/4.png',
    title: 'Personal Portfolio',
    description:
      'This is My 1st Portfolio Website. I Made this with ReactJS while Learning ReactJS. A lots of CSS is Used for Animation. I have also added the feature of Dark & Light Mode',
    technologies: ['React', 'CSS3', 'JavaScript'],
    links: {
      preview: 'https://yashkapure-portfolio.web.app/',
      github: 'https://github.com/Yashkapure06/PersonalPortfolio2',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/6.png',
    title: 'Movie WebApp',
    description:
      'A Simple Movie App Using Pure ReactJs - made for just revision purpose',
    technologies: ['React', 'CSS3', 'JavaScript', 'API'],
    links: {
      preview: 'https://react-movie-app-yash.netlify.app/',
      github: 'https://github.com/Yashkapure06/Movie-App',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/3.png',
    title: 'Complete React Website',
    description:
      'I made this whole website from scratch with latest versions of React. This Complete Demo Website is Made using ReactJs, HTML, CSS. This website is a complete demo website which includes all the components of ReactJs.',
    technologies: ['React', 'CSS3'],
    links: {
      preview: 'https://reactwebsite-3b247.web.app/',
      github: 'https://github.com/Yashkapure06/React-Website',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/5.png',
    title: 'Wedding Invitation Website',
    description:
      'This Website is purely made with HTML, CSS and mainly JS. You Will find some Beautiful animations in this website. Some Special Features are also added in this website, please visit and check.',
    technologies: ['HTML', 'CSS', 'JS'],
    links: {
      preview: 'https://harshal-nandani.web.app/',
      github: 'https://github.com/Yashkapure06/Wedding-Website',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'IT Tutor',
    company: 'Impact Academies, United Kingdom',
    description:
      'I teach Scratch, Java, JavaScript, Python, HTML, CSS, Motion Design, AI, ML, and more. I help students learn these skills and build their own projects. I teach from age 5 to 40+',

    period: '2024 - Present',
    technologies: [
      'Scratch',
      'Java',
      'JavaScript',
      'Python',
      'HTML',
      'CSS',
      'Motion Design',
      'AI',
      'ML',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Dragon Sino Group, United Kingdom',
    description:
      'Worked as a Full Stack developer at Dragon Sino Group, a Chinese company operating in the United Kingdom. Created fully functional MERN Stack Web Applications with responsive behavior, smooth touch UI, and API Integration.',
    period: '2024 - 2025',
    technologies: [
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'Express',
      'TypeScript',
      'Tailwind CSS',
      'API Integration',
      'MERN Stack',
      'RESTful API',
      'PHP',
      'MySQL',
    ],
  },
  {
    title: 'Frontend Developer (React.js)',
    company: 'Octane Apps, Remote',
    description:
      'Worked as a Frontend Developer specializing in React.js at Octane Apps. Created fully functional Next.js based frontends with MERN dashboards, focusing on responsive design and smooth user interfaces.',
    period: '2023 - 2024',
    technologies: [
      'Next.js',
      'React.js',
      'SCSS',
      'CSS',
      'MUI',
      'SEO',
      'Payment Gateway',
      'API Integration',
      'RESTful API',
      'MERN Stack',
      'Node.js',
      'MongoDB',
      'Express',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
    ],
  },
  {
    title: 'Frontend Developer (Full-Stack - Next.js)',
    company: 'Anandlok Ayurveda & Panchakarma Hospital, Nagpur',
    description:
      'Worked as an FUll Stack Developer Frontend Focused, creating a website for Ayurveda & Panchakarma practitioners using React.js, Next.js, and Material-UI. The platform allows practitioners to share their knowledge and experience with others.',
    period: '2021-2023',
    technologies: [
      'Next.js',
      'React.js',
      'CSS',
      'Material-UI',
      'SEO',
      'Node.js',
      'MongoDB',
      'Express',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
      'API Integration',
      'MERN Stack',
      'RESTful API',
    ],
  },
  {
    title: 'Full Stack Vue.js Developer',
    company: 'Dr. Manisha&apos;s Yoga Institute, Pune',
    description: (
      <>
        Created a comprehensive MEVN Stack Web Application for Dr.
        Manisha&apos;s Yoga Institute, investing over 180+ hours in development.
        The project includes an admin panel with CRUD functionalities and a
        blogging system using Firebase. The platform serves as a digital space
        for yoga practitioners and students.
      </>
    ),
    period: '2022 - 2023',
    technologies: [
      'Vue.js',
      'Tailwind CSS',
      'Vuex',
      'MongoDB',
      'Node-Express',
      'Firebase',
      'SEO',
    ],
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'Self-Employed, Remote',
    description:
      'Working as a freelance Full Stack Developer, specializing in MERN/MEVN stack development. Creating responsive web applications, e-commerce platforms, and custom solutions for various clients. Available for hire at $35/hr, may vary depending on the project. And flexible working hours.',
    period: '2020 - Present',
    technologies: [
      'React.js',
      'Next.js',
      'Vue.js',
      'Node.js',
      'MongoDB',
      'Express',
      'TypeScript',
      'Tailwind CSS',
    ],
  },
] as const;

export const skillsData = [
  { name: 'HTML5', icon: <Icons.html className="size-12" /> },
  { name: 'CSS3', icon: <Icons.css className="size-12" /> },
  { name: 'JavaScript', icon: <Icons.javascript className="size-12" /> },
  { name: 'TypeScript', icon: <Icons.typescript className="size-12" /> },
  { name: 'React.js', icon: <Icons.react className="size-12" /> },
  { name: 'Redux Toolkit', icon: <Icons.redux className="size-12" /> },
  { name: 'RTK Query', icon: <Icons.rtkquery className="size-12" /> },
  { name: 'React Native', icon: <Icons.reactnative className="size-12" /> },
  { name: 'Next.js', icon: <Icons.nextjs className="size-12" /> },
  { name: 'Vue.js', icon: <Icons.vue className="size-12" /> },
  { name: 'Node.js', icon: <Icons.nodejs className="size-12" /> },
  { name: 'Express.js', icon: <Icons.express className="size-12" /> },
  { name: 'Socket.IO', icon: <Icons.socketio className="size-12" /> },
  { name: 'MongoDB', icon: <Icons.mongodb className="size-12" /> },
  { name: 'MySQL', icon: <Icons.mysql className="size-12" /> },
  { name: 'Firebase', icon: <Icons.firebase className="size-12" /> },
  { name: 'Tailwind CSS', icon: <Icons.tailwind className="size-12" /> },
  { name: 'Sass', icon: <Icons.sass className="size-12" /> },
  { name: 'Chakra UI', icon: <Icons.chakraui className="size-12" /> },
  { name: 'Chart.js', icon: <Icons.chartjs className="size-12" /> },
  { name: 'D3.js', icon: <Icons.d3js className="size-12" /> },
  { name: 'Git', icon: <Icons.git className="size-12" /> },
  { name: 'GitHub', icon: <Icons.github className="size-12" /> },
  { name: 'GitLab', icon: <Icons.gitlab className="size-12" /> },
  { name: 'AWS', icon: <Icons.aws className="size-12" /> },
  { name: 'Vercel', icon: <Icons.vercel className="size-12" /> },
  { name: 'Netlify', icon: <Icons.netlify className="size-12" /> },
  { name: 'Heroku', icon: <Icons.heroku className="size-12" /> },
  { name: 'Jest', icon: <Icons.jest className="size-12" /> },
  { name: 'Cypress', icon: <Icons.cypress className="size-12" /> },
  { name: 'NestJS', icon: <Icons.nestjs className="size-12" /> },
  { name: 'Docker', icon: <Icons.docker className="size-12" /> },
] as const;

export const testimonialsData = [
  {
    name: 'Lucca Allen',
    position: 'Co-Founder @ ToraTech AI',
    company: 'Dublin, Ireland',
    content:
      'I have worked with Yash, throughout two separate projects during which he was part of the ToraTech AI team. Yash has always shown tremendous initiative to get work done and work around problems. I was impressed with his back end skills, aswell as having a great eye for a UX and UI. I would recommend Yash to any company looking for efficient development.',
    rating: 5,
    avatar: '/images/lucca_allen.jpg',
  },
  {
    name: 'Daniela Vélez',
    position: 'Global Marketing Director @ Dragon Sino Group',
    company: 'Coventry, United Kingdom',
    content:
      'I had the opportunity to work with Yash and was pleased to see his enthusiasm from the very start. He approached his tasks with a positive attitude and showed a clear willingness to learn. Throughout our time working together, he was receptive to feedback and made efforts to improve. His openness to guidance was a valuable part of the collaboration.',
    rating: 5,
    avatar: '/images/daniela.jfif',
  },
  {
    name: 'Cristina',
    position: 'Director @ Impact A&C',
    company: 'Leicester, United Kingdom',
    content:
      'Yash has been an exceptional member of our teaching team at Impact A&C Leicester. He demonstrates a strong understanding of coding concepts and effectively adapts his teaching approach to suit students of all ages, from young beginners aged 5 to 17, to adults looking to advance their programming skills.<br/><br/>He is intelligent, resourceful, and handles challenges with professionalism and composure. Whenever an issue or error arises, Yash manages to resolve it quickly and efficiently, ensuring the smooth flow of each session. <br/><br/> He is also highly cooperative within the class environment, maintaining great communication with students and colleagues alike.His dedication, technical expertise, and calm attitude make him a valuable asset to our academy.',
    rating: 5,
    avatar: '/images/impact_academies.png',
  },
  {
    name: 'Ranjeet Ahire',
    position: 'CEO @ Tridebits Technologies',
    company: 'Nashik, India',
    content:
      "I had the pleasure of managing Yash at Octane Apps, where he demonstrated exceptional skills and remarkable eagerness to learn. His technical proficiency in React and web development consistently exceeded expectations. Yash's problem-solving abilities were top-notch, and he tackled complex challenges with strategic thinking and innovative solutions. I highly recommend Yash for any role demanding technical expertise and creativity.",
    rating: 5,
    avatar:
      'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_face,z_0.7,b_white,q_auto:eco,dpr_2/lg4yvoftidmmkouytzgl',
  },
  {
    name: 'Dr. Viraj Gite',
    position: 'CEO @ Anandlok Ayurveda Hospital',
    company: 'Nagpur, India',
    content:
      'Yash put in tremendous effort as an intern at Anandlok Ayurveda and created an impressive website single-handedly using the appropriate technology stack. His dedication and technical skills were outstanding. We wish Yash the best of luck in his future endeavors.',
    rating: 5,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8ykRstebGo9HXF-ZFiHGhj4l6YF_papozO8q5j-8ig&s',
  },
  {
    name: 'Dr. Manisha Sonawane',
    position: "CEO @ Dr. Manisha's Yoga Institute",
    company: 'Pune, India',
    content:
      "Thank you Mr. Yash Kapure. I really appreciate your work on our website. The website looks professional and user-friendly. It's very easy to navigate our services and products to our clients. Our clients had a very positive impact. I highly recommend Yash for web development projects.",
    rating: 5,
    avatar:
      'https://www.drmanishasyogainstitute.com/img/Dr.Manisha.3b416061.jpeg',
  },
] as const;
