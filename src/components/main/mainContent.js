import { memo, useContext } from "react";
import Products from "./products";

function MainContent() {
  return (
    <>
      <Products />
    </>
  )
}

export default MainContent = memo(MainContent)