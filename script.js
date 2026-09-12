const songs = [
    { id: 1, title: "Night Changes", artist: "One Direction", file: "songs/night-changes.mp3", theme: "dreamy" },
    { id: 2, title: "A Sky Full of Stars", artist: "Coldplay", file: "songs/sky-full-of-stars.mp3", theme: "chill" },
    { id: 3, title: "Sunflower", artist: "Post Malone", file: "songs/sunflower.mp3", theme: "energetic" },
    { id: 4, title: "Blinding Lights", artist: "The Weeknd", file: "songs/blinding-lights.mp3", theme: "dark" },
];

const songListEl = document.getElementById("songList");
const searchInputEl = document.getElementById("searchInput");
const playerEl = document.getElementById("player");
const audioEl = document.getElementById("audio");
const playerTitleEl = document.getElementById("playerTitle");
const playerArtistEl = document.getElementById("playerArtist");
const playPauseBtn = document.getElementById("playPauseBtn");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const lyricPrevEl = document.getElementById("lyricPrev");
const lyricCurrentEl = document.getElementById("lyricCurrent");
const lyricNextEl = document.getElementById("lyricNext");
const expandToggleBtn = document.getElementById("expandToggle");
const musicBox = document.getElementById("musicBox");
const boxHeader = document.getElementById("boxHeader");
const particlesEl = document.getElementById("particles");

let currentSong = null;
let currentLyrics = [];
let currentLyricIndex = -1;

function renderSongs(songArray) {
    songListEl.innerHTML = "";
    songArray.forEach(song => {
        const songEl = document.createElement("div");
        songEl.classList.add("song-item");
        songEl.textContent = `🎵 ${song.title} — ${song.artist}`;
        songEl.addEventListener("click", () => {
            document.querySelectorAll(".song-item").forEach(el => el.classList.remove("selected"));
            songEl.classList.add("selected");
            loadSong(song);
        });
        songListEl.appendChild(songEl);
    });
}

function parseLRC(lrcText) {
    const lines = lrcText.split("\n");
    const result = [];
    const timeTag = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

    lines.forEach(line => {
        const match = line.match(timeTag);
        if (match) {
            const minutes = parseInt(match[1]);
            const seconds = parseInt(match[2]);
            const millis = parseInt(match[3].padEnd(3, "0"));
            const time = minutes * 60 + seconds + millis / 1000;
            const text = line.replace(timeTag, "").trim();
            if (text) result.push({ time, text });
        }
    });

    return result;
}

async function fetchLyrics(song) {
    try {
        const url = `https://lrclib.net/api/get?track_name=${encodeURIComponent(song.title)}&artist_name=${encodeURIComponent(song.artist)}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();

        if (data.syncedLyrics) {
            return parseLRC(data.syncedLyrics);
        } else if (data.plainLyrics) {
            return [{ time: 0, text: data.plainLyrics.split("\n")[0] }];
        }
        return [];
    } catch (err) {
        console.log("Lyrics fetch failed:", err);
        return [];
    }
}

async function loadSong(song) {
    currentSong = song;
    currentLyricIndex = -1;
    playerEl.classList.remove("hidden");
    playerTitleEl.textContent = song.title;
    playerArtistEl.textContent = song.artist;
    audioEl.src = song.file;
    audioEl.play().catch(err => console.log("Play error:", err));
    playPauseBtn.textContent = "❚❚";
    lyricPrevEl.textContent = "";
    lyricCurrentEl.textContent = "Loading lyrics...";
    lyricNextEl.textContent = "";
    document.body.classList.add("playing");
    expandToggleBtn.classList.remove("hidden");

    document.body.classList.remove("theme-chill", "theme-romantic", "theme-dark", "theme-energetic", "theme-dreamy");
    if (song.theme) {
        document.body.classList.add(`theme-${song.theme}`);
    }

    currentLyrics = await fetchLyrics(song);
    if (currentLyrics.length === 0) {
        lyricCurrentEl.textContent = "🎵 (no synced lyrics found)";
    }
}

expandToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("playing");
});

playPauseBtn.addEventListener("click", () => {
    if (audioEl.paused) {
        audioEl.play();
        playPauseBtn.textContent = "❚❚";
    } else {
        audioEl.pause();
        playPauseBtn.textContent = "▶";
    }
});

audioEl.addEventListener("timeupdate", () => {
    if (audioEl.duration) {
        progressBar.value = (audioEl.currentTime / audioEl.duration) * 100;
        currentTimeEl.textContent = formatTime(audioEl.currentTime);
        durationEl.textContent = formatTime(audioEl.duration);
    }
    updateLyrics();
});

function updateLyrics() {
    if (!currentLyrics.length) return;
    const time = audioEl.currentTime;

    let newIndex = -1;
    for (let i = 0; i < currentLyrics.length; i++) {
        if (time >= currentLyrics[i].time) newIndex = i;
    }

    if (newIndex !== currentLyricIndex && newIndex !== -1) {
        currentLyricIndex = newIndex;
        lyricPrevEl.textContent = currentLyrics[newIndex - 1] ? currentLyrics[newIndex - 1].text : "";
        lyricCurrentEl.textContent = currentLyrics[newIndex].text;
        lyricNextEl.textContent = currentLyrics[newIndex + 1] ? currentLyrics[newIndex + 1].text : "";
    }
}

progressBar.addEventListener("input", () => {
    if (audioEl.duration) {
        audioEl.currentTime = (progressBar.value / 100) * audioEl.duration;
    }
});

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
}

searchInputEl.addEventListener("input", () => {
    const query = searchInputEl.value.toLowerCase();
    const filtered = songs.filter(song => song.title.toLowerCase().includes(query));
    renderSongs(filtered);
});

// ---- DRAGGABLE BOX (mouse + touch) ----
let isDragging = false;
let dragOffsetX = 0;
let dragOffsetY = 0;

function startDrag(clientX, clientY, target) {
    if (target === expandToggleBtn) return;
    isDragging = true;
    const rect = musicBox.getBoundingClientRect();
    dragOffsetX = clientX - rect.left;
    dragOffsetY = clientY - rect.top;
    musicBox.classList.add("dragging");
    musicBox.style.transform = "none";
}

function moveDrag(clientX, clientY) {
    if (!isDragging) return;
    musicBox.style.left = (clientX - dragOffsetX) + "px";
    musicBox.style.top = (clientY - dragOffsetY) + "px";
}

function endDrag() {
    isDragging = false;
    musicBox.classList.remove("dragging");
}

boxHeader.addEventListener("mousedown", (e) => {
    startDrag(e.clientX, e.clientY, e.target);
});
document.addEventListener("mousemove", (e) => {
    moveDrag(e.clientX, e.clientY);
});
document.addEventListener("mouseup", endDrag);

boxHeader.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY, e.target);
}, { passive: true });

document.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    moveDrag(touch.clientX, touch.clientY);
}, { passive: true });

document.addEventListener("touchend", endDrag);

// ---- FLOATING PARTICLES ----
function createParticles(count = 25) {
    particlesEl.innerHTML = "";
    for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.classList.add("particle");
        const size = Math.random() * 6 + 3;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}vw`;
        p.style.animationDuration = `${Math.random() * 10 + 8}s`;
        p.style.animationDelay = `${Math.random() * 8}s`;
        particlesEl.appendChild(p);
    }
}

createParticles();
renderSongs(songs);