let spellsound = new Audio("./sound/spell.mp3")
let restartsound = new Audio("./sound/arestart.mp3")
let welcomesound = new Audio("./sound/welcome.mp3")
let axesound = new Audio("./sound/axeswing.mp3")
let startsound = new Audio("./sound/startscreen.mp3")
let bluespellsound = new Audio("./sound/bluespell.mp3") 
let mainthemesound = new Audio("./sound/maintheme.mp3")
let laughsound = new Audio("./sound/laugh.mp3")

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
}


const SleppPromiseAfter = (sleepTime) => {
    return sleep(sleepTime).then(v => "")
}
var windowHeight = 0;
var windowWidth = 0;
function reportWindowSize() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
}
window.onresize = reportWindowSize;

var Last_Mouse_Position_X = 0;
var Last_Mouse_Position_Y = 0;


$(document).mousemove(function (event) {
    Last_Mouse_Position_X = event.pageX;
    Last_Mouse_Position_Y = event.pageY;
});

class Monster {
    loc_x = Math.floor(Math.random()*(window.innerHeight-200));
    loc_y = Math.floor(Math.random()* (window.innerWidth - 200));
    objHtml = '<div id="monster"></div>'
    MonsterIsDead = false;
    IsPaused = false;
    x_ArtışMiktarı = 25;
    y_ArtışMiktarı = 25;
    counter = 0;
    
    MonsterIsHitTheMouse = async _ => {

        // for (let index = 0; index < 1; index--) {

        //     await SleppPromiseAfter(10)

        //     this.counter += 10;
        //     if (this.counter > 3000) {
        //         if(IsPaused == true){
        //             collasiondetecter(this.loc_x, this.loc_y, Last_Mouse_Position_Y, Last_Mouse_Position_X)
        //         }
        //         if (this.MonsterIsDead == true) {
        //             break;
        //         }
        //     }



        // }
    }
    SetIsCollabsiable(Value) {
        this.IsCollabsiable = Value
    }
    MonsterRenderer = async _ => {
        // var x_ArtışMiktarı = 25;
        // var y_ArtışMiktarı = 25;
        for (let index = 0; index < 1; index--) {
            await SleppPromiseAfter(60)

            $('#monster').attr('style', 'px;top:' + this.loc_x + 'px;left:' + this.loc_y + 'px;')
            if (this.IsPaused == false) {
                $('#monster').attr('style', 'px;top:' + this.loc_x + 'px;left:' + this.loc_y + 'px;')
                if (this.x_ArtışMiktarı > 0) {
                    this.loc_x = this.loc_x + this.x_ArtışMiktarı + (Math.floor(Math.random() * 5) + 5);
                }
                else {
                    this.loc_x = this.loc_x + this.x_ArtışMiktarı - (Math.floor(Math.random() * 5) + 5);
                }
                if (this.y_ArtışMiktarı > 0) {
                    this.loc_y = this.loc_y + this.y_ArtışMiktarı + (Math.floor(Math.random() * 5) + 5);
                }
                else {
                    this.loc_y = this.loc_y + this.y_ArtışMiktarı - (Math.floor(Math.random() * 5) + 5);

                }
                if (this.loc_y >= window.innerWidth - 300) {
                    this.y_ArtışMiktarı = (this.y_ArtışMiktarı * -5);
                }
                if (this.loc_y <= 0) {
                    this.y_ArtışMiktarı = Math.floor(Math.random() * 10) + 15;
                }
                if (this.loc_x >= window.innerHeight - 300) {
                    this.x_ArtışMiktarı = (this.x_ArtışMiktarı * -5);
                }
                if (this.loc_x <= 0) {
                    this.x_ArtışMiktarı = Math.floor(Math.random() * 10) + 15;
                }

            }


            if (this.MonsterIsDead == true) {
                $('#monster').remove();
                break;
            }

        }

    }
    renderMonster() {
        $('body').append(this.objHtml)
     


        this.MonsterRenderer()
        this.MonsterIsHitTheMouse()
    }
    resetMonster() {
        this.x_ArtışMiktarı = 25;
        this.y_ArtışMiktarı = 25;
        this.loc_x = 0;
        this.loc_y = 0;
        this.counter = 0;
    }
    setLocation_X(Locatio) {
        this.loc_x = Locatio;
    }
    setLocation_Y(Lo) {
        this.loc_y = Lo;
    }
    killMonster() {
        this.MonsterIsDead = true;
    }
    getLocX() {
        return this.loc_x
    }
    getLocY() {
        return this.loc_y
    }
    PauseMonster() {
        this.IsPaused = true;
    }
    DisPauseMonster() {
        this.IsPaused = false;
    }
}
class Oyuncu {
    xCursorPosition = 0;
    yCursorPosition = 0;
    loc_x = 0;
    loc_y = 0;
    objHtml = '<div id="player"></div>'

