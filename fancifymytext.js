window.onload = function() {
    document.getElementById("biggerBtn").onclick = makeBigger;
    document.getElementById("mooBtn").onclick = mooFunction;
};

function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function changeStyle() {
    var textArea = document.getElementById("textInput");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooFunction() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value.toUpperCase();
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim() + "-Moo";
        }
    }
    textArea.value = sentences.join(". ");
}
