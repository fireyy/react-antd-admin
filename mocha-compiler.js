function noop() {
  return null;
}

require.extensions['.less'] = noop;
require.extensions['.png'] = noop;
// ..etc
