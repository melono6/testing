# Tech test

Tested in Chrome, firefox and safari on osx

## Requirements

- Node v6.3.1
- MongoDB
- Gulp

## Running project

```
$ cd src
$ npm i
$ gulp build
$ node ./server
$ navigate to http://127.0.0.1:8000
```

To run in development mode:
```
$ gulp develop
```

## Usage
### Dashboard
- Change select options to see results in table
- sort table data by clicking the table headers

### Search
- Enter a text query into the seach bar to see results.

## Decription
### Frontend
- Gulp for task running
- DustJS for static html
- React for interactive components
- Sass for css pre-processing
- Browserify for js compiling


### Backend
- Node
- Express for application framework
- MongoDB for database
- Mongoose for object models

## API routes

### GET
Get records
- /api/v1/products
- /api/v1/suppliers
- /api/v1/supplier-products

### POST
Creat new records
- /api/v1/products
- /api/v1/suppliers
- /api/v1/supplier-products

### PUT
Update records
- /api/v1/products/:id
- /api/v1/suppliers/:id
- /api/v1/supplier-products/:id

### DELETE
Delete records
- /api/v1/products/:id
- /api/v1/suppliers/:id
- /api/v1/supplier-products/:id
