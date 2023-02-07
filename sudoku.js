let game=0;
const game1={
	fixed:[1,2,3,6,8,18,21,22,24,29,33,34,37,39,40,43,44,45,47,49,52,53,55,56,58,61,65,67,70,71,75,77,80,81],
	fixedValues:[1,8,6,5,9,1,5,1,4,5,1,8,1,2,4,5,9,7,8,7,6,1,2,1,6,5,4,9,7,1,6,4,3,8]
};
const game2={
	fixed:[1,2,3,4,8,12,13,16,17,19,22,23,28,30,32,36,38,39,40,42,44,46,49,51,54,55,57,59,62,64,67,69,72,74,75,77,79,80],
	fixedValues:[5,9,1,3,8,7,8,3,2,3,1,6,8,9,1,2,3,6,2,9,1,2,7,3,9,1,8,4,7,9,6,8,2,7,2,9,8,3]
};
const game3={
	fixed:[2,5,7,9,12,13,14,15,20,24,25,30,31,32,34,35,37,41,45,47,48,50,51,52,57,58,62,68,69,70,71,73,75,77,80],
	fixedValues:[8,2,9,4,9,6,7,4,3,8,2,6,1,3,8,9,8,6,1,1,2,5,4,7,9,6,1,7,2,6,8,1,6,4,2]
};
const game4={
	fixed:[2,4,6,7,11,16,17,20,22,24,27,28,29,30,34,36,46,48,52,53,54,55,58,60,62,65,66,71,75,76,78,80],
	fixedValues:[8,3,5,4,5,6,3,2,1,6,7,5,6,1,9,8,9,4,5,3,1,8,2,7,1,1,7,8,5,3,8,4]
};
const game5={
	fixed:[1,2,4,7,8,9,12,13,17,24,29,31,32,33,36,37,44,45,46,48,53,57,58,59,64,66,71,74,76,78,79,80],
	fixedValues:[4,2,7,1,3,6,1,3,8,6,8,2,9,1,7,6,4,5,9,7,2,2,6,7,7,9,5,6,4,3,7,8]
};
const game6={
	fixed:[1,8,9,15,17,18,20,24,28,29,33,42,43,46,47,53,60,61,64,65,69,73,75,80],
	fixedValues:[4,2,6,2,9,3,1,4,8,4,1,8,6,5,6,3,9,5,8,3,1,6,7,8]
};
const game7={
	fixed:[3,5,8,9,13,14,16,20,25,32,40,41,42,47,48,56,59,63,67,70,71,72,73,77,78,79,80],
	fixedValues:[2,1,8,5,8,3,1,8,3,3,9,6,1,9,8,2,6,1,7,6,4,5,1,5,9,2,3]
};
const game8={
	fixed:[3,4,5,7,14,15,16,17,18,21,24,25,28,29,30,31,33,38,39,42,44,47,50,51,53,54,55,67,68,70,72,73,77,78,79,80,81],
	fixedValues:[6,1,2,4,9,8,7,1,2,1,5,9,2,4,1,8,5,7,6,1,8,9,6,4,2,7,7,8,4,1,9,8,5,9,7,4,2]
};
let games=[game1,game2,game3,game4,game5,game6,game7,game8];

window.onload=() => {
	loadScreen();
}

function setGame(gameNumber)
{
	game=gameNumber;
	for(let i=1;i<=8;i++)
	{
		if(gameNumber==i)
			document.getElementById("panel"+i).style.backgroundColor="#83f";
		else
			document.getElementById("panel"+i).style.backgroundColor="#222";
	}
	unvalidate();
	for(let i=0;i<9;i++)
	{
		const box=document.getElementById("square"+i);
		while(box.hasChildNodes())
			box.removeChild(box.firstChild);
	}
	for(let i=0;i<9;i++)
	{
		const box=document.getElementById("square"+i);
		let cellnumber=1;
		for(let j=1;j<=9;j++)
		{
			if(games[gameNumber-1].fixed.includes(i*9+j))
			{
				const cell=document.createElement("div");
				cell.setAttribute("class","cell");
				cell.setAttribute("id","cell"+(i*9+j));
				box.appendChild(cell);
			}
			else
			{
				const cell=document.createElement("input");
				cell.setAttribute("class","cell");
				cell.setAttribute("id","cell"+(i*9+j));
				cell.setAttribute("type","number");
				cell.setAttribute("min","1");
				cell.setAttribute("max","9");
				box.appendChild(cell);
			}
		}
	}
	for(let i=0;i<games[gameNumber-1].fixed.length;i++)
		document.getElementById("cell"+games[gameNumber-1].fixed[i]).innerHTML=games[gameNumber-1].fixedValues[i];
	document.getElementById("left").setAttribute("class","left2");
	document.getElementById("right").setAttribute("class","right2");
}

