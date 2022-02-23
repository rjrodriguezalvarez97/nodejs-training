# Dev&Talent
The objective of this exercise is to consolidate knowledge about Node, Express, the preparation of a development environment similar to the one used in J&T and delve into important areas when working with APIs. At the end you will have a fully functional App with a CRUD API, database, auth, cool frontend to manage the information, etc.

# Development
To run the project first of all we need to build an image and run it inside a container. To do this go to the project directory and run the following commands

`docker build . -t nodejs-training`

`docker run -d -v $(pwd)/src:/usr/local/jtservice/src/ nodejs-training`

> With the `-v` flag we can edit files in our `/src` and they will be hot reloaded inside the container.