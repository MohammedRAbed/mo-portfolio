import {
    SiKotlin,
    SiPython,
    SiPhp,
    SiJavascript,
    SiTypescript,
    SiJetpackcompose,
    SiAndroid,
    SiNodedotjs,
    SiLaravel,
    SiExpress,
    SiNextdotjs,
    SiReact,
    SiWordpress,
    SiWoocommerce,
    SiMysql,
    SiFirebase,
    SiSqlite,
    SiMongodb,
    SiGit,
    SiGithub,
    SiGitlab,
    SiKtor,
} from "react-icons/si";
import { FaCode, FaServer, FaTools, FaJava } from "react-icons/fa";

// Map skill names to React Icons
export const skillIcons: Record<string, any> = {
    // Languages
    Kotlin: SiKotlin,
    Java: FaJava,
    Python: SiPython,
    PHP: SiPhp,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,

    // Frameworks
    "Jetpack Compose": SiJetpackcompose,
    "Android SDK": SiAndroid,
    "Node.js": SiNodedotjs,
    Laravel: SiLaravel,
    "Express.js": SiExpress,
    "Next.js": SiNextdotjs,
    React: SiReact,

    // Web & CMS
    WordPress: SiWordpress,
    WooCommerce: SiWoocommerce,
    Dokan: FaServer, // No specific icon for Dokan in simple-icons, using generic server

    // Databases
    MySQL: SiMysql,
    Firebase: SiFirebase,
    SQLite: SiSqlite,
    MongoDB: SiMongodb,

    // Tools
    Git: SiGit,
    GitHub: SiGithub,
    GitLab: SiGitlab,
    MVVM: FaCode, // Generic code icon
    "Clean Architecture": FaTools, // Generic tools icon
    Koin: FaCode, // No specific icon
    Retrofit: FaServer, // No specific icon
};
