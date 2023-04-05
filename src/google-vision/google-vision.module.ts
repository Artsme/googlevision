import { Module } from "@nestjs/common";
import { GoogleVisionService } from "./google-vision.service";
import { GoogleVisionController } from "./google-vision.controller";

@Module({
  controllers: [GoogleVisionController],
  providers: [GoogleVisionService],
})
export class GoogleVisionModule {}
