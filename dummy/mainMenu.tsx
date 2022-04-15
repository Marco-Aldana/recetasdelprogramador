import menuItemProps from "../Interfaces/menuItemProps";
import HomeIcon from '@mui/icons-material/Home';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Book } from "@mui/icons-material";


const mainMenu: menuItemProps[] = [
    {
        name: 'Inicio',
        URL: '/',
        icon: <HomeIcon />,
        newTab: false
    },
    {
        name: 'Cursos',
        URL: '/cursos',
        icon: <SchoolIcon />,
        newTab: false
    },
    {
        name: 'Blog',
        URL: '/blog',
        icon: <Book />,
        newTab: false
    },
    {
        name: 'About',
        URL: '/about',
        icon: <PersonIcon />,
        newTab: false
    },
];

export default mainMenu;