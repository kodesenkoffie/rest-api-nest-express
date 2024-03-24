import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up-dto';

describe('AuthController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    authController = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
    expect(authController).toBeInstanceOf(AuthController);
  });

  it('signup method should return data', async () => {
    const signUpData: SignUpDto = {
      email: 'alex@mail.com',
      password: '12346',
    };

    const mockSignup = await authController.signup(signUpData);

    expect(mockSignup).toBeDefined();
    expect(mockSignup).toBe('Signup Route');
  });
});
