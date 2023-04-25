



export const required = (value) => value ? undefined : "Field is required"
export const maxLengthCreator = (length) => (value) => value.length > length ? `Max length is ${length} symbols` : undefined;



