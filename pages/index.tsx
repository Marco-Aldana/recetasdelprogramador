import { Grid } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import MultiActionAreaCard from '../components/utils/MultiActionAreaCard'
import coursesCards from '../dummy/coursesCards'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <Layout >
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Marco Aldana main page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className={styles.title}>
          ¡Bienvenido!
        </h1>
        <Grid container my={5} justifyContent='center' alignItems="center" >
          <iframe style={{width:'60vw', height:'33.75vw'}}  src="https://www.youtube.com/embed/QTDPOxnfRaI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Grid>
        <p className={styles.subtitle}>¿Que quieres aprender hoy?</p>
        <Grid container spacing={4}  justifyContent='center' alignItems="stretch">
          {coursesCards.map((item) => (
            <Grid item key={item.nombre}>
              <MultiActionAreaCard nombre={item.nombre} descripcion={item.descripcion} imagen={item.imagen} url={item.url} documentacion={item.documentacion} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}

export default Home
