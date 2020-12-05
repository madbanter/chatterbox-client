var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username">${message.username}</div>
        <div>${message.text}</div>
      </div>
    `)
};

/*
var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};
*/