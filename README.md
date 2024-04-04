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

## Project code
### Managing State in React
In React, state variables are immutable, meaning you cannot directly change their values. Instead, you need to use a function provided by React, typically named with the prefix set, to update the state. For example, in this project, if you try to update the state variable newItem directly like this:
```jsx
export default function App(){
  const [newItem, setNewItem] = useState("")
  setNewItem("a;sljdf;lksd")
```
This would cause an infinite loop because setting the state triggers a rerender of the component, resulting in an endless cycle.

To correctly update the state and avoid infinite loops, you should utilize React's useState hook along with event handlers. For instance:
```jsx
export default function App(){
  const [newItem, setNewItem] = useState("")

  return (
    ...
    <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>
  )
```
In this code, whenever the input value changes, the onChange event triggers the setNewItem function, updating the state with the new value. This approach ensures that the component rerenders correctly without causing an infinite loop.

### Managing Event Handlers in React
To handle the submission of a form in React, you typically use an event handler function like handleSubmit. This function prevents the default behavior of the form submission using e.preventDefault(). Then, it updates the state variable todos using the SetTodos function provided by React's state management system.
```jsx
function handleSubmit(e) {
  e.preventDefault();

  SetTodos((currentTodos) => {
    return [
      ...currentTodos, 
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ];
  });
}
```
In the JSX code, you can map through the todos array and render each todo item as a list item (<li>). Each list item has a unique key assigned using the key prop. The input checkbox displays the completion status of the todo item, while the todo title is displayed next to it. Additionally, a delete button is provided for each todo item.
```jsx
<ul className="list">
  {todos.map(todo => {
    return (
      <>
        <li key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.completed} />
            {todo.title} 
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </>
    );
  })}
</ul>
```
This setup allows for dynamic rendering of todo items based on the todos state, enabling users to add and manage their todos efficiently.

### Managing onChange Click Event in React
```jsx
  function toggleToDo(id, completed){
    SetTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id == id){
          return{...todo, completed}
        }

        return todo
      })
    })

  }
```
The `toggleToDo` function toggles the completion status of a to-do item identified by its id. It updates the state using SetTodos, mapping over the current to-do list and modifying the target to-do's completed property.

```jsx
<label>
  <input type="checkbox" checked={todo.completed} onChange={e => toggleToDo(todo.id, e.target.checked)}/>
    {todo.title} 
</label>
```
In the JSX, checkboxes represent to-do items. Their checked attribute reflects the completion status, and the onChange event triggers toggleToDo with the to-do's id and the new completion status.

### Managing Delete Event Handling in React
```jsx
function deleteTodo(id) {
  SetTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));
}
```
The `deleteTodo` function removes a to-do item from the list based on its id. It filters out the to-do with the specified id and updates the state using SetTodos.

```jsx
<button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
```
In the JSX, the delete button invokes the deleteTodo function with the to-do's id when clicked.

### short-circuiting in React
```jsx
{todos.length === 0 && "No ToDos"}
```
This code is a short-circuit evaluation in JavaScript. It checks if the length of the todos array is zero. If it is, it evaluates the string "No ToDos". If the length is not zero, it skips evaluating the string. This pattern is commonly used for conditional rendering in React components.





