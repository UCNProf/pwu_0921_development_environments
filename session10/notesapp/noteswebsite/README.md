# Express website

This website is just a boilerplate website made with [Express application generator](https://expressjs.com/en/starter/generator.html).

To run the website using Node.js, first install it:
```
$ npm install
```
To run the website in Docker build an image:
```
$ docker build -t express .
```
And then create a container (and mapping the current directory to the container):
```
$ docker run -d --name expresswebsite -p 3030:3000 -v "$(pwd)":/var/www express
```