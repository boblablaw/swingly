(function funWithObjects() {
  var output_div, dinosaurs, favorite_dinosaurs;

  output_div = document.getElementById('output');
  
  dinosaurs = ['Tyrannosaurus rex', 'Stegosaurus', 'Drednaughtasaurus', 
  	'Brontosaurus (Apatosaurus is a terrible name)', 'Triceratops', 'Velociraptor'];
  
	favorites = {};
	favorites.typeOfList = 'favorites';

  function FavoriteDinosaurList() {
    this['Reeeshard'] = dinosaurs[4];
    this['Kindler'] = dinosaurs[0];
    this['JeRAD'] = dinosaurs[3];
    this['JSON'] = dinosaurs[2];
    this['T4yl0r'] = dinosaurs[4];
    this['Tyler; Mark'] = dinosaurs[5];
  };

  FavoriteDinosaurList.prototype = favorites;
  var my_list = new FavoriteDinosaurList();

  function printDinosaurs() {
  	dinosaurs[10] = 'Allosaurus';
  	dinosaurs.awesomeness = 'maximus';

  	for (var index in dinosaurs) {
  		output_div.innerText += '\n' + index + ': ' + dinosaurs[index];
		}
		output_div.innerText += '\n';
  };

  function printFavorites() {
  	for (var prop in my_list) {
  		if (my_list.hasOwnProperty(prop)) {
	  		output_div.innerText += '\n' + prop + ': ' + my_list[prop];	
  		}
  	}
  };

  printDinosaurs();

  printFavorites();
})();