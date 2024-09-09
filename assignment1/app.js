window.onload = function () {
    let scene = 0;
    let scenes = [
        document.getElementById("sidebar_scene1"),
        document.getElementById("sidebar_scene2"),
        document.getElementById("sidebar_scene3")
    ];
    let timer = null;

    document.getElementById("sidebarReplay").addEventListener("click", play);
    function changeScene() {
        switch (scene) {
            case 0:
                scenes[0].style.visibility = "visible";
                scenes[1].style.visibility = "hidden";
                scenes[2].style.visibility = "hidden";
                break;
            case 1:
                scenes[0].style.visibility = "hidden";
                scenes[1].style.visibility = "visible";
                scenes[2].style.visibility = "hidden";
                break;
            case 2:
                scenes[0].style.visibility = "hidden";
                scenes[1].style.visibility = "hidden";
                scenes[2].style.visibility = "visible";
                break;
            default:
                break;
        }
    }

    function animateSidebar() {
        scene++;
        if (scene >= scenes.length) {
            clearInterval(timer);
        }
        changeScene();
        
    }

    function play() {
        scene = 0;
        changeScene();
        timer = setInterval(animateSidebar, 3000);
    }

    play();
}


const formPage1 = document.getElementById("form-page1");
const formPage2 = document.getElementById("form-page2");
const formPage3 = document.getElementById("form-page3");
const formPage4 = document.getElementById("form-page4");
const formPage5 = document.getElementById("form-page5");


const progressBar = document.querySelector("progress");


const formData = document.getElementById("collected-data");

function showPage(pageNumber) {
    switch (pageNumber) {
        case 1:
            formPage1.style.display = 'block';
            formPage2.style.display = 'none';
            formPage3.style.display = 'none';
            formPage4.style.display = 'none';
            formPage5.style.display = 'none';
            progressBar.value = 10;
            break;

        case 2:
            formPage1.style.display = 'none';
            formPage2.style.display = 'block';
            formPage3.style.display = 'none';
            formPage4.style.display = 'none';
            formPage5.style.display = 'none';
            progressBar.value = 30;
            break;

        case 3:
            formPage1.style.display = 'none';
            formPage2.style.display = 'none';
            formPage3.style.display = 'block';
            formPage4.style.display = 'none';
            formPage5.style.display = 'none';
            progressBar.value = 60;
            break;
        case 4:
            formPage1.style.display = 'none';
            formPage2.style.display = 'none';
            formPage3.style.display = 'none';
            formPage4.style.display = 'block';
            formPage5.style.display = 'none';
            progressBar.value = 90;
            updateSummary();
            break;
        case 5:;
            formPage1.style.display = 'none';
            formPage2.style.display = 'none';
            formPage3.style.display = 'none';
            formPage4.style.display = 'none';
            formPage5.style.display = 'block';
            progressBar.value = 100;
            break;
        default:
            break;
    }
}


function getFormData() {
    const birthday = document.getElementById("birthday").value;
    const adults = document.getElementById("adults").value;
    const children = document.getElementById("children").value;
    const contactName = document.getElementById("contactName").value;
    const emailAddress = document.getElementById("emailAddress").value;
    const ticketColor = document.getElementById("colour").value;
    const storage = document.querySelector('input[name=storage]:checked').value;
    
    


    return data = {
        birthday: birthday,
        adults: adults,
        children: children,
        contactName: contactName,
        emailAddress: emailAddress,
        ticketColor: ticketColor,
        storage: storage
    };
}

function updateSummary() {
    const data = getFormData();
    summaryBirthday.innerHTML = data.birthday;
    summaryName.innerHTML = data.name;
    summaryAdults.innerHTML = data.adults;
    summaryChildren.innerHTML = data.children;
    summaryName.innerHTML = data.contactName;
    summaryAddress.innerHTML = data.emailAddress;
     summaryColour.innerHTML = data.ticketColor;
    summaryStorage.innerHTML = data.storage;
    
}

function submitData() {
    const data = getFormData();
    const dataRow = document.createElement("tr");
    const cellBirthday = document.createElement("td");
    const cellAdults = document.createElement("td");
    const cellChildren = document.createElement("td");
    const cellContactName = document.createElement("td");
    const cellEmailAddress = document.createElement("td");
    const cellTicketColor = document.createElement("td");
    const cellStorage = document.createElement("td");


    dataRow.appendChild(cellBirthday);
    dataRow.appendChild(cellAdults);
    dataRow.appendChild(cellChildren);
    dataRow.appendChild(cellContactName);
    dataRow.appendChild(cellEmailAddress);
     //dataRow.appendChild(cellTicketColor);
    dataRow.appendChild(cellStorage);

    cellBirthday.textContent = data.birthday;
    cellAdults.textContent = data.adults;
    cellChildren.textContent = data.children;
    cellContactName.textContent = data.contactName;
    cellEmailAddress.textContent = data.emailAddress;
    cellTicketColor.textContent = data.ticketColor;
    cellStorage.textContent = data.storage;


    document.getElementById("collected-data").appendChild(dataRow);

    showPage(1);
}