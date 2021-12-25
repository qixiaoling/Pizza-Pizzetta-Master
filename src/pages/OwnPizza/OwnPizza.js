import react, {useEffect, useState} from 'react';
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import './OwnPizza.css';
import OwnPizza_List from "./OwnPizza_List";
import OwnPizza_Alert from "./OwnPizza_Alert";
import Modal from "../../Component/Modal";
import React from "react";

const getLocalStorage = () => {
    let listLS = localStorage.getItem('list');
    if (listLS) {
        return listLS = JSON.parse(localStorage.getItem('list'))
    }else {
        return [];
    }
}
function OwnPizza() {
    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [alert, setAlert] = useState({show : false, type:'', msg: '' });
    const [editID, setEditID] = useState(null);
    const [editFlag, setEditFlag] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!name) {
            showAlert(true, 'danger', 'Sorry, cannot enter empty value.');
        }
        else if(name && !editFlag) {
            showAlert(true, 'success', 'Item is added')
            const newItem = {id: new Date().getTime().toString(), title: name};
            setList([...list, newItem]);
            setName('');
        }
        else {
            showAlert(true, 'success', 'Item is edited');

            const newList = list.map((item)=>{
                if(item.id === editID) {
                    return {...item, title:name};/*if id matches, return this object with all
                    other property the same, but change the property of "title"
                    Do not write: return item.title = name, it will change whole item object
                    into this string of "name".*/
                }

                return item;
            })
            setList(newList);
            setName('');
            setEditFlag(false);
            setEditID(null);



        }
    }
    const showAlert = (showReal = false, typeReal= '', msgReal = '' ) => {
        setAlert({show: showReal, type: typeReal, msg: msgReal} ); /*when property name is same as variable name, could just write one*/

    }
    const editItem = (id) => {
        const specificItem = list.find((item)=> item.id === id);
        setName(specificItem.title);
        setEditFlag(true);
        setEditID(id);

    }
    const removeItem = (id) => {
        showAlert(true, 'success', 'Item is removed')
        let newList = list.filter((item)=>{
           if(item.id!==id) {
               return item;
           }
        })
        setList(newList);
    }
    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(list));
    },[list])

    const clearItems = () => {
        showAlert(true, 'success', 'Items are deleted')
        setList([]);
    }
    return(
        <div className="page-pizza">
            <Navbar/>
            <section className='own-section'>
                <div className='own-body'>
                    <div className='own-title'>
                        <h2>Mix Up Your Own Pizza</h2>
                    </div>
                    <form className='own-form'>
                        {alert.show && <OwnPizza_Alert {...alert} showAlert = {showAlert} list= {list} className='own-alarm'/>}
                        <div className='form-control'>
                            <input id='ingredient' type='text' placeholder='e.g eggs' value={name} onChange={(e)=>setName(e.target.value)}/>
                            <button type='submit' className='submit-btn' onClick={onSubmit}>{editFlag? 'Edit' : 'Submit' }</button>
                        </div>
                    </form>
                    {list.length>0 &&(
                        <div className='own-content-container'>

                            <OwnPizza_List list= {list} editItem = { editItem} removeItem={removeItem} />

                            <button type='button' className='own-clear-btn' onClick={clearItems}>
                                clear items
                            </button>
                        </div>
                    )}


                </div>
            </section>
            <Modal/>
            <Footer/>
        </div>

    )
}
export default OwnPizza;