var creditCalc = document.getElementById('creditCalc');
var depositCalc = document.getElementById('depositCalc');
var ubanCalc = document.getElementById('ubanCalc');
var topBlank = document.getElementById('topBlank');
var topBlank0ld = document.getElementById('topBlank').style;
var Sec1ld = document.getElementById('Sec1').style;
var Sec2ld = document.getElementById('Sec2').style;
var Sec0ld = document.getElementById('Sec0').style;
var Sec0 = document.getElementById('Sec0');
var Sec1 = document.getElementById('Sec1');
var Sec2 = document.getElementById('Sec2');
$green = "#1C9754";
$white = "#FFFFFF";
$black = "#000000";
activeChk = 0;

function ShowCredit() {
	if (activeChk == 1) {
		Sec0.style = Sec0ld;
		Sec1.style = Sec1ld;
		Sec2.style = Sec2ld;
		ubanCalc.classList.add("CompVisible");
		depositCalc.classList.add("CompVisible");	
		setTimeout (function () {
			ubanCalc.classList.add("d-none");
			depositCalc.classList.add("d-none");
			topBlank.style = topBlank0ld;
			creditCalc.classList.remove("d-none");
			creditCalc.classList.remove("CompVisible");
		}, 1000);
		activeChk = 0;
	}
	else {

	}
}

function ShowDeposit() {
		Reset();
		creditCalc.classList.add("CompVisible");
		ubanCalc.classList.add("CompVisible");
		Sec2.style = Sec2ld;	
		Sec1.style.background = $green;
		Sec1.style.color = $white;
		Sec1.style.borderColor = "transparent";
		setTimeout (function () {
			creditCalc.classList.add("d-none");
			ubanCalc.classList.add("d-none");
			topBlank.style.marginTop = "7.1em";
			depositCalc.classList.remove("d-none");
			depositCalc.classList.remove("CompVisible");
		}, 1000);	
		activeChk = 1;
	}

function ShowUban() {
		Reset();
		Sec1.style = Sec1ld;
		Sec2.style.background = $green;
		Sec2.style.color = $white;
		Sec2.style.borderColor = "transparent";
		creditCalc.classList.add("CompVisible");
		depositCalc.classList.add("CompVisible");	
		setTimeout (function () {
			creditCalc.classList.add("d-none");
			depositCalc.classList.add("d-none");
			topBlank.style.marginTop = "7.7em";
			ubanCalc.classList.remove("d-none");
			ubanCalc.classList.remove("CompVisible");		
		}, 1000);	
		activeChk = 1;
	}


function Reset() {
		Sec0.style.background = "transparent";
		Sec0.style.color = $black;
		Sec0.style.border = "1px solid #E0E0E0";
}


