var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox`,

  // Maybe modify create method for other post requests

  create: function(payload, successCB, errorCB = null, endpoint = '/classes/messages') {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: `${Parse.server}${endpoint}`,
      type: 'POST',
      data: JSON.stringify(payload),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to create', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null, endpoint = '/classes/messages') {
    $.ajax({
      url: `${Parse.server}${endpoint}`,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      },
      Origin: Parse.server
    });
  }

};