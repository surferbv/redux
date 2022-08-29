
/*
const add_todo = {
 type: 'ADD_TODO',
 todo: {
  id: 0,
  name: 'Learn Redux',
  complete: false,
 }
}

const remove_todo = {
 type: 'REMOVE_TODO',
 id: 0,
}

const add_goal = {
 type: 'ADD_GOAL',
 goal: {
  id: 0,
  name: 'Run a marathon',
 }
}

const remove_goal = {
 id: 0
}
*/

/*
* Todo reducer
* The default state is [] if one does not exist.
* Instead of pushing the state we concat it because push would mutate the state.
* */
function todos(state = [], action) {
 if (action.type === 'ADD_TODO'){
  return state.concat([action.todo])
 }
 return state
}

function createStore () {
 // The store should have four parts
 // 1. The state
 // 2. Get the state
 // 3. Listen to changes on the state
 // 4. Update the state

 let state
 let listeners = []

 const getState = () => state

 const subscribe = (listeners) => {
  listeners.push(listeners)

  return () => {
   listeners = listeners.filter((l) => l !== listeners)
  }
 }

 return {
  getState,
  subscribe
 }
}










