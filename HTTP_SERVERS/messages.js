/*
cloud is just bunch of servers holding data

## how http messages are structured

now there are two messages res and req both have 

-start line 
-optional header
-blank line which indicates that indicates that all the meta info has been sent 
- and effectivly headers are those meta info as well as optional body 
- req messgaes are the user is sending so for 

- in req message in start theres going to be a method then url as well as the http version now we are mostly gonna be intrested in methods and urls 

HTTP METHODS[WE WANNA COMMUNICATE OF WHAT WE ARE DOING]:- 

GET     → Read Data
POST    → Insert Data
PUT     → Update Data
DELETE  → Delete Data

API EXAMPLES:-

GET     www.store.com/api/orders        // DEFAULT METHODS BROWSER DO 
        → get all orders

POST    www.store.com/api/orders
        → place an order (send data)

GET     www.store.com/api/orders/:id
        → get single order (path params)

PUT     www.store.com/api/orders/:id
        → update specific order (params + send data)

DELETE  www.store.com/api/orders/:id
        → delete order (path params)

ISKE BAAD MOSTLY DATA HI THA LEARN THROUGH APPLICATION


*/