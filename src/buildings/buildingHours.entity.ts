import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Buildings } from './buildings.entity';

@Entity()
export class BuildingHours extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  dayOfWeek: number;

  @Column({type: 'time', nullable: true})
  openTime: Date;

  @Column({type: 'time', nullable: true})
  closeTime: Date;

  @ManyToOne(() => Buildings, buildings => buildings.buildingHours)
  building: Buildings;

}