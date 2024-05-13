import { MenuItem } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOppositeName, getSender, getSenderFull } from '../config/ChatLogics';
import { seenAllMessageFromThisChatFunction } from '../../redux/actions/message';
import { getMe } from '../../redux/actions/user';

const NonRepeat = ({ notification }) => {
    const dispatch = useDispatch();

    const { me } = useSelector((state) => state.user);

    const selectChatHandler = (chat, notif) => (e) => {
        e.preventDefault();

        dispatch({ type: 'updateSelectedChat', payload: chat });
        dispatch(seenAllMessageFromThisChatFunction(chat._id))
        dispatch({ type: 'filterNotification', payload: notif });
    };

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    const uniqueKeys = Array.from(new Set(notification.map((notif) => notif._id)));

    return (
        <>
            {me && uniqueKeys.map((key) => {
                const notif = notification.find((item) => item._id === key);
                return (
                    <MenuItem key={key} onClick={selectChatHandler(notif.chat, notif)}>
                        {notif.chat.isGroupChat
                            ? `New Message in ${notif.chat.chatName}`
                            : `New Message from ${getOppositeName(notif.chat.users, me)}`}
                    </MenuItem>
                );
            })}
        </>
    );
};

export default NonRepeat;
