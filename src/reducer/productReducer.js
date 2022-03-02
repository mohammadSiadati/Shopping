export const productListReducer = (state = { products: [] }, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'PRODUCT-LIST-REQUEST':
            return {loading: true, products: []}
        case 'PRODUCT-LIST-SUCCES':
            return {loading: false, products: action.payload}
        default:
            return state
    }
}

export const productDetailReducer = (state = { product: {} }, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'PRODUCT-DETAIL-REQUEST':
            return {loading: true, ...state}
        case 'PRODUCT-DETAIL-SUCCES':
            return {loading: false, product: action.payload}
        default:
            return state
    }
}


