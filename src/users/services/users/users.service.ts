// import { User } from './../../../../dist/users/types/user.d';
import { CreateUserDto } from './../../dtos/CreateUser.dto';
/* eslint-disable*/ /*prettier/prettier */
import { serializedUser, User } from '../../types';
import { Injectable, SerializeOptions } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from '../../../typeorm';
import { Repository } from 'typeorm';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {
    }

    // private users: User[] = [
    //     {
    //         id: 1,
    //         username: 'Atul',
    //         password: 'Atul',
    //     }, {
    //         id: 2,
    //         username: 'Deepak',
    //         password: 'Deepak',

    //     },
    //     {
    //         id: 3,
    //         username: 'Derek',
    //         password: 'Derek',
    //     },
    //     {
    //         id: 4,
    //         username: 'Rohan',
    //         password: 'Rohan',
    //     }

    // ];

    private users: User[] = [];

    getUsers() {
        // return this.users.map((user) => new serializedUser(user));
        const users = this.userRepository.find({});
        return users;
    }

    getUserByUserName(username: string) {
        return this.users.find(user => user.username === username);
    }

    getUserById(id: number) {
        return this.users.find(user => user.id === id);

    }

    createUser(createuserDto: CreateUserDto) {
        console.log("Inside User Service Layer ...");
        const password = encodePassword(createuserDto.password)
        console.log("Encrypted-Password:  " + password);

        const newUser = this.userRepository.create({ ...createuserDto, password });

        return this.userRepository.save(newUser);
    }

    //find username from database:
    async findUserByUsername(username: string) {
        const user = await this.userRepository.findOne({
            where:
                { username: username }
        });
        return user;
    }

    findUserById = async (id: number) => {
        return await this.userRepository.findOne({ where: { id: id } });

    }
}