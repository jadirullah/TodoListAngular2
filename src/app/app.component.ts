import { Component } from '@angular/core';

interface Task{
	 title: string,
	 is_canceled: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'To Do List App With Angular';

  tasks : Array<Task>=[
  	{
  		title :"Ngaji",
  		is_canceled :false
  	},
  	{
  		title :"Ngoding",
  		is_canceled :false
  	},
  	{
  		title :"Jalan-Jalan",
  		is_canceled :false
  	}
  ];

  clearTodo(){
  	let do_delete =confirm("Are you sure to delete the task ? ");
  	if(do_delete){
  		this.tasks.splice(0);
  	}
  }

  addTask(value: string){
  	this.tasks.push(
	  	{
	  		title:value,
	  		is_canceled: false
	  	}
  	)
  }

  cancelTask(idx: number){

  	console.log(idx);

  	if(this.tasks[idx].is_canceled){
  		this.tasks[idx].is_canceled=false;
  	}else{
  		this.tasks[idx].is_canceled=true;
  	}
  }

  deleteTask(idx: number){
  	let do_delete =confirm("Are you sure to delete the task ? ");
  	if(do_delete){
  		this.tasks.splice(idx, 1);
  	}
  }


}
