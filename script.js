const songs = [
    { title: "Night Changes", artist: "One Direction", mood: "dreamy" },
    { title: "A Sky Full of Stars", artist: "Coldplay", mood: "chill" },
    { title: "Sunflower", artist: "Post Malone", mood: "energetic" },
    { title: "Blinding Lights", artist: "The Weeknd", mood: "dark" },
    { title: "Perfect", artist: "Ed Sheeran", mood: "romantic" },
    { title: "Someone Like You", artist: "Adele", mood: "dark" },
    { title: "Watermelon Sugar", artist: "Harry Styles", mood: "energetic" },
    { title: "Ocean Eyes", artist: "Billie Eilish", mood: "dreamy" },
    { title: "Lover", artist: "Taylor Swift", mood: "romantic" },
    { title: "Circles", artist: "Post Malone", mood: "chill" },
    { title: "Levitating", artist: "Dua Lipa", mood: "energetic" },
    { title: "Say So", artist: "Doja Cat", mood: "energetic" },
    { title: "drivers license", artist: "Olivia Rodrigo", mood: "dark" },
    { title: "good 4 u", artist: "Olivia Rodrigo", mood: "energetic" },
    { title: "As It Was", artist: "Harry Styles", mood: "dreamy" },
    { title: "Stay", artist: "The Kid LAROI, Justin Bieber", mood: "energetic" },
    { title: "Easy On Me", artist: "Adele", mood: "dark" },
    { title: "Golden Hour", artist: "JVKE", mood: "romantic" },
    { title: "Snooze", artist: "SZA", mood: "romantic" },
    { title: "Cruel Summer", artist: "Taylor Swift", mood: "chill" },
    { title: "Shape of You", artist: "Ed Sheeran", mood: "energetic" },
    { title: "Thinking Out Loud", artist: "Ed Sheeran", mood: "romantic" },
    { title: "Photograph", artist: "Ed Sheeran", mood: "romantic" },
    { title: "Rolling in the Deep", artist: "Adele", mood: "dark" },
    { title: "Set Fire to the Rain", artist: "Adele", mood: "dark" },
    { title: "Hello", artist: "Adele", mood: "dark" },
    { title: "Uptown Funk", artist: "Mark Ronson, Bruno Mars", mood: "energetic" },
    { title: "24K Magic", artist: "Bruno Mars", mood: "energetic" },
    { title: "Just the Way You Are", artist: "Bruno Mars", mood: "romantic" },
    { title: "When I Was Your Man", artist: "Bruno Mars", mood: "dark" },
    { title: "Counting Stars", artist: "OneRepublic", mood: "energetic" },
    { title: "Apologize", artist: "OneRepublic", mood: "dark" },
    { title: "Believer", artist: "Imagine Dragons", mood: "dark" },
    { title: "Thunder", artist: "Imagine Dragons", mood: "energetic" },
    { title: "Radioactive", artist: "Imagine Dragons", mood: "dark" },
    { title: "Demons", artist: "Imagine Dragons", mood: "dark" },
    { title: "Sucker", artist: "Jonas Brothers", mood: "energetic" },
    { title: "Senorita", artist: "Shawn Mendes, Camila Cabello", mood: "romantic" },
    { title: "There's Nothing Holdin' Me Back", artist: "Shawn Mendes", mood: "energetic" },
    { title: "Havana", artist: "Camila Cabello", mood: "romantic" },
    { title: "7 rings", artist: "Ariana Grande", mood: "energetic" },
    { title: "thank u, next", artist: "Ariana Grande", mood: "energetic" },
    { title: "positions", artist: "Ariana Grande", mood: "romantic" },
    { title: "Into You", artist: "Ariana Grande", mood: "romantic" },
    { title: "Problem", artist: "Ariana Grande", mood: "energetic" },
    { title: "Side to Side", artist: "Ariana Grande", mood: "energetic" },
    { title: "God's Plan", artist: "Drake", mood: "dark" },
    { title: "One Dance", artist: "Drake", mood: "chill" },
    { title: "Hotline Bling", artist: "Drake", mood: "dreamy" },
    { title: "In My Feelings", artist: "Drake", mood: "energetic" },
    { title: "Passionfruit", artist: "Drake", mood: "chill" },
    { title: "Sicko Mode", artist: "Travis Scott", mood: "dark" },
    { title: "goosebumps", artist: "Travis Scott", mood: "dark" },
    { title: "HUMBLE.", artist: "Kendrick Lamar", mood: "dark" },
    { title: "Money Trees", artist: "Kendrick Lamar", mood: "chill" },
    { title: "DNA.", artist: "Kendrick Lamar", mood: "dark" },
    { title: "Stronger", artist: "Kanye West", mood: "energetic" },
    { title: "Heartless", artist: "Kanye West", mood: "dark" },
    { title: "Gold Digger", artist: "Kanye West", mood: "energetic" },
    { title: "Lose Yourself", artist: "Eminem", mood: "dark" },
    { title: "Not Afraid", artist: "Eminem", mood: "dark" },
    { title: "Love The Way You Lie", artist: "Eminem, Rihanna", mood: "dark" },
    { title: "Umbrella", artist: "Rihanna", mood: "dark" },
    { title: "Diamonds", artist: "Rihanna", mood: "dreamy" },
    { title: "Work", artist: "Rihanna", mood: "energetic" },
    { title: "Stay", artist: "Rihanna", mood: "dark" },
    { title: "Only Girl (In the World)", artist: "Rihanna", mood: "energetic" },
    { title: "Cheap Thrills", artist: "Sia", mood: "energetic" },
    { title: "Chandelier", artist: "Sia", mood: "dark" },
    { title: "Elastic Heart", artist: "Sia", mood: "dark" },
    { title: "Roar", artist: "Katy Perry", mood: "energetic" },
    { title: "Dark Horse", artist: "Katy Perry", mood: "dark" },
    { title: "Firework", artist: "Katy Perry", mood: "energetic" },
    { title: "Teenage Dream", artist: "Katy Perry", mood: "dreamy" },
    { title: "Bad Romance", artist: "Lady Gaga", mood: "dark" },
    { title: "Shallow", artist: "Lady Gaga, Bradley Cooper", mood: "romantic" },
    { title: "Poker Face", artist: "Lady Gaga", mood: "energetic" },
    { title: "Rain On Me", artist: "Lady Gaga, Ariana Grande", mood: "energetic" },
    { title: "Bad Guy", artist: "Billie Eilish", mood: "dark" },
    { title: "Happier Than Ever", artist: "Billie Eilish", mood: "dark" },
    { title: "everything i wanted", artist: "Billie Eilish", mood: "dreamy" },
    { title: "lovely", artist: "Billie Eilish, Khalid", mood: "dreamy" },
    { title: "Location", artist: "Khalid", mood: "chill" },
    { title: "Young Dumb & Broke", artist: "Khalid", mood: "chill" },
    { title: "Talk", artist: "Khalid", mood: "chill" },
    { title: "Wolves", artist: "Selena Gomez, Marshmello", mood: "dark" },
    { title: "Lose You to Love Me", artist: "Selena Gomez", mood: "dark" },
    { title: "Same Old Love", artist: "Selena Gomez", mood: "dark" },
    { title: "Sorry", artist: "Justin Bieber", mood: "energetic" },
    { title: "Love Yourself", artist: "Justin Bieber", mood: "dark" },
    { title: "Peaches", artist: "Justin Bieber", mood: "romantic" },
    { title: "What Do You Mean?", artist: "Justin Bieber", mood: "chill" },
    { title: "Company", artist: "Justin Bieber", mood: "energetic" },
    { title: "Style", artist: "Taylor Swift", mood: "dreamy" },
    { title: "Blank Space", artist: "Taylor Swift", mood: "energetic" },
    { title: "Shake It Off", artist: "Taylor Swift", mood: "energetic" },
    { title: "Willow", artist: "Taylor Swift", mood: "dreamy" },
    { title: "Anti-Hero", artist: "Taylor Swift", mood: "dark" },
    { title: "Love Story", artist: "Taylor Swift", mood: "romantic" },
    { title: "Wildest Dreams", artist: "Taylor Swift", mood: "dreamy" },
    { title: "22", artist: "Taylor Swift", mood: "energetic" },
    { title: "Deja Vu", artist: "Olivia Rodrigo", mood: "dark" },
    { title: "Vampire", artist: "Olivia Rodrigo", mood: "dark" },
    { title: "Flowers", artist: "Miley Cyrus", mood: "energetic" },
    { title: "Wrecking Ball", artist: "Miley Cyrus", mood: "dark" },
    { title: "Party in the U.S.A.", artist: "Miley Cyrus", mood: "energetic" },
    { title: "Cold Heart", artist: "Elton John, Dua Lipa", mood: "energetic" },
    { title: "Don't Start Now", artist: "Dua Lipa", mood: "energetic" },
    { title: "New Rules", artist: "Dua Lipa", mood: "energetic" },
    { title: "IDGAF", artist: "Dua Lipa", mood: "dark" },
    { title: "Physical", artist: "Dua Lipa", mood: "energetic" },
    { title: "Kiss Me More", artist: "Doja Cat, SZA", mood: "romantic" },
    { title: "Woman", artist: "Doja Cat", mood: "energetic" },
    { title: "Paint The Town Red", artist: "Doja Cat", mood: "dark" },
    { title: "Kill Bill", artist: "SZA", mood: "dark" },
    { title: "Good Days", artist: "SZA", mood: "dreamy" },
    { title: "The Weekend", artist: "SZA", mood: "chill" },
    { title: "Starboy", artist: "The Weeknd, Daft Punk", mood: "dark" },
    { title: "Save Your Tears", artist: "The Weeknd", mood: "dark" },
    { title: "Can't Feel My Face", artist: "The Weeknd", mood: "energetic" },
    { title: "Die For You", artist: "The Weeknd", mood: "romantic" },
    { title: "The Hills", artist: "The Weeknd", mood: "dark" },
    { title: "Watermelon Sugar High", artist: "Harry Styles", mood: "energetic" },
    { title: "Adore You", artist: "Harry Styles", mood: "dreamy" },
    { title: "Sign of the Times", artist: "Harry Styles", mood: "dark" },
    { title: "Late Night Talking", artist: "Harry Styles", mood: "chill" },
    { title: "Golden", artist: "Harry Styles", mood: "energetic" },
    { title: "August", artist: "Taylor Swift", mood: "dreamy" },
    { title: "cardigan", artist: "Taylor Swift", mood: "dreamy" },
    { title: "exile", artist: "Taylor Swift, Bon Iver", mood: "dark" },
    { title: "Death Bed", artist: "Powfu", mood: "dark" },
    { title: "Someone You Loved", artist: "Lewis Capaldi", mood: "dark" },
    { title: "Before You Go", artist: "Lewis Capaldi", mood: "dark" },
    { title: "All I Want", artist: "Kodaline", mood: "dark" },
    { title: "High Hopes", artist: "Panic! At The Disco", mood: "energetic" },
    { title: "I Write Sins Not Tragedies", artist: "Panic! At The Disco", mood: "dark" },
    { title: "Sugar, We're Goin Down", artist: "Fall Out Boy", mood: "energetic" },
    { title: "Centuries", artist: "Fall Out Boy", mood: "energetic" },
    { title: "The Middle", artist: "Zedd, Maren Morris, Grey", mood: "energetic" },
    { title: "Faded", artist: "Alan Walker", mood: "dreamy" },
    { title: "On My Way", artist: "Alan Walker", mood: "energetic" },
    { title: "Wake Me Up", artist: "Avicii", mood: "energetic" },
    { title: "The Nights", artist: "Avicii", mood: "energetic" },
    { title: "Levels", artist: "Avicii", mood: "energetic" },
    { title: "Titanium", artist: "David Guetta, Sia", mood: "energetic" },
    { title: "Turn Me On", artist: "David Guetta, Nicki Minaj", mood: "energetic" },
    { title: "Clarity", artist: "Zedd, Foxes", mood: "dreamy" },
    { title: "Symphony", artist: "Clean Bandit, Zara Larsson", mood: "energetic" },
    { title: "Rockabye", artist: "Clean Bandit", mood: "chill" },
    { title: "Rather Be", artist: "Clean Bandit", mood: "energetic" },
    { title: "Despacito", artist: "Luis Fonsi, Daddy Yankee", mood: "energetic" },
    { title: "Mi Gente", artist: "J Balvin, Willy William", mood: "energetic" },
    { title: "Dakiti", artist: "Bad Bunny, Jhay Cortez", mood: "chill" },
    { title: "Titi Me Pregunto", artist: "Bad Bunny", mood: "energetic" },
    { title: "Danza Kuduro", artist: "Don Omar, Lucenzo", mood: "energetic" },
    { title: "Old Town Road", artist: "Lil Nas X", mood: "energetic" },
    { title: "Montero", artist: "Lil Nas X", mood: "dark" },
    { title: "Industry Baby", artist: "Lil Nas X, Jack Harlow", mood: "energetic" },
    { title: "First Class", artist: "Jack Harlow", mood: "energetic" },
    { title: "WAP", artist: "Cardi B, Megan Thee Stallion", mood: "energetic" },
    { title: "Bodak Yellow", artist: "Cardi B", mood: "dark" },
    { title: "Savage", artist: "Megan Thee Stallion", mood: "dark" },
    { title: "Tere Bina", artist: "A.R. Rahman", mood: "romantic" },
    { title: "Kun Faya Kun", artist: "A.R. Rahman", mood: "dreamy" },
    { title: "Jai Ho", artist: "A.R. Rahman", mood: "energetic" },
    { title: "Tum Hi Ho", artist: "Arijit Singh", mood: "romantic" },
    { title: "Channa Mereya", artist: "Arijit Singh", mood: "dark" },
    { title: "Raabta", artist: "Arijit Singh", mood: "romantic" },
    { title: "Ae Dil Hai Mushkil", artist: "Arijit Singh", mood: "dark" },
    { title: "Tera Yaar Hoon Main", artist: "Arijit Singh", mood: "romantic" },
    { title: "Kesariya", artist: "Arijit Singh", mood: "romantic" },
    { title: "Agar Tum Saath Ho", artist: "Arijit Singh, Alka Yagnik", mood: "dark" },
    { title: "Ghungroo", artist: "Arijit Singh, Shilpa Rao", mood: "energetic" },
    { title: "Ve Maahi", artist: "Arijit Singh, Asees Kaur", mood: "romantic" },
    { title: "Dil Diyan Gallan", artist: "Atif Aslam", mood: "romantic" },
    { title: "Tajdar-e-Haram", artist: "Atif Aslam", mood: "dreamy" },
    { title: "Jeena Jeena", artist: "Atif Aslam", mood: "romantic" },
    { title: "Pehli Nazar Mein", artist: "Atif Aslam", mood: "romantic" },
    { title: "Woh Lamhe", artist: "Atif Aslam", mood: "dark" },
    { title: "Aadat", artist: "Atif Aslam", mood: "dark" },
    { title: "Bulleya", artist: "Amit Mishra, Shilpa Rao", mood: "dark" },
    { title: "Tum Se Hi", artist: "Mohit Chauhan", mood: "romantic" },
    { title: "Kabira", artist: "Tochi Raina, Rekha Bhardwaj", mood: "dreamy" },
    { title: "Zara Zara", artist: "Bombay Jayashri", mood: "romantic" },
    { title: "Kal Ho Naa Ho", artist: "Sonu Nigam", mood: "dark" },
    { title: "Suraj Hua Maddham", artist: "Sonu Nigam, Alka Yagnik", mood: "romantic" },
    { title: "Abhi Mujh Mein Kahin", artist: "Sonu Nigam", mood: "dreamy" },
    { title: "Tere Sang Yaara", artist: "Atif Aslam", mood: "romantic" },
    { title: "Phir Le Aya Dil", artist: "Rahat Fateh Ali Khan", mood: "dark" },
    { title: "Zaroori Tha", artist: "Rahat Fateh Ali Khan", mood: "dark" },
    { title: "Afreen Afreen", artist: "Rahat Fateh Ali Khan, Momina Mustehsan", mood: "romantic" },
    { title: "Tere Bin Nahin Lagda", artist: "Nusrat Fateh Ali Khan", mood: "romantic" },
    { title: "Sajda", artist: "Wajid, Shreya Ghoshal", mood: "romantic" },
    { title: "Teri Meri", artist: "Shafqat Amanat Ali", mood: "romantic" },
    { title: "Mera Bichhdaa Yaar", artist: "Shafqat Amanat Ali", mood: "dark" },
    { title: "Sanam Re", artist: "Arijit Singh", mood: "romantic" },
    { title: "Hamari Adhuri Kahani", artist: "Arijit Singh", mood: "dark" },
    { title: "Muskurane", artist: "Arijit Singh", mood: "romantic" },
    { title: "Phir Bhi Tumko Chaahunga", artist: "Arijit Singh, Shreya Ghoshal", mood: "dark" },
    { title: "Chaiyya Chaiyya", artist: "Sukhwinder Singh, Sapna Awasthi", mood: "energetic" },
    { title: "Malang", artist: "Ved Sharma", mood: "energetic" },
    { title: "Ghoomar", artist: "Shreya Ghoshal", mood: "energetic" },
    { title: "Deewani Mastani", artist: "Shreya Ghoshal", mood: "dreamy" },
    { title: "Nagada Sang Dhol", artist: "Shreya Ghoshal, Osman Mir", mood: "energetic" },
    { title: "Pardesi Pardesi", artist: "Sukhwinder Singh, Alka Yagnik", mood: "romantic" },
    { title: "Chura Liya Hai Tumne", artist: "Mohammed Rafi, Asha Bhosle", mood: "romantic" },
    { title: "Tum Hi Aana", artist: "Jubin Nautiyal", mood: "dark" },
    { title: "Lut Gaye", artist: "Jubin Nautiyal", mood: "dark" },
    { title: "Raataan Lambiyan", artist: "Jubin Nautiyal, Asees Kaur", mood: "romantic" },
    { title: "Filhall", artist: "B Praak", mood: "dark" },
    { title: "Mann Bharrya", artist: "B Praak", mood: "dark" },
    { title: "Pachtaoge", artist: "Arijit Singh", mood: "dark" },
    { title: "Bekhayali", artist: "Sachet Tandon", mood: "dark" },
    { title: "Bhula Dena", artist: "Mustafa Zahid", mood: "dark" },
    { title: "Sochta Hoon", artist: "Rahat Fateh Ali Khan", mood: "dreamy" },
    { title: "Jag Ghoomeya", artist: "Arijit Singh", mood: "romantic" },
    { title: "Enna Sona", artist: "Arijit Singh, AR Rahman", mood: "romantic" },
    { title: "Coke Studio: Pasoori", artist: "Ali Sethi, Shae Gill", mood: "energetic" },
    { title: "Aik Alif", artist: "Sain Zahoor, Noori", mood: "dreamy" },
    { title: "Tajdar-e-Haram (Coke Studio)", artist: "Atif Aslam", mood: "dreamy" },
    { title: "Manwa Laage", artist: "Shreya Ghoshal, Arijit Singh", mood: "romantic" },
    { title: "Naina", artist: "Arijit Singh", mood: "dark" },
    { title: "Ilahi", artist: "Arijit Singh", mood: "chill" },
];

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
        [2,0],[3,0],
        [2,1],[3,1],
        [2,2],[3,2],
        [2,3],[3,3],
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
const popupLine = document.getElementById("popupLine");
const popupSongTitle = document.getElementById("popupSongTitle");
const popupSongArtist = document.getElementById("popupSongArtist");
const popupClose = document.getElementById("popupClose");
const popupOk = document.getElementById("popupOk");

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

