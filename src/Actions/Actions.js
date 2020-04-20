export const getFirestoreDataAsync = (data) => {
  return {
    type: "GET_BLOGPOST",
    data: data,
  };
};

export const getFirestoreData = (data) => {
  return (dispatch) => {
    dispatch(getFirestoreDataAsync(data));
  };
};
