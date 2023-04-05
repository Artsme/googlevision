import { Body, Controller, Post } from "@nestjs/common";
import { GoogleVisionService } from "./google-vision.service";

@Controller("google-vision")
export class GoogleVisionController {
  constructor(private readonly googleVisionService: GoogleVisionService) {}

  @Post("annotate-image")
  async annotateImage(@Body("url") url: string) {
    return this.googleVisionService.annotateImage(url);
  }
}
