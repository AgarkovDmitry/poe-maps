import React from 'react'

import atlas from '../../poe/atlas'
import MapItem from '../map'

import styles from './style.module.scss'

interface IProps {
  tier: number
}

export default function (props: IProps) {
  const [hidden, setHidden] = React.useState(true)

  const hide = () => {
    setHidden(!hidden)
  }

  return (
    <div className={ styles.tierBlock }>
      <div className={ styles.tierHeader } onClick={ hide }>
        Tier { props.tier }
        <i className={ `material-icons ${ styles.expandIcon } ${hidden ? styles.expandIconClosed : ''}` }>
          expand_more
        </i>
      </div>
      <div className={ `${ styles.tierCollapse } ${ hidden ? styles.tierCollapseClosed : '' }` }>
        {
          atlas.maps.filter(i => i.tier === props.tier).map(i => (
            <MapItem map={ i } key={ i.id } />
          ))
        }
      </div>
    </div>
  )
}
