var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // get all messages
    getAllMessages();
    MessagesView.render();
  },

  render: function() {
    var messageHTML = '';
    // iterate through the messages
    Messages.allMessages.forEach(function(message) {
      // render message to DOM in chats section
      messageHTML += MessageView.render(message);
    });
    $chats.append(messageHTML);
  }

};