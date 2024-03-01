export const validation = (value, type) => {
  let errorArr = []

  switch (type) {
    case 'email': {
      let emailErrorObj = {
        type,
        errText: ''
      }
      if (!value.include('@')) {
        emailErrorObj.text = "Email не має символу '@'."
        errorArr.push(emailErrorObj)
      }
      if (!value.include('.')) {
        emailErrorObj.text = "Email не має символу '.'."
        errorArr.push(emailErrorObj)
      }
    }
  }
  return errorArr
}
