
const imgUrl = 'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/'
function Product({ product }) {


  return (
    <div className="l-4">
      <div className="product-img">
        <a href="#">
          <img src={`${imgUrl}${product.urlPicture}`} />
        </a>
        <div class="product-sale">
          <span class="badge badge-warning">{product.labelInst}</span>
          <span class="badge badge-primary">{product.labelFlashSale}</span>
        </div>
      </div>
      <div className="product-info" >
        <h3>
          <a href="#">
            {product.name}
          </a>
        </h3>
        <div className="product-show-promo" >
          {product.productVariant.price}
          <div className="progress-bar" style={{ width: '86%' }}></div>
        </div>
      </div>
    </div>
  )
}

export default Product