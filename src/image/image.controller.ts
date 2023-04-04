import { Controller, Get } from '@nestjs/common';
import { Query } from '@nestjs/common';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController 
{
    constructor(private readonly imageService: ImageService)
    {}

    @Get('annotate')
    annotateImage(@Query() query)
    {
        if (!query.imageUrl)
            query.imageUrl = 'https://media.timeout.com/images/105795964/750/422/image.jpg';
        
        return this.imageService.annotateImage(query.imageUrl);
    }
}
