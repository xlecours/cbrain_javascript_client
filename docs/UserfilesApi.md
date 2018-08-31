# CbrainApi.UserfilesApi

All URIs are relative to *http://localhost:3001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userfilesChangeProviderPost**](UserfilesApi.md#userfilesChangeProviderPost) | **POST** /userfiles/change_provider | Moves the Userfiles from their current Data Provider to a new one.
[**userfilesCompressPost**](UserfilesApi.md#userfilesCompressPost) | **POST** /userfiles/compress | Compresses many Userfiles each into their own GZIP archive.
[**userfilesDeleteFilesPost**](UserfilesApi.md#userfilesDeleteFilesPost) | **POST** /userfiles/delete_files | Delete several files that have been registered as Userfiles
[**userfilesDownloadPost**](UserfilesApi.md#userfilesDownloadPost) | **POST** /userfiles/download | Download several files
[**userfilesGet**](UserfilesApi.md#userfilesGet) | **GET** /userfiles | List of the Userfiles accessible to the current user.
[**userfilesIdContentGet**](UserfilesApi.md#userfilesIdContentGet) | **GET** /userfiles/{id}/content | Get the content of a Userfile
[**userfilesIdDelete**](UserfilesApi.md#userfilesIdDelete) | **DELETE** /userfiles/{id} | Delete a Userfile.
[**userfilesIdGet**](UserfilesApi.md#userfilesIdGet) | **GET** /userfiles/{id} | Get information on a Userfile.
[**userfilesIdPut**](UserfilesApi.md#userfilesIdPut) | **PUT** /userfiles/{id} | Update information on a Userfile.
[**userfilesPost**](UserfilesApi.md#userfilesPost) | **POST** /userfiles | Creates a new Userfile.
[**userfilesSyncMultiplePost**](UserfilesApi.md#userfilesSyncMultiplePost) | **POST** /userfiles/sync_multiple | Syncs Userfiles to their Data Providers&#39; cache.
[**userfilesUncompressPost**](UserfilesApi.md#userfilesUncompressPost) | **POST** /userfiles/uncompress | Uncompresses many Userfiles.


<a name="userfilesChangeProviderPost"></a>
# **userfilesChangeProviderPost**
> userfilesChangeProviderPost(fileIds, dataProviderIdForMvCp, authenticityToken, opts)

Moves the Userfiles from their current Data Provider to a new one.

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.UserfilesApi();

var fileIds = [3.4]; // [Number] | The ID's of the Userfiles to be moved or copied to a new Data Provider.

var dataProviderIdForMvCp = 56; // Number | The ID of the Data Provider to move or copy the files to.

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new

var opts = { 
  'crushDestination': false // Boolean | Specifies whether to overwrite files on the destination Data Provider if a file already exists there with the same name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userfilesChangeProviderPost(fileIds, dataProviderIdForMvCp, authenticityToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileIds** | [**[Number]**](Number.md)| The ID&#39;s of the Userfiles to be moved or copied to a new Data Provider. | 
 **dataProviderIdForMvCp** | **Number**| The ID of the Data Provider to move or copy the files to. | 
 **authenticityToken** | **String**| The token returned by /session/new | 
 **crushDestination** | **Boolean**| Specifies whether to overwrite files on the destination Data Provider if a file already exists there with the same name | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="userfilesCompressPost"></a>
# **userfilesCompressPost**
> userfilesCompressPost(fileIds, authenticityToken)

Compresses many Userfiles each into their own GZIP archive.

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.UserfilesApi();

var fileIds = [3.4]; // [Number] | A list of Userfile ID numbers to compress.

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userfilesCompressPost(fileIds, authenticityToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileIds** | [**[Number]**](Number.md)| A list of Userfile ID numbers to compress. | 
 **authenticityToken** | **String**| The token returned by /session/new | 

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

<a name="userfilesDeleteFilesPost"></a>
# **userfilesDeleteFilesPost**
> userfilesDeleteFilesPost(fileIds, authenticityToken)

Delete several files that have been registered as Userfiles

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.UserfilesApi();

var fileIds = [3.4]; // [Number] | The ID numbers of the files to be deleted

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userfilesDeleteFilesPost(fileIds, authenticityToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileIds** | [**[Number]**](Number.md)| The ID numbers of the files to be deleted | 
 **authenticityToken** | **String**| The token returned by /session/new | 

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="userfilesDownloadPost"></a>
# **userfilesDownloadPost**
> userfilesDownloadPost(authenticityToken, opts)

Download several files

This method compresses several Userfiles in .gz format and prepares them to be downloaded.

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.UserfilesApi();

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new

var opts = { 
  'fileIds': [3.4], // [Number] | The ID numbers of the files to be downloaded. If more than one file is specified, they will be zipped into a gzip archive.
  'specifiedFilename': "specifiedFilename_example" // String | The name of the archive file that the Userfiles will be compressed into for downloading.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userfilesDownloadPost(authenticityToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticityToken** | **String**| The token returned by /session/new | 
 **fileIds** | [**[Number]**](Number.md)| The ID numbers of the files to be downloaded. If more than one file is specified, they will be zipped into a gzip archive. | [optional] 
 **specifiedFilename** | **String**| The name of the archive file that the Userfiles will be compressed into for downloading. | [optional] 

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="userfilesGet"></a>
# **userfilesGet**
> [Userfile] userfilesGet()

List of the Userfiles accessible to the current user.

This method returns a list of Userfiles that are available to the current User. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.UserfilesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userfilesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Userfile]**](Userfile.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

<a name="userfilesIdContentGet"></a>
# **userfilesIdContentGet**
> userfilesIdContentGet(id)

Get the content of a Userfile

This method allows you to download Userfiles.

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.UserfilesApi();

var id = 56; // Number | The ID number of the Userfile to download


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userfilesIdContentGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID number of the Userfile to download | 

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

<a name="userfilesIdDelete"></a>
# **userfilesIdDelete**
> userfilesIdDelete(id, authenticityToken)

Delete a Userfile.

This method allows a User to delete a Userfile. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.UserfilesApi();

var id = 56; // Number | The ID number of the Userfile to delete.

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userfilesIdDelete(id, authenticityToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID number of the Userfile to delete. | 
 **authenticityToken** | **String**| The token returned by /session/new | 

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="userfilesIdGet"></a>
# **userfilesIdGet**
> Userfile userfilesIdGet(id)

Get information on a Userfile.

This method returns information about a single Userfile, specified by its ID. Information returned includes the ID of the owner, the Group (project) it is a part of, a description, information about where the acutal copy of the file currently is, and what the status is of any synhronization operations that may have been requested. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.UserfilesApi();

var id = 56; // Number | The ID number of the Userfile to get information on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userfilesIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID number of the Userfile to get information on. | 

### Return type

[**Userfile**](Userfile.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

<a name="userfilesIdPut"></a>
# **userfilesIdPut**
> userfilesIdPut(id, authenticityToken, opts)

Update information on a Userfile.

This method allows a User to update information on a userfile. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.UserfilesApi();

var id = 789; // Number | The ID number of the Userfile to update.

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new

var opts = { 
  'userfileType': "SingleFile", // String | Type of file that the Userfile is registered in CBRAIN as. This parameter affects what kinds of Tools can be used on the file.
  'userfileUserId': 1, // Number | ID of the user who owns the file.
  'userfileGroupId': 1, // Number | ID of the group that will have access to the Userfile.
  'tagIds': [3.4], // [Number] | ID numbers of the tags that describe the Userfile.
  'userfileGroupWritable': true, // Boolean | Specifies whether other members of the group that owns the file can modify the Userfile.
  'userfileHidden': false, // Boolean | Specifies whether the Userfile is hidden or visible in the normal file listing.
  'userfileImmutable': false, // Boolean | Specifies whether the Userfile can be modified.
  'userfileDescription': "userfileDescription_example" // String | Description of the Userfile.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userfilesIdPut(id, authenticityToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID number of the Userfile to update. | 
 **authenticityToken** | **String**| The token returned by /session/new | 
 **userfileType** | **String**| Type of file that the Userfile is registered in CBRAIN as. This parameter affects what kinds of Tools can be used on the file. | [optional] [default to SingleFile]
 **userfileUserId** | **Number**| ID of the user who owns the file. | [optional] [default to 1]
 **userfileGroupId** | **Number**| ID of the group that will have access to the Userfile. | [optional] [default to 1]
 **tagIds** | [**[Number]**](Number.md)| ID numbers of the tags that describe the Userfile. | [optional] 
 **userfileGroupWritable** | **Boolean**| Specifies whether other members of the group that owns the file can modify the Userfile. | [optional] 
 **userfileHidden** | **Boolean**| Specifies whether the Userfile is hidden or visible in the normal file listing. | [optional] [default to false]
 **userfileImmutable** | **Boolean**| Specifies whether the Userfile can be modified. | [optional] [default to false]
 **userfileDescription** | **String**| Description of the Userfile. | [optional] 

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="userfilesPost"></a>
# **userfilesPost**
> userfilesPost(uploadFile, dataProviderId, userfileGroupId, fileType, authenticityToken, opts)

Creates a new Userfile.

This method creates a new Userfile in CBRAIN, with the current user as the owner of the file. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.UserfilesApi();

var uploadFile = "/path/to/file.txt"; // File | File to upload to CBRAIN

var dataProviderId = 1; // Number | The ID of the Data Provider to upload the file to.

var userfileGroupId = 1; // Number | ID of the group that will have access to the Userfile

var fileType = "SingleFile"; // String | The type of the file

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new

var opts = { 
  'archive': "archive_example", // String | Archive
  'upExMode': "upExMode_example" // String | usually \"collection\"
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userfilesPost(uploadFile, dataProviderId, userfileGroupId, fileType, authenticityToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadFile** | **File**| File to upload to CBRAIN | 
 **dataProviderId** | **Number**| The ID of the Data Provider to upload the file to. | [default to 1]
 **userfileGroupId** | **Number**| ID of the group that will have access to the Userfile | [default to 1]
 **fileType** | **String**| The type of the file | [default to SingleFile]
 **authenticityToken** | **String**| The token returned by /session/new | 
 **archive** | **String**| Archive | [optional] 
 **upExMode** | **String**| usually \&quot;collection\&quot; | [optional] 

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

<a name="userfilesSyncMultiplePost"></a>
# **userfilesSyncMultiplePost**
> userfilesSyncMultiplePost(fileIds, authenticityToken, opts)

Syncs Userfiles to their Data Providers&#39; cache.

Synchronizing files to their Data Providers&#39; caches allows you to download, visualize and do processing on them that is not available if not synced. CBRAIN operations will sync files automatically, and this is only necessary if a file is changed on its host Data Provdier by an external process.

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.UserfilesApi();

var fileIds = [3.4]; // [Number] | A list of Userfile ID numbers to synchronize.

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new

var opts = { 
  'operation': "sync_local" // String | Either \"sync_local\" or \"all_newer\". \"sync_local\" will ensure that the version of the file in the CBRAIN portal cache is the most recent version that exists on the Data Provider. \"all_newer\" will ensure that ALL caches known to CBRAIN are updated with the most recent version of the files in the host Data Provider.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userfilesSyncMultiplePost(fileIds, authenticityToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileIds** | [**[Number]**](Number.md)| A list of Userfile ID numbers to synchronize. | 
 **authenticityToken** | **String**| The token returned by /session/new | 
 **operation** | **String**| Either \&quot;sync_local\&quot; or \&quot;all_newer\&quot;. \&quot;sync_local\&quot; will ensure that the version of the file in the CBRAIN portal cache is the most recent version that exists on the Data Provider. \&quot;all_newer\&quot; will ensure that ALL caches known to CBRAIN are updated with the most recent version of the files in the host Data Provider. | [optional] [default to sync_local]

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="userfilesUncompressPost"></a>
# **userfilesUncompressPost**
> userfilesUncompressPost(fileIds, authenticityToken)

Uncompresses many Userfiles.

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.UserfilesApi();

var fileIds = [3.4]; // [Number] | A list of Userfile ID numbers to uncompress.

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userfilesUncompressPost(fileIds, authenticityToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileIds** | [**[Number]**](Number.md)| A list of Userfile ID numbers to uncompress. | 
 **authenticityToken** | **String**| The token returned by /session/new | 

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

