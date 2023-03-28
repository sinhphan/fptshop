import { DATA } from "../../asset/data/data";
import * as ACTIONS from "./actionsConstant";
import * as CATEGORYS from "./categoryConstant";


function filterReducer(state, action) {
  let payload = action.payload
  console.log('filterReducer: payload', payload)
  let newState = {}


  switch (action.type) {
    case ACTIONS.FILTER_ACTION:
      let listPoduct = []
      let listPoductFilter = []

      payload.forEach(search => {

        switch (search.parentName) {
          case CATEGORYS.BRAND_CATEGORY:
            if (search.id === -1) return listPoduct = DATA.listDefault.list
            listPoductFilter = DATA.listDefault.list.filter(product =>
              product.brandName.toLowerCase() === search.searchKey.toLowerCase()
            )
            listPoduct = [...listPoduct, ...listPoductFilter]
            break

          case CATEGORYS.PRICE_CATEGORY:
            if (search.id === -1) return listPoduct = DATA.listDefault.list
            listPoductFilter = DATA.listDefault.list.filter(product =>
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

      console.log('filterReducer: newState : ', newState);
      return newState
    default:
      break
  }

}

export default filterReducer