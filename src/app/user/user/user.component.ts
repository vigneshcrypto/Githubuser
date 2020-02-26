import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
	userList = [];
	userRepoList = [];
	constructor(private userService : UserService) { }

	ngOnInit() {
		this.getUsers()
	}

	getUsers(){
		// getUserList
		let query = '?per_page=10';
		this.userService.getUserList(query).subscribe(response=>{
		console.log(response);
		})
	}

	getUserRepos(userName){
		let query = '?per_page=10';
		this.userService.getUserRepoList(query,userName).subscribe(response=>{
			console.log(response);
		})
	}

}