async function fetchPopularLine(song) {
    try {
        const url = `https://lrclib.net/api/get?track_name=${encodeURIComponent(song.title)}&artist_name=${encodeURIComponent(song.artist)}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("not found");
        const data = await res.json();

        let lines = [];
        if (data.syncedLyrics) {
            lines = data.syncedLyrics.split("\n")
                .map(l => l.replace(/\[.*?\]/g, "").trim())
                .filter(l => l.length > 0);
        } else if (data.plainLyrics) {
            lines = data.plainLyrics.split("\n").map(l => l.trim()).filter(l => l.length > 0);
        }
        if (lines.length === 0) return null;

        const start = Math.floor(lines.length * 0.3);
        const end = Math.max(start + 1, Math.floor(lines.length * 0.7));
        const midSection = lines.slice(start, end);
        const pool = midSection.length ? midSection : lines;
        return pool[Math.floor(Math.random() * pool.length)];
    } catch (err) {
        console.log("Lyric line fetch failed:", err);
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
        popupStickerImg.onerror = () => {
            console.log("GIF failed to load:", GIF_LIBRARY[sticker]);
            popupStickerImg.classList.add("hidden");
        };
        popupStickerImg.onload = () => {
            popupStickerImg.classList.remove("hidden");
        };
        popupStickerImg.src = GIF_LIBRARY[sticker];
    }

    popupSongTitle.textContent = song.title;
    popupSongArtist.textContent = song.artist;
    popupLine.textContent = "Loading line...";
    resetWindowPosition();
    popupOverlay.classList.remove("hidden");

    const line = await fetchPopularLine(song);
    popupLine.textContent = line ? `"${line}"` : "(lyric line not available)";
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
renderSongs(songs);