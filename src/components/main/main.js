import { memo, createContext, useReducer } from "react"
import { DATA } from "../../asset/data/data"
import filterReducer from "../../logic/filter_reducer/filterReducer"
import BreadCrum from "./breadCrum"
import MainContent from "./mainContent"
import MainSidebar from "./mainSidebar"
import MainSlider from "./mainSlider"

export const FilterContext = createContext(null)
export const FilterDispatchContext = createContext(null)

function Main() {
  const [filterProduct, dispatchFilter] = useReducer(filterReducer, DATA)
  return (
    <FilterContext.Provider value={filterProduct}>
      <FilterDispatchContext.Provider value={dispatchFilter}>
        <div className="main flex js-center">
          <div className="width">
            <BreadCrum />
            <MainSlider />
            <div className="main-content flex">
              <MainSidebar />
              <MainContent />
            </div>
          </div>
        </div>
      </FilterDispatchContext.Provider>
    </FilterContext.Provider>
  )
}

export default Main = memo(Main)