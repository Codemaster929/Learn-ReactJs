# React Notes

A comprehensive guide covering React fundamentals, component architecture, and data flow patterns.

---

## Table of Contents
- [Why React?](#why-react)
- [Import/Export Between JavaScript Files](#importexport-between-javascript-files)
- [Component Building in React](#component-building-in-react)
- [Props](#props)
- [Props Drilling](#props-drilling)

---

## Why React?

React is a JavaScript library designed for building user interfaces with a component-based architecture. Its key advantages include:

- **Component-Based Development**: Build encapsulated components that manage their own state, making code more reusable and maintainable
- **Efficient DOM Updates**: Instead of reloading entire pages for small changes (like updating a like count), React uses a Virtual DOM to update only the parts that changed
- **Virtual DOM**: React maintains a lightweight copy of the actual DOM in memory, compares changes, and efficiently updates only what's necessary

---

## Import/Export Between JavaScript Files

React applications are modular. You can share values, functions, and components between files using `import` and `export`.

### Two Types of Exports:

#### 1. Default Export
- Only one default export per file
- Can be imported with any name

```javascript
// MyComponent.jsx
export default function MyComponent() {
  return <div>Hello World</div>
}

// App.jsx
import AnyName from './MyComponent'
```

#### 2. Named Export
- Multiple named exports per file
- Must be imported with the exact name (or aliased)

```javascript
// utils.js
export const helper1 = () => { ... }
export const helper2 = () => { ... }

// App.jsx
import { helper1, helper2 } from './utils'
```

---

## Component Building in React

In React, everything is a component. A complex UI is built by composing smaller, reusable components.

### Best Practices:
- Create individual components in a `components` folder inside `src`
- Import and use them in `App.jsx` or other parent components
- Build modular, reusable pieces that can be composed together

### Example:

```javascript
// components/Header.jsx
export default function Header() {
  return <header>My Header</header>
}

// App.jsx
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
    </div>
  )
}
```

---

## Props

**Props** (short for "properties") allow you to pass data from parent components to child components.

### How Props Work:

```javascript
// App.jsx
<Card 
  user='Sahaj' 
  age={22} 
  img='https://images.unsplash.com/photo-...'
/>
```

```javascript
// Card.jsx
export default function Card(props) {
  return (
    <div>
      <img src={props.img} alt="profile" />
      <h1>{props.user}, {props.age}</h1>
    </div>
  )
}
```

### Key Points:
- Props are passed as attributes in JSX
- Strings use quotes, other values use curly braces `{}`
- Props are read-only—child components cannot modify them

### Alternative: Destructuring Props

```javascript
export default function Card({ user, age, img }) {
  return (
    <div>
      <img src={img} alt="profile" />
      <h1>{user}, {age}</h1>
    </div>
  )
}
```

---

## Props Drilling

**Props drilling** occurs when data is passed through multiple levels of components, from parent → child → grandchild, etc.

### Example Flow:

```javascript
// App.jsx (root level)
<Section2 user={users} />
```

```javascript
// Section2.jsx (first child)
function Section2(props) {
  return props.user.map((element, key) => (
    <Card 
      key={key}
      img={element.img} 
      btn={element.button} 
      id={key} 
      color={element.color}
    />
  ))
}
```

```javascript
// Card.jsx (second child)
function Card(props) {
  return (
    <Cardcontent 
      id={props.id} 
      btn={props.btn} 
      color={props.color}
    />
  )
}
```

### The Challenge:
Data flows from `App → Section2 → Card → Cardcontent`. Components in the middle (like `Card`) must pass along props they don't even use themselves, which can make code harder to maintain.

### Solutions:

#### 1. Context API
Share data across components without passing props manually

```javascript
import { createContext, useContext } from 'react'

const UserContext = createContext()

function App() {
  return (
    <UserContext.Provider value={users}>
      <Section2 />
    </UserContext.Provider>
  )
}

function DeepComponent() {
  const users = useContext(UserContext)
  return <div>{users}</div>
}
```

#### 2. State Management Libraries
- **Redux**: Traditional, powerful state management
- **Zustand**: Lightweight and simple
- **Jotai**: Atomic state management

#### 3. Component Composition
Restructure components to avoid deep nesting by passing children or using render props.

---

## Additional Resources

- [React Official Documentation](https://react.dev)
- [React Tutorial](https://react.dev/learn)
- [Component Composition vs Props Drilling](https://react.dev/learn/passing-data-deeply-with-context)

---

## Contributing

Feel free to add more React concepts and patterns to these notes!

---

**Last Updated**: 2026
