import { memo } from "react"
import { IMG_URL } from "../../config/globalConfigs"
import { vndConvert } from "../../logic/global"
import ProductPromotion from "./productPromotion"

function Product({ product, attrs, promotionItems }) {

  const progress = product.productVariant.price * 100 / product.productVariant.priceMarket

  return (
    <div className="l-4 relative">
      <div className="product">
        <div className="product-img flex">
          <a href="#">
            <img src={`${IMG_URL}${product.urlPicture}`} />
          </a>
          <div className="product-sale flex">
            <span className="badge badge-warning">{product.labelInst}</span>
            <span className="badge badge-primary">{product.labelFlashSale}</span>
          </div>
        </div>

        <div className="product-price" >
          <h3>
            <a href="#">
              {product.name}
            </a>
          </h3>
          <div className="product-show-promo flex js-between" >
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
        </div>

        <div className="product-info">
          <div className="product-parameter flex" >
            {attrs.map(
              (attr, i) =>
                <span
                  key={i}
                >
                  <i class={attr.cssClass} ></i>
                  {attr.specName}
                </span>
            )}
          </div>
          <ProductPromotion promotions={promotionItems} />
        </div>

        <div className="product-btn">
          <a href="#" className="btn product-btn-buy btn-primary"> Mua Ngay</a>
          <a href="#" className="btn product-btn-compare"> So Sánh</a>
        </div>
      </div>

    </div>
  )
}

export default Product = memo(Product)