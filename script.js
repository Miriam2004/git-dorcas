//Exercise-2:Conditions avec switch case
var jour=parseInt(prompt("Entrez un jour entre 1 et 7"));
switch(jour){
	case 1:
	alert("lundi");
	break;
	case 2:
	alert("Mardi");
	break;
	case 3:
	alert("Mercredi");
	break;
	case 4:
	alert("Jeudi");
	break;
	default:
	alert("jour enexistant");
} */

//TD: test option
//a. If--else
var optionEt=prompt("Entrez votre option: GL,SI ou LIAGE");
switch(optionEt){
	case"GL":
	alert("Genie logiciel");
	break;
	case"SI"
	alert("Systeme Informatique");
	break;
	case"LIAGE"
	alert("license en Informatique Appliquer a la Gestion des Entreprises")
	break;
	default:
	alert("promotion inexistante")
}
//Exercise-5:DOM
function exeage(){
	var age=document.getElementById("age").value;
	if(age==""){
		document.getElementById("responseday").value="Monday";
		break;
		case "Mardi":
		document.getElementById("responseday").value="tuesday";
		break;
	}
}
