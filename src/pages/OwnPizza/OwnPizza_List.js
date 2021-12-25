import React, {useState} from 'react';

const OwnPizza_List = ({ list, removeItem, editItem}) => {

    return(

        <div className='own-list'>
            {list.map((item)=>{
                const {id, title} = item;
                return(
                    <article className='own-item' >
                        <p className='ingredient-title'>
                            {title}
                        </p>
                        <div>
                            <button type='button' className='own-edit-btn' onClick={()=>editItem(id)}><i className="fas fa-edit"></i></button>
                            <button type='button' className='own-delete-btn'onClick={()=>removeItem(id)}><i className="fas fa-trash"></i></button>
                        </div>
                    </article>
                )
            })}

        </div>
    )
}
export default OwnPizza_List;