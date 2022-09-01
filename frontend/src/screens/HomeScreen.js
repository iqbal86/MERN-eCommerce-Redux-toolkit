import { useState, useEffect, useRef } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../features/productList/productListSlice'
import Message from '../components/Message'
import Loader from '../components/Loader'

function HomeScreen() {
  const { isLoading, isError, products, message } = useSelector(
    (state) => state.productList,
  )

  const dispatch = useDispatch()
  const effectRan = useRef(false)

  useEffect(() => {
    if (effectRan.current === false) {
      dispatch(listProducts())
      console.log('effect ran')
      return () => {
        effectRan.current = true
        console.log(`unmounted`)
      }
    }
  }, [dispatch])

  return (
    <>
      <h1>Latest Products</h1>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message>{message}</Message>
      ) : (
        <Row>
          {products.map((product, i) => (
            <Col key={i} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