    renderPlayer() {
        $('body').append(objHtml);
    }
    setLocation_X(Location) {
        this.loc_x = Location;
    }
    setLocation_Y(Location) {
        this.loc_y = Location;
    }



}

class Spell {
    loc_x = 0;
    loc_y = 0;
    angle = 0;
    SpellIsDead = false;
    spellID = 0;
    constructor(loc_x, loc_y, angle) {
        this.loc_x = loc_x;
        this.loc_y = loc_y
        this.angle = angle;
    }

    SpeelIsHitTheMouse = async _ => {
        for (let index = 0; index < 1; index--) {
            await SleppPromiseAfter(10)
            collasiondetecter(this.loc_x, this.loc_y, Last_Mouse_Position_Y, Last_Mouse_Position_X)
            if (this.SpellIsDead == true) {
                break;
            }
        }
    }
    SpellRenderer = async _ => {
        var y_ArtışMiktarı = 0;
        var x_ArtışMiktarı = 0;
        x_ArtışMiktarı = Math.floor(Math.random() * (50 - (-50))) + (-50);
        y_ArtışMiktarı = Math.floor(Math.random() * (50 - (-50))) + (-50);



        for (let index = 0; index < 1; index--) {
            $('div[id="spell"][spell_Id="' + this.spellID + '"]').attr('style', 'top:' + this.loc_x + 'px;left:' + this.loc_y + 'px;transform:rotate(' + this.angle + 'deg)')

            await SleppPromiseAfter(70)


            if (this.loc_y >= window.innerWidth) {
                this.spellIsDead = true
            }
            if (this.loc_y <= 0) {
                this.spellIsDead = true
            }
            if (this.loc_x >= window.innerHeight - 230) {
                this.spellIsDead = true
            }
            if (this.loc_x <= 0) {
                this.spellIsDead = true
            }






            this.loc_x = this.loc_x + x_ArtışMiktarı;
            this.loc_y = this.loc_y + y_ArtışMiktarı;


            if (this.spellIsDead == true) {
                $('div[id="spell"][spell_Id="' + this.spellID + '"]').remove()
                break;
            }
        }
    }

    KillSpell() {
        this.SpellIsDead = true;
    }


    renderspell() {
        this.spellID = $('div[id="spell"]').each(function () { }).length + 1
        //var spell = '<div id="spell" ></div>'
        $('body').append('<div id="spell" spell_Id="' + this.spellID + '" ></div>')
        $('div[id="spell"][spell_Id="' + this.spellID + '"]').attr('style', "transform:rotate(" + this.angle + "deg)")
        this.SpellRenderer();
        this.SpeelIsHitTheMouse();
    }
    setCurrentLocation(loc_x, loc_y) {
        $('#spell').attr('style', 'top:' + this.loc_x + 'px;left:' + this.loc_y + 'px;')
    }
    setLocation_X(LocatioS) {
        this.loc_x = LocatioS;
    }
    setLocation_Y(LoS) {
        this.loc_y = LoS;
    }
    getLocX() {
        return this.loc_x
    }
    getLocY() {
        return this.loc_y
    }

}

class blueSpell {
    loc_x = 0;
    loc_y = 0;
    angle = 0;
    blueSpellIsDead = false;
    bluespellID = 0;
    constructor(loc_x, loc_y, angle) {
        this.loc_x = loc_x;
        this.loc_y = loc_y
        this.angle = angle;
    }
    BlueSpellIsHitTheMouse = async _ => {
        for (let index = 0; index < 1; index--) {
            await SleppPromiseAfter(10)
            collasiondetecter(this.loc_x, this.loc_y, Last_Mouse_Position_Y, Last_Mouse_Position_X)
            if (this.blueSpellIsDead == true) {
                break;
            }
        }
    }
    blueSpellRenderer = async _ => {
        var y_ArtışMiktarı = 0;
        var x_ArtışMiktarı = 0;
        x_ArtışMiktarı = Math.floor(Math.random() * (50 - (-50))) + (-50);
        y_ArtışMiktarı = Math.floor(Math.random() * (50 - (-50))) + (-50);



        for (let index = 0; index < 1; index--) {
            $('div[id="bluespell"][bluespell_Id="' + this.bluespellID + '"]').attr('style', 'top:' + this.loc_x + 'px;left:' + this.loc_y + 'px;transform:rotate(' + this.angle + 'deg)')

            await SleppPromiseAfter(70)



            if (this.loc_y >= window.innerWidth) {
                this.bluespellIsDead = true
            }
            if (this.loc_y <= 0) {
                this.bluespellIsDead = true
            }
            if (this.loc_x >= window.innerHeight - 230) {
                this.bluespellIsDead = true
            }
            if (this.loc_x <= 0) {
                this.bluespellIsDead = true
            }






            this.loc_x = this.loc_x + x_ArtışMiktarı;
            this.loc_y = this.loc_y + y_ArtışMiktarı;


            if (this.bluespellIsDead == true) {
                $('div[id="bluespell"][bluespell_Id="' + this.bluespellID + '"]').remove()
                break;
            }
        }
    }


