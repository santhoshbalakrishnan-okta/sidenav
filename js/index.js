$(function(){

	var ApplicationRouter = Backbone.Router.extend({

		//map url routes to contained methods
		routes: {
			"": "dashboard",
			"dashboard": "dashboard",
			"directory": "directory",
			"applications": "applications",
			"security": "security",
			"reports": "reports",
			"settings": "settings"
		},

		deselectPills: function(){
			//deselect all navigation pills
			$('.sidenav li').removeClass('active');
		},

		selectPill: function(pill){
            this.deselectPills();
            
			//select passed navigation pill by selector
			$(pill).addClass('active');
		},

		hidePages: function(){
			//hide all pages with 'pages' class
			$('div.pages').hide();
		},

		showPage: function(page){
            $('iframe.router-outlet').attr('src', page);
		},

		dashboard: function() {
			this.showPage('http://rain-admin.okta1.com:1802/admin/dashboard');
			this.selectPill('.sidenav .dashboard');
		},

		directory: function() {
			this.showPage('http://rain-admin.okta1.com:1802/admin/users');
			this.selectPill('.sidenav .directory');
		},

		applications: function() {
			this.showPage('http://rain-admin.okta1.com:1802/admin/apps/active');
			this.selectPill('.sidenav .applications');
        },
        
		security: function() {
			this.showPage('http://rain-admin.okta1.com:1802/admin/access/general');
			this.selectPill('.sidenav .security');
		},

		reports: function() {
			this.showPage('http://rain-admin.okta1.com:1802/reports');
			this.selectPill('.sidenav .reports');
		},

		settings: function() {
			this.showPage('http://rain-admin.okta1.com:1802/admin/settings/account');
			this.selectPill('.sidenav .settings');
		}

	});

	var ApplicationView = Backbone.View.extend({

		el: $('body'),

		events: {
			'click .sidenav .dashboard': 'displayDashboard',
			'click .sidenav .directory': 'displayDirectory',
			'click .sidenav .applications': 'displayApplications',
			'click .sidenav .security': 'displaySecurity',
			'click .sidenav .reports': 'displayReports',
			'click .sidenav .settings': 'displaySettings'
		},

		initialize: function(){
			this.router = new ApplicationRouter();
			Backbone.history.start();
		},

		displayDashboard: function(){
			this.router.navigate("dashboard", true);
        },
        
        displayDirectory: function(){
			this.router.navigate("directory", true);
        },
        
        displayApplications: function(){
			this.router.navigate("applications", true);
        },
        
        displaySecurity: function(){
			this.router.navigate("security", true);
        },
        
        displayReports: function(){
			this.router.navigate("reports", true);
        },
        
        displaySettings: function(){
			this.router.navigate("settings", true);
		},

	});

	//load application
	new ApplicationView();

});
