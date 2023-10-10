import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto, userId: number) {
    return this.prisma.toDo.create({
      data: {
        userId,
        title: createTodoDto.title,
        status: false,
      },
    });
  }

  async findAll(userId: number) {
    return this.prisma.toDo.findMany({
      where: {
        userId,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.toDo.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, status: boolean) {
    const data = {
      status,
    };

    return this.prisma.toDo.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.toDo.delete({
      where: {
        id,
      },
    });
  }
}
