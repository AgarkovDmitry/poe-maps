import React from 'react'

import TiersBlock from '../components/tiers-block'

import styles from './style.module.scss'

export default function() {
  return (
    <div className={ styles.app }>
      <header className={ styles.appHeader }>
      <TiersBlock />
      </header>
    </div>
  )
}
