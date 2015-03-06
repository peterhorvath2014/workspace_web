function FormState() {
	this.defaultKey = 'savedState';
}

FormState.prototype.generateUUID = function() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid;
};

FormState.prototype.save = function(form, storageKey) {
	storageKey = storageKey || this.defaultKey;
	form = $(form);
	localStorage[storageKey] = form.html();
	form.find('[id]').each(function(idx, element) {
		element = $(element);
		var id = element.attr('id');
		localStorage[id] = element.val();
	});
};

FormState.prototype.load = function(form, storageKey) {
	storageKey = storageKey || this.defaultKey;
	form = $(form);
	var state = localStorage[storageKey];
	if (state) {
		form.html(state).find('[id]').each(function(idx, element) {
			$(element).val(localStorage[element.id]);
		});
	}
};
