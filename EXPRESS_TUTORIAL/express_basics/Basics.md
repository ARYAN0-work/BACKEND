## its a framework not a built in module helps to create apps

- --save flsag for github refrence if you didnt write when someone other cloned hes gonna get prob

- When you install a package using npm, you often use:

npm install express --save

- What --save does: It adds the package to package.json under dependencies.

SO;

If YOU install it → your project works
If SOMEONE CLONES your repo → they can just run:npm install and everything installs

- the prob;

If you don’t save dependencies, then:

-They won’t be listed in package.json
-Someone cloning your repo runs npm install, missing packages → app break

# the soln => Modern npm (v5+) automatically saves dependencies.

npm install express-> npm install express --save

## CONCLUSION

- npm automatically saves dependencies in package.json (earlier we used --save)
- important so that when someone clones the repo, npm install installs everything