export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
})

export const removeStar = (id) => ({
  type: 'REMOVE_STAR',
  payload: id,
})

export const addStar = (id) => ({
  type: 'ADD_STAR',
  payload: id,
})
