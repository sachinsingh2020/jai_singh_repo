import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import SideDrawer from '../miscellaneous/SideDrawer'
import MyChats from './MyChats';
import ChatBox from './ChatBox';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../../redux/actions/user';
import { fetchChatsFunction } from '../../redux/actions/chat';
import { fetchMyAllMessagesFunction } from '../../redux/actions/message';
import { all } from 'axios';

const ChatPage = () => {
    const dispatch = useDispatch();

    const { me } = useSelector(state => state.user);
    const { selectedChat, chats } = useSelector(state => state.chat);
    const { notification, allFetchedMessages } = useSelector(state => state.message);

    useEffect(() => {
        dispatch(getMe());
        dispatch(fetchChatsFunction());
        dispatch(fetchMyAllMessagesFunction());
    }, [dispatch]);

    useEffect(() => {
        if (allFetchedMessages) {
            for (let i = 0; i < allFetchedMessages.length; i++) {
                if (allFetchedMessages[i].seen === false && allFetchedMessages[i].sender._id !== me._id) {
                    // console.log(allFetchedMessages[i])
                    dispatch({ type: 'updateNotification', payload: allFetchedMessages[i] })
                }
            }
        }
    }, [allFetchedMessages])

    useEffect(() => {

        if (selectedChat) {
            for (let i = 0; i < notification.length; i++) {
                if (notification[i].chat._id === selectedChat._id) {
                    dispatch({ type: 'filterNotification', payload: notification[i] })
                }
            }
        }
        // eslint-disable-next-line
    }, [selectedChat])

    return (
        <div style={{ width: '100%' }} >
            {me && <SideDrawer />}
            <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
                {me && <MyChats />}
                {me && <ChatBox />}
            </Box>
        </div>
    )
}

export default ChatPage
