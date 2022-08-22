function createStore () {
 // The store should have four parts
 // 1. The state
 // 2. Get the state
 // 3. Listen to changes on the state
 // 4. Update the state
 let state
 let listeners = [] // allows us to call subscribe many times an array of functions

 const getState = () => state

 const subscribe = (listeners) => {
  listeners.push(listeners)

  // to unsubscribe by returning a brand-new function from subscribe
  // which will remove our listeners function from our listeners array
  return () => {
   listeners = listeners.filter((l) => l !== listeners)
  }
 }

 return {
  getState,
  subscribe
 }
}

// How to use the store
// // to creates a store
// const store = createStore()
//
// // to subscribes
// store.subscribe( () => {})
//
// // to unsubscribe
// const unsubscribe = store.subscribe(()=>{})