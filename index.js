	/* INICIO FUNÇÕES PAGINAÇÃO*/  
	c.numberPage = 1;
	c.perPage = 5;
	c.totalPages = c.data.totalRecords;
	c.totalPage = Math.ceil(c.totalPages / c.perPage);
	c.pagination = 0;
	c.start = 0;
	c.end = 0;
	s.n_paginations = [];
	for(var i = 0; i < c.totalPage; i++){
		s.n_paginations.push(i + 1)
	}	

	//Functions Paginated
	s.nextPage = function(){
		c.numberPage++;
		var lastPage = c.numberPage > c.totalPage;
		if(lastPage){
			c.numberPage--;
		}
		updateList();
	}

	s.goToPage = function(page){
		c.numberPage = page;
		updateList();
	}

	s.prevPage = function(){
		c.numberPage--;
		if(c.numberPage < 1){
			c.numberPage++;
		}
		updateList();
	}

	function updateList(){
		c.pagination = c.numberPage - 1;
		c.start = c.pagination * c.perPage;
		c.end = c.start + c.perPage > c.totalPages ? c.end = c.totalPages : c.start + c.perPage;
		s.instances = c.data.instances.slice(c.start, c.end);	
	}
	updateList();

	$scope.searchChaged = function(item){
		s.search = item.value;
		if(item){
			s.instances = c.data.instances;
		}else{
			updateList();
		}
	}
	/*FIM FUNÇÕES PAGINAÇÃO*/ 
