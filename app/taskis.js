/**
 *
 */
angular.module("taskis", ["app"]);

/**
 *
 */
function taskis() {
    gapi.auth.authorize({
        client_id: config.client_id,
        discoveryDocs: config.discovery,
        scope: config.scopes.join(" "),
        immediate: true
    }, function (authResult) {
        if (authResult && !authResult.error) {
            gapi.client.load("tasks", "v1", function() {
                gapi.client.load("plus", "v1", function() {
                    gapi.client.plus.people.get({
                        "userId": "me"
                    }).execute(function(resp) {
                        console.log("Retrieved profile for:" ,resp);
                    });
                    angular.bootstrap(document, ["taskis"]);
                });
            });
        } else {
            jQuery.get("signin.html", function(html){
                jQuery("body").append(html);
                UIkit.modal("#signin").show();
            });
        }
    });
}