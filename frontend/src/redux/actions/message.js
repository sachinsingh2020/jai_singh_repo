import { server } from '../store';
import axios from 'axios';

export const sendMessageFunction = (content, chatId) => async (dispatch) => {
    try {
        // console.log("sachin");
        dispatch({ type: 'sendMessageRequest' });
        const { data } = await axios.post(`${server}/send`, {
            content,
            chatId,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        // console.log(data);
        dispatch({ type: 'sendMessageSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'sendMessageFail', payload: error.response.data.message });
    }
}

export const allMessagesFunction = (chatId) => async (dispatch) => {
    try {
        dispatch({ type: 'allMessagesRequest' });
        const { data } = await axios.get(`${server}/allmsg/${chatId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        // console.log(data);
        dispatch({ type: 'allMessagesSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'allMessagesFail', payload: error.response.data.message });
    }
}

export const fetchMyAllMessagesFunction = () => async (dispatch) => {
    try {
        dispatch({ type: 'fetchMyAllMessagesRequest' });
        const { data } = await axios.get(`${server}/fetchallmessages`, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        // console.log("allFetchedMessages", data);

        dispatch({ type: 'fetchMyAllMessagesSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'fetchMyAllMessagesFail', payload: error.response.data.message });
    }
}

export const updateSeenMessageFunction = (messageId) => async (dispatch) => {
    try {
        dispatch({ type: 'updateSeenMessageRequest' });
        const { data } = await axios.put(`${server}/seen`, { messageId }, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        // console.log("messgeSeenSuccessfull", data);
        dispatch({ type: 'updateSeenMessageSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'updateSeenMessageFail', payload: error.response.data.message });
    }
}

export const seenAllMessageFromThisChatFunction = (chatId) => async (dispatch) => {
    try {
        dispatch({ type: 'seenAllMessageFromThisChatRequest' });
        const { data } = await axios.put(`${server}/seenall`, { chatId }, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        // console.log("messgeSeenSuccessfull", data);
        dispatch({ type: 'seenAllMessageFromThisChatSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'seenAllMessageFromThisChatFail', payload: error.response.data.message });
    }
}