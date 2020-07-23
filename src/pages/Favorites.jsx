import React from 'react'
import { useSelector } from 'react-redux'

import { Card } from '../components'

function Favorites() {
  const items = useSelector(({ favorite }) => favorite.items)

  return (
    <Card
      items={items}
      onClick={(item) => {
        console.log('Favorites', item)
      }}
    />
  )
}

export default Favorites
