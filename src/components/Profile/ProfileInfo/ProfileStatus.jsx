import React, {useEffect, useState} from "react";


const ProfileStatus = (props) => {

    let [localStatus, setLocalStatus] = useState(props.status)
    let [editMode, setEditMode] = useState(false);
    const updateStatus = () =>{
        setEditMode(false);
        props.updateStatus(localStatus);
    }

    useEffect(()=>{
        if(props.status !== localStatus) {
            setLocalStatus(props.status);
        }
    },[props.status])

    const setStatus = (e) => {
        setLocalStatus(e.target.value);
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onClick={() => {setEditMode(true)}}>{props.status || "No status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={updateStatus} onInput={setStatus} type="text" value={localStatus}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatus