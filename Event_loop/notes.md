## node docs

- it allows node.js to perform non-blocking i o so input and output operation despite the fact js is single threade-by offloading operation to the system kernel whenever possible

## JS is synchronus and single threaded

- fancy way of saying repeat everything line by line=1st slide

- 2nd slide- if we would want to offload something to thd broweser

- we can offload that time consimusing opperation to the browser it doesnt mean we can offload for loops[we can still wright blocking code in js] browser does provide some apis where we dont have to write the blocking code , browser does provude some nice apis where we can offload those time consuming tasks and that brings us to our main freind the nodejs event loop before i go over the ex let me stress something event loop is somewhat complex


                                    ---->Register DB 


                                -------------->    
---->REQUSET[client|se]      |   event loop    |                    <-----Complete                          from [dtabase , file system, networks,
                               <------------                                                                                               others]

                         <-----excute cb

ok so now i have a app and subscribewrs are annoying in so event loop is responsible for this type of scenario[lets say theres 8 users] but larry decide to send a request witch us same time consiming i dont know database crawl or something like that so effrectivily hes requesting something and behind the scense in my cod ethatmeans that i need to perform something that takes a long tine so in this case event loop just registers the callback so it registers what needs to be done when the task is complte bcz is the event loop wouldnt do that then we would have tis scenario where the requests are coming in and becz larry is taking sometjing that takes long time the rest of users have to wait essentialy its not the actual operation that takes a long time its just the facty that we are wasting our time on waiting for that operation to be done and only then we can serve the other users but what the event loop odes it registers the callback and only when the peration is complete it excutes it its same scenario when we diodnt run our immediate code and only when we have time we excute the callback for ex if i have 100 of console logs after the next i would run them first and only then the second task would appear her regardless of what timme set in here
bcz again we are running our immediate task again first and only then we run the callback so the same things happen here where the requewst are coming in lets say the operation is complte we first register the callback operation is complete instead of excuting that callback right away it effectivly gets put at the end of line and when theres no immeditae code to run then we exucute the code

## summary

- it helps in offloading