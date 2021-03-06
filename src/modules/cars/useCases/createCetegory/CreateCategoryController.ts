import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { Response, Request } from 'express';

class CreateCategoryController {

  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    await this.createCategoryUseCase.execute({ name, description });
  
    return response.status(201).send();
  }
}

export { CreateCategoryController };