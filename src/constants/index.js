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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Js",
    icon: web,
  },
  {
    title: "Three Js",
    icon: mobile,
  },
  {
    title: "Node Js",
    icon: backend,
  },
  {
    title: "Python",
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
    title: "React.js Developer and Python (Django)",
    company_name: "UptechSys Pvt. Ltd.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Dec 2020 - Dec 2021",
    points: [
      "Created a web platform that connects land and buildings to the potential user using React.js and other related technologies.",
      "Managed inventory of a warehouse (ERP), including eCommerce store, hardware, pharmacy, etc. by building a custom dashboard using Material UI, React js and typescript.",
      "Implemented a barcode scanning system for tracking inventory.",
      "Worked on a complete school management system and e-Learning platform with integration of open source meet channels for online classes.",
      "Implemented SMS gateway for notifications and developed web app for students, parents and teachers.",
      "Created CRUD operations API on django (Python)",
      "Implemented Zoom web SDK and custom SDK provided by JITSI api."
    ],
  },
  {
    title: "Software Developer (ReactJs, NodeJs and Python)",
    company_name: "Portpro-Asia",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - July 2022",
    points: [
      "Worked on a tracking system that tracks containers life cycle received from ports to delivery and returns, whose base is built on bootstrap and react with tracking based on scraping sites.",
      "Worked on creating backend Restful APIs using NodeJs",
      "Implemented Web scraping to extract data with Python and Nodejs using serverless architechture. (Lambda -AWS).",
      "Created a EC2 instance (Microservice Architecture) to perform OCR on images to read and identify text using Python - (openCV and tensorflow).",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "FrontEnd Engineer (ReactJs, ThreeJs, Cesium and Python)",
    company_name: "Angelswing Inc.- Korea",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2022 - Present",
    points: [
      "Worked in a creation of a web-site about reality capture and survey that creates an exact digital copy of the construction site using data from the drones.",
      "Assisted in creating a virtual twin of the real thing enhancing project visualization, monitoring, and decision-making processes.",
      "Implemented the project that was based on cesium, three.js and a potree engine to visualize mesh and point clouds.",
      "Created a pipeline to process the conversion of IFC / BIM Model (Industry Foundation Classes / Building Information Model) to tiled model for better visualization",
      "Implemented measuring tools in potree and threeJs, added 3D simulation on IFC models using Threejs and Potree",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "A Reality capture and survey that creates an exact digital copy of the construction site using data from the drones.",
  //     "Making a virtual twin of the real thing enhancing project visualization, monitoring, and decision-making processes.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
