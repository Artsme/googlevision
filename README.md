# Test image annotation with Google Vision API

## Purpose
Accesses Google Vision API and returns a list of annotated labels for an image provided by a URL.

## Requirements

- [Node.js](https://nodejs.org/)
- [Google Cloud CLI](https://cloud.google.com/sdk/docs/install)

For authentication in Google Cloud you have to create a service account, generate a JSON key file, activate the service account and set GOOGLE_APPLICATION_CREDENTIALS environment variable to the location of the downloaded JSON key file. See [this guide](https://cloud.google.com/vision/product-search/docs/auth) for detailed instructions.

## Usage

Run from the topmost folder:
```
npm install
npm run start
```    
Then open your browser and navigate to:
```
http://localhost:3000/image/annotate?imageUrl=<an openly accessible URL of the image>
```
Parameter 'imageUrl' can be omitted. A default image will be processed in that case.
