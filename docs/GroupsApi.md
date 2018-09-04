# CbrainApi.GroupsApi

All URIs are relative to *http://localhost:3001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupsGet**](GroupsApi.md#groupsGet) | **GET** /groups | Get a list of the Groups (projects) available to the current user.
[**groupsIdDelete**](GroupsApi.md#groupsIdDelete) | **DELETE** /groups/{id} | Deletes a Group (project).
[**groupsIdGet**](GroupsApi.md#groupsIdGet) | **GET** /groups/{id} | Get information on a Group (project).
[**groupsIdPut**](GroupsApi.md#groupsIdPut) | **PUT** /groups/{id} | Update the properties of a Group (project).
[**groupsPost**](GroupsApi.md#groupsPost) | **POST** /groups | Creates a new Group.
[**groupsSwitchPost**](GroupsApi.md#groupsSwitchPost) | **POST** /groups/switch | Switches the active group.


<a name="groupsGet"></a>
# **groupsGet**
> [Group] groupsGet()

Get a list of the Groups (projects) available to the current user.

This method returns a list of all of the groups that the current user has access to. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.GroupsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Group]**](Group.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

<a name="groupsIdDelete"></a>
# **groupsIdDelete**
> groupsIdDelete(id, authenticityToken)

Deletes a Group (project).

This method allows the removal of Groups (projects) that are no longer necessary. Groups that have Userfiles associated with them may not be deleted. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.GroupsApi();

var id = 56; // Number | ID of the Group to delete.

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.groupsIdDelete(id, authenticityToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the Group to delete. | 
 **authenticityToken** | **String**| The token returned by /session/new | 

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="groupsIdGet"></a>
# **groupsIdGet**
> Group groupsIdGet(id)

Get information on a Group (project).

This method returns information on a single Group (project), specified by the ID parameter. Information returned includes the list of Users who are members of the group, the ID of the Site the Group is part of, and whether or not the group is visible to Regular Users. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.GroupsApi();

var id = 56; // Number | ID of the Group to get information on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupsIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the Group to get information on. | 

### Return type

[**Group**](Group.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

<a name="groupsIdPut"></a>
# **groupsIdPut**
> groupsIdPut(id, opts)

Update the properties of a Group (project).

This method allows the properties of a Group (project) to be updated. This includes the User membership, the ID of the site the Group belongs to, and the visibility status of the group to Regular Users. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.GroupsApi();

var id = 56; // Number | ID of the Group to be updated.

var opts = { 
  'groupName': "NewGroupName", // String | The new name of the Group.
  'groupDescription': "This project will group all of the files for a large neuroscience study to figure out how the brain works once and for all.", // String | The description of the new Group.
  'groupSiteId': 56, // Number | The ID of the site associated with the Group.
  'groupInvisible': false, // Boolean | Specifies whether to make the group invisible or not. Invisible groups exist solely to control access to resources.
  'groupUserIds': [[1]] // [Number] | An array of IDs of Users that will be members of the new Group.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.groupsIdPut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the Group to be updated. | 
 **groupName** | **String**| The new name of the Group. | [optional] [default to NewGroupName]
 **groupDescription** | **String**| The description of the new Group. | [optional] [default to This project will group all of the files for a large neuroscience study to figure out how the brain works once and for all.]
 **groupSiteId** | **Number**| The ID of the site associated with the Group. | [optional] 
 **groupInvisible** | **Boolean**| Specifies whether to make the group invisible or not. Invisible groups exist solely to control access to resources. | [optional] [default to false]
 **groupUserIds** | [**[Number]**](Number.md)| An array of IDs of Users that will be members of the new Group. | [optional] [default to [1]]

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="groupsPost"></a>
# **groupsPost**
> groupsPost(groupName, groupDescription, authenticityToken, opts)

Creates a new Group.

This method creates a new Group, which allows users to organize their files and tasks. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.GroupsApi();

var groupName = "NewGroupName"; // String | The name of the new Group.

var groupDescription = "This new Group represents a new, exciting, possibly neuroscience-related Project."; // String | The description of the new Group.

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new

var opts = { 
  'groupSiteId': 56, // Number | The ID of the site associated with the Group.
  'groupInvisible': false, // Boolean | Specifies whether to make the group invisible or not. Invisible groups exist solely to control access to resources.
  'groupUserIds': [[1]] // [Number] | An array of IDs of Users that will be members of the new Group.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.groupsPost(groupName, groupDescription, authenticityToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupName** | **String**| The name of the new Group. | [default to NewGroupName]
 **groupDescription** | **String**| The description of the new Group. | [default to This new Group represents a new, exciting, possibly neuroscience-related Project.]
 **authenticityToken** | **String**| The token returned by /session/new | 
 **groupSiteId** | **Number**| The ID of the site associated with the Group. | [optional] 
 **groupInvisible** | **Boolean**| Specifies whether to make the group invisible or not. Invisible groups exist solely to control access to resources. | [optional] [default to false]
 **groupUserIds** | [**[Number]**](Number.md)| An array of IDs of Users that will be members of the new Group. | [optional] [default to [1]]

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="groupsSwitchPost"></a>
# **groupsSwitchPost**
> groupsSwitchPost(id, authenticityToken)

Switches the active group.

This method switches the active Group to a new one. This is useful if the analysis that the user is performing is for different projects, and involves separate Userfiles and Tasks. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.GroupsApi();

var id = 1; // Number | ID number of the Group to switch to

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.groupsSwitchPost(id, authenticityToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID number of the Group to switch to | [default to 1]
 **authenticityToken** | **String**| The token returned by /session/new | 

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

