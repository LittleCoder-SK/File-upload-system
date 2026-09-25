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

if (showdata) {
    FileData = JSON.parse(showdata); //convert json data into js object

    console.log("save data loaded form storage", FileData);

}

// displaying file on web page and download file
function displayFile() {
    const getAllFiles = document.getElementById('file-div')

    if (!getAllFiles) return

    getAllFiles.innerHTML = ""

    // Check if there are no files
    if (FileData.length === 0) {

        let heading = document.createElement('h2');
        heading.innerText = 'No file yet!!!';

        getAllFiles.appendChild(heading);

        return;
    }

    FileData.forEach((file, index) => {
        let img = document.createElement('img')
        img.src = file.content

        let div = document.createElement('div')
        div.className = 'filesData'

        let span = document.createElement('span')
        let img3 = document.createElement('img')
        img3.src = 'delete.png'
        img3.className = 'img3'
        span.id = 'deleteFile'

        let link = document.createElement('a');
        let img2 = document.createElement('img')
        img2.src = 'download.png'
        img2.className = 'img2'

        span.addEventListener('click', function () {
            deleteFiles(index)
        })

        link.addEventListener('click', function () {
            const files = FileData[index]

            link.href = files.content;
            link.download = files.name
        })

        div.appendChild(img)
        div.appendChild(span)
        span.append(img3)
        div.appendChild(link)
        link.append(img2)

        console.log(file);

        getAllFiles.append(div)
    })
}

// delete file
function deleteFiles(index) {
    FileData.splice(index, 1)
    localStorage.setItem('file', JSON.stringify(FileData))
    displayFile()
}

//dark mode
function darkMode() {
    let darkToggle = document.querySelector('#darkToggle')
    let mainFile = document.querySelector('.main-file')

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        mainFile.classList.add('main-dark');
        darkToggle.checked = true;
    }

    darkToggle.addEventListener('change', () => {

        const isDark = darkToggle.checked;

        mainFile.classList.toggle('main-dark', isDark);

        localStorage.setItem(
            'theme',
            isDark ? 'dark' : 'light'
        );
    })

}

darkMode()
displayFile()