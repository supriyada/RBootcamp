#* Abraham
#* Beatrice
#* Cory
* Dinah
* Eric
* Felicia

students <- c("Abraham","Beatrice","Cory","Dinah","Eric","Felicia")
print(students)

all_students <- function (class){
  print(Sys.Date())
  for (student in class){
    lock_combination <- sample(33,3)
    
    
    if(substr(student,2,2) == 'e'){
      lock_combination <- sample(33:66, 3)
    }
    print(lock_combination)
    print(student)
  }
}

all_students(students)