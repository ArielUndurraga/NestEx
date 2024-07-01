import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { PersonService } from "src/services/person.service";
import { Person as PersonModel, Prisma} from '@prisma/client';


@Controller('person')
export class PersonController {
    constructor(private readonly personService: PersonService) {}

  

    @Get()
    async getAllPerson(): Promise<PersonModel[]>{
        return this.personService.findAllPerson();
    }

    @Post()
    async createPerson(@Body() person: Prisma.PersonCreateInput): Promise<PersonModel> {
        return this.personService.createPerson(person);
    }

    @Delete(':id')
    async getPersonById(@Param('id', ParseIntPipe) id: number): Promise<PersonModel> {
        return this.personService.deletePerson(id);
    }

}