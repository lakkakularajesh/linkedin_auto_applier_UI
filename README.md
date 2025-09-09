# Auto Job Applier Frontend

This project is a React and Redux application that connects to a backend API for managing job applications. It allows users to view their applied jobs and update the application dates.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd linkedin_auto_applier_UI
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will start the development server and open the application in your default web browser.

## Folder Structure

```
auto-job-applier-frontend
├── public
│   └── index.html          # Main HTML file for the React application
├── src
│   ├── api
│   │   └── jobsApi.ts      # API functions to interact with the backend
│   ├── components
│   │   ├── AppliedJobsList.tsx  # Component to display a list of applied jobs
│   │   └── JobDetails.tsx       # Component to display job details
│   ├── config
│   │   └── index.ts          # Configuration settings for the application
│   ├── redux
│   │   ├── store.ts          # Redux store setup
│   │   ├── jobsSlice.ts      # Redux slice for managing applied jobs
│   │   └── rootReducer.ts     # Combines all reducers
│   ├── App.tsx               # Main application component
│   ├── index.tsx             # Entry point for the React application
│   └── types
│       └── index.ts          # TypeScript types and interfaces
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```

## Technologies Used

- React
- Redux
- TypeScript
- Flask (for the backend)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE. See the LICENSE file for details.
