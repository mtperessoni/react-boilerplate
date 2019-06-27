// import Auth from 'models/Auth'

// const initialState = new Auth()
const initialState = {}

const actionsMap = {
}

export default function auth(state = initialState, action = {}) {
  const fn = actionsMap[action.type]
  return fn ? fn(state, action) : state
}
