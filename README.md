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