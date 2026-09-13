# Lyric Box

A gothic, retro-themed website where you pick a song and get a fun animated GIF reaction — no audio, no downloads, just vibes.

## ✨ What it does

- Browse a large list of mainstream songs (pop, hip-hop, rock, EDM, Latin, Bollywood/Pakistani) via search
- Click any song to open a draggable, retro Windows-style popup
- The popup shows:
  - A random animated GIF sticker reaction (matched to the song's mood)
  - One real lyric line, fetched live from the [LRCLIB](https://lrclib.net) open lyrics database
- A gothic black-and-red visual theme, with pixel-art creatures (guitars, bats, skulls) drifting across the background — they shift color to match whichever song's mood you last clicked
- A 💡 suggestion box (top-right corner) where visitors can suggest a song to add

## 🛠️ Built With

- HTML5
- CSS3 (custom properties, keyframe animations, pixel-art via box-shadow)
- Vanilla JavaScript (no frameworks)
- [LRCLIB API](https://lrclib.net) for live lyric line lookups
- 'Cinzel Decorative' Google Font for the gothic title styling

## 🚀 How to Run

1. Clone this repository
2. Open `index.html` in a browser — or use a tool like VS Code's Live Server extension for the best experience
3. That's it — no setup, no API keys, no local audio files needed

## 🎨 How the sticker system works

GIFs live in the `gifs/` folder and are referenced by simple names in `script.js`:

```js
const GIF_LIBRARY = {
    gif_sleeping: "gifs/gif_sleeping.gif",
    // add more here: gif_name: "gifs/gif_name.gif"
};
```

Each mood (`chill`, `romantic`, `dark`, `energetic`, `dreamy`) has a pool of GIF names in `STICKER_POOLS` — one is picked at random whenever a song from that mood is clicked.

## 📝 Adding more songs

Songs live in a simple array at the top of `script.js`:

```js
{ title: "Song Name", artist: "Artist Name", mood: "chill" }
```

Just add more lines following that pattern — no other file needs to change. Mood options: `chill`, `romantic`, `dark`, `energetic`, `dreamy`.

## 📌 Status

Actively evolving — currently ~230 songs, 7 GIF stickers, full gothic redesign complete. More songs, stickers, and features to be added over time.

## ⚠️ Note on lyrics

Not every song has a synced or plain lyric line available in LRCLIB's database (this is especially common for Bollywood/Pakistani tracks) — when that happens, the popup shows "(lyric line not available)" instead of leaving it blank.

## 🔮 Possible Future Additions

- Dedicated Hindi/Urdu lyrics source for better coverage
- More GIF stickers per mood for variety
- Shared (not just local) song suggestions
- Even more songs