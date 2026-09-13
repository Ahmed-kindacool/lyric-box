// Songs are now loaded from data/songs.xlsx at page load instead of being hardcoded here.
let songs = [];

const GIF_LIBRARY = {
    gif_sleeping: "gifs/gif_sleeping.gif",
    gif_annoyed: "gifs/gif_annoyed.gif",
    gif_bashinghead: "gifs/gif_bashinghead.gif",
    gif_computer: "gifs/gif_computer.gif",
    gif_what: "gifs/gif_what.gif",
    gif_writing: "gifs/gif_writing.gif",
    gif_tongue: "gifs/gif_tongue.gif",
};

const STICKER_POOLS = {
    dreamy: ["gif_sleeping"],
    dark: ["gif_annoyed", "gif_bashinghead"],
    romantic: ["gif_writing"],
    chill: ["gif_computer"],
    energetic: ["gif_what", "gif_tongue"],
};

const MOOD_COLORS = {
    chill: "#8a4a6a",
    romantic: "#c94b4b",
    dark: "#5a0f0f",
    energetic: "#b35a2a",
    dreamy: "#6a3a6a",
    neutral: "#7a2222",
};

const PIXEL_SHAPES = {
    guitar: [
        [2,0],[3,0], [2,1],[3,1], [2,2],[3,2], [2,3],[3,3],
        [1,4],[2,4],[3,4],[4,4],
        [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],
        [0,6],[1,6],[4,6],[5,6],
        [0,7],[1,7],[2,7],[3,7],[4,7],[5,7],
        [0,8],[5,8],
        [1,9],[2,9],[3,9],[4,9]
    ],
    bat: [
        [1,0],[6,0],
        [0,1],[1,1],[2,1],[5,1],[6,1],[7,1],
        [0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],
        [1,3],[2,3],[3,3],[4,3],[5,3],[6,3],
        [2,4],[3,4],[4,4],[5,4],
        [3,5],[4,5]
    ],
    skull: [
        [2,0],[3,0],[4,0],[5,0],
        [1,1],[2,1],[3,1],[4,1],[5,1],[6,1],
        [1,2],[2,2],[5,2],[6,2],
        [0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],
        [0,4],[2,4],[3,4],[4,4],[5,4],[7,4],
        [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],
        [1,6],[3,6],[4,6],[6,6],
        [2,7],[5,7]
    ]
};

function buildPixelBoxShadow(shape, unit) {
    return shape.map(([x, y]) => `${x * unit}px ${y * unit}px 0 currentColor`).join(", ");
}

const songListEl = document.getElementById("songList");
const searchInputEl = document.getElementById("searchInput");
const particlesEl = document.getElementById("particles");
const suggestionToggle = document.getElementById("suggestionToggle");
const suggestionPanel = document.getElementById("suggestionPanel");
const suggestionInput = document.getElementById("suggestionInput");
const suggestionSubmit = document.getElementById("suggestionSubmit");
const suggestionMsg = document.getElementById("suggestionMsg");

const popupOverlay = document.getElementById("popupOverlay");
const retroWindow = document.getElementById("retroWindow");
const retroTitlebar = document.getElementById("retroTitlebar");
const popupStickerImg = document.getElementById("popupStickerImg");
const popupLyrics = document.getElementById("popupLyrics");
const popupArtistInfo = document.getElementById("popupArtistInfo");
const popupSongTitle = document.getElementById("popupSongTitle");
const popupSongArtist = document.getElementById("popupSongArtist");
const popupClose = document.getElementById("popupClose");
const popupOk = document.getElementById("popupOk");

// ---- LOAD SONGS FROM EXCEL FILE ----
async function loadSongsFromExcel() {
    try {
        const res = await fetch("data/songs.xlsx");
        const buffer = await res.arrayBuffer();
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(sheet);

        songs = rows.map(row => ({
            title: row.title,
            artist: row.artist,
            mood: (row.mood || "chill").toLowerCase().trim(),
        })).filter(s => s.title && s.artist);

        renderSongs(songs);
    } catch (err) {
        console.log("Failed to load songs.xlsx:", err);
        songListEl.innerHTML = `<div class="no-results">Couldn't load songs.xlsx — make sure it's in the /data folder.</div>`;
    }
}

function applyFilters() {
    const query = searchInputEl.value.toLowerCase();
    const filtered = songs.filter(song =>
        song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query)
    );
    renderSongs(filtered);
}

function renderSongs(songArray) {
    songListEl.innerHTML = "";
    if (songArray.length === 0) {
        songListEl.innerHTML = `<div class="no-results">No songs found.</div>`;
        return;
    }
    songArray.forEach(song => {
        const songEl = document.createElement("div");
        songEl.classList.add("song-item");

        const nameEl = document.createElement("div");
        nameEl.classList.add("song-item-name");
        nameEl.textContent = song.title;

        const artistEl = document.createElement("div");
        artistEl.classList.add("song-item-artist");
        artistEl.textContent = song.artist;

        songEl.appendChild(nameEl);
        songEl.appendChild(artistEl);

        songEl.addEventListener("click", () => openPopup(song));
        songListEl.appendChild(songEl);
    });
}

