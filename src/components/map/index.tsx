import React from 'react'

import styles from './style.module.scss'

interface IMap {
  id: number
  name: string
  tier: number
  img: string
}

interface IProps {
  map: IMap
}

export default function(props: IProps) {

  return (
    <div className={ styles.mapWrap }>
      <img className={ styles.mapImage } src={ props.map.img } alt={ props.map.name } title={ props.map.name } />
    </div>
  )
}
