import React from 'react'

import atlas from '../../poe/atlas'
import TierBlock from '../tier-block'

import styles from './style.module.scss'

const tiers = atlas.maps.map(map => map.tier).filter((value, index, self) => self.indexOf(value) === index)

export default function() {
  const [hidden, setHidden] = React.useState(false)

  const toggleHidden = () => {
    setHidden(!hidden)
  }

  return (
    <div className={ styles.tiersWrap }>
      <div className={ `${styles.tiersBlock} ${ hidden ? styles.hiddenTiersBlock : ''}` }>
      {
        tiers.map(tier => (
          <TierBlock tier={ tier } key={ tier }/>
        ))
      }
      </div>
      <div className={ `${styles.toggleIconBlock} ${ hidden ? styles.toggleIconBlockClosed : ''}` }>
        <i className={ `material-icons ${ styles.toggleIcon } ${ hidden ? styles.expandIconClosed : ''}` } onClick={ toggleHidden }>
          chevron_left
        </i>
      </div>
    </div>
  )
}
