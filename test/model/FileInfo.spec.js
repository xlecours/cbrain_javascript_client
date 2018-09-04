/**
 * CBRAIN API
 * REST API for interacting with the CBRAIN Platform
 *
 * OpenAPI spec version: 5.0.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CbrainApi);
  }
}(this, function(expect, CbrainApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CbrainApi.FileInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FileInfo', function() {
    it('should create an instance of FileInfo', function() {
      // uncomment below and update the code to test FileInfo
      //var instane = new CbrainApi.FileInfo();
      //expect(instance).to.be.a(CbrainApi.FileInfo);
    });

    it('should have the property userfileId (base name: "userfile_id")', function() {
      // uncomment below and update the code to test the property userfileId
      //var instane = new CbrainApi.FileInfo();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CbrainApi.FileInfo();
      //expect(instance).to.be();
    });

    it('should have the property group (base name: "group")', function() {
      // uncomment below and update the code to test the property group
      //var instane = new CbrainApi.FileInfo();
      //expect(instance).to.be();
    });

    it('should have the property gid (base name: "gid")', function() {
      // uncomment below and update the code to test the property gid
      //var instane = new CbrainApi.FileInfo();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new CbrainApi.FileInfo();
      //expect(instance).to.be();
    });

    it('should have the property uid (base name: "uid")', function() {
      // uncomment below and update the code to test the property uid
      //var instane = new CbrainApi.FileInfo();
      //expect(instance).to.be();
    });

    it('should have the property permissions (base name: "permissions")', function() {
      // uncomment below and update the code to test the property permissions
      //var instane = new CbrainApi.FileInfo();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instane = new CbrainApi.FileInfo();
      //expect(instance).to.be();
    });

    it('should have the property stateOk (base name: "state_ok")', function() {
      // uncomment below and update the code to test the property stateOk
      //var instane = new CbrainApi.FileInfo();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new CbrainApi.FileInfo();
      //expect(instance).to.be();
    });

    it('should have the property symbolicType (base name: "symbolic_type")', function() {
      // uncomment below and update the code to test the property symbolicType
      //var instane = new CbrainApi.FileInfo();
      //expect(instance).to.be();
    });

    it('should have the property atime (base name: "atime")', function() {
      // uncomment below and update the code to test the property atime
      //var instane = new CbrainApi.FileInfo();
      //expect(instance).to.be();
    });

    it('should have the property mtime (base name: "mtime")', function() {
      // uncomment below and update the code to test the property mtime
      //var instane = new CbrainApi.FileInfo();
      //expect(instance).to.be();
    });

  });

}));
