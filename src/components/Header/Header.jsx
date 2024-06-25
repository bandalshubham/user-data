import React, { PureComponent,useState } from 'react'
import '../Header/Header.css'
// import { Card } from './Card';
import { useStateContext } from "../../Provider/contextProvider.js";
import { useNavigate } from 'react-router-dom';

const Header = ({storeData,data}) => {
  const [activePath, setActivePath] = useState('/');
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    setActivePath(path);
    navigate(path); // or any other path
  };

  return (
    <div className="header-container">
      <div className={`box-content total-e ${activePath === '/' ? 'selected-box' : ''}`}  onClick={()=>handleNavigation('/')} >
        <span className="big"><i className="fa fa-database" aria-hidden="true"></i></span>
        <div className="h-content">
          <span className='text-content'>{data.length}</span>
          <span className='text-content'>Total Employment</span>
        </div>
      </div>
      <div className={`box-content selected-e ${activePath === '/selected' ? 'selected-box' : ''}`} onClick={()=>handleNavigation('/selected')}>
        <span className="big"><i className="fa fa-thumbs-up"></i></span>
        <div className="h-content">
          <span className='text-content'>{storeData.length}</span>
          <span className='text-content'>Selected Employee</span>
        </div>

      </div>
    </div>

  )
}
export default Header