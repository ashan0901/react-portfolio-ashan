import project0 from "../assets/projects/project-0.jpg";
import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `Hello! I'm Ashan Fernando, a passionate and driven Computer Science undergraduate with a keen interest in software development, data science, and artificial intelligence. I am currently pursuing my Bachelor's degree in Computer Science at University of Kelaniya Srilanka, where I have been honing my skills in programming, problem-solving, and project management. \n`;

export const ABOUT_TEXT = `         Currently, I am pursuing a BSc Honours degree in Computer Science at University of Kelaniya Srilanka. My coursework and projects have provided me with a strong understanding of various aspects of computer science, including data structures, algorithms, and software development, Machine Learning and Artifitial Inteligent. I have also worked on projects that have involved working with various technologies, including JavaScript, React.js, Node.js, and MongoDB, Python ,Jupyter Notebook .My enthusiasm for computer science drives me to solve complex problems and create innovative solutions. I am always looking for new opportunities to learn and grow.`;

export const EXPERIENCES = [
  {
    company: "Panaceate (Pvt) Ltd",
    role: "Software Engineer Intern",
    year: "2024 - Present",
    description: "",
    technologies: [
      "Angular NX",
      "NestJS",
      "AWS",
      "PostgreSQL",
      "Azure DevOps",
      "Git",
      "PL/SQL",
      "Sequelize",
      "AG Grid",
      "Tailwind CSS",
    ],
  },
];

export const PROJECTS = [
  {
    title: "MoneyMate - Personal Expense Tracker",
    image: project1,
    description:
      "A fully functional expense tracking website with features like add expenses, show past expenses and income visually, and user authentication.",
    technologies: ["React", "SpringBoot", "MongoDB", "Node.js", "Java"],
    link: "https://github.com/ashan0901/Personal-Express-Tracker",
  },
  {
    title: "Food Ordering System - POSS",
    image: project2,
    description:
      "An application for managing Food orders and Management, with features such as order creation, order completed, and order status and mangemnet of Admin and user authentication.",
    technologies: ["C#", ".NET", "SQL Sever Management", "Visual Studio"],
    link: "https://github.com/ashan0901/Food-Ordering-System",
  },
  {
    title: "Studio-K - Music Studio Website",
    image: project4,
    description:
      "A Website for marketing and publishing music services to society, with features like booking studio and get services etc.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP"],
    link: "https://github.com/ashan0901/Studio-K-Website",
  },

  {
    title: "Audio Tempo Extractor",
    image: project5,
    description:
      "This is a desktop applications designed for music production, specifically used to extract tempo from audio files.This tool is essential in my music production workflow, allowing precise tempo extraction for creating music",
    technologies: ["Python", "Tkinter", "Librosa lib", "Inno compiler"],
    link: "https://github.com/ashan0901/Audio-Tempo-Extracter",
  },
  {
    title: "Safe Route Pro",
    image: project0,
    description:
      "An application that predicts appropriate driving speeds for different weather and road conditions, while incorporating live weather updates and location tracking, is crucial for promoting road safety using AI.",
    technologies: ["React", "Flask", "Python", "Machine Learning"],
    link: "",
  },
  {
    title: "Sinhala Character Recognition",
    image: project6,
    description:
      "currently engaged in training a CNN model to identify Sinhala characters, specifically focusing on 'ච' (cha) and 'න'(na). This project involves working with approximately 50 images per character to develop a robust recognitionsystem",
    technologies: [
      "Python",
      "CNN",
      "Deep Learning",
      "Google Colab",
      "Jupyter Notebook",
    ],
    link: "https://github.com/ashan0901/Deep-Learning-Mini-Project-01",
  },
  {
    title: "Portfolio Website - Ashan",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/ashan0901/react-portfolio-ashan",
  },
];

export const CONTACT = {
  phoneNo: "+94 77 5376 750 ",
  email: "ashanchanuka.lk@gmail.com",
};
