import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dropdown,DropdownMenu,DropdownItem, Label } from 'semantic-ui-react'

export default function CartSummary() {

 const {cartItems}= useSelector(state => state.cart)
  return (
    <div> 
    <Dropdown item text='Sepetiniz'>
    <DropdownMenu>
      {
        cartItems.map((cartItem)=>(
          <DropdownItem>
            {cartItem.product.title}
            <Label>
              {cartItem.quantity}
            </Label>
          </DropdownItem>
        ))
      }
      
      <Dropdown.Divider/>
      <DropdownItem as={NavLink} to="/cart" >Sepete Git</DropdownItem>
    </DropdownMenu>
  </Dropdown>
  </div>
  )
}
