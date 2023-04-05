import { Module } from "@nestjs/common";
//import { ImageModule } from './image/image.module'
import { GoogleVisionModule } from "./google-vision/google-vision.module";

@Module({
  imports: [GoogleVisionModule],
})
export class AppModule {}
