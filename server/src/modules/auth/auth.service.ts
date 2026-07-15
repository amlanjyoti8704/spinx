import { User } from "../../models/user.model.js";
import { SignupInput } from "./auth.validation.js";
import { hashPassword } from "../../utils/password.js";
import { AppError } from "../../errors/AppError.js";


export class AuthService {

  async signup(data: SignupInput) {

    const existingUser = await User.findOne({
      email: data.email,
    });

    if (existingUser) {
      throw new AppError(
        "Email already exists",
        409
      )
    }

    const hashedPassword = await hashPassword(
      data.password
    );

    const user = await User.create({
      ...data,
      password: hashedPassword,
    });

    const safeUser = user.toObject() as any;

    delete safeUser.password;

    return safeUser;
  }

  async login(email: string, password: string){}

  async getCurrentUser(userId: string){}

  logout(){}

}