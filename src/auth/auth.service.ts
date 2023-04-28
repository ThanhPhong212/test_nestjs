import { Injectable } from '@nestjs/common';
@Injectable({})
export class AuthService {
  register() {
    return 'Đăng ký thành công!';
  }
  login() {
    return 'Đăng nhập thành công';
  }
}
