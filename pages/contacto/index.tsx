import { NextPage } from "next";
import Layout from "../../components/Layout";
import styles from '../../styles/Home.module.css'

const Contacto: NextPage =()=>{
 return(
     <Layout>
         <h1 className={styles.title}>
            Bienvenido al repositorio de contacto!
          </h1>
     </Layout>
     
 )
}

export default Contacto;