import React from 'react';
import Popup from 'reactjs-popup'; // Import the Popup component if you haven't already
import './ListView.css'; // Import your CSS file for styling if needed

const ListView = ({ id, employment, avatar,placeholderImage, address, subscription, index, first_name, last_name, email, handleAddressPopup, handleSubscriptionPopup }) => {
    return (
        <div className="user-line">
            <div className="user-icon">
                <img
                    // className="round"
                    src={avatar}
                    style={{ height: '33px', width: '33px' }}
                    alt="user"
                    loading="lazy"
                    onError={(e) => { e.target.src = placeholderImage; }} />
            </div>
            <div className="user-info">
                {/* <div className="list-user-id">id: {id}</div> */}
                <div>{`${first_name} ${last_name}`}</div>
                <p className="email">
                    <a href={`mailto:${email}`}>{email}</a>
                </p>
                <p className="employment"> {employment?.title}</p>
            </div>

            <div className="list-view-buttons">
                <Popup
                    trigger={<button className="button-81">View Details</button>}
                    modal
                    nested
                >
                    {close => (
                        <div className="modal">
                            <div className="content">
                                <h2 className="modal__title">Address</h2>
                            </div>
                            <div className="address-details">
                                <p className='modal__title'><strong>Name: </strong>{`${first_name} ${last_name}`}</p>
                                <p><strong>City: </strong>{address?.city}</p>
                                <p><strong>Street Name: </strong>{address?.street_name}</p>
                                <p><strong>Street Address: </strong>{address?.street_address}</p>
                                <p><strong>Zip Code: </strong>{address?.zip_code}</p>
                                <p><strong>State: </strong>{address?.state}</p>
                                <p><strong>Country: </strong>{address?.country}</p>
                                <p><strong>Coordinates: Lat: </strong>{address?.coordinates.lat}, Lng: {address?.coordinates.lng}</p>
                            </div>
                            <div className="content">
                                <h2 className="modal__title">Subscription</h2>
                            </div>
                            <div className="subscription-details">
                                <p><strong>Name: </strong>{`${first_name} ${last_name}`}</p>
                                <p><strong>Plan: </strong>{subscription?.plan}</p>
                                <p><strong>Status: </strong>{subscription?.status}</p>
                                <p><strong>Payment Method: </strong>{subscription?.payment_method}</p>
                                <p><strong>Term: </strong>{subscription?.term}</p>
                            </div>

                            <div className="close-btn" onClick={close}></div>
                        </div>
                    )}
                </Popup>

                {/* <Popup
                    trigger={<button className="primary ghost">Subscription</button>}
                    modal
                    nested
                >
                    {close => (
                        <div className="modal">
                            <div className="content">
                                <h2 className="modal__title">Subscription</h2>
                            </div>
                            <div className="address-details">
                                <p><strong>Name: </strong>{`${first_name} ${last_name}`}</p>
                                <p><strong>Plan: </strong>{subscription?.plan}</p>
                                <p><strong>Status: </strong>{subscription?.status}</p>
                                <p><strong>Payment Method: </strong>{subscription?.payment_method}</p>
                                <p><strong>Term: </strong>{subscription?.term}</p>
                            </div>
                            <div className="close-btn" onClick={close}></div>
                        </div>
                    )}
                </Popup> */}
            </div>
        </div>
    );
};

export default ListView;