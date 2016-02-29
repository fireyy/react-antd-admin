export let cookies = {
  set({ name, value = '', path = '/', domain = '', expires = '' }) {

      if (expires instanceof Date) {
          expires = expires.toUTCString();
      }

      document.cookie = [
          `${name}=${value}`,
          `path=${path}`,
          `domain=${domain}`,
          `expires=${expires}`
      ].join(';');
  },

  unset(name) {
      cookies.set({ name, expires: new Date(0) });
  },

  get(name) {
      var re = new RegExp(['(?:^|; )',
                           name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1'),
                           '=([^;]*)'
      ].join(''));

      var matches = document.cookie.match(re);

      return matches ? decodeURIComponent(matches[1]) : undefined;
  }
}

export function isPromise(value) {
  if (value !== null && typeof value === 'object') {
    return value.promise && typeof value.promise.then === 'function';
  }
}
