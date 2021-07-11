var questions = [{
	tamanhoPorcento: "10%",
	numQuestao: "1/10",
	numQuestao2: "Questão 1",
	question: "O que é investimento?",
	choices: ["Aplicar dinheiro em ações visando lucro futuro", "Aplicar dinheiro para conseguir dinheiro a curto prazo", "Investimento é uma forma de guarda dinheiro"],
	correctAnswer: 0
}, {
	tamanhoPorcento: "20%",
	numQuestao: "2/10",
	numQuestao2: "Questão 2",
	question: "Você sabe o que é Suitability?",
	choices: ["Uma técnica criada por corretoras pra padronizar investimentos", "Verificação à adequação do produto ao cliente", "Uma expressão em inglês para cálculos de porcentagens nos investimentos"],
	correctAnswer: 1
}, {
	tamanhoPorcento: "30%",
	numQuestao: "3/10",
	numQuestao2: "Questão 3",
	question: "Por que é importante fazer o “suitability”?",
	choices: ["Porque é assim que consiguirá aprender tecnicas de investimentos", "Porque vou mapear aonde estou investindo", "Porque é desta forma que se descobre o perfil do investidor"],
	correctAnswer: 2
}, {
	tamanhoPorcento: "40%",
	numQuestao: "4/10",
	numQuestao2: "Questão 4",
	question: "Qual tipo de investimento é considerado mais seguro?",
	choices: ["Investimento em ações de empresas", "Investimentos em fundos como poupança e tesouro direto", "Investimentos em bolsas de valores"],
	correctAnswer: 1
}, {
	tamanhoPorcento: "50%",
	numQuestao: "5/10",
	numQuestao2: "Questão 5",
	question: "O que é CDBs?",
	choices: ["Sigla em inglês para Credito distributivo bancario", "É uma sigla para uma taxa especial de investimentos ", "Uma forma de investimento ", "Certificado de Depósito Bancário"],
	correctAnswer: 3
}, {
	tamanhoPorcento: "60%",
	numQuestao: "6/10",
	numQuestao2: "Questão 6",
	question: "O que é CDI?",
	choices: ["Credito destinado a imoveis", "Certificado de Depósito Interbancário", "Uma sigla em inglês para uma taxa bancaria internacional", "Uma forma de investimento"],
	correctAnswer: 1
}, {
	tamanhoPorcento: "70%",
	numQuestao: "7/10",
	numQuestao2: "Questão 7",
	question: "O que significa 100% de rendimento de CDI?",
	choices: ["Significa que seu investimento tera rendimento de 100% do valor", "Siginifica que você atingiu 100% do seu rendimento no mês", "Siginifica que sua taxa anual de juros encima do investimento esta de 100% do vlor estabelecido pela instituição financeira"],
	correctAnswer: 0
}, {
	tamanhoPorcento: "80%",
	numQuestao: "8/10",
	numQuestao2: "Questão 8",
	question: "O que significa FGC?",
	choices: ["Sigla inglês para fundo de rembolso de dinheiro", "É nome para uma taxa de reembolso ao cliente ", "Uma sigla para Fundo Garantidor de Créditos"],
	correctAnswer: 2
}, {
	tamanhoPorcento: "90%",
	numQuestao: "9/10",
	numQuestao2: "Questão 9",
	question: "O que é investimentos de de renda variável?",
	choices: ["Um investimento onde temos uma renda fixa mais taxas de bonus", "Parecido com empréstimos, em que os investidores entregam uma quantia para o governo","São marcados pela oscilação frequente nos preços dos ativos"],
	correctAnswer: 0
}, {
	tamanhoPorcento: "100%",
	numQuestao: "10/10",
	numQuestao2: "Questão 10",
	question: "O tempo da aplicação interfere na rentabilidade?",
	choices: ["Sim, porque tende a obter uma taxa de juros maior na renda fixa", "Sim, porque tende a obter uma taxa de juros maior na renda variável", "Não, porque o tempo desvalozira o juros"],
	correctAnswer: 0
}];

var porcentagemQuestao = 0;

