<div align="center">
  <h1>My Nuxt-Powered Twitch Assets</h1>
  <p>Ever thought about building your Twitch stream assets with Nuxt? Turns out, it's not only possible, it's awesome!</p>
  <p>This repository contains all the dynamic overlays, alerts, and tools I use for my personal Twitch stream, all built with Nuxt and Vue.</p>
  <p>
    <a href="https://dub.sh/hugo-twitch">Watch My Stream</a> ·
    <a href="https://twitch.hrcd.fr">See Them In Action</a>
  </p>
</div>

---

## ✨ Why Nuxt for Twitch Assets?

You might not think of Nuxt when planning your stream visuals, but it offers some incredible advantages:

*   **Full Creative Control:** Leverage the power of Vue components and modern web technologies to create truly unique and interactive assets.
*   **Dynamic Content:** Easily integrate real-time data, APIs (like the Twitch API I'm already using!), or even server-side logic with Nitro.
*   **Reactivity:** Vue's reactivity makes for smooth and responsive overlays that can react to stream events.
*   **Familiar Workflow:** If you're a web developer, you're already in your comfort zone!
*   **Open Source & Customizable:** This repo serves as a live example. Fork it, learn from it, and adapt it for your own stream!
*   **Powered by @nuxt_hub & Cloudflare Workers:** Deployed on the edge for optimal performance and enabling real-time features like WebSockets.

## 🚀 Current State & Future Vision

This project is actively under development. Here's a glimpse of what's here and what's planned:

**Implemented:**
*   Integration with the Twitch API (for basic data, more to come!).
*   Deployment on [@nuxt_hub](https://x.com/nuxt_hub) using Cloudflare Workers.

**Roadmap / To-Do (The exciting stuff I'm building!):**
*   🖼️ **Customizable Overlays:** Starting Soon, Be Right Back, Stream Ending screens.
*   💬 **Interactive Elements:** Real-time chat display, follower/subscriber/raid alerts (leveraging WebSockets!).
*   📊 **Dynamic Information Display:** Current project, music playing, social media handles, sponsor logos.
*   🎨 **Themeable Design:** Easily switch looks or create your own themes.
*   🔧 **Easy Configuration Interface:** (Potentially a simple UI to manage asset settings).
*   🌐 **Optimized Browser Sources:** Ensuring smooth performance in OBS, Streamlabs, etc.

The goal is to showcase a comprehensive suite of Nuxt-powered stream assets!

<details><summary>🛠️ Getting Started (Basic Nuxt Setup)</summary>

This project is a standard Nuxt application.

1.  Clone the repo:
    ```bash
    git clone https://github.com/HugoRCD/twitch-assets.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd twitch-assets
    ```
3.  Install dependencies (using PNPM):
    ```bash
    pnpm install
    ```
4.  Configure your Twitch API credentials and other settings in `.env` (create one from `.env.example` if provided) for the chat you will need to create a special token here (https://twitchtokengenerator.com).
5.  Run the Nuxt development server:
    ```bash
    pnpm dev
    ```
6.  Add the relevant Nuxt routes (e.g., `http://localhost:3000/starting-soon`) as Browser Sources in your streaming software.

</details>

## 💡 Get Inspired!

Feel free to browse the code as it develops, see how things are structured, and get inspired to build your own Nuxt-powered stream assets. You might be surprised by what's possible!

While this project hosts *my* personal assets, the patterns and techniques can be adapted for any stream.

## 🤝 Contributing & Feedback

This is primarily a showcase of my personal setup and a learning journey in building these assets. However, if you have cool ideas, find bugs, or want to share how you've adapted this, feel free to open an issue or discussion!

And if you find this inspiring, a star ⭐ on the repo is always appreciated!

## 📝 License

Distributed under the Apache-2.0 License. See `LICENSE` for more information.

---

<div align="center">
  Happy Streaming! Built with Nuxt 💚 & Deployed on @nuxt_hub
</div>
