/*jslint node:true, browser:true, esnext:true */
'use strict';

const ReactDOM = require('react-dom'),
    React = require('react'),
    SearchComponent = require('./components/search'),
    DashboardComponent = require('./components/dashboard');

ReactDOM.render(
  <DashboardComponent />,
  document.querySelector('.form-container')
);

ReactDOM.render(
  <SearchComponent api="api/v1/supplier-products" />,
  document.querySelector('.navbar-form.navbar-right')
);
