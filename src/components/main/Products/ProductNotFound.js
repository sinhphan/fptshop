import { memo } from "react"

function ProductNotFound() {

  return (
    <div className="product-not-found flex js-center">
      <div style={{ textAlign: "center", padding: 30 }}>
        <p>
          <img src="https://fptshop.com.vn/Content/v5d/images/noti-search.png" />
        </p>
        <p>
          Rất tiếc chúng tôi không tìm thấy kết quả theo yêu cầu của bạn
        </p>
        <p >Vui lòng thử lại .</p>
      </div>

    </div>
  )
}

export default ProductNotFound = memo(ProductNotFound)