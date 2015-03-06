var questionnaire = (function questionnaire() {
	var questionTemplate = null;
	var answerTemplate = null;
	var formState = null;
	
	var fillTemplates = function () {
		questionTemplate = $('.question').clone();
		answerTemplate = $('.answer').clone();
	};
	
	var createCloneWithIds = function(template) {
		var retval = template.clone();
		retval.find('input').each(function(idx, input) {
			input.id = formState.generateUUID();
		});
		return retval;
	};
	
	var newAnswer = function() {
		var answer = createCloneWithIds(answerTemplate);
		$(this).before(answer);
	};

	var newQuestion = function() {
		var question = createCloneWithIds(questionTemplate);
		$(this).parent().children('ol').append(question);
	};
	
	var deleteAnswer = function(event) {
		event.preventDefault();
		$(event.target).parent().remove();
	};
	
	var print = function() {
		var renderer = null;
		renderer = new PrintRenderer();
		renderer.loadTemplate('printtemplate.html', function() {
			renderer.render($('.questionnaire'));
			var wnd = window.open("about:blank", "", "_blank");
			wnd.document.write(renderer.getResultHtml());
			wnd.print();
		});
	};
	
	var download = function() {
		function downloadURI(uri, name) {
			var link = document.createElement("a");
			link.download = name;
			link.href = uri;
			link.click();
		}
		//TODO create a form renderer and an outer template html!
		var renderer = new PrintRenderer();
		renderer.loadTemplate('printtemplate.html', function() {
			renderer.render($('.questionnaire'));
			downloadURI('data:text/html,' + renderer.getResultHtml(), 'questionnaire-export.html');
		});
	};
	
	var save = function() {
		formState.save($('.questionnaire'));
	};
	
	var load = function() {
		formState.load($('.questionnaire'));
	};
	
	var clear = function() {
		var question = createCloneWithIds(questionTemplate);
		$('.questionnaire ol').empty().append(question);
	};
	
	var init = function() {
		fillTemplates();
		formState = new FormState();
		load();
		$('.newquestion').click(newQuestion);
		$(document).on('click', '.newanswer', newAnswer);
		$(document).on('click', '.deleteanswer', deleteAnswer);
		$('.printrender').click(print);
		$('.downloadrender').click(download);
		$('button.save').click(save);
		$('button.clear').click(clear);
	};
	
	return {
		"init": init
	};
})();

$(document).ready(function startup() {
	questionnaire.init();
});	


