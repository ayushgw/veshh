import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'

import './Categories.scss'

const Categories = ({ categories }) => {

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  )
}

export default Categories