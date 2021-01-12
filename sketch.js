function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

// function draw() {
// 	background(220);
// 	textSize(32);
// 	fill(180);
// 	text(hour(), 10, 30);
// 	fill(100);
// 	text(minute(), 10, 60);
// 	fill(0);
// 	text(second(), 10, 90);
// }


function time_color(s){

	c= 'rgb(255,51,51)'

	if (s < 5){ //red
		c = 'rgb(255,51,51)'
	}
	else if(s >=5 && s < 10){ //orange
		c= 'rgb(255,153,51)'
	}
	else if(s >=10 && s < 15){ //yellow
		c= 'rgb(255,255,51)'
	}
	else if(s >=15 && s < 20){ //green
		c= 'rgb(153,255,51)'
	}
	else if(s >=20 && s < 25){ //green 2
		c= 'rgb(51,255,51)'
	}
	else if(s >=25 && s < 30){ //green 3
		c= 'rgb(51,255,153)'
	}
	else if(s >=30 && s < 35){ //teal
		c= 'rgb(51,255,255)'
	}
	else if(s >=35 && s < 40){ //light blue
		c= 'rgb(255,153,51)'
	}
	else if(s >=40 && s < 45){ //blue
		c= 'rgb(51,51,255)'
	}
	else if(s >=45 && s < 50){ //purple
		c= 'rgb(153,51,255)'
	}
	else if(s >=50 && s < 55){ //pink
		c= 'rgb(255,51,255)'
	}
	else if(s >=55 && s < 60){ //magenta
		c= 'rgb(255,51,153)'
	}
	return c
}



function time_color_hour(h){

	c= 'rgb(255,51,51)'
	console.log("this is h")
	console.log(h)

	if (h == 0 || h == 12 ){ //red
		c = 'rgb(255,51,51)'
	}
	else if(h == 1 || h == 13){ //orange
		c= 'rgb(255,153,51)'
	}
	else if(h == 2 || h == 14){ //yellow
		c= 'rgb(255,255,51)'
	}
	else if(h == 3 || h == 15){ //green
		c= 'rgb(153,255,51)'
	}
	else if(h == 4 || h == 16){ //green 2
		console.log("are we here?")
		c= 'rgb(51,255,51)'
	}
	else if(h == 5 || h == 17){ //green 3
		c= 'rgb(51,255,153)'
	}
	else if(h == 6 || h == 18){ //teal
		c= 'rgb(51,255,255)'
	}
	else if(h == 7 || h == 19){ //light blue
		c= 'rgb(255,153,51)'
	}
	else if(h == 8 || h == 20){ //blue
		c= 'rgb(51,51,255)'
	}
	else if(h == 9 || h == 21){ //purple
		c= 'rgb(153,51,255)'
	}
	else if(h == 10 || h == 22){ //pink
		c= 'rgb(255,51,255)'
	}
	else if(h >=11 && h <= 23){ //magenta
		c= 'rgb(255,51,153)'
	}
	return c
}

function draw_pentagon(c, s){
	//Line 1

	
	if (s % 5 == 0){
		stroke(c);
	}
	else{
		stroke(10);
	}
	line(100, 50, 150, 100);
	strokeWeight(4)

	//Line 2
	if (s % 5 == 1){
		stroke(c);
	}
	else{
		stroke(10);
	}
	line(130, 150, 150, 100);
	strokeWeight(4)

	//Line 3
	if (s % 5 == 2){
		stroke(c);
	}
	else{
		stroke(10);
	}
	line(70, 150, 130, 150);
	strokeWeight(4)


	//Line 4
	if (s % 5 == 3){
		stroke(c);
	}
	else{
		stroke(10);
	}
	line(70, 150, 50, 100);
	strokeWeight(4)


	//Line 5
	if (s % 5 == 4){
		stroke(c);
	}
	else{
		stroke(10);
	}
	line(50, 100, 100, 50 );
	strokeWeight(4)
	//endShape(CLOSE);

}

function draw_pentagon_hour(c, s){
	//Line 1

	stroke(c);
	line(100, 50, 150, 100);
	strokeWeight(4);

	//Line 2
	stroke(c);
	line(130, 150, 150, 100);
	strokeWeight(4);

	//Line 3
	stroke(c);
	line(70, 150, 130, 150);
	strokeWeight(4)


	//Line 4
	stroke(c);
	line(70, 150, 50, 100);
	strokeWeight(4)


	//Line 5
	stroke(c);
	line(50, 100, 100, 50 );
	strokeWeight(4)

}


function draw() {
	background(225);

	ts = second()
	tm = minute()
	th = hour()


	
	c_s = time_color(ts) //Get the color for the second pentagon
	c_m = time_color(tm) //Get the color for the second pentagon
	c_h = time_color_hour(th) //Get the color for the second pentagon

	s_translate = createVector(300,225)
	m_translate = createVector(-50,-50)
	h_translate = createVector(-50,-50)
	r_translate = createVector(-19,0)


	s_scale = 0.5
	m_scale = 2
	h_scale = 2

	translate(s_translate)
	scale(s_scale)
	draw_pentagon(c_s, ts) //Pentagon 1

	scale(m_scale)
	translate(m_translate)
	draw_pentagon(c_m, tm) //Pentagon 2
	
	scale(h_scale)
	translate(h_translate)
	// stroke(c_h)
	// circle(100,100,50)
	draw_pentagon_hour(c_h, th) //Pentagon 3


	translate(r_translate)
	stroke(10)
	fill('rgb(255,51,51)')
	square(0, 200, 20);

	fill('rgb(255,153,51)')
	square(20, 200, 20);

	fill('rgb(255,255,51)')
	square(40, 200, 20);

	fill('rgb(153,255,51)')
	square(60, 200, 20);

	fill('rgb(51,255,51)')
	square(80, 200, 20);

	fill('rgb(51,255,153)')
	square(100, 200, 20);

	fill('rgb(51,255,255)')
	square(120, 200, 20);

	fill('rgb(255,153,51)')
	square(140, 200, 20);

	fill('rgb(51,51,255)')
	square(160, 200, 20);

	fill('rgb(153,51,255)')
	square(180, 200, 20);

	fill('rgb(255,51,255)')
	square(200, 200, 20);

	fill('rgb(255,51,153)')
	square(220, 200, 20);



}