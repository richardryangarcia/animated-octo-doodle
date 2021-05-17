import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Buildings } from '../buildings/buildings.entity';

@Entity()
export class Events extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  buildingId: number;

  @Column()
  primaryRoleId: number;

  @Column()
  guestRoleId: number;

  @Column()
  eventDate: Date;

  @ManyToOne(() => Buildings, (building: Buildings) => building.events)
  public building: Buildings;
}
