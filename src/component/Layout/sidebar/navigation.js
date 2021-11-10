import { faHome, faUserAlt, faLaptopCode, faLink } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const sidebarNavigation = [
    {
        name: 'Home',
        path: '/',
        icon: faHome,
    },
    {
        name: 'Profile',
        path: '/profile',
        icon: faUserAlt,
    },
    {
        name: 'Work',
        path: '/work',
        icon: faLaptopCode,
    }
];

export const sosmedNavigation = [
    {
        name: 'LinkedIn',
        path: 'https://www.linkedin.com/in/yusrilfirza/',
        icon: faLinkedin,
    },
    {
        name: 'Github',
        path: 'https://github.com/yusrilfirza',
        icon: faGithub,
    }
];

export default {
    sidebarNavigation,
    sosmedNavigation,
};
