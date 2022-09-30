import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { CatsModule } from 'src/cats/cats.module';

@Module({
  controllers: [ProductsController],
  imports: [CatsModule],
})
export class ProductsModule {}
