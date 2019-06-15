# Usage
* Download template nuget package from repo 
* Install project template `dotnet new -i KarlAndin.ProjectTemplates.ReactTypescript.0.0.1.nupkg`
* Use template `dotnet new ka-react-typescript -n MyWebProject`

# Steps to recreate template
* dotnet new react -n React.Web -o React.Web
* rm -rf React.Web/ClientApp
* Replace "ClientApp" with "../client-app"  React.Web.csproj and Startup.cs

# Nuget pack
* nuget pack dotnet-project-template/KarlAndin.ProjectTemplates.ReactTypescript.nuspec