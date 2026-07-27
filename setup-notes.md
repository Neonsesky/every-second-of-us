# Nirsh's checklist — read BEFORE sharing (then delete this file from the repo)

## Publish (5 min, free)
1. github.com → New repository (e.g. `every-second-of-us`) → Public.
2. Upload EVERYTHING in this folder (index.html, manifest.webmanifest, sw.js,
   love-notes.json, README.md, icons/). Commit.
3. Settings → Pages → Deploy from a branch → main, / (root) → Save.
4. Your link: https://YOUR-USERNAME.github.io/every-second-of-us/

## One quick edit
In index.html near the top, replace YOUR-USERNAME in the og:image line with
your real Pages URL (edit directly on GitHub: open file → pencil → commit).
This makes the pretty preview card appear when you send her the link.

## Updates are AUTOMATIC — no re-download, ever
The app loads network-first when online: any commit you push to GitHub is
live for her the next time she opens the app with internet. Offline she gets
the last version. She never reinstalls anything.
(Only exception: if you change the app ICON, she'd need to re-add it to her
home screen to see the new icon.)

## words.json — the shared quote book (works for BOTH of you)
Custom quotes written in the app live on that device. To make lines permanent
on BOTH clocks: in the app, open "Your own words" and tap
"Copy for GitHub" — then open `words.json` in the repo, hit the pencil,
replace the contents with what's on the clipboard, commit. Next time either
clock is online, it picks them up automatically. (Add Shady as a collaborator
on the repo — Settings → Collaborators — so she can do this from her phone,
or she can just send you the link/text and you commit it.)

## Editing the secret notes WITHOUT me
Open `love-notes.json` on GitHub → pencil icon → edit the "sweet" and/or
"afterDark" text → commit. That's it. Her app picks it up next time she
opens it online. Keep it valid JSON: text between the quotes, and if you
want a quote character inside the note, write it as \" .

## Test on YOUR phone first
- Install from the link, open from the icon.
- Airplane mode → open again → must still work.
- Drag the heartbeat slider to the top... you know why. Verify the whole
  chain: chilli appears → hold it → After Dark unlocks → homescreen goes
  crimson → new BPM stops → spicy quotes in rotation → 🌶️ button in the top
  bar (hold it) → long-press the message → two-finger hold the background.
- Long-press "Shady ♥ Nirsh" both before and after unlocking.
- Open the trophy. Scroll to the end. Feel something. That's the point.
- Settings → Reset everything → confirm it all comes back locked.

## Sending it
Send the LINK, not the zip. Suggested message:
  "made you something. add it to your home screen. read the page below it. — N"
