## Express is flexible: it can either serve a full user interface or just raw data.

## API-VS-USER [EXPRESS HAVE TWO OPTIONS]

API- JSON                                       SSR-TEMPLATE
SEND DATA                                       SEND TEMPLATE
RES.JSON()                                      RES.RENDER()


# in case of express and http
- api= setting up a http interface between to interact with our data is sent using json which stands for js object notation and in order to send back our response we are going to use res.json method which will do all the heavy lifting for ex setting up proper content type and stingify our data the other flavorwe have is server side rendering where we will set up templates and send back entire html and css and js ourselvees and we are going to do that using res.render method 

# main ideas with apis
- main ideas with apis is that our server provides data and what that means that any front end app that wanys to access it and use it can simply perform a http request and using our data set up the api and functionalty how does that look like in a real world well 

# API

When you build an API, your server isn't worried about how the website looks. Its only job is to provide raw information.

Format: You use JSON (JavaScript Object Notation), which is a lightweight way to send data.

Method: You use res.json().

The Heavy Lifting: Express handles the "Content-Type" headers and automatically converts your JavaScript objects into a string so the frontend can read them.

Real World: Any frontend app (React, Vue, or even a Mobile App) can "fetch" this data and decide how to display it.

# SSR [SERVER SIDE RENDERING]

This is the Server-Side Rendering we just discussed. Here, the server is the "chef" cooking the entire meal before serving it.

Format: You use Templates (like EJS or Pug).

Method: You use res.render().

What it sends: It sends back a completed HTML file, usually including the CSS and JavaScript needed for that specific page.

The Difference: Unlike the API option, the browser doesn't have to do any "work" to build the page; it just displays what the server sent.



Feature,                          API (JSON),                                 SSR (Template)
Primary Goal,             Provide raw data for other apps to use.,            Provide a ready-to-use webpage for a user.
Express Command,             res.json(),                                      res.render()
Response Type,               application/json,                                text/html