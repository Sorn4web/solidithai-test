# SolidiThai Test Project
Hello, my name is Sorn Tangmettri. This is my test project for SolidiThai.

Languages and Libraries Used (managed by npm):
    1. React.js
    2. TypeScript
    3. TailwindCSS
    4. DaisyUI
    5. SweetAlert2
    6. BcryptJS
    7. React-icons
    8. React-router-dom
    9. Serve

Project Overview Based on Test Requirements:
    - React JS
    - TypeScript
    - JavaScript (ES6+ features)
    - Clean, Readable, and Maintainable Code
    - Functional Components and React Hooks
    - Styling and Responsiveness
    - Login Page
    - Dashboard Page

I have implemented the project to meet the test requirements as follows:

    1. React JS
        This project is built with React.js, the core library for building the user interface.

    2. JavaScript (ES6+ features)
        Modern ES6+ JavaScript features, including arrow functions, destructuring, and template literals, are used throughout the project.

    3. TypeScript for Type Safety
        TypeScript is used to enforce type safety. I created interfaces in the types folder to ensure type definitions are maintained:
            - Auth.ts: Defines the structure for authentication.
            - User.ts: Defines the structure for user data used in LoginPage and DashboardPage.

    4. Clean, Readable, and Maintainable Code
        I structured the project with reusable and customizable global components:
            - Button: Reusable for different buttons across the app.
            - Input: For text inputs with options to display icons.
            - Modal: A customizable modal for displaying user details.
            - ThemeSwitcher: To toggle between light and dark modes.
            - Footer, Navbar, and Layout: To manage the overall structure and appearance.
        The code follows best practices to ensure it is clean, modular, and maintainable.

    5. Functional Components and React Hooks
        I used functional components and React hooks (useState, useContext, useEffect) to manage UI state and authentication.
            - An authentication provider (AuthContext) is used to manage user login state globally.
            - LoginForm is implemented as functional components to ensure modularity.

    6. Styling and Responsiveness
        TailwindCSS and DaisyUI were used to handle styling and ensure the application is fully responsive on mobile and desktop devices.

Page Requirements:
    a. Login Page
        i. Ability to login by username and password (using mock data):

            - Mock user data is available in the data/users.ts file. Users can log in using pre-defined credentials.
            - There is an option to toggle password visibility to prevent typing errors.

        ii. Ability to handle errors on login fail:

            - If the username or password is incorrect, an error message is displayed using SweetAlert2.

    b. Dashboard (Home) Page
        i. Ability to allow only logged-in users to access:

            - AuthContext and a PrivateRoute are used to restrict access to the dashboard. If a user is not logged in, they are redirected to the login page. Logged-in users can log out.

        ii. Ability to display a simple welcome message:
        
            - A welcome message is displayed in a modal upon successful login and also on the dashboard navbar.
        
        iii. Ability to list entries available (using mock data):

            - The dashboard displays a table of user entries from mock data (users.ts).
            - Null handle.

        iv. Ability to search and filter entries:

            - Users can search by name, position, department, email, and phone.
            - Users can filter which columns (such as name, position, department) to display in the table.

        v. Ability to show detailed information:

            - By clicking the Details button for any user, a modal with the user's detailed information (including email, phone, and address) is displayed.

Conclusion:
    I have structured the project to meet all the requirements outlined in the test. The application is fully functional, responsive, and uses mock data to demonstrate login and dashboard features.

    Additionally, I have tested the production build and successfully served the project using serve.