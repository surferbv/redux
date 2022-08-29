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

// Can't just allow anyone to make change to the state
// Similar to an American FootBall Team
// The team needs to operate as one cohesive unit to increase predictable.
// They do this by creating a playbook were each individual on the team will know this playbook by heart.
// Just like a team will have a playbook i.e. a collection of actions which represents the various state that can change the store.

// Example of various actions which can change the state of our store.
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










