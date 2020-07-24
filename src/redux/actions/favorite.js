export const addFavorite = (item) => ({
  type: 'ADD_FAVORITE',
  payload: item,
})

export const deleteFavorite = (id) => ({
  type: 'DELETE_FAVORITE',
  payload: id,
})
