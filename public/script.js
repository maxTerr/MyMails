document.getElementById('compteur_messages').textContent = document.getElementsByTagName('p').length;

for (var i=0;i<document.getElementsByClassName('trash').length;i++) {
    document.getElementsByClassName('trash')[i].addEventListener("click",function(){
        this.parentNode.remove();
        document.getElementById('compteur_messages').textContent = document.getElementsByTagName('p').length;
    })
}

document.getElementById('btn').addEventListener("click",function(){
        var div = document.createElement("div");
        div.className = "profil";
        document.getElementById("full").appendChild(div);
        
        var avatar = document.createElement("img");
        avatar.src = "max.jpeg";
        avatar.className = "avatar";
        div.appendChild(avatar);

        var div2 = document.createElement("div");
        div2.className = "wording";
        div.appendChild(div2);        

        var h6 = document.createElement("h6");
        h6.textContent = "Maxence";
        div2.appendChild(h6);

        var contenumsg = document.getElementById('newmessage').value;
        var newmsg = document.createTextNode(contenumsg);
        div2.appendChild(newmsg);

        var trash = document.createElement("img");
        trash.src = "trash-6-128.png";
        trash.className = "trash";
        div.appendChild(trash);

        document.getElementById('newmessage').Value = "nouveau message";
})

