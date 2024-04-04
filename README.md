# rehearsingReact
This repository serves as a dummy platform for practicing my React skills. It is not intended for use in any project and is solely for demonstration purposes.

## Project Setup
Setting up the project is incredibly simple and involves just three commands.

1. Run `npm create vite@latest` to create a new Vite project. When prompted, follow these options:
   - Project name: Enter `.` to use the current folder.
   - Project package: Keep the default option.
   - Framework: Choose React using the arrow keys.
   - Variant: Select JavaScript with SWC, which offers slightly faster performance than plain JavaScript.
2. Run `npm install` to install all the dependencies 
3. Run `npm run dev` to get the application started

## The basics of the project
### index.html and main.jsx
Two crucial files in the project are `index.html` and `main.jsx`. In `index.html`, you'll find the following tag 

```html
<script type="module" src="/src/main.jsx"></script>
```

This tag imports the `main.jsx` file. Now, let's take a look at the `main.jsx` file:

```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
These lines connect the `index.html` file with the React code. In React, our HTML files are essentially empty. Therefore, everything inside this application will be rendered inside the `root` div. 

### Components
In a standard project like this one, you'll always encounter the `App.jsx` file. Upon opening it, you'll find the following code: 
```jsx
function App() {...
}
```
In React, components are created by defining functions that start with a capital letter and return JSX. These components break down individual parts of your application, making it easier to manage and organize your code. It's important to note that in React, components can only return a single element at a time. To overcome this limitation, you can wrap multiple elements in a `<div>` tag, but a more elegant solution is to use a fragment, denoted by `<>` and closed by `</>`. This allows you to group elements without introducing an extra DOM node.


