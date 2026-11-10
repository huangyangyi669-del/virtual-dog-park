# Naiwa Garden / 奶蛙小院

A beginner-friendly virtual companion website for AIE1101 Homework 8, built with HTML, CSS and vanilla JavaScript.

## Features
- Three character entries: Naiwa, Naidan and Pink Naiwa, with local illustrations and fictional personality/care notes.
- Adopt one companion with a trimmed, non-empty name of up to 20 UTF-16 code units (HTML maxlength behavior).
- Feed and Play each add 10 happiness, capped at 100.
- Next Day adds one day and subtracts 5 happiness, floored at 0.
- Day 1: 幼年期 (Puppy equivalent); Days 2–3: 成长期 (Young equivalent); Day 4 onward: 成年期 (Adult equivalent).
- Growth is shown as text, an illustration size change and a growth bar.
- Progress is saved after every action and restored on refresh.
- Start Over asks for confirmation. Cancel keeps the companion; Confirm deletes the saved companion.
- Responsive layout, form labels, image alt text and reduced-motion support.

## Preview
Open this folder in VS Code, install Live Server by Ritwick Dey, then right-click index.html and select Open with Live Server.
Alternatively, from this folder run `python3 -m http.server 8765 --bind 127.0.0.1` and visit http://127.0.0.1:8765.
Keep the same browser and local address for storage tests. Do not use file:// for storage testing.
No package manager, framework, backend or external API is needed.

## Storage
Only one companion is stored under `virtualNaiwaParkPetV1` in browser localStorage. It contains name, breed (character ID), day and happiness. Stage is calculated from the day. Data is local to the browser and origin, is not a GitHub account feature, and does not sync across devices. Clearing browser data clears progress.

## Artwork and theme
The dog theme has been replaced with the user's selected Naiwa meme characters, following the user's report that the instructor requested a different theme. The local PNG illustrations were AI-generated and refined from character references; they are not photographs or official character artwork. The final chosen three-character image was cropped into individual character assets. These are PNG assets, rather than the SVG format used in the original dog example. Character identity belongs to its respective creators; no claim of original character ownership is made.

## Manual browser checklist
- [ ] All three character images and descriptions appear.
- [ ] Blank or whitespace-only name is rejected.
- [ ] Leading/trailing spaces are removed; interior spaces remain.
- [ ] `<Buddy>` displays literally, without HTML interpretation.
- [ ] Input stops at 20 UTF-16 code units.
- [ ] Adopt each character and verify Day 1, first stage, happiness 50.
- [ ] Feed then Play produces 60 then 70; repeated care stops at 100.
- [ ] Next Day gives Day 2, middle stage, minus 5 happiness.
- [ ] Day 4 gives the adult stage; happiness never falls below 0.
- [ ] Refresh after adoption, Feed, Play and Next Day restores all current values.
- [ ] Start Over / Cancel keeps the companion.
- [ ] Start Over / Confirm clears the companion; refreshing does not bring it back.
- [ ] On a narrow phone viewport, cards stack and controls remain usable without horizontal scrolling.

The checklist is for the student to run and understand before submission; it is not a claim that every browser case has been run.

## Main JavaScript functions
- `render`: shows either the adoption form or the current companion.
- `care`: adds happiness with a maximum of 100.
- `stageFor`: calculates growth stage from the day.
- `savePet` / `loadPet`: write and validate browser progress.
- `addGrowthControls`: connects Next Day, growth indicators and confirmed reset.

## Submission
Submit the GitHub repository URL, the required repository screenshot, and an approximately 100-word reflection based on your own observations and tests. The repository itself is sufficient; a deployed website is optional.
