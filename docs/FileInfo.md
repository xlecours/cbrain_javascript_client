# CbrainApi.FileInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userfileId** | **Number** | id of the userfile | [optional] 
**name** | **String** | the base filename | [optional] 
**group** | **String** | string representation of gid, the group&#39;s name | [optional] 
**gid** | **Number** | numeric group id of the file | [optional] 
**owner** | **String** | string representation of uid, the owner&#39;s name | [optional] 
**uid** | **Number** | numeric uid of owner | [optional] 
**permissions** | **Number** | an int interpreted in octal, e.g. 0640 | [optional] 
**size** | **Number** | size of file in bytes | [optional] 
**stateOk** | **Boolean** | flag that tell whether or not it&#39;s OK to register/unregister | [optional] 
**message** | **String** | a message to give more information about the state_ok flag | [optional] 
**symbolicType** | **String** | one of :regular, :symlink, :directory | [optional] 
**atime** | **Number** | access time (an int, since Epoch) | [optional] 
**mtime** | **Number** | modification time (an int, since Epoch) | [optional] 


