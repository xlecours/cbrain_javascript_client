# CbrainApi.Userfile

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID number of the file. | [optional] 
**name** | **String** | Name of the file that the Userfile represents | [optional] 
**size** | **Number** | Number of bytes used to store the file. | [optional] 
**userId** | **Number** | ID of the owner of the file. | [optional] 
**parentId** | **Number** | ID of the parent Userfile, if any exists, or null otherwise. | [optional] 
**type** | **String** | Type of the file. This is important in determining what tools can be run on the file. The most generic file types, are the Single File, which represents one file, and the File Collection, which represents a directory full of files. | [optional] 
**groupId** | **Number** | ID of the group that owns the file, which determines its visibility status. | [optional] 
**dataProviderId** | **Number** | ID of the Data Provider that is hosting the persistent copy of the file. It may exist in caches across the systems that make up CBRAIN, as copies of the file are made in order to run scientific programs on them on remote systems. | [optional] 
**groupWritable** | **String** | Boolean variable that specifies whether members of the owner group have access to modify or overwrite the file. | [optional] 
**numFiles** | **Number** | Number of files that the Userfiles represents. For Single Files, this is always 1. | [optional] 
**hidden** | **String** | Boolean variable that specifies whether this file is hidden or not in the user interface. | [optional] 
**immutable** | **String** | Boolean variable that specifies whether any user can modify the contents of the file. | [optional] 
**archived** | **String** | Boolean variable that specifies whether the file is available, uncompressed, or has been archived. | [optional] 
**description** | **String** | Description of the file. | [optional] 


