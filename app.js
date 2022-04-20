document.addEventListener('DOMContentLoaded', function () {
    // ...
    // Place code here.
    // ...




const collection = [
    {
      Model: "M4 F82",
      Engine: "6 inline turbo twin",
      ReleaseYear: 2014,
      Picture: "",
      Chassis: ["Coupe", "Cabriolet"],
    },
    {
      Model: "M4 G82",
      Engine: "6 inline turbo 3.0",
      ReleaseYear: 2021,
      Picture: "link/to/a/picture",
      Chassis: "Coupe Sport",
    },
    {
      Model: "M3 E30",
      Engine: "S14",
      ReleaseYear: 1986,
      Picture: "link/to/a/picture",
      Chassis: "Coupe",
    },
    {
      Model: "M3 E46",
      Engine: "6 inline",
      ReleaseYear: 2001,
      Picture: "link/to/a/picture",
      Chassis: ["Coupe", "Cabriolet"],
    },
    {
      Model: "M3 E90/92",
      Engine: "V8 4.0L",
      ReleaseYear: 2007,
      Picture: "link/to/a/picture",
      Chassis: ["Coupe", "Cabriolet", "Sedans"],
    },
    {
      Model: "M3 F80",
      Engine: "6 inline",
      ReleaseYear: 2014,
      Picture: "link/to/a/picture",
      Chassis: "Sedans",
    },
    {
      Model: "M5 E60",
      Engine: "V10 90°",
      ReleaseYear: 2005,
      Picture: "link/to/a/picture",
      Chassis: ["Sedans", "Touring"],
    },
    {
      Model: "M5 E39",
      Engine: "V8",
      ReleaseYear: 1995,
      Picture: "link/to/a/picture",
      Chassis: "Berline",
    },
    {
      Model: "M5 E34",
      Engine: "6 inline 3.8L",
      ReleaseYear: 1989,
      Picture: "link/to/a/picture",
      Chassis: ["Sedans", "Touring"],
    },
    {
      Model: "M1 E26",
      Engine: "6 inline 24S",
      ReleaseYear: 2014,
      Picture: "link/to/a/picture",
      Chassis: "Coupe",
    },

  ];
;

// console.log(collection)



for (let index = 0; index < collection.length; index++) {
    const element = collection[index];
    function myFunction() {
        var x = document.createElement("ARTICLE");
        x.setAttribute("id", "myArticle");
        document.body.appendChild(x);

        var img = document.createElement('img');
        img.src = element.Picture;
        document.getElementById('myArticle').appendChild(img);
      
        var heading = document.createElement("H1");
        var txt1 = document.createTextNode(element.Model);
        heading.appendChild(txt1);
        document.getElementById("myArticle").appendChild(heading);
      
        var para = document.createElement("P");
        var txt2 = document.createTextNode(element.Engine);
        para.appendChild(txt2);
        document.getElementById("myArticle").appendChild(para);
        
        var para = document.createElement("P");
        var txt2 = document.createTextNode(element.ReleaseYear);
        para.appendChild(txt2);
        document.getElementById("myArticle").appendChild(para);
        
        var para = document.createElement("P");
        var txt2 = document.createTextNode(element.Chassis);
        para.appendChild(txt2);
        document.getElementById("myArticle").appendChild(para);
      }
      myFunction()

}
});