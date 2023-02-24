let cart = []
export const CartReducer = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case 'ADDITEM':
            // check if item is already here
            const exist = state.some(item => item.id == product.id)
            if (exist) {
                console.log('here')
                return state.map((item) =>
                    item.id === product.id ? { ...item, qun: item.qun + 1 } : item)
            } else {
                return [
                    ...state, {
                        ...product,
                        qun: 1
                    }
                ]
            }
            break;

        case 'DELITEM':

            return state.filter(item => item.id !== product.id)

            break;
        case 'DECREASE':
            let clicked = state.find(item => item.id === product.id)

            if (clicked.qun === 1) {
                clicked.qun = 1
            } else {
                clicked.qun -= 1
            }
            return state.map((item) =>
                item.id === clicked.id ? { ...item, qun: item.qun-- } : item)

            break
        case 'INCREASE':
            let clicked2 = state.find(item => item.id === product.id)

            clicked2.qun += 1
            return state.map((item) =>
                item.id === clicked2.id ? { ...item, qun: item.qun++ } : item)

            break
        default:
            return state
            break;
    }
}