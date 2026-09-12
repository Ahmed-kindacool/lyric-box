# 🎵 Lyric Box

An interactive music player with synchronized lyrics and dynamic, mood-based visuals — built as a beginner-friendly HTML/CSS/JS project.

## ✨ Features

- 🔍 Search and filter songs by name
- ▶️ Full audio playback — play, pause, seek, live time display
- 📝 Synced lyrics that highlight in real time as the song plays, pulled automatically from the [LRCLIB](https://lrclib.net) open lyrics database
- 🎨 Dynamic color themes — the background, glow, and lyric colors shift per song mood (chill, romantic, dark, energetic, dreamy)
- 🪟 A draggable, collapsible music box — shrinks to a mini player in the corner while lyrics take over the screen, or expand it back anytime
- ✨ Ambient floating particle effects
- 📱 Responsive layout for desktop, tablet, and mobile

## 🛠️ Built With

- HTML5
- CSS3 (custom properties, animations, media queries)
- Vanilla JavaScript (no frameworks)
- [LRCLIB API](https://lrclib.net) for synced lyrics

## 🚀 How to Run

1. Clone this repository
2. Add your own local `.mp3` files into the `songs/` folder, matching the filenames listed in `script.js` (or edit `script.js` to match your filenames)
3. Open `index.html` in a browser — or use a tool like VS Code's Live Server extension for the best experience

> ⚠️ **Note:** Actual audio files are **not included** in this repository (they're excluded via `.gitignore`) to avoid distributing copyrighted material. You'll need to supply your own local mp3s for the songs listed in `script.js`.

## 📌 Status

Core features complete: search, playback, synced lyrics, dynamic themes, draggable UI, particles, and responsive design.

## 🔮 Possible Future Additions

- Spotify or other legitimate music API integration
- Automatic album artwork
- Playlists and favorites
- Volume control and keyboard shortcuts
- Audio waveform visualizer