import { memo, createContext, useReducer, useState, useEffect, useMemo } from "react"
import { DATA } from "../../asset/data/data"
import { ADMIN_SETTINGS } from "../../config/adminSettings"
import { createInitCheckedItems } from "../../config/createInitCheckedItems"
import { filterAction } from "../../logic/filter_reducer/actions"
import filterReducer from "../../logic/filter_reducer/filterReducer"
import BreadCrum from "./MainContentHeader/BreadCrum"
import MainContent from "./MainContentHeader/MainContent"
import MainSidebar from "./MainSideBar/MainSidebar"
import MainSlider from "./MainContentHeader/MainSlider"

export const FilterContext = createContext(null)
export const FilterDispatchContext = createContext(null)
export const CheckedItemsContext = createContext(null)
export const SetCheckedItemsContext = createContext(null)

function Main() {
  //  for first group of main sidebar
  const parentCategory = DATA.navFilter.listCategory.filter(e => e.id == ADMIN_SETTINGS.firstGroupOfSidebar)
  // for second group of main sidebar
  const attributeItems = DATA.navFilterAttributeItem.attributeItems.filter(e => {
    return e.isShowNavFilter === true
  })

  let initCheckedItems = []
  useMemo(() => {
    initCheckedItems = createInitCheckedItems()
  }, [])

  const [filterProduct, dispatchFilter] = useReducer(filterReducer, DATA)
  let [checkedItems, setCheckedItems] = useState(initCheckedItems)


  const handleCheckItem = e => {

    window.scrollTo({ top: 440, behavior: 'smooth' })

    const currentChecked = {
      id: +e.currentTarget.dataset.id,
      parentName: e.currentTarget.parentNode.dataset.query,
      searchKey: e.currentTarget.dataset.searchKey,
      name: e.currentTarget.dataset.name,
      parentOrder: +e.currentTarget.parentNode.dataset.order,
    }

    // if checking to all checkbox then remove all checked items of this category (parent)
    if (currentChecked.id === -1) {
      let newCheckedItems = checkedItems.filter(e => e.parentName !== currentChecked.parentName)
      checkedItems = [...newCheckedItems, currentChecked]

      return setCheckedItems(checkedItems)
    }

    let itemChecked = checkedItems.find(checkedItem => checkedItem.id == currentChecked.id && checkedItem.parentName === currentChecked.parentName)

    // if filter checked => remove it else add it to the checked list
    if (itemChecked) {
      let removeItemFromCheckItems = checkedItems.filter(checkedItem => {
        return (checkedItem.id === currentChecked.id && checkedItem.parentName === currentChecked.parentName) ? false : true
      }
      )

      setCheckedItems(checkedItems => removeItemFromCheckItems)

      // if this category no checkbox cheked then add init value of this category to the checked list
      let hasCheckedItem = removeItemFromCheckItems.filter(e => e.parentName === currentChecked.parentName).length === 0
      if (hasCheckedItem) {
        let initCheckedInThisCategory = {
          id: -1,
          parentName: currentChecked.parentName,
          searchKey: '',
          name: '',
          parentOrder: currentChecked.parentOrder,
        }

        removeItemFromCheckItems = [...removeItemFromCheckItems, initCheckedInThisCategory]
        setCheckedItems(removeItemFromCheckItems)
      }

    } else {

      // remove init checked list of this category
      let removedInitCheckedItem = checkedItems.filter(checkedItem => {
        return (checkedItem.id === -1 && checkedItem.parentName == currentChecked.parentName) ? false : true
      })

      // add new checked list ofthis category
      setCheckedItems(checkedItems => [...removedInitCheckedItem, currentChecked])

    }

  }


  useEffect(() => dispatchFilter(filterAction(checkedItems)), [checkedItems])


  // console.log(('main', checkedItems));
  return (
    <FilterContext.Provider value={filterProduct}>
      <FilterDispatchContext.Provider value={dispatchFilter}>
        <CheckedItemsContext.Provider value={checkedItems} >
          <SetCheckedItemsContext.Provider value={setCheckedItems} >
            <div className="main flex js-center">
              <div className="width">
                <BreadCrum />
                <MainSlider />
                <div className="main-content flex">
                  <MainSidebar
                    parentCategory={parentCategory}
                    attributeItems={attributeItems}
                    onClick={handleCheckItem}
                  />
                  <MainContent />
                </div>
              </div>
            </div>
          </SetCheckedItemsContext.Provider>
        </CheckedItemsContext.Provider>
      </FilterDispatchContext.Provider>
    </FilterContext.Provider>
  )
}

export default Main = memo(Main)