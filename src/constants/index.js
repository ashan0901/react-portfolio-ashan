import project0 from "../assets/projects/project-0.jpg";
import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Hello! I'm Ashan Fernando, a passionate and driven Computer Science undergraduate with a keen interest in software development, data science, and artificial intelligence. I am currently pursuing my Bachelor's degree in Computer Science at University of Kelaniya Srilanka, where I have been honing my skills in programming, problem-solving, and project management. `;

export const ABOUT_TEXT = `Currently, I am pursuing a BSc Honours degree in Computer Science at University of Kelaniya Srilanka. My coursework and projects have provided me with a strong understanding of various aspects of computer science, including data structures, algorithms, and software development. I have also worked on projects that have involved working with various technologies, including JavaScript, React.js, Node.js, and MongoDB.My enthusiasm for computer science drives me to solve complex problems and create innovative solutions. I am always looking for new opportunities to learn and grow.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Safe Route Pro",
    image: project0,
    description:
      "An application that predicts appropriate driving speeds for different weather and road conditions, while incorporating live weather updates and location tracking, is crucial for promoting road safety using AI. With this technology, drivers can make informed decisions based on real-time data, reducing the risk of accidents.",
    technologies: ["React", "Flask", "Python", "Machine Learning"],
    link: "",
  },
  {
    title: "MoneyMate - Personal Expense Tracker",
    image: project1,
    description:
      "A fully functional expense tracking website with features like add expenses, show past expenses and income visually, and user authentication.",
    technologies: ["React", "SpringBoot", "MongoDB", "Node.js", "Java"],
    link: "www.moneymate.com",
  },
  {
    title: "Food Ordering System - POSS",
    image: project2,
    description:
      "An application for managing Food orders and Management, with features such as order creation, order completed, and order status and mangemnet of Admin and user authentication.",
    technologies: ["C#", ".NET", "SQL Sever Management", "Visual Studio"],
  },
  {
    title: "Studio-K - Music Studio Website",
    image: project4,
    description:
      "A Website for marketing and publishing music services to society, with features like booking studio and get services etc.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP"],
  },
  {
    title: "Portfolio Website - Ashan",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "JavaScript"],
  },
];

export const CONTACT = {
  phoneNo: "+94 77 5376 750 ",
  email: "ashanchanuka.lk@gmail.com",
};
