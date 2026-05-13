# ✉️ MessageBoardApp

> A lightweight, server-side rendered (SSR) web application featuring a mini message board where users can view posted notes and submit their own messages in real-time.

## 📌 About The Project
MessageBoardApp is a full-stack web application designed to demonstrate the fundamentals of backend development using the Node.js ecosystem. The project focuses on handling HTTP requests (GET and POST), implementing dynamic routing, and rendering server-side templates using EJS. It serves as a solid foundation for understanding the Model-View-Controller (MVC) architectural pattern.

## 🛠️ Tech Stack
*   **Backend:** Node.js, Express.js
*   **Frontend / Templating:** EJS (Embedded JavaScript), HTML5, CSS3
*   **Deployment:** Render / Railway (or similar)

## 🌟 Key Features
*   📥 **Dynamic Message Feed:** Displays a chronological list of user-submitted messages, including username, text, and precise timestamp.
*   ✍️ **Message Submission Form:** A dedicated interface allowing users to quickly write and add new messages to the board.
*   🔄 **Data Persistence (In-Memory):** Efficiently stores and appends message objects on the server side during runtime.
*   🛣️ **Express Routing:** Clean Separation of Concerns with dedicated routes for the home feed and the message creation endpoints.
*   📱 **Responsive Board Design:** Simple and responsive layout styled to provide a seamless browsing experience on both mobile and desktop screens.

## 📂 Project Structure Brief
*   `app.js` / `server.js` - Main entry point configuring the Express application and middleware.
*   `routes/` - Defines the application endpoints (e.g., `/` for the feed, `/new` for the form).
*   `views/` - EJS templates utilized to structure the frontend markup before rendering.

## 📈 Key Learnings & Engineering Challenges
*   **HTTP Method Handling:** Mastered the pipeline of capturing data from a HTML form via `POST` requests and parsing the body elements using `express.urlencoded()`.
*   **Data Flow & Redirection:** Implemented seamless server-side redirection (`res.redirect('/')`) to automatically update the user interface immediately after a new data point is injected.
*   **Time Formatting:** Learned how to work with JavaScript `Date` objects on the backend to append human-readable timestamps to every user message.
