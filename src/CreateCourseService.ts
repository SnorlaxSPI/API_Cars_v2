

interface Course {
  name: string;
  duration: number;
  educator: string;
}

class CreateCourseServive {

  execute({ duration, educator, name }: Course) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseServive();