import menuItemProps from "../Interfaces/menuItemProps";
import HomeIcon from '@mui/icons-material/Home';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const mainMenu: menuItemProps[] = [
    
    
    {
        name: 'Linkedin',
        URL: 'https://www.linkedin.com/in/marco-aldana-/',
        icon: <LinkedInIcon/>,
        newTab: true,
    },
    {
        name: 'GitHub',
        URL: 'https://github.com/Marco-Aldana',
        icon: <GitHubIcon />,
        newTab: true,
    },
    {
        name: 'Youtube Channel',
        URL: 'https://www.youtube.com/channel/UCpAQKQnZqi1mvvqJbzTvBNw',
        icon: <YouTubeIcon />,
        newTab: true,
    },
    {
        name: 'Sobre Mi',
        URL: '/about',
        icon: <PersonIcon />,
        newTab: false,
    },

];

export default mainMenu;