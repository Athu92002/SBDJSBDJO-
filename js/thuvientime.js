// JavaScript Document\
function ngaythangnam(){
	var d=new Date();
	var thu=d.getDate();
	if(thu==0){ thu="chu nhat,"}
	if(thu==1){ thu="thu hai,"}
	if(thu==2){ thu="thu ba,"}
	if(thu==3){ thu="thu tu,"}
	if(thu==4){ thu="thu nam,"}
	if(thu==5){ thu="thu sau,"}
	if(thu==6){ thu="thu bay,"}
	var ngay=d.getDate()
	var thang=d.getMonth()+1
	var nam=d.getFullYear()
	document.getElementById("xuat").innerHTML=thu+ngay+"/"+nam
}
function dongho(){
	var d=new Date()
	var gio=d.getHours()
	var phut=d.getMinutes()
	var giay=d.getSeconds()
	if(gio<10){gio="0" +gio}
	if(phut<10){gio="0" +phut}
	if(giay<10){gio="0" +giay}
	document.getElementById("gio").innerHTML=gio+":"+phut+":"+giay
	var t=setTimeout(dongho,800)
}