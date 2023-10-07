import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, TodoModule, UserModule, AuthModule],
  controllers: [],
  providers: [
    // {
    //   provide: 'APP_GUARD',
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class AppModule {}
