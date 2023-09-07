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
        src="https://bdn.id/wp-content/uploads/2021/04/BDN-logo-Thumbnail3.png"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white"
      >
        Register your account
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
            class="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#0077b6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
  <Particles />
</template>
