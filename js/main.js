'use strict';

//menu-toggle
const menuIcon=document.querySelector('.menu-icon');
const navigation=document.querySelector('.nav');
const closeMenu=document.querySelector('.menu-close');

closeMenu.addEventListener('click',()=>{
	navigation.classList.remove('active');
});

menuIcon.addEventListener('click',()=>{
	navigation.classList.add('active');
	
});
