import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnersModule } from './owners/owners.module';

@Module({
  imports: [
    PetsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      introspection: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    OwnersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
