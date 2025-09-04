# Assignment1

Book Finder Web Application:

	* This is a simple and elegant web application that allows users to search for books using the Open Library API. It's built with React (using CDN links) and features a         clean, responsive user interface with both light and dark modes.

✨ Features:-

	* Book Search: Search for any book by its title.
	* Interactive Grid Display: Search results are displayed in a clean, responsive grid of book covers.
	* Detailed Information: Click on any book to open a modal window with more details, including the author, first publication year, and a list of subjects.
	* External Linking: A "Read More" link in the modal takes the user directly to the book's page on the Open Library website.
	* Theme Toggling: Easily switch between a light and a dark theme to suit your viewing preference.
	* User Feedback: Clear loading and "no results" messages to enhance user experience.
	* Responsive Design: The layout adapts smoothly to different screen sizes, from mobile devices to desktops.

🛠️ Technologies Used:-

	* HTML5: For the basic structure of the web page.
	* CSS3: For all the styling, including the grid layout, modal design, and theme switching.
	* JavaScript (ES6+): For the application logic.
	* React: For building the user interface as a single-page application (loaded via CDN).
	* Babel: To transpile JSX into plain JavaScript directly in the browser (loaded via CDN).
	* Open Library API: To fetch book data.

📂 File Structure:-

The project is organised into three main files:

	* index.html: The entry point of the application. It sets up the basic HTML structure, includes the necessary React and Babel libraries from a CDN, and links the 		        stylesheet and the main script file.
	* style.css: Contains all the CSS rules for styling the application. This includes the header, search bar, book card grid, modal pop-up, and the styles for both the            light and dark themes.
	* script.js: This file contains the entire React application logic. It's written as a single functional component (App) using React Hooks (useState) to manage state for        the search query, book results, selected book details, and the current theme.
