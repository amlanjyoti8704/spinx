import { User } from "../../models/user.model.js";
import { AppError } from "../../errors/AppError.js";
import { SignupInput, LoginInput } from "./auth.validation.js";
import { hashPassword, comparePassword } from "../../utils/password.js";
import { generateToken } from "../../utils/jwt.js";

export class AuthService {
  async signup(data: SignupInput) {
    const existing = await User.findOne({
      email: data.email,
    });

    if (existing) {
      throw new AppError("Email already exists", 409);
    }

    const password = await hashPassword(data.password);

    const user = await User.create({
      ...data,
      password,
    });

    const token = generateToken(user.id);

    const safeUser = user.toObject() as any;

    delete safeUser.password;

    return {
      user: safeUser,
      token,
    };
  }

  async login(data: LoginInput) {
    const user = await User.findOne({
      email: data.email,
    });

    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }

    const valid = await comparePassword(
      data.password,
      user.password
    );

    if (!valid) {
      throw new AppError("Invalid credentials", 401);
    }

    const token = generateToken(user.id);

    const safeUser = user.toObject() as any;

    delete safeUser.password;

    return {
      user: safeUser,
      token,
    };
  }

  async me(userId: string) {
    const user = await User.findById(userId).select("-password");

    if (!user) {
      throw new AppError("User not found", 404);
    }

    return user;
  }
}