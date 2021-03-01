import { LOG_USER, AUTH_USER } from '../Constants/constants'


export function getUsers(){
  return( dispatch =>{
    fetch("json/users.json")
          .then( resp => resp.json())
          .then( datos =>{
            let validacion = []
            datos.map( user => {
              let obj = {}
              obj.correo = user.correo
              obj.password = user.password
              validacion.push(obj)
            })
            dispatch({
              type: LOG_USER,
              payload: validacion
            })
          })
          .catch( err => {
            console.log(err)
          })
  })
}

export function loginUser(user){
  return( dispatch =>{
    fetch("json/users.json")
          .then( resp => resp.json())
          .then( datos =>{
            let logUser = datos.find( elem => elem.correo === user.correo);
            dispatch({
              type: AUTH_USER,
              payload: {logUser, user}
            })
          })
          .catch( err => {
            console.log(err)
          })
  })
}