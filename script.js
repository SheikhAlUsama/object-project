
var mainImageDIv = document.getElementById('mainDiv')
var images = mainImageDIv.getElementsByTagName("img")
var caps = mainImageDIv.getElementsByTagName("p")
var sources = ["1.jpg", "2.jpg", "3.png", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.png", "13.jpg", "14.jpg","15.jpeg"]
var imagesCaptions = [ 'Iphone 7', 'Iphone 8','iphone x', 'iPhone11', 'iphone12', 'galaxy S8',' galaxy S9', 'galaxy S10', 'Hot 8', 'Hot 9', 'Hot 10', 'Spark 4', 'Spark 5', 'Spark 6', 'Spark 7']
for (var i = 0; i < images.length; i++) {
    images[i].src = sources[i]
    for (var j = 0; j < caps.length; j++) {
        caps[j].innerHTML = imagesCaptions[j]

    }
}

var phone = {
    iphone : {
        iphone7 : {
            brand : "iphone",
            model :"iphone 7",
            color : "Grey",
            price : "15000",
            src : "1.jpg"

        },
        iphone8 : {
            brand : "iphone",
            model :"iphone 8",
            color : "Rose gold",
            price : "15000",
            src : "2.jpg"

        },
        iphonex : {
            brand : "iphone",
            model :"iphone x",
            color : "White",
            price : "15000",
            src : "3.png"

        },
        iphone11 : {
            brand : "iphone",
            model :"iphone 11",
            color : "Red",
            price : "15000",
            src : "4.jpg"

        },
        iphone12 : { 
            brand : "iphone",
            model :"iphone 12",
            color : "Black",
            price : "15000",
            src : "5.jpg"

        },

    },
    samsung : {
        galaxys8 : {
            brand : "samsung",
            model :"galaxy S8",
            color : "Black",
            price : "15000",
            src : "6.jpg"
        },
        galaxys9 : {
            brand : "samsung",
            model :"galaxy S9",
            color : "White",
            price : "15000",
            src : "7.jpg"
        },
        galaxys10 : {
            brand : "samsung",
            model :"galaxy S10",
            color : "Red",
            price : "15000",
            src : "8.jpg"
        },
    },
    infinix: {
        hot8 :{
            brand : "infinix",
            model :"Hot 8",
            color : "Black",
            price : "15000",
            src : "9.jpg"
        },
        hot9 :{
            brand : "infinix",
            model :"Hot 9",
            color : "Blue",
            price : "15000",
            src : "10.jpg"
        },
        hot10 :{
            brand : "infinix",
            model :"Hot 10",
            color : "Mahroon",
            price : "15000",
            src : "11.jpg"
        },
    },
    tecno : {
        spark4 : {
            brand : "tecno",
            model :"Spark 4",
            color : "blue",
            price : "15000",
            src : "12.png"
            
        },
        spark5 : {
            brand : "tecno",
            model :"Spark 5",
            color : "orange",
            price : "15000",
            src : "13.jpg"
            
        },
        spark6 : {
            brand : "techno",
            model :"Spark 6",
            color : "White",
            price : "15000",
            src : "14.jpg"
            
        },
        spark7 : {
            brand : "techno",
            model :"Spark 7",
            color : "blue",
            price : "15000",
            src : "15.jpeg"
            
        }
    }
}
var brandInput = document.getElementById("brandInput")
var modelInput = document.getElementById("modelInput")







function search() {
    var brand = brandInput.value.toLowerCase()
    var model = modelInput.value.toLowerCase()

        document.getElementById('mainDiv').innerHTML = ""
        var mainDiv = document.getElementById('mainDivSearch')
        var image = document.getElementById("image")
        image.src = phone[brand][model].src
        document.getElementById("brand").innerHTML = "Brand :" + " " + phone[brand][model].brand
        document.getElementById("name").innerHTML = "Model :" + " " + phone[brand][model].model
        document.getElementById("color").innerHTML = "Color :" + " " + phone[brand][model].color
        document.getElementById("price").innerHTML = "Price :" + " " + phone[brand][model].color

}