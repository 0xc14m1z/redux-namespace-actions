const namespace = (namespaceName) => (actionName) =>
  validate(namespaceName, actionName) && join(namespaceName, actionName)
  
export default namespace
module.exports = namespace


const join = (...args) =>
  args.join("/")

const validate = (namespaceName, actionName) => {
  if ( !isString(namespaceName) ) {
    throw new TypeError("The namespace name must be a string.")
  } else if ( !isString(actionName) ) {
    throw new TypeError("The action name must be a string.")
  }
  return true
}

const isString = s =>
  typeof s === "string"