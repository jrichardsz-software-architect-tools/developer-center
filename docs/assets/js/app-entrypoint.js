function AppEntryPoint(){

  var menuController = window._context["MenuController"];
  var sidebarController = window._context["SidebarController"];
  var searchController = window._context["SearchController"];
  var apiClient = window._context["ApiClient"];
  var brandingController = window._context["BrandingController"];

  this.init = async() => {
    await apiClient.init()
    brandingController.init();
    menuController.init();
    sidebarController.init();
    sidebarController.openSidebar();
    searchController.init();
  }

  $( document ).ready(()=> {
      this.init();
  });

}

if(typeof window._context === 'undefined'){
   window._context = {};
}
window._context["AppEntryPoint"] = new AppEntryPoint();
