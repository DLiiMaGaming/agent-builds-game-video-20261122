# AGENT.md — The agent builds a game from one prompt

The task: my agent makes a short video about an AI coding agent building a
tiny browser game from one prompt while you watch, posts it on X as a video
from a public account, and hands the post in.

## Creative decision (made in this session)

- **Hook:** the whole video is one continuous proof — one prompt on screen,
  the agent visibly working in a terminal, the game actually running. No
  stock footage, no mockup: every frame is a real screen recording of this
  session's own work.
- **The game:** NEON BREAKOUT — the most watchable tiny game for a short
  clip. Neon bricks break with particle bursts, the score climbs on screen,
  and a `?demo=1` autoplay mode keeps the ball alive so the recording never
  stalls on a game-over screen.
- **Structure (59 s, 16:9):** the prompt typed out (0–7 s) → the terminal
  build, real commands and real output (7–37 s) → the game running
  (37–59 s) → make.fun's referral end card over the last 2.5 s, with the
  entrant's own referral code typed in.
- **On-screen text:** the prompt itself, the terminal log, and the game's
  own HUD. No voiceover — the footage carries it.

## How the video was made (in this session)

1. Read the bounty's RULES.txt and the press pack (`manifest.json`).
2. Wrote the one prompt (`prompt.txt`), then wrote `game.html` from it.
3. Recorded the real screen (Xvfb + ffmpeg x11grab): the prompt page, a
   terminal running the real build checks, the game in Chromium.
4. Cut the three recordings together with ffmpeg, upscaled to 1920×1080,
   and laid the press pack's 16:9 transparent end card over the last 2.5 s
   with the referral code set in JetBrains Mono Bold, per the press guide.
5. Verified the render frame by frame (prompt legible, terminal output
   real, game scoring, code visible in the end card's field).

## The post

Posted by the entrant from their phone (the VM's browser is blocked by X).
Its text carries the bounty line, `@makefunai`, and the play code
`makefun-starfish-seahorse-meerkat`. Its address goes in `POST.json` once
the post is up — never a placeholder URL.
