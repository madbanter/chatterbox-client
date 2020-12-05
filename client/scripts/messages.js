var Messages = {

};

Messages.getAllMessages = function() {
  Parse.readAll(function(payload) {
    // console.log('payload: ', payload.results);
    Messages.allMessages = payload.results;
  // Trigger View from here
  }, null, '/classes/messages');
};

Messages.createMessage = function(message) {
  Parse.create(message, function() {
    console.log('success, message sent!');
  });
};

Messages.deleteMessage = function() {

};

// Messages.createMessage(message);

var message = {
  username: 'shawndrost',
  text: '11:20',
  roomname: '4chan'
};
