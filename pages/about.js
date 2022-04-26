import React from 'react'
import Link from 'next/link'
import NavbarBlack from '../components/NavbarBlack'
import styles from '../styles/About.module.css'
import { useState, useEffect } from 'react'

const about = () => {
    const [socialNet, setSocialNet] = useState([])
  useEffect(() => {
    fetch('/api/socialNetworks')
      .then(r => r.json())
      .then(r => setSocialNet(r))
  }, [])
    return (
        <>
            <NavbarBlack title='Recetas del programador' />
            <div className={styles.container}>
                <div className={styles.main}>
                <h3>social networks</h3>
                <div className={styles.navigation}>
                {socialNet.map((item) => {
                  return <div key={item.name} className={styles.link}>
                    <a href={item.URL}  target="_blank">
                      <i className={item.icon}></i>
                    </a>
                  </div>
                })}
          </div>
                    <h3>Resume</h3>
                    <iframe 
                        src="https://marco-aldana.github.io/">
                    </iframe>
<br/>
                    
                </div>
            </div>
        </>
    )
}

export default about
