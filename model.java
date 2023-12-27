package com.example.demo.model;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Infomation")
public class model 
{
	@Id
	private int courseid;
    private String coursename;
    private String studentname;
    private String studentemail;
    private String enrollmentdate;
    private String duration;
    
    
	
	public int getCourseid() {
		return courseid;
	}



	public void setCourseid(int courseid) {
		this.courseid = courseid;
	}



	public String getCoursename() {
		return coursename;
	}



	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}



	public String getStudentname() {
		return studentname;
	}



	public void setStudentname(String studentname) {
		this.studentname = studentname;
	}



	public String getStudentemail() {
		return studentemail;
	}



	public void setStudentemail(String studentemail) {
		this.studentemail = studentemail;
	}



	public String getEnrollmentdate() {
		return enrollmentdate;
	}



	public void setEnrollmentdate(String enrollmentdate) {
		this.enrollmentdate = enrollmentdate;
	}



	public String getDuration() {
		return duration;
	}



	public void setDuration(String duration) {
		this.duration = duration;
	}



	public model(int courseid, String coursename, String studentname, String studentemail, String enrollmentdate,
			String duration) {
		super();
		this.courseid = courseid;
		this.coursename = coursename;
		this.studentname = studentname;
		this.studentemail = studentemail;
		this.enrollmentdate = enrollmentdate;
		this.duration = duration;
	}



	public model()
	{
		
	}
	
	
}