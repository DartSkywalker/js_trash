function learnRS(lang, callback) {
    console.log("I am learning " + lang);
    callback();
}

function done() {
    console.log("CallBack test");
}

learnRS("JS", done);