import * as Types from '../contants/ActionType';

const actFetchKeySearch = (keySearch) => {
  return {
    type: Types.FETCH_KEY_SEARCH,
    keySearch: keySearch
  }
}
export default actFetchKeySearch;