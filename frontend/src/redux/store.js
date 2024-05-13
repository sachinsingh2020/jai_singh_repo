import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';
import { chatReducer } from './reducers/chatReducer';
import { messageReducer } from './reducers/messageReducer';


const store = configureStore({
    reducer: {
        user: userReducer,
        chat: chatReducer,
        message: messageReducer,
    }
})

export default store;

export const server = "http://localhost:4000/api/v1"
// export const server = "https://new-backend-chat-app-full-stack.onrender.com/api/v1"
// export const server = "https://fullstackchatappbackend-production.up.railway.app/api/v1"
