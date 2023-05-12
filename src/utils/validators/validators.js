



export const required = (value) => value ? undefined : "Field is required"
export const maxLengthCreator = (length) => (value) => {
    if(value){
        return value.length > length ? `Max length is ${length} symbols` : undefined;
    }
    return undefined;
}



