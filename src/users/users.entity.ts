import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique , ManyToMany, JoinTable} from 'typeorm';
import { Roles } from '../roles/roles.entity';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  employerId: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @ManyToMany(type => Roles)
  @JoinTable({
    name: 'users_roles',
    joinColumn: { name: 'userId', referencedColumnName: 'id'},
    inverseJoinColumn: { name: 'roleId', referencedColumnName: 'id'},
  })
  
  roles: Roles[];
}
