// Card.js

import React, { useEffect, useState } from 'react';
import placeholderImage from './placeholder.png';
import UserGridView from '../UserGridView/UserGridView';
import ListView from '../ListView/ListView';
// import '..SelectedCandidates';import { useStateContext } from "../../Provider/contextProvider";
import { useStateContext } from "../../Provider/contextProvider";

const CardView = ({ view, ...props }) => {
  return (
    <div className={`${view}-container`}>
      {view === 'grid' ? <UserGridView {...props} /> : <ListView {...props} />}
    </div>
  );
};

const SelectedCandidates = ({storeData,data, setData}) => {
  const [isGrid, setIsGrid] = useState(true);
  const toggleView = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  if (!data || data.length === 0) return null;

  return (
    <>
      <button className='card-views' onClick={toggleView}>
        {isGrid ? <div><i className="fa fa-bars"></i></div> : <div><i className="fa fa-th-large"></i></div>}
      </button>
      {storeData.map((user, index) => (
        <CardView
          key={user.id}
          view={isGrid ? 'grid' : 'list'}
          index={index}
          selectedEmployee="selectedEmployee"
          setData={setData}
          data={data}
          // handleLikeBtn={handleLikeBtn}
          storeData={storeData}
          placeholderImage={placeholderImage}
          {...user}
        />
      ))}
    </>
  );
};

export default SelectedCandidates;
