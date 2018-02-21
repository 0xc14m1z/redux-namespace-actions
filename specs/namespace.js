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

  describe("should throw an error if the namespace isn't a string", () => {

    it("when it's null", () => {
      const namespaceName = null
      const actionName = "ACTION"
      const test = () => namespace(namespaceName)(actionName)
      expect(test).to.throw(TypeError)
    })

    it("when it's undefined", () => {
      const namespaceName = undefined
      const actionName = "ACTION"
      const test = () => namespace(namespaceName)(actionName)
      expect(test).to.throw(TypeError)
    })

    it("when it isn't passed as argument", () => {
      const actionName = "ACTION"
      const test = () => namespace()(actionName)
      expect(test).to.throw(TypeError)
    })

    it("when it's an array", () => {
      const namespaceName = []
      const actionName = "ACTION"
      const test = () => namespace(namespaceName)(actionName)
      expect(test).to.throw(TypeError)
    })

    it("when it's an object", () => {
      const namespaceName = {}
      const actionName = "ACTION"
      const test = () => namespace(namespaceName)(actionName)
      expect(test).to.throw(TypeError)
    })

  })

  describe("should throw an error if the action isn't a string", () => {

    it("when it's null", () => {
      const namespaceName = "NAMESPACE"
      const actionName = null
      const test = () => namespace(namespaceName)(actionName)
      expect(test).to.throw(TypeError)
    })

    it("when it's undefined", () => {
      const namespaceName = "NAMESPACE"
      const actionName = undefined
      const test = () => namespace(namespaceName)(actionName)
      expect(test).to.throw(TypeError)
    })

    it("when it isn't passed as argument", () => {
      const namespaceName = "NAMESPACE"
      const test = () => namespace(namespaceName)()
      expect(test).to.throw(TypeError)
    })

    it("when it's an array", () => {
      const namespaceName = "NAMESPACE"
      const actionName = []
      const test = () => namespace(namespaceName)(actionName)
      expect(test).to.throw(TypeError)
    })

    it("when it's an object", () => {
      const namespaceName = "NAMESPACE"
      const actionName = {}
      const test = () => namespace(namespaceName)(actionName)
      expect(test).to.throw(TypeError)
    })

  })

})