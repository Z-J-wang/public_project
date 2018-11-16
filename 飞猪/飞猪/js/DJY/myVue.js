$(function(){
	var vm_2 = new Vue({
			el:'#YHGL',
			data:{
				id:'',
				username:'',
				userpwd:'',
				Email:'',
				phone:'',
				user:[
				{id:1,username:"aaa",userpwd:"123",Email:"1356573672@qq.com",phone:"18207680077"},
				{id:2,username:"aaa",userpwd:"123",Email:"1356573672@qq.com",phone:"18207680077"},
				{id:3,username:"aaa",userpwd:"123",Email:"1356573672@qq.com",phone:"18207680077"},
				{id:4,username:"aaa",userpwd:"123",Email:"1356573672@qq.com",phone:"18207680077"},
				{id:5,username:"aaa",userpwd:"123",Email:"1356573672@qq.com",phone:"18207680077"}
				]
			},
			methods:{
				removeTask: function(task){ //删除任务
	           //指向Vue实例中的tasks
	           _tasks = this.user;
	           //remove
	           _tasks.forEach(function(item, index){
	             if(item.id == task.id){
	               _tasks.splice(index, 1);
	             }
	           })
	        },
	        add(){
					this.user.push({id:this.id,username:this.username,userpwd:this.userpwd,Email:this.Email,phone:this.phone});
				}
	
			}
		})
	
})

$(function(){
	var vm = new Vue({
		el:'#DDGL',
		data:{
			id:'',
			XDTime:'',
			num:'',
			statue:'',
			DD:[
			{id:1,XDTime:"2018-10-17 12:00",num:3,statue:"完成"},
			{id:2,XDTime:"2018-10-17 12:00",num:3,statue:"完成"},
			{id:3,XDTime:"2018-10-17 12:00",num:3,statue:"完成"},
			{id:4,XDTime:"2018-10-17 12:00",num:3,statue:"完成"}
			]
		},
		methods:{
			removeTask: function(task){ //删除任务
           //指向Vue实例中的tasks
           _tasks = this.DD;
           //remove
           _tasks.forEach(function(item, index){
             if(item.id == task.id){
               _tasks.splice(index, 1);
             }
           })
        },
        add(){
				this.DD.push({id:this.id,XDTime:this.XDTime,num:this.num,statue:this.statue});
			}

		}
	})
})
