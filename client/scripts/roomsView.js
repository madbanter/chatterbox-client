var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.renderRoom();
  },

  renderTemplate: _.template(`<option><%- roomname %></option>`),

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
