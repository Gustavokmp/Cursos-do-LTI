var app = angular.module("Oficina",['ngMaterial']);

	app.controller("Controlador",function($scope){
		$scope.mensagem = "ola mundo";
		$scope.contatos = [];
		$scope.adicionaUm = function(){
			var pessoaTemp = angular.copy($scope.pessoa);
			$scope.contatos.push(pessoaTemp);
			$scope.pessoa = {};
		}
	})