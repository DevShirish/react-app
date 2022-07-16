## About this project

Idea or thought behind technical implementation is divide big problem to multiple small problems. Small problems are nothing but basic components implemented in project. Application will lose its state on reloading.

# Demo

Checkout this video

[Application Demo run](https://user-images.githubusercontent.com/19300498/179339342-74cbc914-8994-40c2-a986-31e0ec010013.webm)

# Tech stacks

I have used React 17 to develop this requirement.

## Third party modules

- [reactjs-popup](https://github.com/yjose/reactjs-popup)
- [react-dropzone](https://github.com/react-dropzone/react-dropzone/)
- [react-virtualized](https://github.com/bvaughn/react-virtualized)
- [react-redux](https://github.com/reduxjs/react-redux)

# Architecture of Application

[Application Component Diagram](https://user-images.githubusercontent.com/19300498/179339737-c18d60ab-00e2-46d8-9183-8575a82be5f7.png)

# Thoughts on basic components

Basic components will solve very small problems or basic problems in application. Such as input value, or a content editable div as input. These components when used along will create multiple views to interact with each other. 

## What I thought should be extended

This implementation is implemented by thinking in perspective of react. But I always wonder if I could build framework-less components. Then could write Bridges, Abstractions around frameworks for components that are framework-less.

Comment list component implemented needs to be implemented using basic component. but due to time crunch it is implemented without basic component but breaking into small components.

Most of things are still remaining. I have added comments in few component as of now with first commit.

## QUESTIONS

# What was easy building in application?

To implement basic components. Why? problems are small

# What was hard building in application?

Exact calculation of placement of icon in editor it is still buggy but can be solved in next iteration. To think if should I go with canvas or layer implementation for editor. But extension in futures might need canvas for few use cases.

# What would I want to do next

As said build framework-less components and make it open source.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


