const chooseFile = document.getElementById('chooseFile');
const send = document.getElementById('send');

let FileData = [];
let data = null;


// When user selects a file
chooseFile.addEventListener('change', function (e) {
    data = e.target.files[0];

    console.log(data);
});

// When user clicks upload
send.addEventListener('click', function () {

    if (!data) {
        console.log("Please select a file first");
        return;
    }

    let reader = new FileReader()

    reader.onload = function (e) {
        const fileBase64 = e.target.result

        const fileMetaData = {
            name: data.name,
            type: data.type,
            content: fileBase64
        }


        FileData.push(fileMetaData);

        localStorage.setItem('file', JSON.stringify(FileData))

        console.log(FileData);

        displayFile()

        // Clear current file data
        data = null;

        // Clear file input
        chooseFile.value = "";
    }
    reader.readAsDataURL(data)
});


let showdata = localStorage.getItem("file")

if(showdata){
    FileData = JSON.parse(showdata); //convert json data into js object

    console.log("save data loaded form storage", FileData);

}

console.log(showdata);

function displayFile(){
    const getAllFiles = document.getElementById('file-div')
   
    if(!getAllFiles) return

    getAllFiles.innerHTML = ""

    FileData.forEach((file, index)=>{
        let img = document.createElement('img')
        img.src = file.content

        let div = document.createElement('div')
        div.className = 'filesData'

        let span = document.createElement('span')
        span.innerText = "⨉"
        span.id = 'deleteFile'

        span.addEventListener('click', function(){
            deleteFiles(index)
        })

        div.appendChild(img)
        div.appendChild(span)

        console.log(file);
        
        getAllFiles.append(div)
    })
}


function deleteFiles(index){
    FileData.splice(index, 1)
    localStorage.setItem('file', JSON.stringify(FileData))
    displayFile()
}


displayFile()