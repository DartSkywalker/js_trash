function learnRS(lang, callback) {
    console.log("I am learning " + lang);
    callback();
}

learnRS("JS", function() {
    console.log("CallBack test")
});