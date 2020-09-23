// JavaScript Document


function taxes() { 
	var wealth = document.forms["my_tax_form"]["wealth"].value;
	var income = document.forms["my_tax_form"]["income"].value;
	var the_tax = (0.35*income)+(0.25*wealth);
	document.forms["my_tax_form"]["tax"].value = the_tax;
}
