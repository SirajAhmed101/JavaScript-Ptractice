const btn = document.querySelector("#btn1")
btn.addEventListener('click', grossSalary)

const empId = Math.floor(Math.random() * 100000);

const empNameBox = document.querySelector('#emplyeeName');
const basicSalary = document.querySelector('#empSalary')

let empNameValue = empNameBox.value
let empBasicSalary = +basicSalary.value




const empID = document.getElementById('empId');
const eBasicSalary = document.getElementById('basicSalary');
const empName = document.getElementById('empName')
const emaDa = document.getElementById('empDaInPer')
const emaDaInRs = document.getElementById('empDaInRs')
const emaHra = document.getElementById('empHraInper')
const emaHraIs = document.getElementById('empHraInRs')
const emaGrossSalary = document.getElementById('empGrossSalary')


// console.log(empBasicSalary)

function calSalary(d, h) {


    let da = d;
    let hra = h;
    let daInRs = empBasicSalary * da / 100;
    let hraInRs = empBasicSalary * hra / 100;
    let totalSalary = empBasicSalary + daInRs + hraInRs

    empID.innerText = empId
    empName.innerText = empNameValue
    eBasicSalary.innerText = `${empBasicSalary} Rs`
    emaDa.innerText = `${da}%`
    emaDaInRs.innerText = `${daInRs}Rs`
    emaHra.innerText = `${hra}%`
    emaHraIs.innerText = `${hraInRs}Rs%`
    emaGrossSalary.innerText = `${totalSalary} Rs`


    console.log(empBasicSalary)



}

function grossSalary() {
    // let empIdValue = empID.value
    // let empNameValue = empNameBox.value
    // let empBasicSalary = +basicSalary.value

    if (empBasicSalary >= 10000 && empBasicSalary <= 20000) {
        calSalary(5, 0);


    } else if (empBasicSalary >= 20000 && empBasicSalary <= 30000) {
        calSalary(5, 5);




    } else if (empBasicSalary >= 30000 && empBasicSalary <= 40000) {
        calSalary(10, 5);




    } else if (empBasicSalary >= 40000 && empBasicSalary <= 50000) {
        calSalary(15, 10);




    } else if (empBasicSalary >= 50000) {
        calSalary(15, 15);




    } else {
        alert("Invalid Salary Amount")
    }

}

function printBill() {
    document.getElementById('empSalary').style.display = "none";
    document.getElementById('emplyeeName').style.display = "none";
    document.getElementById('btn1').style.display = "none";
    document.getElementById('btn2').style.display = "none";
    print()
}