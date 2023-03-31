import { memo } from "react"
import DropdownContentTypeBox from "./DropdownContentTypeBox"
import DropdownContentTypeList from "./DropdownContentTypeList"

function MainNavDropdownContent({ navContent }) {
  let isDropdownTypeBox = navContent.dropdownType === 'box'
  let isDropdownTypeList = navContent.dropdownType === 'list'

  return (<>
    {isDropdownTypeList && <DropdownContentTypeList subNav={navContent.childrens} />}
    {isDropdownTypeBox && <DropdownContentTypeBox dropdownContent={navContent} />}
  </>)
}


export default MainNavDropdownContent = memo(MainNavDropdownContent)