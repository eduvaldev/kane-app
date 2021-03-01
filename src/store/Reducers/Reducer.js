import { LOG_USER, AUTH_USER } from '../Constants/constants'

const initalState = {
  validacion: null,
  autUser: null,
  data: null
}

const Reducer = (state = initalState, action)=>{
  switch( action.type ){

    case LOG_USER:
      return { ...state, validacion: action.payload }
    
    case AUTH_USER:
    return { 
      ...state, 
      autUser: action.payload.user,
      data: action.payload.logUser.data
    }

    default:
      return state
  }
};

export default Reducer;
