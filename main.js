// let x = Math.floor(Math.random()*10);
// let y = Math.floor(Math.random()*10);
// let z = Math.floor(Math.random()*10);
let score =1000;
	
	


	function updateScore(){
			let x = Math.floor(Math.random()*10);
			let y = Math.floor(Math.random()*10);
			let z = Math.floor(Math.random()*10);
			document.getElementById("number1").innerHTML = x + " ";
				document.getElementById("number2").innerHTML = y + " ";
				document.getElementById("number3").innerHTML = z + " ";
				let message =document.getElementById("message");
				let finish = document.getElementById("gameOver");
				let btn = document.getElementById("button");

		if ((x%2==0) && (y%2==0) &&(z%2==0))  {
			score = score + 200;
			message.innerHTML = "You got lucky this time,you got 300 INR as all the numbers are even. "
			document.getElementById("finalScore").innerHTML = " You have "+score  + " INR";
			// console.log("even");
			// console.log(x);
			// console.log(y);
			// console.log(z);

			}else if ((x%2!=0) && (y%2!=0) && (z%2!=0)) {
				score = score + 200;
				message.innerHTML = "You got lucky this time,you got 300 INR as all the numbers are odd. ";
				document.getElementById("finalScore").innerHTML = " You have "+score  + " INR";
					
					

				}else if ((y == x+1) && (z == x+2)) {
						score = score + 700;
						message.innerHTML = "You got lucky this time,you got 800 INR as all the numbers are in sequence.. " ;
						document.getElementById("finalScore").innerHTML = " You have "+score  + " INR";
					

					}else if ((x==y) && (y==z) &&(x==z)) {
						score = score + 900;
						message.innerHTML = "You got lucky this time,you got 1000 INR as all the numbers are same. ";
						document.getElementById("finalScore").innerHTML = " You have "+score  + " INR";
						

					}else if (score == 0) {
						score =0;
						document.getElementById("finalScore").innerHTML = " You have "+score  + " INR";
							
						finish.innerHTML = " Game Over";

					}else{
						score = score - 100;
						message.innerHTML = "You were not lucky this time. ";
						document.getElementById("finalScore").innerHTML = " You have "+score  + " INR";
							if ( score==0 ) {
								
								finish.innerHTML = " Game Over";
								btn.style.display = 'none';
							}
						
					}
				}
			