// --------------- Declarations ----
var fontlink = document.createElement("link");
var board = document.createElement("table");
var script_web_llm = document.createElement();
var chess_icons_black = {
	king    :   "&#9818;",
	queen   :   "&#9819;",
	rook    :   "&#9820;",
	bishop  :   "&#9821",
	knight  :   "&#9822",
	pawn    :   "&#9823"}
var chess_icons_white = {
	king    :   "&#9812;",
	queen   :   "&#9813;",
	rook    :   "&#9814;",
	bishop  :   "&#9815",
	knight  :   "&#9816",
	pawn    :   "&#9817"}	  
var table_font_style = `
	<style>
	    *{
			font-family: "JetBrains Mono"
	    }
	    table *{
	       font-size: 50px;
	    }
		td{
			text-align: center;
		    width: 90px;
	        height: 70px;
			border: 1px solid grey;
		}
	</style>`;

// ---------------- Settings and Main Code ----------------------
fontlink.href = "https://fonts.googleapis.com/css?family=JetBrains Mono";
document.title = "Chess Game";
document.head.appendChild(fontlink);
document.body.appendChild(board);
document.head.innerHTML += table_font_style;

board.innerHTML += `
	<tr>
		<td>${chess_icons_black["rook"]}</td>
		<td>${chess_icons_black["knight"]}</td>
		<td>${chess_icons_black["bishop"]}</td>
		<td>${chess_icons_black["king"]}</td>
		<td>${chess_icons_black["queen"]}</td>
		<td>${chess_icons_black["bishop"]}</td>
		<td>${chess_icons_black["knight"]}</td>
		<td>${chess_icons_black["rook"]}</td>
	</tr>	
	<tr>
		<td>${chess_icons_black["pawn"]}</td>
		<td>${chess_icons_black["pawn"]}</td>
		<td>${chess_icons_black["pawn"]}</td>
		<td>${chess_icons_black["pawn"]}</td>
		<td>${chess_icons_black["pawn"]}</td>
		<td>${chess_icons_black["pawn"]}</td>
		<td>${chess_icons_black["pawn"]}</td>
		<td>${chess_icons_black["pawn"]}</td>
	</tr>
	<tr>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	</tr>	
	<tr>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	</tr>	
	<tr>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	</tr>	
	<tr>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	</tr>	
	<tr>
		<td>${chess_icons_white["pawn"]}</td>
		<td>${chess_icons_white["pawn"]}</td>
		<td>${chess_icons_white["pawn"]}</td>
		<td>${chess_icons_white["pawn"]}</td>
		<td>${chess_icons_white["pawn"]}</td>
		<td>${chess_icons_white["pawn"]}</td>
		<td>${chess_icons_white["pawn"]}</td>
		<td>${chess_icons_white["pawn"]}</td>
	</tr>
	<tr>
		<td>${chess_icons_white["rook"]}</td>
		<td>${chess_icons_white["knight"]}</td>
		<td>${chess_icons_white["bishop"]}</td>
		<td>${chess_icons_white["king"]}</td>
		<td>${chess_icons_white["queen"]}</td>
		<td>${chess_icons_white["bishop"]}</td>
		<td>${chess_icons_white["knight"]}</td>
		<td>${chess_icons_white["rook"]}</td>
	</tr>	
`