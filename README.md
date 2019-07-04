# Dotnet project template
My repository with dotnet core templates. 

## React/Typescript
* React and Typescript (create-react-app)
* REST api with Swagger (Swashbuckle.AspNetCore)
* Generated Typescript client (autorest)
* Bootstrap (reactstrap)

## Webapi
* Webapi
* Swagger (Swashbuckle.AspNetCore)
* Datastore (JsonFlatFileDataStore) 

# Usage
* Download latest template nuget package from https://github.com/karlandin/dotnet-cra/tree/master/dist 
* Install template `dotnet new -i KarlAndin.ProjectTemplates.0.0.4.nupkg`
* Create project `dotnet new ka-react-typescript -n MyProjectName` or `dotnet new ka-webapi -n MyProjectName`
* Run `dotnet run -p MyProjectName/MyProjectName.csproj`
