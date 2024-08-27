A RESTful API created for Techtonica.

Notes:
- actors and writers are listed in alphabetical order by last name, regardless of contribution size.
- Unsure what to do in the future for anomaly episodes (those with multiple weathers, those that are rereleases, and episodes with multiple parts)
- release dates are using ISO 8601. until i find something better, episode length is given in the format of 00:00 with the first two numbers representing minutes and the second two representing seconds.
- eventually rebuilding the databaseusing RSS feed data
- create year (instead of season) from release date

# Project guidelines:

- Change the information inside the file books.js to have your data (we suggest books, but if you want to use any other data, it's ok)
- Using Node and Express, create a GET router with a response that converts all using Json()
- Using that endpoint build a list of all your books in the backend(server side).
- Using Node and Express, create a route for each one of the verbs in CRUD operations in the backend. You don't need to have a Frontend. You can test your API using Postman.
- Bonus: Using that endpoint build a list of all your books in the Frontend (client side). Note: you will need to make a GET request to bring all your information to the Frontend too
