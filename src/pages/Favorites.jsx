import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { deleteFavorite } from '../redux/actions/favorite'
import { removeStar } from '../redux/actions/pizzas'

import { Card } from '../components'

function Favorites() {
  const dispatch = useDispatch()
  const items = useSelector(({ favorite }) => favorite.items)

  const deleteItemFromFavorite = React.useCallback((id) => {
    dispatch(deleteFavorite(id))
  }, [])

  const removeStarFromItem = React.useCallback((id) => {
    dispatch(removeStar(id))
  }, [])

  return (
    <Card
      items={items}
      deleteItemFromFavorite={deleteItemFromFavorite}
      removeStarFromItem={removeStarFromItem}
    />
  )
}

export default Favorites
