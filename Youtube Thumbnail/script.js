document.getElementById("thumbnailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var youtubeUrl = document.getElementById("youtubeUrl").value;
    var videoId = extractVideoId(youtubeUrl);
    var thumbnailUrl = "https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg";
    downloadThumbnail(thumbnailUrl);
});

function extractVideoId(url) {
    var match = url.match(/(?:youtu.be\/|youtube.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^?&]+)/i);
    return match[1];
}

function downloadThumbnail(url) {
    var link = document.createElement("a");
    link.href = url;
    link.download = "thumbnail.jpg";
    link.click();
}