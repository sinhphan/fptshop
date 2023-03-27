import DropdownContentTypeBox from "./dropdownContentTypeBox"
import DropdownContentTypeList from "./dropdownContentTypeList"

function MainNavDropdownContent ({ navContent }){
  let isDropdownTypeBox = navContent.dropdownType === 'box'
  let isDropdownTypeList = navContent.dropdownType === 'list'
  // console.log('MainNavDropdownContent',navContent);

  return (<>
    {isDropdownTypeList && <DropdownContentTypeList subNav={navContent.childrens}/>}

    {isDropdownTypeBox && <DropdownContentTypeBox dropdownContent={navContent}/>}
  </>)
}


export default MainNavDropdownContent