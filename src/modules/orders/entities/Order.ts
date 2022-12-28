import { Column, CreateDateColumn, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Game } from '../../games/entities/Game';
import { User } from '../../users/entities/User';

export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(()=> User, user => user.id)
    @JoinColumn({ name: 'buyerId' })
    buyer: User

    @Column()
    buyerId: string

    @ManyToOne(()=> Game, game => game.id)
    @JoinColumn({ name: 'gameId' })
    game: Game

    @Column()
    gameId: string

    @Column()
    price: number

    @Column()
    status: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}