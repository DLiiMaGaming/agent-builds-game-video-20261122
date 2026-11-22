# The Agent Builds a Game from One Prompt — NEON BREAKOUT

[![make.fun bounty](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/DLiiMaGaming/agent-builds-game-video-20261122/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/DLiiMaGaming/agent-builds-game-video-20261122/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

An entry for the [$20 "The agent builds a game from one prompt" bounty on
make.fun](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709):
one prompt, one tiny browser game, one short video. The video shows the
prompt being typed, the agent building the game in a real terminal session,
and the finished game running — then ends on make.fun's referral end card.
Places go by the post's score: views + 10 × (likes + reposts + quotes +
replies), read from X after the deadline (25 Nov 2026 00:09 WIB).

## The prompt

> Build a tiny browser game in one HTML file: NEON BREAKOUT — a glowing
> paddle, a bouncing ball, 5 rows of neon bricks, score, 3 lives, a start
> screen, arrow-key + mouse control, a particle burst when a brick breaks,
> and a win/lose screen. Canvas only, no libraries.

## The game

`game.html` — NEON BREAKOUT, a single self-contained file (canvas, no
libraries). Glowing paddle and ball with a trail, 5 rows × 10 neon bricks,
score popups and particle bursts on every break, 3 lives, start / win /
game-over screens, mouse + arrow-key control, and a `?demo=1` autoplay mode
(the paddle plays itself — that is what the video's gameplay footage shows).
Open it in any browser, or serve it: `python3 -m http.server` and visit
`http://127.0.0.1:8000/game.html`.

## The video

`agent-builds-a-game-final.mp4` in the build directory (59 s, 1920×1080):
a genuine screen recording, not a mockup — the prompt typed on screen, the
agent's real build commands and their real output in a terminal, then the
game actually running. It ends with make.fun's referral end card from the
press pack (16:9, fetched from `https://make.fun/press/manifest.json`),
with the entrant's own referral code typed into the field.

The post's text carries the bounty line, the `@makefunai` tag and the
entrant's play code:

```
Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
makefun-starfish-seahorse-meerkat
```

## The entry

`POST.json` at the repository root names the X post. `main.ts` (Node 22,
standard library only) copies `POST.json` to the output directory — that is
all it has to do; the house reads the post itself.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
