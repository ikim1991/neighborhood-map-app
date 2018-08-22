# Neighborhood Map React Web App #

As the final project of Udacity's Front-End Web Developer Nanodegree Program,
this React Web App utilizes the Google Maps API to render a map. Based on predetermined
locations in a backend server/or hard-coded into the program, this app utilizes the Foursquare
API to render information about the venue, including photos, address info, website info, and user
reviews from Foursquare.

## Getting Started ##

After the app has been cloned from the repository the app can be accessed by:
  1. Installing all project dependencies with `npm install`
  2. Starting up the server with `npm start`

## Built With ##

  1. React
  2. JavaScript
  3. Google Maps & Foursquare APIs
  4. Service Worker for Caching

## Foursquare API ##

The current app is using a standard (free) API key generated from Foursquare. This will limit the number
of API calls that can be made daily and a limited amount of content that is being called.
A payment is required to generate a premium API Key from Foursquare. When the API quota is exceeded, the app
will not be able to fetch the data. Check your console to see the status of the incoming API calls.

## Google Maps API ##

Google Maps API also requires a payment option to generate a premium API Key. The current API Key listed in
this app is a standard (free) API key used for developing purposes. The map is still able to render and all
functionality is active, such as markers and info windows.

## License ##

The MIT License (MIT)

Copyright 2018 Chris Kim

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
ITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
