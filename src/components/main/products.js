import { memo, useContext } from "react"
import { FilterContext } from "./main"

import Product from "./product"

function Products() {
  const listProDuct = useContext(FilterContext)
  return (
    <div className="products l-9">
      <div className="product-list flex">
        {listProDuct.map((e, id) => <Product product={e} key={id} />)}
      </div>
    </div>
  )
}

export default Products = memo(Products)