# Hotel Azure

Hotel Azure is a small, upscale hotel in some city somewhere. Azure's website allows users to view the hotel's amenities, create reservations, sign up for an account, and sign <i>into</i> their account where they can view and manage their existing reservations.

This single page application was built on a Ruby/Sinatra backend and a Reactjs frontend. The Reservations Model within our project's backend has full CRUD action capabilities: Users can create, read, update and delete reservations.

![Hotel logo](public/hotel_logo.png)

## Getting Started 

#### <b>Installation</b>
Fork and clone our project's [backend](https://github.com/genevievesuder/phase-3-project-backend)
and [frontend](https://github.com/genevievesuder/phase-3-frontend)

Install all dependencies with ```npm install``` on the Frontend and ```bundle install``` on the Backend. 


After everything is installed, you will need to run rake: db:migrate if the tables havent been created yet. You will also need to start the backend server by running the command ```shotgun``` within your terminal, and the front end server by running the command ```npm start```.
=======
Run commands ```rake db:migrate``` & ```rake db:seed``` to migrate your tables and seed your database.

After everything is installed, start the backend server by running the command ```shotgun``` within your terminal, and the front end server by running the command ```npm start```.


### Further Reading
[View our blog post about our project's POST fetch request](https://medium.com/@genevievesuder/making-a-post-fetch-request-from-a-reactjs-to-a-ruby-sinatra-api-81f044d13e70)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Creators:
* [Ryan Sullivan](https://github.com/Shenanigans570)
* [Genevieve Suder](https://github.com/genevievesuder)
### Contributing
Contributing is not welcome so dont even try it. 