export const beginSignIn = (state) => {
  state.signIn.isLoading = true;
};

export const successSignIn = (state, payload) => {
  state.userDetails.isSignIn = true;
  state.signIn.isLoading = false;
  state.signIn.isError = false;
  state.signIn.data = payload;
};

export const failSignIn = (state, payload) => {
  state.userDetails.isSignIn = false;
  state.signIn.isLoading = false;
  state.signIn.isError = true;
  state.signIn.errorMessage = payload;
};

