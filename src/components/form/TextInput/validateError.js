export const validationError = (errors, name) => {
  if (errors) {
    if (errors.data.errors[0].param) {
      const error = errors.data.errors.find(item => item.param === name)
     return error && error.msg
    } 
  }
};
