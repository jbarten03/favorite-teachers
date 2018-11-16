'use strict';

var teacher_list = [];
var Teacher = function(teacher){
    this.image = teacher.image;
    this.name = teacher.name;
    this.teacher_id = teacher.teacher_id;
    this.subjects = teacher.subjects;
}

Teacher.prototype.toHtml = function(){
    var source = $('#teacher-template').text();
    var template = Handlebars.compile(source);
    return template(this);
};

teachers.forEach(function(teacher){
    teacher_list.push(new Teacher(teacher));
});

teacher_list.forEach(function(teacher){
    $('#teacher-listings').append(teacher.toHtml());
});