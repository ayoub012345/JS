var t=["produit","","prix","quantité","prix total"];
var prix=[42,34,66,65,2];
var des=["sndala","sbat","t9chira","7loma","srwal"];
var q=[2,3,1,3,4];
const tablle_v =document.createElement("table");
const tr_v=document.createElement("tr");
tablle_v.setAttribute("id","t");
for(var x in t)
{
    const th_v=document.createElement("th");
    th_v.innerText=t[x];
    th_v.setAttribute("id","th"+x);
    tr_v.append(th_v);
}
tablle_v.append(tr_v);
document.body.append(tablle_v);
for(var i=0;i<=3;i++)
{
    const ttr=document.createElement("tr");
    ttr.setAttribute("id","tr"+i);
    tablle_v.append(ttr);
    for(var j=0;j<=5;j++)
    {
        const ttd=document.createElement("td");
        switch(j)
        {
            case 0:
                const img=document.createElement("img");
                img.setAttribute("src","f"+i+".jfif");
                img.setAttribute("class","gal");
                ttd.append(img);
                ttr.append(ttd);
            break;
            case 1:
                ttd.innerText=des[i];
                ttd.setAttribute("id",i+"td"+j);
                ttr.append(ttd);
            break;
            case 2:
                ttd.innerText=prix[i];
                ttd.setAttribute("id",i+"td"+j);
                ttr.append(ttd);
            break;
            case 3:
                ttd.innerText=q[i];
                ttd.setAttribute("id",i+"td"+j);
                ttr.append(ttd);
            break;
            case 4:
                ttd.innerText=prix[i]*q[i];
                ttd.setAttribute("id",i+"td"+j);
                ttr.append(ttd);
            break;
            case 5:
                var x = document.createElement("INPUT");
                x.setAttribute("type", "number");
                x.setAttribute("value",""+q[j]);
                ttd.append(x);
                ttr.append(ttd);
            break;
        }
    }
}