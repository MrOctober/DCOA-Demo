var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        adapter: {
            type: "rest",
            collection_name: "services"
        }
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            url: function() {
                return "https://dbUBeketcWj9aWl7zAvqqtZrZXTCvnu1P8oAb6Rr:javascript-key=6ZLWfep4E66CKPF6dGb7jvvFaTSrXYfWa0A5LvHN@api.parse.com/1/classes/Services";
            }
        });
        return Collection;
    }
};

model = Alloy.M("services", exports.definition, []);

collection = Alloy.C("services", exports.definition, model);

exports.Model = model;

exports.Collection = collection;