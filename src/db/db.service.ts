import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class DbService
{
  constructor()
  {
    try
    {
      mongoose.connect('mongodb://127.0.0.1:27017/test');
    }
    catch (error)
    {
      console.log("DbService.constructot error: ", error);
    }
  }
}
