import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Buildings } from '../buildings/buildings.entity';

@Entity()
export class Employers extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToMany(type => Buildings)
  @JoinTable({
    name: 'employers_buildings',
    joinColumn: { name: 'employerId', referencedColumnName: 'id'},
    inverseJoinColumn: { name: 'buildingId', referencedColumnName: 'id'},
  })
  
  buildings: Buildings[];
}
