import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Events extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

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
}
