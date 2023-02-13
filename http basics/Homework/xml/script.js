//creating new XHR object
// kreira se novi objekat
//var request = new XMLHttpRequest();
// console.log(request);
//console.log(request.open);

//request.open('GET', 'http://www.geoplugin.net/xml.gp?ip=xx.xx.xx.xx', true);
var button = document.getElementById('button');
var paragraph = document.getElementById('paragraph');


function getCountryByIP() {
    var request = new XMLHttpRequest();
    request.open('GET','http://www.geoplugin.net/xml.gp?ip=xx.xx.xx.xx');


    //fja koja ce se pokrenuti kada je zahtev primljen(load-ovan)
    request.onload = function () {
        if (request.readyState === 4 && request.status === 200) {
            var answer = request.responseXML;
            console.log(answer);
             var countryName = answer.getElementsByTagName('geoplugin_countryName')[0].textContent;
             var region = answer.getElementsByTagName('geoplugin_region')[0].textContent;
             console.log(region);

           // console.log(countryName);
            document.getElementById('paragraph').textContent = region + ',' +  countryName;
        }
    };

    //posalji zahtev
    request.send();
};

button.addEventListener('click',getCountryByIP);


