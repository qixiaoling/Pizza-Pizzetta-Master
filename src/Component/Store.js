import React, {useState} from 'react';
import './Store.css';
import data from "../Assets/StoreData";

function Store() {
    const [stores, setStores] = useState(data);
    const [value, setValue] = useState(0);
    const {id, name, address, phone, feature} = stores[value];
    return (
        <div className='store-container'>
            <div className='store-title'>
                <h2>Where to find us</h2>
            </div>
            <div className='store-content'>
                <div className='store-btn-container'>
                    {stores.map((store, index) => {
                        return (
                            <button
                                key={store.id}
                                className={`store-btn ${index === value && 'active-btn'}`}
                                onClick={() => setValue(index)}
                            >
                                {store.name}
                            </button>
                        )
                    })}
                </div>
                <div className='store-info-container'>
                    <div className='store-info'>
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>{address}</h3>
                    </div>
                    <div className='store-info'>
                        <i className="fas fa-phone-alt"></i>
                        <h3>{phone}</h3>
                    </div>
                    <div className='store-desc'>
                    {feature.map((feat, index)=>{
                        return(
                            <div className='desc' key={index}>
                                <i className="fas fa-angle-double-right"></i>
                                <p> {feat}
                                </p>
                            </div>
                        )
                    })}
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default Store