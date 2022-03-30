import menuItemProps from "../Interfaces/menuItemProps";
import HomeIcon from '@mui/icons-material/Home';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import YouTubeIcon from '@mui/icons-material/YouTube';


const mainMenu: menuItemProps[] = [
    {
        name: 'Inicio',
        URL: '/',
        icon: <HomeIcon />,
    },
    {
        name: 'Cursos',
        URL: '/cursos',
        icon: <SchoolIcon />,
    },
];

export default mainMenu;