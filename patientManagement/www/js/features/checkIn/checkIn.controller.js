angular
    .module('patientManagement.checkIn')
    .controller('CheckInCtrl', CheckInCtrl);

function CheckInCtrl(patients) {
    var vm = this;

    console.log("checkInCtrl");

    vm.patientInfo = {
        firstName: '',
        lastName: '',
        dob: ''
    }

    vm.continue = function () {
        var patient = new patients.Patient(
            vm.patientInfo.firstName,
            vm.patientInfo.lastName,
            vm.patientInfo.dob

        );

        patients.patients.push(patient);

        console.log("patients array: ", patients.patients);
    }
}