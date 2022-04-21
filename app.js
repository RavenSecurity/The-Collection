document.addEventListener('DOMContentLoaded', function () {
    // ...
    // Place code here.
    // ...




const collection = [
    {
      Model: "M4 F82",
      Engine: "6 inline turbo twin",
      ReleaseYear: 2014,
      Picture: "./img/M4F82.jpg",
      Chassis: ["Coupe", "Cabriolet"],
    },
    {
      Model: "M4 G82",
      Engine: "6 inline turbo 3.0",
      ReleaseYear: 2021,
      Picture: "./img/M4G82.jpg",
      Chassis: "Coupe Sport",
    },
    {
      Model: "M3 E30",
      Engine: "S14",
      ReleaseYear: 1986,
      Picture: "./img/M3E30.jpg",
      Chassis: "Coupe",
    },
    {
      Model: "M3 E46",
      Engine: "6 inline",
      ReleaseYear: 2001,
      Picture: "./img/M3E46.jpg",
      Chassis: ["Coupe", "Cabriolet"],
    },
    {
      Model: "M3 E90/92",
      Engine: "V8 4.0L",
      ReleaseYear: 2007,
      Picture: "./img/M3E92.jpg",
      Chassis: ["Coupe", "Cabriolet", "Sedans"],
    },
    {
      Model: "M3 F80",
      Engine: "6 inline",
      ReleaseYear: 2014,
      Picture: "./img/M3F80.jpg",
      Chassis: "Sedans",
    },
    {
      Model: "M5 E60",
      Engine: "V10 90°",
      ReleaseYear: 2005,
      Picture: "./img/M5E60.jpg",
      Chassis: ["Sedans", "Touring"],
    },
    {
      Model: "M5 E39",
      Engine: "V8",
      ReleaseYear: 1995,
      Picture: "./img/M5E39.jpg",
      Chassis: "Berline",
    },
    {
      Model: "M5 E34",
      Engine: "6 inline 3.8L",
      ReleaseYear: 1989,
      Picture: "./img/M5E34.jpg",
      Chassis: ["Sedans", "Touring"],
    },
    {
      Model: "M1 E26",
      Engine: "6 inline 24S",
      ReleaseYear: 1978,
      Picture: "./img/M1E26.jpg",
      Chassis: "Coupe",
    },

  ];
;

// console.log(collection)



for (let index = 0; index < collection.length; index++) {
    const element = collection[index];
    function myFunction() {
        var x = document.createElement("ARTICLE");
        x.setAttribute("id", `article-${index}`);
        document.querySelector('.collection').appendChild(x);

        var img = document.createElement('img');
        img.src = element.Picture;
        x.appendChild(img);
        document.getElementById(`article-${index}`).appendChild(img);
      
        var heading = document.createElement("H1");
        var txt1 = document.createTextNode(element.Model);
        heading.appendChild(txt1);
        document.getElementById(`article-${index}`).appendChild(heading);
      
        var para = document.createElement("P");
        var txt2 = document.createTextNode(element.Engine);
        para.appendChild(txt2);
        document.getElementById(`article-${index}`).appendChild(para);
        
        var para = document.createElement("P");
        var txt2 = document.createTextNode(element.ReleaseYear);
        para.appendChild(txt2);
        document.getElementById(`article-${index}`).appendChild(para);
        
        var para = document.createElement("P");
        var txt2 = document.createTextNode(element.Chassis);
        para.appendChild(txt2);
        document.getElementById(`article-${index}`).appendChild(para);
      }
      myFunction()

}
});