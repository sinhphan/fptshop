import { memo, useContext, useEffect, useMemo, useState } from "react"

import { DATA } from "../../asset/data/data"
import MainSidebarGroup from "./mainSidebarGroup"
import '../../asset/css/main-sidebar.css'
import MainSidebarGroupFirst from "./mainSidebarGroupFirst"
import { FilterContext, FilterDispatchContext } from "./main"
import { filterAction } from "../../logic/filter_reducer/actions"
import { ADMIN_SETTINGS } from "../../config/adminSettings"



function MainSidebar() {
  const data = useContext(FilterContext)
  const dispatchFilter = useContext(FilterDispatchContext)

  //  for first group of main sidebar
  const parentCategory = data.navFilter.listCategory.filter(e => e.id == ADMIN_SETTINGS.firstGroupOfSidebar)


  const initCheckedItems = [{
    id: -1,
    parentName: parentCategory[0].nameAscii,
    searchKey: ''
  }]

  let [checkedItems, setCheckedItems] = useState(initCheckedItems)



  const handleCheckItem = e => {

    const currentChecked = {
      id: +e.currentTarget.dataset.id,
      parentName: e.currentTarget.parentNode.dataset.query,
      searchKey: e.currentTarget.dataset.searchKey
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
          searchKey: ''
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

  const attributeItems = data.navFilterAttributeItem.attributeItems.filter(e => {
    return e.isShowNavFilter === true
  })

  useMemo(() => {
    attributeItems.forEach(e => {
      initCheckedItems.push({
        id: -1,
        parentName: e.nameAscii,
        searchKey: ''
      })
    })

    // console.log('initCheckedItems', initCheckedItems);
  }, [])



  useEffect(() => {
    setCheckedItems(initCheckedItems)
  }, [])

  return (
    <div className="l-3">
      <div className="main-sidebar">
        <MainSidebarGroupFirst
          onClick={handleCheckItem}
          checkedItems={checkedItems}
          parentCategory={parentCategory}
        />

        {attributeItems.map((e, id) => {
          return <MainSidebarGroup
            attributeItem={e}
            checkedItems={checkedItems}
            onClick={handleCheckItem}
            key={id}
          />
        })}
      </div>
    </div>
  )
}


export default MainSidebar = memo(MainSidebar)