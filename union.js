function TrabajadoresController($scope){
	$scope.trabajadores=[
		{nombre:"Teresa Díaz", num:"TD012345", puesto:"Desarrolladora"},
		{nombre:"Addy Marisol", num:"AM123654", puesto:"Marketing"},
		{nombre:"Guillermo Tejeda", num:"GT987456", puesto:"Diseñador"},
		{nombre:"Juan Vazquez", num:"JV123987", puesto:"Tecnico"}
	];
	$scope.Save=function(){
		$scope.trabajadores.push({nombre:$scope.nuevoTrabajador.nombre, num:$scope.nuevoTrabajador.num, puesto:$scope.nuevoTrabajador.puesto,});
		$scope.formVisibility=false;
		console.log($scope.formVisibility);
	};

	$scope.formVisibility=false;

	$scope.ShowForm=function(){
		$scope.formVisibility=true;
		console.log($scope.formVisibility);
	};
}