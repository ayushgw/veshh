import React from 'react'
import Category from '../Category/Category'

import { CatalogueStyled } from './styles'

const Catalogue = ({ categories }) => {

  return (
    <CatalogueStyled>
      {categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </CatalogueStyled>
  )
}

export default Catalogue