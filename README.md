# LeMusica
```
PROJECT OVERVIEW - Music application that you can upload, manage and listen to music without interruption.  I use TailwindCSS to help me with designing a beautiful modern application. It's the new kid on the block that's being embraced by the front-end dev community.


FORM VALIDATION - Perform form validation to prevent invalid data from being submitted, enforce rules for various scenarios.


AUTHENTICATION AND REGISTRATION - Users will be able to login immediately after registering for an account. I'am using Firebase as a backend solution for managing and verifying users.


ROUTING - Handling routing with the Vue Router library. Underneath, the router library is using the history API to handle navigation. It allows us to switch between pages without refreshing the assets.


UPLOADING FILES - Uploading files to Firebase Storage, I validate files with Firebase so users don't accidentally download a malicious file when listening to music.


PLAYING MUSIC - Functional audio player with features such as playing/pausing, scrubbing and displaying the current duration. Also allowing users to submit comments, browse music and sort data.


INTERNATIONALIZATION - Internationalization the project for translating the whole site to multiple languages.


PWA - The web has shifted to a mobile-first approach. I added PWA (Progressive Web App) features to make our app mobile-friendly by using Workbox to cache files and persist data with Firebase.


TESTING - Test the project with Jest. Unit testing allows us to test a feature in isolation. It's the most common type of test you'll write. There are a few problems with testing that can be resolved with mocking. By mocking code, we'll be able to isolate features and test them.


```



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
