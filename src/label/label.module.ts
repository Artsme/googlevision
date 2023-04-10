import { Module } from '@nestjs/common';
import { GoogleVisionModule } from '../google-vision/google-vision.module';
import { DbModule } from '../db/db.module';
import { LabelService } from './label.service';
import { LabelController } from './label.controller';

@Module({
  imports: [GoogleVisionModule, DbModule],
  controllers: [LabelController],
  providers: [LabelService],
  exports: [LabelService]
})

export class LabelModule {}
