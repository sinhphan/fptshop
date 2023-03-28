import { DATA } from "../../asset/data/data";
import * as ACTIONS from "./actionsConstant";
import { BRAND_CATEGORY } from "./categoryConstant";


function filterReducer(state, action) {
  let payload = action.payload
  // console.log(payload);
  let newState = {}


  switch (action.type) {
    case ACTIONS.FILTER_ACTION:
      let listPoduct = []

      payload.forEach(search => {

        switch (search.parentName) {
          case BRAND_CATEGORY:
            if (search.id === -1) return listPoduct = DATA.listDefault.list
            let listPoductFilter = DATA.listDefault.list.filter(product =>
              product.brandName.toLowerCase() === search.searchKey.toLowerCase()
            )
            listPoduct = [...listPoduct, ...listPoductFilter]
            break
          default:
            break
        }

      }
      )


      newState = {
        ...state,
        listDefault: {
          ...state.listDefault,
          list: listPoduct
        }
      }

      console.log(newState);
      return newState
    default:
      break
  }

}

export default filterReducer