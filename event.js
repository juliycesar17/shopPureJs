function Event (sender) {
    this._sender = null;
    this._sender = sender;
    this._listeners = []; 
}

Event.prototype = {

    attachd: function (listener) { 
		this._listeners.push(listener);
    },

    notify: function (args) {
                var arr = this._listeners.length;
                for ( var i = 0; i < arr; i += 1 ) { 
                     this._listeners[i]( this._sender,args); 
            }
    }
};