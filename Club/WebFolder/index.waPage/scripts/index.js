
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
	var documentEvent = {};	// @document
	var button2 = {};	// @button
	var button1 = {};	// @button
	var menuItem5 = {};	// @menuItem
	var login1 = {};	// @login
// @endregion// @endlock



// eventHandlers// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		// Add your code here
			// Add your code here
		waf.sources.clubClass.addNewElement();
        waf.sources.clubClass.serverRefresh({
            onSuccess: function(event) {
               $$('richText6').setvalue("added new club");
            }
        });  
        $$('menuItem5').show();
        $$('tabView1').selectTab(5); 
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Add your code here
		//$$('menuItem1').hide();
		varSession = 0;
		sources.varSession.sync();
		$$('button1').show();
		$$('button2').show();
		$$('button4').hide();
		$$('menuItem1').hide();
		$$('menuItem2').hide();
		$$('menuItem3').hide();
		$$('menuItem4').hide();
		$$('menuItem5').hide();
		$$('menuItem6').hide();
		//$$('tabView1').selectTab(5);
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		// Add your code here
		//alert ('here');
		var insertClubUsersRet = waf.sources.userClass.insertClubUsers(waf.sources.clubClass.clubEmail);
		//alert('here');
		waf.sources.clubClass.tenentId = insertClubUsersRet.tenentId;
		waf.sources.clubClass.save({
			onSuccess : function(event) {
				//$$('richText6').setValue('User information saved.');
				$$('button1').hide();
				$$('button2').hide();
				$$('button4').show();
				$$('richText6').setValue("Please login with this password " + insertClubUsersRet.adminPassword + '.');
				$$('menuItem1').show();
		        $$('menuItem2').show();
		        $$('menuItem3').show();
		        $$('menuItem4').show();
		        $$('menuItem5').show();
		        $$('menuItem6').show();
				$$('tabView1').selectTab(1);
				varSession = waf.sources.clubClass.tenentId;
				sources.varSession.sync();
				//if (waf.sources.userClass.getPosition() == -1) {
				//	waf.sources.userClass.addEntity(waf.sources.userClass.getCurrentElement());
			},
			onError : function(error) {
                $$('richText6').setValue(error.error[0].message);
            }
		});
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		// Add your code here
		varSession = '0';
		sources.varSession.sync();
		waf.sources.clubClass.removeCurrent();
		waf.sources.clubClass.query('tenent id = :1', varSession);
		$$('tabView1').selectTab(1);
		$$('richText6').setValue("Please login or register.");
	};// @lock

	menuItem5.click = function menuItem5_click (event)// @startlock
	{// @endlock
	

		// create a new guest row
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		// Add your code here
		varSession = '0';
		sources.varSession.sync();
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		// Add your code here
		// Add your code here
		//alert('login ');
		// get group from session 
		
		//var curSession = waf.sources.UserClass.getCurrentSession();
		var curSession = sources.userClass.getCurrentSession();
		varSession = curSession.storage.tenentId;
		sources.varSession.sync();
		//$$('imageButton1').setURL('http://localhost:8082/index.waPage/index.html/?tenentId=' + varSession);
		//$$('imageButton2').setURL('http://localhost:8083/index.waPage/index.html/?tenentId=' + varSession);
		//$$('imageButton2').enable();
		//alert(waf.widgets.imageButton1.URL);
		//alert(varSession);
		// save data in sessionstorage
		//WAF.sources.setSessionInfo('tenentID', curSession.storage.tenentId);
		
		var inGroup = curSession.belongsTo('Admin');
		if (inGroup) {
			//$$('menuItem3').show();
		    //$$('menuItem5').show();
		}; 
		inGroup = curSession.belongsTo('SubAdmin');
		if (inGroup) {
			//$$('menuItem2').hide();
			//$$('menuItem3').hide();
		    //$$('menuItem5').hide();
		}; 
		inGroup = curSession.belongsTo('User');
		if (inGroup) {
			//$$('menuItem2').hide();
			//$$('menuItem3').hide();
		    //$$('menuItem5').hide();
		}; 
		inGroup = curSession.belongsTo('Guest');
		if (inGroup) {
			//$$('menuItem2').show();
			//$$('menuItem3').hide();
		    //$$('menuItem5').hide();
		}; 

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("menuItem5", "click", menuItem5.click, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
// @endregion
};// @endlock
