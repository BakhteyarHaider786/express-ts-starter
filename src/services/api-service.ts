import { Service } from "typedi";

@Service()
class ApiService {
  // eslint-disable-next-line class-methods-use-this
  sayHello(from: string, to = "World") {
    return { message: `Hello ${to}! I am ${from}` };
  }
}

export default ApiService;