function drawOutline()
{
	const container=document.getElementById("game-box");
	for(let i=0;i<9;i++)
	{
		const box=document.createElement("div");
		box.setAttribute("class","square");
		box.setAttribute("id","square"+i);
		container.appendChild(box);
	}
	for(let i=0;i<9;i++)
	{
		const box=document.getElementById("square"+i);
		let cellNumber=1;
		for(let j=1;j<=9;j++)
		{
				const cell=document.createElement("div");
				cell.setAttribute("class","cell");
				cell.setAttribute("id","cell"+(i*9+j));
				box.appendChild(cell);
		}
	}
}

function loadScreen()
{
	const left=document.getElementById("left");
	for(let i=1;i<=8;i++)
	{
		const element=document.createElement("div");
		element.setAttribute("class","selector");
		element.innerHTML="Game "+i;
		element.setAttribute("id","panel"+i);
		element.setAttribute("onclick","setGame("+i+")");
		left.appendChild(element);
	}
	drawOutline();
}

function validate()
{
	let row=[0,0,0,0,0,0,0,0,0];
	let column=[0,0,0,0,0,0,0,0,0];
	let box=[0,0,0,0,0,0,0,0,0];
	for(let i=0;i<9;i++)
	{
		for(let j=1;j<=9;j++)
		{
			let val;
			if(games[game-1].fixed.includes(i*9+j))
				val=parseInt(document.getElementById("cell"+(i*9+j)).innerHTML);
			else
				val=parseInt(document.getElementById("cell"+(i*9+j)).value);
			box[i]+=val;
			if(i==0 || i==3 || i==6)
			{
				if(j==1 || j==4 || j==7)
					column[0]+=val;
				if(j==2 || j==5 || j==8)
					column[1]+=val;
				if(j==3 || j==6 || j==9)
					column[2]+=val;
			}
			if(i==1 || i==4 || i==7)
			{
				if(j==1 || j==4 || j==7)
					column[3]+=val;
				if(j==2 || j==5 || j==8)
					column[4]+=val;
				if(j==3 || j==6 || j==9)
					column[5]+=val;
			}
			if(i==2 || i==5 || i==8)
			{
				if(j==1 || j==4 || j==7)
					column[6]+=val;
				if(j==2 || j==5 || j==8)
					column[7]+=val;
				if(j==3 || j==6 || j==9)
					column[8]+=val;
			}
			if(i==0 || i==1 || i==2)
			{
				if(j==1 || j==2 || j==3)
					row[0]+=val;
				if(j==4 || j==5 || j==6)
					row[1]+=val;
				if(j==7 || j==8 || j==9)
					row[2]+=val;
			}
			if(i==3 || i==4 || i==5)
			{
				if(j==1 || j==2 || j==3)
					row[3]+=val;
				if(j==4 || j==5 || j==6)
					row[4]+=val;
				if(j==7 || j==8 || j==9)
					row[5]+=val;
			}
			if(i==6 || i==7 || i==8)
			{
				if(j==1 || j==2 || j==3)
					row[6]+=val;
				if(j==4 || j==5 || j==6)
					row[7]+=val;
				if(j==7 || j==8 || j==9)
					row[8]+=val;
			}
		}
	}
	let solved=true;
	for(let i=0;i<9;i++)
	{
		if(box[i]!=45 || column[i]!=45 || row[i]!=45)
			solved=false;
	}
	if(solved)
		document.getElementById("game-box").style.outline="solid green 3px";
	else	
		document.getElementById("game-box").style.outline="solid red 3px";
}

function unvalidate()
{
	document.getElementById("game-box").style.outline="solid #111 3px";
}

function goHome() {
	document.getElementById("right").setAttribute("class","right");
	document.getElementById("left").setAttribute("class","left");
	for(let i=1;i<=8;i++) document.getElementById("panel"+i).style.backgroundColor="#222";
}
