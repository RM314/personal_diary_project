# Project guidelines

Welcome to the Personal Diary project! This project is designed to enhance your skills in React by building a basic-yet-useful, interactive diary application. You will create a user-friendly interface that displays daily entries sorted by date, with each entry presented as a card featuring a preview image and title. Users can click on a card to view full details in a modal window. Additionally, you will implement functionality to add new entries, ensuring they are validated and stored in localStorage. Utilizing TailwindCSS for styling, this project will also provide valuable experience in managing state and effects in a React application.

## Project requirements

FR001	Public GitHub Repository: Store all code in a single public repo; do not add instructors as collaborators.
FR002	Incremental Development with PRs: Merge every change into main via Pull Requests.
FR003	React + Vite Setup:	Scaffold the app with Vite and use React as the UI framework.
FR004	TailwindCSS via npm:	Install Tailwind through npm and configure it with Vite.
FR005	State & Effects Management:	Use React hooks (useState, useEffect, etc.) appropriately for UI state and side-effects.
FR006	Add Entry Button: Provide an “Add Entry” button that opens an entry-creation modal. Control showing/hidding the modal with state. A simple form will do.
FR007	Add Entry Form Fields: Form must collect Title, Date, Image URL, Content.
FR008	LocalStorage Persistence: Store diary entries as an array in localStorage
FR009	One-Entry-Per-Day Check: If an entry already exists for the selected day, prompt the user to come back the next day.
FR010	Form Validation Block: submission unless all fields are populated.
FR011	Homepage List: Display diary entries sorted newest-first.
FR012	Load Entries on Startup: Read and render stored entries when the app first mounts.
FR013	Card Layout: Show each entry as a card with preview image, date and title.
FR014	Entry Detail Modal: Clicking a card opens a modal showing full entry (title, date, image, content). Control showing/hidding the preview modal, as well as its content, with state.
FR015	Static-Site Deployment to Render: Build the app with Vite and deploy the static assets on Render.