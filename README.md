# Crypto tracker frontend

This project is a simple page application written in React.

## Description

Cripterio is an app to monitor all major crypto currency prices and market volumes - current and historical. It also allows for authenticated users to crerate histroy of all their transactrions of crypto currencies.

### Packages

- create react app
- recharts for charts
- Formik for auth forms and yup for auth forms validation
- date-fns for dates formating and calculation
- react-dropzone for image upload
- react-cropper for avatar cropping

### `External API`

- this project uses coingecko.com API for crypto currency market data
  [https://api.coingecko.com/api/v3](https://api.coingecko.com/api/v3)

**Note: backend [repo](https://github.com/dkutelov/crypto-tracker-backend) **

--- notes ---
**Note: `mareked`, ... !**

### TODO

- handle error - server
- handle error/ notifications - client
- loading spinner
- deploy client to Firebase, deploy server to Heroku
- profile avatar - dropzone and Cloudinary
- coin detail page more data and styling
- test

### Whishlist

- Purchase coin with Stripe
- add animations - [motion](https://www.framer.com/motion/)
