import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Buildings } from '../buildings/buildings.entity';

@Entity()
export class Rooms extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  buildingId: number;

  @Column()
  primaryRoleId: number;

  @ManyToOne(() => Buildings, (building: Buildings) => building.rooms)
  public building: Buildings;
}
