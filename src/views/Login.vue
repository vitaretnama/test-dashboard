<script setup>
import Particles from "../components/Particles.vue";
import Loader from "../components/Loader.vue";
import Message from "../components/Messages.vue";
import { useStore } from "vuex";
import { ref, reactive } from "vue";
import router from "../router";

const store = useStore();
const signInState = store.state.authentication.signIn;

const passwordModel = ref("");
const emailModel = ref("");
const localState = reactive({
  disableSignIn: true,
  emailError: false,
  passwordError: false,
});


const signIn = () => {
  store
    .dispatch("signInAction", {
      email: emailModel.value,
      password: passwordModel.value,
    })
    .then(() => {
      if (!signInState.isError) {
        // store.dispatch("getUserAction"); 
        router.push("/"); 
      }
    });
};

// to validate email
const validateEmail = () => {
  const mail_format =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  localState.emailError =
    emailModel.value.length < 1 || !emailModel.value.match(mail_format);
};

// to validate password
const validatePassword = () => {
  localState.passwordError = passwordModel.value.length < 1;
};

const validateForm = () => {
  validateEmail();
  validatePassword();
  localState.disableSignIn = localState.emailError || localState.passwordError;
};
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="bg-white"></div>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAAAVCAYAAABfXiAOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPySURBVHgB1ZndddMwFMevQt7pBrgTtEzQZIIWeKMPdbpA0zJAnAHahgVI8gA8QdsJbCZomCBmArIAFffGUuLI+oydHvidoxNLvvqw/9LVlcMA4Zxf4E+EaQ8KItgkxzTDdM8Y+wUeYJvU1gHa/2jCzlQX6y0s98/wpwPV51HJMU22GYOT5HYPkstFUB0aOA/jDtMrR5vHmH4L+7nJ3tdOU++oVO9OCFv3uYLG4EMruR63kpvHpTAh9cA9i1ROMM1w8AcWmxFsrrq+wS5R7DLdCy6D98luUqpH4znTmEYQTuQzBh9IEAYsZgCHLeBpiDAt2A7qILPMqkhjb2pHrXcLdlKotn8IzRFhuoAaSEFkPlSYbUUhqIM+NE/Miz2uApaTYBHsnhi2RBVEEiJMG4oNfOKwo4ZONOVUdgnNM0IBZuWNVwhVdxKQW31Qyo417UbcEUToQEFudYJIpDBPAK9t7bSx4wfNQCsIX/4IZlfUNBPss0PRnuh7BPUhoTOljNxwDNXneonJW5TW8HrAOHNOmqUwuJqekg89Y1vgCT5MDkXo+FxEUAhDvynsCNG+KsjCN/SX4ArJ/Y1bVts2eCIiEnXwOeyWDjS7OvtiVZTRBQn34Mk4PR3j24Fe96r3YnhDlxObPWcseRpcDuffYEz5/XdQWTFtEdr6RC+0NCOlbAbNQu5CFaBJd+nznDkUobqTQhAKChhev3cKsyEIK4IJvK4IQyvlxHcQGpx7USBS5I7FJoHtx+tDJPqf2ozWgkhYbBNGJ0hRDWJVmDohcabZNJvgDZjdYo59DmH30F52ZLpZFUSyFGb8Z3A1Lb94oyCrakthxjK7rSgLqBHL2xBhqC78zsG+gpom1hWaBZFsCuMUZFVtLYz3Rq8wCY1OQsC2f+JMpT1MhsEkVK+BPnXnFFoRica2oxa4BZGsXRnlnIKsqhWujETJwO6jY6hu8BTFLHbpSrDtj9gHvUDanLPQg5wB0zmFJoAzoOA0Dk8PwYFnqwxbvuPYpx7ZtsWp2fjJGgecQSGcSoL3yMdbN8Q6PMfZyHBO0XLe/Tz9lJ7SAXDiaDU5735dvZf9tzCdf19eOupBTLbOPUWIZjpNj5r4ovqM0ApPS4nOQI8GW224T8Jw66znSa/7peJB6GWDfbXEwsZ7o6dOck05CXIG/w/kCjulRHnTpDIeIM3C6AWRWIRZCUJ4iWKJiAidr88ceUmu5H1P0jOP9uvsQYnLLVeFsQsiqQjDoF8WJBj6Uqv8Uzcw2EXCPcxNNiF2jnqmz/x7fP3vpC8pfQSFADDKGlCCQOZ3cIGRlrYeg0Bw0LTkKd03FBHtDLGJdzxM6Tmyf+V5/gJIEcNX/F9GmgAAAABJRU5ErkJggg=="
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="signIn" @change="validateForm">
         <Message
        :danger="signInState.isError"
        :dangerMsg="signInState.errorMessage"
      />
        <Loader v-if="signInState.isLoading" />
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-white"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              type="email"
              autocomplete="email"
              v-model="emailModel"
              required
              class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              :class="{ 'p-invalid': localState.emailError }"
            />
            <p
              v-if="localState.emailError"
              class="text-red-500 text-xs italic text-left"
            >
              Email is required
            </p>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-white"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              type="password"
              autocomplete="current-password"
              v-model="passwordModel"
              required
              class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              :class="{ 'p-invalid': localState.passwordError }"
            />
            <p
              v-if="localState.passwordError"
              class="text-red-500 text-xs italic text-left"
            >
              Password is required
            </p>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#f6bd60] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
  <Particles />
</template>
