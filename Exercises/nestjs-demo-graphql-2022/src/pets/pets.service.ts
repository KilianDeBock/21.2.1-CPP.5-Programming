import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Owner } from '../owners/entities/owner.entity';
import { OwnersService } from '../owners/owners.service';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petsRepository: Repository<Pet>,
    private ownerService: OwnersService,
  ) {}

  getPet(id: number): Promise<Pet> {
    return this.petsRepository.findOneByOrFail({ id });
  }

  createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petsRepository.create(createPetInput);
    return this.petsRepository.save(newPet);
  }

  getOwner(ownerId: number): Promise<Owner> {
    return this.ownerService.findOne(ownerId);
  }

  findAll(): Promise<Pet[]> {
    // const ped = new Pet();
    // ped.id = 1;
    // ped.name = 'Pedro';
    // ped.type = 'Dog';
    //
    // return [ped];

    return this.petsRepository.find();
  }
}
