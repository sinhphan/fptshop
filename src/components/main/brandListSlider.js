import { memo } from "react"
import { DATA } from "../../asset/data/data"
import { IMG_URL } from "../../config/globalConfigs"

const brandList = DATA.navFilter.listCategory.filter(e => e.parentID === 299)

function BrandListSlider() {

  return (
    <div className="main-content-wrap brand-list">
      <div className="product-category flex ali-center">
        <h2>Laptop</h2>
        <span>(259 Sản phẩm)</span>
      </div>
      <div className="brand-list-slider flex ali-center">
        <div className="flex-nowrap">
          {brandList.map((brand, i) => (<>
            <a
              href="#"
              key={i}
              style={{ order: brand.order }}
            >
              <img src={`${IMG_URL}${brand.imageCateUrl}`} alt="" />
            </a>
          </>))}
        </div>
        <div className="slider-nav-wrap-pre hide">
          <div className="slider-pre">
            <i className="fa-solid fa-angle-right" />
          </div>
        </div>
        <div className="slider-nav-wrap-next only-pc">
          <div className="slider-next">
            <i className="fa-solid fa-angle-right" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default BrandListSlider = memo(BrandListSlider)