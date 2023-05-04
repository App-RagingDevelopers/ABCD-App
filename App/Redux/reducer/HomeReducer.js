import {
  BUY_PRO_MODEL,
  CATEGORY,
  CATEGORY_INFO,
  MENU_MODAL,
  RESET_CATEGORYWISE_DATA,
  SETTING_MODAL,
  SETTING_OPTION,
} from '../Action/Types';

const initialState = {
  category: [],
  menuModal: false,
  settingModal: false,
  categoryInfo: [],
  buypromodel: false,
  ShowWord: [],
  ShowAlphabet: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case MENU_MODAL:
      return {
        ...state,
        menuModal: !state.menuModal,
      };
    case SETTING_MODAL:
      return {
        ...state,
        settingModal: !state.settingModal,
      };
    case CATEGORY_INFO:
      return {
        ...state,
        categoryInfo: action.payload,
      };
    case RESET_CATEGORYWISE_DATA:
      return {
        ...state,
        categoryInfo: [],
      };
    case BUY_PRO_MODEL:
      return {
        ...state,
        buypromodel: !state.buypromodel,
      };
    case SETTING_OPTION:
      return {
        ...state,
        ShowWord: action.payloadshowword,
      };
    default:
      return state;
  }
};
