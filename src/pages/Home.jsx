import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Card } from '../components'
import { addFavorite, deleteFavorite } from '../redux/actions/favorite'
import { removeStar, addStar } from '../redux/actions/pizzas'

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items)

  const addItemToFavorite = React.useCallback((item) => {
    dispatch(addFavorite(item))
  }, [])

  const deleteItemFromFavorite = React.useCallback((id) => {
    dispatch(deleteFavorite(id))
  }, [])

  const removeStarFromItem = React.useCallback((id) => {
    dispatch(removeStar(id))
  }, [])

  const addStarToItem = React.useCallback((id) => {
    dispatch(addStar(id))
  }, [])

  return (
    <Card
      items={items}
      addItemToFavorite={addItemToFavorite}
      deleteItemFromFavorite={deleteItemFromFavorite}
      removeStarFromItem={removeStarFromItem}
      addStarToItem={addStarToItem}
    />
  )
}

export default Home
