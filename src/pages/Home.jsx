import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Card } from '../components'
import { addFavorite } from '../redux/actions/favorite'

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items)

  const addItemToFavorite = React.useCallback((item) => {
    dispatch(addFavorite(item))
  }, [])

  return <Card items={items} onClick={addItemToFavorite} />
}

export default Home
