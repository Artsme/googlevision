import { Module } from '@nestjs/common';
import { LabelModule } from './label/label.module'

@Module
({
    imports: [LabelModule]
})

export class AppModule
{}
