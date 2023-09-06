import { signIn, getUser, logOut } from "../../../../api";
import axios from "axios";
import router from "../../../../router"

// export const signInAction = async (context, { email, password }) => {
//   if (email === "" || password === "")
//     return context.commit("failSignIn", "Email and password are required");
//   context.commit("beginSignIn");
//   try {
//     const response = await axios.post('https://reqres.in/api/register', {
//       email,
//       password,
//     });
//     // if (response) return context.commit("successSignIn", response);
//     // else return context.commit("failSignIn", "Could not complete login!!");
//     if (response) {
//       context.commit('successSignIn', response);
//       // Redirect to the dashboard upon successful login
//       router.push("/");
//     } else {
//       return context.commit('failSignIn', 'Could not complete login!!');
//     }
//   } catch (error) {
//     return context.commit("failSignIn", error);
//   }
// };

export const signInAction = async (context, { email, password }) => {
  if (email === "" || password === "")
    return context.commit("failSignIn", "Email and password are required");
  context.commit("beginSignIn");
  try {
    // Send a POST request to a mock login endpoint on Reqres.in
    const apiUrl = 'https://reqres.in/api/register'; // Replace with your mock endpoint

    const response = await axios.post(apiUrl, { email, password });

    if (response.status === 200) {
      // Simulate a successful login
      const user = {
        email: response.data.email, // Assuming Reqres.in returns an email in response
        token: response.data.token, // Assuming Reqres.in returns a token in response
      };

      // Replace the following line with your logic to store the user data
      // and manage the authentication state in your Vuex store
      context.commit("successSignIn", user);
      router.push("/home");
    } else {
      return context.commit("failSignIn", "Could not complete login!!");
    }
  } catch (error) {
    return context.commit("failSignIn", error);
  }
};

// export const signInAction = async (context, { email, password }) => {
//   if (email === "" || password === "")
//     return context.commit("failSignIn", "Email and password are required");
//   context.commit("beginSignIn");
//   try {
//     const response = await signIn(email, password);
//     if (response) return context.commit("successSignIn", response);
//     else return context.commit("failSignIn", "Could not complete login!!");
//   } catch (error) {
//     return context.commit("failSignIn", error);
//   }
// };

export const getUserAction = async (context) => {
  context.commit("beginRequestUser");
  try {
    const response = await getUser();
    if (response) context.commit("successRequestUser", response);
    else context.commit("failRequestUser", "Could not complete request!!");
  } catch (error) {
    context.commit("failRequestUser", error);
  }
};

export const logOutAction = async (context) => {
  try {
    const response = await logOut();
    context.commit("successLogOut", response);
  } catch (error) {
    context.commit("failLogOut", error);
  }
};
