import { memo, useContext } from "react"
import { FilterContext } from "./main"

import Product from "./product"
import ProductNotFound from "./productNotFound"
import ProductsFilterNavigation from "./productsFilterNavigation"
import ViewMoreButton from "./viewMoreButton"

function Products() {
  const productData = useContext(FilterContext)

  const totolProuctsFiltered = productData.listDefault.list.length

  return (
    <div className="products">

      {totolProuctsFiltered !== 0 && <ProductsFilterNavigation />}

      {totolProuctsFiltered !== 0 &&

        (<div className="product-list flex">
          {productData.listDefault.list.map((e, id) => {
            const attributeSpecItems = productData.attributeSpecItems.filter(
              (attr) => attr.productID == e.id
            )

            const skus = productData.promotionItems.filter(promotion => promotion.sku == e.productVariant.sku)

            // console.log('Products : promotionItems ', skus);
            return <Product product={e} key={id} attrs={attributeSpecItems} promotionItems={skus} />
          })}
        </div>)
      }

      {totolProuctsFiltered === 0 && <ProductNotFound />}
      {totolProuctsFiltered >= 27 && <ViewMoreButton />}
    </div>
  )
}

export default Products = memo(Products)