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
    SiPostgresql,
    SiFirebase,
    SiSqlite,
    SiMongodb,
    SiGit,
    SiGithub,
    SiGitlab,
} from "react-icons/si";
import { FaCode, FaServer, FaTools, FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";

// Map skill names to React Icons
export const skillIcons: Record<string, IconType> = {
    // Languages
    Kotlin: SiKotlin,
    Java: FaJava,
    Python: SiPython,
    PHP: SiPhp,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,

    // Frameworks
    Android: SiAndroid,
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
    Woocommerce: SiWoocommerce,
    Dokan: FaServer, // No specific icon for Dokan in simple-icons, using generic server

    // Databases
    MySQL: SiMysql,
    Postgres: SiPostgresql,
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
