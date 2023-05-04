import {
  CATEGORY,
  MENU_MODAL,
  SETTING_MODAL,
  CATEGORY_INFO,
  BUY_PRO_MODEL,
  SETTING_OPTION,
  RESET_CATEGORYWISE_DATA
} from './Types';

export const categoryAction = () => dispatch => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpva',
  );

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  fetch('http://app.ragingdevelopers.com/api/category', requestOptions)
    .then(response => response.json())
    .then(result => {
      const categoryData = result;
      if (categoryData?.success === 1) {
        dispatch({
          type: CATEGORY,
          payload: categoryData.data,
        });
      }
    })
    .catch(error => console.log('error', error));
};

export const menuModalAction = () => dispatch => {
  dispatch({
    type: MENU_MODAL,
  });
};

export const settingModalAction = () => dispatch => {
  dispatch({
    type: SETTING_MODAL,
  });
};

export const categoryWiseDataAction = id => dispatch => {
  console.log('id',id)
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpva',
  );

  var formdata = new FormData();
  formdata.append('category_id', id);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };

  fetch('https://app.ragingdevelopers.com/api/abc', requestOptions)
    .then(response => response.json())
    .then(result => {
      const data = result;
      if (data?.success === 1) {
        dispatch({
          type: CATEGORY_INFO,
          payload: data.data,
        });
      }
    })
    .catch(error => console.log('error', error));
};

export const resetcategoryWiseDataAction = () => dispatch => {
  dispatch({
    type: RESET_CATEGORYWISE_DATA,
  });
}

export const buyProModelAction = () => dispatch => {
  dispatch({
    type: BUY_PRO_MODEL,
  });
};

export const settingOptionAction = showword => dispatch => {
  dispatch({
    type: SETTING_OPTION,
    payloadshowword: showword,
  });
};
