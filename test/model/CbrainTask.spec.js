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
    instance = new CbrainApi.CbrainTask();
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

  describe('CbrainTask', function() {
    it('should create an instance of CbrainTask', function() {
      // uncomment below and update the code to test CbrainTask
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be.a(CbrainApi.CbrainTask);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property batchId (base name: "batch_id")', function() {
      // uncomment below and update the code to test the property batchId
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property clusterJobid (base name: "cluster_jobid")', function() {
      // uncomment below and update the code to test the property clusterJobid
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property clusterWorkdir (base name: "cluster_workdir")', function() {
      // uncomment below and update the code to test the property clusterWorkdir
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property params (base name: "params")', function() {
      // uncomment below and update the code to test the property params
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property bourreauId (base name: "bourreau_id")', function() {
      // uncomment below and update the code to test the property bourreauId
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property prerequisites (base name: "prerequisites")', function() {
      // uncomment below and update the code to test the property prerequisites
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property shareWdTid (base name: "share_wd_tid")', function() {
      // uncomment below and update the code to test the property shareWdTid
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property runNumber (base name: "run_number")', function() {
      // uncomment below and update the code to test the property runNumber
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property groupId (base name: "group_id")', function() {
      // uncomment below and update the code to test the property groupId
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property toolConfigId (base name: "tool_config_id")', function() {
      // uncomment below and update the code to test the property toolConfigId
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property rank (base name: "rank")', function() {
      // uncomment below and update the code to test the property rank
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property resultsDataProviderId (base name: "results_data_provider_id")', function() {
      // uncomment below and update the code to test the property resultsDataProviderId
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property workdirArchived (base name: "workdir_archived")', function() {
      // uncomment below and update the code to test the property workdirArchived
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

    it('should have the property workdirArchiveUserfileId (base name: "workdir_archive_userfile_id")', function() {
      // uncomment below and update the code to test the property workdirArchiveUserfileId
      //var instane = new CbrainApi.CbrainTask();
      //expect(instance).to.be();
    });

  });

}));
