const namespace = namespaceName => actionName =>
  `${namespaceName}/${actionName}`

export default namespace
module.exports = namespace