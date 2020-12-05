var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // get all messages
    // Messages.getAllMessages(); Should not be in controller? Event instead?
    MessagesView.render();
  },

  render: function() {
    var messageHTML = '';
    // iterate through the messages
    if (Messages.allMessages) {
      for (let i = 0; i < Messages.allMessages.length; i++) {
        let message = Messages.allMessages[i];
        message.text = message.text || ' '; // Protects against messages with no text property.
        messageHTML += MessageView.renderMessage(message);
      }
      MessagesView.$chats.append(messageHTML);
    }
  }
};