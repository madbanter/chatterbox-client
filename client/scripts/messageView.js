var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username">${message.username}</div>
        <div>${message.text}</div>
      </div>
    `),

  renderMessage: function(message) {
    // render message to DOM in chats section
    return MessageView.render(message);
  }
};

/*
var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};
*/