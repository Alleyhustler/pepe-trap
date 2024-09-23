document.getElementById("audioButton").addEventListener("click", function() {
    const audio = document.getElementById("audio");
    audio.currentTime = 0; // Reset audio to start
    audio.play().catch(error => {
        console.error("Audio playback failed:", error);
    });
});
