export const authInitState = {
  signIn: {
    isLoading: false,
    isError: false,
    errorMessage: "",
    data: { id: null, token: null },
  },
  userDetails: {
    isSignIn: false,
    isLoading: false,
    isError: false,
    errorMessage: "",
    userData: [],
  },
};
