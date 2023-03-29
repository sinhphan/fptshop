import { memo } from "react"

function ProductsFilterNavigation() {

  return (
    <div className="product-filter flex js-between">
      <div className="product-filter-list flex ali-center">
        <p className="only-pc">Ưu tiên xem:</p>
        <div className="flex">
          <button className="active">Bán chạy nhất</button>
          <button>Trả góp 0%</button>
          <button>Giá thấp</button>
          <button>Giá cao</button>
          <button>Ưu đãi online</button>
        </div>
      </div>
      <div className="product-filter-display flex ali-center js-end only-pc">
        <div>
          <div className="click-dropdown ddtype-list">
            <button>Bán chạy nhất</button>
            <div className="dropdown-content">

            </div>
          </div>
        </div>
        <span className="icon-th-layout active"></span>
        <span class="icon-th-list"></span>
      </div>
    </div>

  )
}

export default ProductsFilterNavigation = memo(ProductsFilterNavigation)