import { memo } from "react"

import { IMG_URL } from "../../../config/globalConfigs"
import { vndConvert } from "../../../logic/global"
import ProductPromotion from "./ProductPromotion"

function Product({ product, attrs, promotionItems, isGridDisplay }) {
  const progress = product.productVariant.price * 100 / product.productVariant.priceMarket

  let gridCss = isGridDisplay ? 'l-4 relative c-6' : 'l-12 flex'
  let productCss = isGridDisplay ? "product grid l-12 flex" : "product list l-12 flex"
  let productImgCss = isGridDisplay ? "product-img flex" : "product-img flex l-4"
  let productPriceCss = isGridDisplay ? "product-price" : "product-price l-4"
  let productShowPromoCss = isGridDisplay ? "product-show-promo flex js-between" : "product-show-promo "

  return (
    <div className={gridCss}>
      <div className={productCss}>
        <div className={productImgCss}>
          <a href="#">
            <img src={`${IMG_URL}${product.urlPicture}`} />
          </a>
          {isGridDisplay && <ProductSaleBag product={product} isGridDisplay={isGridDisplay} />}
        </div>

        <div className={productPriceCss}>

          {!isGridDisplay && <ProductSaleBag product={product} isGridDisplay={isGridDisplay} />}

          <h3>
            <a href="#">
              {product.name}
            </a>
          </h3>
          <div className={productShowPromoCss}>
            <div className="progress-bar" >
              {vndConvert(product.productVariant.price)} ₫
              <div
                className="progress"
                style={{ width: `${progress}%` }}
              >
              </div>
            </div>

            <div className="strike-price">
              <div className="strike">
                {vndConvert(product.productVariant.priceMarket)} ₫
              </div>
              <div className="cd">0 ngày 00:58:53</div>
            </div>
          </div>

          <div className="product-info">
            <div className="product-parameter flex" >
              {attrs.map(
                (attr, i) =>
                  <span
                    key={i}
                  >
                    <i className={attr.cssClass} ></i>
                    {attr.specName}
                  </span>
              )}
            </div>
          </div>
        </div>

        <ProductPromotion promotions={promotionItems} isGridDisplay={isGridDisplay} />

        <div className="product-btn">
          <a href="#" className="btn product-btn-buy btn-primary"> Mua Ngay</a>
          <a href="#" className="btn product-btn-compare"> So Sánh</a>
        </div>
      </div>

    </div >
  )
}

export default Product = memo(Product)

const ProductSaleBag = memo(({ product, isGridDisplay }) => {
  let productSaleCss = isGridDisplay ? "product-sale flex only-pc" : "product-sale"

  return (
    <div className={productSaleCss}>
      <span className="badge badge-warning">{product.labelInst}</span>
      <span className="badge badge-primary">{product.labelFlashSale}</span>
    </div>
  )
})