import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { Observable, map, pipe } from "rxjs";

const execSync = require("child_process").execSync;

@Injectable()
export class ImageService {
  token: string;

  constructor(private readonly httpService: HttpService) {
    const output = execSync(
      "gcloud auth application-default print-access-token"
    );
    this.token = String(output).trim();
  }

  annotateImage(imageUrl: string) {
    return this.httpService
      .post(
        "https://vision.googleapis.com/v1/images:annotate",
        {
          requests: [
            {
              features: [
                {
                  type: "LABEL_DETECTION",
                },
              ],
              image: {
                source: {
                  imageUri: imageUrl,
                },
              },
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${this.token}}`,
          },
        }
      )
      .pipe(map((response) => response.data));
  }
}
