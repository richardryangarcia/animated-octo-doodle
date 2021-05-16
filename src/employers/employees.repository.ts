import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { Employers } from './employers.entity';

@EntityRepository(Employers)
export class EmployersRepository extends Repository<Employers> {}