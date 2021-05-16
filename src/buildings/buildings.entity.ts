import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BuildingHours } from './buildingHours.entity';

@Entity()
export class Buildings extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => BuildingHours, buildingHours => buildingHours.building)
  buildingHours: BuildingHours[];

}
