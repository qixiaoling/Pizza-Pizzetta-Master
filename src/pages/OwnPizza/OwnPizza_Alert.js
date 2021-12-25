import React, {useEffect} from "react";


function OwnPizza_Alert({type, list, showAlert, msg}) {
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            showAlert();
        }, 3000);
        return ()=>clearTimeout(timeOut);
    }, [list])
    return (
        <p className={`own-alert own-alarm-${type}` }>
            {msg}
        </p>
    )
}
export default OwnPizza_Alert;