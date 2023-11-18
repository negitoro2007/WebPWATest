function set(name, img) {
    var myUrl = window.location.href;
    let url_string = window.location.href;
    let url = new URL(url_string);
    let data = url.searchParams.get("url");
    console.log(data);
    var manifest = {
        name: "PWA Test",
        short_name: "PWA",
        theme_color: "#2196f3",
        background_color: "#2196f3",
        display: "standalone",
        start_url: "./index.html",
        icons: [
            {
                src: "./images/icon-192x192.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
    manifest.name = name;
    short_name = name;
    manifest.icons[0].src = img;
    manifest.start_url = data;
    const stringManifest = JSON.stringify(manifest);
    const blob = new Blob([stringManifest], { type: "application/json" });
    const manifestURL = URL.createObjectURL(blob);
    document.querySelector("#my-manifest").setAttribute("href", manifestURL);
}

set("test", "images/web2app4.png");
