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
  stanbic,
  Myfood,
  mondia,
  Ezytem,
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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "UI/UX Developer",
    icon: mobile,
  },
  {
    title: "Front-end Developer",
    icon: backend,
  },
  {
    title: "Back-end Developer",
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
    title: "Full-Stack Web Application",
    company_name: "solomonayo.org",
    icon: Ezytem,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Designed the prototype of the web application using Figma and developed the web application with React.js, Node.js, Git, MongoDB, and related technologies",
      "Implemented responsive design using VSP, ensuring cross-browser compatibility",
      "Participated in code reviews and provided constructive feedback to other developers",
    ],
  },
  {
    title: "React Web Application",
    company_name: "PIA for Govenor",
    icon: Myfood,
    iconBg: "#E6DEDD",
    date: "July 2023",
    points: [
      "Built a web application, using React.js, css, JaveScript and other related technologies.",
      "Collaborating with cross-functional teams, product managers, and other developers to create high-quality web application.",
    ],
  },
  {
    title: "React application",
    company_name: "Mondia , Dubia ",
    icon: mondia,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Designed the prototype of the web application using Figma and developed the web application with React.js, Node.js, Git, MongoDB, and related technologies",
      "Implemented responsive design, ensuring cross-browser compatibility",
      "Participated in code reviews and provided constructive feedback to other developers",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "i am very impress with the way my web application came out and and Ezytem is so professional with his job .",
    name: "solomon Ayo",
    designation: "CEO",
    company: "solomonayo.org",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ezytem.tech does.",
    name: " myfood with Hilda",
    designation: "media manger",
    company: " myfood",
  },
  {
    testimonial:
      "Ezytem is highly professional in his work, and I highly recommend him for your web application development needs",
    name: "PIA media",
    designation: "Proffesor Ajagunna",
    company: "PIA 4Gov",
  },
];

const projects = [
  {
    name: "solomonayo.org",
    description:
      "Designed the prototype of the web application using Figma and developed the web application with React.js, Node.js, Git, MongoDB, and related technologies",
    tags: [
      {
        name: "react.js",
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
    source_code_link: "https://github.com/ezytem/updated-sololmonayo.org",
  },
  {
    name: "PIA for Gov",
    description:
      " A web application that enables users to learn more about Professor Ibrahim Ajagunna and support his candidacy in the upcoming gubernatorial election in 2024.",
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
    name: "myfood",
    description:
      "A comprehensive online restaurant platform that seamlessly integrates bookings, reservations, food ordering, and secure payment processing to provide users with a convenient and enjoyable dining experience.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
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