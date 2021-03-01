import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from '../../store/Actions/actions'

//import SLIDER
import SliderLog from './SliderLog'

//import estilos y logo
import Logo from '../../Assets/img/logo.svg';
import Face from '../../Assets/img/facebook.svg';
import Google from '../../Assets/img/buscar.svg';
import Linkedin from '../../Assets/img/linkedin.svg';
import '../../Sass/login.scss';

const Login = (props) => {

  const logUsers = useSelector(state => state.validacion)

  const [form, setForm] = useState({
    correo: '',
    contraseña: ''
  })
  const [visible, setVisible] = useState({
    type: 'password',
    active: ''
  })
  //error msg
  const [classErr, setClassErr] = useState('');
  const dispatch = useDispatch();

  const handelChange = (e)=>{
    setClassErr('');
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    let finds = logUsers.find( elem => elem.correo === form.correo && elem.password === form.contraseña);
    if ( !finds) {
      setClassErr('form__cont-input--error');
    }else{
      dispatch(loginUser(finds))
      setTimeout(function(){ props.history.push('/UserUi'); }, 1000)
    }
  }

  const handelVisible = ()=>{

    if(visible.active === 'form__input-eye--active'){
      setVisible({
        type: 'password',
        active: ''
      })
    }else if(visible.active === ''){
      setVisible({
        type: 'text',
        active: 'form__input-eye--active'
      })
    }
  }


  return ( 
    <div className="containerLogin">
      <div className='slider'>
        <img className='slider__logo' src={Logo} alt=""/>
        <SliderLog />
      </div>
      <div className="login">
        <div className="login__info">
          <h1 className='login__title'>Iniciar sesión</h1>
          <p className='login__subtitle'>Selecciona como deseas ingresar a la plataforma</p>
          <div className="card-social">
            <div className='card-social__item card-social__item--face'>
              <img className='card-social__logo' src={Face} alt=""/>
            </div>
            <div className='card-social__item card-social__item--google'>
              <img className='card-social__logo' src={Google} alt=""/>
            </div>
            <div className='card-social__item card-social__item--linkedin'>
              <img className='card-social__logo' src={Linkedin} alt=""/>
            </div>
          </div>
          <form className='form' onSubmit={onSubmit}>
            <div className={`form__cont-input ${classErr}`}>
              <input className='form__input' required type="text" value={form.correo} name="correo" onChange={handelChange} />
              <span className='form__text-help' >Correo electronico</span>
              <p className='form__text-err'>correo incorrecto</p>
            </div>
            <div className={`form__cont-input ${classErr}`}>
              <input className='form__input' required type={visible.type} value={form.contraseña} name="contraseña" onChange={handelChange} />
              <span className='form__text-help'>Contraseña</span>
              <p className='form__text-err'>contraseña incorrecta</p>
              <p onClick={handelVisible} className={`form__input-eye ${visible.active}`}></p>
            </div>
            <span className='form__forget'>¿Olvidaste tu contraseña?</span>
            <input className='form__submit'  type="submit" value="Iniciar sesión"/>
          </form>
          <p className='login__lastmsg'>¿Aun no tienes cuenta? <span className='login__register'>Regístrate</span></p>
        </div>
      </div>
    </div>
   );
}
 
export default Login;