    renderbluespell() {
        this.bluespellID = $('div[id="bluespell"]').each(function () { }).length + 1
        //var bluespell = '<div id="bluespell" ></div>'
        $('body').append('<div id="bluespell" bluespell_Id="' + this.bluespellID + '" ></div>')
        $('div[id="bluespell"][bluespell_Id="' + this.bluespellID + '"]').attr('style', "transform:rotate(" + this.angle + "deg)")
        this.blueSpellRenderer();
        this.BlueSpellIsHitTheMouse();
    }


    setCurrentLocation(loc_x, loc_y) {
        $('#bluespell').attr('style', 'top:' + this.loc_x + 'px;left:' + this.loc_y + 'px;')
    }

}

class Axe {
    loc_x = 0;
    loc_y = 0;
    angle_axe = 0;
    axeID = 0;
    axeIsDead = false;
    constructor(loc_x, loc_y, angle_axe) {
        this.loc_x = loc_x;
        this.loc_y = loc_y
        this.angle_axe = angle_axe;

    }
    AxeIsHitTheMouse = async _ => {
        for (let index = 0; index < 1; index--) {
            await SleppPromiseAfter(10)
            collasiondetecter(this.loc_x, this.loc_y, Last_Mouse_Position_Y, Last_Mouse_Position_X)
            if (this.axeIsDead == true) {
                break;
            }
        }
    }

    AxeRenderer = async _ => {
        var x_ArtışMiktarı = 1;
        var y_ArtışMiktarı = 1;
        x_ArtışMiktarı = x_ArtışMiktarı + Math.floor(Math.random() * (5 - (-5))) + (-5);
        y_ArtışMiktarı = y_ArtışMiktarı + Math.floor(Math.random() * (5 - (-5))) + (-5);

        for (let index = 0; index < 1; index--) {
            $('div[id="axe"][axe_Id="' + this.axeID + '"]').attr('style', 'top:' + this.loc_x + 'px;left:' + this.loc_y + 'px;transform:rotate(' + this.angle_axe + 'deg)')


            await SleppPromiseAfter(5)
            if (this.loc_y >= window.innerWidth) {
                this.axeIsDead = true
            }
            if (this.loc_y <= 0) {
                this.axeIsDead = true
            }
            if (this.loc_x >= window.innerHeight - 230) {
                this.axeIsDead = true
            }
            if (this.loc_x <= 0) {
                this.axeIsDead = true
            }

            this.loc_x = this.loc_x + x_ArtışMiktarı;
            this.loc_y = this.loc_y + y_ArtışMiktarı;

            this.angle_axe = this.angle_axe + 5


            if (this.axeIsDead == true) {
                $('div[id="axe"][axe_Id="' + this.axeID + '"]').remove()
                break;
            }
        }


    }
    renderAxe() {
        this.axeID = $('div[id="axe"]').each(function () { }).length + 1
        // var axe = '<div id="axe" ></div>'
        $('body').append('<div id="axe" axe_Id="' + this.axeID + '" ></div>')
        $('div[id="axe"][axe_Id="' + this.axeID + '"]').attr('style', 'top:' + this.loc_x + 'px;left:' + this.loc_y + 'px;transform:rotate(' + this.angle_axe + 'deg)')
        this.AxeRenderer();
    }
    setCurrentLocation(loc_x, loc_y) {
        $('#axe').attr('style', 'top:' + loc_x + 'px;left:' + loc_y + 'px;')
    }
}

var counter = 0;
var monster = new Monster();
let intervalID;
function s_top(Interval) {
    clearInterval(Interval);
}

var SpeelArray = []

