// Your code here
function createEmployeeRecord(employeeInfo){
  return {
  firstName: employeeInfo[0],
  familyName: employeeInfo[1],
  title: employeeInfo[2],
  payPerHour: employeeInfo[3],
  timeInEvents:[],
  timeOutEvents:[]
  }
}

function createEmployeeRecords(recordArrays){
  return recordArrays.map(recordArray=>createEmployeeRecord(recordArray))
}

/*it("creates the correct type", function () {
        let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
        let updatedBpRecord = createTimeInEvent(bpRecord, "2014-02-28 1400")
        let newEvent = updatedBpRecord.timeInEvents[0]
        expect(newEvent.type).to.equal("TimeIn")
      })*/

function createTimeEvent(timeInObj){
  let 
}