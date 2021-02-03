# Movie Time

## Description
This [web application](https://shielded-coast-01014.herokuapp.com/) deployed on Heroku allows users to save the title of movies to the watchlist, which is saved to a SQL database. Users can click the *"watched it"* button on each movie in **Movies to Watch** to move it to the **Watched Movies** list, and then the *"nevermind"* button to move it back. Users add movies to the watchlist using the **Add a Movie** form, which POSTs their entry to the database.


## Table of Contents
* [Technologies Used](#technologies-used)
* [How to Access](#how-to-access)
* [What I Did](#what-i-did)
* [Code Snippets](#code-snippets)
* [Screenshots](#screenshots)
* [Acknowledgments](#acknowledgments*)
* [Who I Am](#who-i-am)

---

## Technologies Used
* [Javascript](https://www.javascript.com/) to develop the logic and dynamically-generated HTML included in this web application.
* [Node.js](https://nodejs.org/en/docs/) to run this Javascript program in the terminal/Git Bash console during development.
* [Express](https://www.npmjs.com/package/express) for the use of shorthand methods for developing server code with Javascript.
* [MySQL](https://www.mysql.com/) for peristent relational database structure.
* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) to use heroku commands in the terminal for deployment to Heroku.
* [Git](https://git-scm.com/) for distributed version control, tracking changes over time and making them visible to collaborators.
* [Github](https://github.com/) for version control in the cloud, saving my changes and presenting them clearly to myself and others.

## How to Access
This web application is hosted on Heroku, and can be [accessed here](https://shielded-coast-01014.herokuapp.com/), and here: <https://shielded-coast-01014.herokuapp.com/>

---

## What I Did
I utilized a backend Javascript ORM to link a SQL database to Express GET/POST/PUT route handling, which is then linked to frontend Javascript and Handlebars to dynamically generate the HTML served to the browser. The directory structure is specifically modeled after Handlebars conventions. The modularized Javascript files pass values and callback functions between one another using module.exports() and require(), and their united functionality determines how the frontend elements interact with the backend database, and vice versa.

## Code Snippets 
The following code comes from /views/index.handlebars, and represents an HTML template that uses values passed from `movieControl.js`. The Handlebars values specified by {{}} braces represent object key values from the array of objects sent to this file by the movieControl.js. Each object represents an item (row) in the "movies" table in the database, which is delivered as an array to this file through a series of callback functions that compose the ORM. 

```javascript
<section class="clearfix">
    <div id="list1">
        <h2>Movies to Watch</h2>
        <ul>
        {{#each movies}}
            {{#unless watched}}
            {{> movie-block watched=true}}
            {{/unless}}
        {{/each}}
        </ul>
    </div>

    <div id="list2">
        <h2>Watched Movies</h2>
        <ul>
        {{#each movies}}
            {{#if watched}}
            {{> movie-block watched=false}}
            {{/if}}
        {{/each}}
        </ul>
    </div>
</section>
```
For each movie, the key boolean value of "watched" is checked to see which list the movie will be placed in. Watched movies `(watched = true)` and Movies to Watch `(watched = false)` each call the Handlebars partial `movie-block.handlebars` and give it a new value of watched equal to its opposite. This serves as the mechanism to switch the state of the "watched" boolean key for the movie to be swapped to the other list. The partial also includes a small snippet of HTML to insert the button that allows the user to interact with the element.

## Screenshots
Example of the app in the browser

![example_home](./public/assets/app_example.PNG)

---

## Acknowledgments
* [W3Schools](https://www.w3schools.com/) has been my go-to for descriptive tutorials on HTML, CSS, and Javascript syntax and best practices. I am eternally grateful for their massive store of documentation.
* [MDN Web Docs](https://developer.mozilla.org/en-US/) is another resource for documentation on HTML, CSS, and Javascript that I find myself using more and more often as I work through deeper Javascript.
* [Express](https://www.npmjs.com/package/express) deserves another round of thanks for being a really cool way to develop backend code in Javascript.
* [gstudioimagen](https://www.freepik.com/vectors/camera) for the free camera vector art.

## Who I Am
My name is Rand Hale, and I am an aspiring programmer/web developer based in California.

* [LinkedIn](https://www.linkedin.com/in/rand-hale-83ba389b/)
* [GitHub](https://github.com/prophetrand)