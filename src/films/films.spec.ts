import { FilmsController } from "./films.controller";
import { FilmsService } from "./films.service";
import { Test } from "@nestjs/testing";
import { Film } from "./films.model";

describe('FilmController', () => {
  let filmsController: FilmsController;
  let filmsService: FilmsService;

    beforeEach(() => {
      filmsService = new FilmsService(Film);
      filmsController = new FilmsController(filmsService);
    });

    describe('getAll', () => {
      it('should return an array of all films', async () => {
        const result = [];
        jest.spyOn(filmsService, 'getAll').mockImplementation(async () => result);

        expect(await filmsController.getAll()).toBe(result);
      });

      describe('FilmsController', () =>{
        it('should call create once', async () => {

        })
      })
      // it('should return string', async () => {
      //   expect('aaa' ).toBe('aaa');
      // })

    });
  });
