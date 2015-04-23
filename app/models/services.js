// Model file for integration Appcelerator Titanium Alloy with Wordpress JSON Plugin
//

exports.definition = {
  config: {
    adapter: {
      type: "rest",
      collection_name: "services"
    }
  },
  extendCollection: function(Collection) {
    _.extend(Collection.prototype, {
      url : function() {
        return "https://dbUBeketcWj9aWl7zAvqqtZrZXTCvnu1P8oAb6Rr:javascript-key=6ZLWfep4E66CKPF6dGb7jvvFaTSrXYfWa0A5LvHN@api.parse.com/1/classes/Services";
      },
    });
 
    return Collection;
  }
};