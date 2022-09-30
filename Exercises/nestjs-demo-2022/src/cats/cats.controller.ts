import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from '../interfaces';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get('cat/:id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Get('all')
  findAll(): Cat[] {
    return this.catsService.findAll();
    // return 'This action returns all cats';
  }

  @Post('createCat')
  // @HttpCode(204)
  async createCat(@Body() createCatDto: CreateCatDto): Promise<string> {
    this.catsService.create(createCatDto);
    console.log(createCatDto);
    return 'This action adds a new cat';
  }
}
