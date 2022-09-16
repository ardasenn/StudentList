const dataInputs = document.querySelectorAll(".data > input")
const btn = document.querySelector(".button > button")
const dataRadio = document.querySelectorAll(".radio-buttons input")




btn.addEventListener("click", (e) => {
createBox(...dataInputs,...dataRadio)
})



const createBox = (...arr) => {
  console.log(arr);
    //box skeleton
    let box = document.createElement("div")
    box.classList.add("box")
    //Fullname
    let fullName = document.createElement("div")
    fullName.classList.add("full-name")
    let nameText = document.createElement("h3")
    nameText.innerText=arr[0].value +" "+ arr[1].value
    fullName.append(nameText)
    box.append(fullName)
    //box data
    let boxData = document.createElement("div")
    boxData.classList.add("box-data")
    //course
    let courseContainer = document.createElement("div")
    courseContainer.classList.add("course-container")
    let courseLabel = document.createElement("div")
    courseLabel.classList.add("course-label")
    courseLabel.innerText="Kurs :"
    let courseData = document.createElement("div")
    courseData.classList.add("course-data")
    courseData.innerText=arr[2].value
    courseContainer.append(courseLabel,courseData)
     //teacher
     let teacherContainer = document.createElement("div")
     teacherContainer.classList.add("teacher-container")
     let teacherLabel = document.createElement("div")
     teacherLabel.classList.add("teacher-label")
     teacherLabel.innerText="Eğitmen :"
     let teacherData = document.createElement("div")
     teacherData.classList.add("teacher-data")
     teacherData.innerText=arr[3].value
     teacherContainer.append(teacherLabel,teacherData)
      //active
    let activeContainer = document.createElement("div")
    activeContainer.classList.add("active-container")
    let activeLabel = document.createElement("div")
    activeLabel.classList.add("active-label")
    activeLabel.innerText="Hesap Durumu :"
    let activeData = document.createElement("div")
    activeData.classList.add("active-data")
    activeData.innerText=arr[4].checked ? "Aktif" : "Inaktif"
    activeContainer.append(activeLabel,activeData)
    boxData.append(courseContainer,teacherContainer,activeContainer)
    //xclose
    let closeBtn=document.createElement("div")
    closeBtn.classList.add("box-close")
    let img=document.createElement("img")
    img.src="src/img/81-817805_letter-x-png-free-download-x-icon-red.png"
    img.style.height="25px"
    closeBtn.append(img)
    closeBtn.addEventListener("click",()=>{
      box.classList.add("remove")
    })    

    box.append(closeBtn,boxData)
    let container = document.querySelector(".box-container")
    container.append(box)   
    
}