import {
  HttpInterceptorFn,
  HttpXsrfTokenExtractor,
} from '@angular/common/http';
import { inject } from '@angular/core';

export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method === 'GET' || req.method === 'HEAD') {
    return next(req);
  }

  const tokenEx = inject(HttpXsrfTokenExtractor);
  const csrfTokenName = 'X-XSRF-TOKEN';
  const csrfToken = tokenEx.getToken();

  if (csrfToken && !req.headers.has(csrfTokenName)) {
    req = req.clone({
      headers: req.headers.set(csrfTokenName, csrfToken),
    });
  }

  return next(req);
};
