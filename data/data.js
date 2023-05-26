let data = {
  experiences: [
    {
      title: "Teaching Assistant",
      company: "University of Toronto Scarborough",
      date: "January 2023 - April 2023",
      link: "https://www.utsc.utoronto.ca",
      desc: [
        "Developed highly effective Angular and CORS tutorials for CSCC09 Programming on the Web",
        "Reinforced students’ understanding of web technologies, RESTful APIs, cloud deployment, and containerization with Docker",
        "Honed communication, mentorship, and leadership skills to foster an engaging learning environment",
      ],
    },
    {
      title: "Cloud Full Stack Engineer",
      company: "HSBC",
      date: "December 2021 - December 2022",
      link: "https://www.hsbc.ca/",
      desc: [
        "Developed cloud‑based web apps for HSBC Wealth Compass and US Product Onboarding using React and Redux",
        "Engineered RESTful APIs and API Orchestration layer using Spring Boot and Express.js microservices deployed on AWS",
        "Reduced maintenance cost by 40% by migrating legacy JavaScript codebase to TypeScript",
        "Worked closely with a cross time‑zone Agile Scrum team to support systems critical to Retail Banking across North America",
        "Mentored 3 new employees and interns on frontend development, API design, and advanced product knowledge",
      ],
    },
    {
      title: "Software Developer",
      company: "Ontario Institute for Studies in Education",
      date: "October 2021 - June 2022",
      link: "https://encorelab.org/",
      desc: [
        "Implemented new tools for collaborative learning software using Angular, Fabric.js and Firebase",
        "Established real-time data updates on virtual classroom whiteboards with over 30 concurrent users using socket.io",
        "Built a data collection framework for researchers to analyze classroom activity and generate reports",
      ],
    },
    {
      title: "Software Developer",
      company: "University Of Toronto Scarborough",
      date: "September 2021 - February 2022",
      link: "https://digital.utsc.utoronto.ca/portfolio/mediacat/",
      desc: [
        "Analysed trends across global news sites by constructing data visualizations using Python, pandas, and Matplotlib",
        "Improved the efficiency of the Python website crawler by 50% by applying filters and caching data",
        "Served browser-accessible Jupyter Notebooks for researchers using Jupyterhub deployed on the cloud",
      ],
    },
    {
      title: "Software Engineer",
      company: "UofT Hatchery",
      date: "May 2021 - October 2021",
      link: "https://hatchery.engineering.utoronto.ca/",
      desc: [
        "Developed time-saving tools for the administrator dashboard using Vue.js, PHP, and WordPress",
        "Worked closely with senior developers to find and resolve bugs on the website",
        "Designed MySQL database schemas to store user data and survey responses",
      ],
    },
    {
      title: "Software Developer",
      company: "Cineplex Digital Media",
      date: "Sept 2020 - April 2021",
      link: "https://www.cdmexperiences.com/",
      desc: [
        "Led the development of custom web applications and digital signage for RBC, Citizens, and Scotiabank",
        "Adapted HTML, CSS, and JavaScript projects to serve different countries, currencies, and languages",
        "Reduced maintenance cost by 90% by rebuilding a legacy application using React",
        "Worked closely with creative teams to convert designs and requirements to interactive applications",
      ],
    },
  ],
  projects: [
    {
      title: "Codebook",
      image: "codebook.png",
      desc: "Real-time collaborative coding application for conducting technical interviews",
      demoLink: "https://codebook.tech/",
      codeLink:
        "https://github.com/BetterBestBestest/project-betterbestbestest",
    },
    {
      title: "AfriConnect",
      image: "africonnect.jpg",
      desc: "Platform for African entrepreneurs to network and access online resources. Key features include a discussion forum, direct messaging and profile creation ",
      demoLink: "https://africonnect.netlify.app/",
      codeLink: "https://github.com/team-nov/team-nov-production",
    },
    {
      title: "CourierU",
      image: "courierU.jpg",
      desc: "Service for foodbanks to coordinate deliveries during the COVID-19 pandemic while maintaing social distancing",
      demoLink: "https://courieru.herokuapp.com/",
      codeLink: "https://github.com/l3n0ire/courieru",
      date: "May 2020",
      projectType: "Project for ToHacks Hackathon",
      descLong:
        "CourierU was a COVID-19 themed project that my team created for the TOHacks hackathon in May 2020. Our goal was to create a platform to help people access essentials such as food and toiletries while reducing their risk of exposure. Our team created a NodeJS web app to connect volunteer couriers and food banks. We utilized MongoDB Atlas to store user data and Mapbox API to generate optimized delivery routes for couriers. The result was an easy-to-use and accessible platform for food banks and volunteer drivers to coordinate deliveries. As lead developer of this project, I’ve gained a lot of experience working on both the frontend and backend of this web app. Through CourierU I was able to strengthen my skills in fullstack development and explore the amazing technologies and APIs in the market.",
    },
    {
      title: "Success Stories of New Canadians",
      image: "successStories.jpg",
      desc: "Platform for new immigrants to read about and share their experiences of coming to Canada",
      demoLink: "https://success-stories-of-new-canadians.netlify.app/",
      codeLink: "https://github.com/l3n0ire/PEAR-Impact-Project",
      date: "Jan 2020",
      projectType: "Project for Azhar Laher - Professor at Seneca College",
      descLong:
        "Success Stories of New Canadians was a project request from Azhar Laher, a professor at Seneca college. The goal of the project was to create a platform for immigrants to share their stories of coming to Canada. Our team created a scalable blog site solution using Gatsby and Netlify CMS. Using the Netlify CMS, the site administrator could upload text and pictures and Gatsby would automatically generate a blog post and update the site. The result was an intuitive platform for users and an easy to use CMS system for non-technical site administrators such as Azhar himself. As lead developer of this project, I’ve gain a lot of experience working with UI/Ux design as well as styling with CSS. Through Success stories of new Canadians I was able to strengthen my web development skills and gain experience working with real clients.",
    },
    {
      title: "ManageU",
      image: "manageU.jpg",
      desc: "A discord bot that helps university students keep track of important dates for their courses",
      codeLink: "https://github.com/l3n0ire/pythonDiscordBot",
      date: "Sept 2020",
      projectType: "Personal Project for myself and my teammate",
      descLong:
        "ManageU is a personal project that myself and my teammate developed to help us keep track of our school deadlines. Our goal was to create a chat bot that will send reminders for important deadlines and display our daily tasks. We developed a discord bot using Python and discord.py API. We stored course information and deadlines in the cloud using MongoDB Atlas and hosted the chat bot on Heroku. Using discord as the interface, allowed us to access Manage on all our devices, as well as the ably to receive push notification directly to out phones. The result was an easy to use, cross platform notification system which my teammate and I still use to keep track of our deadlines to date. Through ManageU I was able to learn asynchronous programming in python and gain experience managing a NoSQL database like MongoDB. This project is particularly significant to me since I was able to build a piece of software to solve a problem I faced in my daily life.",
    },
    {
      title: "Anime Update Tracker",
      image: "animeUpdateTracker.jpg",
      desc: "Chrome Extension that helps users keep track of their favourite anime and pick up where they last left off",
      demoLink:
        "https://chrome.google.com/webstore/detail/anime-update-tracker/dfcboajkdkgolnlambnobofpdmejbkmb",
      codeLink: "https://github.com/l3n0ire/AnimeUpdateTracker",
      date: "Nov 2020",
      projectType: "Personal Project availible on the Chrome extension store",
      descLong:
        "Anime Update Tracker is a personal project that I’ve developed to keep track of the episodes that I’ve watched. My goal was to create a Chrome extension that will automatically start tracking my progress in a show, when I start watching. I developed this chrome extension using JavaScript. I stored user data using the chrome’s storage feature and synchronized it with an online anime database called My Anime List. With this chrome extension, users could track their progress on all their chrome enabled devices, as well as the ability to resume where they last left off on supported sites. The result was an easy to use, cross platform anime tracker that is being used by over 160 active users across the world. Through Anime Update tracker, I was able to gain experience with asynchronous programming in JavaScript as well as experience with securing user data. This program was significant to me since it is the first project to have gained a large and active userbase.",
    },
    {
      title: "Physics Playground",
      image: "physicsPlaygroundU.jpg",
      desc: "Virtual physics lab simulator designed to help students learn remotely",
      demoLink: "https://physicsplaygroundu.netlify.app/",
      codeLink: "https://github.com/l3n0ire/PhysicsPlaygroundUnity",
    },
    {
      title: "Recycle Rush",
      image: "recycleRush.jpg",
      desc: "Non-Profit mobile game aimed to encourage recycling among youth",
      demoLink:
        "https://play.google.com/store/apps/details?id=com.ColinLin.RecycleRush&hl=en",
      codeLink: "https://github.com/l3n0ire/RecycleRushAndroid",
    },
    {
      title: "Teamfight UTSC",
      image: "tftutsc.jpg",
      desc: "Website promoting the tournaments and socials for the Teamfight UTSC club as well as tutorials for beginners",
      demoLink: "https://tftutsc.netlify.app/",
      codeLink: "https://github.com/l3n0ire/TFT_UTSC",
    },
    {
      title: "Timetable Builder",
      image: "ttb.jpg",
      desc: "Platform to help students plan out and visualize their course load for upcoming semesters",
      demoLink: "https://l3n0ire.github.io/TimetableBuilder/index.html",
      codeLink: "https://github.com/l3n0ire/TimetableBuilder",
    },
  ],
  skills: {
    languages: "Java, Python, C, HTML, CSS, JavaScript, TypeScript SQL, PHP",
    frameworks:
      "Spring Boot, Node.js, Express.js, Next.js, Vue.js, React, Angular, jQuery, Bootstrap, Tailwind CSS, Pandas, NumPy",
    databases: "MongoDB, MySQL, PostgreSQL, Neo4j",
    concepts:
      "RESTful APIs, Object Oriented Programming, MVC Architecture, Microservices, Agile Scrum",
    tools: "Linux, Git, Jira, Heroku, Docker, WordPress, Postman",
    softSkills: "Collaboration, Leadership, Teamwork",
  },
};
export default data;
