<template>
  <div class="relative overflow-hidden bg-gray-800">
    <div class="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
      <svg
        class="absolute bottom-0 right-0 mb-48 text-gray-700 transform translate-x-1/2 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
        width="364"
        height="384"
        viewBox="0 0 364 384"
        fill="none"
      >
        <defs>
          <pattern
            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect
          width="364"
          height="384"
          fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
        />
      </svg>
    </div>
    <div class="relative pt-6 pb-16 sm:pb-24">
      <Popover>
        <nav
          class="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6"
          aria-label="Global"
        >
          <div class="flex items-center flex-1">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span class="sr-only">Workflow</span>
                <img
                  class="w-auto h-8 sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt=""
                />
              </a>
              <div class="flex items-center -mr-2 md:hidden">
                <PopoverButton
                  class="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                >
                  <span class="sr-only">Open main menu</span>
                  <MenuIcon class="w-6 h-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="hidden space-x-10 md:flex md:ml-10">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="font-medium text-white hover:text-gray-300"
                >{{ item.name }}</a
              >
            </div>
          </div>
          <div class="hidden md:flex">
            <Link
              :href="route('login')"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md hover:bg-gray-700"
            >
              Log in
            </Link>
            <Link
              :href="route('register')"
              class="inline-flex items-center px-4 py-2 ml-5 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md hover:bg-gray-700"
            >
              Register
            </Link>
          </div>
        </nav>

        <transition
          enter-active-class="duration-150 ease-out"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <PopoverPanel
            focus
            class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
          >
            <div
              class="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5"
            >
              <div class="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    class="w-auto h-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close menu</span>
                    <XIcon class="w-6 h-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3 space-y-1">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
              <Link
                :href="route('login')"
                class="block w-full px-5 py-3 font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100"
              >
                Log in
              </Link>
              <Link
                :href="route('register')"
                class="block w-full px-5 py-3 font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100"
              >
                Register
              </Link>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <main class="mt-16 sm:mt-24">
        <div class="mx-auto max-w-7xl">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div
              class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
            >
              <div>
                <a
                  href="#"
                  class="inline-flex items-center p-1 pr-2 text-white bg-gray-900 rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                >
                  <span
                    class="
                      px-3
                      py-0.5
                      text-white text-xs
                      font-semibold
                      leading-5
                      uppercase
                      tracking-wide
                      bg-indigo-500
                      rounded-full
                    "
                    >Live Reload</span
                  >
                  <span class="ml-4 text-sm">See it Now</span>
                  <ChevronRightIcon
                    class="w-5 h-5 ml-2 text-gray-500"
                    aria-hidden="true"
                  />
                </a>
                <h1
                  class="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
                >
                  <span class="md:block">Edit Home Page</span>
                  {{ " " }}
                  <span class="text-indigo-400 md:block">The way you Like it</span>
                </h1>
                <p
                  class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                >
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua ad ad non deserunt sunt.
                </p>
                <p
                  class="mt-8 text-sm font-semibold tracking-wide text-white uppercase sm:mt-10"
                >
                  Used by
                </p>
                <div class="w-full mt-5 sm:mx-auto sm:max-w-lg lg:ml-0">
                  <div class="flex flex-wrap items-start justify-between">
                    <div class="flex justify-center px-1">
                      <img
                        class="h-9 sm:h-10"
                        src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                        alt="Tuple"
                      />
                    </div>
                    <div class="flex justify-center px-1">
                      <img
                        class="h-9 sm:h-10"
                        src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                        alt="Workcation"
                      />
                    </div>
                    <div class="flex justify-center px-1">
                      <img
                        class="h-9 sm:h-10"
                        src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                        alt="StaticKit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
              <div
                class="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden"
              >
                <div class="px-4 py-8 sm:px-10">
                  <div>
                    <p class="text-sm font-medium text-gray-700">
                      Sign in with
                    </p>

                    <div class="grid grid-cols-3 gap-3 mt-1">
                      <div>
                        <a
                          href="#"
                          class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                        >
                          <span class="sr-only">Sign in with Facebook</span>
                          <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>

                      <div>
                        <a
                          href="#"
                          class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                        >
                          <span class="sr-only">Sign in with Twitter</span>
                          <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                            />
                          </svg>
                        </a>
                      </div>

                      <div>
                        <a
                          href="#"
                          class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                        >
                          <span class="sr-only">Sign in with GitHub</span>
                          <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="relative mt-6">
                    <div
                      class="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div class="w-full border-t border-gray-300" />
                    </div>
                    <div class="relative flex justify-center text-sm">
                      <span class="px-2 text-gray-500 bg-white"> Or </span>
                    </div>
                  </div>

                  <div class="mt-6">
                    <form @submit.prevent="submit" class="space-y-6">
                      <div>
                        <label for="name" class="sr-only">Full name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autocomplete="name"
                          placeholder="Full name"
                          required=""
                          class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <label for="mobile-or-email" class="sr-only"
                          >Mobile number or email</label
                        >
                        <input
                          type="text"
                          name="mobile-or-email"
                          id="mobile-or-email"
                          autocomplete="email"
                          placeholder="Mobile number or email"
                          required=""
                          class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <label for="password" class="sr-only">Password</label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Password"
                          autocomplete="current-password"
                          required=""
                          class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <button
                          type="submit"
                          class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          :class="{ 'opacity-25': form.processing }"
                          :disabled="form.processing"
                        >
                          Create your account
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10"
                >
                  <p class="text-xs leading-5 text-gray-500">
                    By signing up, you agree to our
                    <a
                      href="#"
                      class="font-medium text-gray-900 hover:underline"
                      >Terms</a
                    >,
                    <a
                      href="#"
                      class="font-medium text-gray-900 hover:underline"
                      >Data Policy</a
                    >
                    and
                    <a
                      href="#"
                      class="font-medium text-gray-900 hover:underline"
                      >Cookies Policy</a
                    >.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <div class="relative py-16 bg-white sm:py-24 lg:py-32">
      <div
        class="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
      >
        <h2
          class="text-base font-semibold tracking-wider text-indigo-600 uppercase "
        >
          Deploy faster
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Everything you need to deploy your app
        </p>
        <p class="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p>
        <div class="mt-12">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="feature in features" :key="feature.name" class="pt-6">
              <div class="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                <div class="-mt-6">
                  <div>
                    <span
                      class="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg "
                    >
                      <component
                        :is="feature.icon"
                        class="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <h3
                    class="mt-8 text-lg font-medium tracking-tight text-gray-900 "
                  >
                    {{ feature.name }}
                  </h3>
                  <p class="mt-5 text-base text-gray-500">
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="bg-gray-800" aria-labelledby="footerHeading">
      <h2 id="footerHeading" class="sr-only">Footer</h2>
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="grid grid-cols-2 gap-8 xl:col-span-2">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3
                  class="text-sm font-semibold tracking-wider text-gray-400 uppercase "
                >
                  Solutions
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Marketing
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Analytics
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Commerce
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Insights
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3
                  class="text-sm font-semibold tracking-wider text-gray-400 uppercase "
                >
                  Support
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Pricing
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Documentation
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Guides
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      API Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3
                  class="text-sm font-semibold tracking-wider text-gray-400 uppercase "
                >
                  Company
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Blog
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Jobs
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Press
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3
                  class="text-sm font-semibold tracking-wider text-gray-400 uppercase "
                >
                  Legal
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Claim
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Privacy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mt-8 xl:mt-0">
            <h3
              class="text-sm font-semibold tracking-wider text-gray-400 uppercase "
            >
              Subscribe to our newsletter
            </h3>
            <p class="mt-4 text-base text-gray-300">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form class="mt-4 sm:flex sm:max-w-md">
              <label for="emailAddress" class="sr-only">Email address</label>
              <input
                type="email"
                name="emailAddress"
                id="emailAddress"
                autocomplete="email"
                required
                class="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          class="pt-8 mt-8 border-t border-gray-700 md:flex md:items-center md:justify-between"
        >
          <div class="flex space-x-6 md:order-2">
            <a href="#" class="text-gray-400 hover:text-gray-300">
              <span class="sr-only">Facebook</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a href="#" class="text-gray-400 hover:text-gray-300">
              <span class="sr-only">Instagram</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a href="#" class="text-gray-400 hover:text-gray-300">
              <span class="sr-only">Twitter</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>

            <a href="#" class="text-gray-400 hover:text-gray-300">
              <span class="sr-only">GitHub</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a href="#" class="text-gray-400 hover:text-gray-300">
              <span class="sr-only">Dribbble</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2020 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Link } from '@inertiajs/inertia-vue3';
import {
  MenuIcon,
  XIcon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  PencilAltIcon,
  ReplyIcon,
  TrashIcon,
  UsersIcon,
} from "@heroicons/vue/outline";
import { ChevronRightIcon } from "@heroicons/vue/solid";

const features = [
  {
    name: "Unlimited Inboxes",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: InboxIcon,
  },
  {
    name: "Manage Team Members",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: UsersIcon,
  },
  {
    name: "Spam Report",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: TrashIcon,
  },
  {
    name: "Compose in Markdown",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: PencilAltIcon,
  },
  {
    name: "Team Reporting",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: DocumentReportIcon,
  },
  {
    name: "Saved Replies",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ReplyIcon,
  },
  {
    name: "Email Commenting",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ChatAltIcon,
  },
  {
    name: "Connect with Customers",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: HeartIcon,
  },
];

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default {
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
  },
  data() {
    return {
      form: this.$inertia.form({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false,
      }),
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("register"), {
        onFinish: () => this.form.reset("password", "password_confirmation"),
      });
    },
  },
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ChevronRightIcon,
    MenuIcon,
    XIcon,
    Link,
  },
  setup() {
    return {
      navigation,
      features,
    };
  },
};
</script>
