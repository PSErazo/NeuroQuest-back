import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registro(): string;
    register(registerDto: RegisterDto): Promise<import("../user/schemas/user.schema").User>;
    login(login: LoginDto): Promise<{
        name: string;
        email: string;
        token: string;
    }>;
}
