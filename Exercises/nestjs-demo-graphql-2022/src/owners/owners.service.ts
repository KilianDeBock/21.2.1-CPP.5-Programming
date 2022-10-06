import { Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private ownersRepository: Repository<Owner>,
  ) {}

  create(createOwnerInput: CreateOwnerInput) {
    const newOwner = this.ownersRepository.create(createOwnerInput);
    return this.ownersRepository.save(newOwner);
  }

  findAll() {
    return this.ownersRepository.find();
  }

  findOne(id: number) {
    return this.ownersRepository.findOneByOrFail({ id });
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    const oldOwner = this.ownersRepository.findOneByOrFail({ id });
    const newOwner = { ...oldOwner, ...updateOwnerInput };
    return this.ownersRepository.save(newOwner);
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
