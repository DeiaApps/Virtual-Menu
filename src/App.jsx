import React from 'react'
import './App.css'
import restaurantImg from './assets/restaurant.webp'
import Navigation from './Navigation'
import MenuItem from './MenuItem'
import { mainCourse, desserts, beverages } from './menu'

function App() {
  const menuPages = [ mainCourse, desserts, beverages ]
  const [selectedPage, changeSelectedPage] = React.useState( 0 )

  return(
    <>
      <img src={ restaurantImg } className='cover'/>
      <Navigation changeSelectedPage = { changeSelectedPage } />
      <div className='menu'>
        {menuPages[selectedPage].map((dish) => (
          <MenuItem
           name={ dish.name }
           price={ dish.price }
           description={ dish.description }
           image={ dish.image }
          />
        ))}
      </div>    
    </>
  )
}

export default App
