# ♟️ Modular Chess Platform

![React](https://img.shields.io/badge/React-Frontend-blue)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![Architecture](https://img.shields.io/badge/Design-Modular-success)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

A frontend-first chess system currently in active development, designed to evolve into a full-stack multiplayer platform.

This project replaces a legacy Python prototype with a modular React architecture built for scalability across backend systems, AI engines, and real-time multiplayer.

---

## 📌 Documentation

Additional documentation can be found in the `/docs` directory:

* `challenge.md` → Why this project exists and the learning challenge behind it
* `roadmap.md` → Detailed development roadmap *(planned)*
* `architecture.md` → System architecture and design decisions *(planned)*

---

## 🎯 Current Status & Roadmap

Current Sprint: Moving from a static visual grid to an interactive state-driven board.

```text
┌──────────────────────────┐     ┌──────────────────────────┐     ┌──────────────────────────┐
│ PHASE 1: UI FOUNDATION   │ ──> │ PHASE 2: INTERACTION     │ ──> │ PHASE 3: RULES ENGINE    │
│ 🟩 Board & Piece Layout  │     │ 🟨 Click-to-Move Logic   │     │ ⬛ Move Validation       │
│ 🟩 Responsive CSS Grid   │     │ ⬛ State Tracking        │     │ ⬛ Win/Loss Detection    │
└──────────────────────────┘     └──────────────────────────┘     └──────────────────────────┘
                                                                               │
┌──────────────────────────┐     ┌──────────────────────────┐                  │
│ PHASE 6: MULTIPLAYER     │ <── │ PHASE 5: AI ENGINE       │ <── │ PHASE 4: BACKEND INFRA   │
│ ⬛ WebSockets & Lobbies  │     │ ⬛ Minimax Opponent      │     │ ⬛ User Accounts & API   │
└──────────────────────────┘     └──────────────────────────┘     └──────────────────────────┘
```

---

## ⚖️ Architectural Evolution

| Layer       | Legacy Prototype (Python) | Modern Architecture (React) |
| ----------- | ------------------------- | --------------------------- |
| Structure   | Monolithic script         | Modular component system    |
| UI & Logic  | Tightly coupled           | Strict separation           |
| State       | Local and brittle         | Component-driven            |
| Scalability | Limited                   | Designed for expansion      |
| Backend     | File-based storage        | Planned API integration     |

---

## 🧱 System Architecture

```text
App → Board → Square (8x8) → Piece
```

### Design Principles

* UI is responsible only for rendering
* Game logic remains independent of the interface
* Backend systems can be integrated without UI rewrites
* AI and multiplayer remain isolated modules

---

## 🎯 Goal

Build a complete chess platform featuring:

* Chess rules engine
* Backend persistence
* AI opponent
* Real-time multiplayer
* Scalable system architecture

---

## ⚡ Summary

* Legacy: Python desktop prototype
* Current: Modular React frontend
* Future: Full-stack chess platform with AI and multiplayer support