var numeroQuestao = 0;
var numeroQuestao2 = 0;
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

	// Display the first question
	displayCurrentQuestion();
	$(this).find(".quizMessage").hide();

	// On clicking next, display the next question
	$(this).find(".nextButton").on("click", function () {
		if (!quizOver) {

			value = $("input[type='radio']:checked").val();

			if (value == undefined) {
				$(document).find(".quizMessage").text("Por favor, selecione uma resposta!");
				$(document).find(".quizMessage").show();
			} else {
				// TODO: Remove any message -> not sure if this is efficient to call this each time....
				$(document).find(".quizMessage").hide();

				if (value == questions[currentQuestion].correctAnswer) {
					correctAnswers++;
				}

				porcentagemQuestao++;
				currentQuestion++; // Since we have already displayed the first question on DOM ready
				numeroQuestao++;
				numeroQuestao2++;

				if (currentQuestion < questions.length) {
					displayCurrentQuestion();
				} else {
					displayScore();
					//                    $(document).find(".nextButton").toggle();
					//                    $(document).find(".playAgainButton").toggle();
					// Change the text in the next button to ask if user wants to play again
					$(document).find(".nextButton").text("Repetir");
					quizOver = true;
				}
			}
		} else { // quiz is over and clicked the next button (which now displays 'Play Again?'
			quizOver = false;
			$(document).find(".nextButton").text("Próximo");
			resetQuiz();
			displayCurrentQuestion();
			hideScore();
		}
	});

	if (document.createElement('svg').getAttributeNS) {

		function createSVGEl(def) {
			var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			if (def) {
				svg.setAttributeNS(null, 'viewBox', def.viewBox);
				svg.setAttributeNS(null, 'preserveAspectRatio', def.preserveAspectRatio);
			} else {
				svg.setAttributeNS(null, 'viewBox', '0 0 100 100');
			}
			svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
			return svg;
		}

		function controlCheckbox(el, type, svgDef) {
			var svg = createSVGEl(svgDef);
			el.parentNode.appendChild(svg);

			el.addEventListener('change', function () {
				if (el.checked) {
					draw(el, type);
				} else {
					reset(el);
				}
			});
		}

		function controlRadiobox(el, type) {
			var svg = createSVGEl();
			el.parentNode.appendChild(svg);
			el.addEventListener('change', function () {
				resetRadio(el);
				draw(el, type);
			});
		}

		checkbxsCross.forEach(function (el, i) {
			controlCheckbox(el, 'cross');
		});
		radiobxsFill.forEach(function (el, i) {
			controlRadiobox(el, 'fill');
		});
		checkbxsCheckmark.forEach(function (el, i) {
			controlCheckbox(el, 'checkmark');
		});
		radiobxsCircle.forEach(function (el, i) {
			controlRadiobox(el, 'circle');
		});
		checkbxsBoxfill.forEach(function (el, i) {
			controlCheckbox(el, 'boxfill');
		});
		radiobxsSwirl.forEach(function (el, i) {
			controlRadiobox(el, 'swirl');
		});
		checkbxsDiagonal.forEach(function (el, i) {
			controlCheckbox(el, 'diagonal');
		});
		checkbxsList.forEach(function (el) {
			controlCheckbox(el, 'list', {
				viewBox: '0 0 300 100',
				preserveAspectRatio: 'none'
			});
		});

		function draw(el, type) {
			var paths = [],
				pathDef,
				animDef,
				svg = el.parentNode.querySelector('svg');

			switch (type) {
				case 'cross':
					pathDef = pathDefs.cross;
					animDef = animDefs.cross;
					break;
				case 'fill':
					pathDef = pathDefs.fill;
					animDef = animDefs.fill;
					break;
				case 'checkmark':
					pathDef = pathDefs.checkmark;
					animDef = animDefs.checkmark;
					break;
				case 'circle':
					pathDef = pathDefs.circle;
					animDef = animDefs.circle;
					break;
				case 'boxfill':
					pathDef = pathDefs.boxfill;
					animDef = animDefs.boxfill;
					break;
				case 'swirl':
					pathDef = pathDefs.swirl;
					animDef = animDefs.swirl;
					break;
				case 'diagonal':
					pathDef = pathDefs.diagonal;
					animDef = animDefs.diagonal;
					break;
				case 'list':
					pathDef = pathDefs.list;
					animDef = animDefs.list;
					break;
			};

			paths.push(document.createElementNS('http://www.w3.org/2000/svg', 'path'));

			if (type === 'cross' || type === 'list') {
				paths.push(document.createElementNS('http://www.w3.org/2000/svg', 'path'));
			}

			for (var i = 0, len = paths.length; i < len; ++i) {
				var path = paths[i];
				svg.appendChild(path);

				path.setAttributeNS(null, 'd', pathDef[i]);

				var length = path.getTotalLength();
				// Clear any previous transition
				//path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'none';
				// Set up the starting positions
				path.style.strokeDasharray = length + ' ' + length;
				if (i === 0) {
					path.style.strokeDashoffset = Math.floor(length) - 1;
				} else path.style.strokeDashoffset = length;
				// Trigger a layout so styles are calculated & the browser
				// picks up the starting position before animating
				path.getBoundingClientRect();
				// Define our transition
				path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'stroke-dashoffset ' + animDef.speed + 's ' + animDef.easing + ' ' + i * animDef.speed + 's';
				// Go!
				path.style.strokeDashoffset = '0';
			}
		}

		function reset(el) {
			Array.prototype.slice.call(el.parentNode.querySelectorAll('svg > path')).forEach(function (el) {
				el.parentNode.removeChild(el);
			});
		}

		function resetRadio(el) {
			Array.prototype.slice.call(document.querySelectorAll('input[type="radio"][name="' + el.getAttribute('name') + '"]')).forEach(function (el) {
				var path = el.parentNode.querySelector('svg > path');
				if (path) {
					path.parentNode.removeChild(path);
				}
			});
		}

	}

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

	console.log("In display current Question");
	
	var tamanhoPorcento = questions[porcentagemQuestao].tamanhoPorcento;
	var tamanhoPorcentoClass = $(document).find(".quizContainer > #porcentagem");

	var numQuestao = questions[numeroQuestao].numQuestao;
	var numQuestaoClass = $(document).find(".quizContainer > .numQuestion");
	var numQuestao2 = questions[numeroQuestao2].numQuestao2;
	var numQuestaoClass2 = $(document).find(".quizContainer > .numQuestion2");
	var question = questions[currentQuestion].question;
	var questionClass = $(document).find(".quizContainer > .question");
	var choiceList = $(document).find(".quizContainer > .choiceList");
	var numChoices = questions[currentQuestion].choices.length;


	$(tamanhoPorcentoClass).text(tamanhoPorcento);
	
	switch (porcentagemQuestao) {
		case 0:
			
			document.getElementById("porcentagem").style.width = "5%";

			break;
		
		case 1:
			
			 document.getElementById("porcentagem").style.width = "15%";
			break;
		
		case 2:
			
			 document.getElementById("porcentagem").style.width = "25%";

			break;

		case 3:
			
			 document.getElementById("porcentagem").style.width = "35%";

			break;

		case 4:
			
			 document.getElementById("porcentagem").style.width = "45%";

			break;

		case 5:
			
			 document.getElementById("porcentagem").style.width = "55%";

			break;
		
		case 6:
			
			 document.getElementById("porcentagem").style.width = "65%";

			break;

		case 7:
			
			 document.getElementById("porcentagem").style.width = "75%";

			break;

		case 8:
			
			 document.getElementById("porcentagem").style.width = "85%";

			break;

		case 9:
			
			 document.getElementById("porcentagem").style.width = "100%";

			break;
	
		default:
			break;
	};


	// Set the questionClass text to the current question
	$(numQuestaoClass).text(numQuestao);

	// Set the questionClass text to the current question
	$(numQuestaoClass2).text(numQuestao2);

	// Set the questionClass text to the current question
	$(questionClass).text(question);


	$(document).find(".finalizar-quiz").hide();

	// Remove all current <li> elements (if any)
	$(choiceList).find("li").remove();

	var choice;
	for (i = 0; i < numChoices; i++) {
		choice = questions[currentQuestion].choices[i];
		$('<li><input type="radio" value=' + i + ' id="dynradio' + i + '" name="dynradio" /><label for="dynradio' + i + '">' + choice + '</label></li>').appendTo(choiceList);
	}
}

function resetQuiz() {
	porcentagemQuestao = 0;
	numeroQuestao = 0;
	numeroQuestao2 = 0;
	currentQuestion = 0;
	correctAnswers = 0;
	$(document).find(".quizContainer > .numQuestion").show();
	$(document).find(".quizContainer > .numQuestion2").show();
	$(document).find(".question").show();
	$(document).find(".question").show();
	$(document).find(".choiceList").show();
	$(document).find(".voltar-inicio").show();
	$(document).find('.fim').hide();
	hideScore();
	
}

function displayScore() {
	$(document).find(".quizContainer > .numQuestion").hide();
	$(document).find(".quizContainer > .numQuestion2").hide();
	$(document).find(".question").hide();
	$(document).find(".quizContainer > .result").text("Você acertou " + correctAnswers + " de " + questions.length);
	$(document).find(".quizContainer > .result").show();
	$(document).find('.fim').show();
	$(document).find('.fim').text("Fim");
	$(document).find(".choiceList").hide();
	$(document).find(".voltar-inicio").hide();
	$(document).find(".finalizar-quiz").show();
}

function hideScore() {
	$(document).find(".result").hide();
}