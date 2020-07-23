import { combineReducers } from 'redux'
import favoriteReducer from './favorite'
import pizzasReducer from './pizzas'

const rootReducer = combineReducers({
  favorite: favoriteReducer,
  pizzas: pizzasReducer,
})

export default rootReducer
