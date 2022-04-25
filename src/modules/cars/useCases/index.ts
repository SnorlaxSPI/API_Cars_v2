import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryController } from "./createCetegory/CreateCategoryController";
import { CreateCategoryUseCase } from "./createCetegory/CreateCategoryUseCase";

const categoriesRepository = new CategoriesRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController }