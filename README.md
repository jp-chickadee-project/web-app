## Installation

You'll need [Git](https://git-scm.com/) and a recent version of [Node.JS](https://nodejs.org/en/) (`v8.0.0+` allows for `=>` (arrow functions), `async`, and `await`)

1. Navigate to where you'd like to save the project
2. `git clone` the repo
3. Navigate to inside the project
4. Run `npm install` this downloads all the project's dependencies and devDependencies in package.json

### Running for Development
1. Be on your local machine.
2. Use command prompt.
3. Navigate to the directory which contains the package.json file.
4. `npm run dev` executes the devstart script in package.json This montors for any changes in your application and automatically restarts the server.

### Running for Production
The frontend is ran with [tmux](https://en.wikipedia.org/wiki/Tmux). This allows for the site to remain up without an ssh terminal open. 
1. Login to Euclid with the special bird account. (Ask someone for the credentials.)
2. End the current tmux session if needed with `tmux kill-session -t 0`
3. start another session `tmux`
4. npm run start
5. Close the terminal with the "x" close in the corner.
6. Confirm
7. Verifiy that the website is still up.