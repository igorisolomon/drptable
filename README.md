# Building a Table with React

This document describes the process of building a table with React by the DRP group. The following sections will provide an overview of the steps taken, including the tools used and the challenges encountered.

URL: [https://drptable-igorisolomon.vercel.app/](https://drptable-igorisolomon.vercel.app/)

## Technology

- React
- Typescript
- MUI
- Axios

## Start Application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## My Process


### Initial Setup

The project was initialized using Create React App (CRA). This provided a basic structure for the project and set up a development environment with webpack and Babel.

### Structuring Files and Folders

The first step was to structure the files and folders of the project. This involved organizing the components and services in a logical way, making sure that the code was readable and maintainable.

src
├── App.css
├── App.tsx
├── __mocks__
│   └── axios.ts
├── __tests__
│   ├── App.test.tsx
│   └── Dashboard.test.tsx
├── components
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Table.tsx
│   └── __tests__
│       ├── Footer.test.tsx
│       └── Header.test.tsx
├── index.css
├── index.tsx
├── layouts
│   └── Dashboard.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── setupTests.ts
└── utils
    ├── httpService.ts
    └── interfaces.ts

### Setting up Material-UI

To build the table, we decided to use Material-UI, a popular library for building user interfaces with Material Design in React. We installed the library and set up the basic components needed to build the table.

### Building the Header

Next, we focused on building the header of the table. We created a `Header` component and implemented its functionality, including displaying the title of the table. We also wrote test cases for the `Header` component to ensure that it was working correctly.

### Implementing the Footer

We then implemented the footer of the table, which displays the current year. We created a `Footer` component and wrote test cases to ensure that it was working correctly.

### Adding an HTTP Service

To fetch data for the table, we added an HTTP service to the project. This service is responsible for making requests to the server and handling the responses.

### Creating the Table

With the basic structure of the table in place, we implemented the main `Table` component. This component is responsible for displaying the data in a tabular format and handling user interactions.

### Implementing Table Editing

To allow users to edit the table, we created an `EditTable` component. This component is responsible for handling the editing of cell values and updating the data in the table. We also wrote test cases to ensure that the component was working correctly.

### Cleaning Up Data

Finally, we cleaned up the data before displaying it in the table. This involved removing any unnecessary fields and formatting the data in a way that was easy to display in the table.

## Conclusion

Building a table with React required the use of various tools and techniques, including Material-UI, Jest, and Enzyme. By following a structured approach and writing test cases, we were able to build a functional and maintainable table that met the requirements of the project.