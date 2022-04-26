import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import NavbarBlack from '../components/NavbarBlack'

export default function Home() {
  const [socialNet, setSocialNet] = useState([])
  useEffect(() => {
    fetch('/api/socialNetworks')
      .then(r => r.json())
      .then(r => setSocialNet(r))
  }, [])

  return (
    <div >
      <NavbarBlack title='Recetas del programador' />
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.title}>¡Bienvenido Programador!</h1>
          <div className={styles.navigation}>
                {socialNet.map((item) => {
                  return <div key={item.name} className={styles.link}>
                    <a href={item.URL}  target="_blank">
                      <i className={item.icon}></i>
                    </a>
                  </div>
                })}
          </div>
        </div>
      </div>

    </div>

  )
}
