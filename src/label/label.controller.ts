import { Controller, Get } from '@nestjs/common';
import { Query } from '@nestjs/common';
import { LabelService } from './label.service';

@Controller('label')
export class LabelController 
{
  constructor(private readonly labelService: LabelService)
  {}

  @Get('collect')
  collectLabels(@Query() query)
  {
    if (!query.imageUrl)
        query.imageUrl = 'https://media.timeout.com/images/105795964/750/422/image.jpg';
    
    this.labelService.collectLabels(query.imageUrl);

    return {success: true}
  }
}
