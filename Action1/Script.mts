' assumes the admPresales page in GitHub is open

' first way - go through all of the repositories individually
nRepositories = Browser("Micro Focus ADM Presales").Page("Micro Focus ADM Presales").WebElement("nRepositories"). _
GetROProperty("innerhtml")

nRepositories = cInt(nRepositories) ' strip off the ' " ' characters

Set repositoryLink = description.Create()
repositoryLink("Class Name").value = "Link"
repositoryLink("outerhtml").value = "<a class=""d-inline-block"" href=""/admpresales/.*"

For curRepository = 0 To (nRepositories-1)
	repositoryLink("index").value = curRepository
	
	print Browser("Micro Focus ADM Presales").Page("Micro Focus ADM Presales"). _
	Link(repositoryLink).GetROProperty("innertext")
next


' second way - use child objects
Set childRepositoryLink = description.Create()
childRepositoryLink("html tag").value = "A"
childRepositoryLink("outerhtml").value = "<a class=""d-inline-block"" href=""/admpresales/.*"

set childrenReps = Browser("Micro Focus ADM Presales").Page("Micro Focus ADM Presales"). _
ChildObjects(childRepositoryLink)	

nRepositories = childrenReps.count

For curRepository = 0 to nRepositories-1	
	print childrenReps(curRepository).GetROProperty("innertext")
Next
