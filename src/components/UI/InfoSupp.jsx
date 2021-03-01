import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
//estilos
import '../../Sass/infosupp.scss';
import Foto from '../../Assets/img/user.png'
//img temporal
import ImgPrueba from '../../Assets/img/clientes.png';

const InfoSupp = ({history}) => {

  const user = useSelector(state => state.data);
  const { nombre, apellido } = user.general;

  //prediccion Buscador
  const [buscador, setBuscador] = useState('');
  const [smart, setSmart] = useState([]);
  const [divBuscador, setDivBuscador] = useState('');

  //notificaciones y more
  const [help, setHelp] = useState('');
  const [notifications, setNotifications] = useState('');
  const [dataUser, setDataUser] = useState('');
  
  const handleChange = (type)=>{
    if(type === 'help'){
      if(help === ''){
        setHelp('action__menu--active')
      }else{
        setHelp('')
      }
    }else if (type === 'notifications'){
      if(notifications === ''){
        setNotifications('action__menu--active')
      }else{
        setNotifications('')
      }
    }else if (type === 'user'){
      if(dataUser === ''){
        setDataUser('active')
      }else{
        setDataUser('')
      }
    }
  }

  const handleLogOut = ()=>{
    history.push('/')
  }

  const handlebuscador = (e)=>{
    setBuscador(e.target.value);
    filtrarElementeos(e.target.value);
  }

  const filtrarElementeos = (filter)=>{

    if (filter === '') {
      setDivBuscador('');
      setSmart([])
    }else{
      var searchGanancias = user.ganancias.filter( item => {
        if(item.mes.includes(filter) || 
        item.total.includes(filter) || 
        item.nuevos.includes(filter) ||
        item.recurrentes.includes(filter)){
          return item
        }
      })
  
      if (searchGanancias.length !== 0) {
        setDivBuscador('formNav__busqueda--activa');
        setSmart(searchGanancias);
      }else{
        console.log('aqui')
        setDivBuscador('');
        setSmart([])
      }
    }
  }

  
  console.log(smart);

  return ( 
    <div className='navTop'>
      <div className="navTop__search">
        <svg className='navTop__icon' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 21.324 21.325"><path className="a" d="M9.119,18.238A9.065,9.065,0,0,0,14.7,16.314l5.011,5.011,1.612-1.612L16.313,14.7a9.108,9.108,0,1,0-7.194,3.536Zm0-15.958A6.839,6.839,0,1,1,2.28,9.119,6.846,6.846,0,0,1,9.119,2.28Z"/></svg>
        <form className='formNav'>
          <div className="formNav__container-input">
            <input onChange={handlebuscador} className='formNav__input' type="text" name="correo" placeholder='Buscar...' />
          </div>
          <div className={`formNav__busqueda ${divBuscador}`}>
            <ul className="formNav__lista">
              {
                smart.map((item , i) => {
                  return(
                    <li key={i}>{item.mes}</li>
                  )
                })
              }
            </ul>
          </div>
        </form>
      </div>
      <div className="navTop_options">
        <div className="navTop__alerts">
          <div className="action">
            <div className='action__box' onClick={()=> handleChange('help')}>
              <svg className='navTop__icon' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 23.818 23.818"><g transform="translate(-138.257 -370.363)"><g transform="translate(138.257 370.363)"><path className="a" d="M150.315,387.039a1.3,1.3,0,0,0,0,2.608,1.3,1.3,0,1,0,0-2.608Z" transform="translate(-138.769 -371.156)"/><path className="a" d="M150.535,377.165c-2.286,0-3.336,1.355-3.336,2.27a.971.971,0,0,0,1.016.965c.914,0,.542-1.3,2.269-1.3.847,0,1.524.373,1.524,1.152,0,.914-.948,1.439-1.507,1.914a3.1,3.1,0,0,0-1.135,2.574c0,.881.237,1.135.932,1.135.83,0,1-.373,1-.7a2.128,2.128,0,0,1,.948-2.117,4.331,4.331,0,0,0,1.9-3.1C154.142,378.368,152.7,377.165,150.535,377.165Z" transform="translate(-138.785 -370.808)"/><path className="a" d="M150.167,370.363a11.9,11.9,0,0,0-11.91,11.909v10.979a.93.93,0,0,0,.931.931h10.979a11.909,11.909,0,0,0,0-23.818Zm0,21.957H140.118V382.272a10.048,10.048,0,1,1,10.048,10.048Z" transform="translate(-138.257 -370.363)"/></g></g></svg>
            </div>
            <div className={`action__menu action__menu--help ${help}`}>
              <div className='grid'>
                <h3 className='grid__title grid__title--violet'>Centro de recursos</h3>
                <ul className='grid__list'>
                  <li className='grid__item' > <p className='grid__text grid__text--tutorials'>Tutoriales</p> </li>
                  <li className='grid__item' > <p className='grid__text grid__text--faq'>Docs/FAQ</p> </li>
                  <li className='grid__item' > <p className='grid__text grid__text--web'>Webinars</p> </li>
                  <li className='grid__item' > <p className='grid__text grid__text--users'>Comunidad</p> </li>
                </ul>
              </div>
              <div className='grid'>
                <h3 className='grid__title grid__title--danger'>Soporte</h3>
                <ul className='grid__list'>
                  <li className='grid__item' > <p className='grid__text grid__text--chat'>Chat</p> </li>
                  <li className='grid__item' > <p className='grid__text grid__text--req'>Solicitudes</p> </li>
                  <li className='grid__item' > <p className='grid__text grid__text--sale'>Ventas</p> </li>
                  <li className='grid__item' > <p className='grid__text grid__text--bug'>Reportar un Bug</p> </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="action">
            <div className='action__box mid' onClick={()=> handleChange('notifications')}>
                <svg className='navTop__icon' height="25" viewBox="0 0 512 512" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m450.201 407.453c-1.505-.977-12.832-8.912-24.174-32.917-20.829-44.082-25.201-106.18-25.201-150.511 0-.193-.004-.384-.011-.576-.227-58.589-35.31-109.095-85.514-131.756v-34.657c0-31.45-25.544-57.036-56.942-57.036h-4.719c-31.398 0-56.942 25.586-56.942 57.036v34.655c-50.372 22.734-85.525 73.498-85.525 132.334 0 44.331-4.372 106.428-25.201 150.511-11.341 24.004-22.668 31.939-24.174 32.917-6.342 2.935-9.469 9.715-8.01 16.586 1.473 6.939 7.959 11.723 15.042 11.723h109.947c.614 42.141 35.008 76.238 77.223 76.238s76.609-34.097 77.223-76.238h109.947c7.082 0 13.569-4.784 15.042-11.723 1.457-6.871-1.669-13.652-8.011-16.586zm-223.502-350.417c0-14.881 12.086-26.987 26.942-26.987h4.719c14.856 0 26.942 12.106 26.942 26.987v24.917c-9.468-1.957-19.269-2.987-29.306-2.987-10.034 0-19.832 1.029-29.296 2.984v-24.914zm29.301 424.915c-25.673 0-46.614-20.617-47.223-46.188h94.445c-.608 25.57-21.549 46.188-47.222 46.188zm60.4-76.239c-.003 0-213.385 0-213.385 0 2.595-4.044 5.236-8.623 7.861-13.798 20.104-39.643 30.298-96.129 30.298-167.889 0-63.417 51.509-115.01 114.821-115.01s114.821 51.593 114.821 115.06c0 .185.003.369.01.553.057 71.472 10.25 127.755 30.298 167.286 2.625 5.176 5.267 9.754 7.861 13.798z"/></svg>
                <p className='action__number action__number--verde'>{user.notifications.length}</p>
            </div>  
            <div className={`action__menu action__menu--notification ${notifications}`}>
              <h3 className='action__titleNotf'>Centro de recursos</h3>
              {
                user.notifications.map( (notif, i) => {
                  return(
                    <div className='notifications' key={i}>
                      <div className="notifications__individual">
                        <img src={ImgPrueba} alt=""/>
                        <div className="notifications__text">
                          <h6 className="notifications__title">{notif.title}</h6>
                          <p className='notifications__parrafo'>{notif.data}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="action">
            <div className='action__box'>
              <svg className='navTop__icon' width="25" height="25" data-prefix="far" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
              <p className='action__number action__number--azul'>{user.mensajes.length}</p>
            </div>
          </div>
        </div>
        <div className="navTop__user" >
          <div className="navTop__foto" onClick={()=> handleChange('user')}>
            <img className='navTop__img' src={Foto} alt=""/>
          </div>
          <p className='navTop__nombre' onClick={()=> handleChange('user')}>{`${nombre} ${apellido}`}</p>
          <svg className='navTop__icon' onClick={()=> handleChange('user')} xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 13.604 7.778"><path className="a" d="M12.992,16.68l5.144-5.148a.968.968,0,0,1,1.373,0,.98.98,0,0,1,0,1.377l-5.829,5.833a.97.97,0,0,1-1.341.028L6.471,12.913a.972.972,0,0,1,1.373-1.377Z" transform="translate(-6.188 -11.246)"/></svg>
          <div className={`user ${dataUser}`}>
            <ul className='user__lista'>
              <li className='user__item'> <p className='user__text user__text--my'>Mi cuenta</p> </li>
              <li className='user__item'> <p className='user__text user__text--plan'>Mi plan</p> </li>
              <li className='user__item'> <p className='user__text user__text--admin'>Admin Roles</p> </li>
              <li className='user__item'> <p className='user__text user__text--notific'>Notificaciones</p> </li>
              <li className='user__item'> <p onClick={() => handleLogOut()} className='user__text user__text--salir'>Salir</p> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default withRouter(InfoSupp);