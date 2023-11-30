import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  helloholo,
  threejs,
  dnata,
  singpass,
  dbs,
  ocbc,
  fronthausEventApp,
  resico,
  yingxiang,
  shelen,
} from "../assets";

export const navLinks = [
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Computing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "HelloHolo",
    icon: helloholo,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      "Programmed Android and iOS application using Flutter for Google and ENMSG, providing attendees with easy access to event details and schedules.",
      "Developed a web application using PHP/Laravel and Azure, MySQL as databases, for DBS, OCBC, and Singpass, which allows speakers to engage with their audience.",
      "Programmed Mobile Application using Java and NVIDIA CloudXR to showcase XR capabilities on smartphones and attract over 300 audience in an event.",
      "Designed architecture of the mobile app for event attendees so that the app can be easily customized for different events.",
      "Refactored a web application using React and Next.js, resulting in a 20% reduction in code while implementing appropriate design patterns and ensuring a robust system.",

    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Through self-learning and asking effective questions, he managed to complete multiple projects with external clients. He is easy to talk to and work with, and a smart and diligent worker.",
    name: "Seah Ying Xiang",
    designation: "MR Developer",
    company: "HelloHolo",
    image: yingxiang,
  },
  {
    testimonial:
      "I’ve witnessed his strong command of Java, consistently delivering high-quality solutions. He wasn’t just about writing code, he actively engaged with the team, effective communication, and readily lent support to others.",
    name: "Shelen Go",
    designation: "Software Developer",
    company: "SUTD",
    image: shelen,
  },
];

const projects = [
  
  {
    name: "Spot the Differences (Web)",
    description:
      "The Spot the Differences game for Singpass aims to educate seniors in preventing scam applications.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Azure",
        color: "green-text-gradient",
      },
      {
        name: "Design",
        color: "pink-text-gradient",
      },
    ],
    image: singpass,
    source_code_link: "https://avpd.holo.sg/game/dashboard",
  },
  {
    name: "DBS CX Day (Web)",
    description:
      "A series of games that engage 10,000+ users and allow them to learn more about DBS.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Azure",
        color: "green-text-gradient",
      },
      {
        name: "Pusher",
        color: "pink-text-gradient",
      },
    ],
    image: dbs,
    source_code_link: "https://github.com/jsonggan",
  },
  {
    name: "Frank by OCBC (Web)",
    description:
      "A real-time updating web app that receives user card designs and displays them with elegant animations.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Azure",
        color: "green-text-gradient",
      },
      {
        name: "Pusher",
        color: "pink-text-gradient",
      },
    ],
    image: ocbc,
    source_code_link: "https://frank.holo.sg/card",
  },
  {
    name: "News Aggregator (Web)",
    description:
      "The Automated News Collector and Management Web App, aims to streamline the process of identifying and managing relevant news articles for dnata employees. The web application automates the retrieval of industry-specific articles from diverse sources, categorizing, summarizing, and facilitates seamless collaboration within the team.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "GCP",
        color: "green-text-gradient",
      },
      {
        name: "Ruby On Rails",
        color: "pink-text-gradient",
      },
    ],
    image: dnata,
    source_code_link: "https://github.com/Service-Design-Studio/1d-final-project-2023-sds-2023-team-06",
  },
  {
    name: "Event Application (Mobile)",
    description:
      "Designed architecture of the mobile app for event attendees so that the app can be easily customized for different events.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "RESTapi",
        color: "green-text-gradient",
      },
      {
        name: "Architecture ",
        color: "pink-text-gradient",
      },
    ],
    image: fronthausEventApp,
    source_code_link: "https://github.com/jsonggan/fronthaus",
  },
  {
    name: "ResiCo (Java)",
    description:
      "Connecting communities together by digitalizing residential notice boards and providing an easier way for residents to talk, ask, and help each other.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Andriod",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: resico,
    source_code_link: "https://github.com/jsonggan/ResiCo",
  },
];

export { services, technologies, experiences, testimonials, projects };
