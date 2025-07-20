### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  React Router is a library that allows you to define routes that map different URLs to specific components, enabling single-page applications (SPAs) to update the UI without reloading the page. This provides a smoother, faster user experience as users navigate between pages.

- What is a single page application?

  The single page application is the application that is running on the client side. It only loads an HTML page once and updates content dynamically. It does not require full page reloads. This allows for a faster and smoother user experience.

- What are some differences between client side and server side routing?

Client-side routing is handled by JavaScript in the browser and allows users to navigate through different views of a single-page application without triggering a full page reload. This results in faster, smoother transitions once the app has loaded. Server-side routing, on the other hand, occurs on the server, where each route change sends a new request to the server and loads a fresh page. it can feel slower and less seamless than client-side routing in modern web apps.


- What are two ways of handling redirects with React Router? When would you use each?

Using <Navigate /> component – This is used within components to programmatically redirect users based on logic or conditions. For example, if a user tries to access a protected route without being authenticated, you can return <Navigate to="/login" /> to send them to the login page. Use this when rendering logic determines redirection.

Using useNavigate() hook – This hook lets you imperatively redirect the user in event handlers or functions. For instance, after a form is submitted successfully, you can call navigate("/success"). Use this when redirection happens after an action, like form submission or a button click.


- What are two different ways to handle page-not-found user experiences using React Router? 

Catch-all route with * path: Define a route with path "*" at the bottom of your route definitions. This acts as a fallback for any undefined routes. Example:
<Route path="*" element={<NotFound />} />
Use this when you want a custom 404 page component to be shown for any unknown path. (I did this in the Snack-Or-Booze project.)

Programmatic redirection using <Navigate />: Inside a component, if a certain item or route isn’t found (like an invalid ID), you can return <Navigate to="/not-found" /> to send the user to a 404 page.

- How do you grab URL parameters from within a component using React Router?

You use the useParams() hook from React Router to grab URL parameters inside a component.

- What is context in React? When would you use it?

Context in React is a way to share data between components without having to pass props down manually at every level. You  use it when you have global or app-wide data that many components need access to—like user authentication, theme settings, or language preferences.

- Describe some differences between class-based components and function components in React.

 Class components use ES6 class syntax and were traditionally required for managing state and lifecycle methods. Function components, on the other hand, are simpler and rely on React hooks (like useState and useEffect) to handle state and side effects.

- What are some of the problems that hooks were designed to solve?

Hooks solve the following problems:

Code reuse – enable sharing logic via custom hooks.

Complex lifecycle methods – simplify and unify related logic (e.g., useEffect).

Overhead of this keyword – eliminate the need for this in functional components.

Verbose class syntax – reduce boilerplate with simpler function components.

Tightly coupled concerns – separate concerns more cleanly within components.