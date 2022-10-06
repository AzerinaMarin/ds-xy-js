function Queue(){
this.dataStore=[]
  this.top =5

  
  this.enqueue= function(element) {
	this.dataStore.push(element)
    }
    this.dequeue= function() {
	return this.dataStore.pop()
    }  
  this.empty= function(){
    	if (this.dataStore.length == 0)
	    return true	
	else 
	    return false
  }
  this.full= function() {
       if (this.data.length === this.top)
            return true
        else
            return false
  }
}

let q = new Queue()
q.enqueue("Mere")
q.enqueue("Oded")
q.enqueue("Ana")
q.enqueue("Bana")
q.enqueue("Hanna")