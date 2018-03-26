## Installation

You'll need [Git](https://git-scm.com/) and a recent version of [Node.JS](https://nodejs.org/en/) (`v8.0.0+` allows for `=>` (arrow functions), `async`, and `await`)

this repo is a template of https://github.com/vuejs-templates/webpack

1. Navigate to where you'd like to save the project
2. `git clone` the repo
3. Navigate to inside the project
4. Run `npm install` this downloads all the project's dependencies and devDependencies in package.json

### Running for Development on Your Local Machine
1. Use command prompt.
2. Navigate to the directory which contains the package.json file.
3. `npm run dev` executes the devstart script in package.json
4. go to http://127.0.0.1:8082

### Running for Development on Euclid
The frontend is ran with [tmux](https://en.wikipedia.org/wiki/Tmux). This allows for the site to remain up without an ssh terminal open. 
1. Login to Euclid with the special bird account. (Ask someone for the credentials.)
2. Check the current sessions with `tmux ls`
3. End the current tmux session if needed with `tmux kill-session -t frontend-test`
4. start another session `tmux new -s frontend-test`
5. `npm run start`
6. Close the terminal with the "x" close in the corner.
7. Confirm
8. Verifiy that the website is still up.

### Running for Production on Euclid
The files are compiled and then staticlly served. "Serverless website"
```
chickadee/
 ├─pub/
 │  ├─index.html
 │  └─static/ (automatically compiled)
 └─frontend/
```
1. Login to Euclid with the special bird account. (Ask someone for the credentials.)
2. go to the production frontend `cd frontend`
3. `git pull` the changes
4. `npm run build`
5. done!

### Configuring `npm run build` to put things in the right place
No-one should ever have to do this again. But it was such a pain to figure out I'm going to write it down somewhere.
http://vuejs-templates.github.io/webpack/backend.html

```
FILENAME: config/index.js
...
...
  build: {
    index: path.resolve(__dirname, '../../pub/index.html'),
    assetsRoot: path.resolve(__dirname, './../../pub/'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/~chickadee/',
    productionSourceMap: false,
    ...
    ...
  }
```


