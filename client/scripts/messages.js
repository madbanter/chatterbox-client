var Messages = {

};

var getAllMessages = function() {
  Parse.readAll(function(payload) {
    // console.log('payload: ', payload.results);
    Messages.allMessages = payload.results;
    console.log(Messages);
  // Trigger View from here
  // var filteredRoom = payload.results.filter(msg => { msg.roomname && msg.roomname.length !== 0 && !msg.roomname.includes('script'); });
  // console.log(filteredRoom);
  }, null, '/classes/messages');
};

console.log(getAllMessages());

var createMessage = function() {

};

var deleteMessage = function() {

};