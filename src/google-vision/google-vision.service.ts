import { Injectable } from "@nestjs/common";
import { ImageAnnotatorClient } from "@google-cloud/vision";

@Injectable()
export class GoogleVisionService {
  async annotateImage(imageURL: string): Promise<Array<string>> {
    //console.log('imageURL: ', imageURL);
    try {
      const client = new ImageAnnotatorClient({
        keyFilename: "./google-vision-credentials.json",
      });
      const request = {
        image: {
          source: {
            imageUri: imageURL,
          },
        },
        features: [{ type: "LABEL_DETECTION" }],
      };

      const response = await client.annotateImage(request);
      //console.log('response: ', response);
      return response[0]?.labelAnnotations?.map(
        ({ description }) => description
      );
    } catch (error) {
      console.log("error: ", error);
      return [];
    }
  }
}
