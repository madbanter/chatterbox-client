var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // get all messages
    // Messages.getAllMessages(); Should not be in controller? Event instead?
    MessagesView.render();
  },

  render: function(messages = Messages.allMessages) {
    // iterate through the messages
    if (messages) {
      for (let i = 0; i < messages.length; i++) {
        let message = messages[i];
        message.username = message.username || 'nobody';
        message.text = message.text || ' '; // Protects against messages with no text property.
        MessagesView.renderMessage(message);
      }
    }
  },

  renderMessage: function(message) {
    // render message to DOM in chats section
    var messageHTML = MessageView.render(message);
    MessagesView.$chats.append(messageHTML);
  }
};