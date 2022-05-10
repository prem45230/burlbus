var zoom = 10;
var map = L.map('map').setView([14.040072750299245, 100.60450701776492], 16);
L.tileLayer('https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}@2x.jpg?key=WixGoIOLwNV1Z969nzli', {
    tileSize: 512, //512
    zoomOffset: -1, //-1
    minZoom: 5,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    crossOrigin: true
}).addTo(map)

//############################################ firebase ######################################################
var firebaseConfig = {
    apiKey: "AIzaSyAYsL_hHLEZnA8DVCnfiSaA4AsCkr6b3kk",
    authDomain: "burl-d4141.firebaseapp.com",
    databaseURL: "https://burl-d4141-default-rtdb.firebaseio.com",
    projectId: "burl-d4141",
    storageBucket: "burl-d4141.appspot.com",
    messagingSenderId: "558386200153",
    appId: "1:558386200153:web:116f54e4dd4885df64fb48",
    measurementId: "G-QL6F32RKXM"
};

//firebase.initializeApp(firebaseConfig);
function getParam(param) {
    return new URLSearchParams(window.location.search).get(param);
}

var Icon = L.Icon.extend({
    options: {
        iconSize: [20, 20]
    }
});
// #############################################iconbus_stop###############################################################
var busIcon = new Icon({
    iconUrl: 'https://www.pinclipart.com/picdir/big/578-5781017_google-maps-bus-stop-icon-clipart.png'
})

var people = new Icon({
    iconUrl: 'https://www.nicepng.com/png/detail/401-4012135_icon-people-icon-people-open-source.png'
})




class bus_stop {
    constructor(lat, long, text, icon, img) {
        this.lat = lat
        this.long = long
        this.text = text
        this.img = img
        var imgTemp = new Icon({
            iconUrl: icon
        })

        this.element = L.marker([this.lat, this.long], {
            icon: imgTemp
        })
    }


    getImg() {
        return this.img
    }

    setImg(img) {
        this.img = img
    }

    deploy() {
        this.element.addTo(map).bindPopup(`
        <div>
            <img src="${this.img}" width="200px">
            <p>${this.text}</p>
        </div>`);
    }
}


var json_data = [
    [14.039541329706626, 100.61470581521034, "01_A3", "https://www.pinclipart.com/picdir/big/578-5781017_google-maps-bus-stop-icon-clipart.png", "https://imgz.io/images/2022/05/10/01-A3.jpg"],
    [14.039150487967367, 100.61346278036979, "02_A4", "https://www.pinclipart.com/picdir/big/578-5781017_google-maps-bus-stop-icon-clipart.png", "https://imgz.io/images/2022/05/10/02_A4.jpg"],
    [14.03916513459508, 100.61197485913377, "03_UStore", "https://www.pinclipart.com/picdir/big/578-5781017_google-maps-bus-stop-icon-clipart.png", "https://imgz.io/images/2022/05/10/03_UStore.jpg"],
    [14.039880504296702, 100.61012359383339, "04_B4-Canteen", "https://www.pinclipart.com/picdir/big/578-5781017_google-maps-bus-stop-icon-clipart.png", "https://imgz.io/images/2022/05/10/04_B4-Canteen.jpg"],
    [14.038833787155323, 100.60787698050302, "05_Opposite-C6", "https://www.pinclipart.com/picdir/big/578-5781017_google-maps-bus-stop-icon-clipart.png", "https://imgz.io/images/2022/05/10/05_Opposite-C6.jpg"],
    [14.038895306647238, 100.6053548120963, "06_Opposite-C1", "https://www.pinclipart.com/picdir/big/578-5781017_google-maps-bus-stop-icon-clipart.png", "https://imgz.io/images/2022/05/10/06_Opposite-C1.jpg"],
    [14.039492927217239, 100.60406605077246, "07_Opposite_C4", "https://www.pinclipart.com/picdir/big/578-5781017_google-maps-bus-stop-icon-clipart.png", "https://imgz.io/images/2022/05/10/07_Opposite-C4.jpg"],
    [14.039895308085635, 100.60179393750775, "08_Parking7", "https://www.pinclipart.com/picdir/big/578-5781017_google-maps-bus-stop-icon-clipart.png", "https://imgz.io/images/2022/05/10/08_Parking7.jpg"],
    [14.039736491421808, 100.60419343103723, "09_C4", "https://www.pinclipart.com/picdir/big/578-5781017_google-maps-bus-stop-icon-clipart.png", "https://imgz.io/images/2022/05/10/09_C4.jpg"],
    [14.039029604788283, 100.60543084843573, "10_C1", "https://www.pinclipart.com/picdir/big/578-5781017_google-maps-bus-stop-icon-clipart.png", "https://imgz.io/images/2022/05/10/10_C1.jpg"],
    [14.039131581436505, 100.60782432945408, "11_C6", "https://www.pinclipart.com/picdir/big/578-5781017_google-maps-bus-stop-icon-clipart.png", "https://imgz.io/images/2022/05/10/11_C6.jpg"],
    [14.040038239486076, 100.61024102674446, "12_B4", "https://www.pinclipart.com/picdir/big/578-5781017_google-maps-bus-stop-icon-clipart.png", "https://imgz.io/images/2022/05/10/12_B4.jpg"],
    [14.040030459676874, 100.61226192026709, "13_Restarea1", "https://www.pinclipart.com/picdir/big/578-5781017_google-maps-bus-stop-icon-clipart.png", "https://imgz.io/images/2022/05/10/13_Restarea1.jpg"],
    [14.040022427418055, 100.61402455358989, "14_A7", "https://www.pinclipart.com/picdir/big/578-5781017_google-maps-bus-stop-icon-clipart.png", "https://imgz.io/images/2022/05/10/14_A7.jpg"],
]



