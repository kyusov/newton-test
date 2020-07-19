import React from 'react'
import { Route } from 'react-router-dom'

import { Home, Favorites } from './pages'
import { Header } from './components'

function App() {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    fetch('http://react-pizza-server.herokuapp.com/pizza')
      .then((data) => data.json())
      .then((json) => setItems(json.pizzas))
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
        <Route path="/" render={() => <Home items={items} />} exact />
        <Route path="/fav" component={Favorites} exact />
      </div>
    </div>
  )
}

export default App
