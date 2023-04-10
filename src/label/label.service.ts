import { Injectable } from '@nestjs/common';
import { GoogleVisionService } from '../google-vision/google-vision.service';
import { LabelDbService } from '../db/label.db.service';

@Injectable()
export class LabelService
{
  constructor(private readonly googleVisionService: GoogleVisionService, private readonly labelDbService: LabelDbService)
  {
  }

  async collectLabels(imageUrl: string)
  {
    try
    {
      const codes = await this.googleVisionService.annotateImage(imageUrl);

      for (const code of codes)
      {
        const found = await this.labelDbService.findByCode(code);

        if (found == null)
          await this.labelDbService.insert(code);
      }
    }
    catch (error)
    {
      console.log("LabelService.collectLabels error: ", error);
    }
  }
}
