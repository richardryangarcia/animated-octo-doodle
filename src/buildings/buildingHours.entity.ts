import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Buildings } from './buildings.entity';

@Entity()
export class BuildingHours extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  dayOfWeek: number;

  @Column({type: 'timestamp'})
  openTime: Date;

  @Column({type: 'timestamp'})
  closeTime: Date;

  @ManyToOne(() => Buildings, buildings => buildings.buildingHours)
  building: Buildings;

}