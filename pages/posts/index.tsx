import { Button, Grid } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/Home.module.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';



const ProductsFilter: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Posts</title>
          <meta name="description" content="Search your products" />
        </Head>

          <h1 className={styles.title}>
            Bienvenido al repositorio de posts!
          </h1>
          <Grid marginTop={4}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            columnSpacing={4}>
            <Grid item>
              <Link href="/posts/crear" passHref>
                <Button variant="contained" startIcon={<AddCircleOutlineIcon />}>
                  Crear Post
                </Button>
              </Link>
            </Grid>
            <Grid item >
              <Link href="/posts/first-post" passHref>
              <Button variant="contained" startIcon={<EditIcon />}>
                  Editar Post
                </Button>
              </Link>
            </Grid>

          </Grid>

      </div>
    </Layout>
  )
}

export default ProductsFilter
