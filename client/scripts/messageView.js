var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div><%- text %></div>
      </div>
    `),

  renderMessage: function(message) {
    // render message to DOM in chats section
    var test = MessageView.render(message);
    console.log(test);
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