// ---- FULL LYRICS (fetched live, not stored in this file) ----
async function fetchFullLyrics(song) {
    try {
        const url = `https://lrclib.net/api/get?track_name=${encodeURIComponent(song.title)}&artist_name=${encodeURIComponent(song.artist)}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("not found");
        const data = await res.json();

        if (data.plainLyrics) return data.plainLyrics.trim();
        if (data.syncedLyrics) {
            return data.syncedLyrics
                .split("\n")
                .map(l => l.replace(/\[.*?\]/g, "").trim())
                .filter(l => l.length > 0)
                .join("\n");
        }
        return null;
    } catch (err) {
        console.log("Lyrics fetch failed:", err);
        return null;
    }
}

// ---- ARTIST INFO (fetched live from Wikipedia, no API key needed) ----
async function fetchArtistInfo(artistName) {
    try {
        const firstArtist = artistName.split(",")[0].trim();
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(firstArtist)}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("not found");
        const data = await res.json();
        return data.extract || null;
    } catch (err) {
        console.log("Wikipedia fetch failed:", err);
        return null;
    }
}

function setParticleColor(color) {
    particlesEl.style.setProperty("--particle-color", color);
}

async function openPopup(song) {
    setParticleColor(MOOD_COLORS[song.mood] || MOOD_COLORS.neutral);

    const pool = STICKER_POOLS[song.mood] || [];
    const sticker = pool[Math.floor(Math.random() * pool.length)];

    popupStickerImg.classList.add("hidden");
    if (sticker && GIF_LIBRARY[sticker]) {
        popupStickerImg.onerror = () => popupStickerImg.classList.add("hidden");
        popupStickerImg.onload = () => popupStickerImg.classList.remove("hidden");
        popupStickerImg.src = GIF_LIBRARY[sticker];
    }

    popupSongTitle.textContent = song.title;
    popupSongArtist.textContent = song.artist;
    popupLyrics.textContent = "Loading lyrics...";
    popupArtistInfo.textContent = "Loading info...";
    resetWindowPosition();
    popupOverlay.classList.remove("hidden");

    const [lyrics, artistInfo] = await Promise.all([
        fetchFullLyrics(song),
        fetchArtistInfo(song.artist),
    ]);

    popupLyrics.textContent = lyrics || "(lyrics not available for this song)";
    popupArtistInfo.textContent = artistInfo || "(no artist info found)";
}

function closePopup() {
    popupOverlay.classList.add("hidden");
    setParticleColor(MOOD_COLORS.neutral);
}

function resetWindowPosition() {
    retroWindow.style.position = "relative";
    retroWindow.style.left = "0";
    retroWindow.style.top = "0";
}

popupClose.addEventListener("click", closePopup);
popupOk.addEventListener("click", closePopup);
popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) closePopup();
});

searchInputEl.addEventListener("input", applyFilters);

let isDragging = false;
let dragOffsetX = 0;
let dragOffsetY = 0;

function startDrag(clientX, clientY, target) {
    if (target === popupClose) return;
    isDragging = true;
    const rect = retroWindow.getBoundingClientRect();
    dragOffsetX = clientX - rect.left;
    dragOffsetY = clientY - rect.top;
    retroWindow.style.position = "fixed";
    retroWindow.style.left = rect.left + "px";
    retroWindow.style.top = rect.top + "px";
    retroWindow.classList.add("dragging");
}

function moveDrag(clientX, clientY) {
    if (!isDragging) return;
    retroWindow.style.left = (clientX - dragOffsetX) + "px";
    retroWindow.style.top = (clientY - dragOffsetY) + "px";
}

function endDrag() {
    isDragging = false;
    retroWindow.classList.remove("dragging");
}

retroTitlebar.addEventListener("mousedown", (e) => startDrag(e.clientX, e.clientY, e.target));
document.addEventListener("mousemove", (e) => moveDrag(e.clientX, e.clientY));
document.addEventListener("mouseup", endDrag);

retroTitlebar.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY, e.target);
}, { passive: true });

document.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    moveDrag(touch.clientX, touch.clientY);
}, { passive: true });

document.addEventListener("touchend", endDrag);

function createParticles(count = 90) {
    particlesEl.innerHTML = "";
    const shapeNames = Object.keys(PIXEL_SHAPES);

    for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.classList.add("particle");

        const shapeName = shapeNames[Math.floor(Math.random() * shapeNames.length)];
        const shape = PIXEL_SHAPES[shapeName];
        const unit = Math.random() < 0.5 ? 2 : 3;

        p.style.width = `${unit}px`;
        p.style.height = `${unit}px`;
        p.style.boxShadow = buildPixelBoxShadow(shape, unit);
        p.style.left = `${Math.random() * 96}vw`;
        p.style.animationDuration = `${Math.random() * 14 + 9}s`;
        p.style.animationDelay = `${Math.random() * 10}s`;

        particlesEl.appendChild(p);
    }
}

suggestionToggle.addEventListener("click", () => {
    suggestionPanel.classList.toggle("hidden");
});

suggestionSubmit.addEventListener("click", () => {
    const value = suggestionInput.value.trim();
    if (!value) {
        suggestionMsg.textContent = "Type a song first!";
        return;
    }
    const stored = JSON.parse(localStorage.getItem("songSuggestions") || "[]");
    stored.push(value);
    localStorage.setItem("songSuggestions", JSON.stringify(stored));
    suggestionInput.value = "";
    suggestionMsg.textContent = "Thanks! Added to suggestions 🎶";
    setTimeout(() => { suggestionMsg.textContent = ""; }, 3000);
});

createParticles();
loadSongsFromExcel();