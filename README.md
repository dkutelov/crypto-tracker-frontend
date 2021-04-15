# Crypto tracker frontend

This project is a simple page application written in React. The application is an exam project for Softuni React course 4/2021. The project is using a backend written in Node/ Express (see the link to the repo in the backend section). The backend is using a MongoDB database in Atlas cloud. Images for avatars of the users are uploaded to Firbase cloud storage.

To run the application you need to download the zip file or clone the repo to run the application.

- install dependencies

```
yarn install
```

## Description

Cripterio is an app to monitor all major crypto currency prices and market volumes - current and historical.

The application provides more detailed information for each currency including last 7 days prices, current price and description.

Crypterio allows authenticated users to create record and history of all their transactrions with crypto currencies. It provides full CRUD functionality for each transaction.

The application allows authenticated users to monitor the current value of their portfolio and how its value evolved over the last 7 days.

### Packages

- create react app
- recharts for charts
- Formik for auth forms and yup for auth forms validation
- date-fns for dates formating and calculation
- react-dropzone for image upload
- react-cropper for avatar cropping
- firebase storage - image upload for avatar
- react stripe checkout for payment via Stripe

### App state

The application creates and manages a central state for:

- user
- portfolio
- error.
  The state is hold in react context and managed by react reducer.

### `External API`

- this project uses coingecko.com API for crypto currency market data
  [https://api.coingecko.com/api/v3](https://api.coingecko.com/api/v3)

### `Backend`

- for backend code check this link:
  [Link to backend repo](https://github.com/dkutelov/crypto-tracker-backend)

- backend is deployed on Heroku:
  [https://blooming-basin-18460.herokuapp.com/api](https://blooming-basin-18460.herokuapp.com/api)
