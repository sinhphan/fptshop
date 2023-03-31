import { memo } from 'react'

function BreadCrum() {

  return (
    <>
      <div className="breadcrum">
        <ul className="flex">
          <li><a href="/">Trang chủ</a></li>
          <li><a href="#" className="current">Laptop</a></li>
        </ul>
      </div>
    </>)
}

export default BreadCrum = memo(BreadCrum)