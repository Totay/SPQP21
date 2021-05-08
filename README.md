# Git Policies

### DO NOT COMMIT TO MAIN / MASTER
When commiting, push to a new branch with your name as a title

### Git workflow
- Pull from master before working
- Make a new branch in your local environment
- NEVER WORK OFF OF MASTER AND NEVER PUSH TO MASTER
  - YOU WILL GET THE WRATH OF GOD IF YOU DO

### After Cloning / Pulling the repo
Make sure you are not in the main / master branch of your local repo

Run this on the root folder
```bash
  npm install
```

Run this on the frontend folder
```bash
  npm install
```

### Starting the server
To start the backend server, run the following command on the root directory
```bash
  npm run dev
```

You want to leave the server running so open a new terminal. To start the reactjs dev server, run the following command on the frontend directory
```bash
  npm run start
```

### MAKE SURE TO SET UP ENVIRONMENT VARIABLE
If you do not have a .env, create one in the root folder. 
make sure you have the following set up
- PORT = can be anything, I said 3000
- HOST = just set it to localhost
- DB_USER = the username for mysql
- DB_PWD = the password for mysql

### Create a database called 'matchpoint'
Make sure to create the database called 'matchpoint' in your local mysql session