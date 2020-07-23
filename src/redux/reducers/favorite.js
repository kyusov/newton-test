const initialState = {
  items: [],
}

const favorite = (state = initialState, action) => {
  if (action.type === 'ADD_FAVORITE') {
    return {
      ...state,
      items: [
        ...state.items,
        {
          ...action.payload,
        },
      ],
    }
  }
  return state
}

export default favorite
