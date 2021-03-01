import React from 'react';
import { useHistory } from "react-router-dom";
/* Import Nav */
import NavMenu from '../NavMenu/NavMenu';
import InfoSupp from './InfoSupp';
import Dashboard from './Dashboard';
/* estilos */
import '../../Sass/screenUi.scss';

const ScreenUi = () => {

  const history = useHistory();

  const handleLogOut = ()=>{
    history('/Log')
  }

  return ( 
    <div className='container-user'>
      <InfoSupp handleLogOut={handleLogOut} />
      <NavMenu />
      <Dashboard  />
    </div>
   );
}
 
export default ScreenUi;