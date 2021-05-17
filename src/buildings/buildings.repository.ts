import { Repository, EntityRepository } from 'typeorm';
import { Buildings } from './buildings.entity';

@EntityRepository(Buildings)
export class BuildingsRepository extends Repository<Buildings> {}
