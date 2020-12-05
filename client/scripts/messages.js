var Messages = {

};

Messages.getAllMessages = function() {
  Parse.readAll(function(payload) {
    // console.log('payload: ', payload.results);
    Messages.allMessages = payload.results;
  // Trigger View from here
  // var filteredRoom = payload.results.filter(msg => { msg.roomname && msg.roomname.length !== 0 && !msg.roomname.includes('script'); });
  // console.log(filteredRoom);
  }, null, '/classes/messages');
};

Messages.createMessage = function() {

};

Messages.deleteMessage = function() {

};