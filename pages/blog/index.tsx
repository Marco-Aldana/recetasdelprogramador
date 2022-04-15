import { PanoramaSharp } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from '../../styles/Home.module.css'

const Contacto: NextPage = () => {
  return (
    <Layout>
      <Grid container direction="column" justifyContent="center"
  alignItems="center">
        <Grid item>
        <h1 className={styles.title}>
          Bienvenido a la seccion de About
        </h1>
        </Grid>
        <Grid item>
          <p className={styles.subtitle}>pagina en construccion...</p>
          <img src="https://esp.habitants.org/var/ezwebin_site/storage/images/la_via_urbana/alojar_mil_millones_de_personas2/work_in_progress/2390822-1-ita-IT/work_in_progress.jpg" alt="Trabajo en progreso" />
        </Grid>
      </Grid>
    </Layout>

  )
}

export default Contacto;