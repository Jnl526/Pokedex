$(document).ready(function(){
	$('.carousel').carousel();
	$('.dropdown-trigger').dropdown();
  });



//Trainer constructor takes a hash full of poke-data
	class pokeTrainer{
	constructor(pokemon){
		this.pokemon = [];

	}
	addPokemon(a){
		this.pokemon.push(a);
	}
}

//Pokemon constructor containing full poke data
class pokeData {
	constructor(id, name, image, hp, attack, defense, abilities,types){
		this.id = id;
		this.name = name;
		this.image = image;
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this.abilities = abilities;
		this.types = types;
	}
	 
}

let newTrainer = new pokeTrainer();
 console.log(newTrainer);

let pokeDex = function(myTrainer)  {
	for ( let i = 0; i < myTrainer.pokemon.length; i++) {
	          let pokeMon = myTrainer.pokemon[i],
				  name = pokeMon.name,
				  pokeeImg = $("<div class='image'><a href='pgid228.html'><img src='" + pokeMon.image + "'></a></div>"),
					pokeeCard = $("<div class='card'></div>");
					pokeeId = $("<div class='card-content'><p>" + "#" + pokeMon.id + "</p><h5>" + name + "</h5></div>");
					pokeeIcons = $("<ul class='p-icons'><li><i class='far fa-heart'></i></li><li><i class='swap'></i></li><li><i class='collection'></i></li></ul>");
					// pokeeType = $("<div class='types'><h6>" + pokeMon.types + "</h6></div>");
					// pokeeAbility = $("<div class='abilities'><h6>" + pokeMon.abilities + "</h6></div>");
					// pokeeHp = $("<div class='hp'><h6>" + pokeMon.hp + "</h6></div>");
					// pokeeAttack = $("<div class='attack'><h6>" + pokeMon.attack + "</h6></div>");
					// pokeeDefense = $("<div class='defense'><h6>" + pokeMon.defense + "</h6></div>");

		$('#pokemon_grid .col').append(pokeeCard);
		$(pokeeCard).append(pokeeImg).append(pokeeId).append(pokeeIcons);

          	  console.log(pokeeId);
	 }
	 
	 
}



//Individual pokemon constructor containing full poke data

let getHoundour = function(){
	return $.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/228/ ",
	method: 'GET',
	dataType: 'JSON',
	success: function(data){
		// console.log(data);
		let id = data.id,
			name = data.name,
			image = "images/houndour2.png",
			defense = data.stats[3].base_stat,
			attack = data.stats[4].base_stat,
			hp = data.stats[5].base_stat,
			abilities = [],
			types = [];
		// console.log(id, pokemonName, defense, attack, hp);
		for ( let i = 0;  i < data.abilities.length; i++) {
			 abilities.push(data.abilities[i].ability.name);
				// console.log( abilities);
		}   
		for ( let i = 0;  i < data.types.length; i++) {
			 types.push( data.types[i].type.name);
			// console.log(type);
		}  
		$('#228 span.hp').append(hp);
		let houndour = new pokeData(id, name,image, hp,attack, defense, abilities,types);  
		
		newTrainer.addPokemon(houndour);
		
		 // console.log(houndour);

},
        error: function(error){
          console.log(error);
        }

})
};

let getMightyena = function(){
return $.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/262/ ",
	method: 'GET',
	dataType: 'JSON',
	success: function(data){
		// console.log(data);
		let id = data.id,
			name = data.name,
			image = "images/mightyena2.png",
			defense = data.stats[3].base_stat,
			attack = data.stats[4].base_stat,
			hp = data.stats[5].base_stat,
			abilities = [],
			types = [];
		// console.log(id, pokemonName, defense, attack, hp);
		for ( let i = 0;  i < data.abilities.length; i++) {
			 abilities.push(data.abilities[i].ability.name);
				// console.log( abilities);
		}   
		for ( let i = 0;  i < data.types.length; i++) {
			let type = data.types[i].type.name;
			// console.log(type);
		}  
		let arcanine = new pokeData(id, name, image, hp,attack, defense, abilities, types);  
		newTrainer.addPokemon(arcanine);
},
        error: function(error){
          console.log(error);
        }

})
};

let getArcanine = function(){
return $.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/59/ ",
	method: 'GET',
	dataType: 'JSON',
	success: function(data){
		// console.log(data);
		let id = data.id,
			name = data.name,
			image = "images/arcanine1.png",
			defense = data.stats[3].base_stat,
			attack = data.stats[4].base_stat,
			hp = data.stats[5].base_stat,
			abilities = [],
			types = [];
		// console.log(id, pokemonName, defense, attack, hp);
		for ( let i = 0;  i < data.abilities.length; i++) {
			 abilities.push(data.abilities[i].ability.name);
				// console.log( abilities);
		}   
		for ( let i = 0;  i < data.types.length; i++) {
			let type = data.types[i].type.name;
			// console.log(type);
		}  
		let mightyena = new pokeData(id, name, image, hp,attack, defense, abilities, types);  
		newTrainer.addPokemon(mightyena);
},
        error: function(error){
          console.log(error);
        }

})
};

// getHoundour();
// getArcanine();
// getMightyena();





if(!localStorage.getItem("myPokemonArray")){
	$.when(getHoundour(), getArcanine(), getMightyena()).done(function( result ) {
		console.log('IM DONE');
		localStorage.setItem("myPokemonArray", JSON.stringify(newTrainer.pokemon));
		pokeDex(newTrainer);
	});
} else {
	newTrainer.pokemon = JSON.parse(localStorage.getItem("myPokemonArray"));
	pokeDex(newTrainer);
}
// let pokeObj = $('<div class="id"></div>').append($('<p></p>').text(newTrainer.pokemon.id)) ;
// console.log(pokeObj);

// 	$('#pokemon_grid').append(pokeObj);



//My Pokemon:
//Houndour #228
//Arcanine #262
//Mightyena #59

//Perm Stats:
//Name
//Id
//Type
//Abilities