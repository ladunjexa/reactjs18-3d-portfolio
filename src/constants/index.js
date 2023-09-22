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
  fronthausEventApp,
  resico,
  yingxiang,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
      "Designed architecture of the mobile app for event attendees so that the app can be easily customized for different events.",
      "Programmed Android and iOS application using Flutter for YouTube Creator Submit, providing attendees with easy access to event details and schedules.",
      "Programmed Web Application using PHP for speaker to engage with audience.",
      "Developing and maintaining web applications using React.js, tailwind css and other related technologies.",
      "Programmed AR app for HoloLens using Unity to train workers to be familiar with factory workflow."
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
];

const projects = [
  {
    name: "News Aggregator",
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
    name: "Event Application",
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
    name: "ResiCo",
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
