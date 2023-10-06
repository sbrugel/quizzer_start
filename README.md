# React TypeScript Starter Repo

Hello! This repository has been pre-configured with eslint and gh-pages to automatically deploy your app when you push to the main branch.

## NOTE FOR GRADER

I debugged this on another repository but was unable to get it to deploy. This is my second attempt using the original forked repo. Just for clarity, I did the following after solving this problem on the original repo but failing to have it deploy:
- I added that repo as a remote (`git remote add original_fix https://github.com/sbrugel/fixed-quizzer.git`)
- I fetched the commits from that remote (`git fetch original_fix`)
- I cherry picked the commits from the previous repository using `git cherry-pick <COMMIT HASH>`. This makes it look like everything was done instantly, but these are clones of the commits from this repository: https://github.com/sbrugel/fixed-quizzer/commits/main
## For grader:

Make sure to run `npm i` at first, since node_modules is ignored by default.
