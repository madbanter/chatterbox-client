var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.renderRoom();
    RoomsView.$select.on('change', function() {
      console.log(`roomname ${$('select option:selected').text()} clicked!`);
      let roomname = $('select option:selected').text();
      var prevMessages = document.querySelector("#chats");
      prevMessages.replaceChildren();
      // console.log('prev messages: ', prevMessages);
      var filteredMessages = Messages.allMessages.filter(msg => {
        console.log('msg.roomname: ', msg.roomname);
        if ( msg.roomname) {
          msg.roomname === roomname;
        }
        console.log('roomname: ', roomname);
      });
      // console.log('filteredMessages: ', filteredMessages);
      MessagesView.render(filteredMessages);
    });
  },

  renderTemplate: _.template(`<option value="<%- objectId %>"><%- roomname %></option>`),

  render: function(room) {
    RoomsView.$select.append(RoomsView.renderTemplate(room));
  },

  renderRoom: function() {
    if (Rooms.allRooms) {
      for (let i = 0; i < Rooms.allRooms.length; i++) {
        let room = Rooms.allRooms[i];
        room.roomname = room.roomname || 'empty room';
        if (room.roomname.includes('<script>')) {
          continue;
        }
        RoomsView.render(room);
      }
    }
  }
};

// $( "select" )
//   .change(function () {
//     var str = "";
//     $( "select option:selected" ).each(function() {
//       str += $( this ).text() + " ";
//     });
//     $( "div" ).text( str );
//   })
//   .change();
