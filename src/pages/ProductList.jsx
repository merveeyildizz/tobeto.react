import React from 'react'
import { useState, useEffect } from 'react'
import ProductService from '../services/productService'
import {
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableFooter,
    TableCell,
    TableBody,
    MenuItem,
    Icon,
    Label,
    Menu,
    Table,
    Button,
  } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {addToCart} from "../store/actions/cartActions"
import { toast } from 'react-toastify'

export default function ProductList() {


    const dispatch=useDispatch()

    const [products, setProducts] = useState([])

    useEffect (()=>{
      let productService= new ProductService()
      productService.getProducts().then(result => setProducts(result.data.products))
      
    },[])

    const handleAddToCart=(product) =>{
      dispatch(addToCart(product))
      toast.success(`${product.title} sepete eklendi!`)
    }

  return (
    <div>
        <Table celled>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Title</TableHeaderCell>
        <TableHeaderCell>Description</TableHeaderCell>
        <TableHeaderCell>Price</TableHeaderCell>
        <TableHeaderCell>Discount</TableHeaderCell>
        <TableHeaderCell>Rating</TableHeaderCell>
        <TableHeaderCell>Stock</TableHeaderCell>
        <TableHeaderCell>Brand</TableHeaderCell>
        <TableHeaderCell>Category</TableHeaderCell>
        <TableHeaderCell></TableHeaderCell>

      </TableRow>
    </TableHeader>

    <TableBody>
        {
           products.map((product) =>(
            <TableRow key={product.id}>
        <TableCell><Link to={`/products/${product.id}`}>{product.title}</Link></TableCell>
        <TableCell>{product.description}</TableCell>
        <TableCell>{product.price}</TableCell>
        <TableCell>{product.discountPercentage}</TableCell>
        <TableCell>{product.rating}</TableCell>
        <TableCell>{product.stock}</TableCell>
        <TableCell>{product.brand}</TableCell>
        <TableCell>{product.category}</TableCell>
        <TableCell><Button onClick={()=>handleAddToCart(product)}>Sepete Ekle</Button></TableCell>
      </TableRow>

           )) 
        }
      
    </TableBody>

    <TableFooter>
      <TableRow>
        <TableHeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <MenuItem as='a' icon>
              <Icon name='chevron left' />
            </MenuItem>
            <MenuItem as='a'>1</MenuItem>
            <MenuItem as='a'>2</MenuItem>
            <MenuItem as='a'>3</MenuItem>
            <MenuItem as='a'>4</MenuItem>
            <MenuItem as='a' icon>
              <Icon name='chevron right' />
            </MenuItem>
          </Menu>
        </TableHeaderCell>
      </TableRow>
    </TableFooter>
  </Table>
    </div>
  )
}
