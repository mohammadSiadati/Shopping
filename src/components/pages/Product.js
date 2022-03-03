import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'

import {productDetailAction} from '../../action/productAction'

const Product = ({ history, match }) => {
  const dispatch = useDispatch()
  const productDetail = useSelector((state) => state.productDetail ) 
  const {loading, product} = productDetail

  useEffect(() => {
    dispatch(productDetailAction(match.params.id))

},[dispatch, match])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}`)
  }

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        بازگشت به صفحه اصلی
      </Link>
      {loading ? <h3>در حال دریافت محصول...</h3> : 
        <Row>
        <Col md={6}>
          <Image src={product.image} fliud />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item variant="warning">
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item variant="danger">{product.price}</ListGroup.Item>
            <ListGroup.Item variant="success">{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Button onClick={addToCartHandler} className="btn btn-outline-info" type="button">
                افزودن به سبد خرید
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      }
    </div>
  )
}

export default Product