$(document).ready(function () {
    monster.renderMonster();
    //monster.MonsterIsHitTheMouse();
    $('#btn-stop').click(function () {
        s_top(intervalID)
        monster.PauseMonster()
        var variable = '' + 
            '  <div class="modal cn" id="MenuModal" style="opacity : 0.8"> ' + 
            '                <div class="continue" id="ContinueButtonInModal">CONTINUE</div>' + 
            '            </div>' + 
            ''; 
            mainthemesound.pause();
            mainthemesound.currentTime=0;
            startsound.play()
            startsound.currentSrc
        $('body').append(variable)

        $('#ContinueButtonInModal').click(function(){
            $('#MenuModal').remove();
            welcomesound.play();
            welcomesound.currentTime=0;
            startsound.pause();
            startsound.currentTime=0;
            mainthemesound.play();
            mainthemesound.currentSrc;
            monster.DisPauseMonster()
            intervalID = setInterval(function () {
                //counter2 = counter2 + 1
    
    
                $('#timer').html(counter)
    
    
                counter = counter + 1
                if (counter % 3 == 1) {
                    var axe = new Axe(monster.getLocX(), monster.getLocY(), (counter - 1) * 30);
                    axe.renderAxe();
                    axe.AxeIsHitTheMouse();
                }
                if (counter % 10 == 0) {
                    var Açı = 30;
                    for (var i = 0; i < 12; i++) {
                        var spell = new Spell(monster.getLocX() + (i * 10), monster.getLocY(), Açı);
                        SpeelArray.push(spell)
                        spell
                        spell.renderspell();
                        Açı = Açı + 30;
                    }
                    this.axeIsDead == true;
                }
                else if (counter % 16 == 0) {
                    var Açı = 30;
                    for (var i = 0; i < 12; i++) {
                        var bluespell = new blueSpell(monster.getLocX() + (i * 20), monster.getLocY(), Açı);
                        bluespell.renderbluespell();
                        Açı = Açı + 30;
                    }
                }
            }, 1000);
        })
    })
    $('#btn-restart').click(function () {
        document.location.reload(true)
        monster.resetMonster()

        counter = 0;
    })



    $("#StartButtonInModal").click(function () {
        mainthemesound.play();
        mainthemesound.currentSrc;
        $('#MenuModal').each(function () {
            $(this).remove();
        })
        monster.DisPauseMonster()
        intervalID = setInterval(function () {
            //counter2 = counter2 + 1


            $('#timer').html(counter)


            counter = counter + 1
            if (counter % 3 == 1) {
                var axe = new Axe(monster.getLocX(), monster.getLocY(), (counter - 1) * 30);
                axesound.play();
                axesound.currentTime=0;
                axe.renderAxe();
                axe.AxeIsHitTheMouse();
            }
            if (counter % 10 == 0) {
                var Açı = 30;
                for (var i = 0; i < 12; i++) {
                    var spell = new Spell(monster.getLocX() + (i * 10), monster.getLocY(), Açı);
                    SpeelArray.push(spell)
                    spellsound.play()
                    spellsound.currentTime=0
                    spell.renderspell();
                    Açı = Açı + 30;
                }
                this.axeIsDead == true;
            }
            else if (counter % 16 == 0) {
                var Açı = 30;
                for (var i = 0; i < 12; i++) {
                    var bluespell = new blueSpell(monster.getLocX() + (i * 20), monster.getLocY(), Açı);
                    bluespellsound.play();
                    bluespellsound.currentTime=0
                    bluespell.renderbluespell();
                    Açı = Açı + 30;
                }
            }
        }, 1000);

    })

})

function collasiondetecter(x1, y1,
    x3, y3) {
    let x2 = x1 + 50;
    let y2 = y1 + 50;
    let x4 = x3 + 50;
    let y4 = y3 + 50;
    if (!(x2 <= x3 || x4 <= x1 || y2 <= y3 || y4 <= y1)) {
        monster.killMonster();    
        laughsound.play()
        laughsound.currentSrc    
        s_top(intervalID)
        setTimeout(30000)
        var variable2 = '' + 
        ' <div class="modal cn" id="MenuModal">' + 
        '                <div class="gameover inner " id="GameoverButtonInModal">GAME OVER</div>'  +
        '                <div class="score" id="GameoverButtonInModal">SCORE :</div>' + this.counter + 
        '                <div class="start-game1" id="StartButtonInModal" onclick="document.location.reload(true)">Restrat</div>' + 
        '            </div>' + 
        '';
        mainthemesound.pause();
        mainthemesound.currentTime=0;
        restartsound.play();
        restartsound.currentSrc;
        $('body').append(variable2)
       //document.location.reload(true);

    }
}

