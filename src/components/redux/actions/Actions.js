export const addCart = (product) => {
    return {
        type: 'ADDITEM',
        payload: product
    }
}

export const delCart = (product) => {
    return {
        type: 'DELITEM',
        payload: product
    }
}
export const IncCart = (product) => {
    return {
        type: 'INCREASE',
        payload: product
    }
}
export const DecCart = (product) => {
    return {
        type: 'DECREASE',
        payload: product
    }
}