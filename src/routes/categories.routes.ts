import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const catetoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  catetoriesRepository.create({ name, description });
  
  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const all = catetoriesRepository.list();

  return response.json(all);
})

export { categoriesRoutes };