import React from 'react'
import Category from '../Category/Category'

import './Catalogue.scss'

const Catalogue = ({ categories }) => {

  return (
    <div className="catalogue-container">
      {categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </div>
  )
}

export default Catalogue