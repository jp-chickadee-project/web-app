
# production
frontend - none

backend - 8155

analytics - 8156


# testing
frontend - 8150

backend - 18155

analytics - 18156


## FOR THE API
```
tmux new -s api
cd api/
python3 manage.py runserver euclid.nmu.edu 18155
# exit the terminal
```

## FOR THE FRONTEND (TEST)
```
tmux new -s frontend-test
cd frontend-test/
npm run dev
# exit the terminal
```
## FOR THE FRONTEND (PRODUCTION)
```
cd frontend
npm run build
# if you get errors stop the other node processes and try again
```

## ANALYTICS
```
tmux new -s analytics
cd analytics/
npm run compile
node ./distribution/index.js
# exit the terminal
```
