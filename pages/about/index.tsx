import { Grid } from "@mui/material";
import { NextPage } from "next";
import Layout from "../../components/Layout";
import styles from '../../styles/About.module.css'

const About: NextPage = () => {
    return (
        <Layout>
            <Grid item>
                <p className={styles.subtitle}>pagina en construccion...</p>
                <img src="https://esp.habitants.org/var/ezwebin_site/storage/images/la_via_urbana/alojar_mil_millones_de_personas2/work_in_progress/2390822-1-ita-IT/work_in_progress.jpg" alt="Trabajo en progreso" />
            </Grid>
            <Grid container >
                <iframe src="https://marco-aldana.github.io/" name="targetframe" className={styles.main} />
            </Grid>
        </Layout>
    )
}

export default About;