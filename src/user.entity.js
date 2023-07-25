import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id

    @Column()
    firstName

    @Column()
    lastName

    @Column()
    balance

    @Column()
    email

    @Column()
    password

    @Column()
    userType

    @Column()
    createAt

    @Column()
    updatedAt

    @Column()
    deletedAt

    @Column()
    isAdmin
    
}
