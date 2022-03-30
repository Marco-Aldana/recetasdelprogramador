import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { Grid } from '@mui/material';

const Footer = () => {
    return (
        <Grid container alignItems='flex-end' position='fixed'>
            <footer className={styles.footer}>
                    Powered by ME! :D
            </footer>
        </Grid>
    )
}

export default Footer;