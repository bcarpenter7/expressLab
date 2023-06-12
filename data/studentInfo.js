const studentInfo = [
    {name: 'Bennett Carpenter', age: 26, id: 1},
    {name: 'Sarah Carpenter', age: 25, id: 2},
    {name: 'Caitey Ronan', age: 24, id: 3}
]

module.exports = {
    getAll: function() {
        return studentInfo
    },

    getOne: function(id) {
        let curStudent = studentInfo.find(student => student.id === parseInt(id))
        console.log(curStudent)
        return curStudent
    }
}