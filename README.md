# info-web-front

how to start develop and debug on this project:

all the command below is for terminal on mac or linux, i'm not sure about windows, maybe install a bash.

for macOS to install node.js:

```
brew install node@18
node -v
```
（check if output is v18.*.*）

cd to your react-app folder in terminal:

```
npm install
```

(to create the node_modules folder, which all the package for the project is installed, it's a local folder not synced by the git version control, so you have to run the command on your own laptop)

to use an external library:

```
npm install [package_name]
```

to run the server and debug:

```
npm run dev
```

I do strongly recommend anyone who not familiar with the react.js to watch this tutorial. it's short and covered the basics

https://www.youtube.com/watch?v=SqcY0GlETPk

thanks
