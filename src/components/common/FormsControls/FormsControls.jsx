import React from "react";
import FC_classes from "./FormsControls.module.css"

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={FC_classes.formControl + ' ' + (hasError ? FC_classes.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={FC_classes.formControl + ' ' + (hasError ? FC_classes.error : '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}