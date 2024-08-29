
export class CourseService{
    private course:string[]=["Core Java","MySQL","HTML","CSS","JS","Advanced Java","Hibernate","Spring Core","Spring Boot","Angular 16","AWS","Docker"];

    getCourse(){
        return this.course;
    }

}