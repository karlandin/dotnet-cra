# dotnet core project templates
My repository with dotnet core templates. 

## React/Typescript
* React and Typescript ([create-react-app](https://github.com/facebook/create-react-app))
* REST api with Swagger ([Swashbuckle.AspNetCore](https://github.com/domaindrivendev/Swashbuckle.AspNetCore))
* Generated Typescript client (autorest)
* Bootstrap (reactstrap)

`dotnet new ka-react-typescript -n MyProjectName`

## Webapi
* Webapi
* Swagger ([Swashbuckle.AspNetCore](https://github.com/domaindrivendev/Swashbuckle.AspNetCore))
* Datastore  ([JsonFlatFileDataStore](https://github.com/ttu/json-flatfile-datastore)) 

 `dotnet new ka-webapi -n MyProjectName`
 
# Usage
* Download latest template nuget package from https://github.com/karlandin/dotnet-templates/tree/master/dist
* Install template `dotnet new -i KarlAndin.ProjectTemplates.0.0.4.nupkg`
* Create project `dotnet new ka-<template-short-name> -n MyProjectName` 
* Run `dotnet run -p MyProjectName/MyProjectName.csproj`
