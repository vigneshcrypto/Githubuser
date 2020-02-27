import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
	userList: any;
	userDataList = [];
	userRepoList: any;
	page;
	repoList = false;
	userName;
	sum = 10;
	throttle = 300;
	scrollDistance = 1;
	scrollUpDistance = 2;
	direction = '';
	searchKey;
	constructor(private userService: UserService) { }

	ngOnInit() {
		this.page = 0;
		this.getUsers()
	}

	getUsers() {
		// getUserList
		let count = this.page * 5;
		let query = '?since=' + count;

		this.userService.getUserList(query).subscribe(resp => {
			this.page ? resp.forEach(item => { this.userList.push(item) }) : (this.userList = resp ? resp : [])
			console.log(this.userList);
			this.userList.forEach(item => {
				this.getUserData(item.login)
			})

		})
	}

	getUserRepos(userName) {
		let query = '';
		this.userName = userName;
		this.repoList == false ? this.page = 1 : '';
		this.repoList = true;
		this.userService.getUserRepoList(query, userName).subscribe(response => {
			console.log(response);
			this.userRepoList = response ? response : [];
		})
	}

	searchUser(key) {
		if(key){
			let query = '?q=' + key + '&page=' + this.page + '&per_page=5';
			this.searchKey = key;
			this.userList = [];
			this.userDataList = [];
			this.userService.getSearchUserList(query).subscribe(response => {
				this.userList = response && response.items ? response.items : [];
				this.userList.forEach(item => {
					this.getUserData(item.login)
				})
			})
		}
		else{
			this.searchKey = '';
			this.getUsers()
		}
		
	}

	getUserData(name) {
		let data;
		let query = '';
		this.userService.getUserData(query, name).subscribe(response => {
			data = response;
			this.userDataList.push(data)
		})
	}

	onScroll() {
		this.page += 1;
		this.searchKey ? this.searchUser(this.searchKey) : this.getUsers();
	}

	back() {
		this.repoList = false;
		this.page = 1;
		this.getUsers();
	}


}
