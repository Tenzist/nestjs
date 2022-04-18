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

    describe('getAllFilms', () => {
      it('should return an array of all films', async () => {
        const result = [];
        jest.spyOn(filmsService, 'getAllFilms').mockImplementation(async () => result);
        expect(await filmsController.getAllFilms()).toBe(result);
      });

      describe('FilmsController', () =>{
        it('should return top film', async () => {
          const result = [];
          jest.spyOn(filmsService, 'getTop').mockImplementation(async () => result);
          expect(await filmsController.getTop(321)).toBe(result);
        })
      })



      // it('should return string', async () => {
      //   expect('aaa' ).toBe('aaa');
      // })

    });
  });
