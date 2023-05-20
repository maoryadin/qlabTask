The project is a React Native app that displays a table of data fetched from an mock data. The app uses custom fonts and Redux & Redux-persist for state management. The table is rendered using a custom Table component that accepts an array of data and an array of headers as props. The app also includes a Profile section for each user.

The app is structured using the following components:

App: The main component that renders the Table component.
This component also fetches the data from the API/MockData in our case and stores it in the Redux store.

Table: A custom component that renders a table of data. This component accepts an array of data and an array of headers as props.
dataReducer: A reducer that stores the data fetched from the API.

Profile: There is also a Profile section for each row/user.

The custom fonts used in the app are Comfortaa and Montserrat, which are loaded using the expo-font package.

Overall, the app provides a simple and intuitive interface for displaying and filtering data, with custom fonts and Redux for state management.