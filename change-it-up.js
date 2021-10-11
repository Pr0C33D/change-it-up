// https://www.codewars.com/kata/58039f8efca342e4f0000023

function changer(str) { 
    return str.toLowerCase()          
              .replace(/[a-z]/g, s => s === 'z' ? 'a' : String.fromCharCode(s.charCodeAt(0)+1))
              .replace(/[auioe]/g, s => s.toUpperCase());          
  }
  
  changer('Catz30')