angular.module('starter.services', [])
.factory('Chats', function($http) {
  var chats = Mock.mock( {
    'name'	   : '@name',
    'age|1-100': 100,
    'color'	   : '[@color]',
    "prizes|5": [
      {
        "id|1-100":100,
        "type":"论文",
        "title": "@ctitle",
        "prizeDate": "@date",
        "graph": "@cparagraph",
        "img":Mock.Random.dataImage('60x60', '论文')
      }
    ]
  });
  // Some fake testing data
  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.prizes.length; i++) {
        if ( chats.prizes[i].id === parseInt(chatId)) {
          return chats.prizes[i];
        }
      }
      return null;
    }
  };
});
