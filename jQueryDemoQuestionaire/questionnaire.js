var questionnaire = (function questionnaire() {
    var templateAnswerDiv = null;
    var templateQuestionDiv = null;
    var uniqueId = 1;

    var init = function () {
        templateAnswerDiv = $(".answertext").clone();
        $(document).on("click", ".addnextanswerbutton", function () {
            var question = $(this).parent(); 
            var nextAnswerDiv = templateAnswerDiv.clone();
            var nextAnswerId = nextAnswerDiv.find("input").attr("name") + uniqueId++;
            nextAnswerDiv.find("input").attr("name", nextAnswerId);
            question.append(nextAnswerDiv);
            question.append(this);
        });
        
        templateQuestionDiv = $(".question").clone();
        $("#addNextQuestionButton").click(function () {
            var questions = $(document).find("ol"); 
            var nextQuestionDiv = templateQuestionDiv.clone();
            
            var nextQuestionId = $(nextQuestionDiv[0]).attr("id") + uniqueId++;
            $(nextQuestionDiv[0]).attr("id", nextQuestionId);
            
            
            questions.append(nextQuestionDiv);
        });
    };

    return {
        init: init
    };
})();

$(document).ready(function () {
    questionnaire.init();
});