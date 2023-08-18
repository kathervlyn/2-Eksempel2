function noLayout() {
    document.getElementById("Layouts").classList.value = '';
}

function horizontalLayout() {
    noLayout();
    document.getElementById("Layouts").classList.add('horizontal');
}

function verticalLayout() {
    noLayout();
    document.getElementById('Layouts').classList.add('vertical');
}

function gridLayout() {
    noLayout();
    document.getElementById('Layouts').classList.add('grid');
}


function VerktøyButton() {
    Blank();
    document.getElementById('VerktøyTagg').innerHTML = /*HTML*/`

<div>
    <div class="InnerCard">
        De to verktøyene vi skal bruke er disse:
        <ul>
            <li>

                Koderedigeringsprogrammet
                <a href="https://code.visualstudio.com/" target="_new">
                    Visual Studio Code </a>
                <br />
                Vi skal bruke noen <i>Extentions</i>
                <ul>
                    <li>JavaScript-Booster</li>
                    <li>es6-string-html</li>
                    <li>live-server</li>
                    <li>live-share</li>
                </ul>
            <li>Nettleseren</li>
            <li><a href="https://www.google.com/intl/no/chrome/" target="_new">
                    Google Chrome</a>
            </li>
        </ul>
    </div>
</div>
</div>
    `;
}



function HTMLButton() {
    Blank();
    document.getElementById('HTMLTagg').innerHTML = /*HTML*/`

        <div>
            <div class="InnerCard">
                Vi Bruker HTML til å definere et dokument
                <ul>
                    <li>
                        <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
                        <li>Tagger for grunnleggende formatering av tekst</li>
                        <li><code>&lt;div&gt;</code></li>
                        <li><code>&lt;input type="text"&gt;</code></li>
                        <li><code>&lt;button&gt;</code></li>
                        <li><a href="https://www.w3schools.com/html/default.asp" target="_new">
                            W3Schools HTMLTutorial</a>
                        </li>
                        <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">
                            3Schools HTML Reference</a>
                        </li>
                </ul>
            </div>
        </div>
    </div>
    `;
}



function CSSButton() {
    Blank();
    document.getElementById('CSSTagg').innerHTML = /*HTML*/`

<div>
    <div class="InnerCard">
        Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
        <ul>
            <li><tt>background-color</tt></li>
            <li><tt>color</tt></li>
            <li><tt>padding</tt></li>
            <li><tt>margin</tt></li>
            <li><tt>border</tt></li>
            <li><tt>text-align</tt></li>
            <li><tt>font-size</tt></li>
            <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a>
            </li>
            <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a>
            </li>
            <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
            </li>
            <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS
                    Reference</a>
            </li>
        </ul>
    </div>
</div>
</div>
`;
}



function JavaScriptButton() {
    Blank();
    document.getElementById('JavaScriptTagg').innerHTML = /*HTML*/`


    <div>
        <div class="InnerCard">
            Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende
            programmering
            ved
            å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
            <ul>
                <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt
                    på
                    Moodle.</li>
                <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                    Reference</a></li>

            </ul>
        </div>
    </div>
</div>

`;
}



function HodeKroppBenButton() {
    Blank();
    document.getElementById('HodeKroppOgBenTagg').innerHTML = /*HTML*/`
    <div id="head" class="bodyPart"></div>
    <div id="body" class="bodyPart"></div>
    <div id="legs" class="bodyPart"></div> `;
    selectHead1();
    selectBody1();
    selectLegs1();
}

function selectHead1() {
    document.getElementById('head').innerHTML = /*HTML*/`
<button onclick="selectHead4()">◀</button>
<img src="Img/head1.png" />
<button onclick="selectHead2()">▶</button> `;
}

function selectHead2() {
    document.getElementById('head').innerHTML = /*HTML*/`
<button onclick="selectHead1()">◀</button>
<img src="Img/head2.png" />
<button onclick="selectHead3()">▶</button>
`;
}

function selectHead3() {
    document.getElementById('head').innerHTML = /*HTML*/`
<button onclick="selectHead2()">◀</button>
<img src="Img/head3.png" />
<button onclick="selectHead4()">▶</button>
`;
}

function selectHead4() {
    document.getElementById('head').innerHTML = /*HTML*/`
<button onclick="selectHead3()">◀</button>
<img src="Img/head4.png" />
<button onclick="selectHead1()">▶</button>
`;
}

function selectBody1() {
    document.getElementById('body').innerHTML = /*HTML*/`
<button onclick="selectBody4()">◀</button>
<img src="Img/body1.png" />
<button onclick="selectBody2()">▶</button>
`;
}

function selectBody2() {
    document.getElementById('body').innerHTML = /*HTML*/`
<button onclick="selectBody1()">◀</button>
<img src="Img/body2.png" />
<button onclick="selectBody3()">▶</button>
`;
}

function selectBody3() {
    document.getElementById('body').innerHTML = /*HTML*/`
<button onclick="selectBody2()">◀</button>
<img src="Img/body3.png" />
<button onclick="selectBody4()">▶</button>
`;
}

function selectBody4() {
    document.getElementById('body').innerHTML = /*HTML*/`
<button onclick="selectBody3()">◀</button>
<img src="Img/body4.png" />
<button onclick="selectBody1()">▶</button>
`;
}

function selectLegs1() {
    document.getElementById('legs').innerHTML = /*HTML*/`
<button onclick="selectLegs4()">◀</button>
<img src="../Eksempel2/Img/legs1.png" />
<button onclick="selectLegs2()">▶</button>
`;
}

function selectLegs2() {
    document.getElementById('legs').innerHTML = /*HTML*/`
<button onclick="selectLegs1()">◀</button>
<img src="Img/legs2.png" />
<button onclick="selectLegs3()">▶</button>
`;
}

function selectLegs3() {
    document.getElementById('legs').innerHTML = /*HTML*/`
<button onclick="selectLegs2()">◀</button>
<img src="Img/legs3.png" />
<button onclick="selectLegs4()">▶</button>
`;
}

function selectLegs4() {
    document.getElementById('legs').innerHTML = /*HTML*/`
<button onclick="selectLegs3()">◀</button>
<img src="Img/legs4.png" />
<button onclick="selectLegs1()">▶</button>
`;
}



function Blank() {
    document.getElementById('VerktøyTagg').innerHTML = '';
    document.getElementById('HTMLTagg').innerHTML = '';
    document.getElementById('CSSTagg').innerHTML = '';
    document.getElementById('JavaScriptTagg').innerHTML = '';
    document.getElementById('HodeKroppOgBenTagg').innerHTML = '';
}