	spUtil.recordWatch($scope, "NOME_DA_TABELA", "sys_id=1132151651651", function(name, data) {
		c.server.update();
		spUtil.update($scope);
	});
