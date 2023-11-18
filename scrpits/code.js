function ReadContent() {
    //let frame = document.getElementById("frame").contentWindow.document;
    //console.log(frame);
    document.getElementById("fa").href =
        "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://google.com&size=16";
}
let url_string = window.location.href;
let url = new URL(url_string);
let data = url.searchParams.get("url");
console.log(data);
function inf() {
    document
        .getElementById("frame")
        .insertAdjacentHTML(
            "beforebegin",
            "<iframe src=" +
                data +
                ' frameborder="0" id="frame" class="full"></iframe>'
        );
}
window.onload = inf;
