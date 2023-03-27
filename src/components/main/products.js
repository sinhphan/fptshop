import { memo, useContext } from "react"
import { FilterContext } from "./main"

import Product from "./product"

function Products() {
  const productData = useContext(FilterContext)

  return (
    <div className="products l-9">
      <div className="product-list flex">
        {productData.listDefault.list.map((e, id) => {
          const attributeSpecItems = productData.attributeSpecItems.filter(
            (attr) => attr.productID == e.id
          )

          const skus = productData.promotionItems.filter(promotion => promotion.sku == e.productVariant.sku)

          // console.log('Products : promotionItems ', skus);
          return <Product product={e} key={id} attrs={attributeSpecItems} promotionItems={skus} />
        })}
      </div>
    </div>
  )
}

export default Products = memo(Products)