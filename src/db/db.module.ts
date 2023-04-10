import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { LabelDbService } from './label.db.service';

@Module({
  providers: [DbService, LabelDbService],
  exports: [LabelDbService]
})

export class DbModule {}
