// Card.js

import React, { useEffect, useState } from 'react';
import fetchData from '../api';  // Import the fetchData function
import placeholderImage from './placeholder.png';
import UserGridView from '../UserGridView/UserGridView';
import { useStateContext } from "../../Provider/contextProvider";
import ListView from '../ListView/ListView';
import './Card.css';
import { Link } from 'react-router-dom';
const CardView = ({ view, ...props }) => {
  return (
    <div className={`${view}-container`}>
      {view === 'grid' ? <UserGridView {...props} /> : <ListView {...props} />}
    </div>
  );
};

const Card = ({storeData,setStoreData}) => {
  const { data, setData, } = useStateContext()
  const [isGrid, setIsGrid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleView = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  const handleLikeBtn = (index, e) => {
    const val = data[index];
    if (e.target.checked && !storeData.includes(val)) {
      setStoreData((prevData) => [...prevData, val]);
    } else {
      setStoreData((prevData) => prevData.filter((item) => item !== val));
    }
    console.log(storeData);

  };

  useEffect(() => {
    const fetchDataAndCache = async () => {
      setLoading(true);
      setError(null);
      try {
        const cachedData = await fetchData();
        setData(cachedData);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndCache();
  }, []);;

  if (!data || data.length === 0) return null;

  return (
    <>
      <button className='card-views' onClick={toggleView}>
        {isGrid ? <div><i className="fa fa-bars"></i></div> : <div><i className="fa fa-th-large"></i></div>}
      </button>
      {loading ? <div className="loading-container">
      <div className="loading-spinner"></div>
    </div> :
    <>
      {data.map((user, index) => (
        <CardView
          key={user.id}
          view={isGrid ? 'grid' : 'list'}
          index={index}
          handleLikeBtn={handleLikeBtn}
          storeData={storeData}
          setData={setData}
          data={data}
          placeholderImage={placeholderImage}
          {...user}
        />
      ))}
      </>
    }
    </>
  );
};

export default Card;
