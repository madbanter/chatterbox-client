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
      Messages.allMessages.forEach(function(message) {
        // render message to DOM in chats section
        messageHTML += MessageView.render(message);
      });
      MessagesView.$chats.append(messageHTML);
    }
  }

};