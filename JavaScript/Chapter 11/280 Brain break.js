function wrapLogging(f) {
  return function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
    try {
      return f(a1, a2, a3, a4, a5, a6, a7, a8, a9);
    } catch (error) {
      logToSnapErrors(error);
    }
  }
}