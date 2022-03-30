import { Grid } from "@mui/material";
import { NextPage } from "next";
import Layout from "../../components/Layout";
import MultiActionAreaCard from "../../components/utils/MultiActionAreaCard";
import coursesCards from "../../dummy/coursesCards";
import styles from '../../styles/Home.module.css'

const Contacto: NextPage = () => {
    return (
        <Layout>
            <Grid>
                <h1 className={styles.title}>
                    ¡Recursos para aprendizaje!
                </h1>
                <p className={styles.subtitle}>Catalogo de recursos:</p>
            </Grid>

            <Grid container spacing={4} justifyContent='center' alignItems="center">
                {coursesCards.map((item) => (
                    <Grid item key={item.nombre}>
                        <MultiActionAreaCard nombre={item.nombre} descripcion={item.descripcion} imagen={item.imagen} url={item.url} documentacion={item.documentacion} />
                    </Grid>
                ))}
            </Grid>
        </Layout>

    )
}

export default Contacto;