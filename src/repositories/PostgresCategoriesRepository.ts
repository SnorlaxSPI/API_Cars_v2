import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";


class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    //throw new Error("Method not implemented.");
    return null as any;
  }
  list(): Category[] {
    //throw new Error("Method not implemented.");
    return null as any;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }
  
}

export { PostgresCategoriesRepository };