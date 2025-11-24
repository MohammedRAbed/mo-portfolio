import { Github, Linkedin, Mail } from "lucide-react";

export const portfolioData = {
  personalInfo: {
    name: "Mohammed Abed",
    title: "Android Developer | Kotlin & Java | Jetpack Compose",
    subtitle: "Also experienced in Full-Stack Web Development",
    email: "abedmohammed2004@gmail.com",
    phone: "+972 594 746 206",
    location: "Gaza, Palestine",
    bio: "Software Development Graduate (2025) specializing in Android development (Kotlin, Jetpack Compose) and web solutions (Laravel, Node.js). Experienced in building scalable applications, from e-commerce platforms to real-time trackers. Passionate about clean architecture and delivering high-quality digital solutions.",
    socials: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mohammed-r-abed",
        icon: Linkedin,
      },
      {
        name: "GitHub",
        url: "https://github.com/mohammed-r-abed", // Inferred from CV context
        icon: Github,
      },
      {
        name: "Email",
        url: "mailto:abedmohammed2004@gmail.com",
        icon: Mail,
      },
    ],
  },
  skills: {
    languages: ["Kotlin", "Java", "Python", "PHP", "JavaScript", "TypeScript"],
    frameworks: [
      "Jetpack Compose",
      "Android SDK",
      "Node.js",
      "Laravel",
      "Express.js",
      "Next.js",
      "React",
    ],
    webAndCms: ["WordPress", "WooCommerce", "Dokan"],
    databases: ["MySQL", "Firebase", "SQLite", "MongoDB"],
    tools: ["Git", "GitHub", "GitLab", "MVVM", "Clean Architecture", "Koin", "Retrofit"],
  },
  projects: [
    {
      title: "Luqta",
      description: "Android E-Commerce App for second-hand trading.",
      techStack: ["Kotlin", "Jetpack Compose", "MVVM", "Clean Architecture", "Koin", "Retrofit"],
      link: "https://github.com/mohammed-r-abed", // Placeholder if specific link not found
      details: [
        "Developed a second-hand marketplace app in Kotlin using Jetpack Compose.",
        "Implemented secure authentication with Android Keystore and integrated Retrofit/OkHttp.",
        "Built core features: product browsing, cart, and user profiles with StateFlow.",
        "Applied Koin dependency injection and modular structure for scalability.",
      ],
    },
    {
      title: "Corners",
      description: "Feature-rich food delivery Android application.",
      techStack: ["Kotlin", "XML", "Glide", "Retrofit"],
      link: "https://github.com/mohammed-r-abed",
      details: [
        "Implemented browsing restaurants, meals, cart, and address management.",
        "Built modern screens for restaurants, meal details, cart, and orders.",
        "Integrated image loading (Glide) and HTTP client (Retrofit).",
        "Supports Arabic layout and order history.",
      ],
    },
    {
      title: "CryptoTrackerApp",
      description: "Real-time cryptocurrency tracker demonstrating scalable architecture.",
      techStack: ["Kotlin", "MVVM", "Clean Architecture", "Koin", "Ktor"],
      link: "https://github.com/mohammed-r-abed",
      details: [
        "Implemented Clean Architecture + MVVM with DI using Koin.",
        "Consumes CoinCap API to show live prices, history, and updates.",
        "Focuses on maintainability, testability, and production patterns.",
      ],
    },
    {
      title: "Volunteer Management System",
      description: "Laravel Admin Dashboard for managing volunteers.",
      techStack: ["Laravel", "Bootstrap 5", "MySQL"],
      link: "https://github.com/mohammed-r-abed",
      details: [
        "Built a dashboard using Laravel with Sneat Bootstrap 5 admin template.",
        "Implemented secure authentication and role-based access control.",
        "Organized admin panels to streamline CRUD operations.",
      ],
    },
    {
      title: "Expense Tracker API",
      description: "RESTful API for expense tracking.",
      techStack: ["Node.js", "Express", "MongoDB", "JWT"],
      link: "https://github.com/mohammed-r-abed",
      details: [
        "Developed a RESTful API modularized into controllers, routes, and middlewares.",
        "Secured endpoints with JWT-based authentication.",
        "Implemented full CRUD operations with robust input validation.",
      ],
    },
    {
      title: "Dijkstra-Gaza-Map",
      description: "Interactive Android visualization of Dijkstra's algorithm.",
      techStack: ["Java", "Android SDK", "Algorithms"],
      link: "https://github.com/mohammed-r-abed",
      details: [
        "Loads graph data from assets and visualizes nodes/edges on a map.",
        "Highlights the shortest path between selected cities in Gaza.",
        "Demonstrates algorithms, data parsing, and custom drawing on Android.",
      ],
    },
  ],
  experience: [
    {
      role: "Freelancer (Android & Web Developer)",
      company: "Online",
      period: "Dec. 2021 – PRESENT",
      description:
        "Developing and deploying Android applications using Java, Kotlin, and Jetpack Compose, as well as web solutions with Laravel, Node.js, and WordPress. Collaborating with clients remotely to deliver customized digital solutions.",
    },
    {
      role: "WordPress Developer",
      company: "Eliaa Online Marketplace",
      period: "Jun. 2023 – Sep. 2023",
      description:
        "Customized and maintained a WordPress multi-vendor e-commerce platform using Woocommerce and Dokan plugins. Implemented new features such as vendor markets, improved site translations, and optimized user experience.",
    },
    {
      role: "Intern Android Developer",
      company: "NewLine Tech",
      period: "Oct. 2021 – Jan. 2022",
      description:
        "Contributed to mobile app development using Android Studio. Assisted senior developers in implementing UI components with XML, fixing bugs, and testing application performance.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Software Development",
      institution: "Islamic University of Gaza",
      period: "2021 – 2025",
    },
    {
      degree: "High School of Mobile Apps Development",
      institution: "Soaad Al-Sabbah Secondary School",
      period: "2019 - 2021",
    },
  ],
};
