import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import Link from "next/link";
import menuItemProps from "../../Interfaces/menuItemProps";

interface mainMenuListProps {
    open: boolean;
    items: menuItemProps[];
}

const MainMenuList = (props: mainMenuListProps) => {
    const { open } = props;

    return (
        <List>
            {props.items.map((props) => (
                <Link key={props.name} href={props.URL} passHref>
                    <ListItemButton title={props.name}
                        key={props.name}
                        sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}
                    >
                        <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                            {props.icon}
                        </ListItemIcon>
                        <ListItemText primary={props.name} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </Link>
            ))}
        </List>
        
    )
}

export default MainMenuList;