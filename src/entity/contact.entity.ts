import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryColumn()
  firstName: string;

  @Column()
  phoneNumber: string;

  @Column()
  lastName: string;

  @Column()
  emailAddress: string;
}
