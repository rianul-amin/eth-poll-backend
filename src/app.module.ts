import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PollsModule } from './modules/polls/polls.module';

@Module({
  imports: [AuthModule, PollsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
