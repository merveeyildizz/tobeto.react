import React from 'react'
import Navi from './Navi'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Route,Routes } from 'react-router-dom'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'
import ProductAdd from '../pages/ProductAdd'
export default function Dashboard() {

  return (
    <div>
      <ToastContainer position='bottom-right'/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          <Categories/>
          </Grid.Column>

          <Grid.Column width={12}>
          <Routes>
          <Route exact path='/' Component={ProductList}></Route>
          <Route path='/products' Component={ProductList}></Route>
          <Route path='/products/:id' Component={ProductDetail}></Route>
          <Route path='/cart' Component={CartDetail}></Route>
          <Route path='/product/add' Component={ProductAdd}></Route>


          </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      
      
      
    </div>
  )
}
