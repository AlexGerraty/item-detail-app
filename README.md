# Item Detail App

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Improvements](#improvements)
- [Author](#Author)

## Introduction

The Item Detail App is a React application that allows users to browse a list of products, search, sort by various criteria, and view detailed information about each product. The app fetches data from Dummy JSON and provides a seamless user experience with a responsive design.

## Features

- **Search Products**: Users can search for products by name.
- **Sort Products**: Users can sort products by name (ascending/descending) and price (ascending/descending).
- **Product Details**: Users can view detailed information about each product, including images, description, price,     availability status, and rating.
- **Responsive Design**: The app is designed to work on both desktop and mobile devices.

## Installation

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

## Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/item-detail-app.git
   cd item-detail-app bash 
 
2. Install dependencies:
   ```bash
   npm install
    # or
   yarn install
## Usage

### Running the Application

1. Start the development server:
   ```bash
   npm start
    # or
   yarn start

2. Open your browser and navigate to http://localhost:3000.


## Deployment

The application has been deployed through Heroku and can be accessed through this link

https://item-detail-app-621e9a0c7d54.herokuapp.com/

## Improvements 

1. Images and Thumbnails

  Due to the thumbnails and images retrieved from Dummy JSON being varying sizes it was difficult to align them within Cards from Bootstrap

  In future, I would like to get access to the photos in order to alter them to specific sizes, this will allow a more pleasing and aesthetic viewing experience.

2. Adding a Category Selector

   Using the "tag" name and it's corresponding value, a category selector can be used in order to specifically target the item of which the consumer is searching for.


## Author

My Name is Alex Gerraty and I have constructed this simple web application to demonstrate my profiency with fetching data from API's.
