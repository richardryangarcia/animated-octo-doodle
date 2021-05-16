import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Bookings extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  roomId: number

  @Column()
  userId: string;

  @Column({type: 'timestamp'})
  startTime: Date;

  @Column({type: 'timestamp'})
  stopTime: Date;
}
