# Objective

This project was quickly created following [this](https://www.youtube.com/watch?v=XGPRyL7TXsk&feature=emb_title&ab_channel=Novatics-TecnologiaeInova%C3%A7%C3%A3o) tutorial link to better the AtomicDesign way of doing this.

# Atomic Design
This kind of architecture is suggested for building desing system. 

Also, it is good for the UI subject for large applications.

We need to be careful to not inflate to much the project creating our versions of the atoms.

# The Application

It basically has 3 routes: `.../`, `.../kanban`, `.../atomic`.

The only one which differs from a simple component is the Home one: `.../`.

It is good to notice that all the routes we are embedding we are passing thorought a `MainTemplate` HOC which we pass to it all the pages we have on our app.

Also, a thing to keep in mind is that we also wraps the `routes` through the `index.js` file in the root of the `pages` folder.

# Available Scripts

`npm start`: Runs the app normally.

