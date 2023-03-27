import { memo } from "react"
import { IMG_URL } from "../../config/globalConfigs"

function ProductPromotion({ promotions }) {
  // console.log(promotions);
  return (
    <div className="product-promo flex js-evenly" >
      {promotions.map((promotion, index) => (
        <span key={index} className="product-promo-item active">
          <div >
            <img
              src={`${IMG_URL}${promotion.urlPicture}`}
            />
          </div>
        </span>
      )
      )}
      <div id="plistppromotion43737" className="cdt-product__text-promo">Giảm ngay 5% tối đa 500.000Đ qua Kredivo</div>
    </div>
  )
}

export default ProductPromotion = memo(ProductPromotion)