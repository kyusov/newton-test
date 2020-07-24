const initialState = {
  items: [],
}

const pizzas = (state = initialState, action) => {
  if (action.type === 'SET_PIZZAS') {
    return {
      ...state,
      items: action.payload,
    }
  }

  if (action.type === 'REMOVE_STAR') {
    return {
      ...state,
      items: state.items.map((e) => (e.id === action.payload ? { ...e, isActive: false } : e)),
    }
  }

  if (action.type === 'ADD_STAR') {
    return {
      ...state,
      items: state.items.map((e) => (e.id === action.payload ? { ...e, isActive: true } : e)),
    }
  }

  return state
}

export default pizzas
