import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
//graficos y slider
import BarGrafic from './BarGrafic';
import SliderPrice from "./SliderPrice";
//estilos
import '../../Sass/dashboard.scss';
//imagen
import Estudiante from '../../Assets/img/estudiante.png';
import Cursos from '../../Assets/img/cursos.png';
import Estilos from '../../Assets/img/estilos.png';
import Compañia from '../../Assets/img/compañia.png';
import Clientes from '../../Assets/img/clientes.png';
import Presentacion from '../../Assets/img/presentacion.png'


const Dashboard = () => {

  const user = useSelector(state => state.data);
  const [totalGanancias, setToalGanancias] = useState(0);
  const { nombre } = user.general;
  const { activos, certificados } = user.cursos;
  const { registrados } = user.estudiantes;

  const total = ()=>{

    let arrGanancias = [];

    user.ganancias.map( elem => {
      arrGanancias.push( parseInt(elem.total));
    })
    setToalGanancias( arrGanancias.reduce((accumulator, currentValue) => accumulator + currentValue ) )
  }
  
  useEffect(() => {
    total()
  }, [])

  return ( 
    <div className="dashboard">
      <h3 className='dashboard__title'>{`¡Hola ${nombre}, así van tus programas!`}</h3>
      <div className="calendar">
        <h1 className='calendar__title'>Vista general</h1>
        <div className="calendar__box">
          <div className='calendar__date'>
            <h5 className='calendar__dia'>23</h5>
            <p className='calendar__mes'>NOV</p>
          </div>
          <svg className='calendar__icon' xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53.5 53.5"><g transform="translate(-249.238 -156.68)"><g transform="translate(249.238 156.68)"><path className="a" d="M299.7,192.851a2.041,2.041,0,0,0,2.04-2.042V169.175a8.173,8.173,0,0,0-8.163-8.163h-2.653v-2.04a2.041,2.041,0,1,0-4.082,0v2.04h-9.286v-2.04a2.041,2.041,0,1,0-4.082,0v2.04h-9.185v-2.04a2.041,2.041,0,1,0-4.082,0v2.04h-2.552a8.173,8.173,0,0,0-8.163,8.163v31.839a8.172,8.172,0,0,0,8.163,8.163h35.921a8.172,8.172,0,0,0,8.163-8.163,2.041,2.041,0,0,0-4.082,0,4.086,4.086,0,0,1-4.082,4.082H257.651a4.086,4.086,0,0,1-4.082-4.082V169.175a4.087,4.087,0,0,1,4.082-4.082H260.2v2.042a2.041,2.041,0,0,0,4.082,0v-2.042h9.185v2.042a2.041,2.041,0,0,0,4.082,0v-2.042h9.286v2.042a2.041,2.041,0,0,0,4.082,0v-2.042h2.653a4.087,4.087,0,0,1,4.082,4.082v21.634A2.043,2.043,0,0,0,299.7,192.851Z" transform="translate(-248.862 -156.304)"/><path className="a" d="M294.049,210.18H257.927a8.7,8.7,0,0,1-8.689-8.689V169.474a8.7,8.7,0,0,1,8.689-8.689h2.086v-1.571a2.532,2.532,0,1,1,5.065,0v1.571h8.274v-1.571a2.533,2.533,0,1,1,5.067,0v1.571h8.376v-1.571a2.533,2.533,0,1,1,5.067,0v1.571h2.188a8.7,8.7,0,0,1,8.689,8.689v21.755a2.532,2.532,0,1,1-5.065,0V169.474a3.63,3.63,0,0,0-3.624-3.624h-2.188v1.573a2.533,2.533,0,0,1-5.067,0v-1.573h-8.376v1.573a2.533,2.533,0,0,1-5.067,0v-1.573h-8.274v1.573a2.532,2.532,0,0,1-5.065,0v-1.573h-2.086a3.63,3.63,0,0,0-3.624,3.624v32.017a3.63,3.63,0,0,0,3.624,3.624h36.122a3.63,3.63,0,0,0,3.624-3.624,2.532,2.532,0,0,1,5.065,0A8.7,8.7,0,0,1,294.049,210.18Zm-36.122-48.435a7.737,7.737,0,0,0-7.729,7.729v32.017a7.737,7.737,0,0,0,7.729,7.729h36.122a7.737,7.737,0,0,0,7.729-7.729,1.572,1.572,0,0,0-3.144,0,4.59,4.59,0,0,1-4.585,4.585H257.927a4.59,4.59,0,0,1-4.585-4.585V169.474a4.59,4.59,0,0,1,4.585-4.585h3.046v2.533a1.572,1.572,0,0,0,3.144,0v-2.533h10.195v2.533a1.573,1.573,0,0,0,3.146,0v-2.533h10.3v2.533a1.573,1.573,0,0,0,3.146,0v-2.533h3.148a4.59,4.59,0,0,1,4.585,4.585v21.755a1.572,1.572,0,1,0,3.144,0V169.474a7.737,7.737,0,0,0-7.729-7.729H290.9v-2.531a1.573,1.573,0,0,0-3.146,0v2.531h-10.3v-2.531a1.573,1.573,0,0,0-3.146,0v2.531H264.117v-2.531a1.572,1.572,0,1,0-3.144,0v2.531Z" transform="translate(-249.238 -156.68)"/></g></g></svg>
          <div className='calendar__text'>
            <span className='calendar__important'>Curso de fotografia de alimentos</span>
            <p className='calendar__parrafo'>Calificar actividad del modulo 2</p>
          </div>
        </div>
      </div>
      <div className="destacado">
        <div className="destacado__stacks">
          <div className="cardInfo">
            <h1 className='cardInfo__title'>{activos}</h1>
            <p className='cardInfo__parrafo'>Cursos Activos</p>
          </div>
          <div className="cardInfo ">
            <h1 className='cardInfo__title'>{user.oportunidades}</h1>
            <p className='cardInfo__parrafo'>Nuevas oportunidades</p>
          </div>
          <div className="cardInfo">
            <h1 className='cardInfo__title'>{registrados}</h1>
            <p className='cardInfo__parrafo'>Estudiantes registrados</p>
          </div>
          <div className="cardInfo">
            <h1 className='cardInfo__title'>{certificados}</h1>
            <p className='cardInfo__parrafo'>Certificados entregados</p>
          </div>
        </div>
        <div className="destacado__students">
          <p className='destacado__parrafo'>Tus estudiantes</p>
          <div className="destacado__grafico">
            <div className="destacado__grafico--fondo">
              <img src={Estudiante} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="options">
        <div className="options__ganancias">
          <div className="options__box-supp">
            <h3 className='options__title'>Ganancias reportadas:</h3>
            <div className="options__select">
              <select className='options__click' name="cars" id="cars">
                <option value="...">Filtro...</option>
                <option value="mes1">Último mes</option>
                <option value="mes2">Últimos 3 meses</option>
                <option value="mes3">Últimos 6 meses</option>
              </select>
            </div>
          </div>
          <div className="options__box-mid">
            <div className='options__box options__box--colum'>
              <h1 className='options__total'>{`$ ${totalGanancias}`}</h1>
              <p className='options__parrafo-total'>Ganacias totales</p>
            </div>
            <div className="options__box">
              <BarGrafic />
            </div>
          </div>
          <SliderPrice />
        </div>
        <div className="options__options">
          <div className='options__card'>
            <img className='options__img' src={Cursos} alt=""/>
            <p>Tus cursos</p>
          </div>
          <div className='options__card'>
            <img className='options__img' src={Estilos} alt=""/>
            <p>Personaliza tus estilos</p>
          </div>
          <div className='options__card'>
            <img className='options__img' src={Compañia} alt=""/>
            <p>Crea una campaña</p>
          </div>
          <div className='options__card'>
            <img className='options__img' src={Clientes} alt=""/>
            <p>Conoce tus clientes</p>
          </div>
        </div>
      </div>
      <h2 className='dashboard__title--700'>Conoce como crear...</h2>
      <div className="moreInfo">
        <div className='moreInfo_box'>
          <img src={Presentacion} alt=""/>
        </div>
        <div className="moreInfo__text">
          <h3 className='moreInfo__title'>Embudos de conversión</h3>
          <p className='moreInfo__parrafo'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi cum distinctio 
              commodi eos consequuntur eligendi magnam sequi voluptates, ex officiis consectetur
              debitis eveniet. Quam consequatur ut tempore dicta. Accusamus, ratione.</p>
          <button className='moreInfo__boton'>Inicia ahora</button>
        </div>
        <div></div>
      </div>
    </div>
   );
}
 
export default Dashboard;