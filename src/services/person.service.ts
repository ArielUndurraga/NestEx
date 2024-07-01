import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Person, Prisma } from '@prisma/client';


@Injectable()
export class PersonService  {

  constructor(private prisma: PrismaService) {}

  async createPerson(person: Prisma.PersonCreateInput): Promise<Person> {
    return this.prisma.person.create({
      data: person
    });
  }


  async deletePerson(personId: number): Promise<Person> {
    return this.prisma.person.delete({
      where: {
        person_id : personId
      }
    });
  }


  async findAllPerson(): Promise<Person[]> {
    return this.prisma.person.findMany({});
  }

}