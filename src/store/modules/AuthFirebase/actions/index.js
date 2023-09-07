// import { signIn, getUser, logOut } from "../../../../api";
import axios from "axios";
import router from "../../../../router";

export const signInAction = async (context, { email, password }) => {
  if (email === "" || password === "")
    return context.commit("failSignIn", "Email and password are required");
  context.commit("beginSignIn");
  try {
    const apiUrl = "https://reqres.in/api/register";

    const response = await axios.post(apiUrl, { email, password });

    if (response.status === 200) {
      const user = {
        email: response.data.email,
        token: response.data.token,
      };
      context.commit("successSignIn", user);
      router.push("/home");
    } else {
      return context.commit("failSignIn", "Could not complete login!!");
    }
  } catch (error) {
    return context.commit("failSignIn", error);
  }
};
