import { memo, useContext } from "react";
import Products from "./products";
import "../../asset/css/main-content.css"

function MainContent() {
  return (
    <>
      <Products />
    </>
  )
}

export default MainContent = memo(MainContent)