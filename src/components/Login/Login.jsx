import React from 'react';
//import estilos y logo
import Logo from '../../Assets/img/logo.svg';
import Face from '../../Assets/img/facebook.svg';
import Google from '../../Assets/img/buscar.svg';
import Linkedin from '../../Assets/img/linkedin.svg';
import '../../Sass/login.scss';

const Login = () => {
  return ( 
    <div className="container-prin">
      <div className='slider'>
        <img src={Logo} alt=""/>
      </div>
      <div className="login-container">
        <div className="login">
          <h1>Iniciar sesión</h1>
          <p>Selecciona como deseas ingresar a la plataforma</p>
          <div className="redes-login">
            <div className='card face'>
              <img src={Face} alt=""/>
            </div>
            <div className='card google'>
              <img src={Google} alt=""/>
            </div>
            <div className='card linkedin'>
              <img src={Linkedin} alt=""/>
            </div>
          </div>
          <form>
            <div className="input-div">
              <input type="text" name="correo" />
              <span >Correo electronico</span>
            </div>
            <div className="input-div">
              <input type="text" name="contraseña" />
              <span >Contraseña</span>
            </div>
            <span className='forget'>¿Olvidaste tu contraseña?</span>
            <input type="submit" value="Iniciar sesión"/>
          </form>
          <p>¿Aun no tienes cuenta? <span className='register'>Regístrate</span></p>
        </div>
      </div>
    </div>
   );
}
 
export default Login;