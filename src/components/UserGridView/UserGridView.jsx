import React from 'react';
import Popup from 'reactjs-popup';
import './UserGridView.css'
const UserGridView = ({ index, id, avatar,data, storeData, placeholderImage, first_name, phone_number, last_name, email, employment, address, subscription, date_of_birth, social_insurance_number, handleLikeBtn, likeButtonColors,selectedEmployee }) => {
   const isTagTermSelected=()=>{
    const existingTag = storeData.find((item) => item.id === id);
    return (
      existingTag 
    );

   }
    return (
        <div key={index} className="card-container">
            <div className="p-heading-section">
                <div className="profile-pic">
                    <img
                        className="round"
                        src={avatar}
                        alt="user"
                        style={{ height: '65px', width: '65px' }}
                        loading="lazy"
                        onError={(e) => { e.target.src = placeholderImage; }}
                    />
                </div>
                <div className="p-heading-info">
                    <div className='p-name'>{`${first_name} ${last_name}`}</div>
                    <div className='p-emp-title'>{employment?.title}</div>
                    <div className='p-emp-title'>{id}</div>

                </div>
            </div>
            <hr className='space-top' />
            <div className="p-info-body">
                <div className='p-mail'> <strong><i className="fa fa-envelope"></i> </strong><a href={`mailto:${email}`}>{email}</a></div>
                <div className="p-phone"><strong><i className="fa fa-phone"></i></strong> {phone_number}</div>
            </div>
            <div className="buttons">
                <Popup

                    trigger={<button className="primary">Address</button>}
                    modal
                    nested
                >
                    {close => (
                        <div className="modal">
                            <div className="content">
                                <h2 className="modal__title">Address</h2>
                            </div>
                            <div className="address-details">
                                <div className="address-info"><strong>Name: </strong>{`${first_name} ${last_name}`}</div>
                                <div className="address-info"><strong>City: </strong>{address?.city}</div>
                                <div className="address-info"><strong>Street Name: </strong>{address?.street_name}</div>
                                <div className="address-info"><strong>Street Address: </strong>{address?.street_address}</div>
                                <div className="address-info"><strong>Zip Code: </strong>{address?.zip_code}</div>
                                <div className="address-info"><strong>State: </strong>{address?.state}</div>
                                <div className="address-info"><strong>Country: </strong>{address?.country}</div>
                                <div className="address-info"><strong>Coordinates: Lat: </strong>{address?.coordinates.lat}, Lng: {address?.coordinates.lng}</div>
                            </div>
                            <div className="close-btn" onClick={close}></div>
                        </div>
                    )}
                </Popup>
                <Popup
                    trigger={<button className="primary ghost">Subscription</button>}
                    modal
                    nested
                >
                    {close => (
                        <div className="modal model.sub-info">
                            <div className="content">
                                <h2 className="modal__title">Subscription</h2>
                            </div>
                            <div className="sub-details">
                                <p className="sub-info"><strong>Name: </strong>{`${first_name} ${last_name}`}</p>
                                <p className="sub-info"><strong>Plan: </strong>{subscription?.plan}</p>
                                <p className="sub-info"><strong>Status: </strong>{subscription?.status}</p>
                                <p className="sub-info"><strong>Payment Method: </strong>{subscription?.payment_method}</p>
                                <p className="sub-info"><strong>Term: </strong>{subscription?.term}</p>
                            </div>
                            <div className="close-btn" onClick={close}></div>
                        </div>
                    )}
                </Popup>
            </div>
            {selectedEmployee ? "" :
            <>
            <h6 className="sin">SIN: {social_insurance_number}</h6>
            <div className="skills">
                <h6>Skills</h6>
                <div className="bookmark-container">
                    <h6>{employment?.key_skill}</h6>
                    <div onClick={(e) => handleLikeBtn(index, e)} className="btn-like">
                        <input checked = {isTagTermSelected()} type="checkbox" name="checkbox" />
                    </div>
                </div>
            </div>
            </>
}
        </div>
    );
};

export default UserGridView;
