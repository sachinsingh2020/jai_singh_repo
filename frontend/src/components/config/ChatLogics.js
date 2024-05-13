export const getSender = (loggedUser, users) => {
  return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
};

export const getOppositeName = (selectedChat, me) => {
  // console.log("sachin",selectedChat);
  // console.log("selectedChat", selectedChat.users[0]);
  // console.log("me", me);
  if (selectedChat[0]._id === me._id)
    return selectedChat[1].name
  else
    return selectedChat[0].name
}

export const getSenderFull = (loggedUser, users) => {
  // console.log("loggedUser", loggedUser);
  // console.log("user[0]", users[0])
  // if (users[0]._id === loggedUser._id)
  // console.log("user[1]", users[1])
  // else
  //     console.log("user[0]", users[0]);
  console.log("loggedUser")
  return users[0] === loggedUser._id ? users[1] : users[0];
};

export const getNewSenderFull = (selectedChat, me) => {
  console.log(selectedChat, me);

  if (selectedChat.users[0]._id === me._id) {
    return selectedChat.users[1]
  }
  else {
    return selectedChat.users[0]
  }
}

export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId
  );
};

export const isLastMessage = (messages, i, userId) => {
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
};

export const isSameSenderMargin = (messages, m, i, userId) => {
  // console.log(i === messages.length - 1);

  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId
  )
    return 33;
  else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 0;
  else return "auto";
};

export const isSameUser = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};