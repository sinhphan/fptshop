import { memo, useState } from "react"
import { IMG_URL } from "../../config/globalConfigs"

function ProductPromotion({ promotions, isGridDisplay }) {

  return (
    <>
      {isGridDisplay && <ProductPromotionGrid promotions={promotions} />}
      {!isGridDisplay && <ProductPromotionList promotions={promotions} />}

    </>
  )
}

export default ProductPromotion = memo(ProductPromotion)

const ProductPromotionGrid = memo(({ promotions }) => {
  const [currentPromotionId, setCurrentPromotionId] = useState(0)


  const hanldeHoverPromo = e => {
    setCurrentPromotionId(+e.currentTarget.dataset.promoId)
  }

  return (
    <div className="product-promo flex js-evenly" >
      {promotions.map((promotion, index) => {
        let promoActiveCss = currentPromotionId === index ? "product-promo-item active" : "product-promo-item"

        return (
          <span
            key={index}
            className={promoActiveCss}
            data-promo-id={index}
            onMouseOver={hanldeHoverPromo}
          >
            <div >
              <img
                src={`${IMG_URL}${promotion.urlPicture}`}
              />
            </div>
          </span>
        )
      }
      )
      }
      <div className="cdt-product__text-promo">{promotions[currentPromotionId].promotionName}</div>
    </div >
  )
})


const ProductPromotionList = memo(({ promotions }) => {
  return (
    <div className="l-4">
      {
        promotions.map((promotion, index) => {

          return (
            <div className="product-promo list flex" >

              <span
                key={index}
                data-promo-id={index}
                className='l-2 product-promo-item'
              >
                <div >
                  <img
                    src={`${IMG_URL}${promotion.urlPicture}`}
                  />
                </div>
              </span>
              <div className="cdt-product__text-promo l-10">{promotion.promotionName}</div>
            </div >

          )
        }
        )
      }
    </div>
  )
})