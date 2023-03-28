import * as ACTIONS from './actionsConstant'

export const filterAction = payload => {
  return {
    type: ACTIONS.FILTER_ACTION,
    payload
  }
}