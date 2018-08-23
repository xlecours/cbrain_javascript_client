/**
 * CBRAIN API
 * Interface to control CBRAIN operations
 *
 * OpenAPI spec version: 4.5.1
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
    instance = new CbrainApi.UserfilesApi();
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

  describe('UserfilesApi', function() {
    describe('userfilesChangeProviderPost', function() {
      it('should call userfilesChangeProviderPost successfully', function(done) {
        //uncomment below and update the code to test userfilesChangeProviderPost
        //instance.userfilesChangeProviderPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userfilesCompressPost', function() {
      it('should call userfilesCompressPost successfully', function(done) {
        //uncomment below and update the code to test userfilesCompressPost
        //instance.userfilesCompressPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userfilesDeleteFilesPost', function() {
      it('should call userfilesDeleteFilesPost successfully', function(done) {
        //uncomment below and update the code to test userfilesDeleteFilesPost
        //instance.userfilesDeleteFilesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userfilesDownloadPost', function() {
      it('should call userfilesDownloadPost successfully', function(done) {
        //uncomment below and update the code to test userfilesDownloadPost
        //instance.userfilesDownloadPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userfilesGet', function() {
      it('should call userfilesGet successfully', function(done) {
        //uncomment below and update the code to test userfilesGet
        //instance.userfilesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userfilesIdContentGet', function() {
      it('should call userfilesIdContentGet successfully', function(done) {
        //uncomment below and update the code to test userfilesIdContentGet
        //instance.userfilesIdContentGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userfilesIdDelete', function() {
      it('should call userfilesIdDelete successfully', function(done) {
        //uncomment below and update the code to test userfilesIdDelete
        //instance.userfilesIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userfilesIdGet', function() {
      it('should call userfilesIdGet successfully', function(done) {
        //uncomment below and update the code to test userfilesIdGet
        //instance.userfilesIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userfilesIdPut', function() {
      it('should call userfilesIdPut successfully', function(done) {
        //uncomment below and update the code to test userfilesIdPut
        //instance.userfilesIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userfilesPost', function() {
      it('should call userfilesPost successfully', function(done) {
        //uncomment below and update the code to test userfilesPost
        //instance.userfilesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userfilesSyncMultiplePost', function() {
      it('should call userfilesSyncMultiplePost successfully', function(done) {
        //uncomment below and update the code to test userfilesSyncMultiplePost
        //instance.userfilesSyncMultiplePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userfilesUncompressPost', function() {
      it('should call userfilesUncompressPost successfully', function(done) {
        //uncomment below and update the code to test userfilesUncompressPost
        //instance.userfilesUncompressPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));