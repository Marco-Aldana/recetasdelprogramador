import { PanoramaSharp } from "@mui/icons-material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from '../../styles/Home.module.css'

const Contacto: NextPage =()=>{
    const router = useRouter()
  const { name } = router.query
 return(
     <Layout>
         <h1 className={styles.title}>
            Bienvenido al curso de {name}
          </h1>
          <div>
            
          </div>
         </Layout>
     
 )
}

export default Contacto;