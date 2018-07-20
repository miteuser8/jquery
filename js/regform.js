$(function(){
    if(localStorage.getItem("students")==null){
        localStorage.setItem("students",JSON.stringify([]));
    }
    showRegistredStudents();
    dialog=$("#dialog").dialog({
        autoOpen:false,
        height:500,
        width:500,
        modal:true
    });
    
    
    $(".regstu").click(function(){
        dialog.dialog("open");
    });
    
    /*DATE PICKER*/
    $("#dob").datepicker({
        changeYear:true,
        changeMonth:true,
        maxDate:"0d"
    });
    $(".submit").click(function(){
        var isValid= $("#regform").validate({
        
    
        rules:{
            usn:{
                required:true, 
                minlength:10,
                maxlength:10
            },
            name:{
                required:true,
                minlength:5
                
                
                },
        email:{
                required:true,
                email:true
                
            } ,  
           mobile:{
                required:true,
               minlength:10,
              maxlength:10,
               number:true
                
            },
            course:{
                required:true,
                
                
            },  
             percentage:{
                required:true,
                 min:10,
                 max:100
                
                
            }    
        },
        messages:{
            usn:{
                required:'Usn cannot be empty',
                minlength:'Name must have 10 charecters',
                maxlength:'Name must have 10 charecters'
            },
           name:{
                required:'name cannot be empty',
               minlength:'Name must have 5 charecter'
               
            },
       email:{
                required:'email cannot be empty',
                
            },
             mobile:{
                required:'mobile cannot be empty',
                 minlength:'must have 10 numbers',
                  maxlength:'must have 10 numbers'
            },
             course:{
                required:'course cannot be empty',
                
            },
           percentage:{
                required:'percentage cannot be empty',
               min:"Not valid",
               max:"over qualified"
              
                
            },
            dob:{
            required:"Dob cannot be empty"
        }
                    
        }
    }).form();
        


   
if(isValid){
    var usn=$("#usn").val();
    var name=$("#name").val();
    var email=$("#email").val();
    var mobile=$("#mobile").val();
    var course=$("#course").val();
    var percentage=$("#percentage").val();
    var dob=$("#dob").val();
    $(".reset").click();
    student={
        "usn":usn,
        "name":name,
        "email":email,
        "mobile":mobile,
        "course":course,
        "percentage":percentage,
        "dob":dob
    }
    var students=getDataFromLocalStorage();
    students.push(student);
    updateLocalStorageData(students);
    showRegistredStudents();
    dialog.dialog("close");
    return false;
}
       
});
    /*End register from validation*/
    function showRegistredStudents(){
        var students=getDataFromLocalStorage();
        var data="";
        if(students.length==0){
            data="<h3>No students registerd yet...</h3>"
        }else{
            data+="<table id='regstudents'><thead><tr>";
            data+="<th>#</th>";
            data+="<th>USN</th>";
            data+="<th>Name</th>";
            data+="<th>Email</th>";
            data+="<th>Mobile</th>";
            data+="<th>Course</th>";
            data+="<th>Percentage</th>";
            data+="<th>DOB</th>";
            data+="</tr></thead>";
            for(var i=0;i<students.length;i++){
                var j = i + 1;
                data+="<tr>";
                data+="<td>"+j+"</td>";
                data+="<td>"+students[i].usn+"</td>";
                data+="<td>"+students[i].name+"</td>";
                data+="<td>"+students[i].email+"</td>";
                data+="<td>"+students[i].mobile+"</td>";
                data+="<td>"+students[i].course+"</td>";
                data+="<td>"+students[i].percentage+"</td>";
                data+="<td>"+students[i].dob+"</td>";
                data+="</tr>";
                }
            data+="</table>";
        }
        $("#contents").html(data);
        $("#regstudents").dataTable({
            "pagelength":2
        });
       
 
    }  
    function getDataFromLocalStorage(){
        var students=JSON.parse(localStorage.getItem("students"));
        return students;
    }
    function updateLocalStorageData(updatedStudentsArr){
        localStorage.setItem("students",JSON.stringify(updatedStudentsArr));
    }

    
     });


   