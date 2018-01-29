*[Click here](https://github.com/dylankershaw/six-of-one-api) for back-end repository.*

## Quick Start
The fastest and easiest way to view this app is by navigating to the deployed version via one of the existing post links:

*NOTE: Since the API is hosted on Heroku, its dyno may be asleep if not accessed for over an hour. If you experience this, it should speed up after the initial request.*

  * http://six-of-one.surge.sh/posts/knowledge-is-power/
  * http://six-of-one.surge.sh/posts/i-dwell-in-possibility/
  * http://six-of-one.surge.sh/posts/we-dont-get-offered-crises-they-arrive/
  * http://six-of-one.surge.sh/posts/i-have-seen-the-future-and-it-doesnt-work/
  * http://six-of-one.surge.sh/posts/it-is-impossible-to-walk-rapidly-and-be-unhappy/
  
  *NOTE: These post links are valid at time of writing. However, editing the title of any of them will change their slug and render the old URL to be obsolete. This is because the Title components are rendered with the help of a fetch that pulls the slug from the URL via react-router.*
  
To access the API directly, navigate to the following endpoint: https://six-of-one-api.herokuapp.com/api/v1/posts/:slug, replacing :slug with the desired article. This triggers the back-end Post controller's #show action to find render the given post.

## Installing & Running Locally
1. Clone or download the front- and back-end repos to your local machine.
<br /> `git clone https://github.com/dylankershaw/six-of-one-frontend.git`
<br /> `git clone https://github.com/dylankershaw/six-of-one-api.git`

2. Install packages and gems.
<br /> *in front-end directory:* `npm install`
<br /> *in back-end directory:* `bundle install`

3. Create, migrate, and seed database (if running API locally).
<br /> NOTE: If you'd prefer to run the API locally, be sure to Find & Replace all references to the surge.sh API with the path of your local API within the front-end app. (i.e. replace `six-of-one-api.herokuapp.com/` with `http://localhost:3000/`.
    * Since the database is PostgreSQL, be sure to run [Postgres](https://www.postgresql.org/) first.
    * *in back-end directory:*
      * `rake db:create`
      * `rake db:migrate`
      * `rake db:seed`
      
4. Start the servers.
<br /> *in back-end directory:* `rails s`
<br /> *in front-end directory:* `npm start` *(If necessary, hit `Y` to run on a different server since Rails is likely using the default.)*
5. Enjoy! And again, remember to access posts by navigating to the appropriate URL (i.e. http://localhost:3001/posts/knowledge-is-power).
