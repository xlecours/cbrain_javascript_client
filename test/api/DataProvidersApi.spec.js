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
    instance = new CbrainApi.DataProvidersApi();
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

  describe('DataProvidersApi', function() {
    describe('dataProvidersGet', function() {
      it('should call dataProvidersGet successfully', function(done) {
        //uncomment below and update the code to test dataProvidersGet
        //instance.dataProvidersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataProvidersIdBrowseGet', function() {
      it('should call dataProvidersIdBrowseGet successfully', function(done) {
        //uncomment below and update the code to test dataProvidersIdBrowseGet
        //instance.dataProvidersIdBrowseGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataProvidersIdDeletePost', function() {
      it('should call dataProvidersIdDeletePost successfully', function(done) {
        //uncomment below and update the code to test dataProvidersIdDeletePost
        //instance.dataProvidersIdDeletePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataProvidersIdGet', function() {
      it('should call dataProvidersIdGet successfully', function(done) {
        //uncomment below and update the code to test dataProvidersIdGet
        //instance.dataProvidersIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataProvidersIdIsAliveGet', function() {
      it('should call dataProvidersIdIsAliveGet successfully', function(done) {
        //uncomment below and update the code to test dataProvidersIdIsAliveGet
        //instance.dataProvidersIdIsAliveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataProvidersIdRegisterPost', function() {
      it('should call dataProvidersIdRegisterPost successfully', function(done) {
        //uncomment below and update the code to test dataProvidersIdRegisterPost
        //instance.dataProvidersIdRegisterPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataProvidersIdUnregisterPost', function() {
      it('should call dataProvidersIdUnregisterPost successfully', function(done) {
        //uncomment below and update the code to test dataProvidersIdUnregisterPost
        //instance.dataProvidersIdUnregisterPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
