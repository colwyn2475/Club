
// functions

//Random password generator- by javascriptkit.com
//Visit JavaScript Kit (http://javascriptkit.com) for script
//Credit must stay intact for use
function generatePass(parmLength)
{
	var keylist = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    var temp = '';
    var i = 0;
    
    for (i=0;i<parmLength;i++)
    {
        temp+=keylist.charAt(Math.floor(Math.random()*keylist.length));
    }
    return temp;
}

model.UserClass.methods.getCurrentSession = function() {
	// Add your code here;
	return currentSession();
};
model.UserClass.methods.getCurrentSession.scope = "public";

model.UserClass.methods.setSessionInfo = function(name, nameValue) {
	// Add your code here;
	sessionStorage.lock();
	sessionStorage[name] = nameValue;
	sessionStorage.unlock();
	
};
model.UserClass.methods.setSessionInfo.scope = "public";



model.UserClass.methods.getSessionInfo = function(name) {
	// Add your code here;
    return sessionStorage[name];
};
model.UserClass.methods.getSessionInfo.scope = "public";

//model.UserClass.entityMethods.insertClubUsers = function(name) {
model.UserClass.methods.insertClubUsers = function(name) {
	// Add your code here;
	//alert('uc here');
	//console.log('insertClubUsers');
	var insertClubUsersRet = {tenentId:"", adminPassword:"",guestPassword:""}; 
	var tenentId = generateUUID();
	var user1 = ds.UserClass.createEntity(); 
    user1.userName = name;     // assign '' to the 'name' attribute
    insertClubUsersRet.adminPassword = generatePass(8);
    user1.userPassword = insertClubUsersRet.adminPassword;     // assign 
    user1.userRole = 'SubAdmin';
    user1.tenentId = tenentId;
    user1.save();     // remember to save the entity
    
    user1 = ds.UserClass.createEntity();
    user1.userName = "Guest";     // assign 'Dupont' to the 'name' attribute
    insertClubUsersRet.guestPassword = generatePass(8);
    user1.userPassword = insertClubUsersRet.guestPassword;     // assign 'John' to the 'firstname' attribute
    user1.userRole = 'Guest';
    user1.tenentId = tenentId;
    user1.save();     // remember to save the entity
    insertClubUsersRet.tenentId = tenentId;
    return insertClubUsersRet; 
};
model.UserClass.methods.insertClubUsers.scope = "public";

