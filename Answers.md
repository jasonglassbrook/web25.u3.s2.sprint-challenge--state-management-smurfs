-   [x] What problem does the context API help solve?
    > Context helps solve the issue of distributing states throughout an app, especially when the states need to be used by multiple, deeply nested components where the parent components don't "care" about the state -- they're just passing it along.

-   [x] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    > -   `actions` : Objects with `type` and `data`/`payload` fields that tell a `reducer` what to do with state. They are dispatched to a `reducer` by Redux.
    > -   `reducers` : Functions that take `state` and an `action` object and then perform some (possibly complex) operation on an app's `state`. They are specified when creating a new Redux `store`.
    > -   `store` : An object that manages the state of an app (or part of an app). It yields state to React components via a `Provider`.

-   [x] What is the difference between Application state and Component state? When would be a good time to use one over the other?
    > Application state is the state of a whole application. Sometimes this can be very complex, so you may use contexts and reducers to manage it, like `useContext`, `useReducer`, and `redux`+`react-redux`. Component state is the state of an individial component within an app. If _only_ the given component "cares" about it, then it makes the most sense to use `useState` or `this.state` to manage a component's state.

-   [x] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    > `redux-thunk` is middleware that tells `redux` that if an action creator returns a _function_ instead of an action object, that it needs to treat that creator differently. It allows us to perform asynchronous actions.

-   [x] What is your favorite state management system you've learned and this sprint? Please explain why!
    > I think I like `redux` now. At first, it seemed like a lots of boilerplate, but once I read more about what's going on with it -- and restructured my directories to be more modular -- I like it better. It seems combine the roles of React's `useContext` and `useReducer` hooks. The only thing I don't really like about it is using `connect` everywhere -- maybe that's where the new Redux hooks come in!
