import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { DbService } from './db.service';

const { Schema } = mongoose;

const labelSchema = new Schema({
  code: {type: String, index: true, unique: true},
  translations: [{language: String, title: String}],
  enabled: {type: Boolean, default: true}
});

labelSchema.index({ 'translations.language': 1, 'translation.title': 1 });

const Label = mongoose.model('labels', labelSchema);

@Injectable()
export class LabelDbService
{
  constructor(private readonly dbService: DbService)
  {
  }

  async findByCode(code: string)
  {
    try
    {
      const found = await Label.find({code: code}).exec();

      if (found.length == 0)
        return null;
      else
        return found[0];
    }
    catch (error)
    {
      console.log("LabelDbService.findByCode error: ", error);
      return null;
    }
  }

  async insert(code: string)
  {
    try
    {
      const label = new Label({code: code, translations: [{language: "en", title: code}]});
      return await label.save().then(label => {return label._id});
    }
    catch (error)
    {
      console.log("LabelDbService.insert error: ", error);
      return null;
    }
  }
}
