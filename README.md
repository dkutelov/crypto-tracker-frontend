# Crypto tracker frontend

This project is a simple page application written in React. You need to download the zip file or clone the repo to run the application.

- install dependencies

```
yarn install
```

## Description

Cripterio is an app to monitor all major crypto currency prices and market volumes - current and historical. It provides more detailed information for each currency including last 7 days prices.

The app allows authenticated users to create record and history of all their transactrions with crypto currencies. Cripterio tracks the current value of the user portfolio and its value evolution over the last 7 days.

### Packages

- create react app
- recharts for charts
- Formik for auth forms and yup for auth forms validation
- date-fns for dates formating and calculation
- react-dropzone for image upload
- react-cropper for avatar cropping
- firebase storage - image upload for avatar

### `External API`

- this project uses coingecko.com API for crypto currency market data
  [https://api.coingecko.com/api/v3](https://api.coingecko.com/api/v3)

### `Backend`

[Link to backend repo](https://github.com/dkutelov/crypto-tracker-backend)

**Notes**

### TODO

- handle error - server
- handle error/ notifications - client, common error handler
- loading spinner
- deploy client to Firebase, deploy server to Heroku (update fronent services)
- profile pages and styling
- coin detail page more data and styling
- test

### Whishlist

- Purchase coin with Stripe
- add animations - [motion](https://www.framer.com/motion/)

**Note example: `marked`, ... !**
