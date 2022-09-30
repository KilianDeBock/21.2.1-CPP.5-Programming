import { Controller, Get } from '@nestjs/common';
import { CatsService } from '../cats/cats.service';
import { Cat } from '../interfaces';

@Controller('products')
export class ProductsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('all')
  findAll(): Cat[] {
    return this.catsService.findAll();
  }
}
