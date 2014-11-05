// login 
// in solution
function clubLogin(userName, password) //advanced login listener
{
	var theUser = directory.internalStore.User({name: userName});
	if (theUser != null) //user exists in the directory 
	{
	    varSession = '0';
		return false; // allow directory authentication
	}
	else	// use data from the project for login
	{      //default will be to reject login
		var result = {error: 1024, errorMessage: 'Invalid Login'};
		var securityDs = solution.getApplicationByName("Club").ds;
		//alert ('login');
		var theUser = securityDs.UserClass({userName:userName});
		//console.log(userName);
		//alert(theUser.userPassword);
        if (theUser != null) // if a user was found
		{
			// see of the stored hash value is correct
			//if (theUser.userName === "TestUser")
			//if (theUser.userPassword === directory.computeHA1(userName, password)) 
			if (theUser.userPassword === password) 
			{
				var theGroups = [];
				var putIntoStorage = {myID: theUser.userId,
				                      tenentId: theUser.tenentId};
				
				if (theUser.userRole === "Admin" )
				{
				  theGroups = ['Admin']; 
				}
				if (theUser.userRole === "SubAdmin") 
				{
				  theGroups = ['SubAdmin']; 
				}
				if (theUser.UserRole === "User") 
				{
				  theGroups = ['User']; 
				}

				result = {
					ID: theUser.userId, 
					name: theUser.userName, 
					fullName: theUser.userName, 
					belongsTo: theGroups,
					storage: putIntoStorage};
			}
		}
		return result; // either an error or a custom user object
	}
}


