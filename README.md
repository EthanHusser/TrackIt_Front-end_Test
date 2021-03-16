# [TrackIt](https://trackit.io/) - Frontend technical test

This test is a part of our hiring process at TrackIt for first frontend positions. It should take you between 3 and 6 hours depending on your experience.


## Summary
The goal of this test is to make you code a small ReactJS app. We have prepared a simple React app for you (`npx create-react-app mon-app`), but please change whatever you want (CSS files, HTML structure, TS structure...). Since there is no API you should consider mocking all payloads.

The app will be a Todo list (sorry) with the following features:
- **Todo List** - simple list of notes
- **Todo Add** - creation of a new note
- **Todo Detail** - detail of a note
- **Todo Edit** - edition of an existing note
- **Todo Delete** - deletion of a note

**Bonus:** The user would also be able mark a Todo 'isDone' and have them displayed appropriately. Please code that only if you have extra time.

### Requirements
- Features listed above
- React
- React Hooks
- Avoid class components if possible
- Typescript is highly recommended

### Bonus/Suggestions
- Responsive design
- CSS modules or alternative (SASS, SCSS)
- Drag & Drop 🙃
- ... Impress us!


## Installation
We're using [yarn](https://yarnpkg.com) here:
```
yarn install
yarn start
```

### Todo object
- **id** - string - unique ID of call (you can use uuid library)
- **createdAt** - string - creation date
- **title** - string (required) - short todo title
- **description** - string (required) - todo detailed description
- **isDone** - boolean - if todo is done or not


## Submission
Clone this repository, create your own public repository, switch out the [remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) and send us a link.

We'll review it and get back to you in order to talk about your code!

Contact us at nathan@trackit.io if you need more details.
