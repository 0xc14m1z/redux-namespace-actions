import { expect } from "chai"

import namespace from ".."

describe("namespace", () => {

  it("should prepend add the namespace to the action name", () => {
    const namespaceName = "NAMESPACE"
    const actionName = "ACTION"
    const test = namespace(namespaceName)(actionName)
    const expected = "NAMESPACE/ACTION"
    expect(test).to.be.equal(expected)
  })

  it("should leave blank the namespace if it is null", () => {
    const namespaceName = null
    const actionName = "ACTION"
    const test = namespace(namespaceName)(actionName)
    const expected = "/ACTION"
    expect(test).to.be.equal(expected)
  })

  it("should leave blank the namespace if it is undefined", () => {
    const namespaceName = undefined
    const actionName = "ACTION"
    const test = namespace(namespaceName)(actionName)
    const expected = "/ACTION"
    expect(test).to.be.equal(expected)
  })

  it("should leave blank the action if it is null", () => {
    const namespaceName = "NAMESPACE"
    const actionName = null
    const test = namespace(namespaceName)(actionName)
    const expected = "NAMESPACE/"
    expect(test).to.be.equal(expected)
  })

  it("should leave blank the action if it is undefined", () => {
    const namespaceName = "NAMESPACE"
    const actionName = undefined
    const test = namespace(namespaceName)(actionName)
    const expected = "NAMESPACE/"
    expect(test).to.be.equal(expected)
  })

  describe("should throw an error if the namespace isn't a string", () => {

    it("when it's an array", () => {
      const namespaceName = []
      const actionName = "ACTION"
      const test = namespace(namespaceName)(actionName)
      expect(test).to.throw(TypeError)
    })

    it("when it's an object", () => {
      const namespaceName = {}
      const actionName = "ACTION"
      const test = namespace(namespaceName)(actionName)
      expect(test).to.throw(TypeError)
    })

  })

})