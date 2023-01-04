let fixed=[1,2,3,6,8,18,21,22,24,29,33,34,37,39,40,43,44,45,47,49,52,53,55,56,58,61,65,67,70,71,75,77,80,81];
let fixed_values=[1,8,6,5,9,1,5,1,4,5,1,8,1,2,4,5,9,7,8,7,6,1,2,1,6,5,4,9,7,1,6,4,3,8];

function set_game()
{
	for(let i=0;i<fixed.length;i++)
		document.getElementById("cell"+fixed[i]).innerHTML=fixed_values[i];
}

function draw_outline()
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
		let cell_number=1;
		for(let j=1;j<=9;j++)
		{
			if(fixed.includes(i*9+j))
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
}

function load_game()
{
	draw_outline();
	set_game();
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
			if(fixed.includes(i*9+j))
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
		document.getElementById("game-box").style.outline="solid green 2px";
	else	
		document.getElementById("game-box").style.outline="solid red 2px";
}

function unvalidate()
{
	document.getElementById("game-box").style.outline="solid #111 2px";
}
