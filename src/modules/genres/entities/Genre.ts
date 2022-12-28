import { PrimaryGeneratedColumn, CreateDateColumn, Column, UpdateDateColumn, OneToMany } from 'typeorm';
import { Game } from '../../games/entities/Game';


export class Genre {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @OneToMany(() => Game, (game:Game) => game.id)
    games: Game[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}