export const USER_LOADING = "USER_LOADING";

export const userLoading = () => {
  return (dispatch) => {
    return dispatch({ type: USER_LOADING });
  };
};
