
// reducer function
function todos(state = [], action) {
 if (action.type === 'ADD_TODO'){
  return state.concat([action.todo])
 } else if(action.type === 'REMOVE_TODO'){
  return state.filter((todo) => todo.id != action.id)
 } else if (action.type === 'TOGGLE_TODO'){
  return state.map((todo) => todo.id !== action.id ? todo :
   Object.assign({}, todo, {complete: !todo.complete})
  )
 } else {
  return state
 }
}

function createStore (reducer) {
 // The store should have four parts
 // 1. The state
 // 2. Get the state
 // 3. Listen to changes on the state
 // 4. Update the state

 let state
 let listeners = []

 const getState = () => state

 const subscribe = (listener) => {
  listeners.push(listener)
  return () => {
   listeners = listeners.filter((l) => l !== listener)
  }
 }

 const dispatch = (action) => {
  // call todos which wil get us our new state
  state = reducer(state, action)

  // loop over our listeners and invoke each one of them
  listeners.forEach((listener) => listener())
 }

 return {
  getState,
  subscribe,
  dispatch,
 }
}

// creating store
const store = createStore(todos)

// unsubscribe
store.subscribe(()=>{
 console.log('The new state is: ', store.getState())
})

// how it will look from the user perspective
store.dispatch({
 type: 'ADD_TODO',
 todo: {
  id: 0,
  name: 'Learn Redux',
  complete: false,
 }
})









