Public version of the source code used in https://vg-sfx-quiz.herokuapp.com/

Does not include originally used sounds or answers, only a few "text to speech" sound files as examples.

NodeJs + npm required.

---

## Usage

- Build frontend and overwrite [backend/build](backend/build) with new build
  - prebuilt frontend provided, can be skipped if no need for frontend changes
- Insert your sound files in the [sound folder](backend/sounds)
- Update [sounds.json](backend/sounds.json) to match your quiz sounds
- Test locally: Run `npm install` & `node app.js`under backend/ , by default the app answers at `http://localhost:3001`

* Deploy to eg. Heroku or other hosting site supporting NodeJs
  - compatible with Heroku instructions, init a new repository in `/backend` and commit all files

### Sounds

Quiz sounds are listed in the json file format

```
[
  {
    "order": 1,
    "id": "lzcs1eaCl4",
    "game": "Starfox 64",
    "answers": ["starfox 64", "lylat wars"]
  },
  {
    "order": 3,
    "id": "rp0IcNEIrV",
    "game": "Resident Evil 2",
    "answers": [
      "re2",
      "resident evil 2",
      "re3",
      "resident evil 3",
      "re code veronica",
      "resident evil code veronica"
    ]
  },
  {
    "order": 2,
    "id": "rzdxsJYOp2",
    "game": "Sonic the Hedgehog",
    "answers": ["sonic"]
  }
]
```

- `order`: Integer, used to change display order of the sounds in quiz
- `id`: Name of the .mp3 sound file
- `game`: model answer, displayed when correct answer is given or "give up" button is pressed
- `answers`: list of acceptable answers\*

\*Answer checking is intentionally simple, inaccurate and allowing.
Answer and given input are converted to lowercase characters, and all special characters and spaces are omitted. It is compared if given input starts with any of the answers.
Eg. with answers containing `resident evil 2`, valid input is `RESid!"#"#!ent EViL 22--`.

### License

No further support is given, provided as is. Do what you will...
