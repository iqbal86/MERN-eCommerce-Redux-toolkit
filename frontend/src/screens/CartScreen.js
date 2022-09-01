import { useEffect, useRef, useState } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  Image,
  Button,
  Card,
  ListGroup,
  Form,
  ListGroupItem,
} from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../features/cart/cartSlice'

function CartScreen() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const effectRan = useRef(false)

  const qtyFromStorage = JSON.parse(localStorage.getItem('qty'))
  const { cartItems } = useSelector((state) => state.cart)

  const location = useLocation()
  // const qtyInUrl = new URLSearchParams(location).get('qty')
  // const urlQty = qtyInUrl ? Number(qtyInUrl) : 1
  const urlQty = location.search ? Number(location.search.split('=')[1]) : 1
  const [qty, setQty] = useState(urlQty)

  // const { id } = useParams()

  // const { product } = useSelector((state) => state.productDetails)

  // const temp = {
  //   totalQuantity,
  //   totalPrice,
  // }
  // localStorage.setItem('total', JSON.stringify(temp))

  // const { cartItems } = cart

  // useEffect(() => {
  //   if (effectRan.current === false) {
  //     // dispatch(addToCart(id))

  //     // dispatch(displayCart(cartItems.id))

  //     return () => {
  //       effectRan.current = true
  //     }
  //   }
  // }, [dispatch])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkOutHandler = () => {
    navigate('/login?redirect=shipping')
  }

  console.log(cartItems)

  // const onChange = (e) => {
  //   setQty((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: Number(e.target.value),
  //   }))
  // }

  return (
    <Row>
      <Col md={8}>
        <h1 className="shopping-cart-heading">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((product) => (
              <ListGroupItem key={product._id}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${product._id}`}>{product.name}</Link>
                  </Col>
                  <Col md={2}>${product.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={product.qty}
                      onChange={(e) => (
                        setQty(Number(e.target.value)),
                        dispatch(addToCart({ ...product, qty }))
                      )}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(product._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2 className="subtotal">
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroupItem>
            <ListGroupItem>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkOutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
