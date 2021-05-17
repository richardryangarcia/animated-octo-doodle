import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BuildingHours } from './buildingHours.entity';
import { Rooms } from '../rooms/rooms.entity';
import { Events } from '../events/events.entity';

@Entity()
export class Buildings extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => BuildingHours, buildingHours => buildingHours.building)
  buildingHours: BuildingHours[];

  @OneToMany(() => Rooms, (room: Rooms) => room.building)
  public rooms: Rooms[];

  @OneToMany(() => Events, (events: Events) => events.building)
  public events: Events[];

}
