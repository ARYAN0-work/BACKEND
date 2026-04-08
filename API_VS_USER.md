## API-VS-USER [EXPRESS HAVE TWO OPTIONS]

API- JSON                                       SSR-TEMPLATE
SEND DATA                                       SEND TEMPLATE
RES.JSON()                                      RES.RENDER()


# in case of express and http
- api= setting up a http interface between to interact with our data is sent using json which stands for js object notation and in order to send back our response we are going to use res.json method which will do all the heavy lifting for ex setting up proper content type and stingify our data the other flavorwe have is server side rendering where we will set up templates and send back entire html and css and js ourselvees and we are going to do that using res.render method 

# main ideas with apis
- main ideas with apis is that our server provides data and what that means that any front end app that wanys to access it and use it can simply perform a http request and using our data set up the api and functionalty how does that look like in a real world well 