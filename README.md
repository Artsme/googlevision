
# Test image annotation with Google Vision API

## Purpose
Takes an image URL, detects its labels using Google Vision API and stores them in MongoDB collections.

## Requirements

- [Node.js](https://nodejs.org/)

## Usage

Run from the topmost folder:
```
npm install
npm run start
```    
Then open your browser and navigate to:
```
http://localhost:3000/label/collect?imageUrl=<an openly accessible URL of the image>
```
Parameter 'imageUrl' can be omitted. A default image will be processed in that case.

Each label returned by Google Vision API will be store in MongoDB collection 'labels'. Here is its schema:
```
{
  code: {type: String, index: true, unique: true},
  translations: [{language: String, title: String}],
  enabled: {type: Boolean, default: true}
}
```
- 'code' is the label returned by Google.
- 'translations' array stores titles of the label in different languages. The English title (having language = 'en') coincides with the code. So far only the English title is stored.
- 'enabled' flag allows to disable certain labels if required. Originally it is set to true by default.
