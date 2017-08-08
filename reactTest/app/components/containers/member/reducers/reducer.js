let INITIAL_STATE = {
  counter: {
    count: 0
  }
}


function counter(state = INITIAL_STATE.counter, action) { 
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1}
    case 'DECREMENT':
      return {count: state.count - 1}
    default:
      return state
  }
}


export default counter;