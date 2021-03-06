## To start the application:
1. ```cd client```
2. ```npm install```
3. ```npm start```

https://felix-art-store.netlify.app/

**Brief:**
Build a complete e-commerce website - develop the frontend client in a technology of our choice, setting up a database in MongoDb, and creating a RESTful API to connect the two.

**Timeframe:** Three weeks.

**Description:** 
I created a digital art webshop app in React. I decided to include common functions for e-commerce apps, like: search/filtering functions, add to cart and a checkout function.
I also added an login/admin page to handle the orders and mark them as shipped.

### Key Learnings:

**JS/React:**

  How to work with different components, 
  
  UseState for the search/cart function.

  Using React Router to handle navigation between Pages.
            
  Creating functional form components.
  
  How to use Fetch requests to access DB data via an API using endpoints.

**MongoDB:**

  Setting up a MongoDB database.

  Formatting collection and document schemas so that data is logically accessible.
  
  Formatting queries to search and filter data.
  
**REST APIs:**

  How to build a RESTful API from the ground up.
  
  How to connect to a database.
  
  How to use CRUD operators (POST, GET, DELETE etc.) to store, retrieve and manipulate data in the DB.
  
**Tailwindcss**
 
 Sample database document:
 
```{
  "_id": {
    "$oid": "62458299ad44cbcc4ff13785"
  },
  "image": "..//assets/images/night_lake_v3.jpg",
  "title": "Night Lake",
  "category": "environment",
  "price": 800,
  "isShipped": false
}



