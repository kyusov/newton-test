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
          isActive: true,
        },
      ],
    }
  }

  if (action.type === 'DELETE_FAVORITE') {
    return {
      ...state,
      items: state.items.filter((e) => e.id !== action.payload),
    }
  }

  return state
}

export default favorite
