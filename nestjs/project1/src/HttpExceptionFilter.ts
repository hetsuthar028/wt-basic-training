import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const argsHost = host.switchToHttp();
        const httpResponse = argsHost.getResponse();
        const httpRequest = argsHost.getRequest();
        const status = exception.getStatus();
        
        

    }
}