/* Version: 1.0.7 - Last modified: 2020-02-17 17:48:10 */
String.prototype.simpleMaskStringCount=function(e){return(this.length-this.replace(new RegExp(e,"g"),"").length)/e.length},function(M){var n={mask:"",nextInput:null,onComplete:null},i=[],t={init:function(e){var t=M.extend({},n,e);return this.each(function(){M.fn.simpleMask.process(M(this),t)})},unmask:function(){return this.each(function(){M.fn.simpleMask.unmask(this)})}};M.fn.simpleMask=function(e){return t[e]?t[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void M.error("Method "+e+" does not exist on jQuery.SimpleMask"):t.init.apply(this,arguments)},M.fn.simpleMask.makeId=function(){for(var e="",t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789",n=t.length,s=0;s<8;s++)e+=t.charAt(Math.floor(Math.random()*n));return e},M.fn.simpleMask._onComplete=function(e){var t="object"==typeof e?M(e).attr("data-mask-ids"):e;null!==i[t].options.onComplete&&i[t].options.onComplete.call(this,i[t]),M.fn.simpleMask._nextInput(t)},M.fn.simpleMask.nextOnTabIndex=function(e){var n=M(e),s=!1,a=[];return n.closest("form").find("input,select").each(function(e){var t=M(this);if(s)return a=t,!1;t[0]==n[0]&&(s=!0)}),a},M.fn.simpleMask._nextInput=function(e){var t="object"==typeof e?M(e).attr("data-mask-ids"):e;if(null!==i[t].options.nextInput)if(!0===i[t].options.nextInput){var n=M.fn.simpleMask.nextOnTabIndex(i[t].element);0<n.length&&n.select().focus()}else 0<i[t].options.nextInput.length&&i[t].options.nextInput.select().focus()},M.fn.simpleMask.unmask=function(e){var t="object"==typeof e?M(e).attr("data-mask-ids"):e;M(i[t].element).removeClass("input-masked").removeAttr("data-mask-ids"),""===M(i[t].element).attr("class")&&M(i[t].element).removeAttr("class"),M(document).off("keyup.simpleMask change.simpleMask",'input[data-mask-ids="'+t+'"]'),M(document).off("keydown.simpleMask",'input[data-mask-ids="'+t+'"]')},M.fn.simpleMask.isNumber=function(e){return""!==e.replace(/\D/g,"")},M.fn.simpleMask.onlyNumbers=function(e){return e.replace(/\D/g,"")},M.fn.simpleMask.onlyNumbersLength=function(e){return e.replace(/\D/g,"").length},M.fn.simpleMask.applyMask=function(e,t){var n=e.element,s=M(n)[0],a=(s.selectionStart,s.selectionEnd),l=e.oldvalue,i=M(n).val(),o=M.fn.simpleMask.onlyNumbers(M(n).val()),r=e.masks[0],m=e.masks[e.masks.length-1].simpleMaskStringCount("#");o.length>m&&(o=o.substr(0,m));var p=o.length;for(var u in e.masks)if(e.masks[u].simpleMaskStringCount("#")==p){r=e.masks[u];break}if(0<o.length){for(var k=r,f=(o=o.trim()).length,c=0;c<f;c++)k=k.replace("#",o.charAt(c));var d=k.indexOf("#");-1!=d&&(k=k.substr(0,d));var h=k.substr(k.length-1,1);""===M.fn.simpleMask.onlyNumbers(h)&&(k=k.substr(0,d-1));for(var g=k.substr(k.length-1,1);0<k.length&&!1===M.fn.simpleMask.isNumber(g);)g=(k=k.substr(0,k.length-1)).substr(k.length-1,1);k!=i&&M(n).val(k),k!=l&&k.length==r.length&&k.length<=a&&k.length==e.maxlengthmask&&Number.isInteger(t)&&M.fn.simpleMask._onComplete(n.attr("data-mask-ids"))}else M(n).val("");e.oldvalue=M(n).val()},M.fn.simpleMask.process=function(e,t){for(var n=M.fn.simpleMask.makeId();void 0!==i[n];)n=M.fn.simpleMask.makeId();var s={};s.element=e,s.options=t,s.nextInput=t.nextInput,s.onComplete=t.onComplete,s.oldvalue=M(e).val();var a=[];for(var l in a="string"==typeof t.mask?[t.mask]:t.mask)switch(a[l].toLowerCase()){case"cpf":a[l]="###.###.###-##";break;case"cnpj":a[l]="##.###.###/####-##";break;case"cep":a[l]="#####-###";break;case"date":case"data":a[l]="##/##/####";break;case"telefone":case"tel":a[l]="####-####";break;case"telefone9":case"tel9":a[l]="####-####",a.push("#####-####");break;case"ddd-telefone9":case"ddd-tel9":a[l]="(##) ####-####",a.push("(##) #####-####")}s.masks=a,s.masks.sort(function(e,t){return e.length-t.length}),s.maxlengthmask=s.masks[s.masks.length-1].length,i[n]=s,e.attr("data-mask-ids",n).addClass("input-masked"),M(document).on("keyup.simpleMask change.simpleMask",'input[data-mask-ids="'+n+'"]',function(e){M.fn.simpleMask.applyMask(s,parseInt(e.key))}),M(document).on("paste",'input[data-mask-ids="'+n+'"]',function(e){var t=M(this);setTimeout(function(){t.keyup()},100)}),M(document).on("keydown.simpleMask",'input[data-mask-ids="'+n+'"]',function(e){e.ctrlKey||65<=e.keyCode&&e.keyCode<=90&&(e.metaKey||e.preventDefault())}),M.fn.simpleMask.applyMask(s)}}(jQuery);

$(document).ready
(
	function()
	{
		$('#ubanChk' ).simpleMask( { 'mask': '##-###-##########' } );
		$('#ubanClc' ).simpleMask( { 'mask': 'CT##-####-####-####-####-####-####' } );

		$('#frCallback').simpleMask
		(
			{
				'mask'       : '#####',
				'nextInput'  : true,
				'onComplete' : function(element)
				{
					console.log('onComplete', element);
				}
			}
		);
	}
);

