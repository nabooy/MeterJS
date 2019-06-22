function addMeter(value, maxValue, className, valueInMeter, color){
	var GetLossMeter = maxValue - value;
	var GetLossMeter_InProcent = (GetLossMeter / maxValue) * 100;
	var GetLossMeter_ToMeter = Math.round(100 - GetLossMeter_InProcent);
	var a = '<div class="meter-default-style">';
	var c = '<div class="MeterBarText_Inside">';
	var htmlEnd = '</em></div></div></div>';
	if(value < 0){
		var b = '<div class="meter-default-style-bar" style="width:0%; background-color:'+color+';">';
		if(valueInMeter == 0){
			var d = '<em>0/'+maxValue+'(0%)';
		} else if(valueInMeter == 1){
			var d = '<em>0/'+maxValue;
		} else if(valueInMeter == 2){
			var d = '<em>(0%)';
		}	
		var htmlAll = a+b+c+d+htmlEnd;
	} else {
		var b = '<div class="meter-default-style-bar" style="width:'+GetLossMeter_ToMeter+'%; background-color:'+color+';">';
		if(valueInMeter == 0){
			var d = '<em>'+value+'/'+maxValue+'('+GetLossMeter_ToMeter+'%)';
		} else if(valueInMeter == 1){
			var d = '<em>'+value+'/'+maxValue;
		} else if(valueInMeter == 2){
			var d = '<em>('+GetLossMeter_ToMeter+'%)';
		}
		var htmlAll = a+b+c+d+htmlEnd;
	}
	if(value > maxValue){
		$(className).html('Стойността не може да е по-голяма от максиламаната!');
	} else {
		$(className).html(htmlAll);
	}
}