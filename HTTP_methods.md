HTTP METHODS

GET → Read Data
POST → Insert Data
PUT → Update Data
DELETE → Delete Data

        CONVENTION [--> BELOW]

GET     www.store.com/api/orders
        → get all orders

POST    www.store.com/api/orders
        → place an order (send data)

GET     www.store.com/api/orders/:id
        → get single order (path params)

PUT     www.store.com/api/orders/:id
        → update specific order (params + send data)

DELETE  www.store.com/api/orders/:id
        → delete order (path params)