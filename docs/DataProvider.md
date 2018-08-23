# CbrainApi.DataProvider

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for the Data Provider. | [optional] 
**name** | **String** | Name of the Data Provider. | [optional] 
**type** | **String** | Type of Data Provider, which usually indicates whether it is a local Data Provider, has a flat internal directory structure, or is meant for file uploading to CBRAIN. | [optional] 
**userId** | **Number** | Creator and owner of the Data Provider. | [optional] 
**groupId** | **Number** | ID of the group that has access to this Data Provider. | [optional] 
**online** | **String** | Boolean variable that indicates whether the system hosting the Data Provider is accessible. | [optional] 
**readOnly** | **String** | Boolean variable that indicates whether the Data Provider can be written to. | [optional] 
**description** | **String** | Description of the Data Provider. | [optional] 
**timeOfDeath** | **String** | The time, in the time zone of the system that hosts the Data Provider, that the Data Provider last successfully transmitted. | [optional] 
**notSyncable** | **String** | Boolean variable that indicates that the data residing on the Data Provider is not available to be transferred to an execution server&#39;s cache. | [optional] 
**timeZone** | **String** | Time zone of the system that hosts the Data Provider. | [optional] 


