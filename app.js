var unite=["","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"];

var dizaine =[" ","dix","vingt","trente","quarente","cinquante","soixante","soixiante-dix","quatre-vingt","quatre-vingt-dix"]

var message,lettre,ar;

var d=document.getElementById("choix1").checked;
var e=document.getElementById("choix2").checked;

function unite_fonc(arg){
	lettre = unite[arg];
	return lettre;
}
function dizaine_fonc(arg){
	 let quotient,reste;
	 quotient=Math.floor(arg/10);
	 reste= arg % 10;
	 if (arg<=20) {
	 	unite_fonc(arg);
	 }else{
	 	if (reste==0) {
	 	lettre=dizaine[quotient];
	 	}
		 else if (quotient==1 && reste!=0) {
		 	lettre=unite[10+reste];
		 }
		 else if (quotient==7 || quotient==9) {
		 	lettre=dizaine[quotient-1]+ "-" + unite[10+reste];
		 }
		 else{
		 	lettre= dizaine[quotient] + "-" + unite[reste];
		 }
		}
	 return lettre;
}
function centaine_fonc(arg){
	let quotient,reste;
	if (arg<=99) {
		dizaine_fonc(arg);
	}else{
		quotient=Math.floor(arg / 100);
		reste= arg % 100;
		if(reste==0){
			if (quotient==1) {
				lettre="cent";
			}
			else if (quotient!=0) {
			lettre=unite[quotient]+ "-cent ";
			}
	}
		else if (reste!=0) {
			if (quotient==1) {
				lettre="cent " + dizaine_fonc(reste);
			}else{
				lettre= unite[quotient]+ "-cent-"+ dizaine_fonc(reste);
			}
		}
	}
	
	return lettre;
}
function millieme_fonc(arg){
	let quotient,reste;
	if (arg<=999) {
		centaine_fonc(arg);
	}else{
		quotient=Math.floor(arg / 1000);
		reste= arg % 1000;
		if(reste==0){
			if (quotient==1) {
				lettre="mille"
			}
			else if (quotient!=0) {
				lettre=unite[quotient]+ "-mille ";
			}
		}
		else if (reste!=0) {
			if (quotient==1) {
				lettre="mille " + centaine_fonc(reste);
			}else{
				if (reste>99) {
					lettre= millieme_fonc(quotient)+ "-mille-"+ centaine_fonc(reste);
				}else if (reste<=99) {
				lettre= millieme_fonc(quotient)+ "-mille-"+ dizaine_fonc(reste);
			}
		}	
	}
	
	}
	return lettre;
}

function millieme_2(arg){
	let quotient,reste;
	quotient=Math.floor(arg / 1000);
	reste= arg % 1000;
	if(arg<99999){
		millieme_fonc(arg);
	}else
	{
		if(reste==0){
			lettre= centaine_fonc(quotient)+ "-mille";
		}
		else if (reste!=0) 
		{
			if (reste>99)
			{
				lettre= centaine_fonc(quotient) + "-mille-"+ centaine_fonc(reste);
			}else if (reste<=99) {
				lettre=lettre= centaine_fonc(quotient)+ "-mille-"+ dizaine_fonc(reste);
			}
		}
	}
	
	return lettre;

}
function million_fonc(arg){
	let quotient,reste,r;
	quotient=Math.floor(arg / 1000000);
	r=quotient.toString().length;
	reste= arg % 1000000;
	if(reste==0){
		if (r==1) {
			lettre=unite_fonc(quotient)+" million ";
		}else if (r==2) {
			lettre=dizaine_fonc(quotient) +" million ";
		}else if (r==3) {
			lettre=centaine_fonc(quotient) + " million ";
		}
	}else if (reste!=0) {
		if (r==1) {
			lettre=unite_fonc(quotient)+" million " + millieme_2(reste);
		}else if(r==2)
		{
			lettre=dizaine_fonc(quotient) +" million " +millieme_2(reste);
		}else if (r==3) {
			lettre=centaine_fonc(quotient) +" million " +millieme_2(reste);
		}

	}
	return lettre;
}
function milliard(arg){
	let quotient,reste,r;
	if (arg<=999999999) {
		million_fonc(arg);
	}else{
		quotient=Math.floor(arg / 1000000000);
		r=quotient.toString().length;
		reste= arg % 1000000000;
		if(reste==0){
			if (r==1) {
				lettre=unite_fonc(quotient)+" milliard ";
			}else if (r==2) {
				lettre=dizaine_fonc(quotient) +" milliard ";
			}else if (r==3) {
				lettre=centaine_fonc(quotient) + " milliard ";
			}
		}else if (reste!=0) {
			if (r==1) {
				lettre=unite_fonc(quotient)+" milliard " + million_fonc(reste);
			}else if(r==2)
			{
				lettre=dizaine_fonc(quotient) +" milliard " + million_fonc(reste);
			}else if (r==3) {
				lettre=centaine_fonc(quotient) +" milliard " + million_fonc(reste);
			}

		}
	}
	return lettre;

}

function main(arg){

	let n;
	n= arg.toString().length;

	if (n==1) {
		unite_fonc(arg);
	}
	else if (n==2) {
		dizaine_fonc(arg);
	}
	else if (n==3) {
		centaine_fonc(arg);
	}
	else if (n==3 || n==4 || n==5) {
		millieme_fonc(arg);
	}
	else if (n==6) {
		millieme_2(arg);
	}
	else if (n==7 || n==8 || n==9) {
		million_fonc(arg);
	}else if(n>9){
		milliard(arg);
	}
	message.innerHTML +=lettre;
}

function conversion(arg){
	if (d==true) {
	convert1(arg);
	}else if (e==true) {
	convert2(arg);
	}
	return ar;
}


function convert1(arg){
	ar=arg*3800;
	return ar;
}

function convert2(arg)
{
	ar=arg*4538;
	return ar;
}

function valideform(){

	message =document.getElementById("para_errer");
	arg=document.getElementById("montant").value;
	innerHTML="";
	try{
		if(arg == "") throw "empty";
		if (isNaN(arg)) throw "N'est pas un nombre";
		arg=Number(arg);

		if (arg==0) throw "Pas d'argent?";
		if (arg<0) throw "argent negative,impossible";
	}

	catch(err){
		alert(err);
	}
	finally{
		document.getElementById("montant").value="";
		conversion(arg)
		main(ar);
		}
}






