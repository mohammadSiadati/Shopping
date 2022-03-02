import axios from "axios"


export const productListAction = () => async (dispatch) => {
    try{
        dispatch({type: 'PRODUCT-LIST-REQUEST'})

        const {data} =  await axios.get('http://localhost:8000/api/products')
        
        dispatch({
            type: 'PRODUCT-LIST-SUCCES',
            payload: data
        })
    } catch (err) {
        console.log(err)
    }
}

export const productDetailAction = (id) => async (dispatch) => {
    try{
        dispatch({type: 'PRODUCT-DETAIL-REQUEST'})

        const {data} =  await axios.get(`http://localhost:8000/api/products/${id}`)
        
        dispatch({
            type: 'PRODUCT-DETAIL-SUCCES',
            payload: data,

        })
    } catch (err) {
        console.log(err)
    }
}