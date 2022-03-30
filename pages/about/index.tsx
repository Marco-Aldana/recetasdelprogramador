import { Grid } from "@mui/material";
import { NextPage } from "next";
import Layout from "../../components/Layout";
import styles from '../../styles/About.module.css'

const About: NextPage = () => {
    return (
        <Layout>
            <Grid container >
                <iframe src="https://marco-aldana.github.io/" name="targetframe" className={styles.main} />
            </Grid>
        </Layout>
    )
}

export default About;