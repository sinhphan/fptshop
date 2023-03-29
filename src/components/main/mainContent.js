import { memo, useContext } from "react";
import Products from "./products";
import "../../asset/css/main-content.css"
import BrandListSlider from "./brandListSlider";

function MainContent() {
  return (
    <div className="l-9">
      <BrandListSlider />
      <Products />
    </div>
  )
}

export default MainContent = memo(MainContent)