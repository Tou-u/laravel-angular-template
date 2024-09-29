import {
  HttpInterceptorFn,
  HttpXsrfTokenExtractor,
} from '@angular/common/http';
import { inject } from '@angular/core';

export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenEx = inject(HttpXsrfTokenExtractor);
  const csrfTokenName = 'X-XSRF-TOKEN';
  const csrfToken = tokenEx.getToken();

  if (csrfToken && !req.headers.has(csrfTokenName)) {
    req = req.clone({
      headers: req.headers.set(csrfTokenName, csrfToken),
    });

    req = req.clone({
      headers: req.headers.set('Referer', window.location.href),
    });
  }

  return next(req);
};
