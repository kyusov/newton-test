import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Home, Favorites } from './pages'
import { Header } from './components'
import { setPizzas } from './redux/actions/pizzas'

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    fetch('http://react-pizza-server.herokuapp.com/pizza')
      .then((data) => data.json())
      .then((json) => dispatch(setPizzas(json.pizzas)))
  }, [])

  return (
    <div className="wrapper">
      <Header
        menuItems={[
          { name: 'Главная', link: '/' },
          { name: 'Избранное', link: '/fav' },
        ]}
      />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/fav" component={Favorites} exact />
      </div>
    </div>
  )
}

export default App
