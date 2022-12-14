## Tasks

1. Add Header

   - Generate component
   - Add HTML
   - Add CSS
   - Reset global CSS

2. List Foods

   - Create Food model
   - Create data.ts
     - Add sample foods

3. Add images to assets

4. Create Food service

5. Create Home component

   - Add TS
   - Add HTML
   - Add CSS

6. Search

   - Add method to Food service
   - Add search route
   - Show search result in Home component
   - Generate search comonent (add to Home Component, TS, HTML, CSS)

7. Tags Bar

   - Create Tag model
   - Add sample tags to data.ts
   - Food service
     - Add get all tags method
     - Add get all foods by tag method
   - Add tags route
   - Show tag result in Home Component
   - Generate Tags component (add to Home Component, TS, HTML, CSS)

8. Food Page

   - Add method to food service
   - Generate Food Page component (Route, TS, HTML, CSS)

9. Cart Page

   - Create CartItem Model
   - Create Cart Model
   - Generate Cart service
   - Add to Cart Button in Food Page
   - Generate Cart page component (Route, TS, HTML, CSS)

10. Not Found

    - Generate Component (TS, HTML, CSS)
    - Add to Pages
      - Home Page
      - Food Page
      - Cart page

11. Connect to Backend

- Create backend folder
- npm init
- npm install typescript
- Create tsconfig.json
- Create .gitignore
- Copy data.ts to bckend/src
- npm install express cors
- Create server.ts
  - install @types
  - Add Apis
- npm install nodemon ts-node -save-dev
- Add urs.ts to frontend
- Add HttpClient module
- Update food service

12. Login Page

- Generate Component (routes, TS, HTML, CSS)
  - Import Reactive Forms Module
- Add Login API
  - Use JSON
  - Add jsonwebtoken
  - Test using Postman
- Generate User Service
  - Generate User model
    -Add user Subject
  - Add Login Method
    - Add User Urls
    - Generate IUserLogin interface
    - Add ngx-toastr
      - Import Module
      - Import BrowserAnimationsModule
      - Add styles in angular.json
    - Add to Header
  - Add Local Storage methods
  - Add Logout Method
    - Add to Header

13. Make components for Login Page

- Input Container
- Input Validation
- Text Input
- Default Button

14. Connect Login API to MongoDB Atlas

- Moving Apis into routers
- Create MongoDB Atlas
- Create .env file
- Install
  - mongoose
  - dotenv
  - bcryptjs
  - jsonwebtoken
  - express-async-handler
- Connect to MongoDB Atlas
- Use MongoDB instead of data.ts in apis

15. Register User

    - Add Register API
    - Add register Service Method
    - Add Register Link
    - Add Register Component

16. Loading ...

- Add Image
- Add Component
- Add Service
- Add Interceptor

17. Checkout Page
    17.1. part

- Create Order Model
- Create Checkout Page Component
  - Add to Router
- Add User to User Service
- Add Cart to Cart Service
- Create Order Items List Component

  17.2. part

- Adding Map to the Checkout Page

  - Add Leaflet npm package
    - Add @types/leaflet
    - Add Css to angular.json
  - Add AddressLatLng to Order Model
  - Create Map component
    - Add to checkout page
    - Add TS
      - Change app-map selector to map
    - Add HTML
    - Add CSS
  - Add Auth Guard

    17.3 part

- Save Order
  - Add Order Model
  - Add Order Status Enum
  - Add Auth Middleware
  - Add Order Router
    - Add create API
  - Add Order Urls to urls.ts
  - Add Order Service
    - Add create Method
  - Add Auth Interceptor

18. Payment Page

- Generate Component
- Add 'getOrderForCurrentUser' api
- Add Order Service method
- Connect Component to Service
- Make the map component readonly

19. Adding Paypal

- Generate Component
  - Add to payment page
- Get Paypal client ID
- Add Paypal JS to index.html
- Set up Paypal button
- Add Pay API to order router
- Get Paypal sandbox account

20. Order Track Page

- Generate Component
  - Add to routes
- Add API
  - Add to urls.ts
- Add method to order.service
- Add HTML
- Add CSS
