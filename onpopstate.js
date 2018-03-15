window.onpopstate = function (event) {
   console.log('iii');
 var variable_for_click;
                                        
										
									switch(event.state) {
										case 'http://www.joyforchild.com/ice/index.php':
										 modell_state=model_state.ind;
										  variable_for_click =$('[class~=dog_main]')
										break;
										case 'http://www.joyforchild.com/ice/login.php':
										 functionnn='login';
										 params=[];
										break;
										case 'http://www.joyforchild.com/ice/dog_main.php':
									     modell_state=model_state.dogm; //?????????????????????????????????????
										 console.log(model_state);	
										// variable_for_click =$('[class~=dog_main]')
										          variable_for_click             =$(".dog_main")
console.log(variable_for_click);										 
										
										break;
										case'http://www.joyforchild.com/ice/flexi.php?vid='+mm:
										 functionnn='flexi';
										 params=[event.state, mm];
										break;
										case 'http://www.joyforchild.com/ice/flexi-tovari.php?q='+rr:
										 functionnn='get_flexi';
										 params=[event.state, rr,qq];
										break;
							
										}
								                                                                    
                                 
                                                var model = new ListModel(model_state);
												view = new ListView(model, {
                                                      'list': $('header'),
		                                               'addButton': variable_for_click            
                                                    });
                                                 new ListController(model, view);
										if (modell_state==model_state.ind){view.innnn(); }					}