json_data.forEach(obj => {
    console.log(obj)
    var ele = new bus_stop(obj[0], obj[1], obj[2], obj[3], obj[4])
    ele.deploy()
});

/*

L.marker([14.039541329706626, 100.61470581521034], {
    icon: busIcon
}).addTo(map).bindPopup(`
<div>
    <img src="">
    <p>BUS s</p>
    <button>เพิ่มเติม</button>
</div>`);
L.marker([14.039150487967367, 100.61346278036979], {
    icon: busIcon
}).addTo(map).bindPopup("Bus Stop : A4");

L.marker([14.03916513459508, 100.61197485913377], {
    icon: busIcon
}).addTo(map).bindPopup("Bus Stop : Ustore");

L.marker([14.039880504296702, 100.61012359383339], {
    icon: busIcon
}).addTo(map).bindPopup("Bus Stop : B4 Canteen");

L.marker([14.038833787155323, 100.60787698050302], {
    icon: busIcon
}).addTo(map).bindPopup("Bus Stop : commu_art_park");

L.marker([14.038895306647238, 100.6053548120963], {
    icon: busIcon
}).addTo(map).bindPopup("Hi I'm Bus Stop : interpark");

L.marker([14.039492927217239, 100.60406605077246], {
    icon: busIcon
}).addTo(map).bindPopup("Hi I'm Bus Stop : filmpark");

L.marker([14.039895308085635, 100.60179393750775], {
    icon: busIcon
}).addTo(map).bindPopup("Hi I'm Bus Stop : end");

L.marker([14.039736491421808, 100.60419343103723], {
    icon: busIcon
}).addTo(map).bindPopup("Hi I'm Bus Stop : film");

L.marker([14.039029604788283, 100.60543084843573], {
    icon: busIcon
}).addTo(map).bindPopup("Hi I'm Bus Stop : commu_art");

L.marker([14.039131581436505, 100.60782432945408], {
    icon: busIcon
}).addTo(map).bindPopup("Hi I'm Bus Stop : inter");

L.marker([14.040038239486076, 100.61024102674446], {
    icon: busIcon
}).addTo(map).bindPopup("Hi I'm Bus Stop : B4");

L.marker([14.040030459676874, 100.61226192026709], {
    icon: busIcon
}).addTo(map).bindPopup("Hi I'm Bus Stop : mid");

L.marker([14.040022427418055, 100.61402455358989], {
    icon: busIcon
}).addTo(map).bindPopup("Hi I'm Bus Stop : A7");
*/
firebase.initializeApp(firebaseConfig);

if (getParam('latlong') != null) {
    L.marker([getParam('latlong').split(',')[0], getParam('latlong').split(',')[1]], {
        icon: people
    }).addTo(map).bindPopup("Hi I'm Bus Stop : A7");
}


//############################################ icon_bus #######################################################
var LeafIcon = L.Icon.extend({
    options: {
        iconSize: [20, 20],
    }
});

var greenIcon = new LeafIcon({
    iconUrl: 'https://e7.pngegg.com/pngimages/535/1005/png-clipart-white-and-red-vehicle-illustration-school-bus-san-diego-metropolitan-transit-system-computer-icons-bus-stop-red-bus-icon-transport-signage.png'
})
var k = L.marker([14.040322549979956, 100.60703902291294], { icon: greenIcon })
    // var k = L.marker([20.040322549979956, 102.000000], { icon: greenIcon })
k.addTo(map)

var database = firebase.database();
var ref = firebase.database().ref("GPS")
ref.on('value', (snapshot) => {
    console.log(snapshot.val())
    map.removeLayer(k)
    k = L.marker([snapshot.val()['f_latitude'], snapshot.val()['f_logitude']], { icon: greenIcon })
    k.addTo(map)
})


var ref = firebase.database().ref("Station/next_staton")
ref.on('value', (snapshot) => {
    document.getElementById("imgS").src = "./img/" + snapshot.val().replace('"', '').replace('"', '') + ".JPG"
    document.getElementById("nextS").innerHTML = "ป้ายต่อไป" + snapshot.val().replace('"', '').replace('"', '')
    console.log(snapshot.val() + ".jpg")
})