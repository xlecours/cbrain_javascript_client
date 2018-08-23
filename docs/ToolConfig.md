# CbrainApi.ToolConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique numerical ID for the ToolConfig. | [optional] 
**versionName** | **String** | the version name of the tool&#39;s configuration | [optional] 
**description** | **String** | a description of the configuration | [optional] 
**toolId** | **Number** | the ID of the tool associated with this configuration | [optional] 
**bourreauId** | **Number** | The ID of the execution server where this tool configuration is available.  | [optional] 
**envArray** | **[String]** | additional environment variables | [optional] 
**scriptPrologue** | **String** | A piece of bash script configured by the administrator to run before the tool is launched.  | [optional] 
**groupId** | **Number** | the ID of the project controlling access to this ToolConfig | [optional] 
**ncpus** | **Number** | A hint at how many CPUs the CBRAIN task will allocate to run this tool configuration  | [optional] 


