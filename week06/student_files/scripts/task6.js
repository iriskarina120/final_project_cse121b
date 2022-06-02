const mycurses = {};
const output = (mycurses) => {
    mycurses.forEach((curse) => {
      let article = document.createElement("article");
        let curseName = document.createElement("h3");
        curseName.textContent = curse.curseName;
        let teacher = document.createElement("h4");        teacher.textContent = curse.teacher;
        let a = document.createElement('a');
        let img = document.createElement("img");         
        img.setAttribute("src", curse.imageUrl);
        img.setAttribute("alt", curse.curseName);
        a.href = ("href", curse.siteDesignId);
        let link = document.createTextNode("Ver maetriales y recursos");
        a.appendChild(link);      
        
        article.appendChild(curseName);
        article.appendChild(a);
        article.appendChild(teacher);        
        article.appendChild(img);       
        document.querySelector("#curses").appendChild(article);
    });
    };

const getcurses = async () => {
    const response = await fetch(
      "https://iriskarina120.github.io/iriskarina120.cse121/curses.json"
    );
    curseList = await response.json();
    output(curseList);
  };
  getcurses();

const reset = () => {
    document.querySelector("#curses").innerHTML = "";
  };

const sortBy = () => {
    reset();
  
    let filter = document.querySelector("#sortBy").value;
  
    switch (filter) {
      case "curseNameAscending":
        output(
          curseList.sort((curse1, curse2) => {
            let curseName1 = curse1.curseName;
            let curseName2 = curse2.curseName;
            if (curseName1 < curseName2) return -1;
            else if (curseName1 > curseName2) return 1;
            else return 0;
          })
        );
        break;
      case "curseNameDescending":
        output(
          curseList.sort((curse1, curse2) => {
            let curseName1 = curse1.curseName;
            let curseName2 = curse2.curseName;
            if (curseName1 > curseName2) return -1;
            else if (curseName1 < curseName2) return 1;
            else return 0;
          })
        );
        break;
      default:        
        output(
          curseList.sort((curse1, curse2) =>
            curse1.curseName > curse2.curseName
              ? 1
              : curse2.curseName >
                curse1.curseName
              ? -1
              : 0
          )
        );
        break;
    }
  };
document.querySelector("#sortBy").addEventListener("change", sortBy);
