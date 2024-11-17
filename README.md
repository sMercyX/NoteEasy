# NoteEasy
https://noteeasy-39c0d.web.app/

## Cant use project?
- use npm i --force (because zustand is not stable for react 19  )
- The username is Guy password is 123

## About Project
Note Easy is a note application designed for simplicity and efficiency. It allows users to create, organize, and manage their notes seamlessly. What sets this app apart is its edit history feature, enabling users to track changes and view previous versions of their notes, ensuring nothing important gets lost.

## Fix History Page
Initially, I created the history page as a separate route, but since the data was mocked and not fetched from the backend, navigating to another page caused the data to refresh. To resolve this, I changed the history page to a component, ensuring the data remains intact when navigating back to it. (You can still check if you want to watch it.At the route file where the original implementation is commented.)
