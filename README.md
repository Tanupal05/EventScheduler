# Dynamic User Availability and Event Scheduling System

Dynamic User Availability and Event Scheduling System is a comprehensive web application designed to manage and schedule user availability and events efficiently.

## Setup and Installation

### Prerequisites

- Node.js
- MongoDB instance

### Backend Setup

1. **Clone the Repository**:
   `git clone https://github.com/Tanupal05/EventSyncScheduler.git`

2. **Navigate to the Backend Directory**:
   `cd Backend`

3. **Install Dependencies**:
   `npm install`

4. **Configure Environment Variables**:
   - Create a `.env` file in the `backend` directory with the following content:
     ```
     PORT=5000
     MONGODB_URL=mongodb://localhost:27017/scheduler-app
     ORIGIN=http://localhost:3000
     ```

5. **Start the Backend Server**:
   `npm start`

### Frontend Setup

1. **Navigate to the Frontend Directory**:
   `cd frontend`

2. **Install Dependencies**:
   `npm install`

3. **Start the Frontend Application**:
   `npm start`

## Accessing the Application

- Open `http://localhost:3000` in your web browser to start using the application.

## System Architecture

- **Frontend**: Built with React for an interactive and responsive user interface.
- **Backend**: Powered by Express.js for API services, with MongoDB used for data storage and management.

## Design Choices

- **React**: Chosen for its efficient, component-based approach to building user interfaces.
- **Express.js**: Provides a solid framework for creating RESTful APIs.
- **MongoDB**: Used for its flexible schema and scalability for managing user data and scheduling information.

## Considerations

- **Security**: Implement measures to secure sensitive data and use HTTPS in production.
- **Performance**: Focus on optimizing backend responses and handling errors effectively.

