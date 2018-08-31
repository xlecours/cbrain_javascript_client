# CbrainApi.DataProvidersApi

All URIs are relative to *http://localhost:3001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dataProvidersGet**](DataProvidersApi.md#dataProvidersGet) | **GET** /data_providers | Get a list of the Data Providers available to the current user.
[**dataProvidersIdBrowseGet**](DataProvidersApi.md#dataProvidersIdBrowseGet) | **GET** /data_providers/{id}/browse | List the files on a Data Provider.
[**dataProvidersIdDeletePost**](DataProvidersApi.md#dataProvidersIdDeletePost) | **POST** /data_providers/{id}/delete | Deletes unregistered files from a CBRAIN Data provider.
[**dataProvidersIdGet**](DataProvidersApi.md#dataProvidersIdGet) | **GET** /data_providers/{id} | Get information on a particular Data Provider.
[**dataProvidersIdIsAliveGet**](DataProvidersApi.md#dataProvidersIdIsAliveGet) | **GET** /data_providers/{id}/is_alive | Pings a Data Provider to check if it&#39;s running.
[**dataProvidersIdRegisterPost**](DataProvidersApi.md#dataProvidersIdRegisterPost) | **POST** /data_providers/{id}/register | Registers a file as a Userfile in CBRAIN.
[**dataProvidersIdUnregisterPost**](DataProvidersApi.md#dataProvidersIdUnregisterPost) | **POST** /data_providers/{id}/unregister | Unregisters files as Userfile in CBRAIN.


<a name="dataProvidersGet"></a>
# **dataProvidersGet**
> [DataProvider] dataProvidersGet()

Get a list of the Data Providers available to the current user.

This method returns a list of Data Provider objects that represent servers with disk space accessible for storing Userfiles. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.DataProvidersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataProvidersGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DataProvider]**](DataProvider.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

<a name="dataProvidersIdBrowseGet"></a>
# **dataProvidersIdBrowseGet**
> [FileInfo] dataProvidersIdBrowseGet(id)

List the files on a Data Provider.

This method allows the inspection of what files are present on a Data Provider specified by the ID parameter. Files that are not yet registered as Userfiles are visible using this method, as well as regularly accessible Userfiles. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.DataProvidersApi();

var id = 56; // Number | The ID of the Data Provider to browse.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataProvidersIdBrowseGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Data Provider to browse. | 

### Return type

[**[FileInfo]**](FileInfo.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

<a name="dataProvidersIdDeletePost"></a>
# **dataProvidersIdDeletePost**
> dataProvidersIdDeletePost(id, basenames, authenticityToken, opts)

Deletes unregistered files from a CBRAIN Data provider.

This method allows files that have not been registered from CBRAIN to be deleted. This may be necessary if files were uploaded in error, or if they were unregistered but not immediately deleted. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.DataProvidersApi();

var id = 56; // Number | The ID of the Data Provider to delete files from.

var basenames = ["[file1, file2]"]; // [String] | An array containing the filenames to delete.

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new

var opts = { 
  'asUserId': 56 // Number | The ID of the user to delete files as.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dataProvidersIdDeletePost(id, basenames, authenticityToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Data Provider to delete files from. | 
 **basenames** | [**[String]**](String.md)| An array containing the filenames to delete. | [default to [file1, file2]]
 **authenticityToken** | **String**| The token returned by /session/new | 
 **asUserId** | **Number**| The ID of the user to delete files as. | [optional] 

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

<a name="dataProvidersIdGet"></a>
# **dataProvidersIdGet**
> DataProvider dataProvidersIdGet(id)

Get information on a particular Data Provider.

This method returns a single Data Provider specified by the ID parameter 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.DataProvidersApi();

var id = 56; // Number | ID of the Data Provider to get information on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataProvidersIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the Data Provider to get information on. | 

### Return type

[**DataProvider**](DataProvider.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

<a name="dataProvidersIdIsAliveGet"></a>
# **dataProvidersIdIsAliveGet**
> &#39;String&#39; dataProvidersIdIsAliveGet(id)

Pings a Data Provider to check if it&#39;s running.

This method allows the querying of a Data Provider specified by the ID parameter to see if it&#39;s running or not. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.DataProvidersApi();

var id = 789; // Number | The ID of the Data Provider to query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataProvidersIdIsAliveGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Data Provider to query. | 

### Return type

**&#39;String&#39;**

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

<a name="dataProvidersIdRegisterPost"></a>
# **dataProvidersIdRegisterPost**
> InlineResponse2002 dataProvidersIdRegisterPost(id, basenames, filetypes, authenticityToken)

Registers a file as a Userfile in CBRAIN.

This method allows new files to be added to CBRAIN. The files must first be transfered to the Data Provider via SFTP. For more information on SFTP file transfers, consult the CBRAIN Wiki documentation. Once files are present on the Data Provider, this method registers them in CBRAIN by specifying the file type. You can also specify to copy/move the files to another Data Provider after file registration. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.DataProvidersApi();

var id = 56; // Number | The ID of the Data Provider to register files on.

var basenames = ["basenames_example"]; // [String] | An array containing the filenames to register.

var filetypes = ["filetypes_example"]; // [String] | An array containing the filetypes associated with the files to register

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataProvidersIdRegisterPost(id, basenames, filetypes, authenticityToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Data Provider to register files on. | 
 **basenames** | [**[String]**](String.md)| An array containing the filenames to register. | 
 **filetypes** | [**[String]**](String.md)| An array containing the filetypes associated with the files to register | 
 **authenticityToken** | **String**| The token returned by /session/new | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="dataProvidersIdUnregisterPost"></a>
# **dataProvidersIdUnregisterPost**
> dataProvidersIdUnregisterPost(id, basenames, authenticityToken, opts)

Unregisters files as Userfile in CBRAIN.

This method allows files to be unregistered from CBRAIN. This will not delete the files, but removes them from the CBRAIN database, so Tools may no longer be run on them. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.DataProvidersApi();

var id = 56; // Number | The ID of the Data Provider to unregister files from.

var basenames = ["[file1, file2]"]; // [String] | An array containing the filenames to unregister.

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new

var opts = { 
  'asUserId': 56, // Number | The ID of the user to unregister files as.
  '_delete': true // Boolean | Specifies to delete the files once they are unregistered.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dataProvidersIdUnregisterPost(id, basenames, authenticityToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the Data Provider to unregister files from. | 
 **basenames** | [**[String]**](String.md)| An array containing the filenames to unregister. | [default to [file1, file2]]
 **authenticityToken** | **String**| The token returned by /session/new | 
 **asUserId** | **Number**| The ID of the user to unregister files as. | [optional] 
 **_delete** | **Boolean**| Specifies to delete the files once they are unregistered. | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

