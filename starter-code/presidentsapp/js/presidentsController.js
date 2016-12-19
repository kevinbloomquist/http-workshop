angular.module('ThePresidentsApp', [])
  .controller('PresidentsController', PresidentsController);


PresidentsController.$inject = ['$http'];

function PresidentsController($http){
  var self = this;
  self.all = [];
  self.addPresident = addPresident;
  self.newPresident = {};
  self.getPresidents = getPresidents;
  self.deletePresident = deletePresident;
  

  function getPresidents(){
    $http
    .get('http://localhost:3000/presidents')
    .then(function(response){
      self.all = response.data.presidents;
    });
  }
  // this.addPresident = addPresident;
  // this.newPresident = {};
  getPresidents();

  function addPresident(){
    $http
      .post('http://localhost:3000/presidents',self.newPresident)
      .then(function(response){
        console.log(response.data);
       getPresidents();
});
      self.newPresident = {};
}
    function deletePresident(president) {
      $http
      .delete("http://locathost:3000/prsidents/" + president_id)
      .then(function(response) {
        var index = self.all.indexOf(president);
        self.all.splice(index,1);
      });

    
    }
  
}
