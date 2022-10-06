import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>) {}

  async createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petsRepository.create(createPetInput);
    return this.petsRepository.save(newPet);
  }

  async findAll(): Promise<Pet[]> {
    // const ped = new Pet();
    // ped.id = 1;
    // ped.name = 'Pedro';
    // ped.type = 'Dog';
    //
    // return [ped];

    return this.petsRepository.find();
  }
}
