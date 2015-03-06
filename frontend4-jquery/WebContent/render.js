function Renderer() {
	this.questionTemplate = null;
	this.answerTemplate = null;
}

Renderer.prototype.loadTemplate = function(fileName, callback) {
	var renderer = this;
	$.get(fileName, function(data) {
		renderer.initTemplate(data);
		callback();
	});
};

/**
 * Initializes the renderer with the given template file
 * 
 * @param template The template file as a string
 * @private
 */
Renderer.prototype.initTemplate = function(template) {
	this.doc = $(template);
	this.questionnaire = this.doc.find('.questionnaire');
	this.answerTemplate = this.questionnaire.find('.answer').remove().clone();
	this.questionTemplate = this.questionnaire.find('.question').remove().clone();
};

/**
 * Renders the questionnaire
 * 
 * @param questionnaire
 *            The HTMLElement or jQuery Object of the questionnaire form
 */
Renderer.prototype.render = function(questionnaire) {
	var renderer = this;
	$(questionnaire).find('.question').each(function(idx, question) {
		renderer.addQuestion($(question));
	});
};

/** Returns the rendered result as a string containing HTML */
Renderer.prototype.getResultHtml = function() {
	return this.doc.html();
};

/**
 * Adds a question to this renderer for rendering.
 * 
 * @abstract
 * @private
 */
Renderer.prototype.addQuestion = function(questionElement) {
};

function PrintRenderer() {
}

PrintRenderer.prototype = new Renderer();
PrintRenderer.prototype.constructor = Renderer;

PrintRenderer.prototype.addQuestion = function(questionElement) {
	var renderer = this;
	var rendered = this.questionTemplate.clone();
	var q = rendered.find('.questiontext');
	q.text(questionElement.find('input[name="questiontext"]').val());
	questionElement.find('.answer > input').each(function(idx, answerInput) {
		var a = renderer.answerTemplate.clone();
		a.find('.answertext').text($(answerInput).val());
		rendered.append(a);
	});
	this.questionnaire.append(rendered);
};
