import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

console.log(store.getState())

// Каждый раз при обновлении состояния - выводим его
// Отметим, что subscribe() возвращает функцию для отмены регистрации слушателя
const unsubscribe = store.subscribe(() => console.log(store.getState()))

export default store
