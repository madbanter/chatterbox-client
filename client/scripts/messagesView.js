var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // get all messages
    Messages.getAllMessages();
    MessagesView.render();
  },

  render: function() {
    var messageHTML = '';
    // iterate through the messages
    if (Messages.allMessages) {
      for (let i = 0; i < Messages.allMessages.length; i++) {
        messageHTML += MessageView.renderMessage(Messages.allMessages[i]);
        console.log(Messages.allMessages[i]);
      }
      MessagesView.$chats.append(messageHTML);
    }
  }
};