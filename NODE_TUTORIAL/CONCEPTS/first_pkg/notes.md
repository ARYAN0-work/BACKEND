## NOTES

- we only left with pkg.json[ manifest file that stores imp info about our project/project]
- three ways to create it

1. manula approch (create package.json in the root, create properties/pakages)
2. npm init (step by step, press enter to skip) => when we use this it will give us a walktriugh => we need this bcz when we install its gonna be stored as a dependcy and for showing that see npm init -y
3. npm init -y (everything default)


// well if you to publish the pkg it should be uniq thats why its never same

//lodash utility library for installation pupose

= after runnign 3rd command you will get a folder node modules which shows all the modules , if you dont have folder already npm creates it sp ofcourse in our case we didnt have any dependices so when we install that first dependcy this is where you find depency in node modules you have only 1 dependcy loadash => when you install depency its going to nbe in nide modules but if you try ti install a pkg that is bigger that uses other dependcies you will notice something preety cool where i run npm i bootstap => notice we have three dependcies more with bootstrap bcz it uses it also

## SUMMARY

why we need pkg json

we need to provide info about our project and inside their very imp poroject whihc is the dependcy one bcz in there we will sytrore the depencie which our projject is using & some pkg gonna use more then 1 pkg which can be installed automatically in this case that was bootstrap