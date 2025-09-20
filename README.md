# 🎮 Tetris Game - Modern React Implementation

A beautiful, responsive, and feature-rich Tetris game built with React, featuring modern UI design, smooth animations, and enhanced gameplay mechanics.

![Tetris Game](https://img.shields.io/badge/React-16.13.1-blue.svg)
![Styled Components](https://img.shields.io/badge/Styled%20Components-5.1.0-pink.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Features

### 🎯 Core Gameplay
- **Complete Tetromino Set**: All 7 standard Tetris pieces (I, J, L, O, S, T, Z)
- **Next Piece Preview**: See what's coming next to plan your moves
- **Hold Piece Functionality**: Save a piece for later use (once per drop)
- **Progressive Difficulty**: Speed increases with each level
- **High Score Persistence**: Your best score is saved locally

### 🎨 Visual Excellence
- **Modern Glassmorphism Design**: Beautiful translucent UI elements
- **Responsive Layout**: Optimized for desktop, tablet, and mobile
- **Smooth Animations**: Fluid piece movements and visual feedback
- **Custom Pixel Font**: Authentic retro gaming feel
- **Dynamic Backgrounds**: Gradient overlays with subtle effects

### 🎮 Enhanced Controls
- **Arrow Keys**: Move and rotate pieces
- **Space Bar**: Hard drop (instant placement)
- **C Key**: Hold current piece
- **P Key**: Pause/Resume game
- **Interactive Help**: Built-in game instructions

### 📱 User Experience
- **Mobile Responsive**: Touch-friendly interface
- **Accessibility**: Keyboard navigation and screen reader support
- **Game Instructions**: Comprehensive help modal
- **Professional UI**: Clean, modern interface design

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vivekch05/Tetris-Game.git
   cd Tetris-Game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to play!

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 🎮 How to Play

### Objective
Fill complete horizontal lines with falling tetromino pieces to clear them and score points. The game ends when pieces reach the top of the playing field.

### Controls
| Key | Action |
|-----|--------|
| `←` `→` | Move left/right |
| `↓` | Soft drop (faster fall) |
| `↑` | Rotate piece |
| `Space` | Hard drop (instant placement) |
| `C` | Hold piece |
| `P` | Pause/Resume |

### Scoring System
- **1 line**: 40 × (level + 1)
- **2 lines**: 100 × (level + 1)
- **3 lines**: 300 × (level + 1)
- **4 lines (Tetris)**: 1200 × (level + 1)

### Pro Tips
- Use the hold feature strategically to save pieces for better placement
- Try to clear multiple lines simultaneously for higher scores
- Keep the playing field as flat as possible
- Plan ahead using the next piece preview

## 🛠️ Technical Stack

- **React 16.13.1** - Component-based UI framework
- **Styled Components 5.1.0** - CSS-in-JS styling
- **React Hooks** - Modern state management
- **Custom Hooks** - Reusable game logic
- **Local Storage** - High score persistence
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── styles/          # Styled components
│   ├── Cell.js          # Individual game cell
│   ├── Display.js       # Score and info display
│   ├── Footer.js        # Footer component
│   ├── Header.js        # Header component
│   ├── HoldPiece.js     # Hold piece preview
│   ├── NextPiece.js     # Next piece preview
│   ├── Stage.js         # Game board
│   ├── StartButton.js   # Game start button
│   ├── Tetris.js        # Main game component
│   └── GameInstructions.js # Help modal
├── hooks/               # Custom React hooks
│   ├── useGameStatus.js # Game state management
│   ├── useInterval.js   # Game timing
│   ├── usePlayer.js     # Player piece logic
│   ├── usePlayerEnhanced.js # Enhanced player with hold/next
│   └── useStage.js      # Game board logic
├── gameHelper.js        # Game utility functions
├── tetrominos.js        # Piece definitions
└── App.js              # Main application
```

## 🎨 Design Philosophy

This Tetris implementation focuses on:

- **User Experience**: Intuitive controls and clear visual feedback
- **Modern Aesthetics**: Glassmorphism and gradient design trends
- **Performance**: Optimized rendering and smooth animations
- **Accessibility**: Keyboard navigation and screen reader support
- **Responsiveness**: Seamless experience across all devices

## 🚀 Future Enhancements

- [ ] Sound effects and background music
- [ ] Particle effects for line clears
- [ ] Multiple themes and color schemes
- [ ] Online leaderboards
- [ ] Multiplayer mode
- [ ] Advanced statistics tracking
- [ ] Custom piece skins

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Vivek Chaurasia**
- GitHub: [@Vivekch05](https://github.com/Vivekch05)
- LinkedIn: [vivekch123](https://www.linkedin.com/in/vivekch123/)

## 🙏 Acknowledgments

- Inspired by the classic Tetris game
- Built with modern React best practices
- Styled with beautiful glassmorphism design
- Enhanced with contemporary UX patterns

---

⭐ **Star this repository if you found it helpful!**

🎮 **Enjoy playing Tetris!**